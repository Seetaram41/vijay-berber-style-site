
import React from 'react';
import { MapPin, Navigation, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const MapSection = () => {
  const openGoogleMaps = () => {
    window.open('https://maps.app.goo.gl/XfoUUEiqqQF3JM3GA', '_blank');
  };

  const getDirections = () => {
    window.open('https://maps.app.goo.gl/XfoUUEiqqQF3JM3GA', '_blank');
  };

  return (
    <section id="location" className="py-16 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Find Us</h2>
          <p className="text-muted-foreground">Visit our traditional Berber hairdressing salon</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Map Embed */}
          <div className="animate-scale-in">
            <Card className="overflow-hidden hover-lift">
              <CardContent className="p-0">
                <div className="relative h-80 bg-berber-sand/20">
                  <iframe
                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d261.97024452134!2d77.45561848637277!3d23.208507877932075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c435af70701eb%3A0xe140619ca419e697!2sChaska%20chai!5e0!3m2!1sen!2sin!4v1750950842331!5m2!1sen!2sin" 
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0"
                  ></iframe>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Location Details */}
          <div className="animate-slide-in-left space-y-6">
            <Card className="hover-lift">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-berber-terracotta/10 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-berber-terracotta" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Our Address</h3>
                    <p className="text-muted-foreground">
                      Vijay Hair Dresser, BDA Complex<br />
                      Sector 9A, Saket Nagar,AIIMS Bhopal<br />
                      Madhya Pradesh, India
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-berber-terracotta/10 p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-berber-terracotta" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Opening Hours</h3>
                    <div className="space-y-1 text-muted-foreground">
                      <p>Monday - Friday: 7:00 AM - 9:30 PM</p>                                           
                      <p>Saterday: 7:30 AM - 9:00 PM</p>
                      <p>Sunday: 7:00 AM - 11:00 PM</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={openGoogleMaps}
                className="bg-berber-terracotta hover:bg-berber-desert text-white flex-1"
              >
                <MapPin className="mr-2 h-4 w-4" />
                View on Google Maps
              </Button>
              <Button 
                variant="outline" 
                onClick={getDirections}
                className="border-berber-terracotta text-berber-terracotta hover:bg-berber-terracotta hover:text-white flex-1"
              >
                <Navigation className="mr-2 h-4 w-4" />
                Get Directions
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
