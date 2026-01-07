
export interface Car {
  id: string;
  name: string;
  category: string;
  pricePerDay: number;
  image: string;
  specs: {
    engine: string;
    acceleration: string;
    seats: number;
  };
}

export interface BookingDetails {
  pickupLocation: string;
  returnLocation: string;
  pickupDate: string;
  returnDate: string;
  carId?: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
}
