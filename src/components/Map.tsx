
import React from 'react';
import { MapPin } from 'lucide-react';

interface MapProps {
  className?: string;
  center?: [number, number]; // [longitude, latitude]
}

const Map: React.FC<MapProps> = ({ className = '', center = [7.4919, 9.0765] }) => { // Default to Abuja coordinates
  return (
    <div className={`bg-gray-100 rounded-lg overflow-hidden relative ${className}`}>
      <div className="absolute inset-0 flex items-center justify-center flex-col">
        <div className="text-gray-500 mb-4">
          <MapPin className="h-16 w-16" />
        </div>
        <p className="text-gray-700 font-medium">Nigeria Roadside Assistance</p>
        <p className="text-gray-500 text-sm mt-2">Using Nigeria-based location services</p>
        <p className="text-xs text-gray-400 mt-4 px-4 text-center">
          Find nearby mechanics across Nigeria's major cities including Lagos, Abuja, Port Harcourt, Kano, and more
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
