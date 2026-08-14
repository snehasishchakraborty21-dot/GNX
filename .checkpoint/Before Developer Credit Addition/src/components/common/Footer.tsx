import React from 'react';
import { Link } from 'react-router-dom';
import { GnxLogo } from './GnxLogo';
import { SITE_CONFIG } from '../../data/siteData';
import { Truck, ArrowLeftRight, Wrench, ChevronRight } from 'lucide-react';

interface FooterProps {
  onRequestQuote: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onRequestQuote }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-[#081220] to-[#040810] text-white border-t-2 border-[#2CB51D] pt-[60px] sm:pt-[68px] pb-[36px] sm:pb-[42px] relative overflow-hidden">
      <div className="max-w-[1360px] w-full mx-auto px-[clamp(24px,5vw,72px)] relative z-10">
        {/* Main 3-Column Desktop Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[minmax(300px,1.35fr)_minmax(240px,1fr)_minmax(220px,0.9fr)] gap-y-8 md:gap-y-10 lg:gap-x-[clamp(60px,8vw,140px)] justify-between items-start">
          {/* Column 1: Logo Only */}
          <div className="flex items-start">
            <Link
              to="/"
              className="inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2CB51D] rounded-xs"
              aria-label="Gulf Northern X Homepage"
            >
              <GnxLogo
                className="w-[260px] sm:w-[280px] lg:w-[300px] h-auto"
                alt="Gulf Northern X"
              />
            </Link>
          </div>

          {/* Column 2: Service Divisions */}
          <div className="space-y-4">
            <div>
              <h4 className="font-display text-[19px] sm:text-[20px] font-bold text-white tracking-[0.035em] uppercase leading-[1.2]">
                SERVICE DIVISIONS
              </h4>
              <div className="w-8 h-0.5 bg-[#2CB51D] mt-2"></div>
            </div>

            <ul className="space-y-3 font-sans text-[15px] sm:text-[16px] leading-[1.6] pt-1">
              <li>
                <Link
                  to="/services/xpress"
                  className="text-slate-300 hover:text-[#2CB51D] focus:text-[#2CB51D] transition-colors duration-200 flex items-center gap-2.5 group focus:outline-none focus-visible:ring-1 focus-visible:ring-[#2CB51D] rounded-xs"
                >
                  <Truck className="w-4 h-4 text-[#2CB51D] shrink-0" />
                  <span>XPRESS (Freight)</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/services/xfers"
                  className="text-slate-300 hover:text-[#2CB51D] focus:text-[#2CB51D] transition-colors duration-200 flex items-center gap-2.5 group focus:outline-none focus-visible:ring-1 focus-visible:ring-[#2CB51D] rounded-xs"
                >
                  <ArrowLeftRight className="w-4 h-4 text-[#2CB51D] shrink-0" />
                  <span>XFERS (Transfers & Storage)</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/services/xtras"
                  className="text-slate-300 hover:text-[#2CB51D] focus:text-[#2CB51D] transition-colors duration-200 flex items-center gap-2.5 group focus:outline-none focus-visible:ring-1 focus-visible:ring-[#2CB51D] rounded-xs"
                >
                  <Wrench className="w-4 h-4 text-[#2CB51D] shrink-0" />
                  <span>XTRAS (Tires & Washouts)</span>
                </Link>
              </li>
              <li className="pt-1">
                <Link
                  to="/services"
                  className="text-[#2CB51D] hover:text-[#259b18] transition-colors duration-200 text-[14.5px] font-bold inline-flex items-center gap-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#2CB51D] rounded-xs"
                >
                  <span>All Divisions Overview</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className="space-y-4">
            <div>
              <h4 className="font-display text-[19px] sm:text-[20px] font-bold text-white tracking-[0.035em] uppercase leading-[1.2]">
                COMPANY
              </h4>
              <div className="w-8 h-0.5 bg-[#2CB51D] mt-2"></div>
            </div>

            <ul className="space-y-3 font-sans text-[15px] sm:text-[16px] leading-[1.6] pt-1">
              <li>
                <Link
                  to="/"
                  className="text-slate-300 hover:text-[#2CB51D] focus:text-[#2CB51D] transition-colors duration-200 block focus:outline-none focus-visible:ring-1 focus-visible:ring-[#2CB51D] rounded-xs"
                >
                  Home Page
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-slate-300 hover:text-[#2CB51D] focus:text-[#2CB51D] transition-colors duration-200 block focus:outline-none focus-visible:ring-1 focus-visible:ring-[#2CB51D] rounded-xs"
                >
                  Our Story & Mission
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-slate-300 hover:text-[#2CB51D] focus:text-[#2CB51D] transition-colors duration-200 block focus:outline-none focus-visible:ring-1 focus-visible:ring-[#2CB51D] rounded-xs"
                >
                  Complete Network
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-slate-300 hover:text-[#2CB51D] focus:text-[#2CB51D] transition-colors duration-200 block focus:outline-none focus-visible:ring-1 focus-visible:ring-[#2CB51D] rounded-xs"
                >
                  Find Us & Contact
                </Link>
              </li>
              <li>
                <button
                  onClick={onRequestQuote}
                  className="text-slate-300 hover:text-[#2CB51D] focus:text-[#2CB51D] transition-colors duration-200 text-left block cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-[#2CB51D] rounded-xs"
                >
                  Request Rate Quote
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal Row */}
        <div className="mt-8 sm:mt-10 pt-6 sm:pt-7 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-[14px] sm:text-[14.5px] font-sans text-slate-400 leading-[1.5] gap-4">
          <div className="text-center md:text-left">
            © {currentYear} {SITE_CONFIG.companyName}. All Rights Reserved. Built to Keep America Moving.
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-7">
            <span className="hover:text-slate-200 transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-200 transition-colors cursor-pointer">Terms of Service</span>
            <span className="hover:text-slate-200 transition-colors cursor-pointer">DOT Compliance</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
