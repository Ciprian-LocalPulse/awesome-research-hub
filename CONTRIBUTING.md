# Contributing to awesome-research-hub

Thank you for taking the time to contribute! 🎉  
This repository grows because people like you care about the quality of shared knowledge.

---

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [What We Accept](#what-we-accept)
- [What We Don't Accept](#what-we-dont-accept)
- [How to Add a Resource](#how-to-add-a-resource)
- [How to Report an Issue](#how-to-report-an-issue)
- [Pull Request Process](#pull-request-process)
- [Quality Bar](#quality-bar)
- [Style Guide](#style-guide)

---

## Code of Conduct

By participating in this project, you agree to uphold our [Code of Conduct](CODE_OF_CONDUCT.md).  
Be kind. Be precise. Be honest about quality.

---

## What We Accept

✅ High-quality tutorials, papers, courses, and tools  
✅ Free resources (preferred) or clearly marked paid ones  
✅ Resources that have withstood time or are genuinely cutting-edge  
✅ Bug fixes, broken link fixes, typo corrections  
✅ New sections if a gap is clearly significant  
✅ Translations (open a discussion first)

---

## What We Don't Accept

❌ Self-promotion without exceptional quality evidence  
❌ Paywalled content without a clear free tier or preview  
❌ Duplicate resources already listed  
❌ Content that is AI-generated without human expert review  
❌ Resources that are outdated and no longer maintained (unless historically significant)

---

## How to Add a Resource

### 1. Fork the repository

```bash
git clone https://github.com/your-username/awesome-research-hub
cd awesome-research-hub
git checkout -b add/resource-name
```

### 2. Find the right section

Read the existing structure in `README.md`. Add to the most specific section that fits. If nothing fits, add a comment in your PR explaining why a new section is needed.

### 3. Use the correct format

```markdown
- 📘 [Title](https://url.com) — One sentence: what it is and why it earns its place here.
```

**Emoji guide:**
| Emoji | Use For |
|-------|---------|
| 📘 | Books (free) |
| 💰 | Books (paid) |
| 🎓 | Courses |
| 🔗 | Tools / Repos |
| 📄 | Papers |
| 🔬 | Research / Labs |
| 🧪 | Interactive / Playground |
| 🚀 | Frameworks / Libraries |
| 📺 | Video series |

### 4. Check links work

```bash
npm install
npm run check-links
```

### 5. Submit your Pull Request

Use the PR template. Fill in all fields.

---

## Pull Request Process

1. PRs are reviewed within **72 hours** on business days
2. At least **one maintainer approval** required to merge
3. Automated link checker must pass
4. Keep PRs focused — one section or one resource family per PR
5. If your PR adds more than 10 resources at once, split it

---

## Quality Bar

A resource earns its place if it scores **yes** on at least 2 of these:

- [ ] Is this the single best explanation of this concept you've found?
- [ ] Would a senior engineer at a top company recommend this to a junior?
- [ ] Does this contain something genuinely hard to find elsewhere?
- [ ] Has it withstood the test of time, or is it genuinely state-of-the-art?
- [ ] Does it include working code, exercises, or hands-on components?

---

## Style Guide

- Write descriptions in **English** only (international audience)
- Keep descriptions to **one sentence** — force yourself to say what makes it special
- Start descriptions with a **noun or action**, not "This is a..."
- Link to the **most stable URL** (prefer official docs, arxiv, GitHub over blogs)
- Alphabetize within subsections when order doesn't imply priority
- Verify the resource is **publicly accessible** (no login required for the main content)

---

## Reporting Issues

Use GitHub Issues with one of the provided templates:

- 🔗 **Broken Link** — URL returns 404 or has moved
- 💡 **Resource Suggestion** — You found something great we're missing
- 🐛 **Content Error** — Something is factually wrong
- 📁 **New Section Proposal** — You see a significant gap

---

_Thank you for helping make this the best technical knowledge repository on GitHub._
