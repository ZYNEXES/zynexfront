'use client';

import Link from 'next/link';
import { Facebook, Twitter, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-12">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        {/* Logo and Description */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold">ZYNEX</h2>
          <p className="text-gray-400 text-sm mt-2">Reliable shipping solutions for your business.</p>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-6">
          <Link href="#" className="text-gray-400 hover:text-white">Home</Link>
          <Link href="#" className="text-gray-400 hover:text-white">About</Link>
          <Link href="#" className="text-gray-400 hover:text-white">Services</Link>
          <Link href="#" className="text-gray-400 hover:text-white">Contact</Link>
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-4">
          <Link href="#" className="text-gray-400 hover:text-white">
            <Facebook className="w-5 h-5" />
          </Link>
          <Link href="#" className="text-gray-400 hover:text-white">
            <Twitter className="w-5 h-5" />
          </Link>
          <Link href="#" className="text-gray-400 hover:text-white">
            <Instagram className="w-5 h-5" />
          </Link>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center text-gray-500 text-sm mt-6">
      </div>
    </footer>
  );
}
