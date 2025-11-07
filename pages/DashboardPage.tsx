import React from 'react';
import { Booking } from '../types';
import { hotels } from '../data/mockData';
import Button from '../components/Button';
import { Calendar, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

// Mock bookings data
const mockBookings: Booking[] = [
  {
    id: 1,
    hotel: hotels[0],
    checkIn: '2024-08-15',
    checkOut: '2024-08-20',
    guests: 2,
  },
  {
    id: 2,
    hotel: hotels[2],
    checkIn: '2023-12-22',
    checkOut: '2023-12-28',
    guests: 4,
  }
];

const DashboardPage: React.FC = () => {
  const upcomingBookings = mockBookings.filter(b => new Date(b.checkIn) >= new Date());
  const pastBookings = mockBookings.filter(b => new Date(b.checkIn) < new Date());
  
  const BookingCard = ({ booking }: {booking: Booking}) => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row">
        <img src={booking.hotel.images[0]} alt={booking.hotel.name} className="w-full md:w-1/3 h-48 md:h-auto object-cover" />
        <div className="p-6 flex flex-col justify-between flex-1">
            <div>
                <Link to={`/hotel/${booking.hotel.id}`}><h3 className="text-2xl font-semibold text-dark hover:text-primary transition-colors">{booking.hotel.name}</h3></Link>
                <p className="text-gray-500">{booking.hotel.city}</p>
                <div className="flex flex-wrap gap-x-6 gap-y-2 mt-4 text-gray-700">
                    <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2 text-primary"/>
                        <span>{new Date(booking.checkIn).toLocaleDateString()} - {new Date(booking.checkOut).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center">
                        <Users className="w-4 h-4 mr-2 text-primary"/>
                        <span>{booking.guests} Guests</span>
                    </div>
                </div>
            </div>
            <div className="mt-6 text-right">
                <Button variant="danger">Cancel Booking</Button>
            </div>
        </div>
    </div>
  );

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-accent min-h-[calc(100vh-128px)]">
      <h1 className="text-4xl font-bold text-dark mb-8">My Bookings</h1>

      <section>
        <h2 className="text-2xl font-semibold text-dark mb-4">Upcoming Stays</h2>
        {upcomingBookings.length > 0 ? (
          <div className="space-y-6">
            {upcomingBookings.map(booking => <BookingCard key={booking.id} booking={booking} />)}
          </div>
        ) : (
          <p className="text-gray-600 bg-white p-6 rounded-lg shadow-md">You have no upcoming bookings.</p>
        )}
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-dark mb-4">Past Adventures</h2>
        {pastBookings.length > 0 ? (
          <div className="space-y-6">
            {pastBookings.map(booking => (
                 <div key={booking.id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row opacity-70">
                 <img src={booking.hotel.images[0]} alt={booking.hotel.name} className="w-full md:w-1/3 h-48 md:h-auto object-cover" />
                 <div className="p-6 flex flex-col justify-between flex-1">
                     <div>
                         <h3 className="text-2xl font-semibold text-gray-600">{booking.hotel.name}</h3>
                         <p className="text-gray-400">{booking.hotel.city}</p>
                         <div className="flex flex-wrap gap-x-6 gap-y-2 mt-4 text-gray-500">
                             <div className="flex items-center">
                                 <Calendar className="w-4 h-4 mr-2 text-primary"/>
                                 <span>{new Date(booking.checkIn).toLocaleDateString()} - {new Date(booking.checkOut).toLocaleDateString()}</span>
                             </div>
                             <div className="flex items-center">
                                 <Users className="w-4 h-4 mr-2 text-primary"/>
                                 <span>{booking.guests} Guests</span>
                             </div>
                         </div>
                     </div>
                     <div className="mt-6 text-right">
                         <Button variant="secondary">Leave a Review</Button>
                     </div>
                 </div>
             </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-600 bg-white p-6 rounded-lg shadow-md">You have no past bookings.</p>
        )}
      </section>
    </div>
  );
};

export default DashboardPage;