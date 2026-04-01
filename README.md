# LearnX Platform

A modern EdTech web app built for the **Codecelix Internship Program**. LearnX lets students explore tech courses, track progress, and manage their learning — all in a clean, futuristic UI.

---

## Tech Stack

- **React.js** (Vite) — Frontend framework
- **Tailwind CSS** — Styling
- **React Icons** — Icon library
- **CSS Custom Properties** — Theming (light/dark mode)

---

## Getting Started

```bash
git clone https://github.com/Asadwasee/learnx-platform.git
cd learnx-platform
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

```bash
npm run build    # Production build → dist/
```

---

## Project Structure

```
src/
├── components/
│   ├── dashboard/
│   │   ├── Sidebar.jsx          # Collapsible sidebar with mobile support
│   │   ├── EnrolledCourses.jsx  # Course cards with filter + progress
│   │   ├── ProgressBar.jsx      # Reusable animated progress bar
│   │   └── CertificateCard.jsx  # Earned & locked certificate UI
│   ├── Footer.jsx
│   └── Navbar.jsx
├── pages/
│   └── Dashboard.jsx            # Student panel — all dashboard sections
├── App.jsx                      # Root: routing, theme, form logic
├── index.css                    # CSS variables + Tailwind base
└── main.jsx
```

---

## Pages

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Hero, featured courses, categories, testimonials |
| `/contact` | Contact | Validated form + FAQ accordion |
| `/dashboard` | Dashboard | Student panel — courses, progress, certificates |

> Routing is handled via `window.location.pathname` — no external router needed.

---

## Features

- **Student Dashboard** — Overview stats, enrolled courses, progress tracking, certificates
- **Course Filtering** — Filter by status (In Progress / Completed / Just Started)
- **Progress Bars** — Animated, color-coded per course
- **Certificate UI** — Earned certificates with download/share + locked upcoming ones
- **Contact Form** — Per-field inline validation with success state
- **Dark Mode** — OS preference detection + localStorage persistence
- **Responsive** — Mobile-first, sidebar collapses on small screens

---

## Team

| Member | Role | Responsibilities |
|--------|------|-----------------|
| Asad Waseem | Project Lead | Architecture, Navbar, Footer |
| Abdullah | Home Page | Hero, courses section, testimonials |
| Ahmad | Course Catalog | Grid layout, filters, course cards |
| Fasiullah | Course Experience | Course detail page, lesson player |
| Junaid | Student Panel | Dashboard, Sidebar, Progress, Certificates |
| Shoaib | Utilities | Contact form validation, FAQ, Search |
| Umer | UI/UX | Responsiveness, dark mode, bookmarking |

---

## Bonus Features

- ⭐ Dark Mode
- ⭐ Search Functionality  
- ⭐ Course Bookmarking
- ⭐ Certificate UI

---

© 2026 LearnX Platform. All rights reserved.