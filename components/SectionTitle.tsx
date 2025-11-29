'use client';

import { motion } from 'framer-motion';

interface SectionTitleProps {
  subtitle?: string;
  title: string;
  description?: string;
  centered?: boolean;
}

export default function SectionTitle({
  subtitle,
  title,
  description,
  centered = true,
}: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={centered ? 'text-center max-w-3xl mx-auto' : ''}
    >
      {subtitle && (
        <div className="inline-block bg-[#F4C542]/10 text-[#1B263B] px-4 py-2 rounded-full text-sm font-semibold mb-4">
          {subtitle}
        </div>
      )}
      <h2 className="text-4xl sm:text-5xl font-bold text-[#1B263B] mb-6">
        {title}
      </h2>
      {description && (
        <p className="text-xl text-gray-600 leading-relaxed">{description}</p>
      )}
    </motion.div>
  );
}
