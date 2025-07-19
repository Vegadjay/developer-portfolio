# Email Setup Guide

## The Error You're Seeing

The error `535-5.7.8 Username and Password not accepted` means your Gmail credentials are not properly configured. Here's how to fix it:

## Step-by-Step Gmail Setup

### 1. Enable 2-Factor Authentication

1. Go to [Google Account Settings](https://myaccount.google.com/)
2. Click on "Security" in the left sidebar
3. Under "Signing in to Google", click "2-Step Verification"
4. Follow the steps to enable 2-factor authentication

### 2. Generate an App Password

1. Go to [Google Account Settings](https://myaccount.google.com/)
2. Click on "Security" in the left sidebar
3. Under "Signing in to Google", click "App passwords"
4. Select "Mail" as the app and "Other" as the device
5. Click "Generate"
6. Copy the 16-character password (it will look like: `abcd efgh ijkl mnop`)

### 3. Update Your .env.local File

Replace the placeholder values in your `.env.local` file:

```env
EMAIL_USER=your-actual-gmail@gmail.com
EMAIL_PASS=your-16-character-app-password
```

**Important Notes:**

- Use your full Gmail address (e.g., `john.doe@gmail.com`)
- Use the 16-character app password, not your regular Gmail password
- Remove spaces from the app password if any
- Make sure there are no extra spaces or quotes

### 4. Example .env.local File

```env
EMAIL_USER=myportfolio@gmail.com
EMAIL_PASS=abcd efgh ijkl mnop
```

## Alternative Solutions

### Option 1: Use a Different Email Service

If Gmail continues to cause issues, you can use other services:

#### Using Outlook/Hotmail:

```env
EMAIL_USER=your-email@outlook.com
EMAIL_PASS=your-password
```

And update the API route to use:

```javascript
const transporter = nodemailer.createTransport({
  service: "outlook",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});
```

#### Using Yahoo:

```env
EMAIL_USER=your-email@yahoo.com
EMAIL_PASS=your-app-password
```

And update the API route to use:

```javascript
const transporter = nodemailer.createTransport({
  service: "yahoo",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});
```

### Option 2: Use a Third-Party Email Service

Consider using services like:

- SendGrid
- Mailgun
- Resend
- EmailJS

## Testing Your Setup

1. Update your `.env.local` file with real credentials
2. Restart your development server: `npm run dev`
3. Try submitting the contact form
4. Check the console for any errors

## Common Issues and Solutions

### Issue: "Invalid login" error

**Solution:** Make sure you're using an App Password, not your regular password

### Issue: "Username and Password not accepted"

**Solution:**

1. Double-check your Gmail address is correct
2. Ensure you're using the App Password (16 characters)
3. Remove any extra spaces or quotes

### Issue: "Less secure app access" error

**Solution:** Use App Passwords instead of enabling less secure app access

### Issue: "Authentication failed"

**Solution:**

1. Verify 2-factor authentication is enabled
2. Generate a new App Password
3. Make sure the App Password is for "Mail" app

## Security Best Practices

1. **Never commit your `.env.local` file** to version control
2. **Use App Passwords** instead of your main password
3. **Regularly rotate** your App Passwords
4. **Monitor your email** for any suspicious activity

## Troubleshooting Checklist

- [ ] 2-Factor Authentication is enabled
- [ ] App Password is generated for "Mail" app
- [ ] `.env.local` file has correct credentials
- [ ] No extra spaces or quotes in credentials
- [ ] Development server is restarted after changes
- [ ] Gmail address is correct and active

## Need Help?

If you're still having issues:

1. Check the browser console for detailed error messages
2. Verify your Gmail account settings
3. Try using a different email service
4. Consider using a third-party email service like SendGrid
