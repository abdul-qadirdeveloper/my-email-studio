// PreToolUse guard for the Resend MCP tools.
// Exit 0 allows the call. Exit 2 blocks it, and the message on stderr goes back to Claude.

const ALWAYS_BLOCKED = new Set([
  "send-broadcast",
  "create-automation",
  "send-inbox-draft",
  "send-new-inbox-email",
]);
const CHECKED = new Set(["send-email", "send-batch-emails"]);

function block(reason) {
  process.stderr.write(`Send guard: ${reason}\n`);
  process.exit(2);
}

let raw = "";
for await (const chunk of process.stdin) raw += chunk;

let call;
try {
  call = JSON.parse(raw);
} catch {
  block("could not read the tool call, so it was blocked to be safe.");
}

// "mcp__resend__send-email" -> "send-email"
const tool = String(call.tool_name ?? "").replace(/^mcp__resend__/, "");
const input = call.tool_input ?? {};

if (ALWAYS_BLOCKED.has(tool)) {
  block(`${tool} is not allowed because it can reach whole lists of people.`);
}
if (!CHECKED.has(tool)) process.exit(0);

const myEmail = (process.env.MY_EMAIL ?? "").trim().toLowerCase();

// Accepts a string ("a@x.com, Name <b@y.com>") or an array of them.
function addresses(value) {
  if (value == null) return [];
  const list = Array.isArray(value) ? value : String(value).split(",");
  return list
    .flatMap((v) => (Array.isArray(v) ? v : [v]))
    .map((v) => String(v).trim())
    .filter(Boolean)
    .map((v) => (v.match(/<([^>]+)>/)?.[1] ?? v).trim().toLowerCase());
}

const emails = tool === "send-batch-emails" ? input.emails ?? input.batch ?? [] : [input];
if (!Array.isArray(emails) || emails.length === 0) {
  block(`${tool} had no emails to check, so it was blocked to be safe.`);
}

const all = emails.flatMap((e) => [
  ...addresses(e?.to),
  ...addresses(e?.cc),
  ...addresses(e?.bcc),
]);
if (all.length === 0) block("no recipient address was found, so the call was blocked to be safe.");

const allowed = (a) => a.endsWith("@resend.dev") || (myEmail !== "" && a === myEmail);
const bad = all.filter((a) => !allowed(a));
if (bad.length > 0) {
  block(`${bad.join(", ")} is not allowed. Only @resend.dev test addresses and your own email (MY_EMAIL) may receive email.`);
}

process.exit(0);
