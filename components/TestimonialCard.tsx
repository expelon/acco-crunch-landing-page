'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
}

export default function TestimonialCard({
  name,
  role,
  company,
  content,
  rating,
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 h-full"
    >
      <div className="flex gap-1 mb-6">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} size={20} className="fill-[#F4C542] text-[#F4C542]" />
        ))}
      </div>
      <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">
        "{content}"
      </p>
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 bg-gradient-to-br from-[#1B263B] to-[#2D3E5F] rounded-full flex items-center justify-center text-white font-bold text-xl">
          {name.charAt(0)}
        </div>
        <div>
          <div className="font-bold text-[#1B263B]">{name}</div>
          <div className="text-gray-600 text-sm">
            {role} at {company}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
