'use client'

import { useState, useRef } from 'react'
import { Camera, X, Check, Image as ImageIcon, Video } from 'lucide-react'

interface WorkoutCameraProps {
  onCapture?: (file: File, type: 'image' | 'video') => void
  onClose?: () => void
}

export default function WorkoutCamera({ onCapture, onClose }: WorkoutCameraProps) {
  const [capturedMedia, setCapturedMedia] = useState<string | null>(null)
  const [mediaType, setMediaType] = useState<'image' | 'video'>('image')
  const [caption, setCaption] = useState('')
  const [workoutType, setWorkoutType] = useState('')
  const [duration, setDuration] = useState('')
  const [calories, setCalories] = useState('')
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const url = URL.createObjectURL(file)
      setCapturedMedia(url)
      setMediaType(file.type.startsWith('video') ? 'video' : 'image')
    }
  }

  const handlePost = () => {
    if (capturedMedia && fileInputRef.current?.files?.[0]) {
      onCapture?.(fileInputRef.current.files[0], mediaType)
      // Reset form
      setCapturedMedia(null)
      setCaption('')
      setWorkoutType('')
      setDuration('')
      setCalories('')
    }
  }

  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-2xl font-bold">Share Workout</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {!capturedMedia ? (
            /* Upload Section */
            <div className="space-y-4">
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*,video/*"
                onChange={handleFileSelect}
                className="hidden"
              />
              
              <button
                onClick={() => fileInputRef.current?.click()}
                className="w-full bg-gradient-to-r from-orange-400 to-red-500 text-white py-16 rounded-2xl hover:shadow-lg transition-all flex flex-col items-center justify-center space-y-4"
              >
                <Camera className="w-16 h-16" />
                <span className="text-xl font-bold">Snap Your Workout</span>
                <span className="text-sm text-white/80">Photo or Video</span>
              </button>

              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => {
                    setMediaType('image')
                    fileInputRef.current?.click()
                  }}
                  className="bg-blue-500 text-white py-8 rounded-xl hover:bg-blue-600 transition-colors flex flex-col items-center space-y-2"
                >
                  <ImageIcon className="w-8 h-8" />
                  <span className="font-semibold">Photo</span>
                </button>
                <button
                  onClick={() => {
                    setMediaType('video')
                    fileInputRef.current?.click()
                  }}
                  className="bg-purple-500 text-white py-8 rounded-xl hover:bg-purple-600 transition-colors flex flex-col items-center space-y-2"
                >
                  <Video className="w-8 h-8" />
                  <span className="font-semibold">Video</span>
                </button>
              </div>
            </div>
          ) : (
            /* Preview & Details Section */
            <div className="space-y-4">
              {/* Media Preview */}
              <div className="relative rounded-2xl overflow-hidden bg-gray-100">
                {mediaType === 'image' ? (
                  <img
                    src={capturedMedia}
                    alt="Workout preview"
                    className="w-full h-64 object-cover"
                  />
                ) : (
                  <video
                    src={capturedMedia}
                    controls
                    className="w-full h-64 object-cover"
                  />
                )}
              </div>

              {/* Caption */}
              <div>
                <label className="block text-sm font-semibold mb-2">Caption</label>
                <textarea
                  value={caption}
                  onChange={(e) => setCaption(e.target.value)}
                  placeholder="How was your workout? 💪"
                  className="w-full p-3 border rounded-xl resize-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  rows={3}
                />
              </div>

              {/* Workout Details */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Workout Type</label>
                  <select
                    value={workoutType}
                    onChange={(e) => setWorkoutType(e.target.value)}
                    className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  >
                    <option value="">Select type</option>
                    <option value="Cardio">🏃 Cardio</option>
                    <option value="Strength">💪 Strength</option>
                    <option value="Yoga">🧘 Yoga</option>
                    <option value="HIIT">⚡ HIIT</option>
                    <option value="Cycling">🚴 Cycling</option>
                    <option value="Swimming">🏊 Swimming</option>
                    <option value="Sports">⚽ Sports</option>
                    <option value="Other">🎯 Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Duration (min)</label>
                  <input
                    type="number"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    placeholder="30"
                    className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Calories Burned</label>
                <input
                  type="number"
                  value={calories}
                  onChange={(e) => setCalories(e.target.value)}
                  placeholder="250"
                  className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-3 pt-4">
                <button
                  onClick={() => setCapturedMedia(null)}
                  className="flex-1 bg-gray-200 text-gray-800 py-3 rounded-xl font-semibold hover:bg-gray-300 transition-colors"
                >
                  Retake
                </button>
                <button
                  onClick={handlePost}
                  className="flex-1 bg-gradient-to-r from-orange-400 to-red-500 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all flex items-center justify-center space-x-2"
                >
                  <Check className="w-5 h-5" />
                  <span>Post Story</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
