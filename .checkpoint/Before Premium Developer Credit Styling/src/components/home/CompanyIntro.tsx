import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Layers, Headphones, ShieldCheck } from 'lucide-react';

export const CompanyIntro: React.FC = () => {
  return (
    <section id="company-intro" className="w-full bg-[#F8FAF9] text-[#0A0D0C] py-24 lg:py-32 overflow-hidden">
      {/* Edge-to-Edge Split Composition */}
      <div className="w-full max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center px-6 lg:px-12">
        {/* Left Column: Authentic Commercial Transportation Photography */}
        <div className="lg:col-span-7">
          <div className="overflow-hidden shadow-2xl rounded-xs border-l-4 border-[#2CB51D]">
            <img
              src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1600&q=85"
              alt="Gulf Northern X Commercial Freight Terminal Operations"
              className="w-full h-[480px] lg:h-[580px] object-cover object-center"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Right Column: ~45% Written Content */}
        <div className="lg:col-span-5 space-y-8">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className="h-[2px] w-10 bg-[#2CB51D]"></span>
            <span className="font-sans text-xs sm:text-sm font-extrabold tracking-[0.25em] text-[#062B63] uppercase">
              WHY GULF NORTHERN X?
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-display text-4xl sm:text-5xl lg:text-[56px] font-black uppercase text-[#062B63] leading-[0.95] tracking-tight">
            YOUR COMPLETE TRANSPORTATION AND SERVICE PARTNER
          </h2>

          {/* Body Copy */}
          <p className="font-sans text-lg sm:text-xl text-slate-800 leading-relaxed font-normal">
            Gulf Northern X connects essential transportation, transfer and commercial vehicle services under one trusted identity. From moving freight to supporting equipment and facilities, our divisions are structured to keep customers and operations moving efficiently.
          </p>

          {/* CTA Link */}
          <div className="pt-2">
            <Link
              to="/about"
              className="inline-flex items-center gap-3 font-display text-2xl font-black uppercase tracking-wider text-[#062B63] hover:text-[#2CB51D] transition-colors border-b-2 border-[#2CB51D] pb-1 group"
            >
              <span>DISCOVER OUR STORY</span>
              <ArrowRight className="w-6 h-6 text-[#2CB51D] group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* 3 Restrained Qualitative Proof Points */}
          <div className="pt-6 border-t border-slate-200 grid grid-cols-1 gap-4 font-sans">
            <div className="flex items-center gap-3 py-2 border-b border-slate-200/60">
              <Layers className="w-5 h-5 text-[#2CB51D] shrink-0" />
              <span className="font-bold text-base text-[#062B63] uppercase tracking-wide">
                Connected Service Divisions
              </span>
            </div>

            <div className="flex items-center gap-3 py-2 border-b border-slate-200/60">
              <Headphones className="w-5 h-5 text-[#2CB51D] shrink-0" />
              <span className="font-bold text-base text-[#062B63] uppercase tracking-wide">
                Customer-Focused Support
              </span>
            </div>

            <div className="flex items-center gap-3 py-2">
              <ShieldCheck className="w-5 h-5 text-[#2CB51D] shrink-0" />
              <span className="font-bold text-base text-[#062B63] uppercase tracking-wide">
                Dependable Operations
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

