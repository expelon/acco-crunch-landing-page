'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion, easeOut } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Target, Eye, Users, BookOpen, TrendingUp, ArrowUpRight } from 'lucide-react';
import { useState } from 'react';
import { Poppins } from 'next/font/google';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

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

const numberPoppins = Poppins({ subsets: ['latin'], weight: ['300','400','500','600','700'] });

export default function CareerPage() {
  const [imgLoaded, setImgLoaded] = useState(false);
  return (
    <div className="min-h-screen bg-[#f5f1e6]">
      <Navbar />

      {/* Hero (exact design as About page) */}
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
                  Work Where Growth
                  <br className="hidden sm:block" />
                  Meets Clarity <br />& Purpose
                </h1>
                <p className="mt-5 text-sm sm:text-base text-[#433b33] leading-relaxed max-w-md">
                  At Acco Crunch, we believe that our success is driven by the talent, dedication, and passion of our team members.
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
                              alt={`Team profile ${idx + 1}`}
                              width={36}
                              height={36}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                    <h4 className="text-base sm:text-lg font-light text-[#1B263B] tracking-[0.08em] mb-1">1200+ Business Owners</h4>
                    <p className="text-sm text-[#6f645a]">Trusted Acco Crunch simplifying compliance, accelerating growth.</p>
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
                className="relative h-[260px] sm:h[320px] lg:h-[380px] rounded-lg overflow-hidden shadow-md bg-[#e0d4bf]"
              >
                <Image
                  src="/career1.webp"
                  alt="Team collaboration"
                  fill
                  priority
                  className="object-cover"
                  onLoad={() => setImgLoaded(true)}
                />
                <div className="absolute inset-x-0 bottom-0 h-28 sm:h-32 bg-gradient-to-t from-[#2b2118]/90 via-[#2b2118]/70 to-transparent" />
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="rounded-lg bg-white shadow-sm border border-gray-100 grid grid-cols-3 divide-x divide-gray-300 divide-opacity-70 px-6 py-7 sm:py-8"
              >
                {[
                  { label: 'Businesses incorporated', value: '1,200+' },
                  { label: 'Compliance filings processed', value: '5,000+' },
                  { label: 'Years of experience', value: '6+' },
                ].map((s) => (
                  <div key={s.label} className="px-4 flex items-center">
                    <div className="text-left">
                      <div className={`text-base sm:text-lg font-light text-[#E8531A] ${numberPoppins.className}`}>{s.value}</div>
                      <div className="mt-1 text-sm text-[#1B263B]/80 leading-snug max-w-[10rem]">{s.label}</div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bridge section */}
      <section className="bg-[#f5f1e6] py-16 sm:py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-[#1B263B] tracking-normal leading-normal md:leading-snug lg:leading-tight max-w-4xl mx-auto">
            Where purpose-driven talent and limitless career growth come together
          </h2>
          <p className="mt-6 text-sm sm:text-base text-[#433b33] leading-relaxed max-w-2xl mx-auto">
            From emerging professionals to future leaders, we work hand-in-hand with individuals who are passionate about transforming businesses through financial clarity, compliance excellence, and strategic innovation. At Acco Crunch, your career isn't just a job — <span className="font-semibold">it's a journey toward meaningful impact.</span>
          </p>
        </div>
      </section>

      {/* Culture & Growth section */}
      <section className="py-16 sm:py-20 px-4 sm:px-8 lg:px-8">
        <div className="mx-auto">
          <div className="bg-[#2a2a2a] rounded-lg p-4 sm:p-6 text-white">
            {/* Video/Image */}
            <div className="mb-12 rounded-lg overflow-hidden">
              <motion.div
                className="relative aspect-video bg-[#1a1a1a] rounded-lg overflow-hidden"
                whileInView={{ scale: 1.05 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <Image
                  src="/about2.webp"
                  alt="Professional looking at tablet in front of modern building"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
            <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
              {/* Collaborative Culture */}
              <div>
                <h3 className="text-white text-lg sm:text-xl font-light tracking-[0.05em] mb-4 flex items-center">
                  <Users className="w-7 h-7 text-[#E8531A] mr-2" />
                  Collaborative Culture
                </h3>
                <p className="text-[#f5f1e6] opacity-60 leading-relaxed text-xs sm:text-sm">
                  We believe in the power of collaboration. Our workplace fosters an environment where diverse minds come together to achieve shared goals. Your ideas matter, and your contributions make a real impact.
                </p>
              </div>

              {/* Continuous Learning */}
              <div>
                <h3 className="text-white text-lg sm:text-xl font-light tracking-[0.05em] mb-4 flex items-center">
                  <BookOpen className="w-7 h-7 text-[#E8531A] mr-2" />
                  Continuous Learning
                </h3>
                <p className="text-[#f5f1e6] opacity-60 leading-relaxed text-xs sm:text-sm">
                  Grow personally and professionally with us. We invest in the development of our team members, providing opportunities for learning, training, and skill enhancement.
                </p>
              </div>

              {/* Career Advancement */}
              <div>
                <h3 className="text-white text-lg sm:text-xl font-light tracking-[0.05em] mb-4 flex items-center">
                  <TrendingUp className="w-7 h-7 text-[#E8531A] mr-2" />
                  Career Advancement
                </h3>
                <p className="text-[#f5f1e6] opacity-60 leading-relaxed text-xs sm:text-sm mb-4 md:mb-0">
                  Your career path matters. At Acco Crunch, we are committed to helping you reach new heights. Take advantage of our career advancement programs and chart your own course to success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open roles section */}
      <section className="bg-[#f5f1e6] py-14 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-[#1B263B] tracking-tight">
              Join our big family
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Talent Acquisition Manager */}
            <Link
              href="https://www.linkedin.com/company/77721026/admin/posted-jobs/open/"
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-xl bg-white shadow-sm border border-gray-200 px-6 py-6 sm:px-8 sm:py-7 transition-shadow hover:shadow-md"
            >
              <div className="flex items-start justify-between mb-6 text-xs sm:text-sm text-[#1B263B]/70">
                <span>10:00 am – 06:00 pm</span>
                <Link
                  href="https://www.linkedin.com/company/77721026/admin/posted-jobs/open/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/icon"
                >
                  <ArrowUpRight className="w-8 h-8 text-black group-hover:rotate-45 rotate-0 transition-transform duration-300" />
                </Link>
              </div>
              <h3 className="text-lg sm:text-xl text-[#111827] font-medium mb-3">
                Talent Acquisition Manager
              </h3>
              <p className="text-xs sm:text-sm text-[#4b5563] leading-relaxed max-w-md">
                We are expanding our recruitment operations and seeking a passionate Talent Acquisition Manager to drive hiring excellence. Join us in shaping a high-performing team and enhancing our employer brand.
              </p>
            </Link>

            {/* Auditing Intern */}
            <Link
              href="https://www.linkedin.com/company/77721026/admin/posted-jobs/open/"
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-xl bg-white shadow-sm border border-gray-200 px-6 py-6 sm:px-8 sm:py-7 transition-shadow hover:shadow-md"
            >
              <div className="flex items-start justify-between mb-6 text-xs sm:text-sm text-[#1B263B]/70">
                <span>10:00 am – 05:00 pm</span>
                <Link
                  href="https://www.linkedin.com/company/77721026/admin/posted-jobs/open/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/icon"
                >
                  <ArrowUpRight className="w-8 h-8 text-black group-hover:rotate-45 rotate-0 transition-transform duration-300" />
                </Link>
              </div>
              <h3 className="text-lg sm:text-xl text-[#111827] font-medium mb-3">
                Auditing Intern
              </h3>
              <p className="text-xs sm:text-sm text-[#4b5563] leading-relaxed max-w-md">
                An exciting opportunity for motivated individuals to gain hands-on experience in compliance and financial review. Support auditing activities and learn directly from industry experts.
              </p>
            </Link>

            {/* Project Manager */}
            <Link
              href="https://www.linkedin.com/company/77721026/admin/posted-jobs/open/"
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-xl bg-white shadow-sm border border-gray-200 px-6 py-6 sm:px-8 sm:py-7 transition-shadow hover:shadow-md"
            >
              <div className="flex items-start justify-between mb-6 text-xs sm:text-sm text-[#1B263B]/70">
                <span>10:00 am – 06:00 pm</span>
                <Link
                  href="https://www.linkedin.com/company/77721026/admin/posted-jobs/open/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/icon"
                >
                  <ArrowUpRight className="w-8 h-8 text-black group-hover:rotate-45 rotate-0 transition-transform duration-300" />
                </Link>
              </div>
              <h3 className="text-lg sm:text-xl text-[#111827] font-medium mb-3">
                Project Manager
              </h3>
              <p className="text-xs sm:text-sm text-[#4b5563] leading-relaxed max-w-md">
                We are looking for a Project Manager to coordinate business services from initiation to delivery. Ensure smooth workflows, timely completion, and exceptional client satisfaction.
              </p>
            </Link>

            {/* Business Development Executive */}
            <Link
              href="https://www.linkedin.com/company/77721026/admin/posted-jobs/open/"
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-xl bg-white shadow-sm border border-gray-200 px-6 py-6 sm:px-8 sm:py-7 transition-shadow hover:shadow-md"
            >
              <div className="flex items-start justify-between mb-6 text-xs sm:text-sm text-[#1B263B]/70">
                <span>10:00 am – 06:00 pm</span>
                <Link
                  href="https://www.linkedin.com/company/77721026/admin/posted-jobs/open/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/icon"
                >
                  <ArrowUpRight className="w-8 h-8 text-black group-hover:rotate-45 rotate-0 transition-transform duration-300" />
                </Link>
              </div>
              <h3 className="text-lg sm:text-xl text-[#111827] font-medium mb-3">
                Business Development Executive
              </h3>
              <p className="text-xs sm:text-sm text-[#4b5563] leading-relaxed max-w-md">
                A dynamic role for growth-driven professionals to identify new opportunities, engage clients, and strengthen our business footprint in the compliance and advisory industry.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 bg-[#f5f1e6]">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex flex-col sm:flex-row sm:items-center items-stretch gap-3 sm:gap-6 bg-[#2a2622] rounded-lg px-4 sm:px-4 lg:px-6 py-4 sm:py-4 shadow-md">
              <div className="hidden sm:block">
                <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded overflow-hidden bg-[#3a342f]">
                  <Image
                    src="/cta3.webp"
                    alt="Career opportunities"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="flex-1 text-white text-xs sm:text-sm leading-relaxed opacity-80">
                We always strive to make a positive difference in everything. If that's important to you, Acco Crunch would be a good fit.
              </div>

              <div className="flex-shrink-0 w-full sm:w-auto">
                <Link
                  href="https://www.linkedin.com/company/77721026/admin/posted-jobs/open/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md bg-[#E8531A] px-4 sm:px-5 py-2 text-xs sm:text-sm font-medium text-white shadow-sm hover:bg-[#cf4510] transition-colors whitespace-nowrap w-full sm:w-auto"
                >
                  Current openings
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer heading="Let Our Team Be Your New Team" email="career.accocrunch@gmail.com" />
    </div>
  );
}
