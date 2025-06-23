
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const Dashboard = () => {
  const navigate = useNavigate();
  
  const handleRequestAssistance = () => {
    toast.success("Redirecting to find mechanics near you...");
    navigate('/find-mechanic');
  };
  
  const handleAddVehicle = () => {
    toast.info("Vehicle management feature coming soon!");
    // This could navigate to a vehicle management page in the future
    console.log("Add vehicle functionality triggered");
  };
  
  const handleAddPaymentMethod = () => {
    toast.info("Payment method setup coming soon!");
    // This could integrate with Stripe or other payment providers
    console.log("Add payment method functionality triggered");
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-6">Your Dashboard</h1>
          
          <p className="text-gray-600 mb-8">
            Welcome to your dashboard! Manage your account, vehicles, and request assistance when needed.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Your recent roadside assistance requests</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500 text-center py-8">
                  No recent activity to display
                </p>
                <Button 
                  className="w-full bg-roadside-600 hover:bg-roadside-700"
                  onClick={handleRequestAssistance}
                >
                  Request Assistance
                </Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Your Vehicles</CardTitle>
                <CardDescription>Manage your registered vehicles</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500 text-center py-8">
                  No vehicles added yet
                </p>
                <Button 
                  className="w-full bg-roadside-600 hover:bg-roadside-700"
                  onClick={handleAddVehicle}
                >
                  Add a Vehicle
                </Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Payment Methods</CardTitle>
                <CardDescription>Manage your payment options</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500 text-center py-8">
                  No payment methods added
                </p>
                <Button 
                  className="w-full bg-roadside-600 hover:bg-roadside-700"
                  onClick={handleAddPaymentMethod}
                >
                  Add Payment Method
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
