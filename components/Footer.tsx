import Link from 'next/link';
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1B263B] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-[#F4C542] rounded-lg flex items-center justify-center">
                <span className="text-[#1B263B] font-bold text-xl">C</span>
              </div>
              <span className="text-2xl font-bold">
                Consulta<span className="text-[#F4C542]">Pro</span>
              </span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Empowering businesses with strategic consulting solutions that
              drive sustainable growth and operational excellence.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#F4C542] transition-colors duration-300"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#F4C542] transition-colors duration-300"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#F4C542] transition-colors duration-300"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#F4C542] transition-colors duration-300"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-[#F4C542] transition-colors duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-300 hover:text-[#F4C542] transition-colors duration-300"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-[#F4C542] transition-colors duration-300"
                >
                  Contact
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-[#F4C542] transition-colors duration-300"
                >
                  About Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-[#F4C542] transition-colors duration-300"
                >
                  Business Strategy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-[#F4C542] transition-colors duration-300"
                >
                  Digital Transformation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-[#F4C542] transition-colors duration-300"
                >
                  Financial Advisory
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-[#F4C542] transition-colors duration-300"
                >
                  Operations Optimization
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-[#F4C542] flex-shrink-0 mt-1" />
                <span className="text-gray-300">
                  123 Business Avenue, Suite 500
                  <br />
                  New York, NY 10001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-[#F4C542] flex-shrink-0" />
                <a
                  href="tel:+15551234567"
                  className="text-gray-300 hover:text-[#F4C542] transition-colors"
                >
                  +1 (555) 123-4567
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-[#F4C542] flex-shrink-0" />
                <a
                  href="mailto:info@consultapro.com"
                  className="text-gray-300 hover:text-[#F4C542] transition-colors"
                >
                  info@consultapro.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-300 text-sm">
              © {currentYear} ConsultaPro. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a
                href="#"
                className="text-gray-300 hover:text-[#F4C542] transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-[#F4C542] transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
