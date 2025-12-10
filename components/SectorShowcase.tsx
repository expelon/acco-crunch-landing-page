"use client";

import { useState } from "react";
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { HeartPulse, Network } from 'lucide-react';

function RoundedPlusIcon({ size = 20, className = '' }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M12 3.5v17M3.5 12h17"
        stroke="currentColor"
        strokeWidth="3.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

type Sector = {
  key: string;
  label: string;
  title: string;
  description: string;
  image?: string;
  points: string[];
};

const MORE_TEXT = 'And many more business sectors';

const sectors: Sector[] = [
  {
    key: 'it',
    label: 'IT & Tech startups',
    title: 'IT & Tech Startups',
    description:
      'Founders need the right legal structure, smart tax planning, and compliance for funding milestones. We ensure readiness for investor expectations and scalable growth.',
    points: [
      'Company registration & investor-ready compliance',
      'IP and brand protection through trademarks',
      'Accounting & financial modelling for fundraising',
    ],
    image: '/IT.webp',
  },
  {
    key: 'education',
    label: 'Education services',
    title: 'Education & Training Services',
    description:
      'Schools, academies & edu-startups must ensure financial clarity and credibility while expanding programs and digital offerings.',
    points: [
      'Tax filing, ROC compliance & reporting',
      'Structure for grants, CSR tie-ups & EdTech protections',
      'Fee accounting & regulatory documentation support',
    ],
    image: '/education.webp',
  },
  {
    key: 'retail',
    label: 'Retail & E-commerce',
    title: 'Retail & E-commerce',
    description:
      'Online and offline sellers face multi-channel GST, reconciliation, and marketplace compliance that must be accurate and penalty-free.',
    points: [
      'Marketplace GST reconciliation & reporting',
      'Automated bookkeeping & inventory-linked accounting',
      'Multi-state GST registration & compliance tracking',
    ],
    image: '/retail.webp',
  },
  {
    key: 'healthcare',
    label: 'Healthcare',
    title: 'Healthcare',
    description:
      'Clinics, labs, and healthcare providers must operate with precise financial control and legally defensible documentation.',
    points: [
      'Statutory filings & audit-ready documentation',
      'Compliance for medical services business',
      'Payroll, consultant payout & TDS compliance',
    ],
    image: '/healthcare.webp',
  },
  {
    key: 'hospitality',
    label: 'Hospitality & Restaurants',
    title: 'Hospitality & Restaurants',
    description:
      'Restaurants and hospitality units run on tight margins with recurring statutory requirements across staffing, vendors & revenue.',
    points: [
      'Full accounting + tax filing support',
      'Payroll, GST & vendor compliance controls',
      'Cash flow visibility & cost-control reporting',
    ],
    image: '/hospitality.webp',
  },
  {
    key: 'manufacturing',
    label: 'Manufacturing',
    title: 'Manufacturing',
    description:
      'Manufacturers deal with complex input credits, multiple vendors and large volume compliance. We streamline cost efficiency and legal accuracy.',
    points: [
      'Vendor & GST compliance management',
      'Cost-linked tax optimization & reporting',
      'Input tax credit reconciliation & accuracy checks',
    ],
    image: '/manufacturing.webp',
  },
];

export default function SectorShowcase() {
  const [active, setActive] = useState<Sector>(sectors[2]);
  const [imageLoaded, setImageLoaded] = useState(false);
  const activeIndex = sectors.findIndex((s) => s.key === active.key);
  const isReversed = activeIndex % 2 === 1;

  // Reset image load state when sector changes
  const handleSectorChange = (sector: Sector) => {
    setActive(sector);
    setImageLoaded(false);
  };

  return (
    <motion.div
      className="mt-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Top dark header with title and tabs */}
      <div className="rounded-t-2xl rounded-b-none bg-[#2a2a2a] text-white p-10 sm:p-14 lg:p-16 shadow-lg">
        <h3 className="text-center text-xl sm:text-2xl lg:text-3xl font-light text-[#f5f1e6]">Serving businesses across sectors</h3>
        <div className="mt-10 sm:mt-12 flex flex-wrap justify-center gap-x-4 gap-y-4">
          {sectors.map((s) => {
            const isActive = s.key === active.key;
            return (
              <motion.button
                key={s.key}
                onClick={() => handleSectorChange(s)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className={
                  'relative px-5 py-2.5 rounded-md text-sm sm:text-base font-medium transition-colors border border-white/10 ' +
                  (isActive
                    ? 'bg-[#FEEA9D] text-[#1B263B]'
                    : 'text-[#f5f1e6] hover:text-[#1B263B] hover:bg-[#FEEA9D]')
                }
                aria-pressed={isActive}
              >
                {s.label}
              </motion.button>
            );
          })}
        </div>
        <div className="mt-6 flex flex-wrap justify-center gap-x-4 gap-y-4">
          <div className="relative px-5 py-2.5 rounded-md text-sm sm:text-base font-medium transition-colors border border-white/10 text-[#f5f1e6] hover:text-[#1B263B] hover:bg-[#FEEA9D] flex items-center gap-2 sm:gap-3">
            <svg
              className="w-6 h-6 text-[#E8531A] flex-shrink-0"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                d="M12 3L4 9l8 12 8-12-8-6Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinejoin="round"
              />
              <path
                d="M12 3v18M4 9l8 4 8-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinejoin="round"
              />
            </svg>
            {MORE_TEXT}
          </div>
        </div>
      </div>

      {/* Content area */}
      <div className="bg-[#f0ebdd] rounded-b-2xl -mt-1 pt-10 pb-12 sm:pt-14 sm:pb-16 px-4 sm:px-8 lg:px-10 border border-[#e7dfcb] shadow-inner">
        <div className={`flex flex-col md:flex-row ${isReversed ? 'md:flex-row-reverse' : ''} items-stretch gap-12 lg:gap-14`}>
          <div className="relative w-full md:basis-[44%] lg:basis-[46%] h-80 sm:h-[26rem] lg:h-[30rem] rounded-xl overflow-hidden shadow-md">
            {!imageLoaded && (
              <div className="absolute inset-0 bg-[#f0ebdd] animate-pulse" />
            )}
            <motion.div
              className="relative w-full h-full"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: imageLoaded ? 1 : 0, scale: imageLoaded ? 1 : 1.05 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            >
              <Image
                src={active.image || '/card.webp'}
                alt={active.title}
                fill
                className="object-cover"
                onLoad={() => setImageLoaded(true)}
                onError={() => setImageLoaded(true)}
                priority={false}
                loading="lazy"
              />
            </motion.div>
          </div>
          <div className="h-full flex flex-col md:basis-[56%] lg:basis-[54%] min-h-80 md:min-h-[26rem] lg:min-h-[30rem]">
            <div>
              <h4 className="text-xl sm:text-2xl lg:text-3xl font-light text-[#1B263B]">{active.title}</h4>
              <p className="mt-5 text-gray-600 leading-relaxed text-sm sm:text-base tracking-wide max-w-2xl">{active.description}</p>
            </div>
            <div className="mt-auto pt-6 md:pt-8">
              <ul className="space-y-3 text-[#1B263B] text-sm sm:text-base">
                {active.points.map((pt, i) => {
                  const Icon = [RoundedPlusIcon, HeartPulse, Network][i % 3];
                  return (
                    <li key={i} className="flex items-start gap-3">
                      <Icon className="mt-0.5 text-[#E8531A]" size={18} aria-hidden />
                      <span>{pt}</span>
                    </li>
                  );
                })}
              </ul>
              <div className="mt-6 md:mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#E8531A] text-white hover:bg-[#1B263B] transition-colors"
                >
                  Book your free consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
