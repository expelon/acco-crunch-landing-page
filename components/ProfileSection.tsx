"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Plus, Minus, Instagram, Linkedin, Facebook, Youtube } from "lucide-react";
import { useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function ProfileSection() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <section className="py-16 bg-[#f5f1e6]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Left side - Profile */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="relative"
          >
            <div className="relative bg-white rounded-lg shadow-xl p-2 max-w-none mx-auto lg:mx-0 lg:ml-8 w-full">
              {/* Image container with hover effects */}
              <div 
                className="relative aspect-[4/5] mb-3 overflow-hidden rounded-lg cursor-pointer"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <motion.div
                  className="relative w-full h-full"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <Image
                    src="/profile2.webp"
                    alt="Jaison Mullukattil"
                    fill
                    className="object-cover"
                  />
                </motion.div>
                
                {/* Profile toolbar: plus/minus and social icons */}
                <div className="absolute top-4 left-4 flex flex-col items-center gap-2 z-10">
                  {/* Plus/Minus icon - hidden on smaller screens */}
                  <div className="hidden sm:flex w-10 h-10 bg-white rounded-lg shadow-md items-center justify-center">
                    {isHovered ? (
                      <Minus className="w-5 h-5 text-[#1B263B]" />
                    ) : (
                      <Plus className="w-5 h-5 text-[#1B263B]" />
                    )}
                  </div>

                  {/* Social media icons - always visible on small screens, animated on larger screens */}
                  <div className="sm:hidden flex flex-col items-center gap-2">
                    <a 
                      href="https://www.instagram.com/jaison_accocrunch?igsh=MXR1cTIwYXRndHkwcw%3D%3D&utm_source=qr" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-white rounded-lg shadow-md flex items-center justify-center hover:bg-[#e9e4da] transition-colors"
                    >
                      <Instagram className="w-4 h-4 text-[#1B263B]" />
                    </a>
                    <a 
                      href="https://www.linkedin.com/in/jaison-mullukattil/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-white rounded-lg shadow-md flex items-center justify-center hover:bg-[#e9e4da] transition-colors"
                    >
                      <Linkedin className="w-4 h-4 text-[#1B263B]" />
                    </a>
                  </div>

                  {/* Social media icons - stacked below minus icon with dropdown animation on larger screens */}
                  <motion.div
                    className="hidden sm:flex flex-col items-center gap-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isHovered ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {[
                      { icon: <Instagram className="w-5 h-5 text-[#1B263B]" />, delay: 0.1, link: "https://www.instagram.com/jaison_accocrunch?igsh=MXR1cTIwYXRndHkwcw%3D%3D&utm_source=qr" },
                      { icon: <Linkedin className="w-5 h-5 text-[#1B263B]" />, delay: 0.15, link: "https://www.linkedin.com/in/jaison-mullukattil/" },
                    ].map((item, index) => (
                      <motion.a
                        key={index}
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-white rounded-lg shadow-md flex items-center justify-center hover:bg-[#e9e4da] transition-colors"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ 
                          opacity: isHovered ? 1 : 0,
                          y: isHovered ? 0 : -10
                        }}
                        transition={{ 
                          duration: 0.3, 
                          delay: isHovered ? item.delay : 0 
                        }}
                      >
                        {item.icon}
                      </motion.a>
                    ))}
                  </motion.div>
                </div>
              </div>
              
              {/* Name and Position */}
              <div className="text-left ml-4">
                <h3 className="text-xl font-light tracking-wide text-[#1B263B] mb-1 mt-2">Jaison Mullukattil</h3>
                <p className="text-sm text-gray-600 mb-3">Founder</p>
              </div>
            </div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div>
              <h2 className="text-2xl sm:text-3xl font-light tracking-wide text-[#1B263B] mb-6">
                We're more than compliance experts – We're growth enablers
              </h2>
              <p className="text-base text-gray-700 leading-relaxed max-w-md">
                Jaison Mullukattil is a visionary business strategist who elevates entrepreneurship through structured compliance and financial intelligence. His leadership inspires founders to operate strategically, scale responsibly, and build businesses that remain resilient, future-ready, and globally competitive.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
