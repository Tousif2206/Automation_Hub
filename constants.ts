
import React from 'react';
import type { NavItem, Product, HotelRoom } from './types';
import { Home, List, Edit3, ShoppingCart, Hotel, Plane, Film, Puzzle } from 'lucide-react';

export const NAV_ITEMS: NavItem[] = [
  { path: '/', label: 'Home', icon: React.createElement(Home, { size: 20 }) },
  { path: '/elements', label: 'UI Elements', icon: React.createElement(List, { size: 20 }) },
  { path: '/forms', label: 'Forms', icon: React.createElement(Edit3, { size: 20 }) },
  { path: '/ecommerce', label: 'E-Commerce', icon: React.createElement(ShoppingCart, { size: 20 }) },
  { path: '/hotel', label: 'Hotel Booking', icon: React.createElement(Hotel, { size: 20 }) },
  { path: '/flights', label: 'Flight Search', icon: React.createElement(Plane, { size: 20 }) },
  { path: '/movies', label: 'Movie Booking', icon: React.createElement(Film, { size: 20 }) },
  { path: '/advanced', label: 'Advanced', icon: React.createElement(Puzzle, { size: 20 }) },
];

export const ECOMMERCE_PRODUCTS: Product[] = [
    { id: 1, name: 'Wireless Headphones', category: 'Electronics', price: 199.99, image: 'https://picsum.photos/seed/hp/400/300' },
    { id: 2, name: 'Modern JavaScript', category: 'Books', price: 39.99, image: 'https://picsum.photos/seed/book/400/300' },
    { id: 3, name: 'Classic T-Shirt', category: 'Clothing', price: 24.99, image: 'https://picsum.photos/seed/shirt/400/300' },
    { id: 4, name: 'Organic Apples', category: 'Groceries', price: 4.99, image: 'https://picsum.photos/seed/apple/400/300' },
    { id: 5, name: 'Smart Watch', category: 'Electronics', price: 299.99, image: 'https://picsum.photos/seed/watch/400/300' },
    { id: 6, name: 'The Art of Testing', category: 'Books', price: 49.99, image: 'https://picsum.photos/seed/book2/400/300' },
    { id: 7, name: 'Denim Jeans', category: 'Clothing', price: 89.99, image: 'https://picsum.photos/seed/jeans/400/300' },
    { id: 8, name: 'Almond Milk', category: 'Groceries', price: 3.49, image: 'https://picsum.photos/seed/milk/400/300' },
];

export const HOTEL_ROOMS: HotelRoom[] = [
    { id: 1, name: 'Standard Queen Room', price: 150, amenities: ['WiFi', 'TV', 'AC'], image: 'https://picsum.photos/seed/hotel1/400/300' },
    { id: 2, name: 'Deluxe King Suite', price: 250, amenities: ['WiFi', 'TV', 'AC', 'Mini Bar', 'Ocean View'], image: 'https://picsum.photos/seed/hotel2/400/300' },
    { id: 3, name: 'Family Room', price: 200, amenities: ['WiFi', 'TV', 'AC', '2 Queen Beds'], image: 'https://picsum.photos/seed/hotel3/400/300' },
    { id: 4, name: 'Economy Twin Room', price: 120, amenities: ['WiFi', 'Shared Bathroom'], image: 'https://picsum.photos/seed/hotel4/400/300' },
];

export const AIRPORTS = [
    { code: 'JFK', name: 'New York - JFK' },
    { code: 'LAX', name: 'Los Angeles - LAX' },
    { code: 'LHR', name: 'London - Heathrow' },
    { code: 'HND', name: 'Tokyo - Haneda' },
    { code: 'CDG', name: 'Paris - Charles de Gaulle' },
    { code: 'SYD', name: 'Sydney - SYD' },
];
