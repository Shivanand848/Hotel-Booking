import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, MapPin, Calendar, Users } from 'lucide-react';
import Button from './Button';

const SearchBar = () => {
    const [destination, setDestination] = useState('');
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');
    const [guests, setGuests] = useState(1);
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        const queryParams = new URLSearchParams({
            city: destination,
            checkIn,
            checkOut,
            guests: guests.toString()
        }).toString();
        navigate(`/hotels?${queryParams}`);
    };

    return (
        <form onSubmit={handleSearch} className="bg-white p-4 rounded-lg shadow-lg grid grid-cols-1 md:grid-cols-4 lg:grid-cols-10 gap-4 items-center">
            
            <div className="relative col-span-1 md:col-span-4 lg:col-span-3">
                <MapPin className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
                <input
                    type="text"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    placeholder="Where are you going?"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
            </div>
            
            <div className="relative col-span-1 md:col-span-2 lg:col-span-2">
                <Calendar className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
                <input
                    type="date"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
            </div>

            <div className="relative col-span-1 md:col-span-2 lg:col-span-2">
                 <Calendar className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
                 <input
                    type="date"
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
            </div>
            
            <div className="relative col-span-1 md:col-span-2 lg:col-span-1">
                <Users className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
                <input
                    type="number"
                    min="1"
                    value={guests}
                    onChange={(e) => setGuests(parseInt(e.target.value, 10))}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
            </div>
            
            <div className="col-span-1 md:col-span-2 lg:col-span-2">
                <Button type="submit" fullWidth>
                    <Search className="mr-2 h-4 w-4"/> Search
                </Button>
            </div>
        </form>
    );
};

export default SearchBar;
