import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  onRequestQuote: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onRequestQuote }) => {
  return (
    <section className="relative w-full min-h-[90vh] lg:min-h-screen flex items-center bg-[#03070A] text-white overflow-hidden pt-28 sm:pt-32 md:pt-36 lg:pt-40">
      {/* Background Photographic Layer - American Class 8 tractor and 53ft trailer on highway */}
      <div className="absolute inset-0 z-0">
        <img
          src="/media/home/gnx-home-hero-v1.png"
          alt="Gulf Northern X Commercial Freight Semi Truck and Trailer"
          className="w-full h-full object-cover object-left"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).style.display = 'none';
          }}
        />

        {/* Directional Gradient Overlay:
            - Upper-left (behind logo & light sky): 0% opacity (100% transparent)
            - Right (behind written content): Dark navy gradient for headline legibility
            - Mobile: Gradient at bottom for stacked text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#03070A] via-[#03070A]/80 via-60% to-transparent lg:bg-gradient-to-l lg:from-[#03070A] lg:via-[#03070A]/90 lg:via-45% lg:to-transparent"></div>
      </div>

      {/* Main Editorial Hero Content - Positioned on the Right Side on Desktop */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 lg:px-12 py-12 lg:py-16 flex justify-end">
        {/* Content Column: Occupies ~46% of hero width on desktop (~620px max-width), text left-aligned */}
        <div className="w-full lg:w-[46%] max-w-[620px] space-y-6 text-left">
          {/* Eyebrow Tag */}
          <div className="flex items-center gap-3">
            <span className="h-[2px] w-8 bg-[#2CB51D]"></span>
            <span className="font-sans text-xs sm:text-sm font-extrabold tracking-[0.22em] text-[#2CB51D] uppercase">
              COMMERCIAL LOGISTICS & VEHICLE SERVICES
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-display text-4xl sm:text-5xl lg:text-[68px] font-black uppercase tracking-tight leading-[0.92] text-white">
            ONE NETWORK. <br />
            <span className="text-[#2CB51D]">COMPLETE SUPPORT.</span>
          </h1>

          {/* Short Supporting Paragraph */}
          <p className="font-sans text-base sm:text-lg lg:text-xl text-slate-200 leading-relaxed font-normal">
            Gulf Northern X delivers freight transportation, specialized transfer setups, storage, and commercial vehicle maintenance through three integrated service divisions.
          </p>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <button
              onClick={onRequestQuote}
              className="px-8 py-4 bg-[#2CB51D] hover:bg-[#259b18] text-white font-display text-lg font-black uppercase tracking-wider rounded-xs transition-all shadow-xl hover:shadow-[#2CB51D]/25 flex items-center gap-3 group"
            >
              <span>REQUEST A QUOTE</span>
              <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1.5 transition-transform" />
            </button>

            <Link
              to="/services"
              className="px-8 py-4 bg-white/10 hover:bg-white text-white hover:text-[#062B63] font-display text-lg font-black uppercase tracking-wider rounded-xs transition-all border border-white/30 backdrop-blur-md flex items-center gap-3 group"
            >
              <span>EXPLORE OUR SERVICES</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};



