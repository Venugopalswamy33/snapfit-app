import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database Types
export interface Profile {
  id: string
  username: string
  display_name?: string
  avatar_url?: string
  bio?: string
  current_streak: number
  longest_streak: number
  total_workouts: number
  created_at: string
  updated_at: string
}

export interface Story {
  id: string
  user_id: string
  media_url: string
  media_type: string
  caption?: string
  workout_type?: string
  duration_minutes?: number
  calories_burned?: number
  views_count: number
  created_at: string
  expires_at: string
}

export interface Streak {
  id: string
  user_id: string
  streak_date: string
  workout_completed: boolean
  created_at: string
}

export interface Friendship {
  id: string
  user_id: string
  friend_id: string
  status: 'pending' | 'accepted' | 'rejected'
  created_at: string
}

export interface Challenge {
  id: string
  creator_id: string
  title: string
  description?: string
  challenge_type?: string
  goal_value?: number
  start_date?: string
  end_date?: string
  is_active: boolean
  created_at: string
}

export interface Workout {
  id: string
  user_id: string
  workout_type: string
  duration_minutes?: number
  calories_burned?: number
  distance_km?: number
  notes?: string
  created_at: string
}

export interface Achievement {
  id: string
  name: string
  description?: string
  icon_url?: string
  requirement_type?: string
  requirement_value?: number
  created_at: string
}
