'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionTitle from '@/components/SectionTitle';
import ServiceCard from '@/components/ServiceCard';
import { services } from '@/lib/data';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const serviceDetails = [
  {
    title: 'Our Approach',
    description:
      'We begin every engagement with a comprehensive discovery phase to understand your unique challenges, goals, and organizational culture. Our consultants work collaboratively with your team to develop customized strategies.',
  },
  {
    title: 'Implementation',
    description:
      'Strategic planning is only valuable when executed effectively. We provide hands-on support throughout implementation, ensuring seamless integration and sustainable results.',
  },
  {
    title: 'Continuous Improvement',
    description:
      'Business success requires ongoing adaptation. We establish frameworks for continuous monitoring, measurement, and optimization to maintain competitive advantage.',
  },
];

const industries = [
  'Healthcare & Life Sciences',
  'Technology & Software',
  'Financial Services',
  'Manufacturing',
  'Retail & E-commerce',
  'Energy & Utilities',
  'Telecommunications',
  'Professional Services',
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="pt-32 pb-20 bg-gradient-to-br from-[#F7F7F7] to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-block bg-[#F4C542]/10 text-[#1B263B] px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Our Services
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold text-[#1B263B] mb-6">
              Strategic Solutions for
              <span className="text-[#F4C542]"> Complex Challenges</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Our comprehensive suite of consulting services empowers organizations
              to navigate uncertainty, capitalize on opportunities, and achieve
              sustainable competitive advantage.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#1B263B] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#2D3E5F] transition-all duration-300 hover:scale-105"
            >
              Start Your Journey
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Core Services"
            title="Comprehensive Consulting Expertise"
            description="From strategy to execution, we provide end-to-end support across all critical business functions."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#1B263B] to-[#2D3E5F] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="inline-block bg-[#F4C542]/20 text-[#F4C542] px-4 py-2 rounded-full text-sm font-semibold mb-6">
                Our Methodology
              </div>
              <h2 className="text-4xl font-bold mb-6">
                A Proven Framework for Success
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Our consulting methodology combines analytical rigor with practical
                implementation, ensuring strategies translate into measurable business
                outcomes.
              </p>
              {serviceDetails.map((detail, index) => (
                <div key={index} className="mb-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle2
                      className="text-[#F4C542] flex-shrink-0 mt-1"
                      size={24}
                    />
                    <div>
                      <h3 className="text-xl font-bold mb-2">{detail.title}</h3>
                      <p className="text-gray-300">{detail.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-bold mb-6">Industries We Serve</h3>
              <div className="grid grid-cols-2 gap-4">
                {industries.map((industry, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-2 bg-white/5 p-3 rounded-lg"
                  >
                    <CheckCircle2 className="text-[#F4C542] flex-shrink-0" size={20} />
                    <span className="text-sm">{industry}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#F7F7F7]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <SectionTitle
              subtitle="Service Process"
              title="How We Work With You"
              description="A transparent, collaborative approach that ensures alignment and delivers results."
            />
            <div className="grid md:grid-cols-4 gap-8 mt-16">
              {[
                {
                  step: '01',
                  title: 'Discovery',
                  description:
                    'Deep dive into your business to understand challenges and opportunities',
                },
                {
                  step: '02',
                  title: 'Strategy',
                  description:
                    'Develop customized roadmap aligned with your goals and resources',
                },
                {
                  step: '03',
                  title: 'Execution',
                  description:
                    'Implement solutions with hands-on support and change management',
                },
                {
                  step: '04',
                  title: 'Optimization',
                  description:
                    'Monitor results and refine approaches for continuous improvement',
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="text-6xl font-bold text-[#F4C542]/20 mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-2xl font-bold text-[#1B263B] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-[#F4C542]/30"></div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-[#1B263B] mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Schedule a complimentary consultation to discuss your business challenges
              and explore how our services can drive meaningful results.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#F4C542] text-[#1B263B] px-8 py-4 rounded-lg font-semibold hover:bg-[#e5b835] transition-all duration-300 hover:scale-105"
            >
              Contact Us Today
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
