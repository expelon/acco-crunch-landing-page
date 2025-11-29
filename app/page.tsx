'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import ServiceCard from '@/components/ServiceCard';
import SectionTitle from '@/components/SectionTitle';
import PricingCard from '@/components/PricingCard';
import TestimonialCard from '@/components/TestimonialCard';
import { services, whyChooseUs, caseStudies, pricing, testimonials } from '@/lib/data';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Our Services"
            title="Comprehensive Solutions for Every Challenge"
            description="We offer a full spectrum of consulting services designed to address your unique business needs and drive measurable results."
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
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="inline-block bg-[#F4C542]/20 text-[#F4C542] px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Why Choose Us
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                Excellence in Every Engagement
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Partner with a team that combines strategic thinking, industry expertise,
                and a commitment to your success.
              </p>
            </motion.div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-5xl font-bold text-[#F4C542] mb-2">
                  {item.stat}
                </div>
                <div className="text-gray-300 mb-4">{item.label}</div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#F7F7F7]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Case Studies"
            title="Proven Results Across Industries"
            description="Discover how we've helped organizations achieve transformational outcomes."
          />
          <div className="grid md:grid-cols-2 gap-8 mt-16">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="bg-gradient-to-br from-[#1B263B] to-[#2D3E5F] h-48 flex items-center justify-center text-7xl">
                  {study.image}
                </div>
                <div className="p-8">
                  <div className="inline-block bg-[#F4C542]/10 text-[#1B263B] px-3 py-1 rounded-full text-sm font-semibold mb-4">
                    {study.category}
                  </div>
                  <h3 className="text-2xl font-bold text-[#1B263B] mb-3 group-hover:text-[#F4C542] transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{study.description}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <span className="text-[#F4C542] font-bold text-lg">
                      {study.results}
                    </span>
                    <ArrowRight className="text-[#1B263B] group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Pricing Plans"
            title="Flexible Solutions for Every Budget"
            description="Choose a plan that fits your needs and scales with your growth."
          />
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {pricing.map((plan, index) => (
              <PricingCard key={index} {...plan} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#F7F7F7] to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Testimonials"
            title="What Our Clients Say"
            description="Don't just take our word for it. Hear from the businesses we've helped transform."
          />
          <div className="grid md:grid-cols-2 gap-8 mt-16">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#1B263B] to-[#2D3E5F] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Let's discuss how our consulting expertise can help you achieve your
              strategic goals and unlock new opportunities for growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="group bg-[#F4C542] text-[#1B263B] px-8 py-4 rounded-lg font-semibold hover:bg-[#e5b835] transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105"
              >
                Schedule a Consultation
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <a
                href="tel:+15551234567"
                className="bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border-2 border-white hover:bg-white hover:text-[#1B263B] transition-all duration-300"
              >
                Call: +1 (555) 123-4567
              </a>
            </div>
            <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-white/20">
              <div>
                <CheckCircle2 className="w-12 h-12 text-[#F4C542] mx-auto mb-3" />
                <div className="font-semibold">Free Consultation</div>
              </div>
              <div>
                <CheckCircle2 className="w-12 h-12 text-[#F4C542] mx-auto mb-3" />
                <div className="font-semibold">No Long-term Contracts</div>
              </div>
              <div>
                <CheckCircle2 className="w-12 h-12 text-[#F4C542] mx-auto mb-3" />
                <div className="font-semibold">Satisfaction Guaranteed</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
