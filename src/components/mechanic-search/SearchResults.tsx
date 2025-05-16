
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';
import { Slider } from '@/components/ui/slider';
import Map from '@/components/Map';
import MechanicList from './MechanicList';
import { Mechanic } from '@/types/mechanic';

interface SearchResultsProps {
  location: string;
  mechanics: Mechanic[];
  selectedMechanic: string | null;
  toggleMechanicSelection: (id: string) => void;
}

const SearchResults: React.FC<SearchResultsProps> = ({
  location,
  mechanics,
  selectedMechanic,
  toggleMechanicSelection,
}) => {
  const [showRadiusSlider, setShowRadiusSlider] = useState(false);
  const [searchRadius, setSearchRadius] = useState([5]); // Default 5km radius

  const handleExpandSearch = () => {
    setShowRadiusSlider(true);
  };

  const handleRadiusChange = (value: number[]) => {
    setSearchRadius(value);
    // In a real app, this would trigger a new search with the updated radius
    console.log(`Search radius updated to ${value[0]}km`);
  };

  return (
    <>
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Map Section */}
        <div className="lg:w-1/2 h-[500px]">
          <Map className="h-full w-full" />
        </div>

        {/* Mechanics List */}
        <MechanicList
          mechanics={mechanics}
          selectedMechanic={selectedMechanic}
          toggleMechanicSelection={toggleMechanicSelection}
          location={location}
        />
      </div>

      <div className="mt-8 text-center">
        <p className="text-gray-600 mb-4">
          Don't see what you're looking for? Try expanding your search area.
        </p>
        
        {showRadiusSlider ? (
          <div className="max-w-md mx-auto">
            <div className="mb-2 flex justify-between text-sm text-gray-600">
              <span>1km</span>
              <span>{searchRadius[0]}km</span>
              <span>50km</span>
            </div>
            <Slider
              defaultValue={[5]}
              max={50}
              min={1}
              step={1}
              value={searchRadius}
              onValueChange={handleRadiusChange}
              className="mb-6"
            />
            <Button onClick={() => console.log(`Searching within ${searchRadius[0]}km radius`)}>
              <MapPin className="mr-2 h-4 w-4" />
              Search within {searchRadius[0]}km
            </Button>
          </div>
        ) : (
          <Button variant="outline" onClick={handleExpandSearch}>
            <MapPin className="mr-2 h-4 w-4" />
            Expand Search Radius
          </Button>
        )}
      </div>
    </>
  );
};

export default SearchResults;
