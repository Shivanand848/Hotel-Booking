
import React from 'react';
import SearchBar from '../components/SearchBar';
import HotelCard from '../components/HotelCard';
import { hotels, reviews } from '../data/mockData';
import StarRating from '../components/StarRating';

const HomePage: React.FC = () => {
    const featuredHotels = hotels.slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-[500px]" style={{backgroundImage: "url('https://picsum.photos/seed/hero/1920/1080')"}}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Find Your Perfect Stay</h1>
          <p className="text-lg md:text-xl text-white mb-8 max-w-2xl">Discover the best hotels and resorts for your next adventure, tailored just for you.</p>
          <div className="w-full max-w-4xl">
            <SearchBar />
          </div>
        </div>
      </section>

      {/* Featured Hotels Section */}
      <section className="py-16 bg-accent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-dark mb-8">Featured Destinations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredHotels.map(hotel => (
              <HotelCard key={hotel.id} hotel={hotel} />
            ))}
          </div>
        </div>
      </section>

       {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-dark mb-12">What Our Guests Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {reviews.slice(0, 2).map(review => (
                    <div key={review.id} className="bg-neutral p-6 rounded-lg shadow-md">
                        <div className="flex items-center mb-4">
                            <img src={review.avatar} alt={review.user} className="w-16 h-16 rounded-full mr-4" />
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
      </section>

    </div>
  );
};

export default HomePage;
