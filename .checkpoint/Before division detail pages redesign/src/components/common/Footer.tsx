import React from 'react';
import { Link } from 'react-router-dom';
import { GnxLogo } from './GnxLogo';
import { SITE_CONFIG } from '../../data/siteData';
import { Phone, Mail, MapPin, ShieldCheck, Truck, ArrowLeftRight, Wrench } from 'lucide-react';

interface FooterProps {
  onRequestQuote: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onRequestQuote }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A0D0C] text-white border-t-4 border-[#2CB51D] pt-16 pb-12 relative overflow-hidden">
      {/* Background Graphic Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#0B3F8C]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#2CB51D]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Col 1: Brand & Logo */}
          <div className="lg:col-span-2 space-y-4">
            <Link
              to="/"
              className="logo-wrapper"
              aria-label="Gulf Northern X Homepage"
            >
              <GnxLogo
                className="w-[200px] sm:w-[240px]"
                alt="Gulf Northern X"
              />
            </Link>

            <p className="text-slate-300 font-sans text-sm leading-relaxed max-w-sm">
              Gulf Northern X is a premier United States transportation and commercial vehicle support network. Connecting freight movement, specialized equipment transfers, cold storage, tires, trailer washouts, and maintenance under one dependable enterprise identity.
            </p>

            <div className="pt-2 flex items-center space-x-3 text-xs font-sans text-slate-400">
              <ShieldCheck className="w-4 h-4 text-[#2CB51D]" />
              <span>Fully Licensed DOT Commercial Carrier & Support Network</span>
            </div>

            <div className="pt-2">
              <button
                onClick={onRequestQuote}
                className="font-display text-lg px-5 py-2.5 bg-[#2CB51D] hover:bg-[#259b18] text-white font-bold rounded-sm transition-all shadow-md inline-flex items-center gap-2"
              >
                <span>REQUEST A QUOTE TODAY</span>
                <span>→</span>
              </button>
            </div>
          </div>

          {/* Col 2: Service Divisions */}
          <div className="space-y-3">
            <div className="font-display text-xl font-bold text-white tracking-wider border-b border-[#2CB51D] pb-2 inline-block">
              SERVICE DIVISIONS
            </div>

            <ul className="space-y-2 font-sans text-sm text-slate-300">
              <li>
                <Link to="/services/xpress" className="hover:text-[#2CB51D] transition-colors flex items-center gap-1.5">
                  <Truck className="w-3.5 h-3.5 text-[#2CB51D]" />
                  <span>XPRESS (Freight)</span>
                </Link>
              </li>
              <li>
                <Link to="/services/xfers" className="hover:text-[#2CB51D] transition-colors flex items-center gap-1.5">
                  <ArrowLeftRight className="w-3.5 h-3.5 text-[#2CB51D]" />
                  <span>XFERS (Transfers & Storage)</span>
                </Link>
              </li>
              <li>
                <Link to="/services/xtras" className="hover:text-[#2CB51D] transition-colors flex items-center gap-1.5">
                  <Wrench className="w-3.5 h-3.5 text-[#2CB51D]" />
                  <span>XTRAS (Tires & Washouts)</span>
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#2CB51D] transition-colors text-xs text-[#2CB51D] font-bold">
                  All Divisions Overview →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Navigation */}
          <div className="space-y-3">
            <div className="font-display text-xl font-bold text-white tracking-wider border-b border-[#2CB51D] pb-2 inline-block">
              COMPANY
            </div>

            <ul className="space-y-2 font-sans text-sm text-slate-300">
              <li>
                <Link to="/" className="hover:text-[#2CB51D] transition-colors">Home Page</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#2CB51D] transition-colors">Our Story & Mission</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#2CB51D] transition-colors">Complete Network</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#2CB51D] transition-colors">Find Us & Contact</Link>
              </li>
              <li>
                <button onClick={onRequestQuote} className="hover:text-[#2CB51D] transition-colors text-left">
                  Request Rate Quote
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Service Enquiries */}
          <div className="space-y-3">
            <div className="font-display text-xl font-bold text-white tracking-wider border-b border-[#2CB51D] pb-2 inline-block">
              SERVICE ENQUIRIES
            </div>

            <p className="font-sans text-xs text-slate-300 leading-relaxed">
              Submit your transportation, transfer, cold storage or maintenance request online through our quote system.
            </p>

            <div className="pt-2">
              <button
                onClick={onRequestQuote}
                className="w-full py-2.5 px-4 bg-[#2CB51D] hover:bg-[#259b18] text-white font-display text-sm font-bold uppercase rounded-xs transition-colors text-center"
              >
                ONLINE QUOTE FORM
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs font-sans text-slate-400 gap-4">
          <div>
            © {currentYear} {SITE_CONFIG.companyName}. All Rights Reserved. Built to Keep America Moving.
          </div>

          <div className="flex items-center space-x-6">
            <span className="hover:text-slate-200 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-200 cursor-pointer">Terms of Service</span>
            <span className="hover:text-slate-200 cursor-pointer">DOT Compliance</span>
            <span className="hover:text-slate-200 cursor-pointer">Site Map</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
