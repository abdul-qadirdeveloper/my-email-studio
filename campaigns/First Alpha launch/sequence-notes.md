# Sequence notes: First Release launch, emails 1 to 4

These notes go with the drafts in `emails/`. They cover E1 to E4 from `plan.md` (weeks 1 and 2). E5 to E8 and the automatic emails T1 and T2 are still to write.

**Goal of the full campaign:** 300 paid subscriptions from the 2,000-person waitlist by Sunday 29 November 2026.
**Goal of these four emails:** get people to download the app, log a first 10-minute walk, and start thinking about a subscription.

## Overview

| # | File | Main subject | Purpose | Send | Main button | Who gets it |
|---|---|---|---|---|---|---|
| 1 | `01-its-here.md` | YoYo40+ is here. Your first step is ready | Announce the launch and get the download | Mon 2 Nov | Download YoYo40+ | Everyone on the waitlist |
| 2 | `02-first-10-minutes.md` | Your first 10 minutes, tonight | Turn a download (or a maybe) into a first walk | Thu 5 Nov | Start your first walk | Anyone who hasn't logged a first walk |
| 3 | `03-made-for-you.md` | Where do you start? Pick your path | Show each group where to start | Mon 9 Nov | Open YoYo40+ | Everyone not yet subscribed |
| 4 | `04-why-i-built-it.md` | Why I built YoYo40+ | A personal reason to stay, and a gentle ask to subscribe | Thu 12 Nov | Try premium free for a month | Everyone not yet subscribed |

**The story across the four:** "It's here" → "Here's how to start tonight" → "Here's the path for you" → "Here's why it matters to us." Each email asks for one small step. The ask grows gently, from download to first walk to subscription, with no pressure.

## Subject line options

Each draft uses option 1. All are 50 characters or fewer.

| # | Option 1 (in draft) | Option 2 | Option 3 |
|---|---|---|---|
| 1 | YoYo40+ is here. Your first step is ready | It's here: 10 minutes a day, no gym needed | {{first_name}}, YoYo40+ is live |
| 2 | Your first 10 minutes, tonight | One walk. 10 minutes. That's day one. | Ready for your first small step? |
| 3 | Where do you start? Pick your path | New, on and off, or every day? | A way in that fits you |
| 4 | Why I built YoYo40+ | A short note from AQMA | Your second half, strong |

## Group openings for E1

The plan asks for a different first paragraph per group in E1. The draft uses the Group A line, which the plan also says to use for anyone without a tag. Swap in these if group tags are ready:

- **Group A (default):** You don't need to be fit to start. Your first walk is just 10 minutes. That's it.
- **Group B:** Keep it small enough to stick. One small step a day, built around a busy week.
- **Group C:** You already move every day. YoYo40+ adds strength and mobility to what you do, and tracks it in one place.

**About E3:** the plan asks for three separate versions. Because group tags aren't confirmed yet, this draft is one email with a short section for each group, so it works for everyone. If the tags are ready by 9 November, we can split it into three versions.

## Flow

```
[Waitlist] --> E1 "It's here" (Mon 2 Nov)
                 |
         Logged first walk? --Yes--> skip E2
                 |
                 No
                 v
               E2 "Your first 10 minutes" (Thu 5 Nov)
                 |
                 v
               E3 "Pick your path" (Mon 9 Nov)
                 |
                 v
               E4 "Why I built YoYo40+" (Thu 12 Nov)
                 |
                 v
          continue to E5 (Mon 16 Nov)

At any point: subscribes --> [EXIT] --> T1 "Welcome, you're in"
At any point: downloads, no subscription after 3 days --> T2 also sends
```

## Rules for who gets what

- **Exit:** anyone who starts a paid subscription leaves the launch emails right away and gets T1.
- **Skip E2:** anyone who has already logged a first walk.
- **Didn't open E1:** if week 1 is well under 120 subscriptions by 8 Nov, resend E1 to non-openers with subject option 2 (see `plan.md`, part 9).
- **Don't send to:** anyone who unsubscribed, or any address that bounced.
- **Same day as T2:** if T2 is due on the same day as a launch email, send the launch email the next day so nobody gets two in one day.
- **No re-entry:** this is a one-time launch sequence.

## A/B tests

1. **E1 subject line.** Option 1 against option 2, 50/50 split on the first 20% of the list. Send the winner (higher opens after 4 hours) to the rest.
2. **E2 button text.** "Start your first walk" against "Take your 10-minute walk". Measure by first walks logged, not clicks.
3. **E4 sender name.** "AQMA from YoYo40+" against "YoYo40+". Measure opens and subscriptions.

## What to track

- **Main measure:** paid subscriptions from the waitlist. Week 1 target is 120 and week 2 is 80 (`plan.md`, part 7).
- **Per email:** opens, clicks and unsubscribes, split by group.
- **Along the way:** downloads from the tracked link, and first walks logged.
- **Review:** a short check every Monday before that day's email.

## Before these can go out

- [x] AQMA gives the reason for building the app (written into E4 from AQMA's notes).
- [ ] AQMA reads E4 and confirms every "I" sentence is true.
- [ ] Each draft checked with `/marketing:brand-review`.
- [x] E4: price and plans added. Basic is free. Premium is free for the first month, then $10 a year or $30 once for lifetime access.
- [x] E4: the free month renews automatically at $10 a year unless cancelled. E4 says so plainly.
- [x] E4: the starting questions cover health conditions (diabetes, heart, blood pressure, cholesterol). E4 describes them only as "a few questions about where you're starting from" (see `.claude/rules/emails.md`, part 6).
- [ ] Before launch: get privacy advice on collecting health answers in the app. Emails say nothing about privacy until then.
- [ ] E3: confirm daily walking goals are designed for beginners and can be adjusted, and that the app can track strength and mobility alongside walks.
- [ ] E2: confirm how a walk gets logged (automatic or a tap), so "Make sure it's logged" matches the app.
- [ ] E1: confirm the app is live in both stores before 2 Nov, so "Today the app is live" is true.
- [ ] Tracked links set up. Every draft uses `https://yoyo40plus.example/app` for now.
- [ ] Founder signs off each email.
- [ ] Set up in the email tool: create the flow, set the waitlist as the trigger, add the four emails on their dates, add the exit and skip rules above, and turn on tracking.

Nothing in this folder is sent. Sending happens in the email tool only.
