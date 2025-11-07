
import React, { useState } from 'react';
import { X, Calendar, Users, User, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Hotel } from '../types';
import Button from './Button';

interface BookingModalProps {
  hotel: Hotel;
  isOpen: boolean;
  onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ hotel, isOpen, onClose }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    checkIn: '',
    checkOut: '',
    guests: 1,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send data to a backend
    console.log('Booking submitted:', { hotelId: hotel.id, ...formData });
    onClose();
    navigate('/booking-confirmation');
  };
  
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-lg relative max-h-screen overflow-y-auto">
        <div className="p-6">
            <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
              <X size={24} />
            </button>
            <h2 className="text-2xl font-bold text-dark mb-2">Book Your Stay</h2>
            <p className="text-md text-gray-600 mb-6">at <span className="font-semibold text-primary">{hotel.name}</span></p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                  <User className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
                  <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"/>
              </div>
              <div className="relative">
                  <Mail className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
                  <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"/>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="relative">
                      <Calendar className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
                      <input type="date" name="checkIn" value={formData.checkIn} onChange={handleChange} required className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" />
                  </div>
                  <div className="relative">
                      <Calendar className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
                      <input type="date" name="checkOut" value={formData.checkOut} onChange={handleChange} required className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" />
                  </div>
              </div>
              <div className="relative">
                  <Users className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
                  <input type="number" name="guests" min="1" placeholder="Number of Guests" value={formData.guests} onChange={handleChange} required className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"/>
              </div>
              <div className="text-right pt-4">
                  <p className="text-xl font-bold text-primary">Total: ${hotel.price * (formData.guests > 1 ? 1.25 : 1) } <span className="text-sm font-normal text-gray-500">/ night</span></p>
                  <p className="text-xs text-gray-400">Final price will be calculated upon confirmation.</p>
              </div>
              <div className="pt-2">
                <Button type="submit" fullWidth>Confirm Booking</Button>
              </div>
            </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
