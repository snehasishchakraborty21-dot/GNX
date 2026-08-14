import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SERVICE_DIVISIONS } from '../data/siteData';
import { Truck, ArrowLeftRight, Wrench, CheckCircle2, ArrowRight } from 'lucide-react';

interface ServicesOverviewProps {
  onRequestQuote: (division?: 'xpress' | 'xfers' | 'xtras') => void;
}

export const ServicesOverview: React.FC<ServicesOverviewProps> = ({ onRequestQuote }) => {
  useEffect(() => {
    document.title = 'Services Overview | Gulf Northern X';
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-20 bg-[#0A0D0C] text-white min-h-screen">
      {/* Services Hero */}
      <section className="relative py-24 bg-[#0A0D0C] text-white overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1920&q=80"
            alt="Gulf Northern X Commercial Logistics Fleet"
            className="w-full h-full object-cover object-center opacity-30"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0D0C] via-[#062B63]/90 to-[#0A0D0C]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="text-[#2CB51D] font-bold tracking-[0.4em] uppercase text-xs sm:text-sm">
            FULL SERVICE NETWORK OVERVIEW
          </div>

          <h1 className="font-display text-5xl sm:text-7xl font-black italic text-white uppercase tracking-tight">
            COMMERCIAL DIVISIONS & <span className="text-[#2CB51D]">SERVICES</span>
          </h1>

          <p className="font-sans text-slate-200 text-lg max-w-2xl leading-relaxed border-l-2 border-[#2CB51D] pl-6">
            Choose the specific service division suited to your freight shipment, field transfer setup, or commercial vehicle maintenance requirements.
          </p>
        </div>
      </section>

      {/* Decision Guide Table / Cards */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <h2 className="font-display text-4xl sm:text-5xl font-black italic text-white uppercase">
            WHICH DIVISION DO YOU NEED?
          </h2>
          <p className="font-sans text-slate-400 text-sm">
            Review our three specialized operating divisions below for fast routing to the right dispatch team.
          </p>
        </div>

        {/* Detailed Comparison Panels */}
        <div className="space-y-12">
          {SERVICE_DIVISIONS.map((div) => {
            return (
              <div
                key={div.id}
                className="bg-[#111827] rounded-xs border border-white/10 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 hover:border-[#2CB51D] transition-all"
              >
                {/* Visual Column */}
                <div className="lg:col-span-5 relative h-72 lg:h-auto min-h-[300px]">
                  <img
                    src={div.heroImage}
                    alt={div.title}
                    className="w-full h-full object-cover object-center opacity-85"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                    <span className="text-xs font-sans font-bold text-[#2CB51D] uppercase tracking-widest">
                      {div.badge}
                    </span>
                    <h3 className="font-display text-4xl font-black uppercase italic">{div.title}</h3>
                  </div>
                </div>

                {/* Content Column */}
                <div className="lg:col-span-7 p-8 space-y-6 flex flex-col justify-between">
                  <div className="space-y-4">
                    <h4 className="font-display text-2xl font-bold text-white uppercase">
                      {div.heroHeadline}
                    </h4>

                    <p className="font-sans text-sm text-slate-300 leading-relaxed">
                      {div.description}
                    </p>

                    {/* Detailed Services Grid */}
                    <div className="pt-4 border-t border-white/10">
                      <div className="text-xs font-sans font-bold text-[#2CB51D] uppercase tracking-widest mb-3">
                        Services Included in {div.title}:
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {div.detailedServices.map((item) => (
                          <div key={item.id} className="p-3 bg-white/5 rounded-xs border border-white/10">
                            <div className="font-display text-lg font-bold text-white flex items-center gap-1.5 uppercase">
                              <CheckCircle2 className="w-4 h-4 text-[#2CB51D] shrink-0" />
                              <span>{item.name}</span>
                            </div>
                            <p className="font-sans text-[11px] text-slate-400 mt-1 line-clamp-2">
                              {item.shortDescription}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                    <Link
                      to={`/services/${div.id}`}
                      className="px-6 py-3 bg-[#062B63] hover:bg-[#0B3F8C] text-white font-display text-lg font-bold uppercase rounded-xs transition-colors inline-flex items-center gap-2"
                    >
                      <span>VIEW DETAILED {div.title} PAGE</span>
                      <ArrowRight className="w-4 h-4 text-[#2CB51D]" />
                    </Link>

                    <button
                      onClick={() => onRequestQuote(div.id as 'xpress' | 'xfers' | 'xtras')}
                      className="px-6 py-3 bg-[#2CB51D] hover:bg-white hover:text-black text-white font-display text-lg font-black uppercase tracking-wider rounded-xs transition-colors"
                    >
                      REQUEST {div.title} RATE QUOTE
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
};
