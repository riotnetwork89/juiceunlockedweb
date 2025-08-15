import Navigation from '@/components/Navigation';
import Link from 'next/link';
import { Play, TrendingUp, Music } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-orange">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-display font-black text-pulp-yellow mb-6">
            UNLOCK YOUR SOUND.<br />GET HEARD DAILY.
          </h1>
          <p className="text-xl md:text-2xl text-black mb-8 max-w-3xl mx-auto">
            The ultimate music blog and promo platform. Get your music heard, build your fanbase, and unlock your potential.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="btn-yellow-solid text-lg px-8 py-4 text-black font-bold">
              SUBMIT MUSIC
            </button>
            <button className="btn-yellow-solid text-lg px-8 py-4 text-black font-bold">
              BUY PROMO
            </button>
          </div>
        </div>
      </section>

      {/* Trending Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-display font-bold text-pulp-yellow mb-8">Trending</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Trending Cards with Photos */}
            {[
              { type: 'PREMIERE', image: '/api/placeholder/300/300', bg: 'from-orange to-red-600' },
              { type: 'INTERVIEW', image: '/api/placeholder/300/300', bg: 'from-orange to-yellow-600' },
              { type: 'JU PLAYLIST', image: '/api/placeholder/300/300', bg: 'from-red-600 to-purple-600', special: true },
              { type: 'PREMIERE', image: '/api/placeholder/300/300', bg: 'from-gray-400 to-gray-600' }
            ].map((item, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="aspect-square rounded-lg overflow-hidden relative">
                  {item.special ? (
                    <div className="w-full h-full bg-gradient-to-br from-red-600 to-purple-600 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-4xl font-bold text-green-400">TOP</div>
                        <div className="text-4xl font-bold text-green-400">PICKS</div>
                      </div>
                    </div>
                  ) : (
                    <div className={`w-full h-full bg-gradient-to-br ${item.bg}`}></div>
                  )}
                  <div className="absolute top-3 left-3">
                    <div className="bg-orange text-white text-xs font-bold px-2 py-1 rounded">{item.type}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Posts */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-display font-bold text-pulp-yellow mb-8">Latest</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Latest Posts with Photos */}
            {[
              { 
                type: 'NEWS', 
                image: '/api/placeholder/400/300',
                title: "Lil Droptop Drops 'Weekend' Freestyle",
                desc: 'Sample Headline for a Blog Post Goes Here'
              },
              { 
                type: 'PREMIERE', 
                image: '/api/placeholder/400/300',
                title: "Watch the Video for Sk8rboi's 'Coast'",
                desc: 'Sample Headline for a Blog Post Goes Here'
              },
              { 
                type: 'INTERVIEWS', 
                image: '/api/placeholder/400/300',
                title: 'New Interviews Q&A: Big Juice in Conversation',
                desc: 'Sample Headline for a Blog Post Goes Here'
              }
            ].map((item, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="aspect-video rounded-lg overflow-hidden mb-4">
                  <div className="w-full h-full bg-gradient-to-br from-blue-600 to-purple-600"></div>
                </div>
                <div className="bg-pulp-yellow text-black text-xs font-bold px-2 py-1 rounded inline-block mb-2">{item.type}</div>
                <h3 className="text-lg font-bold text-orange mb-2">{item.desc}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Weekly Editorial Picks */}
      <section className="py-16 bg-orange">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 border-4 border-pulp-yellow rounded-lg flex items-center justify-center">
              <div className="w-8 h-8 bg-pulp-yellow rounded"></div>
            </div>
            <div>
              <h2 className="text-4xl font-display font-black text-pulp-yellow">WEEKLY EDITORIAL</h2>
              <h3 className="text-4xl font-display font-black text-pulp-yellow">PICKS</h3>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-black">
            <div>
              <span className="text-2xl font-bold">1- Sample Song - Stro</span>
              <span className="float-right text-2xl font-bold">+ Song</span>
            </div>
            <div>
              <span className="text-2xl font-bold">2- Sample Song for Evampe</span>
              <span className="float-right text-2xl font-bold">+ On Away</span>
            </div>
            <div>
              <span className="text-2xl font-bold">3- Sample Song Rig Name</span>
              <span className="float-right text-2xl font-bold">+ Subtitle</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 sm:px-6 lg:px-8 bg-orange border-t border-pulp-yellow/20">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-3xl font-display font-black text-pulp-yellow mb-4">
            JUST UNLOCKED
          </div>
        </div>
      </footer>
    </div>
  );
}
