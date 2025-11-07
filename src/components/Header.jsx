import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Hotel } from 'lucide-react';
import Button from './Button';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center text-primary hover:text-secondary transition-colors">
              <Hotel className="h-8 w-8" />
              <span className="ml-2 text-2xl font-bold">StayHub</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">Home</Link>
              <Link to="/hotels" className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">Hotels</Link>
              <Link to="/dashboard" className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">My Bookings</Link>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center space-x-2">
                <Link to="/login">
                    <Button variant="secondary">Login</Button>
                </Link>
                <Link to="/login">
                    <Button variant="primary">Sign Up</Button>
                </Link>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="text-gray-700 hover:text-primary block px-3 py-2 rounded-md text-base font-medium">Home</Link>
            <Link to="/hotels" className="text-gray-700 hover:text-primary block px-3 py-2 rounded-md text-base font-medium">Hotels</Link>
            <Link to="/dashboard" className="text-gray-700 hover:text-primary block px-3 py-2 rounded-md text-base font-medium">My Bookings</Link>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-5 space-x-2">
                 <Link to="/login" className="flex-1">
                    <Button variant="secondary" fullWidth>Login</Button>
                </Link>
                <Link to="/login" className="flex-1">
                    <Button variant="primary" fullWidth>Sign Up</Button>
                </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
