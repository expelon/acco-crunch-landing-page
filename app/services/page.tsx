'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import SectionTitle from '@/components/SectionTitle';
import ServiceCard from '@/components/ServiceCard';
import PricingCard from '@/components/PricingCard';
import Metrics from '@/components/Metrics';
import { services, pricing } from '@/lib/data';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, Users, Target, TrendingUp, Shield } from 'lucide-react';
import Link from 'next/link';

// Testimonials data
const testimonials = [
  {
    name: 'Titus Gomez',
    company: 'Company Registration',
    review: 'They guided me through every step. I now run a fully compliant private limited company with confidence.'
  },
  {
    name: 'Sivakumar',
    company: 'Firm Registration',
    review: 'Accuracy and professionalism at its best. I trusted them for partnership firm registration, and it was seamless.'
  },
  {
    name: 'Unni Babu',
    company: 'GST Registration',
    review: 'I was clueless about GST compliance. Their clarity and support made it easy for my business.'
  },
  {
    name: 'Arun Bose',
    company: 'Project Report for Loan',
    review: 'Their financial projections and structured report helped me secure bank approval for my loan.'
  },
  {
    name: 'Riyas',
    company: 'GST Filing',
    review: 'Fast, error-free GST filing every month. Highly reliable partner for compliance.'
  },
  {
    name: 'Manu Krishna',
    company: 'Company Registration',
    review:
      'They simplified the entire incorporation, clarified every compliance point, and delivered everything on schedule. We now operate with complete confidence in our business foundation.'
  },
  {
    name: 'Anjali Mohan',
    company: 'LLP Registration',
    review:
      'Clear guidance, timely updates, and a very professional team. They handled all LLP compliance aspects so I could focus fully on business setup.'
  },
  {
    name: 'Veena Vijayan',
    company: 'GST & Trademark Services',
    review:
      'Our GST and trademark registrations were executed quickly and correctly. Their attention to detail ensured zero errors and a stress-free experience throughout.'
  },
  {
    name: 'Anju P George',
    company: 'Legal Documentation',
    review:
      'They created agreements tailored perfectly to our requirements, not generic templates. Their legal clarity helped us feel protected in every business transaction.'
  },
  {
    name: 'Mathew Biju',
    company: 'Business Advisory',
    review:
      'Their business restructuring advice improved our tax position and operational flexibility. Smart professionals who truly understand business-centric compliance.'
  },
  {
    name: 'Alex K',
    company: 'Section 8 Company Registration',
    review:
      'We received end-to-end support for our Section 8 registration. Their knowledge and documentation quality made the entire journey smooth and compliant.'
  },
  {
    name: 'Venu Gopalakrishnan',
    company: 'GST Filing',
    review:
      'Our monthly GST filings are always accurate and timely. Their proactive support keeps us fully compliant without last-minute stress.'
  },
  {
    name: 'Vishnu VP',
    company: 'Accounting & MIS Reporting',
    review:
      'The MIS reporting gives us complete financial clarity. Their accounting process is organized, transparent, and reliable for quick decision-making.'
  },
  {
    name: 'Ancy C',
    company: 'Personal Tax Filing',
    review:
      'They managed my tax filings professionally and ensured proper documentation. I feel secure having a responsible compliance team supporting me.'
  },
  {
    name: 'Anilkumar CS',
    company: 'ROC Compliance',
    review:
      'With their compliance management, our documents are always updated correctly. We no longer worry about missing statutory deadlines or filings.'
  },
  {
    name: 'Johny Peter',
    company: 'Virtual CFO Services',
    review:
      'Our financial planning and cost control improved significantly. Their virtual CFO guidance adds real value to business operations and growth decisions.'
  },
  {
    name: 'Sabin Thomas',
    company: 'Corporate Compliance Management',
    review:
      'They maintain our entire compliance system with accuracy and consistency. Their process-driven approach builds strong trust and governance.'
  },
  {
    name: 'Rizwan M',
    company: 'Tax Planning & Advisory',
    review:
      'Their tax planning approach is practical, compliant, and financially beneficial. We achieved better savings while maintaining strong statutory discipline.'
  },
  {
    name: 'Mohammad Ijas',
    company: 'Investor Valuation Support',
    review:
      'The valuation and projections they prepared gave investors clear confidence. Their strategic inputs directly supported our funding discussions.'
  },
  {
    name: 'Jishnu RS',
    company: 'Internal Audit',
    review:
      'They identified operational gaps and suggested effective improvements. The review helped us strengthen internal accountability and efficiency.'
  },
  {
    name: 'Rahul Ramachandran',
    company: 'Financial Modelling',
    review:
      'Their financial model was detailed, investor-friendly, and well-structured. It improved our presentation quality and credibility during fundraising.'
  },
  {
    name: 'Venu Thilakan',
    company: 'Growth Strategy',
    review:
      'Their strategic guidance helped us unlock a profitable revenue segment. We now move forward with clearer plans and stronger confidence.'
  }
];

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
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="pt-16 sm:pt-20 pb-10 bg-[#f5f1e6]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="w-12 h-12 rounded-md bg-white mx-auto flex items-center justify-center mb-4 shadow-sm">
              <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#E8531A]" fill="currentColor" aria-hidden="true"><path d="M3 3v18h18V3H3zm16 16H5V5h14v14zM7 17h2v-7H7v7zm4 0h2V7h-2v10zm4 0h2v-4h-2v4z"/></svg>
            </div>
            <h1 className="text-3xl sm:text-4xl font-light text-[#1B263B]">
              Business Registration & Legal Structuring
            </h1>
            <p className="mt-3 text-sm text-[#433b33] leading-relaxed max-w-md mx-auto">
              A strong business foundation begins with the right structure. Proper registration and compliance ensure your venture is built to grow confidently and operate without obstacles from day one.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8"
          >
            <div className="mx-auto max-w-5xl rounded-xl overflow-hidden shadow-md relative bg-[#e0d4bf]" style={{ aspectRatio: '16/9' }}>
              <Image
                src="/service1.webp"
                alt="Financial planning"
                fill
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 h-28 sm:h-36 bg-gradient-to-t from-black/85 via-black/60 to-transparent" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bridge section above Core Services */}
      <section className="py-16 sm:py-20 bg-[#f5f1e6]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-xl sm:text-2xl lg:text-3xl font-light text-[#1B263B] text-left"
            >
              Where legal structure builds clarity, compliance, and future scale
            </motion.h2>

            <div className="mt-10 grid lg:grid-cols-[1.1fr_1fr_1.1fr] gap-8 items-start">
            {/* Left copy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              viewport={{ once: true }}
            >
              <div>
              <ul className="divide-y divide-[#e5dfd2] rounded-lg overflow-hidden bg-transparent">
                {[
                  {
                    title: 'Company Incorporation & Entity Structuring',
                    subtitle: '(Private Limited, LLP, OPC, Section 8, Partnership Firms)'
                  },
                  {
                    title: 'GST, MSME & Startup India Registrations',
                    subtitle: ''
                  },
                  {
                    title: 'Corporate Legal Documentation',
                    subtitle: '(MOA/AOA, Founders & Shareholder Agreements, Vendor & Employment Contracts)'
                  }
                ].map((item) => (
                  <li key={item.title} className="py-4">
                    <div className="flex items-center gap-3 text-[#433b33]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E8531A]" />
                      <div>
                        <span className="text-sm font-medium">{item.title}</span>
                        {item.subtitle && (
                          <span className="text-xs text-[#433b33]/80 block mt-1">{item.subtitle}</span>
                        )}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              </div>
            </motion.div>

            {/* Middle image + CTA */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="rounded-xl overflow-hidden shadow-md bg-[#e0d4bf] relative" style={{ aspectRatio: '16/9' }}>
                <Image src="/service2.webp" alt="Consultation" fill className="object-cover" />
              </div>
              <Link
                href="/contact"
                className="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-[#E8531A] text-white text-sm font-medium py-3 shadow-sm hover:bg-[#cf4510] transition-colors"
              >
                Book a free consultation
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </motion.div>

            {/* Right gain list */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              viewport={{ once: true }}
            >
              <div>
              <ul className="divide-y divide-[#e5dfd2] rounded-lg overflow-hidden bg-transparent">
                {[
                  {
                    title: 'Trademark & IP Protection',
                    subtitle: '(Search, Filing, Objection Management)'
                  },
                  {
                    title: 'ISO Registration & Certification',
                    subtitle: ''
                  },
                  {
                    title: 'Post-Incorporation Compliance & Advisory',
                    subtitle: ''
                  }
                ].map((item) => (
                  <li key={item.title} className="py-4">
                    <div className="flex items-center gap-3 text-[#433b33]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E8531A]" />
                      <div>
                        <span className="text-sm font-medium">{item.title}</span>
                        {item.subtitle && (
                          <span className="text-xs text-[#433b33]/80 block mt-1">{item.subtitle}</span>
                        )}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              </div>
            </motion.div>
          </div>
          </div>
        </div>
      </section>

      {/* Accounting, Taxation & Statutory Compliance Section */}
      <section className="py-8 sm:py-12 bg-[#f5f1e6]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-light text-[#1B263B]">
              Accounting, Taxation & Statutory Compliance
            </h2>
          </motion.div>

          {/* Inner challenges panel */}
          <div className="mt-12 rounded-xl bg-[#ece6d7] px-5 sm:px-8 lg:px-12 py-8 sm:py-10 max-w-6xl mx-auto">
            <div className="text-center max-w-4xl mx-auto">
              <h3 className="text-3xl sm:text-xl lg:text-2xl font-light text-[#1B263B] text-center">
                Where compliance builds financial clarity and fuels confident growth
              </h3>
              <p className="mt-3 text-xs sm:text-sm text-[#433b33] opacity-80 leading-relaxed">
                Accurate accounting, smart tax planning and strong compliance prevent penalties, improve cash flow, build credibility and support sustainable business expansion.
              </p>
            </div>

            <div className="mt-12 grid gap-x-4 gap-y-4 md:grid-cols-2 xl:grid-cols-4">
              {[
                {
                  title: 'End-to-End Accounting & Bookkeeping',
                  subtitle: '(Monthly Financials, MIS Reporting, Ledger Management)',
                  icon: (
                    <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#E8531A]" fill="currentColor">
                      <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                    </svg>
                  )
                },
                {
                  title: 'Tax Filing & Advisory',
                  subtitle: '(GST, TDS, Income Tax – Filing, Assessment, and Consultation)',
                  icon: (
                    <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#E8531A]" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
                    </svg>
                  )
                },
                {
                  title: 'ROC & Secretarial Compliance',
                  subtitle: '(Annual Filings, Returns, Registers & Documentation Audit)',
                  icon: (
                    <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#E8531A]" fill="currentColor">
                      <path d="M9 3L5 6.99h3V14h2V6.99h3L9 3zm7 14.01V10h-2v7.01h-3L15 21l4-3.99h-3z"/>
                    </svg>
                  )
                },
                {
                  title: 'Virtual CFO Services for SMEs',
                  subtitle: '(Budgeting, Cost Controls, Financial Systems & KPI Monitoring)',
                  icon: (
                    <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#E8531A]" fill="currentColor">
                      <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
                    </svg>
                  )
                },
              ].map((item, index) => (
                <div key={item.title} className="space-y-2">
                  <div className="rounded-xl overflow-hidden bg-[#faf8f5] shadow-sm h-[140px]">
                    <div className="px-5 pt-5 pb-5">
                      <div className="w-10 h-10 rounded-lg bg-[#ece6d7] flex items-center justify-center mb-3">
                        {item.icon}
                      </div>
                      <div className="text-sm font-medium text-[#1B263B] leading-tight">
                        {item.title}
                      </div>
                    </div>
                  </div>

                  <div className="rounded-xl overflow-hidden bg-[#f5f1e6] shadow-sm h-[60px]">
                    <div className="px-5 pt-3 pb-3">
                      <div className="text-xs text-[#433b33]/80 leading-tight">
                        {item.subtitle}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Custom solution slim CTA above Core Services */}
      <section className="py-10 bg-[#f5f1e6]">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center gap-4 sm:gap-6 bg-[#2a2622] rounded-lg px-3 sm:px-4 lg:px-6 py-3 sm:py-4 shadow-md">
              <div className="hidden sm:block">
                <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded overflow-hidden bg-[#3a342f]">
                  <Image
                    src="/service2.webp"
                    alt="Custom solution"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="flex-1 text-white text-xs sm:text-sm leading-relaxed opacity-80">
                We're ready to build a custom solution around your specific needs.
              </div>

              <div className="flex-shrink-0">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-md bg-[#E8531A] px-4 sm:px-5 py-2 text-xs sm:text-sm font-medium text-white shadow-sm hover:bg-[#cf4510] transition-colors whitespace-nowrap"
                >
                  Let's get started
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Strategic Finance & Business Growth Advisory Section */}
      <section className="py-8 sm:py-12 bg-[#f5f1e6]">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-xl sm:text-2xl lg:text-3xl font-light text-[#1B263B] text-center"
            >
              Strategic Finance & Business Growth Advisory
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              viewport={{ once: true }}
              className="text-center text-sm sm:text-base text-[#433b33] mt-4 max-w-4xl mx-auto"
            >
              Guiding founders and organizations with intelligent financial practices, risk reduction, and performance improvement strategies that unlock opportunities, attract funding, support expansion, and deliver continuous growth while staying structurally and operationally strong.
            </motion.p>

            <motion.h3
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              viewport={{ once: true }}
              className="text-left text-xl sm:text-2xl text-[#1B263B] mt-8 font-normal"
            >
              Where strategic finance accelerates growth, profitability, and investor confidence
            </motion.h3>

            <div className="mt-10 grid lg:grid-cols-[1.1fr_1fr_1.1fr] gap-8 items-start">
              {/* Left finance services list */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.05 }}
                viewport={{ once: true }}
              >
                <div>
                  <ul className="divide-y divide-[#e5dfd2] rounded-lg overflow-hidden bg-transparent">
                    {[
                      {
                        title: 'Tax Planning & Capital Structuring for Profit Optimization',
                        subtitle: ''
                      },
                      {
                        title: 'Financial Feasibility & Business Valuation Support',
                        subtitle: ''
                      },
                      {
                        title: 'Risk Assessment & Internal Control Frameworks',
                        subtitle: ''
                      }
                    ].map((item) => (
                      <li key={item.title} className="py-4">
                        <div className="flex items-center gap-3 text-[#433b33]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#E8531A]" />
                          <div>
                            <span className="text-sm font-medium">{item.title}</span>
                            {item.subtitle && (
                              <span className="text-xs text-[#433b33]/80 block mt-1">{item.subtitle}</span>
                            )}
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              {/* Middle image + CTA */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div
                  className="rounded-xl overflow-hidden shadow-md bg-[#e0d4bf] relative"
                  style={{ aspectRatio: '16/9' }}
                >
                  <Image src="/service3.webp" alt="Strategic finance consultation" fill className="object-cover" />
                </div>
                <Link
                  href="/contact"
                  className="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-[#E8531A] text-white text-sm font-medium py-3 shadow-sm hover:bg-[#cf4510] transition-colors"
                >
                  Book a free consultation
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </motion.div>

              {/* Right finance services list */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                viewport={{ once: true }}
              >
                <div>
                  <ul className="divide-y divide-[#e5dfd2] rounded-lg overflow-hidden bg-transparent">
                    {[
                      {
                        title: 'Investor Pitch & Fundraising Support',
                        subtitle: '(Financial Models, Projections & Due-Diligence Assistance)'
                      },
                      {
                        title: 'Growth Strategy & Market Expansion Advisory',
                        subtitle: ''
                      }
                    ].map((item) => (
                      <li key={item.title} className="py-4">
                        <div className="flex items-center gap-3 text-[#433b33]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#E8531A]" />
                          <div>
                            <span className="text-sm font-medium">{item.title}</span>
                            {item.subtitle && (
                              <span className="text-xs text-[#433b33]/80 block mt-1">{item.subtitle}</span>
                            )}
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Methodology Section */}
      <section className="py-8 sm:py-12 bg-[#f5f1e6]">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mt-8 text-xl sm:text-2xl lg:text-3xl font-light text-[#1B263B] text-center"
            >
              Our Methodology
            </motion.h2>

            <motion.h3
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              viewport={{ once: true }}
              className="mt-14 text-xl sm:text-2xl font-light text-[#1B263B] text-center"
            >
              How our financial planning works
            </motion.h3>

            <motion.h4
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              viewport={{ once: true }}
              className="mt-2 text-sm sm:text-base font-light text-[#433b33] text-center"
            >
              Acco Crunch PRO-Core™ (Professional Regulatory Operations System)
            </motion.h4>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              viewport={{ once: true }}
              className="mt-3 text-center text-xs sm:text-sm text-[#433b33] opacity-80 max-w-3xl mx-auto"
            >
              Our structured methodology ensures clarity, reduces risks, enhances compliance, and supports business decisions with consistent guidance.
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
                {/* Step 1 - Client Onboarding */}
                <div className="rounded-md bg-transparent border border-[#e3ddcf] flex items-center px-2 py-2 sm:px-2 sm:py-2">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-md bg-white border border-[#f0e6d5] flex items-center justify-center text-base sm:text-lg font-medium text-[#E8531A]">
                      1
                    </div>
                    <div className="text-xs sm:text-sm text-[#1B263B]">Client Onboarding</div>
                  </div>
                </div>

                {/* Placeholder */}
                <div className="hidden md:block rounded-xl bg-[#e9e1d1]" />

                {/* Step 2 - Compliance Mapping */}
                <div className="rounded-md bg-transparent border border-[#e3ddcf] flex items-center px-2 py-2 sm:px-2 sm:py-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-md bg-white border border-[#f0e6d5] flex items-center justify-center text-base sm:text-lg font-medium text-[#E8531A]">
                      2
                    </div>
                    <div className="text-xs sm:text-sm text-[#1B263B]">Compliance Mapping</div>
                  </div>
                </div>

                {/* Placeholder */}
                <div className="hidden md:block rounded-xl bg-[#e9e1d1]" />
              </div>

              {/* Row 2: 3 | blank | 4 */}
              <div className="grid md:grid-cols-[1.6fr_1fr_1.6fr] gap-1 sm:gap-2">
                {/* Step 3 - Structural Planning */}
                <div className="rounded-md bg-transparent border border-[#e3ddcf] flex items-center px-2 py-2 sm:px-2 sm:py-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-md bg-white border border-[#f0e6d5] flex items-center justify-center text-base sm:text-lg font-medium text-[#E8531A]">
                      3
                    </div>
                    <div className="text-xs sm:text-sm text-[#1B263B]">Structural Planning</div>
                  </div>
                </div>

                {/* Placeholder */}
                <div className="hidden md:block rounded-xl bg-[#e9e1d1]" />

                {/* Step 4 - Process Implementation */}
                <div className="rounded-md bg-transparent border border-[#e3ddcf] flex items-center px-2 py-2 sm:px-2 sm:py-2">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-md bg-white border border-[#f0e6d5] flex items-center justify-center text-base sm:text-lg font-medium text-[#E8531A]">
                      4
                    </div>
                    <div className="text-xs sm:text-sm text-[#1B263B]">Process Implementation</div>
                  </div>
                </div>
              </div>

              {/* Row 3: blank | 5 | blank | 6 */}
              <div className="grid md:grid-cols-[0.7fr_1fr_0.7fr_0.7fr] gap-1 sm:gap-2">
                {/* Placeholder */}
                <div className="hidden md:block rounded-xl bg-[#e9e1d1]" />

                {/* Step 5 - Dedicated Consultant */}
                <div className="rounded-md bg-transparent border border-[#e3ddcf] flex items-center px-2 py-2 sm:px-2 sm:py-2">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-md bg-white border border-[#f0e6d5] flex items-center justify-center text-base sm:text-lg font-medium text-[#E8531A]">
                      5
                    </div>
                    <div className="text-xs sm:text-sm text-[#1B263B]">Dedicated Consultant</div>
                  </div>
                </div>

                {/* Placeholder */}
                <div className="hidden md:block rounded-xl bg-[#e9e1d1]" />

                {/* Step 6 - Ongoing Assurance */}
                <div className="rounded-md bg-transparent border border-[#e3ddcf] flex items-center px-2 py-2 sm:px-2 sm:py-2">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-md bg-white border border-[#f0e6d5] flex items-center justify-center text-base sm:text-lg font-medium text-[#E8531A]">
                      6
                    </div>
                    <div className="text-xs sm:text-sm text-[#1B263B]">Ongoing Assurance</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonial Carousel under Our Methodology */}
      <section className="pb-16 bg-[#f5f1e6]">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-5xl mx-auto mt-12 sm:mt-16 rounded-lg overflow-hidden shadow-md bg-[#1c1b1a] min-h-[300px] md:min-h-[380px]">
            {/* Mobile layout: image on top, content below */}
            <div className="md:hidden">
              {/* Image section */}
              <div className="relative h-48 bg-black">
                <Image
                  src="/service3.webp"
                  alt="Client testimonial"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
              </div>

              {/* Content section below image */}
              <div className="bg-[#181716] text-white px-6 py-6">
                <div className="text-lg font-light mb-2">{testimonials[currentTestimonial].name}</div>
                <p className="text-sm text-white/80 mb-4">
                  {testimonials[currentTestimonial].company}
                </p>
                <h3 className="text-base font-light">
                  "{testimonials[currentTestimonial].review}"
                </h3>
              </div>
            </div>

            {/* Desktop layout: side by side */}
            <div className="hidden md:flex md:flex-row min-h-[380px]">
              {/* Left stats panel - now testimonial info */}
              <div className="w-full md:w-1/3 bg-[#181716] text-white px-6 sm:px-8 py-6 sm:py-8 flex flex-col justify-end">
                <div>
                  <div className="text-lg sm:text-xl font-light">{testimonials[currentTestimonial].name}</div>
                  <p className="mt-2 text-xs sm:text-sm text-white/80">
                    {testimonials[currentTestimonial].company}
                  </p>
                </div>
              </div>

              {/* Right image + copy - now testimonial review */}
              <div className="relative w-full md:w-2/3 bg-black">
                <div className="absolute inset-0">
                  <Image
                    src="/service3.webp"
                    alt="Client testimonial"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
                </div>

                <div className="relative h-full px-6 sm:px-8 py-6 sm:py-8 flex flex-col justify-end text-white">
                  <h3 className="text-sm sm:text-base font-light">
                    "{testimonials[currentTestimonial].review}"
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
