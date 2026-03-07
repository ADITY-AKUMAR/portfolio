# Aditya Kumar — Portfolio

**Live site:** [https://aditya-gaku.onrender.com](https://aditya-gaku.onrender.com)

Full-stack personal portfolio (MERN stack developer & UI/UX designer). Built with **Vite + React + TailwindCSS + Framer Motion** (frontend) and **Node + Express** (backend).

<img width="1882" height="912" alt="image" src="https://github.com/user-attachments/assets/ba736c40-5b60-48e9-9f16-5fd64f11fc0c" />


## Project structure

```
portfolio/
├── frontend/          # Vite + React app
│   ├── src/
│   │   ├── components/ # Navbar, Hero, About, Skills, Projects, CaseStudies, Contact
│   │   ├── data/       # siteData.js
│   │   ├── hooks/      # useTheme.js
│   │   └── ...
│   └── package.json
├── backend/            # Express API
│   ├── src/
│   │   ├── controllers/
│   │   ├── routes/
│   │   └── server.js
│   └── package.json
└── README.md
```

## Run locally

### Backend

```bash
cd backend
npm install
npm run dev
```

Runs at `http://localhost:5000`. Contact form: `POST /api/contact`.

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Runs at `http://localhost:5173`. API requests are proxied to the backend in development.

## Features

- **Navbar**: Sticky, logo "Aditya.dev", smooth scroll, mobile hamburger, dark/light toggle
- **Hero**: Intro, CTAs (View Projects, Download Resume, Contact Me), Framer Motion
- **About**: Bio + stats (Projects, Technologies, Internship ready)
- **Skills**: Grouped cards (Frontend, Backend, Other, UI/UX)
- **Projects**: ProjectCard grid (MERN E-commerce, Analytics Dashboards) with GitHub/Live links
- **Case Studies**: Problem, Research, Wireframe, Solution, Result + Figma button
- **Contact**: Name, Email, Message form → backend API; social icons (GitHub, LinkedIn, Twitter, Figma)

## Customization

- **Content**: Edit `frontend/src/data/siteData.js` (developer info, projects, case studies, skills, social links).
- **Resume**: Set `resumeUrl` in `siteData.js` or replace `/resume.pdf` in `public/`.
- **Backend env**: Copy `backend/.env.example` to `backend/.env` and set `PORT`, `FRONTEND_URL`, and optional SMTP for email.

## Build for production

```bash
cd frontend && npm run build
```

Serve the `frontend/dist` folder and run the backend (e.g. with a process manager). Set `VITE_API_URL` to your backend URL when building if not same-origin.

## Deploy on Render

- **Frontend:** Deploy the `frontend` folder as a **Static Site**. Build command: `npm run build`. Publish directory: `dist`. Root URL: [https://aditya-gaku.onrender.com](https://aditya-gaku.onrender.com).
- **Backend (optional, for contact form):** Deploy the `backend` folder as a **Web Service**. Set env vars: `PORT` (Render sets this), `CLIENT_URL=https://aditya-gaku.onrender.com`, and your `MONGO_URI` / `JWT_SECRET` if used. Then in the frontend build on Render, set **Environment Variable** `VITE_API_URL` to your backend service URL (e.g. `https://your-backend-name.onrender.com`) so the contact form posts to the API.
