
import React from 'react';
import { Link } from 'react-router-dom';
import { Hotel, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center text-white hover:text-secondary transition-colors">
                <Hotel className="h-8 w-8" />
                <span className="ml-2 text-2xl font-bold">StayHub</span>
            </Link>
            <p className="text-gray-400">Find your next perfect stay with us. Unforgettable experiences await.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/hotels" className="text-gray-400 hover:text-white">All Hotels</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-white">About Us</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-white">Contact</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-white">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white"><Facebook /></a>
              <a href="#" className="text-gray-400 hover:text-white"><Twitter /></a>
              <a href="#" className="text-gray-400 hover:text-white"><Instagram /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} StayHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
