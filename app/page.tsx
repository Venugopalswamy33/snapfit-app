'use client'

import { Camera, Flame, Users, Trophy, TrendingUp } from 'lucide-react'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-yellow-400 via-orange-400 to-red-500">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-6xl font-bold text-white mb-4">
            SnapFit 💪
          </h1>
          <p className="text-xl text-white/90">
            Fitness Stories • Streaks • Social Workouts
          </p>
        </header>

        {/* Hero Section */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl p-8 mb-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-4">
                Your Fitness Journey, Snapchat Style
              </h2>
              <p className="text-gray-600 mb-6">
                Share workout stories, build streaks, challenge friends, and make fitness fun and social!
              </p>
              <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg transition-all">
                Get Started 🚀
              </button>
            </div>
            <div className="bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl p-8 text-white">
              <div className="text-center">
                <Camera className="w-16 h-16 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Snap Your Workout</h3>
                <p>Quick workout posts that disappear in 24 hours</p>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <FeatureCard
            icon={<Flame className="w-12 h-12" />}
            title="Fitness Streaks"
            description="Build daily workout streaks and keep the fire burning"
            color="from-orange-400 to-red-500"
          />
          <FeatureCard
            icon={<Camera className="w-12 h-12" />}
            title="Workout Stories"
            description="Share 24-hour workout snaps with friends"
            color="from-blue-400 to-purple-500"
          />
          <FeatureCard
            icon={<Users className="w-12 h-12" />}
            title="Friend Challenges"
            description="Compete with friends in fitness challenges"
            color="from-green-400 to-teal-500"
          />
          <FeatureCard
            icon={<Trophy className="w-12 h-12" />}
            title="Achievements"
            description="Unlock badges and celebrate milestones"
            color="from-yellow-400 to-orange-500"
          />
        </div>

        {/* Stats Section */}
        <div className="max-w-4xl mx-auto mt-12 bg-white rounded-3xl shadow-2xl p-8">
          <h3 className="text-3xl font-bold text-center mb-8">
            Why SnapFit?
          </h3>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-orange-500 mb-2">🔥</div>
              <div className="text-3xl font-bold mb-2">10K+</div>
              <div className="text-gray-600">Active Streaks</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-purple-500 mb-2">📸</div>
              <div className="text-3xl font-bold mb-2">50K+</div>
              <div className="text-gray-600">Daily Stories</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-green-500 mb-2">💪</div>
              <div className="text-3xl font-bold mb-2">100K+</div>
              <div className="text-gray-600">Workouts Logged</div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center mt-12 text-white">
          <p className="text-lg">
            Built with ❤️ for the fitness community
          </p>
        </footer>
      </div>
    </main>
  )
}

function FeatureCard({ icon, title, description, color }: any) {
  return (
    <div className={`bg-gradient-to-br ${color} rounded-2xl p-6 text-white hover:scale-105 transition-transform cursor-pointer`}>
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-white/90">{description}</p>
    </div>
  )
}
