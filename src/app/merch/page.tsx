import Navigation from '@/components/Navigation';
import { ShoppingCart, Star } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'JUICE UNLOCKED Hoodie',
    price: 65,
    images: ['/api/placeholder/400/400'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    stock: 25,
    featured: true,
    description: 'Premium heavyweight hoodie with embroidered logo'
  },
  {
    id: 2,
    name: 'Orange Gradient Tee',
    price: 35,
    images: ['/api/placeholder/400/400'],
    sizes: ['S', 'M', 'L', 'XL'],
    stock: 40,
    featured: false,
    description: 'Soft cotton tee with signature gradient design'
  },
  {
    id: 3,
    name: 'JU Snapback Hat',
    price: 45,
    images: ['/api/placeholder/400/400'],
    sizes: ['One Size'],
    stock: 15,
    featured: true,
    description: 'Classic snapback with 3D embroidered logo'
  },
  {
    id: 4,
    name: 'Pulp Yellow Crewneck',
    price: 55,
    images: ['/api/placeholder/400/400'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    stock: 30,
    featured: false,
    description: 'Cozy crewneck in signature pulp yellow'
  },
  {
    id: 5,
    name: 'UNLOCKED Tank Top',
    price: 28,
    images: ['/api/placeholder/400/400'],
    sizes: ['S', 'M', 'L', 'XL'],
    stock: 35,
    featured: false,
    description: 'Lightweight tank perfect for summer'
  },
  {
    id: 6,
    name: 'JU Beanie',
    price: 25,
    images: ['/api/placeholder/400/400'],
    sizes: ['One Size'],
    stock: 50,
    featured: false,
    description: 'Warm knit beanie with woven label'
  }
];

export default function MerchPage() {
  return (
    <div className="min-h-screen bg-orange">
      <Navigation />
      
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-display font-black text-pulp-yellow mb-6">
              Hottest Threads.<br />Street Approved.
            </h1>
            <p className="text-xl text-black max-w-3xl mx-auto">
              Limited drops. Once they&apos;re gone, they&apos;re gone.
            </p>
          </div>

          {/* Featured Products */}
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <Star className="text-pulp-yellow" size={32} />
              <h2 className="text-3xl font-display font-bold text-black">Featured Items</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {products.filter(product => product.featured).map((product) => (
                <div key={product.id} className="card-black group cursor-pointer">
                  <div className="aspect-square bg-gradient-to-br from-orange to-pulp-yellow rounded-lg mb-4 flex items-center justify-center relative overflow-hidden">
                    <div className="text-juice-black font-display font-black text-2xl">JU</div>
                    <div className="absolute top-3 right-3">
                      <div className="chip bg-orange text-white text-xs">FEATURED</div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
                  <p className="text-gray-400 text-sm mb-3">{product.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-orange">${product.price}</span>
                    <span className="text-sm text-gray-500">{product.stock} in stock</span>
                  </div>
                  <button className="btn-yellow w-full flex items-center justify-center gap-2">
                    <ShoppingCart size={16} />
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* All Products */}
          <section>
            <h2 className="text-3xl font-display font-bold text-black mb-8">All Products</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <div key={product.id} className="card-black group cursor-pointer">
                  <div className="aspect-square bg-gradient-to-br from-leaf-green to-orange rounded-lg mb-4 flex items-center justify-center relative overflow-hidden">
                    <div className="text-juice-black font-display font-black text-xl">JU</div>
                    {product.stock < 20 && (
                      <div className="absolute top-3 left-3">
                        <div className="chip bg-red-500 text-white text-xs">LOW STOCK</div>
                      </div>
                    )}
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-1">{product.name}</h3>
                  <p className="text-gray-400 text-sm mb-3">{product.description}</p>
                  
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xl font-bold text-orange">${product.price}</span>
                    <span className="text-sm text-gray-500">{product.stock} left</span>
                  </div>
                  
                  {/* Size Options */}
                  <div className="mb-4">
                    <p className="text-sm text-gray-400 mb-2">Sizes:</p>
                    <div className="flex gap-2 flex-wrap">
                      {product.sizes.map((size) => (
                        <span key={size} className="px-2 py-1 bg-white/10 rounded text-xs text-gray-300">
                          {size}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <button className="btn-yellow w-full flex items-center justify-center gap-2">
                    <ShoppingCart size={16} />
                    Buy Now
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <div className="text-center mt-16 p-8 card-orange max-w-4xl mx-auto">
            <h2 className="text-3xl font-display font-bold text-black mb-4">
              Join the JUICE UNLOCKED Family
            </h2>
            <p className="text-black mb-6">
              Wear your passion for music. Every purchase supports independent artists and the culture.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-yellow-solid text-lg px-8 py-4">
                Shop All Items
              </button>
              <button className="border border-black text-black hover:bg-black hover:text-pulp-yellow transition-colors rounded-full px-8 py-4 font-bold">
                Size Guide
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
