# Open Course Website

Promo landing page for [Open Course CLI](https://github.com/scriptology/open-course-cli). Built with [Zensical](https://zensical.dev).

## Quick Start

```bash
# Create and activate a virtual environment
python -m venv .venv
source .venv/bin/activate

# Install Zensical
pip install zensical

# Run dev server with hot-reload
zensical serve -o
```

Opens at `http://localhost:8000`.

## Build

```bash
zensical build --clean
```

Static output goes to the `site/` directory.

## Deploy

The repository includes a GitHub Actions workflow that builds and deploys the site to GitHub Pages on every push to `main`.

Live site: https://scriptology.github.io/open-course-website/
