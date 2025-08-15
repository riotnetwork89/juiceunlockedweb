import Navigation from '@/components/Navigation';
import { Instagram, Mic, TrendingUp, Zap } from 'lucide-react';

const promoServices = [
  {
    id: 'ig_post',
    title: 'Instagram Post',
    price: 50,
    icon: Instagram,
    features: [
      'Professional post on main feed',
      'Story highlight inclusion',
      '24-48 hour delivery',
      'Engagement guarantee'
    ]
  },
  {
    id: 'ig_story',
    title: 'Instagram Story',
    price: 50,
    icon: TrendingUp,
    features: [
      'Featured story placement',
      '24 hour visibility',
      'Swipe-up link included',
      'Story highlight archive'
    ]
  },
  {
    id: 'podcast',
    title: 'Podcast Appearance',
    price: 200,
    icon: Mic,
    features: [
      'Live interview session',
      'Full episode feature',
      'Social media promotion',
      'Audio file provided'
    ]
  },
  {
    id: 'album_rollout',
    title: 'Full Album Rollout',
    price: 2500,
    icon: Zap,
    features: [
      'Multi-week campaign',
      'Premiere + reels/shorts',
      'Podcast + playlist placement',
      'Newsletter + analytics',
      'Dedicated campaign manager'
    ],
    popular: true
  }
];

export default function PromoPage() {
  return (
    <div className="min-h-screen bg-orange">
      <Navigation />
      
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-display font-black text-pulp-yellow mb-6">
              Buy Promo —<br />Unlock Your Exposure
            </h1>
            <p className="text-xl text-black max-w-3xl mx-auto">
              Choose your promo package, checkout, and let our team handle rest.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {promoServices.map((service) => {
              const IconComponent = service.icon;
              return (
                <div key={service.id} className={`card-black relative ${service.popular ? 'ring-2 ring-orange ju-glow' : ''}`}>
                  {service.popular && (
                    <div className="absolute -top-4 left-4">
                      <div className="chip bg-orange text-white">Popular</div>
                    </div>
                  )}
                  {service.id === 'album_rollout' && (
                    <div className="absolute -top-4 right-4">
                      <div className="chip bg-orange text-white">Premium</div>
                    </div>
                  )}
                  
                  <div className="mb-6">
                    <h3 className="text-3xl font-display font-bold text-pulp-yellow mb-2">
                      {service.title} — ${service.price}
                    </h3>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, index) => (
                      <li key={index} className="text-gray-300">
                        • {feature}
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full text-lg py-4 font-bold rounded-lg transition-colors ${
                    service.id === 'podcast' 
                      ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                      : 'bg-orange hover:bg-orange/80 text-juice-black'
                  }`}>
                    {service.id === 'podcast' ? 'BOOK SLOT' : 'BUY NOW'}
                  </button>
                </div>
              );
            })}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16 p-8 card-orange max-w-4xl mx-auto">
            <h2 className="text-3xl font-display font-bold text-black mb-4">
              Ready to Unlock Your Potential?
            </h2>
            <p className="text-black mb-6">
              Choose the perfect promotion package for your music and watch your fanbase grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-yellow-solid text-lg px-8 py-4">
                Get Started Today
              </button>
              <button className="border border-black text-black hover:bg-black hover:text-pulp-yellow transition-colors rounded-full px-8 py-4 font-bold">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
