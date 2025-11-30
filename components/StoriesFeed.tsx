'use client'

import { useState, useEffect } from 'react'
import { Camera, Heart, MessageCircle, Send } from 'lucide-react'
import { supabase, Story, Profile } from '@/lib/supabase'

export default function StoriesFeed() {
  const [stories, setStories] = useState<(Story & { profile: Profile })[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchStories()
  }, [])

  const fetchStories = async () => {
    try {
      const { data, error } = await supabase
        .from('stories')
        .select(`
          *,
          profile:profiles(*)
        `)
        .gt('expires_at', new Date().toISOString())
        .order('created_at', { ascending: false })
        .limit(20)

      if (error) throw error
      setStories(data || [])
    } catch (error) {
      console.error('Error fetching stories:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {/* Stories Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Workout Stories</h2>
        <button className="bg-gradient-to-r from-orange-400 to-red-500 text-white p-3 rounded-full hover:shadow-lg transition-all">
          <Camera className="w-6 h-6" />
        </button>
      </div>

      {/* Stories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {stories.map((story) => (
          <StoryCard key={story.id} story={story} />
        ))}
      </div>

      {stories.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          <Camera className="w-16 h-16 mx-auto mb-4 opacity-50" />
          <p className="text-lg">No stories yet. Be the first to share!</p>
        </div>
      )}
    </div>
  )
}

function StoryCard({ story }: { story: Story & { profile: Profile } }) {
  const [liked, setLiked] = useState(false)

  return (
    <div className="snap-story bg-white rounded-2xl overflow-hidden hover:scale-105 transition-transform cursor-pointer">
      {/* Story Image/Video */}
      <div className="relative h-64 bg-gradient-to-br from-purple-400 to-pink-500">
        <img
          src={story.media_url}
          alt="Workout story"
          className="w-full h-full object-cover"
        />
        
        {/* User Info Overlay */}
        <div className="absolute top-4 left-4 flex items-center space-x-2">
          <div className="w-10 h-10 rounded-full bg-white border-2 border-orange-500 overflow-hidden">
            <img
              src={story.profile.avatar_url || '/default-avatar.png'}
              alt={story.profile.username}
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-white font-semibold text-sm drop-shadow-lg">
            {story.profile.username}
          </span>
        </div>

        {/* Workout Info Badge */}
        {story.workout_type && (
          <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs">
            {story.workout_type}
          </div>
        )}
      </div>

      {/* Story Details */}
      <div className="p-4">
        <p className="text-gray-800 mb-3">{story.caption}</p>
        
        {/* Stats */}
        <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
          {story.duration_minutes && (
            <span>⏱️ {story.duration_minutes} min</span>
          )}
          {story.calories_burned && (
            <span>🔥 {story.calories_burned} cal</span>
          )}
          <span>👁️ {story.views_count}</span>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between pt-3 border-t">
          <button
            onClick={() => setLiked(!liked)}
            className={`flex items-center space-x-1 ${liked ? 'text-red-500' : 'text-gray-600'} hover:text-red-500 transition-colors`}
          >
            <Heart className={`w-5 h-5 ${liked ? 'fill-current' : ''}`} />
            <span className="text-sm">Like</span>
          </button>
          <button className="flex items-center space-x-1 text-gray-600 hover:text-blue-500 transition-colors">
            <MessageCircle className="w-5 h-5" />
            <span className="text-sm">Comment</span>
          </button>
          <button className="flex items-center space-x-1 text-gray-600 hover:text-green-500 transition-colors">
            <Send className="w-5 h-5" />
            <span className="text-sm">Share</span>
          </button>
        </div>
      </div>
    </div>
  )
}
