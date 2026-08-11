# Apply Taste Skill — Happy Tummy Build Prompt

## Objective
Install and apply the Taste Skill design framework (github.com/Leonxlnx/taste-skill) while building the Happy Tummy website, so the output reads as intentional and premium rather than generic AI-template output.

## Setup — run once at the start of the session
```
npx skills add https://github.com/Leonxlnx/taste-skill --skill "design-taste-frontend"
npx skills add https://github.com/Leonxlnx/taste-skill --skill "high-end-visual-design"
```

This installs two skills:
- **design-taste-frontend** (taste-skill v2) — the general anti-slop foundation: layout variance, typography, motion, and spacing discipline
- **high-end-visual-design** (the "soft" skill) — polished, calm, expensive UI direction: softer contrast, generous whitespace, premium fonts, spring-based motion

## How this fits with the existing project docs
Happy Tummy's brand direction is already defined in `design.md`, `requirements.md`, `techstack.md`, and `menu.md`. Use the installed skills to raise the **execution quality** of that direction — they should not override the established palette (cream / near-black / orange / green / deep red), typography (Caveat or Kalam for headings, Poppins or Inter for body), or content structure already specified. Treat the skills as "how to build it well" and `design.md` as "what it should look and feel like."

## Suggested dial settings (design-taste-frontend only — adjust if it looks off)
- `DESIGN_VARIANCE`: 4–5/10 — distinctive and intentional, but a menu-driven food site needs to stay scannable; don't go fully asymmetric/experimental
- `MOTION_INTENSITY`: 3/10 — matches design.md's "subtle only" direction: fade/slide-up on scroll, nothing aggressive or gimmicky
- `VISUAL_DENSITY`: 3/10 — generous whitespace, not a dense dashboard; let the food photography breathe

## Instructions for Claude Code
1. Install both skills with the commands above before writing any component code
2. Read `requirements.md`, `techstack.md`, `design.md`, and `menu.md` as the brief
3. Apply the installed skills' layout, typography, motion, and spacing rules on top of that brief — sharpen execution (hierarchy, rhythm, restraint), don't replace the brand direction
4. Pay particular attention to:
   - The **menu card grid** — this is the section most likely to look like generic boilerplate if built without care
   - The **hero section's** typography pairing and first impression
   - The **transition between the cream sections and the near-black menu/gallery sections** — that contrast is core to the "classy" feel and shouldn't get smoothed into one flat palette
5. Avoid over-animating — the brief calls for calm and premium, not flashy

## Skip
**redesign-existing-projects** — that skill is for auditing and fixing an already-built codebase. Not relevant here since this is a greenfield build.
