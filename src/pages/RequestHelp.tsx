
import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const RequestHelp = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Request Roadside Help</h1>
          <p className="text-gray-600 mb-8">
            You are requesting help from mechanic with ID: {id}
          </p>
          
          {/* Placeholder for request form - to be implemented later */}
          <div className="bg-white p-6 rounded-lg shadow">
            <p className="text-lg font-medium text-center">This page is under construction</p>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default RequestHelp;
