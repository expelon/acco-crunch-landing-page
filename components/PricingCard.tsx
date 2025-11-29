'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import Link from 'next/link';

interface PricingCardProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  index: number;
}

export default function PricingCard({
  name,
  price,
  description,
  features,
  highlighted = false,
  index,
}: PricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`relative bg-white rounded-2xl p-8 ${
        highlighted
          ? 'border-4 border-[#F4C542] shadow-2xl scale-105'
          : 'border border-gray-200 shadow-lg'
      } hover:shadow-2xl transition-all duration-300`}
    >
      {highlighted && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#F4C542] text-[#1B263B] px-6 py-2 rounded-full text-sm font-bold">
          Most Popular
        </div>
      )}
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-[#1B263B] mb-2">{name}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
      <div className="mb-8">
        <div className="flex items-baseline">
          <span className="text-5xl font-bold text-[#1B263B]">{price}</span>
          {price !== 'Custom' && (
            <span className="text-gray-600 ml-2">/month</span>
          )}
        </div>
      </div>
      <ul className="space-y-4 mb-8">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <div className="w-6 h-6 bg-[#F4C542]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <Check size={16} className="text-[#F4C542]" />
            </div>
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
      <Link
        href="/contact"
        className={`block text-center px-6 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 ${
          highlighted
            ? 'bg-[#1B263B] text-white hover:bg-[#2D3E5F]'
            : 'bg-[#F4C542] text-[#1B263B] hover:bg-[#e5b835]'
        }`}
      >
        Get Started
      </Link>
    </motion.div>
  );
}
