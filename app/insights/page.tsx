"use client";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Lightbulb } from 'lucide-react';
import { motion } from 'framer-motion';

const posts = [
  {
    slug: 'indias-net-direct-tax-collection-fy26',
    title: "India's Net Direct Tax Collection Up 7% in FY 26 — What It Means for Taxpayers & Businesses",
    category: 'Tax & Regulation',
    readTime: '4 min read',
    description:
      "India's net direct tax collection for FY 2025–26 reached Rs. 12.92 trillion, up 7% from last year. Here's what the 18% dip in refunds and 8.7% rise in non-corporate taxes mean for taxpayers and businesses.",
    image: '/first.webp',
    featured: true,
  },
  {
    slug: 'gst-2-0-simplified-registration-small-businesses',
    title: 'GST 2.0 — Simplified Registration & What It Means for Small Businesses',
    category: 'GST & Compliance',
    readTime: '5 min read',
    description:
      'New GST 2.0 system offers automatic approval within 3 days for 96% of applications. Here\'s how the fully digital process benefits SMEs and startups.',
    image: '/second.webp',
    featured: false,
  },
  {
    slug: 'gst-rate-overhaul-new-slabs-impact',
    title: 'GST Rate Overhaul — Understanding the New Slabs & Impact on Consumers & Businesses',
    category: 'GST & Compliance',
    readTime: '6 min read',
    description:
      'A breakdown of the new 5%, 18% and 40% GST slabs and what they mean for pricing, demand and strategy for SMEs and consumers.',
    image: '/three.webp',
    featured: false,
  },
  {
    slug: 'india-first-olfactory-trademark-brand-building',
    title: 'India Accepts Its First-Ever Olfactory (Smell) Trademark — A New Era for Brand Building',
    category: 'Brand & IP',
    readTime: '5 min read',
    description:
      'How India\'s first smell trademark opens up new possibilities in sensory branding and non-traditional IP protection for startups and brands.',
    image: '/four.webp',
    featured: false,
  },
  {
    slug: 'what-entrepreneurs-should-know-gst-shift-impact-opportunity',
    title: 'What Entrepreneurs Should Know: The Shift in India’s GST — Impact & Opportunity',
    category: 'GST & Compliance',
    readTime: '5 min read',
    description:
      'Key takeaways from GST 2.0 for startups and MSMEs — faster formalisation, simpler slabs, and how to turn reform into an advisory advantage.',
    image: '/five.webp',
    featured: false,
  },
  {
    slug: 'surge-company-llp-registrations-2025-data-entrepreneurial-momentum',
    title: 'Surge in Company & LLP Registrations — What 2025 Data Tells Us About Entrepreneurial Momentum',
    category: 'Business Trends',
    readTime: '6 min read',
    description:
      'What rising company and LLP incorporations in 2025 reveal about founder confidence, LLP popularity and opportunities for advisors.',
    image: '/six.webp',
    featured: false,
  },
  {
    slug: '2025-trademark-reforms-faster-filings-digital-verification-ai-registry',
    title: '2025 Trademark Reforms — Faster Filings, Digital Verification & AI-backed Registry',
    category: 'Brand & IP',
    readTime: '6 min read',
    description:
      'How India’s 2025 trademark reforms make brand protection faster, more digital and more startup-friendly — and what founders should do now.',
    image: '/seven.webp',
    featured: false,
  },
  {
    slug: 'first-ever-scent-trademark-approved-india-sensory-branding',
    title: 'First-ever Scent/Smell Trademark Approved in India — What It Means for Sensory Branding',
    category: 'Brand & IP',
    readTime: '5 min read',
    description:
      'India’s first accepted smell trademark for a rose-like tyre fragrance and what it signals for sensory branding opportunities.',
    image: '/eight.webp',
    featured: false,
  },
  {
    slug: 'india-top-3-global-trademark-filings-2024-25-data-reveals',
    title: 'India Among Top 3 Global Nations in Trademark Filings — What 2024–25 Data Reveals',
    category: 'Brand & IP',
    readTime: '5 min read',
    description:
      'Why India’s rise to the global top 3 in trademark filings matters for entrepreneurs, brand-owners and IP advisors.',
    image: '/nine.webp',
    featured: false,
  },
  {
    slug: 'regulatory-ipr-updates-october-2025-landscape',
    title: 'Regulatory & IPR Updates: What October 2025 Brought to India’s Trademark & IPR Landscape',
    category: 'IPR & Enforcement',
    readTime: '5 min read',
    description:
      'Key October 2025 rulings and registry updates in India’s IPR space — and why IP protection now means ongoing monitoring as well as registration.',
    image: '/ten.webp',
    featured: false,
  },
  {
    slug: 'gst-2-0-implementation-impact-company-incorporation-business-confidence',
    title: 'GST 2.0 Implementation & Its Impact on Company Incorporation & Business Confidence',
    category: 'GST & Compliance',
    readTime: '5 min read',
    description:
      'How GST 2.0 reforms are fuelling company and LLP registrations, boosting business confidence and creating opportunities for advisors.',
    image: '/eleven.webp',
    featured: false,
  },
  {
    slug: 'growing-demand-cfo-financial-advisory-services-2025-26',
    title: 'The Growing Demand for CFO & Financial Advisory Services — What Current Macroeconomic Conditions Signal for 2025–26',
    category: 'Finance & Strategy',
    readTime: '5 min read',
    description:
      'Why macro conditions in 2025–26 are boosting demand for outsourced CFO and financial advisory — and how firms like yours can respond.',
    image: '/twelve.webp',
    featured: false,
  },
];

export default function InsightsPage() {
  return (
    <div className="min-h-screen bg-[#f5f1e6]">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-16 sm:pt-20 pb-6 bg-[#f5f1e6]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-white shadow-sm">
              <Lightbulb className="w-6 h-6 text-[#E8531A]" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-light text-[#1B263B]">
              Smart Insights for Modern Entrepreneurs
            </h1>
            <p className="mt-3 mb-8 text-sm sm:text-base text-[#433b33] leading-relaxed max-w-2xl mx-auto">
              From company registration clarity to taxation updates and growth strategies, our expert
              resources support entrepreneurs in building strong, compliant, and scalable business
              journeys successfully.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Insights List */}
      <section className="pb-16 bg-[#f5f1e6]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {posts.length === 0 ? (
            <div className="max-w-2xl mx-auto text-center text-sm text-[#433b33] opacity-80">
              New insights are on the way. Check back soon.
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <article
                  key={post.slug}
                  className="rounded-xl bg-white shadow-sm border border-black/5 overflow-hidden flex flex-col"
                >
                  <div className="relative h-56 bg-white px-2 pt-2 pb-2">
                    <div className="relative w-full h-full overflow-hidden rounded-lg">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <div className="flex items-center justify-between mb-2 text-[11px] uppercase tracking-wide text-[#7b6a59]">
                      <span>{post.category}</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h2 className="text-base sm:text-lg font-medium text-[#1B263B] mb-2">
                      {post.title}
                    </h2>
                    <div className="mt-auto flex justify-end">
                      <Link
                        href={`/insights/${post.slug}`}
                        className="inline-flex items-center gap-1 text-xs sm:text-sm text-[#E8531A] hover:text-[#c74512] font-medium"
                      >
                        View more
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}

