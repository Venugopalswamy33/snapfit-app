# SnapFit 💪

A Snapchat-style fitness app with workout stories, streaks, and social features. Share your fitness journey with friends through 24-hour disappearing workout posts, build daily streaks, and compete in challenges!

![SnapFit Banner](https://img.shields.io/badge/SnapFit-Fitness%20Stories-orange?style=for-the-badge)
![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![Supabase](https://img.shields.io/badge/Supabase-Database-green?style=for-the-badge&logo=supabase)

## ✨ Features

### 📸 Workout Stories
- Share 24-hour disappearing workout posts
- Photo and video support
- Add captions, workout type, duration, and calories
- View friends' workout stories
- Story views tracking

### 🔥 Fitness Streaks
- Track consecutive workout days
- Visual 7-day streak calendar
- Current streak and longest streak stats
- Motivational messages based on streak length
- Total workouts counter

### 📊 Dashboard
- Clean, modern Snapchat-inspired interface
- Stories feed with real-time updates
- Streak tracker widget
- Quick stats overview
- Tab navigation (Feed, Friends, Challenges)

### 📷 Workout Camera
- Quick photo/video capture
- Workout details form (type, duration, calories)
- Caption support
- Preview before posting
- Multiple workout type options

### 🗄️ Database Schema
- **Profiles** - User data and fitness stats
- **Stories** - 24-hour workout posts
- **Streaks** - Daily workout tracking
- **Friendships** - Social connections
- **Challenges** - Fitness competitions
- **Workouts** - Detailed workout logs
- **Achievements** - Badges and milestones
- **Story Views** - Engagement tracking

## 🚀 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: Supabase (PostgreSQL)
- **Storage**: Supabase Storage (for media)
- **Deployment**: Vercel
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Date Handling**: date-fns

## 📦 Quick Start

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Supabase account
- Vercel account (for deployment)

### Installation

1. **Clone the repository**:
```bash
git clone https://github.com/Venugopalswamy33/snapfit-app.git
cd snapfit-app
```

2. **Install dependencies**:
```bash
npm install
```

3. **Set up environment variables**:
```bash
cp .env.example .env.local
```

Edit `.env.local` and add your Supabase credentials:
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

4. **Set up database**:
- Go to your Supabase project
- Open SQL Editor
- Copy and run the SQL from `supabase/schema.sql`

5. **Run the development server**:
```bash
npm run dev
```

6. **Open your browser**:
Navigate to [http://localhost:3000](http://localhost:3000)

## 🗄️ Database Setup

See [SETUP.md](./SETUP.md) for detailed database setup instructions.

Quick steps:
1. Create Supabase project
2. Run `supabase/schema.sql` in SQL Editor
3. Copy API credentials to `.env.local`
4. Enable Storage bucket for media uploads

## 🌐 Deployment

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Venugopalswamy33/snapfit-app)

**Manual Deployment**:

1. Push code to GitHub
2. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
3. Import your repository
4. Add environment variables:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `NEXT_PUBLIC_APP_URL`
5. Deploy!

See [SETUP.md](./SETUP.md) for detailed deployment instructions.

## 📁 Project Structure

```
snapfit-app/
├── app/
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Landing page
│   ├── dashboard/
│   │   └── page.tsx            # Main dashboard
│   └── globals.css             # Global styles
├── components/
│   ├── StoriesFeed.tsx         # Stories feed component
│   ├── StreakTracker.tsx       # Streak tracking widget
│   └── WorkoutCamera.tsx       # Camera/upload component
├── lib/
│   └── supabase.ts             # Supabase client & types
├── supabase/
│   └── schema.sql              # Database schema
├── public/                     # Static assets
├── package.json                # Dependencies
├── tailwind.config.ts          # Tailwind configuration
├── tsconfig.json               # TypeScript config
├── vercel.json                 # Vercel config
├── README.md                   # This file
└── SETUP.md                    # Detailed setup guide
```

## 🎯 Roadmap

### Phase 1 (Current) ✅
- [x] Landing page
- [x] Dashboard UI
- [x] Stories feed
- [x] Streak tracker
- [x] Camera/upload component
- [x] Database schema
- [x] Supabase integration

### Phase 2 (Coming Soon)
- [ ] User authentication
- [ ] Friends system
- [ ] Real-time story updates
- [ ] Story reactions (likes, comments)
- [ ] Push notifications
- [ ] Profile pages

### Phase 3 (Future)
- [ ] Fitness challenges
- [ ] Leaderboards
- [ ] Achievement system
- [ ] Video stories
- [ ] Story filters/stickers
- [ ] Workout analytics
- [ ] Wearable device integration
- [ ] Mobile app (React Native)

## 🎨 Customization

### Change Colors

Edit `tailwind.config.ts`:
```typescript
colors: {
  snapfit: {
    yellow: '#FFFC00',  // Your brand color
    black: '#000000',
    gray: '#F7F7F7',
  },
}
```

### Modify Workout Types

Edit `components/WorkoutCamera.tsx`:
```typescript
<option value="Custom">🎯 Custom Type</option>
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🐛 Bug Reports

Found a bug? Please open an issue on GitHub with:
- Description of the bug
- Steps to reproduce
- Expected behavior
- Screenshots (if applicable)

## 💬 Support

Need help?
- 📖 Read the [Setup Guide](./SETUP.md)
- 🐛 Check [GitHub Issues](https://github.com/Venugopalswamy33/snapfit-app/issues)
- 📧 Email: support@snapfit.app

## 🙏 Acknowledgments

- Inspired by Snapchat's engaging UI/UX
- Built with amazing open-source tools
- Thanks to the fitness community for inspiration

## 📊 Stats

- **Database Tables**: 10
- **Components**: 3 main components
- **Pages**: 2 (Landing + Dashboard)
- **Features**: 4 core features implemented

---

**Built with ❤️ for the fitness community**

[⭐ Star this repo](https://github.com/Venugopalswamy33/snapfit-app) | [🐛 Report Bug](https://github.com/Venugopalswamy33/snapfit-app/issues) | [✨ Request Feature](https://github.com/Venugopalswamy33/snapfit-app/issues)
