
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { FadeIn } from '@/components/ui/FadeIn';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-6">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          <FadeIn className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-1">LogiSwift</h3>
              <p className="text-gray-400">Your trusted logistics partner</p>
            </div>
            <p className="text-gray-300 mb-8 max-w-xs">
              Delivering excellence in logistics and supply chain management solutions worldwide since 1992.
            </p>
            <div className="flex space-x-4">
              {['facebook', 'twitter', 'linkedin', 'instagram'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:bg-logistics-600 hover:text-white transition-colors"
                >
                  <span className="sr-only">{social}</span>
                  <div className="w-5 h-5"></div>
                </a>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={100} className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Services</h4>
            <ul className="space-y-3">
              {[
                'Freight Forwarding',
                'Warehousing',
                'Supply Chain',
                'Last Mile Delivery',
                'E-commerce Logistics',
                'Customs Clearance',
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn delay={200} className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Company</h4>
            <ul className="space-y-3">
              {[
                'About Us',
                'Our Team',
                'Careers',
                'News & Blog',
                'Case Studies',
                'Contact Us',
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn delay={300} className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Newsletter</h4>
            <p className="text-gray-300">
              Subscribe to our newsletter for the latest updates and insights.
            </p>
            <div className="flex flex-col space-y-3">
              <Input
                placeholder="Your email address"
                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 focus:border-logistics-500"
              />
              <Button className="w-full bg-logistics-600 hover:bg-logistics-700 text-white btn-hover-effect">
                Subscribe <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </FadeIn>
        </div>

        <FadeIn>
          <div className="pt-8 border-t border-gray-800 text-center md:flex md:justify-between md:text-left">
            <p className="text-gray-400 mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} LogiSwift. All rights reserved.
            </p>
            <div className="flex justify-center md:justify-end space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Cookies
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </footer>
  );
};

export default Footer;
