'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              AI Ventures
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">Features</Link>
            <Link href="#solutions" className="text-gray-600 hover:text-blue-600 transition-colors">Solutions</Link>
            <Link href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">About</Link>
            <Link href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</Link>
            <div className="flex items-center space-x-4 ml-4">
              <Link href="/login" className="text-gray-600 hover:text-blue-600 font-medium">
                Login
              </Link>
              <Link 
                href="/register" 
                className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition-all shadow-sm hover:shadow-md"
              >
                Sign Up
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-white border-b border-gray-100`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link href="#features" className="block px-3 py-2 text-gray-600 hover:text-blue-600">Features</Link>
          <Link href="#solutions" className="block px-3 py-2 text-gray-600 hover:text-blue-600">Solutions</Link>
          <Link href="#about" className="block px-3 py-2 text-gray-600 hover:text-blue-600">About</Link>
          <Link href="#contact" className="block px-3 py-2 text-gray-600 hover:text-blue-600">Contact</Link>
          <div className="pt-4 pb-3 border-t border-gray-100">
            <Link href="/login" className="block px-3 py-2 text-gray-600 hover:text-blue-600">Login</Link>
            <Link href="/register" className="block px-3 py-2 text-blue-600 font-medium">Sign Up</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
