# Contributing to Open Source Launchpad

Thanks for being here. This repository is part of **GITHUB Community GITAM**.

**If this is your first ever pull request:** add yourself to the
[contributor wall](wall.html). It is the gentlest possible start and it walks
you through every step.

---

## What this project is

A small static website that teaches people to make their first open source
contribution. Plain HTML, CSS, and a little vanilla JavaScript.

**Tech stack:** HTML, CSS, vanilla JS. No framework, no build step, no
dependencies. Python 3 is used only by one helper script, and only in CI.

---

## Setting up locally

**You will need:** Git, a text editor, and Python 3 (which macOS and Linux
already have, and which you may already have on Windows).

```bash
# 1. Fork this repo on GitHub (button at the top right), then:
git clone https://github.com/YOUR-USERNAME/open-source-launchpad.git
cd open-source-launchpad

# 2. Point at the original repo so you can stay up to date
git remote add upstream https://github.com/pushpam2404/open-source-launchpad.git

# 3. Start a local server
python3 -m http.server 8000

# 4. Open http://localhost:8000
```

Edit a file, save, refresh the browser. That is the whole loop.

> **Why not just double-click `index.html`?** Every page works that way except
> the contributor wall, which fetches a JSON file. Browsers block that from a
> `file://` page, so the wall would show an error message instead of cards.

If any of this does not work, that is a bug in *our* instructions — open an
issue and tell us where it broke.

---

## The contribution flow

### 1. Find an issue

Browse the [open issues](../../issues):

| Label | Means |
|---|---|
| `good first issue` | No knowledge of the codebase needed |
| `difficulty: beginner` | One file, a clear before and after |
| `difficulty: intermediate` | Some JavaScript, or several files |
| `difficulty: advanced` | Involves a design or CI decision |

### 2. Claim it — this step is not optional

Comment `/claim` on the issue. A bot assigns it to you within seconds.

> **PRs on unclaimed issues are closed.** Not to be harsh — without it, six
> people do the same task and five of them waste an evening.

You may hold **2 issues at a time**. Comment `/unclaim` to release one; that is
completely fine. Claims go stale after 5 days of no activity.

*Adding yourself to the contributor wall does not need an issue.* It is the
welcome task, not tracked work.

### 3. Branch

```bash
git checkout main
git pull upstream main
git checkout -b feat/short-description
```

| Prefix | For | Example |
|---|---|---|
| `feat/` | Something new | `feat/dark-mode-toggle` |
| `fix/` | Something broken | `fix/footer-link-404` |
| `docs/` | Documentation | `docs/setup-instructions` |
| `ci/` | Workflows | `ci/add-link-checker` |

### 4. Make the change

- Change **only** what the issue asks for
- **Colours go in `css/theme.css`** as variables, never hard-coded in a
  component. And set the dark-theme value too — it is directly below
- **Test at 375px wide.** Open your browser's device toolbar. Most of our
  visitors are on a phone
- **Test both themes.** Click the ☾ button in the header
- **Keyboard test:** press Tab through your change. You must be able to see
  where the focus is, and reach everything you can click

**Commit messages:**

```
fix: footer link pointed at a page that no longer exists

Closes #42
```

Format: `<type>: <what changed, lowercase, present tense>` where type is
`feat`, `fix`, `docs`, `ci`, `refactor`, or `chore`.

### 5. Check before you push

```bash
python3 scripts/build_contributors.py --check    # if you touched contributors/
```

And open the page. Actually look at it. In both themes.

### 6. Open the pull request

```bash
git push origin feat/short-description
```

**Your description must contain `Closes #<issue-number>`.**

**Attach a screenshot.** For anything visual this is the single most useful
thing you can do — a reviewer cannot see your screen, and a before/after pair
gets you merged faster than any amount of explanation.

### 7. Review

A maintainer responds within **48 hours**:

- **Approved and merged** — done
- **Changes requested** — we point at exact lines. Push more commits to the
  same branch; the PR updates itself. This is normal and happens to experienced
  developers constantly. It is not criticism
- **Closed** — only if the PR breaks a rule below, and we will say which one

---

## Quality standards

### Automatically rejected

Marked `invalid` / `spam` and closed without review:

- Whitespace, comma, or formatting-only changes to Markdown files
- Adding your name or a link to `README.md` without being asked to
- AI-generated code pasted in without being read, that breaks the page or
  fails CI
- PRs that duplicate an already-open PR
- Reformatting or "tidying" code nobody asked to change
- A PR with no linked issue

### Always welcome

- Fixing a genuine bug, however small
- Accessibility fixes — contrast, focus, alt text, keyboard navigation
- Rewriting confusing wording so it is actually clear
- Telling us our setup instructions are wrong

### The 48-hour maintainer commitment

We acknowledge every PR within 48 hours. If yours has been sitting longer, ping
and say so in a comment on the pull request — you are not being annoying, we
dropped the ball.

---

## House style

**HTML**
- Semantic elements: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`
- Two-space indentation
- Every `<img>` needs `alt` — describe what it shows, or `alt=""` if it is
  purely decorative
- Headings nest properly. Do not jump from `<h2>` to `<h4>`

**CSS**
- Colours and spacing come from variables in `theme.css`. No hex codes in
  components
- Mobile-first: write the small-screen style, then add `@media (min-width: …)`
- Class names are lowercase with hyphens: `.contributor-card__name`

**JavaScript**
- Vanilla only. No libraries, no frameworks, no build step
- Wrap it in an IIFE and use `"use strict"`, as the existing files do
- Wrap every `localStorage` access in `try`/`catch` — it throws in private
  browsing
- The page must still work with JavaScript switched off, except the wall

---

## Getting unstuck

**Everyone gets stuck. It is not a sign that you do not belong here.**

1. Re-read the issue — the answer is often in "How to verify locally"
2. Look at how an existing page or component does the same thing
3. Comment on the issue and tag the mentor listed on it
4. Say what you have already tried — that alone often surfaces the answer
5. If your community runs a PR Debug Clinic, bring your branch along and ask for help there

```bash
git status                       # what state am I in?
git log --oneline -5             # what did I commit?
git pull upstream main           # get the latest changes
git diff                         # what have I changed but not committed?
git restore <file>               # undo uncommitted changes to a file
```

---

## Code of conduct

By participating you agree to the [Code of Conduct](CODE_OF_CONDUCT.md).
In short: be kind, assume good faith, and remember that the person asking a
"basic" question is exactly who this project is for.

---

## Maintainers

| Name | GitHub | Looks after |
|---|---|---|
| Pushpam | [@pushpam2404](https://github.com/pushpam2404) | Everything |

**Domain:** OS & DevX
