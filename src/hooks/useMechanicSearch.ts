
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
    image: 'https://randomuser.me/api/portraits/men/82.jpg'
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
    image: 'https://randomuser.me/api/portraits/women/74.jpg'
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
    image: 'https://randomuser.me/api/portraits/men/67.jpg'
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

  // Handle "Use my location" button with geolocation
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
          // Use reverse geocoding to get address from coordinates
          const response = await fetch(
            `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=YOUR_OPENCAGE_API_KEY&language=en&pretty=1`
          );
          
          if (response.ok) {
            const data = await response.json();
            if (data.results && data.results.length > 0) {
              const address = data.results[0].formatted;
              setLocation(address);
              console.log(`User location: ${address}`);
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
