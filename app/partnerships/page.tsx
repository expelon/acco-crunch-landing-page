"use client";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion, easeOut } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Handshake, Users, Target, TrendingUp, Award, Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

// Hero-specific smoother variants
const heroLeft = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: easeOut,
    },
  },
};

const heroRight = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.0,
      ease: easeOut,
      delay: 0.12,
    },
  },
};

export default function PartnershipsPage() {
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-10 sm:pt-14 pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left: Copy + Social proof + CTA */}
            <motion.div
              variants={heroLeft}
              initial="hidden"
              animate="show"
              className="space-y-8"
            >
              <div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#1B263B] tracking-normal leading-normal md:leading-snug lg:leading-tight">
                  Collaboration that
                  <br className="hidden sm:block" />
                  strengthens services <br />and client satisfaction
                </h1>
                <p className="mt-5 text-sm sm:text-base text-[#433b33] leading-relaxed max-w-md">
                  Gain trusted backend support, expand advisory solutions, and increase client value with our proven expertise, strict confidentiality, and structured service delivery excellence.
                </p>
              </div>

              <div className="space-y-6 mt-6">
                <div className="flex items-start gap-4">
                  <div>
                    <div className="flex items-center mb-3">
                      <div className="flex -space-x-2">
                        {['/p1.webp', '/p2.webp', '/p3.webp', '/p4.webp'].map((src, idx) => (
                          <div
                            key={src}
                            className="w-9 h-9 rounded-full overflow-hidden border border-[#f5f1e6] shadow-sm bg-[#e0d4bf]"
                            style={{ zIndex: 10 - idx }}
                          >
                            <Image
                              src={src}
                              alt={`Partner profile ${idx + 1}`}
                              width={36}
                              height={36}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                    <h4 className="text-base sm:text-lg font-light text-[#1B263B] tracking-[0.08em] mb-1">75+ Strategic Partners</h4>
                    <p className="text-sm text-[#6f645a]">Trusted Acco Crunch expanding services and client value.</p>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-lg bg-[#E8531A] px-6 py-3 text-sm sm:text-base font-medium text-white shadow-sm hover:bg-[#cf4510] transition-colors w-full sm:w-auto"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </motion.div>

            {/* Right: Image + Stats card */}
            <motion.div
              variants={heroRight}
              initial="hidden"
              animate="show"
              className="space-y-2"
            >
              <motion.div
                variants={fadeUp}
                className="relative h-[260px] sm:h-[320px] lg:h-[380px] rounded-lg overflow-hidden shadow-md bg-[#e0d4bf]"
              >
                <Image
                  src="/partnership1.webp"
                  alt="Partners collaborating"
                  fill
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 h-28 sm:h-32 bg-gradient-to-t from-[#2b2118]/90 via-[#2b2118]/70 to-transparent" />
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="rounded-lg bg-white shadow-sm border border-gray-100 grid grid-cols-3 divide-x divide-gray-300 divide-opacity-70 px-6 py-7 sm:py-8"
              >
                {[ 
                  { label: 'Strategic partnerships', value: '75+' },
                  { label: 'Clients served', value: '500+' },
                  { label: 'Years of excellence', value: '6+' },
                ].map((s) => (
                  <div key={s.label} className="px-4 flex items-center">
                    <div className="text-left">
                      <div className="text-base sm:text-lg font-light text-[#E8531A]">{s.value}</div>
                      <div className="mt-1 text-sm text-[#1B263B]/80 leading-snug max-w-[10rem]">{s.label}</div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Growth services section above footer */}
      <section className="mt-12 sm:mt-16 pb-12 sm:pb-16 bg-[#f5f1e6]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top heading + copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.4 }}
            className="grid lg:grid-cols-[1.2fr_1fr] gap-6 lg:gap-10 items-start mb-8 sm:mb-10"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-light text-[#1B263B] leading-snug sm:leading-relaxed lg:leading-[1.5]">
              Strategic partnerships empowering scalable, compliant growth
            </h2>
            <p className="text-xs sm:text-sm text-[#433b33] leading-relaxed max-w-xl lg:justify-self-end">
              Expert partnership solutions that transform collaboration into growth opportunities. From compliance support to scalable service expansion — everything your clients need for confidence, efficiency, and long-term success, under one trusted network.
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
                <div className="relative overflow-hidden rounded-t-lg lg:rounded-l-lg lg:rounded-tr-none flex-1 min-h-[250px] sm:min-h-[300px]">
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

                {/* Right: Clickable service points */}
                <div className="space-y-0 flex-1">
                  {[
                    {
                      id: 1,
                      icon: <Target className="text-[#E8531A]" size={18} />,
                      title: 'Proven Expertise',
                      description:
                        'Over 6+ years of specialized consulting experience spanning business incorporations, taxation, compliance, accounting, and strategic advisory. 600+ business establishments and compliance projects successfully executed. Led by experts with a multi-disciplinary background (CA, CS, Lawyer, Trademark Attorney, Tax Advisors).',
                    },
                    {
                      id: 2,
                      icon: <Users className="text-[#E8531A]" size={18} />,
                      title: 'Expand Without Operational Load',
                      description:
                        'Add compliance, registration, accounting, and advisory services to your portfolio without investment in internal resources. Support available under co-branded or white-label execution models. Client engagement can be performed under your brand identity or jointly with Acco Crunch.',
                    },
                    {
                      id: 3,
                      icon: <TrendingUp className="text-[#E8531A]" size={18} />,
                      title: 'Trust & Data Security',
                      description:
                        'Strict Non-Disclosure Agreement (NDA) protocols adhered to on every partnership engagement. Transparent communication, structured documentation, and process-driven execution for every project. Dedicated relationship and case management support ensuring high responsiveness and priority handling.',
                    },
                    {
                      id: 4,
                      icon: <Handshake className="text-[#E8531A]" size={18} />,
                      title: 'Revenue & Growth Synergy',
                      description:
                        'Customizable revenue-sharing or referral incentive structure aligned with project volume and partner category. Opportunity for joint initiatives, including workshops, startup support seminars, compliance awareness webinars, and strategic business growth programs.',
                    },
                  ].map((item, index) => (
                    <div
                      key={item.id}
                      className={`overflow-hidden bg-white transition-all duration-300 ${
                        index === 0 ? 'rounded-tr-lg' : index === 3 ? 'rounded-br-lg' : ''
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
                        className="w-full px-4 sm:px-5 py-11 sm:py-12 flex items-center justify-between gap-3 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <span className="inline-flex items-center justify-center rounded-md bg-[#ffe4d2] w-7 h-7 text-[#E8531A] flex-shrink-0">
                            {item.icon}
                          </span>
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
                        <div className="px-6 sm:px-8 pb-5 sm:pb-6">
                          <p className="text-sm text-[#645446] leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </motion.div>
                    </div>
                  ))}
                </div>
              </div>
              {/* End inner container */}
            </div>
            {/* End main container */}

            {/* Bottom strip */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 px-4 sm:px-6 lg:px-8 py-4 bg-[#f0e8dc] border-t border-[#f3e1cf]">
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <p className="text-xs sm:text-sm text-[#433b33]">
                  75+ trusted partnerships — yours could be next.
                </p>
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#E8531A] text-white px-5 sm:px-6 py-2.5 rounded-lg text-sm sm:text-base font-medium hover:bg-[#c74512] transition-colors w-full sm:w-auto"
              >
                Let's Get Started
                <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Methodology Section */}
      <section className="py-8 sm:py-12 bg-[#f5f1e6]">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <motion.h3
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mt-8 text-xl sm:text-2xl lg:text-3xl font-light text-[#1B263B] text-center"
            >
              Ideal Partnership Profiles
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              viewport={{ once: true }}
              className="mt-4 text-center text-xs sm:text-sm text-[#433b33] opacity-80 max-w-3xl mx-auto"
            >
              Each engagement model is tailored based on the partner's service structure, client segment, and strategic requirements.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="mt-10 space-y-1 sm:space-y-2"
            >
              {/* Row 1: 1 | blank | 2 | blank */}
              <div className="grid md:grid-cols-[1.1fr_0.6fr_1.5fr_0.6fr] gap-1 sm:gap-2">
                {/* Partner 1 - Business Consultants */}
                <motion.div 
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="rounded-md bg-transparent border border-[#e3ddcf] flex items-center px-2 py-2 sm:px-2 sm:py-2 min-h-[50px] md:h-[60px]"
                >
                  <div className="text-xs sm:text-sm text-[#1B263B]">Business Consultants, Startup Mentors & Advisory Firms</div>
                </motion.div>

                {/* Placeholder */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.15 }}
                  viewport={{ once: true }}
                  className="hidden md:block rounded-xl bg-[#e9e1d1] md:h-[60px]" 
                />

                {/* Partner 2 - CA/CS Firms */}
                <motion.div 
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="rounded-md bg-transparent border border-[#e3ddcf] flex items-center px-2 py-2 sm:px-2 sm:py-2 min-h-[50px] md:h-[60px]"
                >
                  <div className="text-xs sm:text-sm text-[#1B263B]">CA / CS Firms & Accounting Professionals</div>
                </motion.div>

                {/* Placeholder */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.25 }}
                  viewport={{ once: true }}
                  className="hidden md:block rounded-xl bg-[#e9e1d1] md:h-[60px]" 
                />
              </div>

              {/* Row 2: 3 | blank | 4 */}
              <div className="grid md:grid-cols-[1.6fr_1fr_1.6fr] gap-1 sm:gap-2">
                {/* Partner 3 - Legal Practices */}
                <motion.div 
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="rounded-md bg-transparent border border-[#e3ddcf] flex items-center px-2 py-2 sm:px-2 sm:py-2 min-h-[50px] md:h-[60px]"
                >
                  <div className="text-xs sm:text-sm text-[#1B263B]">Legal, Financial, and Business Advisory Practices</div>
                </motion.div>

                {/* Placeholder */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.35 }}
                  viewport={{ once: true }}
                  className="hidden md:block rounded-xl bg-[#e9e1d1] md:h-[60px]" 
                />

                {/* Partner 4 - Marketing Agencies */}
                <motion.div 
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="rounded-md bg-transparent border border-[#e3ddcf] flex items-center px-2 py-2 sm:px-2 sm:py-2 min-h-[50px] md:h-[60px]"
                >
                  <div className="text-xs sm:text-sm text-[#1B263B]">Marketing & Strategic Growth Agencies</div>
                </motion.div>
              </div>

              {/* Row 3: blank | 5 | blank | 6 */}
              <div className="grid md:grid-cols-[0.7fr_1fr_0.7fr_0.7fr] gap-1 sm:gap-2">
                {/* Placeholder */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.45 }}
                  viewport={{ once: true }}
                  className="hidden md:block rounded-xl bg-[#e9e1d1] md:h-[60px]" 
                />

                {/* Partner 5 - Co-working Hubs */}
                <motion.div 
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="rounded-md bg-transparent border border-[#e3ddcf] flex items-center px-2 py-2 sm:px-2 sm:py-2 min-h-[50px] md:h-[60px]"
                >
                  <div className="text-xs sm:text-sm text-[#1B263B]">Co-working Hubs & Startup Incubators</div>
                </motion.div>

                {/* Placeholder */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.55 }}
                  viewport={{ once: true }}
                  className="hidden md:block rounded-xl bg-[#e9e1d1] md:h-[60px]" 
                />

                {/* Partner 6 - Learning Platforms */}
                <motion.div 
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="rounded-md bg-transparent border border-[#e3ddcf] flex items-center px-2 py-2 sm:px-2 sm:py-2 min-h-[50px] md:h-[60px]"
                >
                  <div className="text-xs sm:text-sm text-[#1B263B]">Entrepreneurship Learning Platforms</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partnership Metrics Section */}
      <section className="py-20 bg-[#f5f1e6]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl font-light text-[#1B263B]"
            >
              Compliance & Confidentiality Commitment
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="mt-3 text-sm text-gray-600"
            >
              We uphold the highest professional standards and adhere to the following protocols
            </motion.p>
          </div>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-0 items-start md:divide-x md:divide-black/10">
            {/* Item 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center md:pr-8"
            >
              <div className="mt-2 inline-block rounded-xl overflow-hidden bg-white shadow-sm w-[180px] h-[120px]">
                <Image
                  src="/partnership1.webp"
                  alt="Strategic partnerships established"
                  width={180}
                  height={120}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="mt-4 text-gray-700">Ethical advisory and conflict-free engagement practices</div>
            </motion.div>

            {/* Item 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center md:px-8"
            >
              <div className="mt-2 inline-block rounded-xl overflow-hidden bg-white shadow-sm w-[180px] h-[120px]">
                <Image
                  src="/partnership2.jpg"
                  alt="Clients served through partnerships"
                  width={180}
                  height={120}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="mt-4 text-gray-700">Full documentation trail for partner projects</div>
            </motion.div>

            {/* Item 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center md:px-8"
            >
              <div className="mt-2 inline-block rounded-xl overflow-hidden bg-white shadow-sm w-[180px] h-[120px]">
                <Image
                  src="/partnership3.webp"
                  alt="Years of partnership excellence"
                  width={180}
                  height={120}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="mt-4 text-gray-700">NDA-based information handling and client security assurance</div>
            </motion.div>

            {/* Item 4 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center md:pl-8"
            >
              <div className="mt-2 inline-block rounded-xl overflow-hidden bg-white shadow-sm w-[180px] h-[120px]">
                <Image
                  src="/card.webp"
                  alt="Compliance protocols maintained"
                  width={180}
                  height={120}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="mt-4 text-gray-700">Multi-level review and compliance validation before project closure</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Custom solution slim CTA above Footer */}
      <section className="py-10 mt-2 sm:mt-8 bg-[#f5f1e6]">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 bg-[#2a2622] rounded-lg px-3 sm:px-3 lg:px-4 py-3 sm:py-3 shadow-md">
              <div className="hidden sm:block">
                <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded overflow-hidden bg-[#3a342f]">
                  <Image
                    src="/partnership1.webp"
                    alt="Partnership solution"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="text-center sm:text-left flex-1 text-white text-xs sm:text-sm leading-relaxed opacity-80">
                Stronger partnerships create stronger businesses — let's achieve more success together now.
              </div>

              <div className="flex-shrink-0 w-full sm:w-auto">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-md bg-[#E8531A] px-4 sm:px-5 py-2 text-xs sm:text-sm font-medium text-white shadow-sm hover:bg-[#cf4510] transition-colors whitespace-nowrap w-full sm:w-auto"
                >
                  Let's Get Started
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="mt-8">
        <Footer />
      </div>
    </div>
  );
}
