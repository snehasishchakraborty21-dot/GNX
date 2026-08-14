import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HowItWorksProps {
  onRequestQuote: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onRequestQuote }) => {
  const steps = [
    {
      num: '01',
      title: 'SELECT SERVICE DIVISION',
      subtitle: 'Xpress • Xfers • Xtras',
      desc: 'Identify whether your requirement involves freight transportation, specialized transfer setups, storage, or commercial vehicle servicing.'
    },
    {
      num: '02',
      title: 'SUBMIT REQUIREMENTS',
      subtitle: 'Details & Timeline',
      desc: 'Specify your requirements, equipment needs, or commercial service requests through our direct online quote request form.'
    },
    {
      num: '03',
      title: 'DISPATCH RESPONSE',
      subtitle: 'Rate & Schedule',
      desc: 'Our dispatch team reviews your request, verifies equipment availability, and responds promptly with a rate estimate.'
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-[#F8FAF9] text-[#0A0D0C] border-t border-slate-200">
      <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-10 bg-[#2CB51D]"></span>
              <span className="font-sans text-xs sm:text-sm font-extrabold tracking-[0.25em] text-[#062B63] uppercase">
                STREAMLINED ENQUIRY PROCESS
              </span>
            </div>

            <h2 className="font-display text-4xl sm:text-6xl font-black text-[#062B63] tracking-tight uppercase leading-[0.95]">
              HOW TO REQUEST SERVICE
            </h2>
          </div>

          <p className="font-sans text-slate-700 text-base sm:text-lg max-w-md font-medium">
            Connecting with Gulf Northern X is direct, transparent, and structured for fast response.
          </p>
        </div>

        {/* Continuous Horizontal Pipeline Sequence (Single Container) */}
        <div className="bg-white border border-slate-200 rounded-xs shadow-md overflow-hidden grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-200">
          {steps.map((st, idx) => (
            <div key={idx} className="p-8 lg:p-10 space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                {/* Large Display Step Number */}
                <div className="flex items-baseline justify-between border-b border-slate-100 pb-4">
                  <span className="font-display text-5xl sm:text-6xl font-black text-[#062B63]/25">
                    {st.num}
                  </span>
                  <span className="font-sans text-xs font-extrabold text-[#2CB51D] uppercase tracking-widest">
                    {st.subtitle}
                  </span>
                </div>

                <h3 className="font-display text-2xl font-black text-[#062B63] tracking-tight uppercase">
                  {st.title}
                </h3>

                <p className="font-sans text-base text-slate-800 leading-relaxed font-normal">
                  {st.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Bar */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 bg-white p-8 rounded-xs border border-slate-200 shadow-md">
          <div>
            <div className="font-display text-2xl font-black text-[#062B63] uppercase">
              READY TO REQUEST SERVICE?
            </div>
            <p className="font-sans text-base text-slate-700 mt-1 font-medium">
              Submit your enquiry online and our team will get back to you promptly.
            </p>
          </div>

          <button
            onClick={onRequestQuote}
            className="px-8 py-4 bg-[#2CB51D] hover:bg-[#259b18] text-white font-display text-lg font-black uppercase tracking-wider rounded-xs transition-colors shadow-lg shrink-0 flex items-center gap-3 group"
          >
            <span>START QUOTE REQUEST</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};


