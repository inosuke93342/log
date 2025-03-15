
import { useState } from 'react';
import { FadeIn } from '@/components/ui/FadeIn';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { MapPin, Phone, Mail, CheckCircle } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent",
        description: "We'll get back to you as soon as possible.",
        icon: <CheckCircle className="h-5 w-5 text-green-500" />,
      });
      setFormState({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="section bg-gray-50">
      <div className="container">
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-logistics-800 bg-logistics-50 rounded-full">
              Get In Touch
            </div>
            <h2 className="section-title text-gray-900">
              Contact Us Today
            </h2>
            <p className="section-subtitle">
              Whether you have questions about our services or want to request a quote, our team is ready to help.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          <FadeIn className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8">
              <h3 className="text-xl font-semibold mb-6 text-gray-900">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mr-4 bg-logistics-50 rounded-lg p-2">
                    <MapPin className="h-5 w-5 text-logistics-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 mb-1">Our Location</p>
                    <p className="text-gray-600">
                      123 Logistics Way<br />
                      San Francisco, CA 94103
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 bg-logistics-50 rounded-lg p-2">
                    <Phone className="h-5 w-5 text-logistics-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 mb-1">Phone Number</p>
                    <p className="text-gray-600">
                      +1 (555) 123-4567<br />
                      +1 (555) 987-6543
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 bg-logistics-50 rounded-lg p-2">
                    <Mail className="h-5 w-5 text-logistics-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 mb-1">Email Address</p>
                    <p className="text-gray-600">
                      info@logiswift.com<br />
                      support@logiswift.com
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-100">
                <h4 className="font-medium text-gray-900 mb-4">Business Hours</h4>
                <div className="space-y-2">
                  <div className="flex justify-between text-gray-600">
                    <span>Monday - Friday:</span>
                    <span>8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Saturday:</span>
                    <span>9:00 AM - 3:00 PM</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={200} className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8">
              <h3 className="text-xl font-semibold mb-6 text-gray-900">Send Us a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    placeholder="+1 (555) 123-4567"
                    value={formState.phone}
                    onChange={handleChange}
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="How can we help you?"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    className="w-full min-h-[120px]"
                  />
                </div>

                <Button
                  type="submit"
                  className="bg-logistics-600 hover:bg-logistics-700 text-white btn-hover-effect w-full py-6"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Contact;
