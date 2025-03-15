
import { FadeIn } from '@/components/ui/FadeIn';
import { Button } from '@/components/ui/button';
import { ArrowRight, Truck, Package, Map } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pb-32 overflow-hidden">
      <div className="hero-shape"></div>
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <FadeIn delay={100}>
              <div className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-logistics-800 bg-logistics-50 rounded-full">
                Trusted Logistics Partner
              </div>
            </FadeIn>
            
            <FadeIn delay={200}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6">
                Delivering Excellence, <span className="text-logistics-600">Worldwide</span>
              </h1>
            </FadeIn>
            
            <FadeIn delay={300}>
              <p className="text-lg md:text-xl text-gray-600 mb-8 md:mb-10 max-w-xl">
                Efficient logistics solutions tailored to your needs. From freight forwarding to supply chain management, we deliver with precision and care.
              </p>
            </FadeIn>
            
            <FadeIn delay={400}>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-logistics-600 hover:bg-logistics-700 text-white btn-hover-effect px-8 py-6 text-base">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" className="text-logistics-700 border-logistics-200 hover:bg-logistics-50 px-8 py-6 text-base">
                  Learn More
                </Button>
              </div>
            </FadeIn>
            
            <FadeIn delay={500}>
              <div className="mt-10 md:mt-12 grid grid-cols-3 gap-6 max-w-lg">
                <div className="text-center">
                  <div className="mx-auto w-12 h-12 rounded-full bg-logistics-100 flex items-center justify-center mb-2">
                    <Truck className="h-5 w-5 text-logistics-600" />
                  </div>
                  <p className="text-sm font-medium text-gray-700">Fast Delivery</p>
                </div>
                <div className="text-center">
                  <div className="mx-auto w-12 h-12 rounded-full bg-logistics-100 flex items-center justify-center mb-2">
                    <Package className="h-5 w-5 text-logistics-600" />
                  </div>
                  <p className="text-sm font-medium text-gray-700">Secure Handling</p>
                </div>
                <div className="text-center">
                  <div className="mx-auto w-12 h-12 rounded-full bg-logistics-100 flex items-center justify-center mb-2">
                    <Map className="h-5 w-5 text-logistics-600" />
                  </div>
                  <p className="text-sm font-medium text-gray-700">Global Reach</p>
                </div>
              </div>
            </FadeIn>
          </div>
          
          <FadeIn delay={200} className="hidden md:block">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-logistics-50 rounded-full opacity-60"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-logistics-100 rounded-full opacity-60"></div>
              
              <div className="relative glass rounded-2xl overflow-hidden shadow-xl">
                <div className="aspect-[4/3] w-full bg-gradient-to-br from-logistics-50 to-logistics-100 rounded-2xl flex items-center justify-center">
                  <img 
                    src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3"
                    alt="Logistics operations"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
                
                <div className="absolute top-4 left-4 glass px-4 py-2 rounded-full backdrop-blur-lg text-sm font-medium text-logistics-800">
                  24/7 Operations
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Hero;
