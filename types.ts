
export interface Hotel {
  id: number;
  name: string;
  city: string;
  price: number;
  rating: number;
  images: string[];
  description: string;
  amenities: string[];
  reviews: Review[];
}

export interface Review {
  id: number;
  user: string;
  avatar: string;
  rating: number;
  comment: string;
}

export interface Booking {
    id: number;
    hotel: Hotel;
    checkIn: string;
    checkOut: string;
    guests: number;
}
