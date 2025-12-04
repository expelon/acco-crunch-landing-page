'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import ServiceCard from '@/components/ServiceCard';
import SectionTitle from '@/components/SectionTitle';
import PricingCard from '@/components/PricingCard';
import TestimonialCard from '@/components/TestimonialCard';
import { services, whyChooseUs, caseStudies, pricing, testimonials } from '@/lib/data';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, CheckCircle2, BarChart3, ReceiptCent, LineChart } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

export default function Home() {
  const imgRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: imgRef, offset: ['start end', 'end start'] });
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  // Responsive animation tuning for small screens
  const [isSmall, setIsSmall] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 640px)');
    const onChange = (e: MediaQueryListEvent) => setIsSmall(e.matches);
    setIsSmall(mq.matches);
    mq.addEventListener?.('change', onChange);
    return () => mq.removeEventListener?.('change', onChange);
  }, []);

  const stagger = isSmall ? 0.28 : 0.22;
  const headY = isSmall ? 72 : 60;
  const paraY = isSmall ? 64 : 52;
  const btnY = isSmall ? 48 : 40;
  const quoteY = isSmall ? 96 : 80;

  const headDur = isSmall ? 1.1 : 0.9;
  const paraDur = isSmall ? 1.05 : 0.9;
  const btnDur = isSmall ? 1.0 : 0.8;
  const quoteDur = isSmall ? 1.1 : 0.85;

  const btnDelay = isSmall ? 0.18 : 0.12;
  const quoteDelay = isSmall ? 0.42 : 0.32; // ensure quote starts after button

  // Trigger earlier on desktop, a bit later on small screens
  const viewportAmount = isSmall ? 0.5 : 0.35;

  return (
    <div className="min-h-screen bg-[#f5f1e6]">
      <Navbar />
      <Hero />

      {/* Intro block below Hero */}
      <section className="py-20 bg-[#f5f1e6]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: viewportAmount }}
            variants={{ show: { transition: { staggerChildren: stagger } } }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h2
              variants={{ hidden: { opacity: 0, y: headY }, show: { opacity: 1, y: 0, transition: { duration: headDur, ease: [0.16, 1, 0.3, 1] } } }}
              className="text-3xl sm:text-4xl font-semibold text-[#1B263B] tracking-tight"
            >
              Strategic expertise for confident decisions and assured, sustainable business scaling.
            </motion.h2>
            <motion.p
              variants={{ hidden: { opacity: 0, y: paraY }, show: { opacity: 1, y: 0, transition: { duration: paraDur, ease: [0.16, 1, 0.3, 1] } } }}
              className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed"
            >
              Acco Crunch, a proactive business consultancy, helps organizations build strong foundations with strategic expertise in taxation, incorporation, legal compliance, accounting, and structuring.
            </motion.p>

            <motion.div
              variants={{ hidden: { opacity: 0, y: quoteY }, show: { opacity: 1, y: 0, transition: { duration: quoteDur, ease: [0.16, 1, 0.3, 1], delay: quoteDelay } } }}
              className="mt-6 max-w-3xl mx-auto text-center text-gray-700"
            >
              <p className="italic">“Good accounting builds business history. Strategic advisory builds business legacy.”</p>
              <p className="mt-2 font-medium">- Jaison Mullukattil</p>
            </motion.div>

            <motion.div
              variants={{ hidden: { opacity: 0, y: btnY }, show: { opacity: 1, y: 0, transition: { duration: btnDur, ease: [0.16, 1, 0.3, 1], delay: btnDelay } } }}
              className="mt-10"
            >
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 bg-[#E8531A] hover:bg-[#1B263B] text-white px-7 py-[14px] rounded-xl font-normal shadow-md transition-colors duration-300 ease-out"
              >
                More about us
                <ArrowRight size={18} className="transition-transform duration-300 ease-out group-hover:translate-x-[6px] group-hover:scale-110" />
              </Link>
            </motion.div>
          </motion.div>

          <div className="mt-12 grid md:grid-cols-3 gap-8">
            <div
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div className="w-16 h-16 bg-[#f5f1e6] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <BarChart3 size={32} className="text-[#F4C542]" />
              </div>
              <h3 className="text-2xl font-bold text-[#1B263B] mb-4 group-hover:text-[#F4C542] transition-colors">Improved financial clarity</h3>
              <p className="text-gray-600 leading-relaxed">Get accurate, up-to-date financial insights for confident decision-making.</p>
            </div>

            <div
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div className="w-16 h-16 bg-[#f5f1e6] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <ReceiptCent size={32} className="text-[#F4C542]" />
              </div>
              <h3 className="text-2xl font-bold text-[#1B263B] mb-4 group-hover:text-[#F4C542] transition-colors">Optimized tax efficiency</h3>
              <p className="text-gray-600 leading-relaxed">Minimize your tax burden with proactive planning and compliance.</p>
            </div>

            <div
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div className="w-16 h-16 bg-[#f5f1e6] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <LineChart size={32} className="text-[#F4C542]" />
              </div>
              <h3 className="text-2xl font-bold text-[#1B263B] mb-4 group-hover:text-[#F4C542] transition-colors">Smarter business decisions</h3>
              <p className="text-gray-600 leading-relaxed">Make strategic moves backed by expert analysis and forecasting.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why we're the right choice */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-[#2a2a2a] text-white p-4 sm:p-6 lg:p-8 pb-6 sm:pb-10 lg:pb-12 shadow-lg"
          >
            <div className="rounded-xl overflow-hidden">
              <motion.div
                ref={imgRef}
                className="relative w-full h-[220px] sm:h-[320px] lg:h-[420px]"
                style={{ scale: imgScale }}
              >
                <Image src="/card.webp" alt="Team collaboration" fill className="object-cover" />
              </motion.div>
            </div>

            <div className="mt-8">
              <motion.h3
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                viewport={{ once: true }}
                className="text-2xl sm:text-3xl font-semibold"
              >
                Why we’re the right choice
              </motion.h3>

              <div className="mt-10 md:mt-12 grid md:grid-cols-3 gap-6 md:gap-8 md:divide-x md:divide-white/10">
                <motion.div
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
                  viewport={{ once: true }}
                  className="pr-0 md:pr-8"
                >
                  <h4 className="text-lg font-semibold text-[#f5f1e6]">Integrated business approach</h4>
                  <p className="mt-2 text-white/70">More than company registration—strategic planning for compliance, taxation, and business stability.</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: 'easeOut', delay: 0.35 }}
                  viewport={{ once: true }}
                  className="px-0 md:px-8"
                >
                  <h4 className="text-lg font-semibold text-[#f5f1e6]">Regulation intelligence system</h4>
                  <p className="mt-2 text-white/70">Real-time compliance insights with forward analysis to identify risks before they impact your business.</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: 'easeOut', delay: 0.5 }}
                  viewport={{ once: true }}
                  className="pl-0 md:pl-8"
                >
                  <h4 className="text-lg font-semibold text-[#f5f1e6]">Transparency and accountability</h4>
                  <p className="mt-2 text-white/70">Dedicated consultant with clear documentation and monitored KPIs to maintain full process visibility.</p>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
                viewport={{ once: true }}
                className="mt-12 md:mt-14"
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-white text-[#1B263B] hover:bg-[#F4C542] hover:text-[#1B263B] px-5 py-2.5 rounded-lg font-medium shadow-sm transition-colors"
                >
                  Book your free consultation <ArrowRight size={18} />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-[#f5f1e6]">
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

          <div className="mt-10 flex justify-center">
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 bg-[#E8531A] hover:bg-[#1B263B] text-white px-7 py-[14px] rounded-xl font-normal shadow-md transition-colors duration-300 ease-out"
            >
              Explore more
              <ArrowRight size={18} className="transition-transform duration-300 ease-out group-hover:translate-x-[6px] group-hover:scale-110" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#f5f1e6]">
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
              <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-[#1B263B]">
                Excellence in Every Engagement
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed">
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
                <div className="text-gray-700 mb-4">{item.label}</div>
                <h3 className="text-xl font-bold mb-3 text-[#1B263B]">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      

      <section className="py-20 bg-[#f5f1e6]">
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

      <section className="py-20 bg-[#f5f1e6]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-[#1B263B]">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
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
                className="text-[#1B263B] px-8 py-4 rounded-lg font-semibold border-2 border-[#1B263B] hover:bg-[#1B263B] hover:text-white transition-all duration-300"
              >
                Call: +1 (555) 123-4567
              </a>
            </div>
            <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-[#1B263B]/20">
              <div>
                <CheckCircle2 className="w-12 h-12 text-[#F4C542] mx-auto mb-3" />
                <div className="font-semibold text-[#1B263B]">Free Consultation</div>
              </div>
              <div>
                <CheckCircle2 className="w-12 h-12 text-[#F4C542] mx-auto mb-3" />
                <div className="font-semibold text-[#1B263B]">No Long-term Contracts</div>
              </div>
              <div>
                <CheckCircle2 className="w-12 h-12 text-[#F4C542] mx-auto mb-3" />
                <div className="font-semibold text-[#1B263B]">Satisfaction Guaranteed</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
