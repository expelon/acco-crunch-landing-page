'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, PlayCircle, CheckCircle2, Clock3, ShieldCheck, Target } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

function CountUp({ end, startFrom, suffix = '', duration = 1800, className = '' }: { end: number; startFrom?: number; suffix?: string; duration?: number; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '0px 0px -20% 0px' });
  const [value, setValue] = useState(end);

  useEffect(() => {
    if (!isInView) return;
    let start: number | null = null;
    const startVal = startFrom ?? Math.floor(end * 0.6);
    setValue(startVal);
    const diff = end - startVal;
    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
    const step = (ts: number) => {
      if (start === null) start = ts;
      const raw = Math.min(1, (ts - start) / duration);
      const progress = easeOutCubic(raw);
      const current = Math.round(startVal + diff * progress);
      setValue(current);
      if (raw < 1) requestAnimationFrame(step);
    };
    const raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [isInView, end, duration]);

  return (
    <span ref={ref} className={className}>
      {value}
      {suffix}
    </span>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-start md:items-center pt-2 sm:pt-3 md:pt-4 overflow-x-hidden">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6 pt-2 sm:pt-3 md:pt-3 pb-8">
        <div className="grid md:grid-cols-2 gap-2 md:gap-3 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="h-auto md:h-[560px] flex flex-col"
          >
            <div className="bg-[#fdfcf5] rounded-2xl shadow-md px-5 sm:px-6 lg:px-8 pt-6 sm:pt-8 lg:pt-10 pb-6 sm:pb-8 mb-0">
              <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-medium text-[#1B263B] leading-tight tracking-wide mb-4">
                <span className="block lg:mb-2">Making every business</span>
                <span className="block">move a confident one</span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed max-w-2xl lg:max-w-xl xl:max-w-lg text-left">
                End-to-end Business Registration, Tax Advisory, Compliance & Legal Support for Startups,
                Professionals, SMEs & Growth-Focused Companies.
              </p>
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-left">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                    <ShieldCheck size={18} strokeWidth={2} />
                  </span>
                  <span className="text-[#1B263B]/90">Built For Founders</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                    <CheckCircle2 size={18} strokeWidth={2} />
                  </span>
                  <span className="text-[#1B263B]/90">Compliance Without Confusion</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                    <Target size={18} strokeWidth={2} />
                  </span>
                  <span className="text-[#1B263B]/90">Taxes Made Strategic</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                    <Clock3 size={18} strokeWidth={2} />
                  </span>
                  <span className="text-[#1B263B]/90">Clarity Before Growth</span>
                </div>
              </div>
            </div>
            <div className="h-1 md:h-2 lg:h-3 bg-inherit"></div>
            <div className="mt-2 sm:mt-0 rounded-xl bg-[#FFEB99] px-6 pt-6 pb-8 sm:pt-8 sm:pb-10 lg:pt-10 lg:pb-14">
              <div className="grid grid-cols-3 gap-8 text-left items-start">
                <div className="space-y-1">
                  <div className="text-xl sm:text-2xl font-semibold text-black leading-none">
                    <CountUp end={1200} suffix="+" />
                  </div>
                  <div className="text-[#1B263B]/80">Clients</div>
                </div>
                <div className="space-y-1">
                  <div className="text-xl sm:text-2xl font-semibold text-black leading-none">
                    <CountUp end={6} suffix="+" />
                  </div>
                  <div className="text-[#1B263B]/80">Years of Experience</div>
                </div>
                <div className="space-y-1">
                  <div className="text-xl sm:text-2xl font-semibold text-black leading-none">
                    <CountUp end={25} suffix="+" />
                  </div>
                  <div className="text-[#1B263B]/80">Certified Experts</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full h-[320px] sm:h-[420px] lg:h-[560px] rounded-2xl overflow-hidden">
              <Image src="/home2.webp" alt="Hero visual" fill priority className="object-cover" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
