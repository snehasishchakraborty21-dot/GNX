import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ServiceNetworkMapProps {
  onRequestQuote: () => void;
}

export const ServiceNetworkMap: React.FC<ServiceNetworkMapProps> = ({ onRequestQuote }) => {
  return (
    <section className="w-full bg-[#03132B] text-white py-24 lg:py-32 relative overflow-hidden">
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Heading, Copy, and CTAs */}
        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-8 bg-[#2CB51D]"></span>
              <span className="font-sans text-xs sm:text-sm font-extrabold tracking-[0.22em] text-[#2CB51D] uppercase">
                CONNECTED SERVICES
              </span>
            </div>

            <h2 className="font-display text-4xl sm:text-5xl lg:text-[56px] font-black uppercase text-white leading-[0.95] tracking-tight">
              ONE NETWORK. <br />
              <span className="text-[#2CB51D]">MORE WAYS TO KEEP MOVING.</span>
            </h2>
          </div>

          <p className="font-sans text-lg sm:text-xl text-slate-200 leading-relaxed font-normal">
            Whether the requirement involves transportation, transfers, storage, tires, washouts or vehicle support, Gulf Northern X makes it easier to find the right service through one connected business.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4">
            <button
              onClick={onRequestQuote}
              className="px-8 py-4 bg-[#2CB51D] hover:bg-[#259b18] text-white font-display text-lg font-black uppercase tracking-wider rounded-xs transition-colors shadow-lg flex items-center gap-2 group"
            >
              <span>REQUEST SERVICE</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
            </button>

            <Link
              to="/services"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-display text-lg font-black uppercase tracking-wider rounded-xs transition-colors border border-white/20 flex items-center gap-2"
            >
              <span>EXPLORE OUR SERVICES</span>
            </Link>
          </div>
        </div>

        {/* Right Column: One Authentic Commercial Transportation Photograph */}
        <div className="lg:col-span-7 space-y-6">
          <div className="overflow-hidden shadow-2xl rounded-xs border-r-4 border-[#2CB51D]">
            <img
              src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1600&q=85"
              alt="Gulf Northern X Connected Transportation Operations"
              className="w-full h-[400px] lg:h-[480px] object-cover object-center"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Restrained Editorial Text Row with Fine Divider Lines */}
          <div className="pt-4 border-t border-white/15 flex items-center justify-between font-display text-lg font-black tracking-wider text-slate-300">
            <span className="text-white">XPRESS</span>
            <span className="text-[#2CB51D]">•</span>
            <span className="text-white">XFERS</span>
            <span className="text-[#2CB51D]">•</span>
            <span className="text-white">XTRAS</span>
          </div>
        </div>
      </div>
    </section>
  );
};


