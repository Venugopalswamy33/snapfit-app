# ⚡ SnapFit Quick Start

Get your Snapchat-style fitness app running in 5 minutes!

## 🎯 What You'll Get

- ✅ Full-featured fitness app
- ✅ Workout stories (24-hour posts)
- ✅ Fitness streak tracking
- ✅ Camera/upload functionality
- ✅ Modern Snapchat-style UI
- ✅ Database with 10 tables
- ✅ Ready for deployment

## 📋 Before You Start

Make sure you have:
- [ ] Node.js 18+ installed
- [ ] GitHub account
- [ ] Supabase account (free tier works!)
- [ ] Vercel account (optional, for deployment)

## 🚀 5-Minute Setup

### Step 1: Get the Code (30 seconds)

```bash
git clone https://github.com/Venugopalswamy33/snapfit-app.git
cd snapfit-app
npm install
```

### Step 2: Set Up Database (2 minutes)

1. Go to [supabase.com](https://supabase.com) → Create new project
2. Wait for project to initialize
3. Go to **SQL Editor** → New Query
4. Copy ALL content from `supabase/schema.sql`
5. Paste and click **Run**
6. ✅ You should see "Success. No rows returned"

### Step 3: Get API Keys (1 minute)

1. In Supabase, go to **Settings** → **API**
2. Copy these two values:
   - **Project URL** (looks like: `https://xxx.supabase.co`)
   - **anon public key** (long string starting with `eyJ...`)

### Step 4: Configure App (30 seconds)

Create `.env.local` file in project root:

```env
NEXT_PUBLIC_SUPABASE_URL=paste_your_project_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=paste_your_anon_key_here
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### Step 5: Run! (30 seconds)

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) 🎉

## 🎨 What You Can Do Now

### Landing Page
- Visit `http://localhost:3000`
- See the beautiful Snapchat-style landing page

### Dashboard
- Visit `http://localhost:3000/dashboard`
- Explore the main app interface
- Click camera button to upload workout
- View streak tracker
- Browse stories feed

## 🌐 Deploy to Production (Optional)

### Quick Deploy to Vercel

1. Push your code to GitHub (if you made changes)
2. Go to [vercel.com](https://vercel.com)
3. Click **"Add New..."** → **"Project"**
4. Import `snapfit-app` repository
5. Add the same 3 environment variables
6. Click **Deploy**
7. ✅ Live in 2 minutes!

## 📱 Test the Features

### 1. Upload a Workout Story
- Click camera button (top right or floating button)
- Select a photo or video
- Fill in workout details
- Click "Post Story"

### 2. View Streak Tracker
- See your current streak (starts at 0)
- View 7-day calendar
- Track total workouts

### 3. Browse Stories Feed
- See all workout stories
- View workout details
- Like, comment, share (UI ready)

## 🗄️ Database Tables Created

Your Supabase now has these tables:
- ✅ `profiles` - User profiles
- ✅ `stories` - Workout stories
- ✅ `streaks` - Daily streaks
- ✅ `friendships` - Friend connections
- ✅ `challenges` - Fitness challenges
- ✅ `workouts` - Workout logs
- ✅ `achievements` - Badges
- ✅ `user_achievements` - Unlocked badges
- ✅ `challenge_participants` - Challenge members
- ✅ `story_views` - Story engagement

## 🎯 Next Steps

### Add Authentication
```bash
# In Supabase Dashboard
Authentication → Providers → Enable Email
```

### Enable Storage (for media uploads)
```bash
# In Supabase Dashboard
Storage → New Bucket → Name: "workout-media" → Public
```

### Customize Branding
- Edit colors in `tailwind.config.ts`
- Update app name in `app/layout.tsx`
- Add your logo

## 🐛 Troubleshooting

### "Module not found" error
```bash
rm -rf node_modules .next
npm install
```

### Database connection error
- Double-check your `.env.local` file
- Make sure you copied the FULL URL and key
- Verify no extra spaces

### Build error
```bash
npm run build
# Check for any TypeScript errors
```

## 📚 Learn More

- [Full Setup Guide](./SETUP.md) - Detailed instructions
- [README](./README.md) - Complete documentation
- [Supabase Docs](https://supabase.com/docs)
- [Next.js Docs](https://nextjs.org/docs)

## 💡 Pro Tips

1. **Use TypeScript**: All types are defined in `lib/supabase.ts`
2. **Check Supabase Logs**: Dashboard → Logs for debugging
3. **Test Locally First**: Always test before deploying
4. **Enable RLS**: Add Row Level Security for production
5. **Use Git Branches**: Create feature branches for new features

## 🎉 You're All Set!

Your SnapFit app is now running! Here's what you have:

✅ Modern fitness app with Snapchat-style UI  
✅ Complete database schema  
✅ Stories, streaks, and camera features  
✅ Ready for customization  
✅ Production-ready architecture  

**Need help?** Check [SETUP.md](./SETUP.md) or open an issue on GitHub!

---

**Happy coding! 💪🔥**
