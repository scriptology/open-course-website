---
description: Terminal AI tutor for language learning. Bring your own API key or Ollama. Exercises, lessons, and analysis via the provider you choose.
hide:
  - navigation
  - toc
---

<div class="hero" markdown>

<h1 class="hero-logo"><span class="hero-logo-text">:lucide-languages:{ .hero-logo-icon } OPEN COURSE</span></h1>

<p class="hero-lead">Learn languages in the terminal with a tutor that adapts to you. Practice in short sessions, get clear feedback on mistakes, and keep improving where you are weakest.</p>

<div class="hero-install">
  <div class="hero-install-inner">
    <code id="install-cmd">curl --proto '=https' --tlsv1.2 -LsSf https://github.com/scriptology/open-course-cli/releases/latest/download/open-course-cli-installer.sh | sh</code>
    <button type="button" class="hero-install-copy" aria-label="Copy install command" data-copy="curl --proto '=https' --tlsv1.2 -LsSf https://github.com/scriptology/open-course-cli/releases/latest/download/open-course-cli-installer.sh | sh">
      <svg class="icon-copy" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
      <svg class="icon-check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
    </button>
  </div>
</div>

[:fontawesome-brands-github: GitHub](https://github.com/scriptology/open-course-cli){ .md-button .md-button--primary }

</div>

<div class="term-demo" aria-label="Animated session demo">
  <div class="term-demo__bar">
    <span class="term-demo__dot term-demo__dot--r"></span>
    <span class="term-demo__dot term-demo__dot--y"></span>
    <span class="term-demo__dot term-demo__dot--g"></span>
    <span class="term-demo__title">open-course-cli</span>
  </div>
  <div class="term-demo__screen" id="term-demo-screen" aria-live="polite"></div>
</div>

<div class="mechanics" markdown>

<div class="mechanics-card" markdown>

:lucide-key-round:{ .mechanics-icon }

### Your keys, your model

- OpenAI, Anthropic, Gemini, DeepSeek, Mistral, OpenRouter, Ollama, or any OpenAI-compatible endpoint
- API keys stay on your machine. No hosted account required.
- Pick provider, base URL, and model during onboarding

</div>

<div class="mechanics-card" markdown>

:lucide-languages:{ .mechanics-icon }

### Exercises & analysis

- Translation batches generated for the current topic and CEFR level
- LLM scores answers and surfaces mistakes after each batch
- Plan grows from your errors: new topics are added to lock in weak spots

</div>

<div class="mechanics-card" markdown>

:lucide-repeat:{ .mechanics-icon }

### Spaced repetition

- Weak topics and micro-learning items tracked automatically
- Next session balances new curriculum material with due reviews
- Progress and history kept per language pair

</div>

<div class="mechanics-card" markdown>

:lucide-hard-drive:{ .mechanics-icon }

### Local-first data

- Curriculum, progress, and history stored on disk
- Isolated data per language pair; provider settings are global
- Works offline for everything except LLM calls

</div>

</div>

<div class="cta-section" markdown>

## Bring your own model

No subscription. Configure a provider once. Practice with your API key or fully local Ollama.

[:fontawesome-brands-github: View on GitHub](https://github.com/scriptology/open-course-cli){ .md-button .md-button--primary }

</div>
