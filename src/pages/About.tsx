import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Truck,
  ArrowLeftRight,
  Wrench,
  ShieldCheck,
  Target,
  HeartHandshake,
  FileText,
  ChevronRight
} from 'lucide-react';

interface AboutProps {
  onRequestQuote: () => void;
}

export const About: React.FC<AboutProps> = ({ onRequestQuote }) => {
  useEffect(() => {
    document.title = 'Our Story & Mission | Gulf Northern X';
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-24 sm:pt-28 md:pt-32 lg:pt-36 xl:pt-40 bg-white text-slate-800 min-h-screen">
      {/* 1. About-Page Hero Banner */}
      <section className="relative min-h-[340px] md:min-h-[380px] lg:min-h-[400px] flex items-center bg-[#062B63] text-white overflow-hidden">
        {/* Background Image with directional overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1920&q=80"
            alt="Gulf Northern X Commercial Freight Terminal"
            className="w-full h-full object-cover object-center opacity-25"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#062B63]/98 via-[#062B63]/85 to-[#0B3F8C]/65"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-[#2CB51D] font-display font-bold tracking-[0.25em] uppercase text-xs sm:text-sm">
              <span className="w-2 h-2 rounded-full bg-[#2CB51D]"></span>
              <span>ABOUT GULF NORTHERN X</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black italic text-white uppercase tracking-tight leading-[1.05]">
              OUR STORY & <span className="text-[#2CB51D]">MISSION</span>
            </h1>

            <p className="font-sans text-slate-200 text-base sm:text-lg lg:text-[19px] leading-relaxed border-l-3 border-[#2CB51D] pl-5 mt-4">
              Unifying transportation, equipment transfers, cold storage, tires, washouts and vehicle support into one dependable American network.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Company Story Section (White Background) */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Story Text Column (Always first on mobile) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-[#2CB51D] font-display font-bold tracking-[0.25em] uppercase text-xs sm:text-sm">
                <span>FOUNDATION & PURPOSE</span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black italic text-[#062B63] uppercase leading-[1.15]">
                A MODERN APPROACH TO <br />
                <span className="text-[#2CB51D]">COMMERCIAL TRANSPORTATION</span>
              </h2>

              <div className="w-16 h-1 bg-[#2CB51D] rounded-full"></div>

              <div className="space-y-4 text-slate-700 font-sans text-[17px] leading-[1.7] max-w-[65ch]">
                <p>
                  Gulf Northern X was created to solve a fundamental challenge in commercial fleet operations: the fragmentation of essential services. Historically, fleet managers and shipping coordinators had to manage separate vendors for over-the-road freight, cold storage staging, trailer washouts, tire inventory, and mobile mechanic repairs.
                </p>

                <p>
                  By bringing three distinct divisions—Xpress, Xfers, and Xtras—under one operational umbrella, Gulf Northern X provides a single accountable partner. We ensure vehicles stay compliant, drivers stay supported, and shipments arrive on schedule.
                </p>
              </div>
            </div>

            {/* Transport Image in Refined Frame */}
            <div className="lg:col-span-5 relative">
              <div className="relative z-10 rounded-[14px] overflow-hidden border border-slate-200/90 shadow-xl shadow-slate-900/10 bg-white">
                <img
                  src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1200&q=80"
                  alt="Gulf Northern X Freight Fleet on Highway"
                  className="w-full h-[360px] sm:h-[400px] lg:h-[430px] object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Small green offset accent behind bottom-right corner */}
              <div className="absolute -bottom-3 -right-3 w-32 h-32 bg-[#2CB51D]/15 rounded-2xl -z-0"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Three Divisions Section (Soft Grey Background) */}
      <section className="py-20 lg:py-28 bg-[#F4F7F9] border-y border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Centered Introduction */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="text-[#2CB51D] font-display font-bold text-xs sm:text-sm tracking-[0.25em] uppercase">
              INTEGRATED FLEET CAPABILITIES
            </div>
            <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black italic text-[#062B63] uppercase">
              THE THREE PILLARS OF GULF NORTHERN X
            </h3>
            <p className="font-sans text-slate-600 text-base sm:text-lg">
              Structured to handle every phase of commercial logistics and equipment care.
            </p>
          </div>

          {/* Three Equal White Division Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {/* Card 1: XPRESS */}
            <div className="bg-white border border-slate-200/90 rounded-[14px] p-7 sm:p-8 shadow-sm hover:shadow-xl hover:border-[#2CB51D] transition-all duration-300 relative overflow-hidden flex flex-col justify-between h-full hover:-translate-y-1 motion-reduce:hover:translate-y-0 group before:absolute before:top-0 before:left-0 before:right-0 before:h-1.5 before:bg-[#2CB51D]">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3.5 bg-[#0B3F8C]/10 text-[#0B3F8C] rounded-lg group-hover:bg-[#0B3F8C] group-hover:text-white transition-colors">
                    <Truck className="w-7 h-7" />
                  </div>
                  <span className="text-[11px] font-sans font-extrabold px-2.5 py-1 rounded-full bg-[#0B3F8C]/10 text-[#0B3F8C] tracking-wide uppercase">
                    FREIGHT & LEASING
                  </span>
                </div>

                <h4 className="font-display text-2xl sm:text-3xl font-black text-[#062B63] uppercase">
                  XPRESS
                </h4>

                <p className="font-sans text-sm sm:text-[15px] text-slate-600 leading-relaxed">
                  Refrigerated, dry-box, and flatbed over-the-road transport combined with fleet tractor leasing and trailer rentals.
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100">
                <Link
                  to="/services/xpress"
                  className="inline-flex items-center gap-1.5 font-display text-sm font-bold text-[#0B3F8C] group-hover:text-[#2CB51D] transition-colors uppercase tracking-wider"
                >
                  <span>EXPLORE XPRESS DIVISION</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Card 2: XFERS */}
            <div className="bg-white border border-slate-200/90 rounded-[14px] p-7 sm:p-8 shadow-sm hover:shadow-xl hover:border-[#2CB51D] transition-all duration-300 relative overflow-hidden flex flex-col justify-between h-full hover:-translate-y-1 motion-reduce:hover:translate-y-0 group before:absolute before:top-0 before:left-0 before:right-0 before:h-1.5 before:bg-[#2CB51D]">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3.5 bg-[#E4F7EE] text-[#087F5B] rounded-lg group-hover:bg-[#087F5B] group-hover:text-white transition-colors">
                    <ArrowLeftRight className="w-7 h-7" />
                  </div>
                  <span className="text-[11px] font-sans font-extrabold px-2.5 py-1 rounded-full bg-[#087F5B]/10 text-[#087F5B] tracking-wide uppercase">
                    TRANSFERS & STORAGE
                  </span>
                </div>

                <h4 className="font-display text-2xl sm:text-3xl font-black text-[#062B63] uppercase">
                  XFERS
                </h4>

                <p className="font-sans text-sm sm:text-[15px] text-slate-600 leading-relaxed">
                  Industrial field pull-outs, site setups, high-capacity liquid pumps, cold storage warehousing, and escort vehicles.
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100">
                <Link
                  to="/services/xfers"
                  className="inline-flex items-center gap-1.5 font-display text-sm font-bold text-[#087F5B] group-hover:text-[#2CB51D] transition-colors uppercase tracking-wider"
                >
                  <span>EXPLORE XFERS DIVISION</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Card 3: XTRAS */}
            <div className="bg-white border border-slate-200/90 rounded-[14px] p-7 sm:p-8 shadow-sm hover:shadow-xl hover:border-[#2CB51D] transition-all duration-300 relative overflow-hidden flex flex-col justify-between h-full hover:-translate-y-1 motion-reduce:hover:translate-y-0 group before:absolute before:top-0 before:left-0 before:right-0 before:h-1.5 before:bg-[#2CB51D]">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3.5 bg-[#062B63]/10 text-[#062B63] rounded-lg group-hover:bg-[#062B63] group-hover:text-white transition-colors">
                    <Wrench className="w-7 h-7" />
                  </div>
                  <span className="text-[11px] font-sans font-extrabold px-2.5 py-1 rounded-full bg-[#062B63]/10 text-[#062B63] tracking-wide uppercase">
                    TIRES & WASHOUTS
                  </span>
                </div>

                <h4 className="font-display text-2xl sm:text-3xl font-black text-[#062B63] uppercase">
                  XTRAS
                </h4>

                <p className="font-sans text-sm sm:text-[15px] text-slate-600 leading-relaxed">
                  Commercial tire sales, eco-friendly disposal, certified FSMA trailer washouts, diesel mechanic repairs, and batteries.
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100">
                <Link
                  to="/services/xtras"
                  className="inline-flex items-center gap-1.5 font-display text-sm font-bold text-[#062B63] group-hover:text-[#2CB51D] transition-colors uppercase tracking-wider"
                >
                  <span>EXPLORE XTRAS DIVISION</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Mission & Values Section (Clean White Background) */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left: Editorial Mission Block */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 text-[#2CB51D] font-display text-sm font-bold uppercase tracking-widest">
                <Target className="w-5 h-5" />
                <span>OUR CORE MISSION</span>
              </div>

              <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black italic text-[#062B63] uppercase leading-[1.15]">
                KEEPING AMERICAN SUPPLY CHAINS RESILIENT
              </h3>

              <div className="border-l-4 border-[#2CB51D] pl-6 py-2 my-6 bg-slate-50/70 rounded-r-lg">
                <p className="font-sans text-[18px] sm:text-[19px] text-[#062B63] font-semibold leading-relaxed">
                  To keep American supply chains resilient and commercial fleets operational by delivering dependable transportation, technical equipment transfer, and facility support with speed and integrity.
                </p>
              </div>

              <p className="font-sans text-slate-600 text-[16px] leading-[1.7]">
                Every route we run, every piece of equipment we position, and every trailer we certify is backed by rigorous operational standards, modern equipment, and an unwavering commitment to our commercial partners.
              </p>
            </div>

            {/* Right: Refined Values Card */}
            <div className="lg:col-span-6 bg-white border border-slate-200/90 rounded-[16px] p-8 sm:p-10 shadow-lg shadow-slate-900/5 space-y-8">
              <div className="flex items-center gap-3 pb-6 border-b border-slate-100">
                <div className="w-10 h-10 rounded-lg bg-[#E4F7EE] text-[#087F5B] flex items-center justify-center shrink-0">
                  <HeartHandshake className="w-6 h-6 text-[#2CB51D]" />
                </div>
                <div>
                  <div className="font-display text-2xl sm:text-3xl font-black text-[#062B63] uppercase">
                    OUR VALUES
                  </div>
                  <div className="text-xs font-sans text-slate-500 font-medium">
                    Principles guiding every dispatch and facility operation
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#E4F7EE] text-[#2CB51D] flex items-center justify-center shrink-0 mt-0.5">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display text-lg font-bold text-[#062B63] uppercase">
                      Uncompromising DOT Safety & Environmental Compliance
                    </h4>
                    <p className="font-sans text-sm text-slate-600 leading-relaxed mt-1">
                      Adhering to strict federal motor carrier safety standards, cold-chain regulatory guidelines, and certified eco-conscious wash/waste procedures.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#E4F7EE] text-[#2CB51D] flex items-center justify-center shrink-0 mt-0.5">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display text-lg font-bold text-[#062B63] uppercase">
                      Transparent Dispatch Communications
                    </h4>
                    <p className="font-sans text-sm text-slate-600 leading-relaxed mt-1">
                      Real-time updates, clear milestone tracking, and direct operational coordination across every mile.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#E4F7EE] text-[#2CB51D] flex items-center justify-center shrink-0 mt-0.5">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display text-lg font-bold text-[#062B63] uppercase">
                      24/7/365 Operational Readiness
                    </h4>
                    <p className="font-sans text-sm text-slate-600 leading-relaxed mt-1">
                      Immediate response capacity for emergency freight pulls, staging logistics, and commercial support services nationwide.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Brand Confidence Strip (Pale Blue-Grey) */}
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

      {/* 6. Final CTA Band (Deep Navy on White Canvas) */}
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
              onClick={onRequestQuote}
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
