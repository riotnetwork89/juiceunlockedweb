'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-juice-black/90 backdrop-blur-md border-b border-orange/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-display font-black ju-hero">
              JUICE UNLOCKED
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-white hover:text-orange transition-colors font-medium">
              Home
            </Link>
            <Link href="/promo" className="text-white hover:text-orange transition-colors font-medium">
              Promo
            </Link>
            <Link href="/merch" className="text-white hover:text-orange transition-colors font-medium">
              Merch
            </Link>
            <Link href="/music" className="text-white hover:text-orange transition-colors font-medium">
              Music
            </Link>
            <Link href="/promo" className="btn-juice">
              Buy Promo
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-orange transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-juice-black/95 backdrop-blur-md">
              <Link
                href="/"
                className="block px-3 py-2 text-white hover:text-orange transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/promo"
                className="block px-3 py-2 text-white hover:text-orange transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Promo
              </Link>
              <Link
                href="/merch"
                className="block px-3 py-2 text-white hover:text-orange transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Merch
              </Link>
              <Link
                href="/music"
                className="block px-3 py-2 text-white hover:text-orange transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Music
              </Link>
              <Link
                href="/promo"
                className="block mx-3 my-2 btn-juice text-center"
                onClick={() => setIsOpen(false)}
              >
                Buy Promo
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
