
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar, Clock, MessageCircle, Phone } from 'lucide-react';

const RequestHelp = () => {
  const { id } = useParams<{ id: string }>();
  const [issueType, setIssueType] = useState('flat-tire');
  const [description, setDescription] = useState('');
  const [contactMethod, setContactMethod] = useState('phone');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This would be implemented to submit the request
    console.log('Request submitted:', { id, issueType, description, contactMethod });
    // Add API call here in the future
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Request Roadside Help</h1>
          
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Mechanic #{id}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Please fill out this form to request help from this mechanic. They will contact you as soon as possible.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Service Request Details</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="issue-type" className="block text-sm font-medium text-gray-700">
                    What's the issue?
                  </label>
                  <Select value={issueType} onValueChange={setIssueType}>
                    <SelectTrigger id="issue-type">
                      <SelectValue placeholder="Select issue type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="flat-tire">Flat Tire</SelectItem>
                      <SelectItem value="dead-battery">Dead Battery</SelectItem>
                      <SelectItem value="engine-trouble">Engine Trouble</SelectItem>
                      <SelectItem value="out-of-fuel">Out of Fuel</SelectItem>
                      <SelectItem value="locked-out">Locked Out</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                    Detailed Description
                  </label>
                  <Textarea 
                    id="description" 
                    placeholder="Please describe your issue in detail..." 
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    rows={4}
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Preferred Contact Method
                  </label>
                  <Tabs value={contactMethod} onValueChange={setContactMethod} className="w-full">
                    <TabsList className="grid grid-cols-2 w-full">
                      <TabsTrigger value="phone" className="flex items-center">
                        <Phone className="mr-2 h-4 w-4" />
                        Phone Call
                      </TabsTrigger>
                      <TabsTrigger value="message" className="flex items-center">
                        <MessageCircle className="mr-2 h-4 w-4" />
                        In-app Message
                      </TabsTrigger>
                    </TabsList>
                  </Tabs>
                </div>

                <div className="pt-4">
                  <Button 
                    type="submit" 
                    className="w-full bg-roadside-600 hover:bg-roadside-700"
                  >
                    Submit Request
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
          
          <div className="mt-6 flex items-center justify-center text-sm text-gray-500">
            <Clock className="h-4 w-4 mr-2" />
            <span>Mechanics typically respond within 5-10 minutes</span>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default RequestHelp;
