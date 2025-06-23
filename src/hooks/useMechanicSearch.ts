
import { useState } from 'react';

// Mock data for mechanics in Nigeria with Nigerian/Black profile images
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
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face'
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
    image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=400&fit=crop&crop=face'
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
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face'
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
      console.log(`Filtering mechanics in ${value}`);
      setIsSearching(false);
    }, 800);
  };

  // Handle "Use my location" button with enhanced geolocation
  const handleUseLocation = () => {
    setIsSearching(true);
    
    if (!navigator.geolocation) {
      console.error('Geolocation is not supported by this browser');
      setLocation('Geolocation not supported');
      setIsSearching(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        console.log(`User coordinates: ${latitude}, ${longitude}`);
        
        try {
          // Using a more reliable reverse geocoding service
          const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}&accept-language=en`
          );
          
          if (response.ok) {
            const data = await response.json();
            if (data && data.display_name) {
              setLocation(data.display_name);
              console.log(`User location: ${data.display_name}`);
            } else {
              setLocation(`${latitude}, ${longitude}`);
            }
          } else {
            // Fallback to coordinates if geocoding fails
            setLocation(`${latitude}, ${longitude}`);
          }
        } catch (error) {
          console.error('Error getting location name:', error);
          // Fallback to coordinates
          setLocation(`${latitude}, ${longitude}`);
        }
        
        setIsSearching(false);
      },
      (error) => {
        console.error('Error getting location:', error);
        let errorMessage = 'Unable to get location';
        
        switch (error.code) {
          case error.PERMISSION_DENIED:
            errorMessage = 'Location access denied by user';
            break;
          case error.POSITION_UNAVAILABLE:
            errorMessage = 'Location information unavailable';
            break;
          case error.TIMEOUT:
            errorMessage = 'Location request timed out';
            break;
        }
        
        setLocation(errorMessage);
        setIsSearching(false);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 60000
      }
    );
  };

  // Toggle mechanic selection
  const toggleMechanicSelection = (id: string) => {
    if (selectedMechanic === id) {
      setSelectedMechanic(null);
    } else {
      setSelectedMechanic(id);
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
