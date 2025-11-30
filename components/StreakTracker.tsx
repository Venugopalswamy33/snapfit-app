'use client'

import { useState, useEffect } from 'react'
import { Flame, Calendar, TrendingUp } from 'lucide-react'
import { supabase, Profile, Streak } from '@/lib/supabase'
import { format, subDays, startOfDay } from 'date-fns'

interface StreakTrackerProps {
  userId?: string
}

export default function StreakTracker({ userId }: StreakTrackerProps) {
  const [profile, setProfile] = useState<Profile | null>(null)
  const [streakData, setStreakData] = useState<Streak[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (userId) {
      fetchStreakData()
    }
  }, [userId])

  const fetchStreakData = async () => {
    try {
      // Fetch user profile
      const { data: profileData, error: profileError } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .single()

      if (profileError) throw profileError
      setProfile(profileData)

      // Fetch last 30 days of streak data
      const thirtyDaysAgo = format(subDays(new Date(), 30), 'yyyy-MM-dd')
      const { data: streakData, error: streakError } = await supabase
        .from('streaks')
        .select('*')
        .eq('user_id', userId)
        .gte('streak_date', thirtyDaysAgo)
        .order('streak_date', { ascending: false })

      if (streakError) throw streakError
      setStreakData(streakData || [])
    } catch (error) {
      console.error('Error fetching streak data:', error)
    } finally {
      setLoading(false)
    }
  }

  const getLast7Days = () => {
    const days = []
    for (let i = 6; i >= 0; i--) {
      const date = subDays(new Date(), i)
      const dateStr = format(date, 'yyyy-MM-dd')
      const hasWorkout = streakData.some(s => s.streak_date === dateStr)
      days.push({
        date: dateStr,
        day: format(date, 'EEE'),
        hasWorkout
      })
    }
    return days
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center h-32">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-500"></div>
      </div>
    )
  }

  const last7Days = getLast7Days()

  return (
    <div className="bg-gradient-to-br from-orange-400 to-red-500 rounded-3xl p-6 text-white shadow-2xl">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-2xl font-bold mb-1">Your Streak</h3>
          <p className="text-white/80 text-sm">Keep the fire burning! 🔥</p>
        </div>
        <div className="text-center">
          <div className="text-5xl font-bold mb-1">
            {profile?.current_streak || 0}
          </div>
          <div className="text-sm text-white/80">days</div>
        </div>
      </div>

      {/* Streak Visualization */}
      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 mb-4">
        <div className="flex justify-between items-center mb-4">
          {last7Days.map((day, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                day.hasWorkout 
                  ? 'bg-white text-orange-500' 
                  : 'bg-white/20 text-white/50'
              }`}>
                {day.hasWorkout ? (
                  <Flame className="w-5 h-5" />
                ) : (
                  <Calendar className="w-5 h-5" />
                )}
              </div>
              <span className="text-xs">{day.day}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center">
          <Flame className="w-6 h-6 mx-auto mb-1 streak-fire" />
          <div className="text-2xl font-bold">{profile?.current_streak || 0}</div>
          <div className="text-xs text-white/80">Current</div>
        </div>
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center">
          <TrendingUp className="w-6 h-6 mx-auto mb-1" />
          <div className="text-2xl font-bold">{profile?.longest_streak || 0}</div>
          <div className="text-xs text-white/80">Longest</div>
        </div>
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center">
          <Calendar className="w-6 h-6 mx-auto mb-1" />
          <div className="text-2xl font-bold">{profile?.total_workouts || 0}</div>
          <div className="text-xs text-white/80">Total</div>
        </div>
      </div>

      {/* Motivation Message */}
      <div className="mt-4 text-center">
        {(profile?.current_streak || 0) === 0 && (
          <p className="text-sm text-white/90">Start your streak today! 💪</p>
        )}
        {(profile?.current_streak || 0) > 0 && (profile?.current_streak || 0) < 7 && (
          <p className="text-sm text-white/90">Great start! Keep it going! 🚀</p>
        )}
        {(profile?.current_streak || 0) >= 7 && (profile?.current_streak || 0) < 30 && (
          <p className="text-sm text-white/90">You're on fire! 🔥 Amazing streak!</p>
        )}
        {(profile?.current_streak || 0) >= 30 && (
          <p className="text-sm text-white/90">Legendary! 👑 You're unstoppable!</p>
        )}
      </div>
    </div>
  )
}
