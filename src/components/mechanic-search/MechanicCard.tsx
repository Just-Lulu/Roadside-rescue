
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Route } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import ServiceCard, { ServiceType } from '@/components/ServiceCard';
import { Mechanic } from '@/types/mechanic';

interface MechanicCardProps {
  mechanic: Mechanic;
  isSelected: boolean;
  onSelect: (id: string) => void;
}

const MechanicCard: React.FC<MechanicCardProps> = ({ 
  mechanic, 
  isSelected, 
  onSelect 
}) => {
  return (
    <Card 
      key={mechanic.id} 
      className={`cursor-pointer transition-all ${
        isSelected 
          ? 'border-roadside-500 shadow-md' 
          : 'hover:border-roadside-200'
      }`}
      onClick={() => onSelect(mechanic.id)}
    >
      <CardContent className="p-4">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            <div className="w-16 h-16 rounded-full overflow-hidden">
              <img 
                src={mechanic.image} 
                alt={mechanic.name} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="flex-grow">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-lg">{mechanic.name}</h3>
                <div className="flex items-center mt-1">
                  <span className="text-yellow-500 flex items-center">
                    ★ {mechanic.rating}
                  </span>
                  <span className="mx-2 text-gray-300">•</span>
                  <span className="text-gray-600 flex items-center text-sm">
                    <MapPin size={14} className="mr-1" />
                    {mechanic.distance} km away
                  </span>
                </div>
              </div>
              <Badge className="bg-accent-500">
                {mechanic.estimatedArrival} min
              </Badge>
            </div>
            
            <p className="text-gray-500 text-sm mt-2 flex items-center">
              <Route size={14} className="mr-1" />
              {mechanic.address}
            </p>
            
            {isSelected && (
              <div className="mt-4 pt-4 border-t border-gray-100">
                <ServiceCard services={mechanic.services as Record<ServiceType, boolean>} />
                <div className="mt-4 flex gap-2">
                  <Link to={`/mechanic-profile/${mechanic.id}`} className="flex-grow">
                    <Button className="w-full bg-roadside-600 hover:bg-roadside-700">
                      View Profile
                    </Button>
                  </Link>
                  <Link to={`/request-help/${mechanic.id}`} className="flex-grow">
                    <Button className="w-full bg-accent-500 hover:bg-accent-600">
                      Request Help
                    </Button>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MechanicCard;
