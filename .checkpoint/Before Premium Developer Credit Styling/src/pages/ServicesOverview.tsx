import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SERVICE_DIVISIONS } from '../data/siteData';
import {
  Truck,
  ArrowLeftRight,
  Wrench,
  CheckCircle2,
  ChevronRight,
  FileText
} from 'lucide-react';

interface ServicesOverviewProps {
  onRequestQuote: (division?: 'xpress' | 'xfers' | 'xtras') => void;
}

export const ServicesOverview: React.FC<ServicesOverviewProps> = ({ onRequestQuote }) => {
  useEffect(() => {
    document.title = 'Commercial Divisions & Services | Gulf Northern X';
    window.scrollTo(0, 0);
  }, []);

  const xpressDivision = SERVICE_DIVISIONS.find((d) => d.id === 'xpress') || SERVICE_DIVISIONS[0];
  const xfersDivision = SERVICE_DIVISIONS.find((d) => d.id === 'xfers') || SERVICE_DIVISIONS[1];
  const xtrasDivision = SERVICE_DIVISIONS.find((d) => d.id === 'xtras') || SERVICE_DIVISIONS[2];

  return (
    <main className="pt-24 sm:pt-28 md:pt-32 lg:pt-36 xl:pt-40 bg-white text-slate-800 min-h-screen">
      {/* 1. Services Hero Banner */}
      <section className="relative min-h-[340px] md:min-h-[380px] lg:min-h-[400px] flex items-center bg-[#062B63] text-white overflow-hidden">
        {/* Background Operations Asset */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1920&q=80"
            alt="Gulf Northern X Commercial Logistics Fleet"
            className="w-full h-full object-cover object-center opacity-25"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#062B63]/98 via-[#062B63]/85 to-[#0B3F8C]/65"></div>
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-[#2CB51D] font-display font-bold tracking-[0.25em] uppercase text-xs sm:text-sm">
              <span className="w-2 h-2 rounded-full bg-[#2CB51D]"></span>
              <span>FULL SERVICE NETWORK OVERVIEW</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black italic text-white uppercase tracking-tight leading-[1.05]">
              COMMERCIAL DIVISIONS & <span className="text-[#2CB51D]">SERVICES</span>
            </h1>

            <p className="font-sans text-slate-200 text-base sm:text-lg lg:text-[19px] leading-relaxed border-l-3 border-[#2CB51D] pl-5 mt-4">
              Choose the specific service division suited to your freight shipment, field transfer setup, or commercial vehicle maintenance requirements.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Services Introductory Section (Clean White Background) */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="text-[#2CB51D] font-display font-bold text-xs sm:text-sm tracking-[0.25em] uppercase">
              STRUCTURED FOR COMPLETE FLEET SUPPORT
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black italic text-[#062B63] uppercase leading-tight">
              WHICH DIVISION DO YOU NEED?
            </h2>
            <div className="w-16 h-1 bg-[#2CB51D] rounded-full mx-auto my-2"></div>
            <p className="font-sans text-slate-600 text-base sm:text-lg leading-relaxed pt-1">
              Review our three specialized operating divisions below for fast routing to the right dispatch team.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Division 1: XPRESS (White Background) */}
      <section id="xpress-division" className="py-16 lg:py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2">
                <span className="text-xs font-sans font-extrabold px-3 py-1.5 rounded-full bg-[#0B3F8C]/10 text-[#0B3F8C] tracking-wider uppercase">
                  {xpressDivision.badge}
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black italic text-[#062B63] uppercase">
                  {xpressDivision.title}
                </h3>
                <h4 className="font-display text-lg sm:text-xl font-bold text-[#0B3F8C] uppercase tracking-wide">
                  {xpressDivision.heroHeadline}
                </h4>
              </div>

              <p className="font-sans text-slate-700 text-base sm:text-[17px] leading-relaxed max-w-[65ch]">
                {xpressDivision.description}
              </p>

              {/* Service Features Included */}
              <div className="pt-3">
                <div className="text-xs font-sans font-bold text-[#062B63] uppercase tracking-widest mb-3">
                  Services Included in {xpressDivision.title}:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {xpressDivision.detailedServices.map((item) => (
                    <div
                      key={item.id}
                      className="p-3.5 bg-slate-50 border border-slate-200/80 rounded-[10px] hover:border-[#2CB51D]/60 transition-colors"
                    >
                      <div className="font-display text-base font-bold text-[#062B63] flex items-center gap-2 uppercase">
                        <CheckCircle2 className="w-4 h-4 text-[#2CB51D] shrink-0" />
                        <span>{item.name}</span>
                      </div>
                      <p className="font-sans text-xs text-slate-600 mt-1 leading-relaxed line-clamp-2">
                        {item.shortDescription}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  to={`/services/${xpressDivision.id}`}
                  className="min-h-[48px] px-6 py-3 bg-[#062B63] hover:bg-[#0B3F8C] text-white font-display text-base sm:text-lg font-bold uppercase rounded-xs transition-colors inline-flex items-center gap-2 shadow-sm"
                >
                  <span>VIEW DETAILED {xpressDivision.title} PAGE</span>
                  <ChevronRight className="w-4 h-4 text-[#2CB51D]" />
                </Link>

                <button
                  onClick={() => onRequestQuote('xpress')}
                  className="min-h-[48px] px-6 py-3 bg-[#2CB51D] hover:bg-[#259b18] text-white font-display text-base sm:text-lg font-black uppercase tracking-wider rounded-xs transition-colors shadow-md"
                >
                  REQUEST {xpressDivision.title} RATE QUOTE
                </button>
              </div>
            </div>

            {/* Visual Column */}
            <div className="lg:col-span-5 relative">
              <div className="relative z-10 rounded-[14px] overflow-hidden border border-slate-200/90 shadow-xl shadow-slate-900/10 bg-white">
                <img
                  src={xpressDivision.heroImage}
                  alt="Gulf Northern Xpress Commercial Fleet"
                  className="w-full h-[380px] sm:h-[420px] lg:h-[450px] object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-3 -right-3 w-32 h-32 bg-[#2CB51D]/15 rounded-2xl -z-0"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Division 2: XFERS (Cool Light-Grey Background) */}
      <section id="xfers-division" className="py-16 lg:py-24 bg-[#F4F7F9] border-y border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Visual Column (Left on desktop) */}
            <div className="lg:col-span-5 order-2 lg:order-1 relative">
              <div className="relative z-10 rounded-[14px] overflow-hidden border border-slate-200/90 shadow-xl shadow-slate-900/10 bg-white">
                <img
                  src={xfersDivision.heroImage}
                  alt="Gulf Northern Xfers Industrial Operations"
                  className="w-full h-[380px] sm:h-[420px] lg:h-[450px] object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-3 -left-3 w-32 h-32 bg-[#087F5B]/15 rounded-2xl -z-0"></div>
            </div>

            {/* Content Column (Right on desktop) */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
              <div className="inline-flex items-center gap-2">
                <span className="text-xs font-sans font-extrabold px-3 py-1.5 rounded-full bg-[#087F5B]/10 text-[#087F5B] tracking-wider uppercase">
                  {xfersDivision.badge}
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black italic text-[#062B63] uppercase">
                  {xfersDivision.title}
                </h3>
                <h4 className="font-display text-lg sm:text-xl font-bold text-[#087F5B] uppercase tracking-wide">
                  {xfersDivision.heroHeadline}
                </h4>
              </div>

              <p className="font-sans text-slate-700 text-base sm:text-[17px] leading-relaxed max-w-[65ch]">
                {xfersDivision.description}
              </p>

              {/* Service Features Included */}
              <div className="pt-3">
                <div className="text-xs font-sans font-bold text-[#062B63] uppercase tracking-widest mb-3">
                  Services Included in {xfersDivision.title}:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {xfersDivision.detailedServices.map((item) => (
                    <div
                      key={item.id}
                      className="p-3.5 bg-white border border-slate-200/80 rounded-[10px] hover:border-[#2CB51D]/60 transition-colors shadow-xs"
                    >
                      <div className="font-display text-base font-bold text-[#062B63] flex items-center gap-2 uppercase">
                        <CheckCircle2 className="w-4 h-4 text-[#2CB51D] shrink-0" />
                        <span>{item.name}</span>
                      </div>
                      <p className="font-sans text-xs text-slate-600 mt-1 leading-relaxed line-clamp-2">
                        {item.shortDescription}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  to={`/services/${xfersDivision.id}`}
                  className="min-h-[48px] px-6 py-3 bg-[#062B63] hover:bg-[#0B3F8C] text-white font-display text-base sm:text-lg font-bold uppercase rounded-xs transition-colors inline-flex items-center gap-2 shadow-sm"
                >
                  <span>VIEW DETAILED {xfersDivision.title} PAGE</span>
                  <ChevronRight className="w-4 h-4 text-[#2CB51D]" />
                </Link>

                <button
                  onClick={() => onRequestQuote('xfers')}
                  className="min-h-[48px] px-6 py-3 bg-[#2CB51D] hover:bg-[#259b18] text-white font-display text-base sm:text-lg font-black uppercase tracking-wider rounded-xs transition-colors shadow-md"
                >
                  REQUEST {xfersDivision.title} RATE QUOTE
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Division 3: XTRAS (White Background) */}
      <section id="xtras-division" className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2">
                <span className="text-xs font-sans font-extrabold px-3 py-1.5 rounded-full bg-[#062B63]/10 text-[#062B63] tracking-wider uppercase">
                  {xtrasDivision.badge}
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black italic text-[#062B63] uppercase">
                  {xtrasDivision.title}
                </h3>
                <h4 className="font-display text-lg sm:text-xl font-bold text-[#062B63] uppercase tracking-wide">
                  {xtrasDivision.heroHeadline}
                </h4>
              </div>

              <p className="font-sans text-slate-700 text-base sm:text-[17px] leading-relaxed max-w-[65ch]">
                {xtrasDivision.description}
              </p>

              {/* Service Features Included */}
              <div className="pt-3">
                <div className="text-xs font-sans font-bold text-[#062B63] uppercase tracking-widest mb-3">
                  Services Included in {xtrasDivision.title}:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {xtrasDivision.detailedServices.map((item) => (
                    <div
                      key={item.id}
                      className="p-3.5 bg-slate-50 border border-slate-200/80 rounded-[10px] hover:border-[#2CB51D]/60 transition-colors"
                    >
                      <div className="font-display text-base font-bold text-[#062B63] flex items-center gap-2 uppercase">
                        <CheckCircle2 className="w-4 h-4 text-[#2CB51D] shrink-0" />
                        <span>{item.name}</span>
                      </div>
                      <p className="font-sans text-xs text-slate-600 mt-1 leading-relaxed line-clamp-2">
                        {item.shortDescription}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  to={`/services/${xtrasDivision.id}`}
                  className="min-h-[48px] px-6 py-3 bg-[#062B63] hover:bg-[#0B3F8C] text-white font-display text-base sm:text-lg font-bold uppercase rounded-xs transition-colors inline-flex items-center gap-2 shadow-sm"
                >
                  <span>VIEW DETAILED {xtrasDivision.title} PAGE</span>
                  <ChevronRight className="w-4 h-4 text-[#2CB51D]" />
                </Link>

                <button
                  onClick={() => onRequestQuote('xtras')}
                  className="min-h-[48px] px-6 py-3 bg-[#2CB51D] hover:bg-[#259b18] text-white font-display text-base sm:text-lg font-black uppercase tracking-wider rounded-xs transition-colors shadow-md"
                >
                  REQUEST {xtrasDivision.title} RATE QUOTE
                </button>
              </div>
            </div>

            {/* Visual Column */}
            <div className="lg:col-span-5 relative">
              <div className="relative z-10 rounded-[14px] overflow-hidden border border-slate-200/90 shadow-xl shadow-slate-900/10 bg-white">
                <img
                  src={xtrasDivision.heroImage}
                  alt="Gulf Northern Xtras Commercial Support"
                  className="w-full h-[380px] sm:h-[420px] lg:h-[450px] object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-3 -right-3 w-32 h-32 bg-[#2CB51D]/15 rounded-2xl -z-0"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Coordinated Network Strip (Pale Blue-Grey) */}
      <section className="py-10 sm:py-12 bg-[#F4F7F9] border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-200/80">
            <div className="flex items-center justify-center gap-4 py-4 md:py-0 px-6 text-center md:text-left">
              <div className="p-3 bg-white border border-slate-200/80 rounded-xl shadow-xs text-[#062B63]">
                <Truck className="w-6 h-6 text-[#2CB51D]" />
              </div>
              <div>
                <div className="font-display text-lg sm:text-xl font-bold text-[#062B63] uppercase">
                  One Coordinated Network
                </div>
                <div className="text-xs font-sans text-slate-500 font-medium">
                  Single-partner commercial accountability
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-4 py-4 md:py-0 px-6 text-center md:text-left">
              <div className="p-3 bg-white border border-slate-200/80 rounded-xl shadow-xs text-[#062B63]">
                <ArrowLeftRight className="w-6 h-6 text-[#2CB51D]" />
              </div>
              <div>
                <div className="font-display text-lg sm:text-xl font-bold text-[#062B63] uppercase">
                  Three Specialized Divisions
                </div>
                <div className="text-xs font-sans text-slate-500 font-medium">
                  Xpress, Xfers & Xtras integrated
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-4 py-4 md:py-0 px-6 text-center md:text-left">
              <div className="p-3 bg-white border border-slate-200/80 rounded-xl shadow-xs text-[#062B63]">
                <Wrench className="w-6 h-6 text-[#2CB51D]" />
              </div>
              <div>
                <div className="font-display text-lg sm:text-xl font-bold text-[#062B63] uppercase">
                  Dependable Commercial Support
                </div>
                <div className="text-xs font-sans text-slate-500 font-medium">
                  24/7/365 nationwide operations
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Final CTA Band (Deep Navy on White Canvas) */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#062B63] text-white rounded-2xl p-8 sm:p-12 lg:p-14 shadow-2xl relative overflow-hidden border border-white/10 flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Top green accent bar */}
            <div className="absolute top-0 left-0 w-32 h-1.5 bg-[#2CB51D]"></div>
            {/* Subtle corner graphic glow */}
            <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-[#2CB51D]/10 rounded-full blur-2xl pointer-events-none"></div>

            <div className="space-y-3 text-center lg:text-left max-w-xl">
              <div className="text-[#2CB51D] font-display font-bold text-xs sm:text-sm tracking-[0.25em] uppercase">
                READY TO MOVE FORWARD
              </div>
              <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black italic uppercase tracking-tight leading-tight">
                WORK WITH GULF NORTHERN X
              </h3>
              <p className="font-sans text-slate-200 text-base sm:text-lg leading-relaxed">
                Contact our dispatch desk or request a customized service rate quote today.
              </p>
            </div>

            <button
              onClick={() => onRequestQuote()}
              className="min-h-[48px] px-8 sm:px-10 py-4 bg-[#2CB51D] hover:bg-[#259b18] text-white font-display text-lg sm:text-xl font-black uppercase tracking-wider rounded-xs transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-3 shrink-0 group w-full sm:w-auto"
            >
              <FileText className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>REQUEST A QUOTE</span>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};
