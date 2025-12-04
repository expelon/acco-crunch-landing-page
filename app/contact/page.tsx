'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: '',
      });
      setSubmitted(false);
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="pt-32 pb-20 bg-[#f5f1e6]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-block bg-[#F4C542]/10 text-[#1B263B] px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Get In Touch
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold text-[#1B263B] mb-6">
              Let's Start a{' '}
              <span className="text-[#F4C542]">Conversation</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Ready to transform your business? Reach out to our team of experts
              and discover how we can help you achieve your strategic goals.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-[#f5f1e6]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold text-[#1B263B] mb-8">
                  Send Us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-semibold text-[#1B263B] mb-2"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#F4C542] focus:outline-none transition-colors"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold text-[#1B263B] mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#F4C542] focus:outline-none transition-colors"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-semibold text-[#1B263B] mb-2"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#F4C542] focus:outline-none transition-colors"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-semibold text-[#1B263B] mb-2"
                      >
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#F4C542] focus:outline-none transition-colors"
                        placeholder="Your Company"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm font-semibold text-[#1B263B] mb-2"
                    >
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#F4C542] focus:outline-none transition-colors"
                    >
                      <option value="">Select a service</option>
                      <option value="business-strategy">Business Strategy</option>
                      <option value="digital-transformation">
                        Digital Transformation
                      </option>
                      <option value="market-analysis">Market Analysis</option>
                      <option value="leadership-development">
                        Leadership Development
                      </option>
                      <option value="financial-advisory">Financial Advisory</option>
                      <option value="risk-management">Risk Management</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-[#1B263B] mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#F4C542] focus:outline-none transition-colors resize-none"
                      placeholder="Tell us about your project and how we can help..."
                    ></textarea>
                  </div>

                  {submitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="bg-green-50 border-2 border-green-500 text-green-700 px-6 py-4 rounded-lg flex items-center gap-3"
                    >
                      <CheckCircle2 size={24} />
                      <span className="font-semibold">
                        Thank you! We'll be in touch shortly.
                      </span>
                    </motion.div>
                  ) : (
                    <button
                      type="submit"
                      className="w-full md:w-auto bg-[#1B263B] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#2D3E5F] transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105"
                    >
                      Send Message
                      <Send size={20} />
                    </button>
                  )}
                </form>
              </motion.div>
            </div>

            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-3xl font-bold text-[#1B263B] mb-8">
                  Contact Information
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#F4C542]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-[#F4C542]" size={24} />
                    </div>
                    <div>
                      <div className="font-semibold text-[#1B263B] mb-1">
                        Office Address
                      </div>
                      <div className="text-gray-600">
                        123 Business Avenue, Suite 500
                        <br />
                        New York, NY 10001
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#F4C542]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="text-[#F4C542]" size={24} />
                    </div>
                    <div>
                      <div className="font-semibold text-[#1B263B] mb-1">
                        Phone Number
                      </div>
                      <a
                        href="tel:+15551234567"
                        className="text-gray-600 hover:text-[#F4C542] transition-colors"
                      >
                        +1 (555) 123-4567
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#F4C542]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="text-[#F4C542]" size={24} />
                    </div>
                    <div>
                      <div className="font-semibold text-[#1B263B] mb-1">
                        Email Address
                      </div>
                      <a
                        href="mailto:info@accocrunch.com"
                        className="text-gray-600 hover:text-[#F4C542] transition-colors"
                      >
                        info@accocrunch.com
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white p-8 rounded-2xl border border-gray-200 text-[#1B263B]"
              >
                <h3 className="text-2xl font-bold mb-4 text-[#1B263B]">Office Hours</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monday - Friday</span>
                    <span className="font-semibold text-[#1B263B]">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Saturday</span>
                    <span className="font-semibold text-[#1B263B]">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sunday</span>
                    <span className="font-semibold text-[#1B263B]">Closed</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
