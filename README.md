# 🧑‍💻 SPA Users — Modern User Management SPA

Advanced user management application built with **Vue 3 + Vite + TypeScript + Vuetify 3**, following principles of scalable architecture, maintainable code, and high-quality UX.

## 🗂️ Table of Contents

- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
- [Architecture & Technical Decisions](#architecture--technical-decisions)
- [Installation & Setup](#installation--setup)
- [Project Structure](#project-structure)
- [Best Practices & Conventions](#best-practices--conventions)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

SPA Users is a modular, maintainable, and scalable Single Page Application for user CRUD operations, advanced search, and notifications—all with clear code and UX focus.

## Tech Stack

- **Vue 3** 🟢 - Progressive framework for interfaces.
- **TypeScript** 🔵 - Static typing for robustness and clarity.
- **Vite** ⚡️ - Fast and modern Bundler.
- **Vuetify 3** 🎨 - Material Design UI components.
- **Vitest** 🧪 - Unit and integration testing.
- ESLint + Prettier\*\* 🧹 - Linting and automatic formatting.
- **SCSS/SASS** 🎨 - CSS preprocessor for scalable styles.

## Architecture & Technical Decisions

- **Modular structure**: clean separation by feature and layer—controllers in `/app`, core logic in `/domain`, feature modules in `/modules`, shared utilities in `/shared`, and static assets in `/public`.
- **UI/UX**: Vuetify ensures consistent, accessible, responsive UI. Snackbars and centralized error helper (`getErrorMessage`) provide seamless feedback.
- **Utilities**: shared debounce, error handling, and UI components to enhance maintainability and consistency.
- **Type safety & styling**: TypeScript with strict typing and SCSS+BEM for organized, reusable styles.
- **Quality**: Vitest testing stack + ESLint/Prettier for clean, consistent code.
- **Motivation**: Chosen stack to streamline team collaboration, future scaling, and fast onboarding with cohesive structure and architecture.

## Installation & Setup

Ensure you have **Node.js 20.11.1** installed. If using [NVM](https://github.com/nvm-sh/nvm), running `nvm use` will select the correct version from `.nvmrc`.

```bash
git clone https://github.com/EfeDeveloper/spa-users.git
cd spa-users
nvm use              # Use Node.js 20.11.1 per .nvmrc
npm install          # or yarn install

# If needed, set up environment variables:
cp .env.example .env
# Edit .env as needed

npm run dev          # or yarn dev
# App runs on http://localhost:5173

npm run build        # or yarn build
# Production build in /dist

npm run test         # or yarn test
```

## 📦 Project Structure

```bash
spa-users/
├── app/                # Global configuration: plugins, routes, store setup
├── domain/             # Core entities, models, and business logic
├── modules/            # Feature modules (e.g., users) with views, services, store, components
├── shared/             # Shared components, hooks, utilities, helpers (debounce, error handling)
├── public/             # Static assets (images, favicon, etc.)
├── tests/              # Unit and integration tests
├── .env.example        # Example environment variables
├── .nvmrc              # Node.js version (20.11.1)
├── vite.config.ts      # Vite configuration
├── package.json
├── tsconfig.json
├── eslint.config.js    # ESLint configuration
├── prettier.config.js  # Prettier configuration
└── README.md           # Project documentation
```

## 💡 Best Practices & Conventions

- Semantic commit messages with emojis for clarity
- Functional, decoupled, testable components
- Strict TypeScript typing
- SCSS styling using BEM guidelines
- Centralized error handling and user feedback
- Automatic linting & formatting on save/CI

## 🤝 Contribución

1. Fork the repo and create a descriptive branch (e.g., feature/add-login)
2. Write code, tests, and ensure lint passes
3. Create a clear Pull Request explaining your changes

All contributions are welcome! 🚀

## License
[MIT](LICENSE)
