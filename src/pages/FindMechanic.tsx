
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Map from '@/components/Map';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Search, Route, MapPin } from 'lucide-react';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue 
} from "@/components/ui/select";
import ServiceCard, { ServiceType } from '@/components/ServiceCard';

// Nigerian cities for location selection
const nigerianCities = [
  "Lagos", 
  "Abuja", 
  "Port Harcourt", 
  "Kano", 
  "Ibadan", 
  "Kaduna", 
  "Enugu", 
  "Benin City", 
  "Calabar", 
  "Warri"
];

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
    image: 'https://randomuser.me/api/portraits/men/32.jpg'
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
    image: 'https://randomuser.me/api/portraits/women/44.jpg'
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

const FindMechanic = () => {
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

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Find Roadside Assistance in Nigeria</h1>
            <p className="mt-2 text-gray-600">
              Search for mechanics near your location who can help with your vehicle issues
            </p>
          </div>
          
          {/* Search Form */}
          <Card className="mb-8">
            <CardContent className="pt-6">
              <form onSubmit={handleSearch} className="space-y-4">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-grow relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <Input 
                      placeholder="Enter your location in Nigeria" 
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <div className="w-full md:w-1/3">
                    <Select value={selectedCity} onValueChange={handleCityChange}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a city" />
                      </SelectTrigger>
                      <SelectContent>
                        {nigerianCities.map(city => (
                          <SelectItem key={city} value={city}>{city}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex gap-2">
                    <Button 
                      type="button" 
                      variant="outline" 
                      onClick={handleUseLocation}
                      disabled={isSearching}
                      className="whitespace-nowrap"
                    >
                      <MapPin className="mr-2 h-4 w-4" />
                      Use my location
                    </Button>
                    <Button 
                      type="submit" 
                      disabled={isSearching || !location}
                      className="bg-roadside-600 hover:bg-roadside-700"
                    >
                      {isSearching ? 'Searching...' : 'Search'}
                    </Button>
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>
          
          {location && (
            <>
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Map Section */}
                <div className="lg:w-1/2 h-[500px]">
                  <Map className="h-full w-full" />
                </div>

                {/* Mechanics List */}
                <div className="lg:w-1/2">
                  <Tabs defaultValue="list">
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="text-xl font-semibold">
                        Mechanics near {location}
                      </h2>
                      <TabsList>
                        <TabsTrigger value="list">List</TabsTrigger>
                        <TabsTrigger value="map">Map</TabsTrigger>
                      </TabsList>
                    </div>

                    <TabsContent value="list" className="space-y-4 mt-0">
                      {mechanics.map((mechanic) => (
                        <Card 
                          key={mechanic.id} 
                          className={`cursor-pointer transition-all ${
                            selectedMechanic === mechanic.id 
                              ? 'border-roadside-500 shadow-md' 
                              : 'hover:border-roadside-200'
                          }`}
                          onClick={() => toggleMechanicSelection(mechanic.id)}
                        >
                          <CardContent className="p-4">
                            <div className="flex items-start gap-4">
                              <div className="flex-shrink-0">
                                <div className="w-16 h-16 rounded-full overflow-hidden">
                                  <img 
                                    src={mechanic.image} 
                                    alt={mechanic.name} 
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                              </div>
                              <div className="flex-grow">
                                <div className="flex justify-between items-start">
                                  <div>
                                    <h3 className="font-semibold text-lg">{mechanic.name}</h3>
                                    <div className="flex items-center mt-1">
                                      <span className="text-yellow-500 flex items-center">
                                        ★ {mechanic.rating}
                                      </span>
                                      <span className="mx-2 text-gray-300">•</span>
                                      <span className="text-gray-600 flex items-center text-sm">
                                        <MapPin size={14} className="mr-1" />
                                        {mechanic.distance} km away
                                      </span>
                                    </div>
                                  </div>
                                  <Badge className="bg-accent-500">
                                    {mechanic.estimatedArrival} min
                                  </Badge>
                                </div>
                                
                                <p className="text-gray-500 text-sm mt-2 flex items-center">
                                  <Route size={14} className="mr-1" />
                                  {mechanic.address}
                                </p>
                                
                                {selectedMechanic === mechanic.id && (
                                  <div className="mt-4 pt-4 border-t border-gray-100">
                                    <ServiceCard services={mechanic.services as Record<ServiceType, boolean>} />
                                    <div className="mt-4 flex gap-2">
                                      <Link to={`/mechanic-profile/${mechanic.id}`} className="flex-grow">
                                        <Button className="w-full bg-roadside-600 hover:bg-roadside-700">
                                          View Profile
                                        </Button>
                                      </Link>
                                      <Link to={`/request-help/${mechanic.id}`} className="flex-grow">
                                        <Button className="w-full bg-accent-500 hover:bg-accent-600">
                                          Request Help
                                        </Button>
                                      </Link>
                                    </div>
                                  </div>
                                )}
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </TabsContent>

                    <TabsContent value="map">
                      <div className="h-[500px] lg:hidden">
                        <Map className="h-full w-full" />
                      </div>
                      <p className="text-center text-gray-500 text-sm mt-4 lg:hidden">
                        Tap on a marker to see mechanic details
                      </p>
                    </TabsContent>
                  </Tabs>
                </div>
              </div>

              <div className="mt-8 text-center">
                <p className="text-gray-600 mb-4">
                  Don't see what you're looking for? Try expanding your search area.
                </p>
                <Button variant="outline">
                  <MapPin className="mr-2 h-4 w-4" />
                  Expand Search Radius
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default FindMechanic;
