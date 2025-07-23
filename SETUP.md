---
# 🚀 SETUP.md

## Portfolio Project Setup & Customization Guide

Welcome to your fully customizable portfolio! This guide will help you get started, run, and personalize your portfolio from scratch.
---

## 1. Prerequisites

- **Node.js** (v18+ recommended)
- **npm** (comes with Node.js)
- **Git** (optional, for version control)

---

## 2. Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/Vegadjay/developer-portfolio.git
   cd developer-portfolio
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

---

## 3. Running the Project

- **Development mode:**

  ```sh
  npm run dev
  ```

  Visit [http://localhost:3000](http://localhost:3000) in your browser.

- **Production build:**
  ```sh
  npm run build
  npm start
  ```

---

## 4. Project Structure

- **`app/`**: Next.js app directory (pages, layouts, API routes)
- **`components/`**: All React components (UI, sections, cards, etc.)
- **`data/`**: All portfolio content and configuration (edit here to customize!)
- **`public/`**: Static assets (images, resume, etc.)
- **`hooks/`**: Custom React hooks
- **`lib/`**: Utility functions

---

## 5. Customizing Your Portfolio

### a. Personal Information

- **File:** `data/personal-info.ts`
- **Edit:** Name, title, bio, contact info, skills, social links, profile image

### b. Work Experience

- **File:** `data/work-experience.ts`
- **Edit:** Add/remove jobs, companies, roles, dates, descriptions, achievements

### c. Projects

- **Featured Projects:** `data/featured-projects.ts` (for homepage/hero)
- **All Projects:** `data/all-projects.ts` (for full projects page)
- **Edit:** Title, description, tech stack, links, images

### d. Photo Gallery

- **File:** `data/gallery-data.ts`
- **Edit:** Add/remove images, change gallery title, adjust layout

### e. Social Links

- **File:** `data/social-links.ts`
- **Edit:** Add/remove social media or professional links

### f. Site Sections

- **File:** `data/site-config.ts`
- **Edit:** Show/hide sections (about, projects, gallery, contact, etc.)

---

## 6. Adding Images & Assets

- **Profile Picture:** Place in `public/profile-pic/` and update path in `personal-info.ts`
- **Project Images:** Place in `public/projects/` and update paths in project files
- **Gallery Images:** Place in `public/hackathon/` or `public/photo-gallery/` and update `gallery-data.ts`
- **Resume:** Place PDF in `public/resume/` and update link in `personal-info.ts`

---

## 7. Advanced Customization

- **UI Components:** Edit or add new components in `components/` or `components/ui/`
- **API Routes:** Customize backend logic in `app/api/`
- **Styling:** Edit `app/globals.css` or use Tailwind CSS classes in components

---

## 8. Deployment

- **Vercel:** Recommended for Next.js. Connect your repo and deploy.
- **Other:** Supports any Node.js hosting (Netlify, AWS, DigitalOcean, etc.)

---

## 9. Useful Scripts

- **Lint code:** `npm run lint`
- **Format code:** `npm run format`
- **Type check:** `npm run type-check`

---

## 10. Troubleshooting

- **Build errors:** Check for missing/incorrect imports or TypeScript errors.
- **Image not showing:** Ensure correct path and file exists in `public/`.
- **Section not updating:** Restart dev server after data changes.

---

## 11. Where to Edit What?

| Section        | File                        |
| -------------- | --------------------------- |
| Name/Bio       | `data/personal-info.ts`     |
| Experience     | `data/work-experience.ts`   |
| Projects       | `data/all-projects.ts`      |
| Featured Proj. | `data/featured-projects.ts` |
| Gallery        | `data/gallery-data.ts`      |
| Social Links   | `data/social-links.ts`      |
| Site Sections  | `data/site-config.ts`       |

---

## 12. Getting Help

- **Check comments** in each data file for instructions.
- **Refer to** `README.md` for more details.
- **Ask for help** in your team or community if stuck.

---

**Enjoy your new, easy-to-edit portfolio!**  
Just update the files in the `data/` folder to make it truly yours.

---
