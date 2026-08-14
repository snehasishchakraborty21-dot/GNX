import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck } from 'lucide-react';

interface FinalCTAProps {
  onRequestQuote: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onRequestQuote }) => {
  return (
    <section className="relative py-24 lg:py-32 bg-[#03132B] text-white overflow-hidden border-t-4 border-[#2CB51D]">
      {/* Background Industrial Photography Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1920&q=85"
          alt="Gulf Northern X Commercial Logistics Highway"
          className="w-full h-full object-cover object-center opacity-25 scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#03132B] via-[#062B63]/95 to-[#03132B]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(44,181,29,0.15),transparent_70%)]"></div>
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12 text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#2CB51D] text-white font-display text-xs font-black tracking-[0.2em] uppercase rounded-xs shadow-lg">
          <ShieldCheck className="w-4 h-4 text-white" />
          <span>DEPENDABLE TRANSPORTATION & VEHICLE SERVICES</span>
        </div>

        <h2 className="font-display text-4xl sm:text-6xl lg:text-[76px] font-black text-white tracking-tight uppercase leading-[0.92]">
          LET’S KEEP YOUR <br />
          <span className="text-[#2CB51D] drop-shadow-md">OPERATION MOVING.</span>
        </h2>

        <p className="font-sans text-slate-200 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed font-normal">
          Tell us which Gulf Northern X service division you need and our team will respond promptly with details and competitive rate estimates.
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-5">
          <button
            onClick={onRequestQuote}
            className="px-10 py-5 bg-[#2CB51D] hover:bg-[#259b18] text-white font-display text-xl font-black uppercase tracking-wider rounded-xs transition-all shadow-2xl hover:shadow-[#2CB51D]/30 flex items-center gap-3 group"
          >
            <span>REQUEST A QUOTE</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1.5 transition-transform" />
          </button>

          <Link
            to="/services"
            className="px-10 py-5 bg-white/10 hover:bg-white text-white hover:text-[#062B63] font-display text-xl font-black uppercase tracking-wider rounded-xs transition-all border border-white/30 backdrop-blur-md flex items-center gap-3"
          >
            <span>EXPLORE OUR SERVICES</span>
            <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </section>
  );
};


