'use client';

import Navigation from '@/components/Navigation';
import { Upload, Music, DollarSign, CheckCircle } from 'lucide-react';
import { useState } from 'react';

export default function SubmitPage() {
  const [formData, setFormData] = useState({
    artistName: '',
    projectTitle: '',
    genre: '',
    description: '',
    instagram: '',
    twitter: '',
    spotify: '',
    explicit: false,
    juApproval: false,
    priorityReview: false
  });

  const [files, setFiles] = useState<{
    cover: File | null;
    audio: File | null;
  }>({
    cover: null,
    audio: null
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, fileType: 'cover' | 'audio') => {
    const file = e.target.files?.[0];
    if (file) {
      setFiles(prev => ({
        ...prev,
        [fileType]: file
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData, files);
  };

  return (
    <div className="min-h-screen bg-orange">
      <Navigation />
      
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-7xl font-display font-black text-pulp-yellow mb-6">
              Submit Your Music
            </h1>
            <p className="text-xl text-black max-w-2xl mx-auto">
              Ready to get your music heard? Submit your tracks for consideration and join the JUICE UNLOCKED family.
            </p>
          </div>

          {/* Submission Form */}
          <form onSubmit={handleSubmit} className="card-orange">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Artist Name */}
              <div>
                <label className="block text-black font-medium mb-2">Artist Name *</label>
                <input
                  type="text"
                  name="artistName"
                  value={formData.artistName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/20 border border-black/30 rounded-lg text-black placeholder-gray-600 focus:border-black focus:outline-none"
                  placeholder="Your artist name"
                  required
                />
              </div>

              {/* Project Title */}
              <div>
                <label className="block text-black font-medium mb-2">Project Title *</label>
                <input
                  type="text"
                  name="projectTitle"
                  value={formData.projectTitle}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/20 border border-black/30 rounded-lg text-black placeholder-gray-600 focus:border-black focus:outline-none"
                  placeholder="Song or album title"
                  required
                />
              </div>

              {/* Genre */}
              <div>
                <label className="block text-black font-medium mb-2">Genre *</label>
                <select
                  name="genre"
                  value={formData.genre}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/20 border border-black/30 rounded-lg text-black focus:border-black focus:outline-none"
                  required
                >
                  <option value="">Select genre</option>
                  <option value="hip-hop">Hip Hop</option>
                  <option value="rap">Rap</option>
                  <option value="rb">R&B</option>
                  <option value="pop">Pop</option>
                  <option value="rock">Rock</option>
                  <option value="electronic">Electronic</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Explicit Content */}
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="explicit"
                  checked={formData.explicit}
                  onChange={handleInputChange}
                  className="w-5 h-5 text-orange bg-white/20 border-black/30 rounded focus:ring-orange focus:ring-2"
                />
                <label className="ml-3 text-black font-medium">Explicit Content</label>
              </div>
            </div>

            {/* Cover Art Upload */}
            <div className="mb-6">
              <label className="block text-black font-medium mb-2">Cover Art * (JPG/PNG)</label>
              <div className="border-2 border-dashed border-black/30 rounded-lg p-8 text-center hover:border-black transition-colors">
                <Upload className="mx-auto text-orange mb-4" size={48} />
                <p className="text-black mb-2">Drag and drop your cover art here, or click to browse</p>
                <input
                  type="file"
                  accept="image/jpeg,image/png"
                  onChange={(e) => handleFileChange(e, 'cover')}
                  className="hidden"
                  id="cover-upload"
                />
                <label htmlFor="cover-upload" className="btn-yellow-solid cursor-pointer">
                  Choose File
                </label>
                {files.cover && (
                  <p className="text-green-400 mt-2">✓ {files.cover.name}</p>
                )}
              </div>
            </div>

            {/* Audio Upload */}
            <div className="mb-6">
              <label className="block text-black font-medium mb-2">Audio Files * (MP3 or ZIP)</label>
              <div className="border-2 border-dashed border-black/30 rounded-lg p-8 text-center hover:border-black transition-colors">
                <Music className="mx-auto text-orange mb-4" size={48} />
                <p className="text-black mb-2">Upload individual MP3 files or a ZIP archive</p>
                <input
                  type="file"
                  accept="audio/mpeg,.zip"
                  onChange={(e) => handleFileChange(e, 'audio')}
                  className="hidden"
                  id="audio-upload"
                  multiple
                />
                <label htmlFor="audio-upload" className="btn-yellow-solid cursor-pointer">
                  Choose Files
                </label>
                {files.audio && (
                  <p className="text-green-400 mt-2">✓ {files.audio.name}</p>
                )}
              </div>
            </div>

            {/* Description */}
            <div className="mb-6">
              <label className="block text-black font-medium mb-2">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-3 bg-white/20 border border-black/30 rounded-lg text-black placeholder-gray-600 focus:border-black focus:outline-none"
                placeholder="Tell us about your music, inspiration, or anything else you'd like us to know..."
              />
            </div>

            {/* Social Links */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div>
                <label className="block text-black font-medium mb-2">Instagram</label>
                <input
                  type="url"
                  name="instagram"
                  value={formData.instagram}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/20 border border-black/30 rounded-lg text-black placeholder-gray-600 focus:border-black focus:outline-none"
                  placeholder="https://instagram.com/yourusername"
                />
              </div>
              <div>
                <label className="block text-black font-medium mb-2">Twitter/X</label>
                <input
                  type="url"
                  name="twitter"
                  value={formData.twitter}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/20 border border-black/30 rounded-lg text-black placeholder-gray-600 focus:border-black focus:outline-none"
                  placeholder="https://twitter.com/yourusername"
                />
              </div>
              <div>
                <label className="block text-black font-medium mb-2">Spotify</label>
                <input
                  type="url"
                  name="spotify"
                  value={formData.spotify}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/20 border border-black/30 rounded-lg text-black placeholder-gray-600 focus:border-black focus:outline-none"
                  placeholder="https://open.spotify.com/artist/..."
                />
              </div>
            </div>

            {/* Special Options */}
            <div className="bg-black/10 rounded-lg p-6 mb-8">
              <div className="flex items-center mb-4">
                <input
                  type="checkbox"
                  name="juApproval"
                  checked={formData.juApproval}
                  onChange={handleInputChange}
                  className="w-5 h-5 text-orange bg-white/20 border-black/30 rounded focus:ring-orange focus:ring-2"
                />
                <label className="ml-3 text-black font-medium">Submit for JU Approval</label>
              </div>
              
              <div className="flex items-start">
                <input
                  type="checkbox"
                  name="priorityReview"
                  checked={formData.priorityReview}
                  onChange={handleInputChange}
                  className="w-5 h-5 text-orange bg-white/20 border-black/30 rounded focus:ring-orange focus:ring-2 mt-1"
                />
                <div className="ml-3">
                  <label className="text-black font-medium flex items-center gap-2">
                    Priority Review - $29
                    <DollarSign className="text-orange" size={16} />
                  </label>
                  <p className="text-black/70 text-sm mt-1">
                    Get your submission reviewed within 24 hours and receive detailed feedback
                  </p>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button type="submit" className="btn-yellow-solid text-lg px-12 py-4 flex items-center gap-2 mx-auto">
                <CheckCircle size={20} />
                Submit for Review
              </button>
              <p className="text-black/70 text-sm mt-4">
                By submitting, you agree to our terms and conditions. We&apos;ll review your submission and get back to you within 3-5 business days.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
