# Carlos Parra Camacho — Personal Portfolio

> This is a personal portfolio built with HTML, SCSS, and JavaScript as part of my course Web Page Design at DeSales University.

**[Live site →](https://carlospc13.netlify.app/)** &nbsp;&nbsp; **[LinkedIn →](https://www.linkedin.com/in/carlos-parra-camacho)**

---

## Overview

This is my personal portfolio website, designed to showcase my projects, experience, and personality as a Computer Science student based in Spain. The design prioritises a dark, editorial aesthetic with green accents, smooth scroll animations, and a custom cursor interaction system.

---

## Features

- **Custom cursor** — A green sphere that reacts to links and text blocks using CSS class toggling and `mousemove` events
- **Animated typewriter hero** — Powered by [Typed.js](https://github.com/mattboldt/typed.js/), cycling through different self-descriptions
- **Scroll storytelling (About section)** — Each block reveals a large decorative number, a tag, a phrase, and a photo using `IntersectionObserver` with staggered CSS transitions
- **Experience timeline** — An alternating left/right timeline with glassmorphism cards and glowing nodes
- **Animated "Open to Work" banner** — An infinite CSS marquee in the contact section
- **Hamburger menu** — A CSS-only mobile navigation using a hidden checkbox and sibling selectors (no JavaScript required)
- **Fully responsive** — Three breakpoints: desktop (1024px), tablet (768px), and mobile (600px)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Markup | HTML5 |
| Styles | SCSS (compiled to CSS) |
| Logic | Vanilla JavaScript (ES6+) |
| Fonts | Google Fonts — Libre Franklin, Josefin Sans |
| Animation | CSS transitions + `IntersectionObserver` API |
| Typewriter | Typed.js v2.1.0 (CDN) |
| Build | Manual SCSS compilation (no bundler) |

---

## Project Structure

```
portfolio/
├── index.html
└── src/
    ├── css/
    │   └── index.css          # Compiled CSS (do not edit directly)
    ├── js/
    │   └── app.js             # All JavaScript logic
    ├── img/                   # Images and assets
    └── scss/
        ├── index.scss         # Entry point — imports base + styles
        ├── base/
        │   ├── _variables.scss    # Colors, fonts, breakpoints
        │   ├── _mixins.scss       # Media query and utility mixins
        │   ├── _globales.scss     # Global resets and base rules
        │   └── _normalize.scss    # normalize.css v8
        └── styles/
            ├── _home.scss         # Hero, nav, cursor, footer icons
            ├── _about.scss        # Scroll storytelling section
            ├── _projects.scss     # Project card grid
            ├── _experience.scss   # Timeline
            └── _contact.scss      # Contact + Open to Work banner
```

---

## Key Concepts Used

A few web development concepts that are central to how this site works, in case they are useful as a reference:

**`IntersectionObserver`** — A browser API that fires a callback when an element enters or exits the visible area of the screen (the "viewport"). Used here to trigger the scroll animations in the About section and previously in the phrases section.

**CSS `transition` with `transition-delay`** — Multiple elements inside a slide (number, text, photo) each have a different delay (0s, 0.2s, 0.4s), creating a staggered cinematic reveal without any JavaScript timers.

**`clamp(min, preferred, max)`** — A CSS function for fluid typography. The font size scales smoothly with the viewport width while staying within a defined minimum and maximum. This removes the need for breakpoint-specific font size rules.

**`-webkit-text-stroke`** — A CSS property that renders text as an outline instead of a filled shape. Used for the large decorative numbers in the About section background.

**`getBoundingClientRect()`** — A JavaScript method that returns the size and position of an element relative to the viewport. Used to detect when the user has scrolled far enough to fix the navigation bar.

---

## Sections

- **Home** — Animated typewriter greeting
- **About Me** — Scroll-driven storytelling with photos and phrases
- **Projects** — DeSales Exchange Hub · CUDA/OMP Parallel Programming · Pneumonia Detection (Keras) · Skin Lesion Segmentation (PyTorch)
- **Experience** — Timeline of teaching and modelling roles
- **Contact** — Links to GitHub, LinkedIn, and email

---

## License

This project is open source and available under the [MIT License](LICENSE).

Feel free to use it as inspiration or a starting point for your own portfolio — though I'd appreciate a mention if you do!

---

*Built by Carlos Parra Camacho · Computer Science student · Spain*
