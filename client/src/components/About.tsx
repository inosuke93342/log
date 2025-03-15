
import { FadeIn } from '@/components/ui/FadeIn';
import { CheckCircle } from 'lucide-react';

const stats = [
  { number: '30+', label: 'Years Experience' },
  { number: '98%', label: 'On-Time Delivery' },
  { number: '200+', label: 'Global Partners' },
  { number: '50+', label: 'Countries Served' },
];

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 md:order-1">
            <FadeIn className="relative">
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-logistics-50 rounded-full opacity-60 z-0"></div>
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=1470&auto=format&fit=crop"
                  alt="About our company"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 glass rounded-xl p-4 shadow-lg max-w-xs">
                <div className="flex items-center mb-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div 
                        key={i} 
                        className="w-8 h-8 rounded-full bg-logistics-100 border-2 border-white flex items-center justify-center text-xs font-medium text-logistics-800"
                      >
                        T{i}
                      </div>
                    ))}
                  </div>
                  <div className="ml-2 text-sm font-medium">Our dedicated team</div>
                </div>
                <div className="text-xs text-gray-600">
                  Experienced professionals committed to excellence in logistics
                </div>
              </div>
            </FadeIn>
          </div>

          <div className="order-1 md:order-2">
            <FadeIn>
              <div className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-logistics-800 bg-logistics-50 rounded-full">
                About Us
              </div>
            </FadeIn>

            <FadeIn delay={100}>
              <h2 className="section-title text-gray-900">
                Transforming Global Logistics Since 1992
              </h2>
            </FadeIn>

            <FadeIn delay={200}>
              <p className="text-gray-600 mb-6">
                At LogiSwift, we've been at the forefront of the logistics industry for over three decades, delivering innovative solutions that connect businesses worldwide.
              </p>
            </FadeIn>

            <FadeIn delay={300}>
              <p className="text-gray-600 mb-8">
                Our mission is to simplify global trade by providing seamless, efficient, and sustainable logistics services. With a team of dedicated professionals and a global network of partners, we ensure your goods move smoothly across borders.
              </p>
            </FadeIn>

            <FadeIn delay={400}>
              <div className="space-y-3 mb-8">
                {[
                  'Industry-leading technology platform',
                  'Eco-friendly transportation options',
                  'Customized solutions for your business',
                  '24/7 customer support and tracking',
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-logistics-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={500}>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 lg:gap-8 mt-10">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-logistics-700 mb-1">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
