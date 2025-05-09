
import React from 'react';
import { Search, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue 
} from "@/components/ui/select";

// Nigerian cities for location selection
export const nigerianCities = [
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

interface SearchFormProps {
  location: string;
  setLocation: (location: string) => void;
  selectedCity: string;
  handleCityChange: (value: string) => void;
  handleSearch: (e: React.FormEvent) => void;
  handleUseLocation: () => void;
  isSearching: boolean;
}

const SearchForm: React.FC<SearchFormProps> = ({
  location,
  setLocation,
  selectedCity,
  handleCityChange,
  handleSearch,
  handleUseLocation,
  isSearching
}) => {
  return (
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
  );
};

export default SearchForm;
