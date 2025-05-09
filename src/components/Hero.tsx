
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const Hero: React.FC = () => {
  return (
    <div className="relative bg-roadside-900 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0">
        <svg
          className="absolute top-0 left-0 transform -translate-y-20 opacity-10"
          width="600"
          height="600"
          fill="none"
          viewBox="0 0 600 600"
        >
          <path
            fill="currentColor"
            d="M0 0h600v600H0z"
          />
          <path
            fill="#fff"
            fillRule="evenodd"
            d="M300 300c82.843 0 150-67.157 150-150S382.843 0 300 0 150 67.157 150 150s67.157 150 150 150zm0 0c-82.843 0-150 67.157-150 150s67.157 150 150 150 150-67.157 150-150-67.157-150-150-150z"
            clipRule="evenodd"
          />
        </svg>
        <svg
          className="absolute bottom-0 right-0 transform translate-y-20 opacity-10"
          width="600"
          height="600"
          fill="none"
          viewBox="0 0 600 600"
        >
          <path
            fill="currentColor"
            d="M600 600H0V0h600z"
          />
          <path
            fill="#fff"
            fillRule="evenodd"
            d="M300 300c82.843 0 150-67.157 150-150S382.843 0 300 0 150 67.157 150 150s67.157 150 150 150zm0 0c-82.843 0-150 67.157-150 150s67.157 150 150 150 150-67.157 150-150-67.157-150-150-150z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          {/* Hero Text */}
          <div className="w-full md:w-1/2 text-white space-y-6 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Stranded on the Road?
              <span className="block text-accent-400 mt-2">
                Find Help in Minutes
              </span>
            </h1>
            <p className="text-xl text-roadside-100 max-w-lg">
              RoadReady connects you with nearby mechanics who can help you get back on the road quickly, even in unfamiliar locations.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
              <Link to="/find-mechanic">
                <Button size="lg" className="bg-accent-500 hover:bg-accent-600 text-white">
                  Find a Mechanic Now
                </Button>
              </Link>
              <Link to="/mechanic-signup">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Register as a Mechanic
                </Button>
              </Link>
            </div>
            <div className="pt-4 text-roadside-100">
              <p>
                <span className="font-semibold text-white">24/7 Service</span> • 
                <span className="ml-2">Over 5,000+ Mechanics Nationwide</span>
              </p>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="w-full md:w-1/2 relative">
            <div className="p-4 bg-white rounded-lg shadow-xl transform md:rotate-3 md:translate-x-4 relative z-20">
              <img
                src="https://images.unsplash.com/photo-1599256662039-c5d4f637e01c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
                alt="Mechanic helping a stranded driver"
                className="rounded shadow-inner"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 p-4 bg-roadside-600 rounded-lg shadow-lg z-10 max-w-xs">
              <div className="flex items-center space-x-2">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                  <span className="text-roadside-600 text-2xl font-bold">5</span>
                </div>
                <div className="text-white">
                  <p className="font-bold">Mechanics nearby</p>
                  <p className="text-sm text-roadside-100">Average response time: 15 mins</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
