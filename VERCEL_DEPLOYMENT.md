# Vercel Deployment Guide

Your project is now ready for deployment on Vercel! Here are the steps to deploy your website.

## Prerequisites

1. **GitHub Account**: Make sure you have a GitHub account
2. **Vercel Account**: Sign up at [vercel.com](https://vercel.com) using your GitHub account
3. **SendGrid API Key**: You'll need your SendGrid API key for the contact form to work

## Step 1: Push Your Code to GitHub

1. Create a new repository on GitHub
2. Upload all your project files to the repository
3. Make sure all the following new files are included:
   - `vercel.json` (Vercel configuration)
   - `api/contact.js` (Serverless function for contact form)
   - `api/shared/schema.js` (Validation schema)
   - `.vercelignore` (Files to ignore during deployment)

## Step 2: Connect to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "New Project"
3. Import your GitHub repository
4. Vercel will automatically detect the configuration

## Step 3: Configure Environment Variables

In your Vercel project dashboard:

1. Go to "Settings" → "Environment Variables"
2. Add the following variable:
   - **Name**: `SENDGRID_API_KEY`
   - **Value**: Your SendGrid API key
   - **Environment**: Production (and Preview if you want)

## Step 4: Deploy

1. Click "Deploy" - Vercel will automatically build and deploy your project
2. Your website will be available at a vercel.app URL
3. You can add a custom domain later in the Vercel dashboard

## Important Notes

### What's Different in Vercel Deployment:
- **API Routes**: Your Express.js routes are converted to Vercel serverless functions
- **Contact Form**: Will work exactly the same, sending emails via SendGrid
- **Static Assets**: All your images and files will be served from Vercel's CDN
- **Performance**: Vercel provides automatic optimization and global CDN

### Build Configuration:
- The `vercel.json` file configures the build process
- Frontend builds to `dist/public` directory
- API functions are in the `api/` directory
- All unnecessary files are excluded via `.vercelignore`

### Contact Form:
- The contact form will continue working with the same fields:
  - First Name, Last Name, Email, Company, Help Type, Message
- Emails will be sent via SendGrid
- Form submissions are stored temporarily (for the duration of the function execution)

## Troubleshooting

If you encounter issues:

1. **Build Failures**: Check the build logs in Vercel dashboard
2. **API Errors**: Ensure SENDGRID_API_KEY is set correctly
3. **Missing Files**: Make sure all files are committed to GitHub
4. **Contact Form Issues**: Check the function logs in Vercel dashboard

## Custom Domain (Optional)

After successful deployment:
1. Go to your project settings in Vercel
2. Navigate to "Domains"
3. Add your custom domain
4. Follow Vercel's instructions to update your DNS settings

Your website is now deployed on Vercel with global CDN, automatic HTTPS, and serverless backend functionality!