import React from 'react';
import { Layers, Headphones, ShieldCheck, Award } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-24 lg:py-32 bg-white text-[#0A0D0C] border-t border-slate-200">
      <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Editorial Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-16">
          <div className="lg:col-span-8 space-y-4">
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-10 bg-[#2CB51D]"></span>
              <span className="font-sans text-xs sm:text-sm font-extrabold tracking-[0.25em] text-[#062B63] uppercase">
                OPERATIONAL EXCELLENCE & TRUST
              </span>
            </div>

            <h2 className="font-display text-4xl sm:text-6xl font-black text-[#062B63] tracking-tight uppercase leading-[0.95]">
              BUILT ON INTEGRITY. <br />
              <span className="text-[#062B63]">ENGINEERED FOR UPTIME.</span>
            </h2>
          </div>

          <div className="lg:col-span-4 font-sans text-slate-800 text-base sm:text-lg leading-relaxed border-l-2 border-[#2CB51D] pl-6 font-medium">
            By bringing freight haulage, field transfers, cold storage, and fleet vehicle maintenance under one accountable operation, Gulf Northern X eliminates operational friction for logistics partners.
          </div>
        </div>

        {/* 2-Column Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column (~55%): Clean Editorial Industrial Photography */}
          <div className="lg:col-span-7">
            <div className="overflow-hidden border-l-4 border-[#062B63] shadow-2xl rounded-xs">
              <img
                src="https://images.unsplash.com/photo-1591768793355-74d04bb6608f?auto=format&fit=crop&w=1400&q=85"
                alt="Gulf Northern X Commercial Fleet Highway Operations"
                className="w-full h-[480px] lg:h-[580px] object-cover object-center"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Right Column (~45%): Clean Consolidated Proof List */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 bg-[#F8FAF9] border border-slate-200/80 rounded-xs space-y-3 hover:border-[#062B63] transition-all">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-white border border-slate-200 rounded-xs text-[#2CB51D]">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="font-display text-xl font-black text-[#062B63] uppercase tracking-wide">
                  CONNECTED SERVICE ECOSYSTEM
                </h3>
              </div>
              <p className="font-sans text-base text-slate-800 leading-relaxed pl-12 font-medium">
                Seamless crossover between Xpress freight transport, Xfers field staging, and Xtras fleet maintenance under one accountable brand.
              </p>
            </div>

            <div className="p-6 bg-[#F8FAF9] border border-slate-200/80 rounded-xs space-y-3 hover:border-[#062B63] transition-all">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-white border border-slate-200 rounded-xs text-[#062B63]">
                  <ShieldCheck className="w-5 h-5 text-[#2CB51D]" />
                </div>
                <h3 className="font-display text-xl font-black text-[#062B63] uppercase tracking-wide">
                  CERTIFIED FLEET & WASHOUT FACILITIES
                </h3>
              </div>
              <p className="font-sans text-base text-slate-800 leading-relaxed pl-12 font-medium">
                Sanitary trailer washouts and vehicle service points adhere strictly to regulatory guidelines and carrier sanitation protocols.
              </p>
            </div>

            <div className="p-6 bg-[#F8FAF9] border border-slate-200/80 rounded-xs space-y-3 hover:border-[#062B63] transition-all">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-white border border-slate-200 rounded-xs text-[#062B63]">
                  <Headphones className="w-5 h-5 text-[#062B63]" />
                </div>
                <h3 className="font-display text-xl font-black text-[#062B63] uppercase tracking-wide">
                  DIRECT DISPATCH RESPONSE
                </h3>
              </div>
              <p className="font-sans text-base text-slate-800 leading-relaxed pl-12 font-medium">
                Direct access to experienced dispatchers, providing rapid quote turnarounds and clear operational updates.
              </p>
            </div>

            <div className="p-6 bg-[#F8FAF9] border border-slate-200/80 rounded-xs space-y-3 hover:border-[#062B63] transition-all">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-white border border-slate-200 rounded-xs text-[#062B63]">
                  <Award className="w-5 h-5 text-[#2CB51D]" />
                </div>
                <h3 className="font-display text-xl font-black text-[#062B63] uppercase tracking-wide">
                  QUALIFIED COMMERCIAL TECHNICIANS
                </h3>
              </div>
              <p className="font-sans text-base text-slate-800 leading-relaxed pl-12 font-medium">
                Certified mechanics, commercial tire specialists, and experienced drivers focused on equipment turnaround and highway safety.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


