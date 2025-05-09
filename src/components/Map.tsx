
import React from 'react';

interface MapProps {
  className?: string;
}

const Map: React.FC<MapProps> = ({ className = '' }) => {
  return (
    <div className={`bg-gray-100 rounded-lg overflow-hidden relative ${className}`}>
      <div className="absolute inset-0 flex items-center justify-center flex-col">
        <div className="text-gray-500 mb-4">
          {/* Map icon */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
          </svg>
        </div>
        <p className="text-gray-700 font-medium">Map will be displayed here</p>
        <p className="text-gray-500 text-sm mt-2">Using Google Maps or another location service</p>
        <p className="text-xs text-gray-400 mt-4 px-4 text-center">
          This component will integrate with Google Maps API to show nearby mechanics based on user location
        </p>
      </div>
      
      {/* Map background pattern */}
      <svg
        className="absolute inset-0 w-full h-full opacity-30"
        xmlns="http://www.w3.org/2000/svg"
      >
        <pattern
          id="grid-pattern"
          width="20"
          height="20"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M 20 0 L 0 0 0 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
          />
        </pattern>
        <rect width="100%" height="100%" fill="url(#grid-pattern)" />
      </svg>
    </div>
  );
};

export default Map;
