'use client'

import { useState } from 'react'
import { Camera, Users, Trophy, TrendingUp, Plus } from 'lucide-react'
import StoriesFeed from '@/components/StoriesFeed'
import StreakTracker from '@/components/StreakTracker'
import WorkoutCamera from '@/components/WorkoutCamera'

export default function Dashboard() {
  const [showCamera, setShowCamera] = useState(false)
  const [activeTab, setActiveTab] = useState<'feed' | 'friends' | 'challenges'>('feed')

  // Mock user ID - replace with actual auth
  const userId = 'demo-user-id'

  const handleCapture = (file: File, type: 'image' | 'video') => {
    console.log('Captured:', file, type)
    // TODO: Upload to Supabase Storage and create story
    setShowCamera(false)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              SnapFit
            </h1>
            
            {/* Navigation */}
            <nav className="flex items-center space-x-6">
              <button
                onClick={() => setActiveTab('feed')}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-colors ${
                  activeTab === 'feed'
                    ? 'bg-orange-100 text-orange-600'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <TrendingUp className="w-5 h-5" />
                <span className="font-semibold">Feed</span>
              </button>
              <button
                onClick={() => setActiveTab('friends')}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-colors ${
                  activeTab === 'friends'
                    ? 'bg-orange-100 text-orange-600'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <Users className="w-5 h-5" />
                <span className="font-semibold">Friends</span>
              </button>
              <button
                onClick={() => setActiveTab('challenges')}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-colors ${
                  activeTab === 'challenges'
                    ? 'bg-orange-100 text-orange-600'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <Trophy className="w-5 h-5" />
                <span className="font-semibold">Challenges</span>
              </button>
            </nav>

            {/* Camera Button */}
            <button
              onClick={() => setShowCamera(true)}
              className="bg-gradient-to-r from-orange-400 to-red-500 text-white p-3 rounded-full hover:shadow-lg transition-all"
            >
              <Camera className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Sidebar - Streak Tracker */}
          <div className="lg:col-span-1">
            <StreakTracker userId={userId} />
            
            {/* Quick Stats */}
            <div className="mt-6 bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-bold mb-4">Quick Stats</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">This Week</span>
                  <span className="font-bold text-green-600">5 workouts</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Total Calories</span>
                  <span className="font-bold text-orange-600">1,250 cal</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Friends Active</span>
                  <span className="font-bold text-blue-600">12 online</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Feed */}
          <div className="lg:col-span-2">
            {activeTab === 'feed' && <StoriesFeed />}
            
            {activeTab === 'friends' && (
              <div className="bg-white rounded-2xl p-8 text-center">
                <Users className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                <h3 className="text-2xl font-bold mb-2">Friends Coming Soon</h3>
                <p className="text-gray-600 mb-6">
                  Connect with friends and see their workout stories
                </p>
                <button className="bg-gradient-to-r from-orange-400 to-red-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all">
                  <Plus className="w-5 h-5 inline mr-2" />
                  Add Friends
                </button>
              </div>
            )}
            
            {activeTab === 'challenges' && (
              <div className="bg-white rounded-2xl p-8 text-center">
                <Trophy className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                <h3 className="text-2xl font-bold mb-2">Challenges Coming Soon</h3>
                <p className="text-gray-600 mb-6">
                  Compete with friends in fitness challenges
                </p>
                <button className="bg-gradient-to-r from-orange-400 to-red-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all">
                  <Plus className="w-5 h-5 inline mr-2" />
                  Create Challenge
                </button>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Camera Modal */}
      {showCamera && (
        <WorkoutCamera
          onCapture={handleCapture}
          onClose={() => setShowCamera(false)}
        />
      )}

      {/* Floating Action Button (Mobile) */}
      <button
        onClick={() => setShowCamera(true)}
        className="lg:hidden fixed bottom-6 right-6 bg-gradient-to-r from-orange-400 to-red-500 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all z-50"
      >
        <Camera className="w-7 h-7" />
      </button>
    </div>
  )
}
