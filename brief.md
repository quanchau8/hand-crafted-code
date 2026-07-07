# hand-crafted-code.com — Brief

Build a single-page marketing site for hand-crafted-code.com, a parody luxury brand that sells artisanal, hand-written software as a premium good. The joke works only if the site plays it completely straight — deadpan, aspirational, the tone of a natural-wine label or a heritage watch brand. Never wink at the camera. The reader should nod along seriously and only slowly realize it's absurd.

Stack: plain HTML + CSS + a little vanilla JS, no framework, no build step. Single index.html, one stylesheet is fine, JS inline or in one file. No external dependencies except a Google Font.

Look: genuinely high-end, not a joke site. Generous whitespace, a serif display face (Cormorant Garamond or similar), muted earth palette (bone, oak, ink, a little warm brass as accent). One tasteful hero image placeholder with a shaft of window light. Restrained motion at most — a slow fade-in, nothing flashy.

Sections, in order:

1. Hero: headline like "Code, the way it was meant to be written." Subhead about small-batch, human-placed semicolons. One CTA button that scrolls to the certificate generator.
2. Manifesto: justified serif prose about intention, feel, and the refusal to autocomplete. Earnest to the point of parody.
3. Our Process: 3–4 steps, straight-faced — sourcing developers who've never touched a copilot, resting the code overnight to let the logic settle, hand-signing the git blame, small-batch code review by candlelight.
4. Heritage Features: presented as selling points, not bugs — "Contains trace amounts of technical debt, as nature intended," a load-bearing global variable named after the developer's cat, a `// do not touch` function passed down through generations, terroir-driven variable naming (temp, tempFINAL, actualTemp_USE_THIS_ONE).
5. Pricing: three tiers, tastefully absurd prices. Bottom tier, a mid tier, and a top Reclaimed tier where the code is lovingly restored from a 2009 SourceForge project.
6. Certificate of Authenticity generator (the interactive centerpiece): visitor types a repository name and optionally a developer name, clicks a button, page renders an elegant framed certificate below. Certificate includes:
   - The repo name in an elegant serif
   - A line like "Hand-crafted by [developer name], by feel, without autocomplete"
   - A fake git blame signature line (plausible hash + name + date)
   - A randomly selected "heritage attribute" from a list in JS so re-runs feel unique
   - A serial number and issue date
   - Styled like a real certificate — border, seal, tasteful. Print-friendly layout (clean print stylesheet), no heavy libraries.
7. Footer: quiet, tasteful, a fake B-corp-style badge and a line of fine print with a dry joke in it.

Copy rules: tight and dry throughout. The humor is in the restraint — the site never admits it's kidding. No emoji.
