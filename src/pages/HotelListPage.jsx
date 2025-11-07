import React, { useState, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { hotels } from '../data/mockData';
import HotelCard from '../components/HotelCard';
import StarRating from '../components/StarRating';
import { SlidersHorizontal, ArrowDownUp } from 'lucide-react';

const HotelListPage = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const initialCity = queryParams.get('city') || '';

    const [cityFilter, setCityFilter] = useState(initialCity);
    const [priceRange, setPriceRange] = useState(500);
    const [rating, setRating] = useState(0);
    const [sortBy, setSortBy] = useState('rating_desc');
    
    const allCities = useMemo(() => Array.from(new Set(hotels.map(h => h.city))), []);

    const filteredHotels = useMemo(() => {
        let filtered = hotels
            .filter(hotel => hotel.price <= priceRange)
            .filter(hotel => hotel.rating >= rating);

        if (cityFilter) {
            filtered = filtered.filter(hotel => hotel.city.toLowerCase().includes(cityFilter.toLowerCase()));
        }

        switch(sortBy) {
            case 'price_asc':
                filtered.sort((a, b) => a.price - b.price);
                break;
            case 'price_desc':
                filtered.sort((a, b) => b.price - a.price);
                break;
            case 'rating_desc':
                filtered.sort((a, b) => b.rating - a.rating);
                break;
        }

        return filtered;
    }, [cityFilter, priceRange, rating, sortBy]);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-dark mb-6">Find Your Hotel</h1>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filters Sidebar */}
            <aside className="lg:col-span-1 bg-white p-6 rounded-lg shadow-md h-fit">
                <h2 className="text-xl font-semibold mb-4 flex items-center"><SlidersHorizontal className="mr-2"/> Filters</h2>
                
                <div className="mb-6">
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">City</label>
                    <select id="city" value={cityFilter} onChange={e => setCityFilter(e.target.value)} className="w-full border-gray-300 rounded-md shadow-sm focus:border-primary focus:ring-primary">
                        <option value="">All Cities</option>
                        {allCities.map(city => <option key={city} value={city}>{city}</option>)}
                    </select>
                </div>
                
                <div className="mb-6">
                    <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-2">Max Price: <span className="font-bold text-primary">${priceRange}</span></label>
                    <input type="range" id="price" min="50" max="500" step="10" value={priceRange} onChange={e => setPriceRange(Number(e.target.value))} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary" />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Minimum Rating</label>
                    <div className="flex justify-between">
                        {[1, 2, 3, 4, 5].map(star => (
                            <button key={star} onClick={() => setRating(star)} className={`p-2 rounded-full transition ${rating === star ? 'bg-secondary text-white' : 'hover:bg-accent'}`}>
                                <StarRating rating={star} />
                            </button>
                        ))}
                    </div>
                </div>
            </aside>

            {/* Hotel Listings */}
            <main className="lg:col-span-3">
                <div className="flex justify-between items-center mb-6 bg-white p-4 rounded-lg shadow-md">
                    <p className="text-gray-700">{filteredHotels.length} hotels found</p>
                    <div className="flex items-center">
                        <ArrowDownUp className="mr-2 text-gray-600"/>
                        <select value={sortBy} onChange={e => setSortBy(e.target.value)} className="border-gray-300 rounded-md shadow-sm focus:border-primary focus:ring-primary">
                            <option value="rating_desc">Best Rated</option>
                            <option value="price_asc">Price: Low to High</option>
                            <option value="price_desc">Price: High to Low</option>
                        </select>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {filteredHotels.length > 0 ? (
                        filteredHotels.map(hotel => <HotelCard key={hotel.id} hotel={hotel} />)
                    ) : (
                        <p className="md:col-span-2 xl:col-span-3 text-center text-gray-500">No hotels match your criteria.</p>
                    )}
                </div>
            </main>
        </div>
    </div>
  );
};

export default HotelListPage;
