'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, ChevronDown, ChevronUp, Target, Users, TrendingUp, Handshake, Plus, Minus, ArrowRight } from 'lucide-react';
import { useRef } from 'react';

export default function ContactPage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [selectedService, setSelectedService] = useState<string>('');
  const [isServiceDropdownOpen, setIsServiceDropdownOpen] = useState<boolean>(false);
  const [expandedItems, setExpandedItems] = useState<number[]>([]);
  const imgRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: imgRef, offset: ['start end', 'end start'] });
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  const services = [
    'Business Registration',
    'GST & Compliance',
    'Trademark',
    'Partnership Inquiry',
    'Internship / Career'
  ];

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "What types of businesses do you work with?",
      answer: "We work with a diverse range of businesses—from startups and small enterprises to large corporations—across industries like retail and manufacturing."
    },
    {
      question: "Do I need to hire you monthly, or can I choose one-time services?",
      answer: "You have the flexibility to choose what suits you best. We offer both ongoing monthly support and one-time services tailored to your immediate business needs."
    },
    {
      question: "Is my financial data safe with you?",
      answer: "Absolutely. We use industry-standard data protection protocols, encrypted communication, and NDA agreements to ensure your financial information is secure and confidential."
    },
    {
      question: "How do you price your services?",
      answer: "Our pricing is customized based on the scope, complexity, and duration of your needs—whether it's a one-time project or ongoing support."
    },
    {
      question: "Do you offer virtual consultations?",
      answer: "Yes, we offer virtual consultations to provide flexible, convenient support—no matter where your business is located. We provide virtual consultations via video or phone."
    }
  ];

  return (
    <div className="min-h-screen bg-[#f5f1e6]">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-16 pb-2 bg-[#f5f1e6]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-light text-[#1B263B] mb-4">
              Contact Us
            </h1>
            <p className="text-sm sm:text-base text-[#433b33] leading-relaxed max-w-3xl mx-auto">
              Whether you're ready to improve your financial systems, need clarity on compliance, or want expert advice on scaling your business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="pt-8 pb-20 bg-[#f5f1e6]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 min-h-[200px] flex flex-col">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-[#E8531A]/10 rounded-md flex items-center justify-center flex-shrink-0">
                        <Phone className="text-[#E8531A]" size={16} />
                      </div>
                      <h3 className="text-base font-medium text-[#1B263B]">Phone</h3>
                    </div>
                    <div className="mt-auto">
                      <a
                        href="tel:+918089200829"
                        className="text-[#433b33] hover:text-[#E8531A] transition-colors text-sm pl-15 block"
                      >
                        +91 80892 00829
                      </a>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 min-h-[200px] flex flex-col">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-[#E8531A]/10 rounded-md flex items-center justify-center flex-shrink-0">
                        <Mail className="text-[#E8531A]" size={16} />
                      </div>
                      <h3 className="text-base font-medium text-[#1B263B]">Email</h3>
                    </div>
                    <div className="mt-auto">
                      <a
                        href="mailto:hello.accocrunch@gmail.com"
                        className="text-[#433b33] hover:text-[#E8531A] transition-colors text-sm pl-15 block"
                      >
                        hello.accocrunch@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 min-h-[200px] flex flex-col">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-[#E8531A]/10 rounded-md flex items-center justify-center flex-shrink-0">
                        <MapPin className="text-[#E8531A]" size={16} />
                      </div>
                      <h3 className="text-base font-medium text-[#1B263B]">Address</h3>
                    </div>
                    <div className="mt-auto">
                      <p className="text-[#433b33] text-sm leading-relaxed pl-15">
                        Acco Crunch<br />
                        Third Floor, City Centre Building,<br />
                        Vellayambalam, Thiruvananthapuram,<br />
                        Kerala – 695010
                      </p>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 min-h-[200px] flex flex-col">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-[#E8531A]/10 rounded-md flex items-center justify-center flex-shrink-0">
                        <Clock className="text-[#E8531A]" size={16} />
                      </div>
                      <h3 className="text-base font-medium text-[#1B263B]">Business hours</h3>
                    </div>
                    <div className="mt-auto">
                      <div className="text-[#433b33] text-sm space-y-1 pl-15">
                        <p>Mon - Fri: 9:30 AM - 5:30 PM</p>
                        <p>Sat: 10:00 AM - 5:00 PM</p>
                        <p>Sun: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature form section */}
      <section className="py-12 bg-[#f5f1e6]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#1c1a19] rounded-[20px] overflow-hidden p-2 sm:p-3">
            <div className="relative h-64 sm:h-80 lg:h-96 overflow-hidden rounded-[18px]">
            <motion.div
              ref={imgRef}
              className="absolute inset-0"
              style={{ scale: imgScale }}
            >
              <Image
                src="/contact1.webp"
                alt="Modern office desk"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-x-0 bottom-0 h-28 sm:h-32 bg-gradient-to-t from-[#2b2118]/90 via-[#2b2118]/70 to-transparent" />
            </motion.div>
          </div>
            <div className="px-3 sm:px-6 lg:px-8 py-7 space-y-4 lg:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full name"
                  className="bg-[#151312] rounded-xl border border-transparent focus:border-[#E8531A] focus:outline-none px-4 py-3 text-sm text-[#f5f1e6] placeholder-[#7f7a74]"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  className="bg-[#151312] rounded-xl border border-transparent focus:border-[#E8531A] focus:outline-none px-4 py-3 text-sm text-[#f5f1e6] placeholder-[#7f7a74]"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone number"
                  className="bg-[#151312] rounded-xl border border-transparent focus:border-[#E8531A] focus:outline-none px-4 py-3 text-sm text-[#f5f1e6] placeholder-[#7f7a74]"
                />
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setIsServiceDropdownOpen(!isServiceDropdownOpen)}
                    className="w-full bg-[#151312] rounded-xl border border-transparent focus:border-[#E8531A] focus:outline-none px-4 py-3 text-sm text-[#f5f1e6] placeholder-[#7f7a74] text-left flex items-center justify-between"
                  >
                    {selectedService || 'Select a service'}
                    <ChevronDown className={`w-4 h-4 transition-transform ${isServiceDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isServiceDropdownOpen && (
                    <div className="absolute z-10 w-full mt-1 bg-[#151312] rounded-xl border border-transparent focus:border-[#E8531A] overflow-hidden">
                      {services.map((service) => (
                        <button
                          key={service}
                          type="button"
                          onClick={() => {
                            setSelectedService(service);
                            setIsServiceDropdownOpen(false);
                          }}
                          className="w-full px-4 py-3 text-sm text-[#f5f1e6] hover:bg-[#2a2a2a] text-left transition-colors"
                        >
                          {service}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              <textarea
                name="message"
                rows={4}
                placeholder="Message"
                className="w-full bg-[#151312] rounded-xl border border-transparent focus:border-[#E8531A] focus:outline-none px-4 py-3 text-sm text-[#f5f1e6] placeholder-[#7f7a74] resize-none"
              />
              <button
                type="submit"
                className="w-full rounded-xl bg-[#E8531A] text-white font-medium text-base py-3 hover:bg-[#cf4510] transition-colors"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Growth services section */}
      <section className="mt-12 sm:mt-16 pb-12 sm:pb-16 bg-[#f5f1e6]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top heading + copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.4 }}
            className="max-w-3xl mx-auto text-center mb-8 sm:mb-10"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-[36px] font-light text-[#1B263B] leading-snug sm:leading-relaxed lg:leading-[1.5]">
              Frequently Asked Questions
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#433b33] leading-relaxed">
              We’ve compiled answers to the most common questions clients ask about our business strategy consulting.
            </p>
          </motion.div>

          {/* Main container with image and clickable services */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
            className="rounded-2xl bg-[#f0e8dc] shadow-sm overflow-hidden border border-black/5"
          >
            <div className="p-2">
              {/* Inner container for image and items */}
              <div className="flex flex-col lg:flex-row gap-0">
                {/* Left: Full width image */}
                <div className="relative overflow-hidden rounded-t-lg lg:rounded-l-lg lg:rounded-tr-none flex-1 min-h-[280px] sm:min-h-[340px] lg:min-h-[380px]">
                  <div className="absolute inset-0 w-full h-full">
                    <Image
                      src="/partnership3.webp"
                      alt="Strategic partnership collaboration"
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>

                {/* Right: Clickable FAQ-style questions */}
                <div className="space-y-0 flex-1">
                  {[
                    {
                      id: 1,
                      title: 'What types of businesses do you work with?',
                      description:
                        'We work with a diverse range of businesses—from startups and small enterprises to large corporations—across industries like retail and manufacturing.',
                    },
                    {
                      id: 2,
                      title: 'Do I need to hire you monthly, or can I choose one-time services?',
                      description:
                        'You have the flexibility to choose what suits you best. We offer both ongoing monthly support and one-time services tailored to your immediate business needs.',
                    },
                    {
                      id: 3,
                      title: 'Is my financial data safe with you?',
                      description:
                        'Absolutely. We use industry-standard data protection protocols, encrypted communication, and NDA agreements to ensure your financial information is secure and confidential.',
                    },
                    {
                      id: 4,
                      title: 'How do you price your services?',
                      description:
                        'Our pricing is customized based on the scope, complexity, and duration of your needs—whether it’s a one-time project or ongoing support.',
                    },
                    {
                      id: 5,
                      title: 'Do you offer virtual consultations?',
                      description:
                        'Yes, we offer virtual consultations to provide flexible, convenient support—no matter where your business is located. We provide virtual consultations via video or phone.',
                    },
                  ].map((item, index) => (
                    <div
                      key={item.id}
                      className={`overflow-hidden bg-white transition-all duration-300 ${
                        index === 0 ? 'rounded-tr-lg' : index === 4 ? 'rounded-br-lg' : ''
                      }`}
                    >
                      <button
                        onClick={() => {
                          setExpandedItems(prev => 
                            prev.includes(item.id) 
                              ? prev.filter(id => id !== item.id)
                              : [...prev, item.id]
                          );
                        }}
                        className="w-full px-4 sm:px-5 py-6 sm:py-7 flex items-center justify-between gap-3 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-sm sm:text-base font-medium text-[#1B263B] text-left">
                            {item.title}
                          </span>
                        </div>
                        <div className="text-[#E8531A] flex-shrink-0">
                          {expandedItems.includes(item.id) ? <Minus size={20} /> : <Plus size={20} />}
                        </div>
                      </button>
                      
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ 
                          height: expandedItems.includes(item.id) ? 'auto' : 0,
                          opacity: expandedItems.includes(item.id) ? 1 : 0
                        }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        {item.description && (
                          <div className="px-6 sm:px-8 pb-5 sm:pb-6">
                            <p className="text-sm text-[#645446] leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                        )}
                      </motion.div>
                    </div>
                  ))}
                </div>
              </div>
              {/* End inner container */}
            </div>
            {/* End main container */}

          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
