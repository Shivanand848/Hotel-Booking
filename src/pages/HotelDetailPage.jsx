import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { hotels } from '../data/mockData';
import StarRating from '../components/StarRating';
import Button from '../components/Button';
import BookingModal from '../components/BookingModal';
import { MapPin, Wifi, Wind, Utensils, Award } from 'lucide-react';

const HotelDetailPage = () => {
  const { id } = useParams();
  const hotel = hotels.find(h => h.id === parseInt(id || ''));
  const [isBookingModalOpen, setBookingModalOpen] = useState(false);

  if (!hotel) {
    return <div className="text-center py-20">Hotel not found.</div>;
  }
  
  const amenityIcons = {
    'Free WiFi': <Wifi className="w-5 h-5 mr-2 text-primary" />,
    'Swimming Pool': <Award className="w-5 h-5 mr-2 text-primary" />,
    'Spa': <Award className="w-5 h-5 mr-2 text-primary" />,
    'Restaurant': <Utensils className="w-5 h-5 mr-2 text-primary" />,
    'Fitness Center': <Award className="w-5 h-5 mr-2 text-primary" />,
    'Air Conditioning': <Wind className="w-5 h-5 mr-2 text-primary" />,
  };

  return (
    <>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <div>
                <h1 className="text-4xl font-bold text-dark">{hotel.name}</h1>
                <p className="text-lg text-gray-500 flex items-center mt-2">
                    <MapPin className="w-5 h-5 mr-2 text-primary" />
                    {hotel.city}
                </p>
            </div>
            <div className="flex items-center mt-4 md:mt-0">
                <StarRating rating={hotel.rating} className="text-2xl" />
                <span className="ml-3 text-xl font-bold text-gray-700">{hotel.rating.toFixed(1)}</span>
                <span className="ml-2 text-gray-500">({hotel.reviews.length} reviews)</span>
            </div>
        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <img src={hotel.images[0]} alt={hotel.name} className="w-full h-96 object-cover rounded-lg shadow-lg col-span-1 md:col-span-2" />
            {hotel.images.slice(1, 4).map((img, index) => (
                <img key={index} src={img} alt={`${hotel.name} ${index + 1}`} className="w-full h-48 object-cover rounded-lg shadow-md hidden md:block" />
            ))}
        </div>

        {/* Details & Booking */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
                <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                    <h2 className="text-2xl font-semibold mb-4">About this hotel</h2>
                    <p className="text-gray-600 leading-relaxed">{hotel.description}</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold mb-4">Amenities</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {hotel.amenities.map(amenity => (
                            <div key={amenity} className="flex items-center text-gray-700">
                                {amenityIcons[amenity] || <Award className="w-5 h-5 mr-2 text-primary" />}
                                {amenity}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="lg:col-span-1">
                <div className="bg-white p-6 rounded-lg shadow-md sticky top-24">
                    <p className="text-2xl font-bold text-primary">${hotel.price} <span className="text-lg font-normal text-gray-600">/ night</span></p>
                    <p className="text-gray-500 text-sm mb-6">Taxes and fees may apply</p>
                    <Button fullWidth onClick={() => setBookingModalOpen(true)}>Book Now</Button>
                </div>
            </div>
        </div>

        {/* Reviews */}
        <div className="mt-12">
            <h2 className="text-3xl font-bold text-dark mb-6">Guest Reviews</h2>
            <div className="space-y-6">
                {hotel.reviews.map(review => (
                    <div key={review.id} className="bg-white p-6 rounded-lg shadow-md">
                        <div className="flex items-center mb-4">
                            <img src={review.avatar} alt={review.user} className="w-14 h-14 rounded-full mr-4" />
                            <div>
                                <h4 className="font-semibold text-lg text-dark">{review.user}</h4>
                                <StarRating rating={review.rating} />
                            </div>
                        </div>
                        <p className="text-gray-600 italic">"{review.comment}"</p>
                    </div>
                ))}
            </div>
        </div>
      </div>
      <BookingModal hotel={hotel} isOpen={isBookingModalOpen} onClose={() => setBookingModalOpen(false)} />
    </>
  );
};

export default HotelDetailPage;
