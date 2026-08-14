import React, { useEffect } from 'react';
import { SERVICE_DIVISIONS } from '../data/siteData';
import { Truck, CheckCircle, ShieldCheck, ThermometerSnowflake, Package, Layers, TrendingUp, KeyRound, Container, FileText } from 'lucide-react';

interface XpressPageProps {
  onRequestQuote: (division?: 'xpress' | 'xfers' | 'xtras') => void;
}

export const XpressPage: React.FC<XpressPageProps> = ({ onRequestQuote }) => {
  const division = SERVICE_DIVISIONS.find((d) => d.id === 'xpress')!;

  useEffect(() => {
    document.title = 'Xpress Freight & Leasing | Gulf Northern X';
    window.scrollTo(0, 0);
  }, []);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'ThermometerSnowflake': return <ThermometerSnowflake className="w-6 h-6 text-[#2CB51D]" />;
      case 'Package': return <Package className="w-6 h-6 text-[#2CB51D]" />;
      case 'Layers': return <Layers className="w-6 h-6 text-[#2CB51D]" />;
      case 'TrendingUp': return <TrendingUp className="w-6 h-6 text-[#2CB51D]" />;
      case 'KeyRound': return <KeyRound className="w-6 h-6 text-[#2CB51D]" />;
      case 'Container': return <Container className="w-6 h-6 text-[#2CB51D]" />;
      default: return <Truck className="w-6 h-6 text-[#2CB51D]" />;
    }
  };

  return (
    <main className="pt-20 bg-[#0A0D0C] text-white min-h-screen">
      {/* Hero Header */}
      <section className="relative py-24 bg-[#0A0D0C] text-white overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 z-0">
          <img
            src={division.heroImage}
            alt="Gulf Northern Xpress Fleet"
            className="w-full h-full object-cover object-center opacity-30"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0D0C] via-[#0B3F8C]/80 to-[#0A0D0C]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="text-[#2CB51D] font-bold tracking-[0.4em] uppercase text-xs sm:text-sm">
            {division.badge}
          </div>

          <h1 className="font-display text-5xl sm:text-7xl font-black italic text-white uppercase tracking-tight">
            GULF NORTHERN <span className="text-[#2CB51D]">XPRESS</span>
          </h1>

          <p className="font-sans text-slate-200 text-lg max-w-2xl leading-relaxed border-l-2 border-[#2CB51D] pl-6">
            {division.heroHeadline}
          </p>

          <div className="pt-4">
            <button
              onClick={() => onRequestQuote('xpress')}
              className="px-8 py-4 bg-[#2CB51D] hover:bg-white hover:text-black text-white font-display text-xl font-black uppercase tracking-wider rounded-xs transition-colors shadow-lg flex items-center gap-2"
            >
              <FileText className="w-5 h-5" />
              <span>REQUEST XPRESS FREIGHT QUOTE</span>
            </button>
          </div>
        </div>
      </section>

      {/* Services List Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="max-w-3xl space-y-3">
          <h2 className="font-display text-4xl sm:text-5xl font-black italic text-white uppercase">
            XPRESS FREIGHT & LEASING CAPABILITIES
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
                      Key Service Features:
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
                  onClick={() => onRequestQuote('xpress')}
                  className="w-full py-3 bg-[#0B3F8C] hover:bg-[#062B63] text-white font-display text-lg font-bold uppercase rounded-xs transition-colors"
                >
                  QUOTE THIS FREIGHT SERVICE
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Technical Trailer & Fleet Diagram Box */}
        <div className="p-8 bg-[#111827] text-white rounded-xs border border-white/10 space-y-6 shadow-2xl">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-white/10 pb-4">
            <div>
              <div className="text-xs font-sans font-bold text-[#2CB51D] uppercase tracking-widest">
                TECHNICAL FLEET SPECIFICATIONS
              </div>
              <h3 className="font-display text-3xl font-black italic text-white uppercase mt-1">
                53FT HIGH-CUBE & TEMPERATURE-CONTROLLED TRAILERS
              </h3>
            </div>
            <ShieldCheck className="w-10 h-10 text-[#2CB51D]" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 font-sans text-xs text-slate-300">
            <div className="p-4 bg-white/5 rounded-xs border border-white/10 space-y-1">
              <div className="font-bold text-white text-sm uppercase">Refrigeration Thermal Range</div>
              <div>-20°F to +70°F Continuous Remote Telematics Logging</div>
            </div>

            <div className="p-4 bg-white/5 rounded-xs border border-white/10 space-y-1">
              <div className="font-bold text-white text-sm uppercase">Payload Weight Capacity</div>
              <div>Up to 45,000 lbs (Dry Van / Reefer) & 48,000 lbs (Flatbed)</div>
            </div>

            <div className="p-4 bg-white/5 rounded-xs border border-white/10 space-y-1">
              <div className="font-bold text-white text-sm uppercase">Safety & Tracking</div>
              <div>24/7 Satellite GPS Milestone & Door Sensor Telematics</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
