# Deployment Guide

This guide covers deploying your application to: vercel.

## Pre-Deployment Checklist

- [ ] All environment variables are documented
- [ ] Database is set up and accessible
- [ ] Authentication providers are configured
- [ ] API keys are ready for production
- [ ] Code is committed to a Git repository
- [ ] Build succeeds locally (`npm run build`)

## Environment Variables

Make sure to set all required environment variables in your deployment platform. See `.env.example` for the complete list.

## Vercel Deployment

Vercel is the recommended platform for Next.js applications.

### Step 1: Prepare Your Repository

1. Push your code to GitHub, GitLab, or Bitbucket
2. Ensure `.env.example` is committed (but not `.env.local`)

### Step 2: Import Project to Vercel

1. Go to [Vercel Dashboard](https://vercel.com/new)
2. Click "Import Project"
3. Select your Git provider and repository
4. Vercel will auto-detect Next.js configuration

### Step 3: Configure Environment Variables

1. In the import screen, click "Environment Variables"
2. Add all variables from your `.env.local`:
   - `DATABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `ANTHROPIC_API_KEY`

### Step 4: Configure Build Settings

Vercel should auto-detect these, but verify:

- **Framework Preset**: Next.js
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`



### Step 5: Deploy

1. Click "Deploy"
2. Wait 2-3 minutes for build to complete
3. Visit your production URL

### Step 6: Update OAuth Callback URLs

For Supabase Auth:

1. Go to Supabase Dashboard > Authentication > URL Configuration
2. Add your production URL to "Site URL"
3. Add redirect URLs if using OAuth providers

### Continuous Deployment

Vercel automatically deploys:
- **Production**: Pushes to main/master branch
- **Preview**: Pull requests and other branches

### Custom Domain

1. Go to Project Settings > Domains
2. Add your custom domain
3. Follow DNS configuration instructions
4. Update `NEXTAUTH_URL` if using NextAuth

## Updating OAuth Callback URLs

After deploying, you must update OAuth callback URLs in your provider settings.

For Supabase Auth:

1. Go to Supabase Dashboard > Authentication > URL Configuration
2. Add your production URL to "Site URL"
3. Add redirect URLs if using OAuth providers

### Testing

After updating callback URLs:

1. Visit your production site
2. Try signing in with each OAuth provider
3. Verify you're redirected back correctly
4. Check that user data is saved properly