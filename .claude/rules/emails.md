---
paths:
  - "campaigns/**/emails/*.md"
---

# Rules for email files

These rules apply to every email file in any campaign's `emails/` folder. Each email file must follow all of them.

## 1. Subject and preview come first

- The first line is `Subject: ...`. The subject is 50 characters or fewer.
- The second line is `Preview: ...`. The preview is 90 characters or fewer.
- Count only the words after `Subject: ` or `Preview: `.

## 2. Greet the reader by first name

- Greet the reader with `{{first_name}}`, for example "Hi {{first_name}},".
- Leave `{{first_name}}` exactly as written. The email tool fills it in later.

## 3. One main link only

- Each email has exactly one main link, written like this:
  `[Button text](https://yoyo40plus.example/app)`
- Change the button text to fit the email. Keep the address the same.
- Don't add other links in the body.

## 4. End with the sign-off, then the footer

- Use our sign-off from `brand/voice.md` (part 5): the closing line, the founder's name and title, "The YoYo40+ Team", the slogan, then the two-line P.S.
- After the sign-off, add this two-line footer exactly. Write it as plain text, not inside a code block:

You're getting this because you joined the YoYo40+ waitlist.
YoYo40+, {{company_address}} · Unsubscribe: {{unsubscribe_url}}

- Leave `{{company_address}}` and `{{unsubscribe_url}}` exactly as written.

## 5. Keep wording the same across emails

- Write "10 minutes" and "10-minute" in numerals, never "Ten minutes", even at the start of a sentence or in a subject line.
- Say "simple", not "easy". What is easy differs from person to person.
- The P.S. gives one small step only, not two.
- Use wording that works for both UK and US readers (for example, avoid "car park" or "parking lot"). The doctor line stays word for word.
