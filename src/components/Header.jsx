import React from 'react';
import { Bug } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg sticky top-0 z-50">
      <div className="container  mx-auto px-4 py-4">
        <Link to="/" className="flex items-center justify-center gap-3 group">
          <div className="bg-white/10 p-2 rounded-lg group-hover:bg-white/20 transition-colors">
            <Bug className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">Oops! Online</h1>
            <p className="text-sm text-indigo-200">Interactive Examples for Software Testing</p>
          </div>
        </Link>
      </div>
    </header>
  );
}