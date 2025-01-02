import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, FolderGit2, Code2, Mail, Menu, X } from 'lucide-react';

const navItems = [
  { path: '/', label: 'Home', icon: Home },
  { path: '/projects', label: 'Projects', icon: FolderGit2 },
  { path: '/skills', label: 'Skills', icon: Code2 },
  { path: '/contact', label: 'Contact', icon: Mail },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 bg-pink-50/80 backdrop-blur-sm border-b-2 border-pink-300">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md hover:bg-pink-200"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center justify-center flex-1 space-x-8">
            {navItems.map(({ path, label, icon: Icon }) => (
              <Link
                key={path}
                to={path}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200
                  ${location.pathname === path 
                    ? 'bg-pink-200 text-pink-800 shadow-sm' 
                    : 'hover:bg-pink-100 hover:text-pink-800'}`}
              >
                <Icon size={20} className="flex-shrink-0" />
                <span className="font-medium">{label}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map(({ path, label, icon: Icon }) => (
              <Link
                key={path}
                to={path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 w-full
                  ${location.pathname === path 
                    ? 'bg-pink-200 text-pink-800 shadow-sm' 
                    : 'hover:bg-pink-100 hover:text-pink-800'}`}
              >
                <Icon size={20} className="flex-shrink-0" />
                <span className="font-medium">{label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}