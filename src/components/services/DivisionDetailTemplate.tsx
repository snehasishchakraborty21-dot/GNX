import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ServiceDivision } from '../../types';
import { SERVICE_DIVISIONS } from '../../data/siteData';
import {
  Truck,
  ArrowLeftRight,
  Wrench,
  ThermometerSnowflake,
  Package,
  Layers,
  TrendingUp,
  KeyRound,
  Container,
  FileText,
  CheckCircle2,
  ShieldCheck,
  MoveUpRight,
  Activity,
  Snowflake,
  Warehouse,
  ShieldAlert,
  Disc,
  Droplets,
  Recycle,
  RotateCcw,
  Zap,
  ChevronRight,
  Shield
} from 'lucide-react';

interface DivisionDetailTemplateProps {
  divisionId: 'xpress' | 'xfers' | 'xtras';
  pageTitle: string;
  onRequestQuote: (division?: 'xpress' | 'xfers' | 'xtras') => void;
  customSpecs?: {
    eyebrow: string;
    headline: string;
    specs: {
      title: string;
      value: string;
    }[];
  };
}

export const DivisionDetailTemplate: React.FC<DivisionDetailTemplateProps> = ({
  divisionId,
  pageTitle,
  onRequestQuote,
  customSpecs
}) => {
  const division = SERVICE_DIVISIONS.find((d) => d.id === divisionId) || SERVICE_DIVISIONS[0];
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  useEffect(() => {
    document.title = `${pageTitle} | Gulf Northern X`;
    window.scrollTo(0, 0);
  }, [pageTitle]);

  const handleImageError = (serviceId: string) => {
    setFailedImages((prev) => ({ ...prev, [serviceId]: true }));
  };

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'ThermometerSnowflake':
        return <ThermometerSnowflake className="w-5 h-5 text-[#2CB51D]" />;
      case 'Package':
        return <Package className="w-5 h-5 text-[#2CB51D]" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-[#2CB51D]" />;
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5 text-[#2CB51D]" />;
      case 'KeyRound':
        return <KeyRound className="w-5 h-5 text-[#2CB51D]" />;
      case 'Container':
        return <Container className="w-5 h-5 text-[#2CB51D]" />;
      case 'MoveUpRight':
        return <MoveUpRight className="w-5 h-5 text-[#2CB51D]" />;
      case 'Wrench':
      case 'Tool':
        return <Wrench className="w-5 h-5 text-[#2CB51D]" />;
      case 'Activity':
        return <Activity className="w-5 h-5 text-[#2CB51D]" />;
      case 'Snowflake':
        return <Snowflake className="w-5 h-5 text-[#2CB51D]" />;
      case 'Warehouse':
        return <Warehouse className="w-5 h-5 text-[#2CB51D]" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-5 h-5 text-[#2CB51D]" />;
      case 'Disc':
        return <Disc className="w-5 h-5 text-[#2CB51D]" />;
      case 'Droplets':
        return <Droplets className="w-5 h-5 text-[#2CB51D]" />;
      case 'Recycle':
        return <Recycle className="w-5 h-5 text-[#2CB51D]" />;
      case 'RotateCcw':
        return <RotateCcw className="w-5 h-5 text-[#2CB51D]" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-[#2CB51D]" />;
      case 'ArrowLeftRight':
        return <ArrowLeftRight className="w-5 h-5 text-[#2CB51D]" />;
      default:
        return <Truck className="w-5 h-5 text-[#2CB51D]" />;
    }
  };

  const getDivisionIcon = (id: string) => {
    switch (id) {
      case 'xpress':
        return <Truck className="w-5 h-5" />;
      case 'xfers':
        return <ArrowLeftRight className="w-5 h-5" />;
      case 'xtras':
        return <Wrench className="w-5 h-5" />;
      default:
        return <Truck className="w-5 h-5" />;
    }
  };

  // Default specs if not provided
  const defaultSpecs = {
    xpress: {
      eyebrow: 'TECHNICAL FLEET SPECIFICATIONS',
      headline: '53FT HIGH-CUBE & TEMPERATURE-CONTROLLED TRAILERS',
      specs: [
        {
          title: 'Refrigeration Thermal Range',
          value: '-20°F to +70°F Continuous Remote Telematics Logging'
        },
        {
          title: 'Payload Weight Capacity',
          value: 'Up to 45,000 lbs (Dry Van / Reefer) & 48,000 lbs (Flatbed)'
        },
        {
          title: 'Safety & Tracking',
          value: '24/7 Satellite GPS Milestone & Door Sensor Telematics'
        }
      ]
    },
    xfers: {
      eyebrow: 'OPERATIONAL FIELD SPECIFICATIONS',
      headline: 'SPECIALIZED RIGGING, TRANSFER PUMPS & CLIMATE STORAGE',
      specs: [
        {
          title: 'Fluid Pumping Standards',
          value: 'High-CFM liquid transfer units with continuous pressure & spill containment'
        },
        {
          title: 'Extraction Rigging Capacity',
          value: 'Heavy winch and off-road power recovery units for difficult terrain'
        },
        {
          title: 'Warehouse Climate Management',
          value: 'Multi-zone cold storage (-15°F to 45°F) with automated backup generators'
        }
      ]
    },
    xtras: {
      eyebrow: 'COMMERCIAL SUPPORT & COMPLIANCE SPECIFICATIONS',
      headline: 'FSMA COMPLIANCE, TIRE INTEGRITY & MECHANIC RESPONSE',
      specs: [
        {
          title: 'Washout Sanitation Protocols',
          value: 'High-pressure hot water sanitization with food-grade FSMA certification'
        },
        {
          title: 'Commercial Tire Inventory',
          value: 'Tier-1 steer, drive & trailer positions with computerized balancing'
        },
        {
          title: 'Mobile Diagnostics & Repairs',
          value: 'Heavy-duty certified diesel mechanics & mobile roadside service units'
        }
      ]
    }
  };

  const activeSpecs = customSpecs || defaultSpecs[divisionId];

  return (
    <main className="pt-24 sm:pt-28 md:pt-32 lg:pt-36 xl:pt-40 bg-white text-slate-800 min-h-screen">
      {/* 1. Division Hero Header (Deep Navy Background) */}
      <section className="relative min-h-[340px] md:min-h-[380px] lg:min-h-[400px] flex items-center bg-[#062B63] text-white overflow-hidden">
        {/* Background Visual Layer */}
        <div className="absolute inset-0 z-0">
          <img
            src={division.heroImage}
            alt={`Gulf Northern ${division.title} Commercial Operations`}
            className="w-full h-full object-cover object-center opacity-25"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#062B63]/98 via-[#062B63]/85 to-[#0B3F8C]/65"></div>
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-[#2CB51D] font-display font-bold tracking-[0.25em] uppercase text-xs sm:text-sm">
              <span className="w-2 h-2 rounded-full bg-[#2CB51D]"></span>
              <span>{division.badge}</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black italic text-white uppercase tracking-tight leading-[1.05]">
              GULF NORTHERN <span className="text-[#2CB51D]">{division.title}</span>
            </h1>

            <p className="font-sans text-slate-200 text-base sm:text-lg lg:text-[19px] leading-relaxed border-l-3 border-[#2CB51D] pl-5 mt-4">
              {division.heroHeadline}
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onRequestQuote(division.id)}
                className="min-h-[48px] px-8 py-3.5 bg-[#2CB51D] hover:bg-[#259b18] text-white font-display text-base sm:text-lg font-black uppercase tracking-wider rounded-xs transition-colors shadow-lg flex items-center gap-2 cursor-pointer"
              >
                <FileText className="w-5 h-5" />
                <span>REQUEST {division.title} RATE QUOTE</span>
              </button>

              <Link
                to="/services"
                className="min-h-[48px] px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-display text-base font-bold uppercase rounded-xs transition-colors inline-flex items-center gap-2 border border-white/20"
              >
                <span>ALL DIVISIONS</span>
                <ChevronRight className="w-4 h-4 text-[#2CB51D]" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Division Introduction (Clean White Background) */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl space-y-4">
            <div className="text-[#2CB51D] font-display font-bold text-xs sm:text-sm tracking-[0.25em] uppercase">
              SPECIALIZED SERVICE DIVISION
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black italic text-[#062B63] uppercase leading-tight">
              {division.title} {division.badge} CAPABILITIES
            </h2>

            <div className="w-16 h-1 bg-[#2CB51D] rounded-full my-2"></div>

            <p className="font-sans text-slate-700 text-base sm:text-lg leading-relaxed pt-2">
              {division.description}
            </p>
          </div>
        </div>
      </section>

      {/* 3. Service-Capability Grid (Cool Light-Grey Background) */}
      <section className="py-16 lg:py-24 bg-[#F4F7F9] border-y border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl space-y-3">
            <div className="text-[#0B3F8C] font-display font-bold text-xs sm:text-sm tracking-[0.25em] uppercase">
              OPERATIONAL SCOPE & CAPABILITIES
            </div>
            <h3 className="font-display text-3xl sm:text-4xl font-black italic text-[#062B63] uppercase">
              DETAILED {division.title} SERVICES
            </h3>
            <p className="font-sans text-slate-600 text-sm sm:text-base leading-relaxed">
              Explore the individual services provided by our {division.title} division. Each service is fully supported by our dispatch desk and dedicated operations staff.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {division.detailedServices.map((item) => {
              const hasValidImage = item.imageUrl && !failedImages[item.id];

              return (
                <div
                  key={item.id}
                  className="bg-white border border-slate-200/90 rounded-[14px] overflow-hidden shadow-xs hover:shadow-xl hover:border-[#2CB51D]/80 transition-all duration-300 flex flex-col justify-between h-full group"
                >
                  <div>
                    {/* Top Image or Icon Area */}
                    {hasValidImage ? (
                      <div className="h-48 sm:h-52 relative overflow-hidden bg-slate-100 border-b border-slate-100">
                        <img
                          src={item.imageUrl}
                          alt={item.name}
                          onError={() => handleImageError(item.id)}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute top-3 left-3 p-2.5 bg-[#062B63] text-white rounded-lg shadow-md border border-white/10">
                          {getServiceIcon(item.iconName)}
                        </div>
                      </div>
                    ) : (
                      <div className="p-6 pb-2 flex items-center justify-between border-b border-slate-100 bg-slate-50/70">
                        <div className="p-3 bg-[#062B63] text-[#2CB51D] rounded-xl shadow-xs border border-slate-200/80">
                          {getServiceIcon(item.iconName)}
                        </div>
                        <span className="text-[11px] font-sans font-extrabold uppercase px-2.5 py-1 rounded-full bg-[#0B3F8C]/10 text-[#0B3F8C] tracking-wider">
                          {division.title}
                        </span>
                      </div>
                    )}

                    {/* Card Content */}
                    <div className="p-6 sm:p-7 space-y-4">
                      <h4 className="font-display text-2xl font-bold text-[#062B63] uppercase group-hover:text-[#0B3F8C] transition-colors">
                        {item.name}
                      </h4>

                      <p className="font-sans text-sm text-slate-600 leading-relaxed">
                        {item.fullDescription}
                      </p>

                      {/* Key Features */}
                      <div className="pt-4 border-t border-slate-100 space-y-2.5">
                        <div className="text-[11px] font-sans font-bold text-[#062B63] uppercase tracking-wider">
                          Key Service Features:
                        </div>
                        <ul className="space-y-2 font-sans text-xs sm:text-[13px] text-slate-700">
                          {item.features.map((f, idx) => (
                            <li key={idx} className="flex items-start gap-2.5">
                              <CheckCircle2 className="w-4 h-4 text-[#2CB51D] shrink-0 mt-0.5" />
                              <span className="leading-snug">{f}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Card Bottom CTA */}
                  <div className="p-6 sm:p-7 pt-0">
                    <button
                      onClick={() => onRequestQuote(division.id)}
                      className="min-h-[44px] w-full py-3 px-4 bg-[#062B63] hover:bg-[#0B3F8C] text-white font-display text-base font-bold uppercase rounded-xs transition-colors shadow-xs flex items-center justify-center gap-2 group/btn cursor-pointer"
                    >
                      <span>QUOTE THIS SERVICE</span>
                      <ChevronRight className="w-4 h-4 text-[#2CB51D] group-hover/btn:translate-x-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Technical Specifications Panel (Clean White Background) */}
      {activeSpecs && (
        <section className="py-16 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="p-8 sm:p-10 bg-slate-50 border border-slate-200/90 rounded-2xl space-y-6 shadow-xs">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-slate-200/80 pb-5">
                <div className="space-y-1">
                  <div className="text-xs font-sans font-bold text-[#2CB51D] uppercase tracking-widest flex items-center gap-2">
                    <Shield className="w-4 h-4 text-[#2CB51D]" />
                    <span>{activeSpecs.eyebrow}</span>
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl font-black italic text-[#062B63] uppercase">
                    {activeSpecs.headline}
                  </h3>
                </div>
                <div className="p-3 bg-white border border-slate-200/80 rounded-xl text-[#062B63] shadow-xs">
                  <ShieldCheck className="w-8 h-8 text-[#2CB51D]" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 font-sans">
                {activeSpecs.specs.map((spec, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-5 bg-white rounded-xl border border-slate-200/80 space-y-2 shadow-xs"
                  >
                    <div className="font-display font-bold text-[#062B63] text-sm uppercase tracking-wide">
                      {spec.title}
                    </div>
                    <div className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {spec.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 5. Division Navigation Strip (Pale Cool Grey Background) */}
      <section className="py-10 sm:py-12 bg-[#F4F7F9] border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <div className="text-xs font-sans font-bold text-[#0B3F8C] uppercase tracking-widest">
                GULF NORTHERN X FLEET & SERVICE NETWORK
              </div>
              <div className="font-display text-xl sm:text-2xl font-bold text-[#062B63] uppercase">
                EXPLORE ALL OPERATIONAL DIVISIONS
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
              <Link
                to="/services"
                className="min-h-[44px] px-5 py-2.5 bg-white hover:bg-slate-100 text-[#062B63] font-display text-base font-bold uppercase rounded-xs border border-slate-200/80 transition-colors shadow-xs inline-flex items-center gap-2"
              >
                <span>OVERVIEW</span>
              </Link>

              {SERVICE_DIVISIONS.map((div) => {
                const isCurrent = div.id === divisionId;

                return (
                  <Link
                    key={div.id}
                    to={`/services/${div.id}`}
                    className={`min-h-[44px] px-5 py-2.5 font-display text-base font-bold uppercase rounded-xs transition-colors shadow-xs inline-flex items-center gap-2 border ${
                      isCurrent
                        ? 'bg-[#062B63] text-white border-[#062B63] shadow-sm'
                        : 'bg-white hover:bg-slate-100 text-[#062B63] border-slate-200/80'
                    }`}
                  >
                    <span className={isCurrent ? 'text-[#2CB51D]' : 'text-slate-400'}>
                      {getDivisionIcon(div.id)}
                    </span>
                    <span>{div.title}</span>
                    {isCurrent && (
                      <span className="w-2 h-2 rounded-full bg-[#2CB51D] ml-1"></span>
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Final CTA Band (Deep Navy on White Canvas) */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#062B63] text-white rounded-2xl p-8 sm:p-12 lg:p-14 shadow-2xl relative overflow-hidden border border-white/10 flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Top green accent line */}
            <div className="absolute top-0 left-0 w-32 h-1.5 bg-[#2CB51D]"></div>
            {/* Corner blur decoration */}
            <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-[#2CB51D]/10 rounded-full blur-2xl pointer-events-none"></div>

            <div className="space-y-3 text-center lg:text-left max-w-xl">
              <div className="text-[#2CB51D] font-display font-bold text-xs sm:text-sm tracking-[0.25em] uppercase">
                DIRECT DISPATCH & RATE ESTIMATES
              </div>
              <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black italic uppercase tracking-tight leading-tight">
                WORK WITH GULF NORTHERN {division.title}
              </h3>
              <p className="font-sans text-slate-200 text-base sm:text-lg leading-relaxed">
                Connect with our dedicated {division.title} team or request a fast, competitive service quote today.
              </p>
            </div>

            <button
              onClick={() => onRequestQuote(division.id)}
              className="min-h-[48px] px-8 sm:px-10 py-4 bg-[#2CB51D] hover:bg-[#259b18] text-white font-display text-lg sm:text-xl font-black uppercase tracking-wider rounded-xs transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-3 shrink-0 group w-full sm:w-auto cursor-pointer"
            >
              <FileText className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>REQUEST {division.title} QUOTE</span>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};
