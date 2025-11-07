
import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import Button from '../components/Button';

const ConfirmationPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 flex justify-center items-center">
      <div className="bg-white p-8 md:p-12 rounded-lg shadow-xl text-center max-w-2xl">
        <CheckCircle className="text-green-500 w-20 h-20 mx-auto mb-6" />
        <h1 className="text-3xl md:text-4xl font-bold text-dark mb-4">Booking Confirmed!</h1>
        <p className="text-lg text-gray-600 mb-8">
          Thank you for booking with StayHub. Your reservation is complete. A confirmation email with all the details has been sent to your address.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/dashboard">
            <Button variant="primary">View My Bookings</Button>
          </Link>
          <Link to="/">
            <Button variant="secondary">Back to Home</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPage;
