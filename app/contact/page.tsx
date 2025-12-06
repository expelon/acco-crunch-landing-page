'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, ChevronDown, ChevronUp } from 'lucide-react';

export default function ContactPage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

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
                        href="tel:+15551234567"
                        className="text-[#433b33] hover:text-[#E8531A] transition-colors text-sm pl-15 block"
                      >
                        +1 (555) 123-4567
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
                        href="mailto:info@accocrunch.com"
                        className="text-[#433b33] hover:text-[#E8531A] transition-colors text-sm pl-15 block"
                      >
                        info@accocrunch.com
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
                        123 Business Avenue<br />
                        Suite 500, New York
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

      {/* FAQ Section */}
      <section className="py-20 bg-[#f5f1e6]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-light text-[#1B263B] mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-[#433b33] text-lg max-w-3xl mx-auto">
                We've compiled answers to the most common questions clients ask about our business strategy consulting.
              </p>
            </motion.div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl overflow-hidden border border-gray-200"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <h3 className="text-xl font-light text-[#1B263B] pr-8">
                      {faq.question}
                    </h3>
                    {expandedFaq === index ? (
                      <ChevronUp className="text-gray-400 flex-shrink-0" size={24} />
                    ) : (
                      <ChevronDown className="text-gray-400 flex-shrink-0" size={24} />
                    )}
                  </button>
                  {expandedFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-8 pb-6"
                    >
                      <p className="text-[#433b33] text-lg leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
