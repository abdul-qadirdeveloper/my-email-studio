# Skills I chose

Searched skills.sh on 2026-10-26 with `npx skills find` for "email marketing", "email sequence", "campaign plan" and "resend". Star counts come from GitHub on the same day. Nothing is installed yet.

## Use these

**1. For writing campaigns: `anthropics/knowledge-work-plugins`** (33,122 stars, updated today)
- Published by Anthropic, the company that makes Claude, under its official `anthropics` GitHub organization.
- Has the two skills I need for planning and writing: `campaign-plan` and `email-sequence`. Both are in its `marketing/skills/` folder.
- Install counts on skills.sh are modest (about 3K each), but the publisher and the repo's activity matter more than popularity.

**2. For sending email: `resend/resend-skills`** (206 stars, updated 2026-10-17)
- Published by Resend, the email sending service, under its official `resend` organization. A skill written by the company that runs the API is the most likely to match how the API actually works.
- The main skill is `resend` (23K installs). The same repo also has `resend-cli`, `react-email` and `email-best-practices`, which cover the design and deliverability side.
- Resend also runs `resend/react-email` (19,878 stars), so the company has a proven track record on GitHub.

## Avoid these

**1. `mbfinotti/sales-skills`** (for example `cold-email-deliverability` and `sales-outbound-sequence`)
- Each skill claims about 25K installs, but the whole repo has only **3 stars**. The account behind it has 1 follower. When installs are that far ahead of stars, the numbers are probably inflated or automated, not real people choosing it.
- It is also aimed at cold sales outreach, not marketing to people who signed up.

**2. `claude-office-skills/skills`** (`email-marketing`, 540 stars)
- The name sounds official, but it is **not Anthropic**. It is an unrelated organization using "Claude" in its name, and that alone is a reason to be careful.
- It hasn't been updated since **2026-01-31**, about nine months ago, so nobody seems to be maintaining it.

(A runner-up: `caffeinelabs/skills@extension-email-marketing` has the same warning sign, with 28K installs but only 2 stars.)

## How I decided

Check these three things before installing any skill:

1. **Who publishes it.** Is the GitHub owner the real company (for example `anthropics` or `resend`), or someone whose name only *sounds* official? Click through to the GitHub profile; don't trust the skill's name.
2. **Whether the numbers agree.** Compare GitHub stars, skills.sh installs and the last update date. Lots of installs with almost no stars is a red flag, and so is a repo nobody has touched in months.
3. **What it actually tells Claude to do.** Open the `SKILL.md` and any scripts on GitHub and read them before running `npx skills add`. A skill is a set of instructions Claude will follow. Look for anything that runs shell commands, downloads files, or sends data (like API keys or contact lists) somewhere you didn't expect.
