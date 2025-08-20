# Vercel Deployment Guide for Keystone Infra

## Prerequisites
1. GitHub account
2. Vercel account (can sign up with GitHub)
3. Your code pushed to a GitHub repository

## Step 1: Prepare Your Repository

Make sure your code is pushed to GitHub with these files:
- `vercel.json` (already created)
- `api/index.ts` (already created)
- `.vercelignore` (already created)

## Step 2: Deploy to Vercel

### Option A: Deploy via Vercel Dashboard
1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "New Project"
3. Import your GitHub repository
4. Vercel will automatically detect the configuration
5. Click "Deploy"

### Option B: Deploy via Vercel CLI
```bash
# Install Vercel CLI globally
npm i -g vercel

# Login to Vercel
vercel login

# Build the project first
npm run build

# Deploy from your project directory
vercel --prod

# Follow the prompts:
# - Link to existing project? No
# - Project name: keystone-infra (or your preferred name)
# - Directory: ./ (current directory)
# - Override settings? No
```

## Step 3: Environment Variables

After deployment, add these environment variables in your Vercel dashboard:

1. Go to your project settings
2. Click "Environment Variables"
3. Add the following:

```
SENDGRID_API_KEY=your_sendgrid_api_key_here
NODE_ENV=production
```

## Step 4: Custom Domain (Optional)

1. In your Vercel project dashboard, go to "Domains"
2. Add your custom domain
3. Follow the DNS configuration instructions

## Project Structure for Vercel

```
keystone-infra/
├── api/
│   └── index.ts          # Vercel serverless function
├── client/
│   ├── src/              # React source code
│   └── public/           # Static assets
├── server/               # Express server code
├── vercel.json          # Vercel configuration
├── .vercelignore        # Files to ignore
└── package.json         # Dependencies
```

## How It Works

1. **Frontend**: Built as static files and served from Vercel's CDN
2. **API**: Runs as Vercel serverless functions under `/api/*` routes
3. **Assets**: Images and static files served from the built frontend
4. **Database**: Uses in-memory storage (consider upgrading to a database for production)

## Important Notes

- File uploads will work but files are not persistent on Vercel (use cloud storage for production)
- Email functionality requires a valid SendGrid API key
- The contact form stores submissions in memory (they'll be lost on function restarts)

## Production Recommendations

For a production deployment, consider:

1. **Database**: Use Neon, PlanetScale, or another serverless database
2. **File Storage**: Use AWS S3, Cloudinary, or Vercel Blob for file uploads
3. **Email**: Configure SendGrid with proper domain authentication
4. **Monitoring**: Set up error tracking with Sentry or similar service

## Troubleshooting

If deployment fails:
1. Check the build logs in Vercel dashboard
2. Ensure all dependencies are in `package.json`
3. Verify the `vercel.json` configuration is correct
4. Check that there are no TypeScript errors

## Support

If you encounter issues:
1. Check Vercel's documentation: https://vercel.com/docs
2. Review the deployment logs in your Vercel dashboard
3. Ensure your GitHub repository is properly connected