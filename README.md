<div align="center">

# 🚀 DevBoard

### Discover. Explore. Save.

A student-focused web application for discovering upcoming tech events, workshops, and hackathons.

[🌐 Live Demo](YOUR_DEPLOYED_APP_URL) · [🎥 Video Walkthrough](YOUR_VIDEO_URL) · [📂 Repository](YOUR_GITHUB_REPOSITORY_URL)

</div>

---

## 📖 About the Project

**DevBoard** aims to make it easier for students to find technical events that match their interests. The application is designed around browsing events, searching by keyword, filtering by category, viewing event details, and saving favourites.

This project follows the **Frontend Development Round 2** assignment brief.

> 🚧 **Status:** Initial setup. The current project contains the starter screen; the features below are planned requirements, not completed functionality.

## 🎯 Planned Features

- 📅 **Event Discovery** — Browse upcoming tech events, workshops, and hackathons.
- 🔍 **Keyword Search** — Search by event name or keyword, regardless of letter case.
- 🏷️ **Category Filters** — Narrow results by category while keeping search active.
- 📝 **Event Details** — View an event’s name, date, category, description, and relevant information.
- ❤️ **Saved Events** — Add and remove favourites without duplicate entries.
- 📱 **Responsive Experience** — Support comfortable browsing on desktop and mobile.
- 💬 **Clear Feedback** — Provide loading, empty, and no-results states.

### ✨ Optional Enhancements

- Sort events by date or category.
- Add a dedicated favourites page or section.
- Improve accessibility and keyboard navigation.
- Add subtle transitions and animations.
- Introduce theme switching.

## 🛠️ Technology Stack

| Technology | Purpose |
| :--- | :--- |
| React 19 | User interface |
| TypeScript | Type-safe development |
| TanStack Start | Application framework |
| TanStack Router | Routing and navigation |
| TanStack Query | Data-fetching and caching tools |
| Tailwind CSS 4 | Styling |
| Vite | Development server and build tooling |
| Vitest & React Testing Library | Testing tools |
| ESLint & Prettier | Code quality and formatting |

## 📂 Current Project Structure

```text
src/
├── hooks/              # Shared React hooks
├── lib/                # Utilities and error reporting
├── routes/
│   ├── __root.tsx      # Shared application shell
│   └── index.tsx       # Home page — currently a placeholder
├── test/               # Test setup and routing tests
├── router.tsx          # Router configuration
├── start.ts            # Application startup configuration
└── styles.css          # Global styles and design tokens

public/                 # Static public files
package.json            # Dependencies and scripts
```

As development progresses, event browsing, filters, event details, and favourites should be separated into reusable components rather than placed in one large file.

## ⚙️ Getting Started

### Prerequisites

- A recent Node.js version compatible with the project dependencies
- npm
- Git

### Installation

1. Clone the repository:

   ```bash
   git clone YOUR_GITHUB_REPOSITORY_URL
   ```

2. Open the project folder:

   ```bash
   cd YOUR_REPOSITORY_NAME
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local address shown in your terminal.

## 📜 Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run preview` | Preview the production build locally |
| `npm run test` | Run the test suite |
| `npm run test:watch` | Run tests in watch mode |
| `npm run lint` | Check code with ESLint |
| `npm run format` | Format project files |

## ✅ Behaviour Checklist

- [ ] Search is case-insensitive.
- [ ] Search and category filters work together.
- [ ] Event details show the required information.
- [ ] Saved events never contain duplicates.
- [ ] Removing a favourite updates the interface immediately.
- [ ] Empty and no-results states provide clear feedback.
- [ ] The interface works on desktop and mobile.

## 🌐 Deployment

Deployment is required by the assignment and is **not completed yet**.

**Live application:** `YOUR_DEPLOYED_APP_URL`

## 🎥 Video Walkthrough

**Video link:** `YOUR_VIDEO_URL`

The walkthrough should cover:

1. The development approach and project organization.
2. The main features and user flow.
3. Important technical decisions.
4. Challenges encountered and their solutions.
5. Any completed bonus features.

## 📦 Submission Checklist

- [ ] GitHub repository containing the source code
- [ ] Working deployed application link
- [ ] Video walkthrough
- [ ] README updated to reflect completed functionality

---

<div align="center">

**🎓 DevBoard — Connecting students with tech opportunities.**

</div>
