import Navigation from '@/components/Navigation';
import { Play, Heart, Share2, Filter, Upload } from 'lucide-react';
import Link from 'next/link';

const featuredProjects = [
  {
    id: 1,
    title: 'Summer Vibes',
    artist: 'DJ Heatwave',
    cover: '/api/placeholder/300/300',
    streams: 125000,
    featured: true
  },
  {
    id: 2,
    title: 'Midnight Dreams',
    artist: 'Luna Rose',
    cover: '/api/placeholder/300/300',
    streams: 89000,
    featured: true
  },
  {
    id: 3,
    title: 'City Lights',
    artist: 'Urban Poet',
    cover: '/api/placeholder/300/300',
    streams: 156000,
    featured: true
  }
];

const allProjects = [
  {
    id: 4,
    title: 'Raw Energy',
    artist: 'MC Thunder',
    cover: '/api/placeholder/200/200',
    streams: 45000,
    likes: 1200,
    approved: true
  },
  {
    id: 5,
    title: 'Smooth Operator',
    artist: 'Jazz Fusion',
    cover: '/api/placeholder/200/200',
    streams: 67000,
    likes: 890,
    approved: false
  },
  {
    id: 6,
    title: 'Electric Nights',
    artist: 'Neon Dreams',
    cover: '/api/placeholder/200/200',
    streams: 23000,
    likes: 567,
    approved: true
  },
  {
    id: 7,
    title: 'Underground King',
    artist: 'Street Poet',
    cover: '/api/placeholder/200/200',
    streams: 78000,
    likes: 1456,
    approved: true
  },
  {
    id: 8,
    title: 'Melodic Trap',
    artist: 'Young Melody',
    cover: '/api/placeholder/200/200',
    streams: 34000,
    likes: 723,
    approved: false
  },
  {
    id: 9,
    title: 'Future Sounds',
    artist: 'Tech Wizard',
    cover: '/api/placeholder/200/200',
    streams: 91000,
    likes: 1834,
    approved: true
  }
];

export default function MusicPage() {
  return (
    <div className="min-h-screen bg-juice-black">
      <Navigation />
      
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div>
              <h1 className="text-5xl md:text-7xl font-display font-black ju-hero mb-4">
                Music
              </h1>
              <p className="text-xl text-gray-300">
                Discover the hottest tracks and rising artists
              </p>
            </div>
            <Link href="/submit" className="btn-juice mt-4 md:mt-0 flex items-center gap-2">
              <Upload size={20} />
              Submit Your Music
            </Link>
          </div>

          {/* Featured Section */}
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="chip bg-orange text-white">JU APPROVED</div>
              <h2 className="text-3xl font-display font-bold text-white">Featured</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredProjects.map((project) => (
                <div key={project.id} className="card group cursor-pointer">
                  <div className="aspect-square bg-gradient-to-br from-orange to-pulp-yellow rounded-lg mb-4 flex items-center justify-center relative overflow-hidden">
                    <Play className="text-juice-black group-hover:scale-110 transition-transform" size={48} />
                    <div className="absolute top-3 right-3">
                      <div className="chip bg-orange text-white text-xs">FEATURED</div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                  <p className="text-gray-400 mb-3">{project.artist}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{project.streams.toLocaleString()} streams</span>
                    <div className="flex items-center gap-2">
                      <Heart size={16} />
                      <Share2 size={16} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Browse Section */}
          <section>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
              <h2 className="text-3xl font-display font-bold text-white mb-4 md:mb-0">Browse All</h2>
              
              <div className="flex items-center gap-4">
                <button className="flex items-center gap-2 px-4 py-2 border border-orange/30 rounded-full text-gray-300 hover:border-orange hover:text-orange transition-colors">
                  <Filter size={16} />
                  Filter
                </button>
                <select className="bg-juice-black border border-orange/30 rounded-full px-4 py-2 text-gray-300 focus:border-orange focus:outline-none">
                  <option>Latest</option>
                  <option>Most Streamed</option>
                  <option>JU Approved</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {allProjects.map((project) => (
                <div key={project.id} className="card group cursor-pointer">
                  <div className="aspect-square bg-gradient-to-br from-leaf-green to-orange rounded-lg mb-3 flex items-center justify-center relative overflow-hidden">
                    <Play className="text-juice-black group-hover:scale-110 transition-transform" size={32} />
                    {project.approved && (
                      <div className="absolute top-2 right-2">
                        <div className="w-3 h-3 bg-orange rounded-full"></div>
                      </div>
                    )}
                  </div>
                  <h3 className="text-sm font-bold text-white mb-1 truncate">{project.title}</h3>
                  <p className="text-xs text-gray-400 mb-2 truncate">{project.artist}</p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>{(project.streams / 1000).toFixed(0)}K</span>
                    <div className="flex items-center gap-1">
                      <Heart size={12} />
                      <span>{project.likes}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="btn-juice px-8 py-4">
              Load More Tracks
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
