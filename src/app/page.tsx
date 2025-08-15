import Navigation from '@/components/Navigation';
import Link from 'next/link';
import { Play, TrendingUp, Music } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-juice-black">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-display font-black ju-hero mb-6">
            UNLOCK YOUR SOUND.<br />GET HEARD DAILY.
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            The ultimate music blog and promo platform. Get your music heard, build your fanbase, and unlock your potential.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/submit" className="btn-juice text-lg px-8 py-4">
              Submit Music
            </Link>
            <Link href="/promo" className="btn-juice text-lg px-8 py-4">
              Buy Promo
            </Link>
          </div>
        </div>
      </section>

      {/* Trending Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <TrendingUp className="text-orange" size={32} />
            <h2 className="text-4xl font-display font-bold text-white">Trending Now</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Trending Cards - Sample Data */}
            {[
              { type: 'PREMIERE', bg: 'from-orange to-red-600', artist: 'Rising Star' },
              { type: 'INTERVIEW', bg: 'from-orange to-yellow-600', artist: 'MC Thunder' },
              { type: 'JU PLAYLIST', bg: 'from-green-600 to-blue-600', artist: 'TOP PICKS' },
              { type: 'PREMIERE', bg: 'from-purple-600 to-pink-600', artist: 'New Artist' }
            ].map((item, index) => (
              <div key={index} className="card-black group cursor-pointer">
                <div className={`aspect-square bg-gradient-to-br ${item.bg} rounded-lg mb-4 flex items-center justify-center relative overflow-hidden`}>
                  <div className="w-20 h-20 bg-black/20 rounded-full flex items-center justify-center">
                    <Play className="text-white" size={32} />
                  </div>
                  <div className="absolute top-3 left-3">
                    <div className="chip bg-orange text-white text-xs">{item.type}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Posts */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Music className="text-orange" size={32} />
            <h2 className="text-4xl font-display font-bold text-white">Latest Posts</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Latest Posts - Sample Data */}
            {[
              { type: 'NEWS', bg: 'from-blue-600 to-purple-600', title: "Lil Droptop Drops 'Weekend' Freestyle", desc: 'New heat from the rising star...' },
              { type: 'PREMIERE', bg: 'from-orange to-red-600', title: "Watch the Video for Sk8rboi's 'Coast'", desc: 'Exclusive premiere on JUICE UNLOCKED...' },
              { type: 'VIDEOS', bg: 'from-yellow-600 to-orange', title: 'New Interviews Q&A: Big Juice in Conversation', desc: 'In-depth conversation with the artist...' },
              { type: 'INTERVIEWS', bg: 'from-green-600 to-teal-600', title: 'Behind the Scenes: Studio Sessions', desc: 'Exclusive behind the scenes content...' }
            ].map((item, index) => (
              <div key={index} className="card-black group cursor-pointer">
                <div className={`aspect-video bg-gradient-to-br ${item.bg} rounded-lg mb-4 relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <Play className="text-white" size={24} />
                  </div>
                </div>
                <div className="chip mb-3 bg-pulp-yellow text-juice-black">{item.type}</div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Weekly Editorial Picks */}
      <section className="py-16 bg-pulp-yellow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 border-4 border-orange rounded-lg flex items-center justify-center">
              <div className="w-8 h-8 bg-orange rounded"></div>
            </div>
            <div>
              <h2 className="text-4xl font-display font-black text-orange">WEEKLY EDITORIAL</h2>
              <h3 className="text-4xl font-display font-black text-orange">PICKS</h3>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-orange">
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
      <footer className="py-16 px-4 sm:px-6 lg:px-8 border-t border-orange/20">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-3xl font-display font-black ju-hero mb-4">
            JUICE UNLOCKED
          </div>
          <p className="text-gray-400 mb-8">Unlock Your Sound. Unlock Your Potential.</p>
          <div className="flex justify-center space-x-8">
            <Link href="/submit" className="text-gray-400 hover:text-orange transition-colors">
              Submit Music
            </Link>
            <Link href="/promo" className="text-gray-400 hover:text-orange transition-colors">
              Promo Services
            </Link>
            <Link href="/merch" className="text-gray-400 hover:text-orange transition-colors">
              Merchandise
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
