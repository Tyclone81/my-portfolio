# Victor Ogero — Portfolio Website

[![Next.js](https://img.shields.io/badge/Next.js-14.2-black?style=flat&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18.3-blue?style=flat&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-amber.svg)](https://opensource.org/licenses/MIT)

> Personal portfolio and systems engineering showcase for **Victor Ogero** — Full-Stack & Systems Software Engineer at **Zone01 Kisumu**. Built with **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS**.

---

## 🧭 Overview

This repository houses the modern, responsive web portfolio of Victor Ogero. Designed with an editorial, architectural aesthetic, it bridges analytical rigor with first-principles systems engineering, showcasing production deployments, hackathon solutions, and low-level Go systems projects.

### ✨ Key Features

- **Architectural & Editorial Layout**: Inspired by modern editorial design with custom warm stone/amber palettes, geometric color blocks, and typography.
- **Selected Works Showcase**: Categorized portfolio presenting both live production applications and low-level systems architectures (TCP servers, Unix CLI tools, web forums).
- **Interactive Resume Modal**: In-browser PDF resume viewer and download utility without leaving the page.
- **Interactive Contact Deck**: Quick-copy utility for direct phone and email channels, with WhatsApp direct messaging.
- **Technical Articles & Publications**: Integrated links and summaries for published technical engineering articles on DEV.to.
- **Responsive & Accessible**: Fully optimized for mobile, tablet, and widescreen desktop displays with semantic HTML and keyboard navigation.

---

## 🛠️ Tech Stack

### Core Framework & UI
- **[Next.js 14](https://nextjs.org/)** — React framework with App Router, server-rendered components, and route optimization.
- **[React 18](https://react.dev/)** — Declarative component architecture.
- **[TypeScript](https://www.typescriptlang.org/)** — End-to-end static typing.
- **[Tailwind CSS](https://tailwindcss.com/)** — Utility-first styling with custom typography and color schemes.
- **[Lucide React](https://lucide.dev/)** — Clean, performant vector icon library.

### Development & Tooling
- **[ESLint](https://eslint.org/)** + `eslint-config-next` — Code quality and standards enforcement.
- **[PostCSS](https://postcss.org/)** & **[Autoprefixer](https://github.com/postcss/autoprefixer)** — CSS transformations and vendor prefixing.

---

## 📂 Project Structure

```text
my-portfolio/
├── app/
│   ├── globals.css         # Global Tailwind styles & font settings
│   ├── layout.tsx          # Root HTML layout and metadata
│   └── page.tsx            # Main single-page application entry point
├── components/
│   ├── About.tsx           # Background, engineering highlights & skills matrix
│   ├── Articles.tsx        # Technical publications and writing on DEV.to
│   ├── Contact.tsx         # Contact channels with clipboard copy interactions
│   ├── Footer.tsx          # Social links, copyright, and navigation return
│   ├── Hero.tsx            # Hero section with portrait & architectural styling
│   ├── Hobbies.tsx         # "Out of Office" personal pursuits & builder mindset
│   ├── Navbar.tsx          # Responsive navigation bar with mobile drawer
│   ├── Projects.tsx        # Categorized featured projects & GitHub links
│   └── ResumeModal.tsx     # Fullscreen PDF resume modal viewer
├── public/
│   ├── profile.jpg         # Profile photography
│   └── resume.pdf          # Curriculum vitae PDF
├── next.config.mjs         # Next.js configuration
├── tailwind.config.ts      # Tailwind configuration with custom theme extensions
├── tsconfig.json           # TypeScript configuration with @/ alias
└── package.json            # Project dependencies and npm scripts
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed on your machine:
- **Node.js**: `v18.17.0` or higher
- **npm**: `v9.0.0` or higher (or `pnpm` / `yarn` / `bun`)
- **Git**


### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Tyclone81/my-portfolio.git
   cd my-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to:
   ```text
   http://localhost:3000
   ```

---

## 📜 Available Scripts

In the project root, you can run:

| Command | Description |
| :--- | :--- |
| `npm run dev` | Runs the Next.js development server with Hot Module Replacement (HMR) at `localhost:3000`. |
| `npm run build` | Compiles the production build into the `.next` directory. |
| `npm run start` | Boots up the Next.js production server (must run `npm run build` first). |
| `npm run lint` | Runs ESLint across all TypeScript and React files to verify code quality. |

---

## 📌 Featured Engineering Highlighted in Portfolio

- **[INKA LittUp](https://inkalittup.onrender.com/)**: Production mobile-responsive business web platform for an electrical service enterprise (Go, HTML5, CSS3, WhatsApp API).
- **[ProperSats](https://github.com/hajisml/propersats)**: Bitcoin Lightning Network (L2) escrow decentralized web app (React, TypeScript, FastAPI, WebLN).
- **Resili**: Climate hazard intelligence and predictive flood forecasting platform for county emergency disbursement (Next.js, Go, Python, XGBoost).
- **Full-Stack Web Forum**: High-traffic developer forum built in Go with SQLite (CGO), custom session authentication, and multi-stage Docker deployment.
- **Net-Cat (TCP Chat Server)**: Concurrent group chat server built from scratch with Go sockets, goroutines, channels, and mutexes.
- **my-ls**: Unix CLI tool replication with flags (`-l`, `-a`, `-R`, `-r`, `-t`) and custom permission bitmask handling.

---

## 🌐 Connect & Socials

- **GitHub**: [@Tyclone81](https://github.com/Tyclone81)
- **LinkedIn**: [Victor Ogero](https://www.linkedin.com/in/victor-ogero-8594611a4)
- **DEV.to**: [@tyclone81](https://dev.to/tyclone81)
- **𝕏 (Twitter)**: [@tylervic2](https://x.com/tylervic2)
- **Email**: [ogerovictor81@gmail.com](mailto:ogerovictor81@gmail.com)

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
