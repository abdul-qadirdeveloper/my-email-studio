---
name: personalize
description: Write a version of each campaign email for every lead group in leads/leads.csv. Use when a campaign's emails are final and you want one copy per group.
argument-hint: "[campaign folder]"
context: fork
allowed-tools: Read, Glob, Grep, Write
---

# Personalize a campaign for each lead group

Campaign folder: $ARGUMENTS

You take the final emails in one campaign and write one version of each email for each lead group. You only draft and save files. Never send email or call any sending service.

## Step 1. Find the campaign folder

- If no campaign folder was given above, stop. Use Glob on `campaigns/*/` and reply with a short list of the campaign folders that exist, then ask which one to use. Write nothing.
- The folder can be given as a name (`First Alpha launch`) or a path (`campaigns/First Alpha launch`). Both mean `campaigns/<name>/`.
- If that folder doesn't exist, or it has no `emails/*.md` files, stop. Say so and list the campaign folders that exist. Write nothing.

## Step 2. Read what you need

1. `brand/voice.md` and `.claude/rules/emails.md`. Every version must follow both.
2. `leads/leads.csv`. Read the `group` column only, to get the list of groups. Skip rows with no `consent` value. Don't copy names or email addresses into any email.
3. The campaign's `plan.md`, if there is one. Use its group table and "By group" messages to understand each group.
4. Every file in `<campaign folder>/emails/*.md`. Don't read or copy files from `groups/`.

If the plan doesn't describe a group, use these:

- **health-curious**: not exercising yet. Interested, but unsure where to start. Needs reassurance that they don't need to be fit to begin.
- **casual-movers**: move now and then, with no steady routine. Have started and stopped before. Need something small enough to stick.
- **daily-exercisers**: already move every day. Want strength, mobility and simple tracking to add to what they already do.

## Step 3. Write each version

For each group, and for each email, make a copy that changes only two things:

1. **The opening line.** The first line after `Hi {{first_name}},`. Rewrite it so it speaks to that group.
2. **One example.** Pick one example in the body (such as a place to walk, a moment in the day, or what a first step looks like) and swap it for one that fits that group. Change one example only.

Keep everything else exactly the same, word for word:

- The `Subject:` and `Preview:` lines.
- The structure: same paragraphs, lists and order.
- The one main link, including its button text and address.
- The sign-off, the slogan, both P.S. lines and the footer.
- Every placeholder, such as `{{first_name}}`, `{{company_address}}` and `{{unsubscribe_url}}`.

Before saving, check each new opening line and example against `brand/voice.md` part 4 and `.claude/rules/emails.md` part 6:

- No promised results, dates, numbers or medical outcomes.
- No naming a health condition, even for health-curious readers.
- No shaming or fear. For example, never suggest casual movers have failed before.
- Plain English, short sentences, "simple" not "easy", "10 minutes" in numerals.

## Step 4. Save the files

- Save each version to `<campaign folder>/groups/<group>/emails/<same file name>`. Use the group name exactly as it appears in `leads/leads.csv`.
- If a file already exists at that path, don't overwrite it. Skip it and count it as skipped.
- Never change, move or delete the original emails.

## Step 5. Reply with a short summary only

Reply with nothing else:

```
Wrote <number> files (<number> emails × <number> groups) in <campaign folder>/groups/.
<If any were skipped:> Skipped <number> files that already existed.

Example opening lines:
- health-curious: "<opening line from the first email>"
- casual-movers: "<opening line from the first email>"
- daily-exercisers: "<opening line from the first email>"
```
