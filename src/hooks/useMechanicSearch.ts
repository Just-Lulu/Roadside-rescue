
import { useState } from 'react';

// Mock data for mechanics in Nigeria
const mockMechanics = [
  {
    id: '1',
    name: 'Quick Fix Auto Nigeria',
    rating: 4.8,
    distance: '1.2',
    estimatedArrival: '12',
    address: '123 Herbert Macaulay Way, Yaba, Lagos',
    services: {
      towing: true,
      jumpStart: true,
      tireFix: true,
      fuelDelivery: true,
      lockoutService: false,
      basicRepair: true
    },
    image: 'https://randomuser.me/api/portraits/men/82.jpg' // Nigerian appearance
  },
  {
    id: '2',
    name: 'Highway Heroes Naija',
    rating: 4.6,
    distance: '2.5',
    estimatedArrival: '18',
    address: '456 Ahmadu Bello Way, Garki, Abuja',
    services: {
      towing: true,
      jumpStart: true,
      tireFix: true,
      fuelDelivery: false,
      lockoutService: true,
      basicRepair: false
    },
    image: 'https://randomuser.me/api/portraits/women/74.jpg' // Nigerian appearance
  },
  {
    id: '3',
    name: 'Reliable Roadside Nigeria',
    rating: 4.9,
    distance: '3.7',
    estimatedArrival: '25',
    address: '789 Adeola Odeku St, Victoria Island, Lagos',
    services: {
      towing: true,
      jumpStart: true,
      tireFix: true,
      fuelDelivery: true,
      lockoutService: true,
      basicRepair: true
    },
    image: 'https://randomuser.me/api/portraits/men/67.jpg' // Nigerian appearance
  }
];

export const useMechanicSearch = () => {
  const [location, setLocation] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [mechanics, setMechanics] = useState(mockMechanics);
  const [selectedMechanic, setSelectedMechanic] = useState<string | null>(null);

  // Handle location search
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSearching(true);
    
    // Simulate search delay
    setTimeout(() => {
      setIsSearching(false);
      // In a real app, this would filter mechanics based on proximity to the location
      console.log(`Searching near: ${location}`);
    }, 1000);
  };

  // Handle city selection
  const handleCityChange = (value: string) => {
    setSelectedCity(value);
    setLocation(value);
    
    // Simulate search results for the selected city
    setIsSearching(true);
    setTimeout(() => {
      // Filter mechanics based on city (would be a real API call)
      console.log(`Filtering mechanics in ${value}`);
      setIsSearching(false);
    }, 800);
  };

  // Handle "Use my location" button
  const handleUseLocation = () => {
    setIsSearching(true);
    
    // Simulate getting user's location
    setTimeout(() => {
      setLocation('Current Location');
      setIsSearching(false);
    }, 1000);
  };

  // Toggle mechanic selection
  const toggleMechanicSelection = (id: string) => {
    if (selectedMechanic === id) {
      setSelectedMechanic(null);
    } else {
      setSelectedMechanic(id);
      // In a real app, this would center the map on the selected mechanic
    }
  };

  return {
    location,
    setLocation,
    selectedCity,
    isSearching,
    mechanics,
    selectedMechanic,
    handleSearch,
    handleCityChange,
    handleUseLocation,
    toggleMechanicSelection
  };
};
