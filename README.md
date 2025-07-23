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

## Customization

You can customize the contact form by:

- Modifying the email template in `app/api/contact/route.ts`
- Updating form validation rules
- Changing the styling in `app/components/Contact.tsx`
- Adding additional form fields as needed

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

## License

This project is open source and available under the [MIT License](LICENSE).
