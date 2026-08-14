import React from 'react';
import { Link } from 'react-router-dom';
import { GnxLogo } from './GnxLogo';
import { SITE_CONFIG } from '../../data/siteData';
import { ShieldCheck, Truck, ArrowLeftRight, Wrench, ChevronRight } from 'lucide-react';

interface FooterProps {
  onRequestQuote: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onRequestQuote }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-[#081220] to-[#040810] text-white border-t-2 border-[#2CB51D] pt-16 sm:pt-20 pb-12 sm:pb-14 relative overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Main 4-Column Desktop Grid with Unified Top Baseline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_0.85fr_1.1fr] gap-10 md:gap-12 lg:gap-14 xl:gap-16 items-start">
          {/* Column 1: Cohesive Brand Block */}
          <div className="space-y-6">
            <Link
              to="/"
              className="inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2CB51D] rounded-xs"
              aria-label="Gulf Northern X Homepage"
            >
              <GnxLogo
                className="w-[240px] sm:w-[270px] lg:w-[290px] h-auto"
                alt="Gulf Northern X"
              />
            </Link>

            <p className="text-slate-300 font-sans text-[15px] sm:text-[16px] leading-[1.7] max-w-[410px]">
              Gulf Northern X is a premier United States transportation and commercial vehicle support network. Connecting freight movement, specialized equipment transfers, cold storage, tires, trailer washouts, and maintenance under one dependable enterprise identity.
            </p>

            <div className="flex items-center gap-3 text-[14px] font-sans text-slate-400">
              <ShieldCheck className="w-4 h-4 text-[#2CB51D] shrink-0" />
              <span>Fully Licensed DOT Commercial Carrier & Support Network</span>
            </div>

            <div className="pt-1">
              <button
                onClick={onRequestQuote}
                className="min-h-[48px] px-6 py-3 bg-[#2CB51D] hover:bg-[#259b18] text-white font-display text-[16px] sm:text-[17px] font-bold uppercase rounded-xs transition-colors shadow-md inline-flex items-center gap-2 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <span>REQUEST A QUOTE TODAY</span>
                <span className="text-lg">→</span>
              </button>
            </div>
          </div>

          {/* Column 2: Service Divisions */}
          <div className="space-y-4">
            <div>
              <h4 className="font-display text-[19px] sm:text-[20px] font-bold text-white tracking-[0.035em] uppercase leading-tight">
                SERVICE DIVISIONS
              </h4>
              <div className="w-8 h-0.5 bg-[#2CB51D] mt-2.5"></div>
            </div>

            <ul className="space-y-3.5 font-sans text-[15px] sm:text-[16px] leading-[1.6] pt-1">
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
              <li className="pt-1.5">
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

          {/* Column 3: Company Navigation */}
          <div className="space-y-4">
            <div>
              <h4 className="font-display text-[19px] sm:text-[20px] font-bold text-white tracking-[0.035em] uppercase leading-tight">
                COMPANY
              </h4>
              <div className="w-8 h-0.5 bg-[#2CB51D] mt-2.5"></div>
            </div>

            <ul className="space-y-3.5 font-sans text-[15px] sm:text-[16px] leading-[1.6] pt-1">
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

          {/* Column 4: Service Enquiries Defined Callout Panel */}
          <div className="space-y-4">
            <div>
              <h4 className="font-display text-[19px] sm:text-[20px] font-bold text-white tracking-[0.035em] uppercase leading-tight">
                SERVICE ENQUIRIES
              </h4>
              <div className="w-8 h-0.5 bg-[#2CB51D] mt-2.5"></div>
            </div>

            <div className="bg-[#0C1A30]/80 border border-slate-700/60 rounded-[12px] p-6 sm:p-7 space-y-4 shadow-sm">
              <p className="font-sans text-[15px] text-slate-300 leading-[1.65]">
                Submit your transportation, transfer, cold storage or maintenance request online through our quote system.
              </p>

              <button
                onClick={onRequestQuote}
                className="w-full min-h-[48px] py-3.5 px-4 bg-[#2CB51D] hover:bg-[#259b18] text-white font-display text-[15px] sm:text-[16px] font-bold uppercase rounded-xs transition-colors text-center flex items-center justify-center gap-2 shadow-md cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <span>ONLINE QUOTE FORM</span>
                <span>→</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="mt-14 pt-7 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-[14px] sm:text-[14.5px] font-sans text-slate-400 leading-[1.5] gap-4">
          <div className="text-center md:text-left">
            © {currentYear} {SITE_CONFIG.companyName}. All Rights Reserved. Built to Keep America Moving.
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-7">
            <span className="hover:text-slate-200 transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-200 transition-colors cursor-pointer">Terms of Service</span>
            <span className="hover:text-slate-200 transition-colors cursor-pointer">DOT Compliance</span>
            <span className="hover:text-slate-200 transition-colors cursor-pointer">Site Map</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
