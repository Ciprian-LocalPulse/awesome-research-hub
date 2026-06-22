# 📄 How to Read Research Papers

> A practical guide for engineers who didn't go to grad school — and grad students who want to read faster.

---

## The Three-Pass Method

Don't read a paper front to back on your first pass. That's how people give up.

### Pass 1: The Survey (10 minutes)
Goal: Decide if the paper is worth reading fully.

1. Read the **title** and **abstract**
2. Read the **introduction** (first page only)
3. Read all **section headings**
4. Read the **conclusion**
5. Glance at **figures and tables**
6. Skim the **references** — do you recognize any? Do they suggest further reading?

After Pass 1 you should know: what problem this paper solves, what approach it takes, what the main claim is.

---

### Pass 2: The Read (1–2 hours)
Goal: Understand the content, not every proof.

- Read the full paper **except** for math-heavy proofs and appendices
- Take notes in the margins (physical or digital)
- Mark every claim you don't understand — come back, don't stop
- For every figure: before reading the caption, describe what you see. Then read the caption. Disagreement = re-read.
- For every table: understand what the rows, columns, and metrics mean before reading the numbers

After Pass 2 you should be able to: summarize the paper in 3 sentences, name the key insight, and describe what experiment validated it.

---

### Pass 3: The Deep Dive (4–5 hours, optional)
Goal: Fully reproduce the result in your head (or actually reproduce it).

- Work through all proofs
- Identify assumptions — are they realistic for your problem?
- Find weaknesses the authors may have glossed over
- Read 3+ papers from the references
- Search for papers that **cite** this one (use Semantic Scholar or Google Scholar "Cited by")

---

## How to Take Notes

Use this template per paper:

```
## Paper Title (Year) — Authors

**One-line summary:** 

**Problem:** What gap does this fill?

**Approach:** How do they solve it?

**Key insight:** The one idea that makes this work

**Evidence:** What experiment/proof validates the claim?

**Limitations:** What does this NOT handle?

**Follow-up reading:**
- [ ] Paper A (cited by this)
- [ ] Paper B (cites this)

**My take:** Would I apply this? Where? What would I build on top of it?
```

---

## Finding Papers

| Tool | Best For |
|------|----------|
| [arXiv](https://arxiv.org) | Preprints (CS, Physics, Math, Stats, Biology) |
| [Semantic Scholar](https://www.semanticscholar.org) | AI-assisted search, citation graphs |
| [Google Scholar](https://scholar.google.com) | Broad academic search, "Cited by" tracking |
| [Connected Papers](https://www.connectedpapers.com) | Visualize a paper's neighborhood |
| [Papers With Code](https://paperswithcode.com) | Any ML paper + its official implementation |
| [ACM Digital Library](https://dl.acm.org) | Systems, HCI, PL, formal methods |
| [IEEE Xplore](https://ieeexplore.ieee.org) | Hardware, networking, embedded systems |
| [USENIX](https://www.usenix.org/publications/proceedings) | Security, OS, distributed systems |

---

## Must-Read Paper Lists by Area

### Distributed Systems
- MapReduce (Dean & Ghemawat, 2004)
- The Google File System (Ghemawat et al., 2003)
- Dynamo: Amazon's Highly Available KV Store (2007)
- Raft: In Search of an Understandable Consensus Algorithm (2014)
- Spanner: Google's Globally Distributed Database (2012)
- Chord: A Scalable P2P Lookup Service (2001)

### Machine Learning
- Attention Is All You Need (Vaswani et al., 2017)
- BERT: Pre-training of Deep Bidirectional Transformers (Devlin et al., 2018)
- Scaling Laws for Neural Language Models (Kaplan et al., 2020)
- Deep Residual Learning for Image Recognition (He et al., 2015)
- Generative Adversarial Networks (Goodfellow et al., 2014)
- Constitutional AI: Harmlessness from AI Feedback (Bai et al., 2022)

### Programming Languages & Compilers
- A Theory of Type Polymorphism (Milner, 1978)
- LLVM: A Compilation Framework for Lifelong Program Analysis (2004)
- Haskell: A Purely Functional Language (Hudak et al., 1992)

### Security
- Return-Oriented Programming: Exploitation Without Code Injection (2007)
- OWASP: Common Weakness Enumeration studies
- Spectre Attacks (Kocher et al., 2018)

---

## Getting Full Text (Legally)

1. **arXiv** — most CS papers have a free preprint here
2. **Author's homepage** — most academics post PDFs of their own papers
3. **Semantic Scholar** — often links to free PDFs
4. **Unpaywall browser extension** — finds legal free versions automatically
5. **Institutional access** — if you have a university email, you have full access to ACM, IEEE, and more

---

_The more papers you read, the faster you get. The first 10 are hard. The next 100 are fast._
