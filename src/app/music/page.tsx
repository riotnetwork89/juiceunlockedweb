import Navigation from '@/components/Navigation';
import { Play, Heart, Star } from 'lucide-react';

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
    <div className="min-h-screen bg-orange">
      <Navigation />
      
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Artist Profile Header */}
          <div className="mb-16">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-64 h-64 bg-gradient-to-br from-orange to-red-600 rounded-2xl flex items-center justify-center">
                <div className="w-32 h-32 bg-black/20 rounded-full flex items-center justify-center">
                  <div className="text-white text-4xl font-bold">AR</div>
                </div>
              </div>
              
              <div className="flex-1">
                <h1 className="text-6xl font-display font-black text-pulp-yellow mb-4">
                  Alex Rivera
                </h1>
                <div className="flex items-center gap-4 text-black mb-4">
                  <span className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-orange rounded-full"></div>
                    Los Angeles, CA
                  </span>
                  <span>alex_rivera</span>
                  <span>youtube.com/alexrivera</span>
                </div>
                
                <div className="grid grid-cols-2 gap-8 mb-6">
                  <div>
                    <div className="text-black font-bold mb-1">STREAMS</div>
                    <div className="stats-number">1,200</div>
                  </div>
                  <div>
                    <div className="text-black font-bold mb-1">UPLOADS</div>
                    <div className="stats-number">3</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 mb-6">
                  <div className="rating-stars">
                    <Star className="fill-current" size={24} />
                    <Star className="fill-current" size={24} />
                    <Star className="fill-current" size={24} />
                    <Star className="fill-current" size={24} />
                    <Star size={24} />
                  </div>
                  <div className="flex items-center gap-2 bg-black/20 px-3 py-1 rounded-full">
                    <Play size={16} className="text-black" />
                    <span className="text-black font-bold">5</span>
                    <span className="text-black font-bold">2</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h2 className="text-black font-bold mb-2">BIO</h2>
              <p className="text-black text-lg">
                Hip-hop artist blending classic vibes with modern flows. Latest mixtape &quot;All or Nothing&quot; out now!
              </p>
            </div>
          </div>

          {/* JU Leaderboards */}
          <section className="mb-16">
            <h2 className="text-5xl font-display font-black text-pulp-yellow mb-12">JU LEADERBOARDS</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-display font-bold text-black mb-6">TOP STREAMS THIS WEEK</h3>
                <div className="space-y-4">
                  {[
                    { rank: 1, title: 'Dream Chaser', artist: 'MC Thunder' },
                    { rank: 2, title: 'The Come Up', artist: 'Rising Star' },
                    { rank: 3, title: 'Midnight Grooves', artist: 'Luna Rose' },
                    { rank: 4, title: 'Night Drive', artist: 'Urban Poet' }
                  ].map((track) => (
                    <div key={track.rank} className="flex items-center gap-4 text-pulp-yellow">
                      <span className="text-2xl font-bold w-8">{track.rank}</span>
                      <span className="text-xl">{track.title}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-display font-bold text-black mb-6">TOP NEW UPLOADS</h3>
                <div className="space-y-4">
                  {[
                    { rank: 1, title: 'Young & Wild', artist: 'New Artist' },
                    { rank: 2, title: 'City Lights', artist: 'Street Poet' },
                    { rank: 3, title: 'No Limits', artist: 'Tech Wizard' },
                    { rank: 4, title: 'Take Flight', artist: 'Dream Chaser' },
                    { rank: 5, title: 'Grind Mode', artist: 'Young Melody' }
                  ].map((track) => (
                    <div key={track.rank} className="flex items-center gap-4 text-pulp-yellow">
                      <span className="text-2xl font-bold w-8">{track.rank}</span>
                      <span className="text-xl">{track.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Artist Projects */}
          <section>
            <div className="space-y-6">
              {[
                { title: 'All or Nothing', type: 'Mixtape', year: '2024', rating: 5, likes: 5 },
                { title: 'Lost & Found', type: 'Album', year: '2022', rating: 4, likes: 2 }
              ].map((project, index) => (
                <div key={index} className="flex items-center gap-6 card-black">
                  <div className="w-20 h-20 bg-gradient-to-br from-orange to-red-600 rounded-lg flex items-center justify-center">
                    <div className="text-white text-xl font-bold">AR</div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-pulp-yellow mb-1">{project.title}</h3>
                    <p className="text-gray-400">{project.type} • {project.year}</p>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="rating-stars">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={i < project.rating ? 'fill-current' : ''} 
                          size={20} 
                        />
                      ))}
                    </div>
                    <div className="flex items-center gap-1 text-orange">
                      <Heart size={16} />
                      <span>{project.likes}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
