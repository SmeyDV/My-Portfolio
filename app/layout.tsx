"use client";
import '../styles/globals.css';

import { useState } from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { FaBars, FaTimes } from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export default function Layout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-gradient-to-r from-blue-700 to-blue-600 text-white p-4 shadow-lg">
          <nav className="container mx-auto flex justify-between items-center">
            <div>
              <a href="/" className="text-2xl font-bold tracking-wide hover:text-gray-300 transition-colors">Reaksmey Rin</a>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="/about" className="hover:text-gray-300 transition-colors">About</a>
              <a href="/projects" className="hover:text-gray-300 transition-colors">Projects</a>
              <a href="/contact" className="hover:text-gray-300 transition-colors">Contact</a>
            </div>
            <div className="md:hidden">
              <button onClick={toggleMenu} aria-label="Menu">
                {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>
          </nav>
          {menuOpen && (
            <div className="md:hidden bg-blue-700 text-white mt-2 rounded-lg shadow-lg">
              <Link href="/about" className="block py-2 px-4 hover:bg-blue-600 transition-colors">About</Link>
              <Link href="/projects" className="block py-2 px-4 hover:bg-blue-600 transition-colors">Projects</Link>
              <Link href="/contact" className="block py-2 px-4 hover:bg-blue-600 transition-colors">Contact</Link>
            </div>
          )}
        </header>
        <main className="container mx-auto p-4">
          {children}
        </main>
        <footer className="bg-blue-600 text-white p-4 mt-4 shadow-lg">
          <div className="container mx-auto text-center">
            &copy; {new Date().getFullYear()} Reaksmey Rin. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
