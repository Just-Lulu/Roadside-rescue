
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SearchForm from '@/components/mechanic-search/SearchForm';
import SearchResults from '@/components/mechanic-search/SearchResults';
import { useMechanicSearch } from '@/hooks/useMechanicSearch';

const FindMechanic = () => {
  const {
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
  } = useMechanicSearch();

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
          <SearchForm
            location={location}
            setLocation={setLocation}
            selectedCity={selectedCity}
            handleCityChange={handleCityChange}
            handleSearch={handleSearch}
            handleUseLocation={handleUseLocation}
            isSearching={isSearching}
          />
          
          {location && (
            <SearchResults
              location={location}
              mechanics={mechanics}
              selectedMechanic={selectedMechanic}
              toggleMechanicSelection={toggleMechanicSelection}
            />
          )}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default FindMechanic;
