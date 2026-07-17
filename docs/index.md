---
description: Terminal AI tutor for language learning. Bring your own API key or Ollama — exercises, lessons, and analysis via the provider you choose.
hide:
  - navigation
  - toc
---

<div class="hero" markdown>

<h1 class="hero-logo"><span class="hero-logo-text"><span class="glyph">&gt;_</span>OPEN COURSE</span></h1>

<p class="hero-lead">A terminal AI tutor for language learning. You bring the API key or Ollama — the app generates translation exercises, analyzes answers, and schedules reviews from your weak topics.</p>

<div class="hero-install">
  <div class="hero-install-inner">
    <code id="install-cmd">cargo install open-course-cli</code>
    <button type="button" class="hero-install-copy" aria-label="Copy install command" data-copy="cargo install open-course-cli">
      <svg class="icon-copy" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
      <svg class="icon-check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
    </button>
  </div>
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

- Curriculum, progress, and history stored on disk
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
