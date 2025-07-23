# Portfolio Website with Contact Form

A modern portfolio website built with Next.js, TypeScript, and Tailwind CSS, featuring a functional contact form with Nodemailer integration.

## Features

- 🎨 Modern, responsive design with dark/light theme support
- 📧 Functional contact form with email sending capability
- 🔒 Form validation and error handling
- 📱 Mobile-friendly interface
- ⚡ Built with Next.js 13+ and TypeScript

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Email Configuration

To enable the contact form functionality, you need to configure your email settings:

1. **Create a `.env.local` file** in the root directory with the following variables:

```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

2. **For Gmail users**, you need to use an App Password:
   - Go to your [Google Account settings](https://myaccount.google.com/)
   - Enable 2-factor authentication if not already enabled
   - Go to Security → App passwords
   - Generate a new app password for your application
   - Use this app password in the `EMAIL_PASS` variable

### 3. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

Make changes in the data folder according to your needs.

### 4. Build for Production

```bash
npm run build
```

## Contact Form Features

- **Form Validation**: Validates name, email, and message fields
- **Email Sending**: Sends emails using Nodemailer with Gmail SMTP
- **Success/Error Handling**: Shows appropriate toast notifications
- **Loading States**: Displays loading state during form submission
- **Responsive Design**: Works perfectly on all device sizes

## File Structure

```
├── app/
│   ├── api/contact/route.ts    # Email API endpoint
│   ├── components/Contact.tsx   # Contact form component
│   └── ...
├── components/
│   └── ui/                     # UI components
├── data/                       # Static data, Your data.
└── ...
```

## Environment Variables

- `EMAIL_USER`: Your Gmail address
- `EMAIL_PASS`: Your Gmail app password

## Technologies Used

- **Next.js 13+**: React framework
- **TypeScript**: Type safety
- **Tailwind CSS**: Styling
- **Nodemailer**: Email sending
- **Sonner**: Toast notifications
- **React Icons**: Icon library

## Security Notes

- Never commit your `.env.local` file to version control
- Use app passwords instead of regular passwords for Gmail
- The contact form includes input validation and sanitization
- All API routes include proper error handling

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

## Troubleshooting

### Email Not Sending

1. Check your `.env.local` file has correct credentials
2. Ensure you're using an app password for Gmail
3. Check the browser console for any errors
4. Verify your Gmail account allows "less secure app access" or use app passwords

### Build Errors

1. Run `npm install` to ensure all dependencies are installed
2. Check TypeScript errors with `npm run lint`
3. Ensure all environment variables are properly set

## ⭐️ Drop a Star!

If you find this project helpful or inspiring, please consider [starring the repository on GitHub](https://github.com/Vegadjay/developer-portfolio)! Your support means a lot and helps others discover the project.
