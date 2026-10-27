# EcoSphere — E-Waste & Environmental Management Portfolio

> **“Every Assignment. One Sustainable Future.”**

EcoSphere is a modern, responsive, static academic portfolio for **Dakshata Mhatre** (Roll No. 24102B0018), Semester V Computer Engineering at **Vidyalankar Institute of Technology, Mumbai** for the subject **E-Waste & Environmental Management (AY 2026–27)**.

Designed for faculty review and public showcase. Faculty and visitors can browse assignments, inspect deliverables, view documents inline (PDF/images), and download files (individually or as a consolidated ZIP) without requiring any login or database configuration.

---

## 1. Quick Start (Windows / VS Code)

```bash
# 1. Open the project folder in VS Code
# 2. Open the terminal (Ctrl + `)
npm install

# 3. Start development server
npm run dev
# Open http://localhost:5173

# 4. Production build
npm run build

# 5. Local preview of production build
npm run preview
```

---

## 2. Deploy to Vercel (Zero-Config Static Hosting)

EcoSphere is a 100% static React + Vite web application:

1. Push this project folder to your GitHub repository.
2. Go to [Vercel](https://vercel.com) → **Add New Project** → Import your repository.
3. Vercel automatically detects the Vite preset (`dist` output directory).
4. Click **Deploy**. No backend, environment variables, or database required!
5. Share the live URL with faculty for examination.

---

## 3. Project Structure & Assignment Management

```
ecotrack/
├── public/
│   └── assignments/
│       ├── ISA/          # Internal Semester Assessment deliverables
│       ├── ESE/          # End Semester Examination deliverables
│       └── Extras/       # Research papers and case studies
├── src/
│   ├── data/
│   │   └── assignments.ts # Centralized static assignment metadata
│   ├── config.ts          # Student profile & course information (editable)
│   ├── lib.ts             # File helpers, formatting, JSZip download utility
│   ├── styles.ts          # Reusable Tailwind classes
│   ├── App.tsx            # Main application shell & routing
│   ├── Navbar.tsx         # Responsive header & dark/light theme switch
│   ├── HomePage.tsx       # Landing page with hero & 4 live statistics cards
│   ├── AboutPage.tsx      # Student profile & course overview cards
│   ├── SubmissionsPage.tsx# Filterable grid, full descriptions, ZIP downloads
│   ├── Preview.tsx        # File preview modal (PDF, image, Office notices)
│   ├── Footer.tsx         # Common persistent footer
│   └── Modal.tsx          # Reusable accessible modal dialog
├── index.html             # Shell with pre-mount theme flash prevention
├── tailwind.config.js     # Environmental colour palette & dark mode
└── package.json           # Dependencies (React, Lucide icons, JSZip)
```

### Adding or Updating Assignments

All assignment metadata is centralized in **`src/data/assignments.ts`**:
- Drop actual files into `public/assignments/ISA/`, `public/assignments/ESE/`, or `public/assignments/Extras/`.
- Register the assignment title, category, date, description, deliverables, and file paths in `src/data/assignments.ts`.
- Edit **`src/config.ts`** to update personal details (faculty name, roll number, college).

---

## 4. Key Features

- **Centralized Static Data**: No database, no auth locks, instantly accessible to faculty.
- **Dynamic Statistics**: 4 cards on the landing page (Total Submissions, ISA Activities, ESE Activities, Extras) dynamically calculated from the assignment dataset.
- **Uncompromised Readability**: Assignment descriptions are displayed in full directly on each card without truncation or ellipses.
- **Multi-Deliverable Grouping**: Preserves all deliverables (e.g. report + spreadsheet + presentation) under a single assignment card.
- **Smart Downloads & ZIP Archiving**: Download individual files or download all files for an assignment as a consolidated `.zip` generated on the client with JSZip.
- **Dark & Light Mode**: Smooth theme transitions, persistent preference stored in `localStorage`, and automatic system preference detection on first visit.
