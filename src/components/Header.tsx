"use client"; 

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; 
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa';

const Header: React.FC = () => {
  const pathname = usePathname(); 

  return (
    <header className="bg-gray-100 shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link href="/">
          <Image 
            src="/images/spacetradecore-logo.png" // Chemin relatif à public
            alt="Logo" 
            width={150} 
            height={40} 
          />
        </Link>

        {/* Barre de recherche */}
        <div className="flex-grow mx-4">
          <input
            type="text"
            placeholder="Search..."
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Liens de navigation */}
        <nav className="flex items-center space-x-4">
          <Link href="/" className={`text-gray-700 hover:text-gray-900 ${pathname === '/' ? 'font-bold' : ''}`}>
            Home
          </Link>
          <Link href="/categories" className={`text-gray-700 hover:text-gray-900 ${pathname === '/categories' ? 'font-bold' : ''}`}>
            Categories
          </Link>
          <Link href="/cart" className="relative">
            <FaShoppingCart className="text-gray-700 hover:text-gray-900" size={20} />
            {/* You can show the cart count here */}
          </Link>
          <Link href="/profile" className="relative">
            <FaUser className="text-gray-700 hover:text-gray-900" size={20} />
            {/* You can show user notifications here */}
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
