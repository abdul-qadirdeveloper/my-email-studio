// Review every email in a campaign folder with Claude Code, without anyone typing.
// Usage: node scripts/review.mjs campaigns/<campaign-folder>
// Saves the findings to review/findings.json.
// Exits with code 1 if any finding is high severity, so a pull request check can fail on it.

import { spawnSync } from "node:child_process";
import { existsSync, readFileSync, writeFileSync } from "node:fs";

const folder = process.argv[2];
if (!folder) {
  console.error("Usage: node scripts/review.mjs campaigns/<campaign-folder>");
  process.exit(2);
}
if (!existsSync(folder)) {
  console.error(`Folder not found: ${folder}`);
  process.exit(2);
}

const schema = readFileSync("review/findings.schema.json", "utf8");
let prompt =
  `Review every email in ${folder} against brand/voice.md and .claude/rules/emails.md. ` +
  `Report only real problems.`;

// If the last review was of this same folder, show its findings so this review doesn't repeat itself.
const findingsFile = "review/findings.json";
if (existsSync(findingsFile)) {
  try {
    const last = JSON.parse(readFileSync(findingsFile, "utf8"));
    if (last.folder === folder && Array.isArray(last.findings) && last.findings.length > 0) {
      prompt +=
        `\n\nThese are findings from the last review. Report only problems that are new or still not fixed. ` +
        `Don't repeat ones that have been fixed.\n\n${JSON.stringify(last.findings, null, 2)}`;
      console.log(`Including ${last.findings.length} finding(s) from the last review of ${folder}.`);
    }
  } catch {
    console.log(`Could not read ${findingsFile}, so reviewing from scratch.`);
  }
}

// Pass the arguments as a list, not through a shell, so quotes in the prompt or schema are safe.
const run = spawnSync(
  "claude",
  [
    "-p", prompt,
    "--output-format", "json",
    "--json-schema", schema,
    "--allowedTools", "Read,Glob,Grep",
  ],
  { encoding: "utf8", maxBuffer: 50 * 1024 * 1024 }
);

if (run.error) {
  console.error(`Could not start claude: ${run.error.message}`);
  process.exit(2);
}
if (run.status !== 0) {
  console.error(`claude exited with code ${run.status}`);
  console.error(run.stderr || run.stdout);
  process.exit(2);
}

// The output is either one result object, or a list whose last item is the result.
let output;
try {
  output = JSON.parse(run.stdout);
} catch {
  console.error("claude did not return valid JSON:");
  console.error(run.stdout);
  process.exit(2);
}
const result = Array.isArray(output) ? output[output.length - 1] : output;
const findings = result?.structured_output?.findings;
if (!Array.isArray(findings)) {
  console.error("No structured_output.findings in the result:");
  console.error(JSON.stringify(result, null, 2));
  process.exit(2);
}

writeFileSync(findingsFile, JSON.stringify({ folder, findings }, null, 2) + "\n");

const count = (level) => findings.filter((f) => f.severity === level).length;
const high = count("high");
console.log(
  `${folder}: ${findings.length} finding(s): ${high} high, ${count("medium")} medium, ${count("low")} low. ` +
  `Saved to review/findings.json.`
);

process.exit(high > 0 ? 1 : 0);
