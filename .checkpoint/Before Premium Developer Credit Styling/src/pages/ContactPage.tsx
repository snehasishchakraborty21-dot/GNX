import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SITE_CONFIG, NETWORK_LOCATIONS } from '../data/siteData';
import { ContactInquiryData } from '../types';
import { apiService } from '../services/apiService';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Truck,
  ArrowLeftRight,
  Wrench,
  FileText,
  ChevronRight,
  MessageSquare
} from 'lucide-react';

interface ContactPageProps {
  onRequestQuote?: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onRequestQuote }) => {
  const [formData, setFormData] = useState<ContactInquiryData>({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    preferredDivision: 'all',
    subject: 'General Operational Inquiry',
    message: '',
    consent: false
  });

  const [loading, setLoading] = useState(false);
  const [successResponse, setSuccessResponse] = useState<string | null>(null);
  const [errorResponse, setErrorResponse] = useState<string | null>(null);

  useEffect(() => {
    document.title = 'Contact Us & Find Terminals | Gulf Northern X';
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorResponse(null);
    setSuccessResponse(null);
    setLoading(true);

    try {
      const res = await apiService.submitContactInquiry(formData);
      if (res.success) {
        setSuccessResponse(res.message);
        setFormData({
          fullName: '',
          companyName: '',
          email: '',
          phone: '',
          preferredDivision: 'all',
          subject: 'General Operational Inquiry',
          message: '',
          consent: false
        });
      } else {
        setErrorResponse(res.message);
      }
    } catch {
      setErrorResponse('A connection error occurred. Please try again or reach dispatch by telephone.');
    } finally {
      setLoading(false);
    }
  };

  const handleScrollToForm = () => {
    const formElement = document.getElementById('contact-form-section');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    } else if (onRequestQuote) {
      onRequestQuote();
    }
  };

  return (
    <main className="pt-24 sm:pt-28 md:pt-32 lg:pt-36 xl:pt-40 bg-white text-slate-800 min-h-screen">
      {/* 1. Contact Hero Banner */}
      <section className="relative min-h-[340px] md:min-h-[380px] lg:min-h-[400px] flex items-center bg-[#062B63] text-white overflow-hidden">
        {/* Background Operations Asset */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1920&q=80"
            alt="Gulf Northern X Central Dispatch & Operations Center"
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
              <span>24/7 NATIONWIDE DISPATCH & SUPPORT</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black italic text-white uppercase tracking-tight leading-[1.05]">
              CONTACT & <span className="text-[#2CB51D]">FIND US</span>
            </h1>

            <p className="font-sans text-slate-200 text-base sm:text-lg lg:text-[19px] leading-relaxed border-l-3 border-[#2CB51D] pl-5 mt-4">
              Reach out directly to our central dispatch team or locate regional terminal facilities across the contiguous United States.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Main Contact Section (White Background) */}
      <section id="contact-form-section" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Contact Form Card (60-65% width) */}
            <div className="lg:col-span-7 bg-white border border-slate-200/90 rounded-[16px] p-8 sm:p-10 shadow-lg shadow-slate-900/5 space-y-6">
              <div className="space-y-1.5 pb-2 border-b border-slate-100">
                <div className="inline-flex items-center gap-2 text-[#2CB51D] font-display text-xs sm:text-sm font-bold uppercase tracking-widest">
                  <MessageSquare className="w-4 h-4" />
                  <span>DIRECT SERVICE INQUIRY FORM</span>
                </div>
                <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-black italic text-[#062B63] uppercase leading-tight">
                  CONNECT WITH OUR OPERATIONS DESK
                </h2>
                <p className="font-sans text-slate-600 text-sm sm:text-[15px] pt-1">
                  Complete the details below to route your request directly to the appropriate regional terminal dispatcher.
                </p>
              </div>

              {successResponse ? (
                <div className="p-8 sm:p-10 bg-[#E4F7EE] border border-[#2CB51D]/40 text-[#062B63] rounded-xl space-y-4 text-center">
                  <div className="w-16 h-16 bg-[#2CB51D] text-white rounded-full flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <h3 className="font-display text-2xl font-black uppercase text-[#062B63]">
                    INQUIRY SUBMITTED SUCCESSFULLY
                  </h3>
                  <p className="font-sans text-sm sm:text-base text-slate-700 max-w-md mx-auto leading-relaxed">
                    {successResponse}
                  </p>
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => setSuccessResponse(null)}
                      className="px-8 py-3.5 bg-[#062B63] hover:bg-[#0B3F8C] text-white font-display text-base font-bold uppercase tracking-wider rounded-xs transition-colors shadow-md"
                    >
                      SUBMIT ANOTHER INQUIRY
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    <div>
                      <label className="block text-xs sm:text-sm font-sans font-bold text-[#062B63] uppercase tracking-wider mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Jane Doe"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-4 py-3 bg-white border border-slate-200 rounded-[10px] text-slate-800 font-sans text-sm sm:text-base focus:border-[#2CB51D] focus:ring-2 focus:ring-[#2CB51D]/20 outline-none transition-all placeholder:text-slate-400 shadow-xs"
                      />
                    </div>

                    <div>
                      <label className="block text-xs sm:text-sm font-sans font-bold text-[#062B63] uppercase tracking-wider mb-1.5">
                        Company Name
                      </label>
                      <input
                        type="text"
                        placeholder="Enterprise Freight Ltd."
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        className="w-full px-4 py-3 bg-white border border-slate-200 rounded-[10px] text-slate-800 font-sans text-sm sm:text-base focus:border-[#2CB51D] focus:ring-2 focus:ring-[#2CB51D]/20 outline-none transition-all placeholder:text-slate-400 shadow-xs"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    <div>
                      <label className="block text-xs sm:text-sm font-sans font-bold text-[#062B63] uppercase tracking-wider mb-1.5">
                        Work Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="jdoe@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-white border border-slate-200 rounded-[10px] text-slate-800 font-sans text-sm sm:text-base focus:border-[#2CB51D] focus:ring-2 focus:ring-[#2CB51D]/20 outline-none transition-all placeholder:text-slate-400 shadow-xs"
                      />
                    </div>

                    <div>
                      <label className="block text-xs sm:text-sm font-sans font-bold text-[#062B63] uppercase tracking-wider mb-1.5">
                        Direct Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="(800) 555-0199"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 bg-white border border-slate-200 rounded-[10px] text-slate-800 font-sans text-sm sm:text-base focus:border-[#2CB51D] focus:ring-2 focus:ring-[#2CB51D]/20 outline-none transition-all placeholder:text-slate-400 shadow-xs"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    <div>
                      <label className="block text-xs sm:text-sm font-sans font-bold text-[#062B63] uppercase tracking-wider mb-1.5">
                        Preferred Service Division
                      </label>
                      <select
                        value={formData.preferredDivision}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            preferredDivision: e.target.value as 'all' | 'xpress' | 'xfers' | 'xtras'
                          })
                        }
                        className="w-full px-4 py-3 bg-white border border-slate-200 rounded-[10px] text-slate-800 font-sans text-sm sm:text-base focus:border-[#2CB51D] focus:ring-2 focus:ring-[#2CB51D]/20 outline-none transition-all shadow-xs"
                      >
                        <option value="all">All Divisions / General Support</option>
                        <option value="xpress">Xpress (Freight & Leasing)</option>
                        <option value="xfers">Xfers (Transfers & Storage)</option>
                        <option value="xtras">Xtras (Tires, Washouts & Repairs)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs sm:text-sm font-sans font-bold text-[#062B63] uppercase tracking-wider mb-1.5">
                        Inquiry Subject
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Dedicated Contract Capacity"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-3 bg-white border border-slate-200 rounded-[10px] text-slate-800 font-sans text-sm sm:text-base focus:border-[#2CB51D] focus:ring-2 focus:ring-[#2CB51D]/20 outline-none transition-all placeholder:text-slate-400 shadow-xs"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-sans font-bold text-[#062B63] uppercase tracking-wider mb-1.5">
                      Message or Detailed Service Requirements *
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Describe your freight, equipment transfer, storage, or commercial vehicle service needs..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-slate-200 rounded-[10px] text-slate-800 font-sans text-sm sm:text-base focus:border-[#2CB51D] focus:ring-2 focus:ring-[#2CB51D]/20 outline-none transition-all placeholder:text-slate-400 shadow-xs"
                    />
                  </div>

                  <div className="flex items-start gap-3 pt-1">
                    <input
                      type="checkbox"
                      id="consent"
                      required
                      checked={formData.consent}
                      onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                      className="mt-1 h-4 w-4 text-[#2CB51D] focus:ring-[#2CB51D] border-slate-300 rounded-[4px] accent-[#2CB51D] cursor-pointer"
                    />
                    <label htmlFor="consent" className="text-xs sm:text-sm font-sans text-slate-600 cursor-pointer leading-relaxed">
                      I agree to allow Gulf Northern X representatives to contact me regarding this commercial inquiry. *
                    </label>
                  </div>

                  {errorResponse && (
                    <div className="p-3.5 bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm font-sans rounded-lg flex items-center gap-2.5">
                      <AlertCircle className="w-5 h-5 text-red-500 shrink-0" />
                      <span>{errorResponse}</span>
                    </div>
                  )}

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full min-h-[48px] py-4 bg-[#2CB51D] hover:bg-[#259b18] text-white font-display text-lg sm:text-xl font-black uppercase tracking-wider rounded-xs transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2.5 disabled:opacity-50 group"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          <span>SENDING INQUIRY...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                          <span>SEND MESSAGE TO DISPATCH</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Contact Information Area (35-40% width) */}
            <div className="lg:col-span-5 space-y-8">
              {/* Commercial Dispatch Desk Card */}
              <div className="bg-white border border-slate-200/90 rounded-[16px] p-7 sm:p-8 shadow-sm space-y-6">
                <div className="border-b border-slate-100 pb-4">
                  <div className="text-[#2CB51D] font-display text-xs font-bold uppercase tracking-widest mb-1">
                    CENTRAL OPERATIONS
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl font-black italic text-[#062B63] uppercase">
                    COMMERCIAL DISPATCH DESK
                  </h3>
                </div>

                <div className="space-y-5 font-sans text-sm sm:text-base text-slate-700">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#E4F7EE] text-[#087F5B] flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-[#2CB51D]" />
                    </div>
                    <div>
                      <div className="font-bold text-[#062B63] text-sm uppercase tracking-wide">
                        Telephone Support:
                      </div>
                      {SITE_CONFIG.phone ? (
                        <a
                          href={`tel:${SITE_CONFIG.phone}`}
                          className="text-[#062B63] font-mono text-base sm:text-lg font-bold hover:text-[#2CB51D] transition-colors inline-block mt-0.5"
                        >
                          {SITE_CONFIG.phone}
                        </a>
                      ) : (
                        <span className="text-slate-600 font-mono text-base font-medium">
                          Direct Dispatch Hotline Available
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#E4F7EE] text-[#087F5B] flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-[#2CB51D]" />
                    </div>
                    <div>
                      <div className="font-bold text-[#062B63] text-sm uppercase tracking-wide">
                        Central Dispatch Email:
                      </div>
                      {SITE_CONFIG.email ? (
                        <a
                          href={`mailto:${SITE_CONFIG.email}`}
                          className="text-[#062B63] hover:text-[#2CB51D] transition-colors break-all font-medium inline-block mt-0.5"
                        >
                          {SITE_CONFIG.email}
                        </a>
                      ) : (
                        <span className="text-slate-600 font-medium">
                          dispatch@gulfnorthernx.com
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#E4F7EE] text-[#087F5B] flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-[#2CB51D]" />
                    </div>
                    <div>
                      <div className="font-bold text-[#062B63] text-sm uppercase tracking-wide">
                        Operations Hours:
                      </div>
                      <div className="text-slate-600 font-medium mt-0.5">
                        {SITE_CONFIG.workingHours || '24/7/365 Direct Dispatch Response'}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Regional Terminal Network Locations Card */}
              <div className="bg-white border border-slate-200/90 rounded-[16px] p-7 sm:p-8 shadow-sm space-y-5">
                <div className="flex items-center gap-2.5 pb-4 border-b border-slate-100">
                  <div className="w-8 h-8 rounded-lg bg-[#062B63]/10 text-[#062B63] flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-[#2CB51D]" />
                  </div>
                  <div>
                    <div className="font-display text-lg sm:text-xl font-black text-[#062B63] uppercase">
                      REGIONAL TERMINAL LOCATIONS
                    </div>
                    <div className="text-xs font-sans text-slate-500 font-medium">
                      Operating across the contiguous United States
                    </div>
                  </div>
                </div>

                <div className="space-y-3 font-sans text-xs sm:text-sm max-h-[380px] overflow-y-auto pr-1">
                  {NETWORK_LOCATIONS.map((loc) => (
                    <div
                      key={loc.id}
                      className="p-3.5 bg-slate-50 hover:bg-slate-100/80 rounded-lg border border-slate-200/80 transition-colors flex justify-between items-center gap-3"
                    >
                      <div>
                        <span className="font-bold text-[#062B63] text-sm sm:text-[15px]">
                          {loc.city}, {loc.state}
                        </span>
                        <div className="text-xs text-slate-500 mt-0.5">{loc.address}</div>
                      </div>
                      <span className="text-[10px] font-sans font-extrabold px-2.5 py-1 bg-[#062B63] text-white rounded-md tracking-wider uppercase shrink-0">
                        {loc.type.toUpperCase()}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Service-Enquiry Guidance Section (Cool Grey Background) */}
      <section className="py-20 lg:py-28 bg-[#F4F7F9] border-y border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Centered Introduction */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="text-[#2CB51D] font-display font-bold text-xs sm:text-sm tracking-[0.25em] uppercase">
              DIRECT INQUIRY ROUTING
            </div>
            <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black italic text-[#062B63] uppercase">
              HOW WE ROUTE YOUR INQUIRY
            </h3>
            <p className="font-sans text-slate-600 text-base sm:text-lg">
              Every request is assigned directly to specialized coordinators across our three operating pillars.
            </p>
          </div>

          {/* Three Equal White Guidance Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {/* Card 1: XPRESS */}
            <div className="bg-white border border-slate-200/90 rounded-[14px] p-7 sm:p-8 shadow-sm hover:shadow-xl hover:border-[#2CB51D] transition-all duration-300 relative overflow-hidden flex flex-col justify-between h-full hover:-translate-y-1 motion-reduce:hover:translate-y-0 group before:absolute before:top-0 before:left-0 before:right-0 before:h-1.5 before:bg-[#2CB51D]">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3.5 bg-[#0B3F8C]/10 text-[#0B3F8C] rounded-lg group-hover:bg-[#0B3F8C] group-hover:text-white transition-colors">
                    <Truck className="w-7 h-7" />
                  </div>
                  <span className="text-[11px] font-sans font-extrabold px-2.5 py-1 rounded-full bg-[#0B3F8C]/10 text-[#0B3F8C] tracking-wide uppercase">
                    FREIGHT & LEASING
                  </span>
                </div>

                <h4 className="font-display text-2xl sm:text-3xl font-black text-[#062B63] uppercase">
                  XPRESS ROUTING
                </h4>

                <p className="font-sans text-sm sm:text-[15px] text-slate-600 leading-relaxed">
                  Dedicated freight dispatch handles rate quotes, lane contracts, refrigerated staging, and tractor/trailer leasing inquiries.
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100">
                <Link
                  to="/services/xpress"
                  className="inline-flex items-center gap-1.5 font-display text-sm font-bold text-[#0B3F8C] group-hover:text-[#2CB51D] transition-colors uppercase tracking-wider"
                >
                  <span>EXPLORE XPRESS DIVISION</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Card 2: XFERS */}
            <div className="bg-white border border-slate-200/90 rounded-[14px] p-7 sm:p-8 shadow-sm hover:shadow-xl hover:border-[#2CB51D] transition-all duration-300 relative overflow-hidden flex flex-col justify-between h-full hover:-translate-y-1 motion-reduce:hover:translate-y-0 group before:absolute before:top-0 before:left-0 before:right-0 before:h-1.5 before:bg-[#2CB51D]">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3.5 bg-[#E4F7EE] text-[#087F5B] rounded-lg group-hover:bg-[#087F5B] group-hover:text-white transition-colors">
                    <ArrowLeftRight className="w-7 h-7" />
                  </div>
                  <span className="text-[11px] font-sans font-extrabold px-2.5 py-1 rounded-full bg-[#087F5B]/10 text-[#087F5B] tracking-wide uppercase">
                    TRANSFERS & STORAGE
                  </span>
                </div>

                <h4 className="font-display text-2xl sm:text-3xl font-black text-[#062B63] uppercase">
                  XFERS ROUTING
                </h4>

                <p className="font-sans text-sm sm:text-[15px] text-slate-600 leading-relaxed">
                  Technical field coordinators manage equipment pull-outs, pump operations, escort logistics, and cold storage scheduling.
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100">
                <Link
                  to="/services/xfers"
                  className="inline-flex items-center gap-1.5 font-display text-sm font-bold text-[#087F5B] group-hover:text-[#2CB51D] transition-colors uppercase tracking-wider"
                >
                  <span>EXPLORE XFERS DIVISION</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Card 3: XTRAS */}
            <div className="bg-white border border-slate-200/90 rounded-[14px] p-7 sm:p-8 shadow-sm hover:shadow-xl hover:border-[#2CB51D] transition-all duration-300 relative overflow-hidden flex flex-col justify-between h-full hover:-translate-y-1 motion-reduce:hover:translate-y-0 group before:absolute before:top-0 before:left-0 before:right-0 before:h-1.5 before:bg-[#2CB51D]">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3.5 bg-[#062B63]/10 text-[#062B63] rounded-lg group-hover:bg-[#062B63] group-hover:text-white transition-colors">
                    <Wrench className="w-7 h-7" />
                  </div>
                  <span className="text-[11px] font-sans font-extrabold px-2.5 py-1 rounded-full bg-[#062B63]/10 text-[#062B63] tracking-wide uppercase">
                    TIRES & WASHOUTS
                  </span>
                </div>

                <h4 className="font-display text-2xl sm:text-3xl font-black text-[#062B63] uppercase">
                  XTRAS ROUTING
                </h4>

                <p className="font-sans text-sm sm:text-[15px] text-slate-600 leading-relaxed">
                  Facility service managers coordinate certified food-grade trailer washouts, bulk tire sales, and mobile diesel mechanic repairs.
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100">
                <Link
                  to="/services/xtras"
                  className="inline-flex items-center gap-1.5 font-display text-sm font-bold text-[#062B63] group-hover:text-[#2CB51D] transition-colors uppercase tracking-wider"
                >
                  <span>EXPLORE XTRAS DIVISION</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Final CTA Band (Deep Navy on White Canvas) */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#062B63] text-white rounded-2xl p-8 sm:p-12 lg:p-14 shadow-2xl relative overflow-hidden border border-white/10 flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Top green accent bar */}
            <div className="absolute top-0 left-0 w-32 h-1.5 bg-[#2CB51D]"></div>
            {/* Subtle corner graphic glow */}
            <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-[#2CB51D]/10 rounded-full blur-2xl pointer-events-none"></div>

            <div className="space-y-3 text-center lg:text-left max-w-xl">
              <div className="text-[#2CB51D] font-display font-bold text-xs sm:text-sm tracking-[0.25em] uppercase">
                READY TO MOVE FORWARD
              </div>
              <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black italic uppercase tracking-tight leading-tight">
                WORK WITH GULF NORTHERN X
              </h3>
              <p className="font-sans text-slate-200 text-base sm:text-lg leading-relaxed">
                Contact our dispatch desk or request a customized service rate quote today.
              </p>
            </div>

            <button
              onClick={onRequestQuote || handleScrollToForm}
              className="min-h-[48px] px-8 sm:px-10 py-4 bg-[#2CB51D] hover:bg-[#259b18] text-white font-display text-lg sm:text-xl font-black uppercase tracking-wider rounded-xs transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-3 shrink-0 group w-full sm:w-auto"
            >
              <FileText className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>REQUEST A QUOTE</span>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};
