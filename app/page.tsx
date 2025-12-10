'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import SectorShowcase from '@/components/SectorShowcase';
import Metrics from '@/components/Metrics';
import HomeConsultCta from '@/components/HomeConsultCta';
import CaseStudies from '@/components/CaseStudies';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, BarChart3, ReceiptCent, LineChart } from 'lucide-react';
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
              className="text-3xl sm:text-4xl font-light text-[#1B263B] tracking-tight leading-snug"
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
              <div className="mt-2 inline-flex items-center justify-center gap-3">
                <div className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden ring-2 ring-white/60">
                  <Image src="/profile%20photo.webp" alt="Jaison Mullukattil" fill className="object-cover scale-[1.6]" />
                </div>
                <p className="font-medium">Jaison Mullukattil</p>
              </div>
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

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
              className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-100"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#f5f1e6] rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                <BarChart3 size={28} className="sm:size-[32px] text-[#F4C542]" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#1B263B] mb-3 sm:mb-4">Precision-Led Advisory Excellence</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">Delivering expert insights powered by up-to-date regulatory intelligence for assured decision-making.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
              className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-100"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#f5f1e6] rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                <ReceiptCent size={28} className="sm:size-[32px] text-[#F4C542]" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#1B263B] mb-3 sm:mb-4">Strategic Multi-Specialist Expertise</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">Comprehensive guidance across tax, legal, accounting, and business strategy to drive stronger business outcomes.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true, amount: 0.3 }}
              className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-100 sm:col-span-2 lg:col-span-1"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#f5f1e6] rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                <LineChart size={28} className="sm:size-[32px] text-[#F4C542]" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#1B263B] mb-3 sm:mb-4">Efficient Client Governance</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">Structured portfolio management with transparency, strong data protection, and immediate compliance adoption.</p>
            </motion.div>
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
                className="text-2xl sm:text-3xl font-light"
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
                  <p className="mt-2 text-white/70">More than company registration strategic planning for compliance, taxation, and business stability.</p>
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

      
      {/* Sector showcase placed under the Explore more button */}
      <section className="py-8 bg-[#f5f1e6]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectorShowcase />
        </div>
      </section>

      <Metrics />

      <HomeConsultCta />

      <CaseStudies />

      <Footer />
    </div>
  );
}
