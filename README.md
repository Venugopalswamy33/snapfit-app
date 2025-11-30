# SnapFit 💪

A Snapchat-style fitness app with workout stories, streaks, and social features.

## Features

- 📸 **Workout Stories** - Share 24-hour disappearing workout posts
- 🔥 **Fitness Streaks** - Build consecutive workout day streaks
- 👥 **Social Feed** - See friends' workout activities
- 🏆 **Challenges** - Compete with friends in fitness challenges
- 📊 **Progress Tracking** - Monitor your fitness journey
- 🎯 **Daily Goals** - Set and achieve daily fitness targets
- 💬 **Quick Snaps** - Fast workout logging with camera
- 🏅 **Achievements** - Unlock badges and milestones

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: Supabase
- **Deployment**: Vercel
- **Icons**: Lucide React
- **Animations**: Framer Motion

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Venugopalswamy33/snapfit-app.git
cd snapfit-app
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

Add your Supabase credentials to `.env.local`:
```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
snapfit-app/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Landing page
│   └── globals.css         # Global styles
├── components/             # Reusable components
├── lib/                    # Utility functions
├── public/                 # Static assets
└── types/                  # TypeScript types
```

## Deployment

Deploy to Vercel with one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Venugopalswamy33/snapfit-app)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - feel free to use this project for your own purposes.

## Support

For support, email support@snapfit.app or join our Discord community.

---

Built with ❤️ for the fitness community
