import React, { useEffect } from 'react';
import { SERVICE_DIVISIONS } from '../data/siteData';
import { Wrench, CheckCircle, Disc, Droplets, Recycle, RotateCcw, Zap, FileText } from 'lucide-react';

interface XtrasPageProps {
  onRequestQuote: (division?: 'xpress' | 'xfers' | 'xtras') => void;
}

export const XtrasPage: React.FC<XtrasPageProps> = ({ onRequestQuote }) => {
  const division = SERVICE_DIVISIONS.find((d) => d.id === 'xtras')!;

  useEffect(() => {
    document.title = 'Xtras Commercial Vehicle Support | Gulf Northern X';
    window.scrollTo(0, 0);
  }, []);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Disc': return <Disc className="w-6 h-6 text-[#2CB51D]" />;
      case 'Droplets': return <Droplets className="w-6 h-6 text-[#2CB51D]" />;
      case 'Tool': return <Wrench className="w-6 h-6 text-[#2CB51D]" />;
      case 'Recycle': return <Recycle className="w-6 h-6 text-[#2CB51D]" />;
      case 'RotateCcw': return <RotateCcw className="w-6 h-6 text-[#2CB51D]" />;
      case 'Zap': return <Zap className="w-6 h-6 text-[#2CB51D]" />;
      default: return <Wrench className="w-6 h-6 text-[#2CB51D]" />;
    }
  };

  return (
    <main className="pt-20 bg-[#0A0D0C] text-white min-h-screen">
      {/* Hero Header */}
      <section className="relative py-24 bg-[#0A0D0C] text-white overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 z-0">
          <img
            src={division.heroImage}
            alt="Gulf Northern Xtras Commercial Support"
            className="w-full h-full object-cover object-center opacity-30"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0D0C] via-[#062B63]/90 to-[#0A0D0C]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="text-[#2CB51D] font-bold tracking-[0.4em] uppercase text-xs sm:text-sm">
            {division.badge}
          </div>

          <h1 className="font-display text-5xl sm:text-7xl font-black italic text-white uppercase tracking-tight">
            GULF NORTHERN <span className="text-[#2CB51D]">XTRAS</span>
          </h1>

          <p className="font-sans text-slate-200 text-lg max-w-2xl leading-relaxed border-l-2 border-[#2CB51D] pl-6">
            {division.heroHeadline}
          </p>

          <div className="pt-4">
            <button
              onClick={() => onRequestQuote('xtras')}
              className="px-8 py-4 bg-[#2CB51D] hover:bg-white hover:text-black text-white font-display text-xl font-black uppercase tracking-wider rounded-xs transition-colors shadow-lg flex items-center gap-2"
            >
              <FileText className="w-5 h-5" />
              <span>REQUEST XTRAS SERVICE QUOTE</span>
            </button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="max-w-3xl space-y-3">
          <h2 className="font-display text-4xl sm:text-5xl font-black italic text-white uppercase">
            COMMERCIAL TIRES, TRAILER WASHOUTS & REPAIRS
          </h2>
          <p className="font-sans text-slate-300 text-sm leading-relaxed">
            {division.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {division.detailedServices.map((item) => (
            <div
              key={item.id}
              className="bg-[#111827] border border-white/10 rounded-xs overflow-hidden shadow-xl hover:border-[#2CB51D] transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="h-48 relative overflow-hidden">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-full h-full object-cover opacity-85"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-transparent to-transparent"></div>
                  <div className="absolute top-3 left-3 p-2 bg-[#062B63] text-white rounded-xs">
                    {getServiceIcon(item.iconName)}
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <h3 className="font-display text-2xl font-bold text-white uppercase">
                    {item.name}
                  </h3>

                  <p className="font-sans text-xs text-slate-300 leading-relaxed">
                    {item.fullDescription}
                  </p>

                  <div className="pt-3 border-t border-white/10 space-y-2">
                    <div className="text-[11px] font-sans font-bold text-[#2CB51D] uppercase tracking-wider">
                      Service Standards:
                    </div>
                    <ul className="space-y-1.5 font-sans text-xs text-slate-300">
                      {item.features.map((f, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-[#2CB51D] shrink-0" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={() => onRequestQuote('xtras')}
                  className="w-full py-3 bg-[#062B63] hover:bg-[#0B3F8C] text-white font-display text-lg font-bold uppercase rounded-xs transition-colors"
                >
                  QUOTE THIS XTRAS SERVICE
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};
