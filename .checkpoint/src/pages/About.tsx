import React, { useEffect } from 'react';
import { Truck, ArrowLeftRight, Wrench, ShieldCheck, Target, HeartHandshake, FileText } from 'lucide-react';

interface AboutProps {
  onRequestQuote: () => void;
}

export const About: React.FC<AboutProps> = ({ onRequestQuote }) => {
  useEffect(() => {
    document.title = 'Our Story & Mission | Gulf Northern X';
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-20 bg-[#0A0D0C] text-white min-h-screen">
      {/* Page Hero */}
      <section className="relative py-24 bg-[#0A0D0C] text-white overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1920&q=80"
            alt="Gulf Northern X Commercial Freight Terminal"
            className="w-full h-full object-cover object-center opacity-30"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0D0C] via-[#062B63]/85 to-[#0A0D0C]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="text-[#2CB51D] font-bold tracking-[0.4em] uppercase text-xs sm:text-sm">
            ABOUT GULF NORTHERN X
          </div>

          <h1 className="font-display text-5xl sm:text-7xl font-black italic text-white uppercase tracking-tight">
            OUR STORY & <span className="text-[#2CB51D]">MISSION</span>
          </h1>

          <p className="font-sans text-slate-200 text-lg max-w-2xl leading-relaxed border-l-2 border-[#2CB51D] pl-6">
            Unifying transportation, equipment transfers, cold storage, tires, washouts and vehicle support into one dependable American network.
          </p>
        </div>
      </section>

      {/* Purpose & Overview */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="font-display text-4xl sm:text-5xl font-black italic text-white uppercase leading-tight">
              A MODERN APPROACH TO <br />
              <span className="text-[#2CB51D]">COMMERCIAL TRANSPORTATION</span>
            </h2>

            <p className="font-sans text-slate-300 leading-relaxed text-base">
              Gulf Northern X was created to solve a fundamental challenge in commercial fleet operations: the fragmentation of essential services. Historically, fleet managers and shipping coordinators had to manage separate vendors for over-the-road freight, cold storage staging, trailer washouts, tire inventory, and mobile mechanic repairs.
            </p>

            <p className="font-sans text-slate-300 leading-relaxed text-base">
              By bringing three distinct divisions—Xpress, Xfers, and Xtras—under one operational umbrella, Gulf Northern X provides a single accountable partner. We ensure vehicles stay compliant, drivers stay supported, and shipments arrive on schedule.
            </p>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="rounded-xs overflow-hidden border-2 border-[#0B3F8C] shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1200&q=80"
                alt="Gulf Northern X Freight Fleet on Highway"
                className="w-full h-96 object-cover opacity-90"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>

        {/* Brand Structure Breakdown */}
        <div className="pt-8 border-t border-white/10 space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="font-display text-3xl font-black italic text-white uppercase">
              THE THREE PILLARS OF GULF NORTHERN X
            </h3>
            <p className="font-sans text-slate-400 text-sm mt-1">
              Structured to handle every phase of commercial logistics and equipment care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-[#111827] border border-white/10 rounded-xs shadow-xl space-y-3 hover:border-[#2CB51D] transition-colors">
              <div className="p-3 bg-[#0B3F8C] text-white w-fit rounded-xs">
                <Truck className="w-6 h-6 text-[#2CB51D]" />
              </div>
              <h4 className="font-display text-2xl font-bold text-white uppercase">XPRESS</h4>
              <p className="font-sans text-xs text-slate-300 leading-relaxed">
                Refrigerated, dry-box, and flatbed over-the-road transport combined with fleet tractor leasing and trailer rentals.
              </p>
            </div>

            <div className="p-6 bg-[#111827] border border-white/10 rounded-xs shadow-xl space-y-3 hover:border-[#2CB51D] transition-colors">
              <div className="p-3 bg-[#087F5B] text-white w-fit rounded-xs">
                <ArrowLeftRight className="w-6 h-6 text-[#2CB51D]" />
              </div>
              <h4 className="font-display text-2xl font-bold text-white uppercase">XFERS</h4>
              <p className="font-sans text-xs text-slate-300 leading-relaxed">
                Industrial field pull-outs, site setups, high-capacity liquid pumps, cold storage warehousing, and escort vehicles.
              </p>
            </div>

            <div className="p-6 bg-[#111827] border border-white/10 rounded-xs shadow-xl space-y-3 hover:border-[#2CB51D] transition-colors">
              <div className="p-3 bg-[#062B63] text-white w-fit rounded-xs">
                <Wrench className="w-6 h-6 text-[#2CB51D]" />
              </div>
              <h4 className="font-display text-2xl font-bold text-white uppercase">XTRAS</h4>
              <p className="font-sans text-xs text-slate-300 leading-relaxed">
                Commercial tire sales, eco-friendly disposal, certified FSMA trailer washouts, diesel mechanic repairs, and batteries.
              </p>
            </div>
          </div>
        </div>

        {/* Mission & Values */}
        <div className="pt-8 border-t border-white/10 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 bg-[#111827] text-white rounded-xs border border-white/10 space-y-4">
            <div className="flex items-center gap-2 text-[#2CB51D] font-display text-2xl font-bold uppercase">
              <Target className="w-6 h-6" />
              <span>OUR MISSION</span>
            </div>
            <p className="font-sans text-sm text-slate-300 leading-relaxed">
              To keep American supply chains resilient and commercial fleets operational by delivering dependable transportation, technical equipment transfer, and facility support with speed and integrity.
            </p>
          </div>

          <div className="p-8 bg-[#111827] text-white rounded-xs border border-white/10 space-y-4">
            <div className="flex items-center gap-2 text-[#2CB51D] font-display text-2xl font-bold uppercase">
              <HeartHandshake className="w-6 h-6" />
              <span>OUR VALUES</span>
            </div>
            <ul className="space-y-2 font-sans text-xs text-slate-300">
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#2CB51D]" />
                <span>Uncompromising DOT Safety & Environmental Compliance</span>
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#2CB51D]" />
                <span>Transparent Dispatch Communications</span>
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#2CB51D]" />
                <span>24/7/365 Operational Readiness</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Service CTA */}
        <div className="p-8 bg-[#062B63] text-white rounded-xs border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-3xl font-extrabold uppercase">
              WORK WITH GULF NORTHERN X
            </h3>
            <p className="font-sans text-sm text-slate-200">
              Contact our dispatch desk or request a customized service rate quote today.
            </p>
          </div>
          <button
            onClick={onRequestQuote}
            className="px-8 py-4 bg-[#2CB51D] hover:bg-white hover:text-black text-white font-display text-xl font-black uppercase tracking-wider rounded-xs transition-colors shrink-0 flex items-center gap-2"
          >
            <FileText className="w-5 h-5" />
            <span>REQUEST A QUOTE</span>
          </button>
        </div>
      </section>
    </main>
  );
};
