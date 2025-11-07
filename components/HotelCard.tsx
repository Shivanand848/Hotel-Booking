
import React from 'react';
import { Link } from 'react-router-dom';
import { Hotel } from '../types';
import StarRating from './StarRating';
import { MapPin } from 'lucide-react';

interface HotelCardProps {
  hotel: Hotel;
}

const HotelCard: React.FC<HotelCardProps> = ({ hotel }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-1 transition-transform duration-300">
      <Link to={`/hotel/${hotel.id}`}>
        <img className="w-full h-56 object-cover" src={hotel.images[0]} alt={hotel.name} />
        <div className="p-4">
          <div className="flex justify-between items-start">
            <h3 className="text-lg font-semibold text-dark mb-1 truncate">{hotel.name}</h3>
            <div className="flex items-center">
              <StarRating rating={hotel.rating} />
              <span className="ml-2 text-sm text-gray-600">({hotel.rating.toFixed(1)})</span>
            </div>
          </div>
          <p className="text-sm text-gray-500 flex items-center mb-2">
            <MapPin className="w-4 h-4 mr-1 text-primary" />
            {hotel.city}
          </p>
          <div className="mt-2 text-right">
            <p className="text-lg font-bold text-primary">${hotel.price}<span className="text-sm font-normal text-gray-600">/night</span></p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default HotelCard;
