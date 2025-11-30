'use client';

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description?: string;
  features?: string[];
  index: number;
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  features,
  index,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ type: 'spring', stiffness: 140, damping: 28, mass: 1, delay: index * 0.06 }}
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ y: -4, boxShadow: '0 18px 36px rgba(0,0,0,0.08)' }}
      whileTap={{ scale: 0.995 }}
      className="group bg-white p-8 rounded-2xl shadow-lg transition-all duration-500 border border-gray-100 transform-gpu will-change-transform"
    >
      <div className="w-16 h-16 bg-[#f5f1e6] rounded-xl flex items-center justify-center mb-6 transform-gpu origin-center group-hover:scale-105 transition-transform duration-500">
        <Icon size={32} className="text-[#F4C542]" />
      </div>
      <h3 className="text-2xl font-bold text-[#1B263B] mb-4 group-hover:text-[#F4C542] transition-colors">
        {title}
      </h3>
      {features && features.length > 0 ? (
        <ul className="text-gray-700 leading-relaxed space-y-2 list-disc list-inside">
          {features.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-600 leading-relaxed">{description}</p>
      )}
    </motion.div>
  );
}
