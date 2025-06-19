import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Menu, Star, Clock, Phone, Calendar, User, Camera, Check, MessageCircle, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [currentSlide, setCurrentSlide] = useState(0);
  const { toast } = useToast();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  const downloadPriceList = () => {
    toast({
      title: "Price List Download",
      description: "Contact us at +1234567890 to get the latest price list PDF",
    });
  };

  const bookAppointment = () => {
    toast({
      title: "Book Appointment",
      description: "Call us at +1234567890 or WhatsApp for instant booking!",
    });
  };

  // Hero slider images
  const heroSlides = [
    {
      image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&h=600&fit=crop",
      title: "Traditional Berber Cuts",
      subtitle: "25 years of expertise"
    },
    {
      image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=800&h=600&fit=crop",
      title: "Professional Beard Styling",
      subtitle: "Precision and artistry"
    },
    {
      image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800&h=600&fit=crop",
      title: "Premium Facial Treatments",
      subtitle: "Luxury experience"
    }
  ];

  // Auto-advance slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const services = [
    {
      name: "Traditional Berber Cut",
      price: "$35",
      description: "Classic Berber styling with modern techniques",
      image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=400"
    },
    {
      name: "Beard Shaping",
      price: "$25",
      description: "Professional beard trimming and styling",
      image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=400"
    },
    {
      name: "Premium Facial",
      price: "$45",
      description: "Deep cleansing with premium products",
      image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=400"
    },
    {
      name: "Hair Coloring",
      price: "$50-80",
      description: "Professional coloring with top brands",
      image: "https://images.unsplash.com/photo-1562004760-aceed7bb0fe3?w=400"
    }
  ];

  const products = [
    {
      category: "Facial Brands",
      items: ["L'Oréal Professional", "Schwarzkopf", "Matrix", "Redken"]
    },
    {
      category: "Bleach Brands", 
      items: ["Wella Blondor", "L'Oréal Quick Blue", "Matrix Light Master"]
    },
    {
      category: "Color Brands",
      items: ["Goldwell", "Pravana", "Joico", "Clairol Professional"]
    }
  ];

  const reviews = [
    {
      name: "Ahmed Hassan",
      rating: 5,
      text: "Vijay has been cutting my hair for 10 years. Best Berber hairdresser in the city!",
      date: "2 weeks ago",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Sarah Johnson", 
      rating: 5,
      text: "Amazing attention to detail and respect for cultural traditions. Highly recommended!",
      date: "1 month ago",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Mohammed Ali",
      rating: 5,
      text: "Professional service, clean shop, and excellent results every time.",
      date: "3 weeks ago",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    }
  ];

  const galleryImages = [
    "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=300",
    "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=300", 
    "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=300",
    "https://images.unsplash.com/photo-1562004760-aceed7bb0fe3?w=300",
    "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=300",
    "https://images.unsplash.com/photo-1508243771214-6e95d137426b?w=300",
    "https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?w=300",
    "https://images.unsplash.com/photo-1622296089863-eb7c9736e5b8?w=300",
    "https://images.unsplash.com/photo-1527203561188-dae1bc1df8db?w=300"
  ];

  const socialLinks = [
    { icon: Facebook, url: "https://facebook.com/vijayhairdresser", label: "Facebook" },
    { icon: Instagram, url: "https://instagram.com/vijayhairdresser", label: "Instagram" },
    { icon: Twitter, url: "https://twitter.com/vijayhairdresser", label: "Twitter" },
    { icon: Youtube, url: "https://youtube.com/vijayhairdresser", label: "YouTube" }
  ];

  return (
    <div className={`min-h-screen bg-background transition-colors duration-300 ${isDarkMode ? 'dark' : ''}`}>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-berber-terracotta">
              Vijay Hair Dresser
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6">
              {[
                { name: 'Home', id: 'home' },
                { name: 'About', id: 'about' },
                { name: 'Services', id: 'services' },
                { name: 'Gallery', id: 'gallery' },
                { name: 'Reviews', id: 'reviews' },
                { name: 'Contact', id: 'contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  className={`text-foreground hover:text-berber-terracotta transition-colors relative group ${
                    activeSection === item.id ? 'text-berber-terracotta' : ''
                  }`}
                  onClick={() => scrollToSection(item.id)}
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-berber-terracotta transition-all group-hover:w-full"></span>
                </button>
              ))}
              <Button
                variant="outline"
                size="sm"
                onClick={toggleTheme}
                className="ml-4"
              >
                {isDarkMode ? '☀️' : '🌙'}
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={toggleTheme}
              >
                {isDarkMode ? '☀️' : '🌙'}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-border animate-fade-in">
              {[
                { name: 'Home', id: 'home' },
                { name: 'About', id: 'about' },
                { name: 'Services', id: 'services' },
                { name: 'Gallery', id: 'gallery' },
                { name: 'Reviews', id: 'reviews' },
                { name: 'Contact', id: 'contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  className="block w-full text-left py-2 text-foreground hover:text-berber-terracotta transition-colors"
                  onClick={() => {
                    scrollToSection(item.id);
                    setIsMenuOpen(false);
                  }}
                >
                  {item.name}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section with Slider */}
      <section id="home" className="pt-20 pb-16 relative overflow-hidden">
        <div className="absolute inset-0">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-30' : 'opacity-0'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40"></div>
            </div>
          ))}
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Traditional Berber
              <span className="text-berber-terracotta block">Hair Artistry</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              25 years of excellence in traditional Berber hairdressing, blending cultural heritage with modern techniques
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-berber-terracotta hover:bg-berber-desert text-white px-8 py-3"
                onClick={bookAppointment}
              >
                <Calendar className="mr-2 h-5 w-5" />
                Book Appointment
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={downloadPriceList}
                className="border-white text-white hover:bg-white hover:text-berber-terracotta"
              >
                📄 Download Price List
              </Button>
            </div>
          </div>
        </div>

        {/* Slider indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-berber-terracotta' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-slide-in-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Vijay Hair Dresser</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Preserving the art of traditional Berber hairdressing for over two decades
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="animate-slide-in-left">
              <h3 className="text-2xl font-semibold mb-4 text-berber-desert">25 Years of Excellence</h3>
              <p className="text-muted-foreground mb-6">
                Master Vijay began his journey in traditional Berber hairdressing in 1998, learning ancient techniques 
                passed down through generations. Today, he combines this rich cultural heritage with modern styling 
                methods to create unique looks that honor tradition while embracing contemporary fashion.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-berber-terracotta">2500+</div>
                  <div className="text-sm text-muted-foreground">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-berber-terracotta">25</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=500&h=400&fit=crop"
                alt="Master Vijay at work"
                className="rounded-lg shadow-lg hover-lift w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-muted-foreground">Professional hairdressing services with cultural authenticity</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover-lift animate-scale-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="p-0">
                  <img 
                    src={service.image}
                    alt={service.name}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold mb-2">{service.name}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{service.description}</p>
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary" className="bg-berber-sand text-berber-desert">
                        {service.price}
                      </Badge>
                      <Button size="sm" variant="outline">
                        Select
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Premium Products We Use</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((category, index) => (
              <Card key={index} className="hover-lift animate-fade-in" style={{animationDelay: `${index * 0.2}s`}}>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-berber-terracotta">{category.category}</h3>
                  <ul className="space-y-2">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center">
                        <Check className="h-4 w-4 text-berber-terracotta mr-2" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Work Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <div 
                key={index} 
                className="hover-lift animate-scale-in cursor-pointer overflow-hidden rounded-lg"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <img 
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-48 object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Client Reviews</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <Card key={index} className="hover-lift animate-fade-in" style={{animationDelay: `${index * 0.2}s`}}>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="flex text-berber-gold">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-muted-foreground">{review.date}</span>
                  </div>
                  <p className="text-muted-foreground mb-4">"{review.text}"</p>
                  <div className="flex items-center">
                    <img 
                      src={review.image}
                      alt={review.name}
                      className="h-10 w-10 rounded-full object-cover mr-3"
                    />
                    <span className="font-semibold">{review.name}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cultural Roots Section */}
      <section id="cultural" className="py-16 berber-pattern">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Cultural Roots</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The Berber people have a rich tradition of hairdressing that dates back centuries, 
              representing identity, status, and cultural pride.
            </p>
          </div>
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <p className="text-lg leading-relaxed text-muted-foreground">
              In Berber culture, hairdressing is more than just grooming - it's an art form that tells stories 
              of heritage, family, and community. Master Vijay honors these traditions while bringing 
              them into the modern world, ensuring that each client receives not just a haircut, 
              but a connection to this beautiful cultural legacy.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="animate-slide-in-left">
              <h3 className="text-xl font-semibold mb-6">Get In Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-berber-terracotta mr-3" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-berber-terracotta mr-3" />
                  <span>Mon-Sat: 9AM-7PM, Sun: 10AM-5PM</span>
                </div>
                <div className="flex items-center">
                  <MessageCircle className="h-5 w-5 text-berber-terracotta mr-3" />
                  <span>WhatsApp: +1 (555) 123-4567</span>
                </div>
              </div>
              
              <div className="mt-8">
                <Button 
                  className="bg-green-500 hover:bg-green-600 text-white w-full mb-4"
                  onClick={() => window.open('https://wa.me/15551234567', '_blank')}
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp Us
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full border-berber-terracotta text-berber-terracotta hover:bg-berber-terracotta hover:text-white"
                  onClick={bookAppointment}
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call for Appointment
                </Button>
              </div>

              {/* Social Links */}
              <div className="mt-8">
                <h4 className="font-semibold mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(social.url, '_blank')}
                      className="hover:bg-berber-terracotta hover:text-white hover:border-berber-terracotta"
                    >
                      <social.icon className="h-4 w-4" />
                    </Button>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="animate-scale-in">
              <div className="bg-berber-sand/10 p-6 rounded-lg">
                <h4 className="font-semibold mb-4">Visit Our Shop</h4>
                <p className="text-muted-foreground mb-4">
                  123 Heritage Street<br />
                  Cultural District<br />
                  City, State 12345
                </p>
                <div className="bg-berber-terracotta/10 p-4 rounded border border-berber-terracotta/20">
                  <p className="text-sm text-center">
                    "Experience the authentic Berber hairdressing tradition"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-berber-desert text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="text-2xl font-bold mb-4">Vijay Hair Dresser</div>
          <p className="text-berber-sand mb-4">Preserving Berber heritage through exceptional hairdressing</p>
          <div className="flex justify-center space-x-6 text-sm mb-4">
            <span>© 2024 Vijay Hair Dresser</span>
            <span>•</span>
            <span>25 Years of Excellence</span>
            <span>•</span>
            <span>Cultural Heritage</span>
          </div>
          <div className="flex justify-center space-x-4">
            {socialLinks.map((social, index) => (
              <Button
                key={index}
                variant="ghost"
                size="sm"
                onClick={() => window.open(social.url, '_blank')}
                className="text-berber-sand hover:text-white hover:bg-berber-terracotta"
              >
                <social.icon className="h-4 w-4" />
              </Button>
            ))}
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <Button
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg animate-float z-40"
        onClick={() => window.open('https://wa.me/15551234567', '_blank')}
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
    </div>
  );
};

export default Index;
