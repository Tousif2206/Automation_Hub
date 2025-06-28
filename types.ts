export interface NavItem {
  path: string;
  label: string;
  icon: React.ReactNode;
}

export interface Product {
  id: number;
  name: string;
  category: 'Electronics' | 'Books' | 'Clothing' | 'Groceries';
  price: number;
  image: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface HotelRoom {
  id: number;
  name: string;
  price: number;
  amenities: string[];
  image: string;
}

export enum FlightType {
  OneWay = 'one-way',
  RoundTrip = 'round-trip',
}

export type ToastType = 'success' | 'error' | 'warning' | 'info';

export interface ToastMessage {
  id: number;
  message: string;
  type: ToastType;
}
