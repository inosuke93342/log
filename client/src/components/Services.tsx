
import { FadeIn, FadeInStagger } from '@/components/ui/FadeIn';
import { Truck, Package, BarChart, Route, ShoppingBag, Map } from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: Truck,
    title: 'Freight Forwarding',
    description: 'International freight solutions by air, ocean, and land, ensuring your goods reach their destination on time.',
  },
  {
    icon: Package,
    title: 'Warehousing',
    description: 'State-of-the-art facilities for storage, cross-docking, and distribution, optimizing your supply chain.',
  },
  {
    icon: BarChart,
    title: 'Supply Chain Management',
    description: 'End-to-end visibility and control over your entire supply chain with advanced analytics and insights.',
  },
  {
    icon: Route,
    title: 'Last Mile Delivery',
    description: 'Reliable and efficient final leg delivery services that ensure customer satisfaction and brand loyalty.',
  },
  {
    icon: ShoppingBag,
    title: 'E-commerce Logistics',
    description: 'Specialized solutions for online retailers, including fulfillment, returns management, and more.',
  },
  {
    icon: Map,
    title: 'Customs Clearance',
    description: 'Expert guidance and handling of customs procedures to ensure smooth border crossings without delays.',
  },
];

const Services = () => {
  return (
    <section id="services" className="section bg-gray-50">
      <div className="container">
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-logistics-800 bg-logistics-50 rounded-full">
              Our Services
            </div>
            <h2 className="section-title text-gray-900">
              Comprehensive Logistics Solutions
            </h2>
            <p className="section-subtitle">
              We offer a wide range of services to meet your logistics and supply chain needs, tailored to your specific requirements.
            </p>
          </div>
        </FadeIn>
        
        <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <FadeIn 
              key={index} 
              className="service-card bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all"
            >
              <div className="mb-4 inline-block p-3 bg-logistics-50 rounded-lg">
                <service.icon className="h-6 w-6 text-logistics-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Button 
                variant="link" 
                className="p-0 h-auto text-logistics-600 hover:text-logistics-700 font-medium"
              >
                Learn more &rarr;
              </Button>
            </FadeIn>
          ))}
        </FadeInStagger>
        
        <FadeIn delay={400} className="mt-16 text-center">
          <Button 
            className="bg-logistics-600 hover:bg-logistics-700 text-white btn-hover-effect px-8 py-6 text-base"
          >
            View All Services
          </Button>
        </FadeIn>
      </div>
    </section>
  );
};

export default Services;
