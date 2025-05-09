
import React from 'react';
import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';
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
        <Button variant="outline">
          <MapPin className="mr-2 h-4 w-4" />
          Expand Search Radius
        </Button>
      </div>
    </>
  );
};

export default SearchResults;
