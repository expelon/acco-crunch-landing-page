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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true, amount: 0.3 }}
      className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
    >
      <div className="w-16 h-16 bg-[#f5f1e6] rounded-xl flex items-center justify-center mb-6">
        <Icon size={32} className="text-[#F4C542]" />
      </div>
      <h3 className="text-2xl font-bold text-[#1B263B] mb-4">
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
