import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, ShieldCheck } from 'lucide-react';

interface ServiceDivisionsProps {
  onRequestQuote: (division?: 'xpress' | 'xfers' | 'xtras') => void;
}

export const ServiceDivisions: React.FC<ServiceDivisionsProps> = ({ onRequestQuote }) => {
  return (
    <section id="service-divisions" className="w-full bg-white text-[#0A0D0C]">
      {/* 1. XPRESS DIVISION - HIGHWAY FREIGHT & LEASING */}
      <div className="w-full py-24 lg:py-32 border-t border-slate-200">
        <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Clean Highway Freight & Semi Truck Photography */}
          <div className="lg:col-span-7 overflow-hidden shadow-2xl rounded-xs border-l-4 border-[#062B63]">
            <img
              src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1600&q=85"
              alt="Xpress Highway Freight Semi-Truck and Trailer"
              className="w-full h-[460px] lg:h-[540px] object-cover object-center"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Right: ~42% Content */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 font-mono text-xs font-black text-[#2CB51D] uppercase tracking-[0.25em]">
                <span className="w-2 h-2 rounded-full bg-[#2CB51D]"></span>
                <span>DIVISION 01</span>
              </div>
              <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl font-black uppercase text-[#062B63] tracking-tight">
                XPRESS
              </h2>
              <p className="font-sans text-xl font-medium text-slate-800 leading-snug">
                Over-the-road freight transportation, refrigerated haulage, dry van shipping, and commercial vehicle leasing options.
              </p>
            </div>

            {/* Selected Services Grid */}
            <div className="pt-4 border-t border-slate-200">
              <div className="text-xs font-sans font-extrabold text-slate-500 uppercase tracking-widest mb-4">
                Core Capabilities:
              </div>
              <ul className="grid grid-cols-2 gap-x-6 gap-y-3 font-sans text-base text-slate-800">
                <li className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#062B63]"></span>
                  <span className="font-semibold">Refrigerated Freight</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#062B63]"></span>
                  <span className="font-semibold">Dry-Box Transport</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#062B63]"></span>
                  <span className="font-semibold">Flatbed Solutions</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#062B63]"></span>
                  <span className="font-semibold">Freight Brokerage</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#062B63]"></span>
                  <span className="font-semibold">Truck Leasing</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#062B63]"></span>
                  <span className="font-semibold">Trailer Rental</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                to="/services/xpress"
                className="px-8 py-4 bg-[#062B63] hover:bg-[#0B3F8C] text-white font-display text-xl font-black uppercase tracking-wider rounded-xs transition-colors shadow-md inline-flex items-center gap-2 group"
              >
                <span>EXPLORE XPRESS</span>
                <ArrowRight className="w-5 h-5 text-[#2CB51D] group-hover:translate-x-1 transition-transform" />
              </Link>
              <button
                onClick={() => onRequestQuote('xpress')}
                className="px-6 py-4 font-display text-lg font-bold text-[#062B63] hover:text-[#2CB51D] uppercase tracking-wider underline"
              >
                Request Quote
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 2. XFERS DIVISION - TRANSFERS & STORAGE (Distinct Layout & Off-White Background) */}
      <div className="w-full py-24 lg:py-32 bg-[#F4F8F6] border-t border-slate-200">
        <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: ~42% Content */}
          <div className="lg:col-span-5 space-y-8 order-2 lg:order-1">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 font-mono text-xs font-black text-[#087F5B] uppercase tracking-[0.25em]">
                <span className="w-2 h-2 rounded-full bg-[#087F5B]"></span>
                <span>DIVISION 02</span>
              </div>
              <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl font-black uppercase text-[#062B63] tracking-tight">
                XFERS
              </h2>
              <p className="font-sans text-xl font-medium text-slate-800 leading-snug">
                Specialized transfer operations, field equipment staging, pump systems, and climate-controlled or dry warehouse storage.
              </p>
            </div>

            {/* Selected Capabilities */}
            <div className="pt-4 border-t border-slate-300/80">
              <div className="text-xs font-sans font-extrabold text-slate-500 uppercase tracking-widest mb-4">
                Core Capabilities:
              </div>
              <ul className="grid grid-cols-2 gap-x-6 gap-y-3 font-sans text-base text-slate-800">
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#087F5B] shrink-0" />
                  <span className="font-semibold">Specialized Pull-Outs</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#087F5B] shrink-0" />
                  <span className="font-semibold">Field Equipment Setups</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#087F5B] shrink-0" />
                  <span className="font-semibold">Industrial Pumping</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#087F5B] shrink-0" />
                  <span className="font-semibold">Cold Storage Staging</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#087F5B] shrink-0" />
                  <span className="font-semibold">Dry Warehousing</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#087F5B] shrink-0" />
                  <span className="font-semibold">Escort Support</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                to="/services/xfers"
                className="px-8 py-4 bg-[#087F5B] hover:bg-[#062B63] text-white font-display text-xl font-black uppercase tracking-wider rounded-xs transition-colors shadow-md inline-flex items-center gap-2 group"
              >
                <span>EXPLORE XFERS</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button
                onClick={() => onRequestQuote('xfers')}
                className="px-6 py-4 font-display text-lg font-bold text-[#062B63] hover:text-[#2CB51D] uppercase tracking-wider underline"
              >
                Request Quote
              </button>
            </div>
          </div>

          {/* Right: Clean Warehouse & Industrial Equipment Staging Photography */}
          <div className="lg:col-span-7 overflow-hidden shadow-2xl rounded-xs border-r-4 border-[#087F5B] order-1 lg:order-2">
            <img
              src="https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1600&q=85"
              alt="Xfers Warehouse Staging and Industrial Storage"
              className="w-full h-[460px] lg:h-[540px] object-cover object-center"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>

      {/* 3. XTRAS DIVISION - COMMERCIAL VEHICLE CARE & WASHOUTS */}
      <div className="w-full py-24 lg:py-32 border-t border-slate-200">
        <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Clean Commercial Tire & Truck Service Facility Photography */}
          <div className="lg:col-span-7 overflow-hidden shadow-2xl rounded-xs border-l-4 border-[#2CB51D]">
            <img
              src="https://images.unsplash.com/photo-1578844251758-2f71da64c96f?auto=format&fit=crop&w=1600&q=85"
              alt="Xtras Commercial Truck Tires and Service Center"
              className="w-full h-[460px] lg:h-[540px] object-cover object-center"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Right: ~42% Content */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 font-mono text-xs font-black text-[#2CB51D] uppercase tracking-[0.25em]">
                <span className="w-2 h-2 rounded-full bg-[#2CB51D]"></span>
                <span>DIVISION 03</span>
              </div>
              <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl font-black uppercase text-[#062B63] tracking-tight">
                XTRAS
              </h2>
              <p className="font-sans text-xl font-medium text-slate-800 leading-snug">
                Essential commercial vehicle care including heavy-duty truck tires, certified trailer washouts, mobile repairs, and batteries.
              </p>
            </div>

            {/* Selected Capabilities */}
            <div className="pt-4 border-t border-slate-200">
              <div className="text-xs font-sans font-extrabold text-slate-500 uppercase tracking-widest mb-4">
                Core Capabilities:
              </div>
              <ul className="grid grid-cols-2 gap-x-6 gap-y-3 font-sans text-base text-slate-800">
                <li className="flex items-center gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-[#2CB51D] shrink-0" />
                  <span className="font-semibold">Commercial Tires</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-[#2CB51D] shrink-0" />
                  <span className="font-semibold">Tire Disposal & Recycling</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-[#2CB51D] shrink-0" />
                  <span className="font-semibold">Trailer Washouts</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-[#2CB51D] shrink-0" />
                  <span className="font-semibold">Vehicle Maintenance</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-[#2CB51D] shrink-0" />
                  <span className="font-semibold">Heavy-Duty Batteries</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-[#2CB51D] shrink-0" />
                  <span className="font-semibold">Facility Support</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                to="/services/xtras"
                className="px-8 py-4 bg-[#062B63] hover:bg-[#0B3F8C] text-white font-display text-xl font-black uppercase tracking-wider rounded-xs transition-colors shadow-md inline-flex items-center gap-2 group"
              >
                <span>EXPLORE XTRAS</span>
                <ArrowRight className="w-5 h-5 text-[#2CB51D] group-hover:translate-x-1 transition-transform" />
              </Link>
              <button
                onClick={() => onRequestQuote('xtras')}
                className="px-6 py-4 font-display text-lg font-bold text-[#062B63] hover:text-[#2CB51D] uppercase tracking-wider underline"
              >
                Request Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


