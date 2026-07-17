---
description: Terminal AI tutor for language learning. Bring your own API key or Ollama — exercises, lessons, and analysis via the provider you choose.
hide:
  - navigation
  - toc
---

<div class="hero" markdown>

<h1 class="hero-logo"><span class="hero-logo-text"><span class="glyph">&gt;_</span>OPEN COURSE</span></h1>

**Terminal AI tutor for languages.** Bring your own API key (or Ollama) — exercises, lessons, and answer analysis run through the provider you choose.

<div class="hero-install" markdown>

```bash
cargo install open-course-cli
```

</div>

[:fontawesome-brands-github: GitHub](https://github.com/scriptology/open-course-cli){ .md-button .md-button--primary }

</div>

## Features

<div class="mechanics" markdown>

<div class="mechanics-card" markdown>

### Your keys, your model

- OpenAI, Anthropic, Gemini, DeepSeek, Mistral, OpenRouter, Ollama, or any OpenAI-compatible endpoint
- API keys stay on your machine — no hosted account required
- Pick provider, base URL, and model during onboarding

</div>

<div class="mechanics-card" markdown>

### Exercises & analysis

- Translation batches generated for the current topic and CEFR level
- LLM scores answers and surfaces mistakes after each batch
- Lessons and topic docs available when you need explanation

</div>

<div class="mechanics-card" markdown>

### Spaced repetition

- Weak topics and micro-learning items tracked automatically
- Next session balances new curriculum material with due reviews
- Progress and history kept per language pair

</div>

<div class="mechanics-card" markdown>

### Local-first data

- Curriculum, progress, and history stored on disk under `.open-course-cli/`
- Isolated data per language pair; provider settings are global
- Works offline for everything except LLM calls

</div>

</div>

## How it works

<div class="steps" markdown>

<div class="step-card" markdown>

### 1. Pick a topic

Dashboard selects the next session: a new curriculum topic or a due review.

</div>

<div class="step-card" markdown>

### 2. Generate a batch

Your LLM creates translation exercises for that topic.

</div>

<div class="step-card" markdown>

### 3. Translate

Answer the batch in the terminal.

</div>

<div class="step-card" markdown>

### 4. Score & schedule

Answers are analyzed; scores update and weak spots feed later sessions.

</div>

</div>

<div class="cta-section" markdown>

## Bring your own model

No subscription. Configure a provider once — practice with your API key or fully local Ollama.

[:fontawesome-brands-github: View on GitHub](https://github.com/scriptology/open-course-cli){ .md-button .md-button--primary }

</div>
