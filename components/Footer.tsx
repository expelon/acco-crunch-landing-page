import Link from 'next/link';
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin, ArrowRight, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#f5f1e6]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Top help bar */}
        <div className="rounded-xl bg-[#2b2420] text-white px-4 sm:px-6 py-4 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
          <h3 className="text-lg sm:text-xl font-light w-full sm:w-auto text-left">
            How can we help?
          </h3>

          <div className="flex-1 w-full flex justify-center">
            <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-xs sm:text-sm">
              <Link href="/contact" className="hover:text-[#F4C542] whitespace-nowrap">Contact</Link>
              <a href="mailto:hello.accocrunch@gmail.com" className="hover:text-[#F4C542] break-all sm:break-normal">
                hello.accocrunch@gmail.com
              </a>
              <a href="tel:+918089200829" className="hover:text-[#F4C542] whitespace-nowrap">+91 80892 00829</a>
            </div>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto justify-start sm:justify-end">
            <a href="https://www.facebook.com/share/17fU596WUK/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-9 h-9 rounded-md bg-white/10 flex items-center justify-center hover:bg-white/20"><Facebook size={18} /></a>
            <a href="https://www.instagram.com/accocrunch?igsh=czd5ZDhjZnVnenZ2" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-9 h-9 rounded-md bg-white/10 flex items-center justify-center hover:bg-white/20"><Instagram size={18} /></a>
            <a href="https://youtube.com/@accocrunch?si=-XhGEnP_omXkFWn3" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="w-9 h-9 rounded-md bg-white/10 flex items-center justify-center hover:bg-white/20"><Youtube size={18} /></a>
            <a href="https://www.linkedin.com/company/accocrunch/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-9 h-9 rounded-md bg-white/10 flex items-center justify-center hover:bg-white/20"><Linkedin size={18} /></a>
            <a href="https://wa.me/message/VSO4AIALEKNCF1" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="w-9 h-9 rounded-md bg-white/10 flex items-center justify-center hover:bg-white/20">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
                <path d="M20.52 3.48A11.77 11.77 0 0 0 12 0 11.94 11.94 0 0 0 1.6 17.94L0 24l6.2-1.63A11.93 11.93 0 0 0 12 24h.01A12 12 0 0 0 24 12a11.77 11.77 0 0 0-3.48-8.52ZM12 22a9.93 9.93 0 0 1-5.06-1.38l-.36-.21-3.69.97.99-3.6-.23-.37A10 10 0 1 1 22 12a9.9 9.9 0 0 1-10 10Zm5.47-7.55c-.3-.15-1.75-.86-2.02-.95s-.47-.15-.67.15-.77.95-.95 1.15-.35.22-.65.07a8.15 8.15 0 0 1-2.4-1.48 9.03 9.03 0 0 1-1.67-2.07c-.17-.3 0-.46.13-.61.13-.13.3-.35.45-.52.15-.17.25-.33.3-.5a.56.56 0 0 0-.02-.54c-.06-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.5h-.57a1.1 1.1 0 0 0-.8.38 3.38 3.38 0 0 0-1.06 2.5 5.87 5.87 0 0 0 1.22 3.12c.15.2 2.13 3.24 5.17 4.54.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.08 1.75-.72 2-1.4.25-.68.25-1.26.17-1.38-.07-.12-.27-.2-.57-.35Z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Middle cards */}
        <div className="mt-4 grid lg:grid-cols-2 gap-4">
          {/* Left: navigation lists */}
          <div className="rounded-2xl bg-white p-6 sm:p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-start">
              {/* Left: Pages */}
              <div>
                <div className="text-[#1B263B] font-semibold mb-4">Pages</div>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/" className="hover:text-[#E8531A] text-[#1B263B]/80">Home</Link></li>
                  <li><Link href="/about" className="hover:text-[#E8531A] text-[#1B263B]/80">About</Link></li>
                  <li><Link href="/services" className="hover:text-[#E8531A] text-[#1B263B]/80">Services</Link></li>
                  <li><Link href="/partnerships" className="hover:text-[#E8531A] text-[#1B263B]/80">Partnerships</Link></li>
                  <li><Link href="/career" className="hover:text-[#E8531A] text-[#1B263B]/80">Career</Link></li>
                  <li><Link href="/insights" className="hover:text-[#E8531A] text-[#1B263B]/80">Insights</Link></li>
                  <li><Link href="/contact" className="hover:text-[#E8531A] text-[#1B263B]/80">Contact</Link></li>
                </ul>
              </div>

              {/* Right: Services with vertical divider (only on sm and up) */}
              <div className="sm:pl-8 sm:border-l border-black/10">
                <div className="text-[#1B263B] font-semibold mb-4">Services</div>
                <ul className="space-y-2 text-sm text-[#1B263B]/80">
                  <li><Link href="/services" className="hover:text-[#E8531A]">Business Registration & Advisory</Link></li>
                  <li><Link href="/services" className="hover:text-[#E8531A]">Accounting & Compliance</Link></li>
                  <li><Link href="/services" className="hover:text-[#E8531A]">Tax Planning & Consulting</Link></li>
                </ul>
              </div>
            </div>
            {/* Removed brand/logo row per request */}
          </div>

          {/* Right: CTA panel */}
          <div className="rounded-2xl bg-white p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="max-w-[26rem] sm:max-w-[32rem]">
                <div className="text-xl font-light tracking-[0.02em] text-[#1B263B]">Gain full control over your accounting and strategy.</div>
              </div>
              <Link href="/contact" className="shrink-0 inline-flex items-center gap-2 bg-[#E8531A] text-white px-4 py-3 rounded-lg hover:bg-[#c74512] w-full sm:w-auto justify-center">
                Let's get started <ArrowRight size={16} />
              </Link>
            </div>

            <div className="mt-8 grid grid-cols-[72px_1fr] sm:grid-cols-[80px_1fr] gap-4 items-start">
              <div className="mt-2 aspect-square rounded-md overflow-hidden bg-[#f5f1e6]">
                <img src="/card.webp" alt="Office" className="w-full h-full object-cover" />
              </div>
              <div className="mt-2 text-[#1B263B]/80 text-sm leading-relaxed">
                <div className="flex items-start gap-2 mb-1">
                  <MapPin size={16} className="text-[#E8531A] mt-0.5" />
                  <div>
                    <div>Acco Crunch</div>
                    <div>Third Floor, City Centre Building,</div>
                    <div>Vellayambalam, Thiruvananthapuram,</div>
                    <div>Kerala – 695010</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t text-xs text-[#1B263B]/60">
              <div className="flex flex-wrap items-center gap-2">
                <span>© {currentYear} Acco Crunch. All rights reserved.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
