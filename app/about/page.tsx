'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Metrics from '@/components/Metrics';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight, Users2, BadgeCheck, LineChart, Globe2, Building2, Sparkles, Eye, Target, ShieldCheck, Handshake, RefreshCw, Lightbulb } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

export default function AboutPage() {
  const [storyImgLoaded, setStoryImgLoaded] = useState(false);
  return (
    <div className="min-h-screen bg-[#f5f1e6]">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 sm:pt-32 pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-1.5 text-sm text-[#1B263B] shadow-sm">
              <Sparkles className="h-4 w-4 text-[#F4C542]" />
              About Acco Crunch
            </div>
            <h1 className="mt-5 text-4xl sm:text-5xl font-semibold text-[#1B263B] tracking-tight">
              Acco Crunch is a proactive business consultancy firm
            </h1>
            <p className="mt-5 text-lg sm:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
              helping entrepreneurs and organizations build strong foundations through strategic taxation advisory,
              company incorporation, legal compliance, accounting accuracy, and business structuring expertise. We enable
              business growth by leveraging real-world financial data, regulatory insights, and efficient corporate
              practices—ensuring businesses operate not just legally, but intelligently.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats band */}
      <section className="pb-14">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
          >
            {[
              { label: 'Years Experience', value: '6+' },
              { label: 'Clients Served', value: '1000+' },
              { label: 'Success Rate', value: '98%' },
              { label: 'Industries', value: '15+' },
            ].map((s, i) => (
              <motion.div
                key={s.label}
                variants={fadeUp}
                className="rounded-xl bg-white shadow-sm p-6 text-center"
              >
                <div className="text-2xl font-semibold text-[#1B263B]">{s.value}</div>
                <div className="mt-1 text-sm text-[#1B263B]/70">{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Story section */}
      <section className="py-12 bg-[#f5f1e6]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <h2 className="text-3xl sm:text-4xl font-semibold text-[#1B263B]">Our story</h2>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Through our experience working with business owners, we observed:
              </p>
              <ul className="mt-3 space-y-2 list-disc list-inside text-gray-700">
                <li>70% of early-stage businesses struggle due to compliance failures.</li>
                <li>Many entrepreneurs launch businesses without accurate knowledge of legal & operational frameworks.</li>
                <li>A significant number rely on outdated accountants or fragmented consultants leading to avoidable penalties, cashflow issues, and delayed growth.</li>
              </ul>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Recognizing this gap, Acco Crunch was founded in 2020 by Jaison Mullukattil, with a mission to simplify
                business setup & compliance using data-backed strategies and transparent advisory practices. Today, we
                stand as growth partners, not just service providers.
              </p>
              <div className="mt-6">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-lg bg-[#1B263B] text-white px-5 py-2.5 shadow-sm hover:bg-black transition-colors"
                >
                  Work with us <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md"
            >
              {!storyImgLoaded && (
                <div className="absolute inset-0 bg-[#f5f1e6] animate-pulse" />
              )}
              <Image
                src="/about.webp"
                alt="About Acco Crunch"
                fill
                priority
                className="object-cover"
                onLoadingComplete={() => setStoryImgLoaded(true)}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-[#f5f1e6]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center">
            <h3 className="text-2xl sm:text-3xl font-semibold text-[#1B263B]">What we stand for</h3>
            <p className="mt-3 text-gray-700 max-w-2xl mx-auto">
              Principles that guide every engagement and ensure consistent, measurable outcomes.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              { icon: <BadgeCheck className="w-6 h-6 text-[#F4C542]" />, title: 'Precision', desc: 'We believe every number matters. Accuracy drives decisions.' },
              { icon: <ShieldCheck className="w-6 h-6 text-[#F4C542]" />, title: 'Ethics', desc: 'We operate with honesty, legal clarity, and confidentiality.' },
              { icon: <Handshake className="w-6 h-6 text-[#F4C542]" />, title: 'Partnership', desc: 'We treat every business like our own. Your growth = Our growth.' },
              { icon: <LineChart className="w-6 h-6 text-[#F4C542]" />, title: 'Insight', desc: 'We use data and market trends to predict and prevent risks.' },
              { icon: <RefreshCw className="w-6 h-6 text-[#F4C542]" />, title: 'Evolution', desc: 'We continuously improve to match regulatory and entrepreneurial change.' },
            ].map((v) => (
              <motion.div key={v.title} variants={fadeUp} className="rounded-2xl bg-white p-6 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-[#f5f1e6] flex items-center justify-center">{v.icon}</div>
                <h4 className="mt-4 text-xl font-semibold text-[#1B263B]">{v.title}</h4>
                <p className="mt-2 text-gray-700 leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-[#f5f1e6]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-2xl sm:text-3xl font-semibold text-[#1B263B]">Vision & Mission</h3>
            <p className="mt-3 text-gray-700 max-w-2xl mx-auto">
              The principles that guide our long-term direction and daily execution.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-10 grid md:grid-cols-2 gap-6"
          >
            {/* Mission Card */}
            <motion.div variants={fadeUp} className="group rounded-2xl bg-white p-8 shadow-md border border-gray-200 text-[#1B263B]">
              <div className="flex items-center gap-3">
                <Target className="w-5 h-5 text-[#E8531A]" />
                <h4 className="text-2xl font-semibold">Our mission</h4>
              </div>
              <p className="mt-4 text-gray-700 leading-relaxed">
                “To become one of India’s most trusted business advisory brands by building a long-standing network of
                thriving businesses, united by compliance strength, financial discipline, and decision-intelligence.”
              </p>
            </motion.div>

            {/* Vision Card */}
            <motion.div variants={fadeUp} className="group rounded-2xl bg-white p-8 shadow-md border border-gray-200 text-[#1B263B]">
              <div className="flex items-center gap-3">
                <Eye className="w-5 h-5 text-[#E8531A]" />
                <h4 className="text-2xl font-semibold">Our vision</h4>
              </div>
              <p className="mt-4 text-gray-700 leading-relaxed">
                “To give entrepreneurs a seamless, secure, and future-ready business experience by aligning legal,
                financial, and operational frameworks—ensuring stability, scalability, and strategic growth.”
              </p>
              <p className="mt-3 text-gray-700 leading-relaxed">
                To become a globally trusted consulting partner delivering world-class financial, legal & compliance
                solutions that empower businesses to thrive with clarity, confidence & strategic foresight.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-[#f5f1e6]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h3
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-semibold text-[#1B263B] text-center"
          >
            Our journey
          </motion.h3>

          <div className="mt-10 relative max-w-4xl mx-auto">
            <div className="absolute left-1/2 -translate-x-1/2 h-full w-px bg-gray-200" />
            {[
              { year: '2019', text: 'Started with a vision to unify accounting and strategic advisory.' },
              { year: '2021', text: 'Expanded services across incorporation and legal compliance.' },
              { year: '2023', text: 'Crossed 1000+ clients with 98% success rate.' },
            ].map((t, i) => (
              <motion.div
                key={t.year}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className={`relative grid md:grid-cols-2 gap-6 py-6 ${i % 2 === 0 ? 'md:text-right' : ''}`}
              >
                <div className={`md:col-start-1 ${i % 2 === 0 ? 'md:pr-10' : 'md:col-start-2 md:pl-10'}`}>
                  <div className="inline-flex items-center gap-2 rounded-full bg-[#f5f1e6] px-3 py-1 text-sm text-[#1B263B]">
                    <Building2 className="w-4 h-4 text-[#F4C542]" /> {t.year}
                  </div>
                  <p className="mt-3 text-gray-700 leading-relaxed">{t.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-[#f8f4e5]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center">
            <h3 className="text-2xl sm:text-3xl font-semibold text-[#1B263B]">Leadership</h3>
            <p className="mt-3 text-gray-700 max-w-2xl mx-auto">Experienced practitioners guiding every engagement.</p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[1, 2, 3].map((i) => (
              <motion.div key={i} variants={fadeUp} className="group bg-white rounded-2xl shadow-sm p-6">
                <div className="aspect-square rounded-xl bg-[#f5f1e6]" />
                <div className="mt-4">
                  <div className="text-lg font-semibold text-[#1B263B]">Team Member {i}</div>
                  <div className="text-sm text-gray-600">Role Title</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Metrics />
      <Footer />
    </div>
  );
}
