# Setup Guide

This guide will help you set up all the services and integrations for this project.

## Prerequisites

- Node.js 20 or higher installed
- A code editor (VS Code recommended)
- Git installed
- Anthropic account for AI features

## Database Setup

This project uses Supabase for the database.

### Step 1: Create a Supabase Project

1. Go to [Supabase Dashboard](https://supabase.com/dashboard)
2. Click "New Project"
3. Choose a name and database password
4. Select a region close to your users
5. Wait for provisioning (2-3 minutes)

### Step 2: Get Your Connection Details

1. Navigate to **Project Settings** > **API**
2. Copy the "Project URL" (starts with https://)
3. Copy the "anon public" key
4. Copy the "service_role" key (keep this secret!)

### Step 3: Configure Environment Variables

Add to `.env.local`:

```bash
NEXT_PUBLIC_SUPABASE_URL=your-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

### Step 4: Set Up Database Tables

1. Navigate to the SQL Editor in your Supabase dashboard
2. Create your tables using the SQL editor or Table Editor
3. Set up Row Level Security (RLS) policies for data protection

### Step 5: Test the Connection

```bash
npm run dev
# Visit http://localhost:3000
# Try database operations to verify connection
```

## Authentication Setup

This project uses Supabase for authentication.

### Step 1: Create Supabase Project

1. Go to [Supabase Dashboard](https://supabase.com/dashboard)
2. Click "New Project"
3. Choose a name and database password
4. Wait for provisioning (2-3 minutes)

### Step 2: Get API Keys

1. Navigate to **Project Settings** > **API**
2. Copy the "Project URL"
3. Copy the "anon public" key

Add to `.env.local`:

```bash
NEXT_PUBLIC_SUPABASE_URL=your-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

### Step 3: Configure Authentication Providers

1. Go to **Authentication** > **Providers** in Supabase dashboard
2. Enable the providers you want (Email, Google, GitHub, etc.)
3. For OAuth providers, add their credentials

#### GitHub OAuth with Supabase

1. Create GitHub OAuth app (see GitHub OAuth section above)
2. In Supabase, go to Authentication > Providers > GitHub
3. Enable GitHub provider
4. Add your GitHub Client ID and Secret
5. Copy the Callback URL from Supabase
6. Add it to your GitHub OAuth app settings

### Step 4: Test Authentication

```bash
npm run dev
# Visit http://localhost:3000
# Try signing up/in with configured providers
```

## AI Integration Setup

This project uses Anthropic Claude for AI Chatbot.

### Step 1: Get Your Anthropic Claude API Key

1. Go to [Anthropic Claude Console](https://console.anthropic.com/)
2. Sign up or log in to your account
3. Navigate to the API Keys section
4. Create a new API key
5. Copy your API key (it starts with `sk-ant-`)

### Step 2: Add API Key to Environment

Open your `.env.local` file and add:

```bash
ANTHROPIC_API_KEY=your-api-key-here
```

**Important**: Never commit your `.env.local` file to version control!

### Step 3: Test the Integration

1. Start the development server: `npm run dev`
2. Navigate to the AI feature page: http://localhost:3000/chat
3. Try the AI functionality to ensure it's working

### AI Template Features

Your selected template (AI Chatbot) includes:

- Real-time streaming responses
- Conversation history
- Markdown rendering
- Copy code blocks

### Generated Files

The following files have been generated for your AI template:

**API Routes:**
- `src/app/api/chat/route.ts`

**Pages:**
- `src/app/chat/page.tsx`

### Rate Limits and Costs

- Check the [Anthropic Claude Pricing](https://www.anthropic.com/pricing) for current rates
- Monitor your usage in the Anthropic Claude Console
- Set up usage alerts to avoid unexpected charges

### Troubleshooting

**Error: "Invalid API key"**
- Double-check that you copied the entire key
- Ensure there are no spaces before or after the key
- Verify the key hasn't been revoked in the console
- Confirm you're using the correct environment variable name

**Error: "Rate limit exceeded"**
- Wait a few minutes before retrying
- Check your usage in the Anthropic Claude Console
- Consider upgrading your plan if needed

**AI responses not working**
- Verify the API key is set in `.env.local`
- Restart the development server after adding the key
- Check the browser console and server logs for errors
- Ensure your account has sufficient credits/quota

## External Services Summary

This project integrates with the following external services:

- **Anthropic Claude**: AI functionality
- **Supabase Auth**: User authentication
- **Supabase (PostgreSQL)**: Data storage


Make sure all required API keys and connection strings are added to your `.env.local` file.

### Security Best Practices

1. **Never commit** `.env.local` or `.env` files to version control
2. **Use different keys** for development and production
3. **Rotate keys regularly**, especially if they may have been exposed
4. **Limit API key permissions** to only what's needed
5. **Monitor usage** in service dashboards to detect unusual activity

## Environment Variables Reference

All required environment variables are documented in `.env.example`.

### Required Variables

- `DATABASE_URL` or Supabase keys - Database connection
- `ANTHROPIC_API_KEY` - AI functionality

### Optional Variables

- None

### Loading Environment Variables

- **Development**: Variables are loaded from `.env.local`
- **Production**: Set variables in your deployment platform's dashboard
- **Testing**: Use `.env.test` for test-specific variables

### Troubleshooting

If environment variables aren't loading:

1. Verify file name is exactly `.env.local` (not `.env`)
2. Restart the development server after changes
3. Check for syntax errors (no spaces around `=`)
4. Ensure file is in the project root directory