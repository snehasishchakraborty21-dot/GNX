import React from 'react';
import { ShieldCheck, Award, Clock, FileCheck } from 'lucide-react';

export const CustomerTrust: React.FC = () => {
  const trustPillars = [
    {
      title: 'CERTIFIED FLEET & WASH FACILITIES',
      desc: 'All trailer washouts and vehicle service points follow strict regulatory sanitation and environmental disposal guidelines.',
      icon: <ShieldCheck className="w-8 h-8 text-[#2CB51D]" />
    },
    {
      title: 'QUALIFIED COMMERCIAL MECHANICS',
      desc: 'Experienced diesel technicians and tire specialists focused on rapid turnaround and highway safety.',
      icon: <Award className="w-8 h-8 text-[#062B63]" />
    },
    {
      title: 'DISPATCH & FLEET SUPPORT',
      desc: 'Continuous operational readiness designed to keep over-the-road drivers and freight moving.',
      icon: <Clock className="w-8 h-8 text-[#2CB51D]" />
    },
    {
      title: 'TRANSPARENT COMMERCIAL PRICING',
      desc: 'Clear, upfront service estimates and competitive freight rates across all three divisions.',
      icon: <FileCheck className="w-8 h-8 text-[#062B63]" />
    }
  ];

  return (
    <section className="py-28 lg:py-36 bg-white text-[#0A0D0C] border-t border-slate-200">
      <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="flex items-center justify-center gap-3">
            <span className="h-[2px] w-10 bg-[#2CB51D]"></span>
            <span className="font-sans text-xs sm:text-sm font-extrabold tracking-[0.25em] text-[#062B63] uppercase">
              BUILT ON INTEGRITY
            </span>
            <span className="h-[2px] w-10 bg-[#2CB51D]"></span>
          </div>

          <h2 className="font-display text-4xl sm:text-6xl font-black text-[#062B63] tracking-tight uppercase">
            OPERATIONAL EXCELLENCE & TRUST
          </h2>

          <p className="font-sans text-slate-700 text-lg leading-relaxed">
            Our commitment to quality, safety, and accountability guides every load hauled, equipment set up, tire mounted, and trailer washed.
          </p>
        </div>

        {/* 4 Trust Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustPillars.map((tp, idx) => (
            <div
              key={idx}
              className="p-8 bg-[#F8FAF9] border border-slate-200 rounded-xs space-y-4 hover:border-[#062B63] transition-colors"
            >
              <div className="p-3 bg-white w-fit rounded-xs shadow-xs border border-slate-200">
                {tp.icon}
              </div>

              <h3 className="font-display text-xl font-bold text-[#062B63] tracking-wide uppercase">
                {tp.title}
              </h3>

              <p className="font-sans text-sm text-slate-600 leading-relaxed">
                {tp.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
