# SnapFit Setup Guide 🚀

Complete setup instructions for your Snapchat-style fitness app.

## 📋 Prerequisites

- Node.js 18+ installed
- GitHub account
- Vercel account
- Supabase account

## 🗄️ Database Setup

### 1. Create Supabase Project

1. Go to [supabase.com](https://supabase.com)
2. Click "New Project"
3. Fill in project details:
   - Name: `snapfit-app`
   - Database Password: (save this securely)
   - Region: Choose closest to your users

### 2. Run Database Schema

1. In Supabase Dashboard, go to **SQL Editor**
2. Copy the contents of `supabase/schema.sql`
3. Paste and click **Run**
4. Verify tables are created in **Table Editor**

### 3. Get API Credentials

1. Go to **Project Settings** → **API**
2. Copy these values:
   - `Project URL` → `NEXT_PUBLIC_SUPABASE_URL`
   - `anon public` key → `NEXT_PUBLIC_SUPABASE_ANON_KEY`

## 🚀 Vercel Deployment

### Option 1: Via Vercel Dashboard (Recommended)

1. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
2. Click **"Add New..."** → **"Project"**
3. Import `Venugopalswamy33/snapfit-app` from GitHub
4. Configure Environment Variables:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   NEXT_PUBLIC_APP_URL=https://your-app.vercel.app
   ```
5. Click **Deploy**

### Option 2: Via CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Clone repository
git clone https://github.com/Venugopalswamy33/snapfit-app.git
cd snapfit-app

# Install dependencies
npm install

# Deploy to Vercel
vercel --prod

# Add environment variables
vercel env add NEXT_PUBLIC_SUPABASE_URL
vercel env add NEXT_PUBLIC_SUPABASE_ANON_KEY
vercel env add NEXT_PUBLIC_APP_URL
```

## 🔧 Local Development

### 1. Clone & Install

```bash
git clone https://github.com/Venugopalswamy33/snapfit-app.git
cd snapfit-app
npm install
```

### 2. Environment Variables

Create `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## 📱 Features Implemented

### ✅ Core Features
- 📸 **Workout Stories** - 24-hour disappearing posts
- 🔥 **Fitness Streaks** - Daily workout tracking
- 📊 **Dashboard** - Main app interface
- 📷 **Camera Upload** - Photo/video workout snaps
- 🎨 **Snapchat-style UI** - Modern, vibrant design

### 🗄️ Database Tables
- `profiles` - User profiles and stats
- `stories` - Workout stories (24h expiry)
- `streaks` - Daily workout streaks
- `friendships` - Friend connections
- `challenges` - Fitness challenges
- `workouts` - Workout logs
- `achievements` - Badges and milestones
- `story_views` - Story view tracking

### 🎯 Coming Soon
- 👥 Friends system
- 🏆 Challenges
- 🔔 Push notifications
- 📈 Advanced analytics
- 🎥 Video stories
- 💬 Comments & reactions
- 🏅 Leaderboards

## 🔐 Authentication Setup (Optional)

To add user authentication:

1. In Supabase Dashboard, go to **Authentication** → **Providers**
2. Enable desired providers (Email, Google, etc.)
3. Add authentication to your app:

```typescript
// lib/auth.ts
import { supabase } from './supabase'

export const signUp = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  })
  return { data, error }
}

export const signIn = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })
  return { data, error }
}
```

## 📦 Storage Setup (For Media)

1. In Supabase Dashboard, go to **Storage**
2. Create bucket: `workout-media`
3. Set bucket to **Public**
4. Update storage policies for uploads

## 🎨 Customization

### Colors
Edit `tailwind.config.ts`:
```typescript
colors: {
  snapfit: {
    yellow: '#FFFC00',  // Snapchat yellow
    black: '#000000',
    gray: '#F7F7F7',
  },
}
```

### Branding
- Update logo in `app/layout.tsx`
- Modify metadata in `app/layout.tsx`
- Change favicon in `public/`

## 🐛 Troubleshooting

### Build Errors
```bash
# Clear cache and reinstall
rm -rf .next node_modules
npm install
npm run build
```

### Database Connection Issues
- Verify Supabase URL and keys
- Check if tables are created
- Ensure RLS policies are set correctly

### Deployment Issues
- Check Vercel logs
- Verify environment variables
- Ensure all dependencies are in `package.json`

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [Vercel Documentation](https://vercel.com/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)

## 🤝 Support

Need help? 
- Check GitHub Issues
- Review Supabase logs
- Check Vercel deployment logs

---

Built with ❤️ for the fitness community
