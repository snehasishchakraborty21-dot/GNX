import React, { useState, useEffect } from 'react';
import { SITE_CONFIG, NETWORK_LOCATIONS } from '../data/siteData';
import { ContactInquiryData } from '../types';
import { apiService } from '../services/apiService';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

export const ContactPage: React.FC = () => {
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

  return (
    <main className="pt-20 bg-[#0A0D0C] text-white min-h-screen">
      {/* Contact Hero */}
      <section className="relative py-24 bg-[#0A0D0C] text-white overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1920&q=80"
            alt="Gulf Northern X Operations Center"
            className="w-full h-full object-cover object-center opacity-30"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0D0C] via-[#062B63]/90 to-[#0A0D0C]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="text-[#2CB51D] font-bold tracking-[0.4em] uppercase text-xs sm:text-sm">
            24/7 NATIONWIDE DISPATCH & SUPPORT
          </div>

          <h1 className="font-display text-5xl sm:text-7xl font-black italic text-white uppercase tracking-tight">
            CONTACT & <span className="text-[#2CB51D]">FIND US</span>
          </h1>

          <p className="font-sans text-slate-200 text-lg max-w-2xl leading-relaxed border-l-2 border-[#2CB51D] pl-6">
            Reach out directly to our central dispatch team or locate regional terminal facilities across the contiguous United States.
          </p>
        </div>
      </section>

      {/* Main Grid: Form + Info Sidebar */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Form Area */}
          <div className="lg:col-span-7 bg-[#111827] text-white p-8 md:p-10 rounded-xs border border-white/10 shadow-2xl space-y-6">
            <div>
              <span className="text-xs font-sans font-bold text-[#2CB51D] uppercase tracking-widest">
                DIRECT SERVICE INQUIRY FORM
              </span>
              <h2 className="font-display text-3xl font-black italic text-white uppercase mt-1">
                CONNECT WITH OUR OPERATIONS DESK
              </h2>
            </div>

            {successResponse ? (
              <div className="p-8 bg-[#2CB51D]/10 border border-[#2CB51D] text-white rounded-xs space-y-4 text-center">
                <CheckCircle2 className="w-12 h-12 text-[#2CB51D] mx-auto" />
                <h3 className="font-display text-2xl font-bold uppercase">INQUIRY SUBMITTED SUCCESSFULLY</h3>
                <p className="font-sans text-sm text-slate-300 max-w-md mx-auto">{successResponse}</p>
                <button
                  onClick={() => setSuccessResponse(null)}
                  className="px-6 py-3 bg-[#062B63] text-white font-display text-lg font-bold rounded-xs hover:bg-[#0B3F8C] uppercase"
                >
                  SUBMIT ANOTHER INQUIRY
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-sans font-bold text-slate-300 mb-1 uppercase tracking-wider">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white/5 border border-white/10 rounded-xs focus:border-[#2CB51D] outline-none text-white font-sans text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-sans font-bold text-slate-300 mb-1 uppercase tracking-wider">
                      Company Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enterprise Freight Ltd."
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white/5 border border-white/10 rounded-xs focus:border-[#2CB51D] outline-none text-white font-sans text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-sans font-bold text-slate-300 mb-1 uppercase tracking-wider">
                      Work Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jdoe@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white/5 border border-white/10 rounded-xs focus:border-[#2CB51D] outline-none text-white font-sans text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-sans font-bold text-slate-300 mb-1 uppercase tracking-wider">
                      Direct Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="(800) 555-0199"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white/5 border border-white/10 rounded-xs focus:border-[#2CB51D] outline-none text-white font-sans text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-sans font-bold text-slate-300 mb-1 uppercase tracking-wider">
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
                      className="w-full px-3.5 py-2.5 bg-[#0A0D0C] border border-white/10 rounded-xs focus:border-[#2CB51D] outline-none text-white font-sans text-sm"
                    >
                      <option value="all">All Divisions / General Support</option>
                      <option value="xpress">Xpress (Freight & Leasing)</option>
                      <option value="xfers">Xfers (Transfers & Storage)</option>
                      <option value="xtras">Xtras (Tires, Washouts & Repairs)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-sans font-bold text-slate-300 mb-1 uppercase tracking-wider">
                      Inquiry Subject
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Dedicated Contract Capacity"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white/5 border border-white/10 rounded-xs focus:border-[#2CB51D] outline-none text-white font-sans text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-sans font-bold text-slate-300 mb-1 uppercase tracking-wider">
                    Message or Detailed Service Requirements *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe your freight, equipment transfer, storage, or commercial vehicle service needs..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white/5 border border-white/10 rounded-xs focus:border-[#2CB51D] outline-none text-white font-sans text-sm"
                  />
                </div>

                <div className="flex items-start gap-2.5 pt-2">
                  <input
                    type="checkbox"
                    id="consent"
                    required
                    checked={formData.consent}
                    onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                    className="mt-1 h-4 w-4 text-[#2CB51D] focus:ring-[#0B3F8C] border-white/20 rounded-xs bg-white/5"
                  />
                  <label htmlFor="consent" className="text-xs font-sans text-slate-300">
                    I agree to allow Gulf Northern X representatives to contact me regarding this commercial inquiry. *
                  </label>
                </div>

                {errorResponse && (
                  <div className="p-3 bg-red-950/50 border border-red-800 text-red-300 text-xs font-sans rounded-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                    <span>{errorResponse}</span>
                  </div>
                )}

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 bg-[#2CB51D] hover:bg-white hover:text-black text-white font-display text-xl font-black uppercase tracking-wider rounded-xs transition-colors shadow-lg flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>SENDING INQUIRY...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>SEND MESSAGE TO DISPATCH</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Info Sidebar Column */}
          <div className="lg:col-span-5 space-y-8">
            {/* Direct Contact Info */}
            <div className="bg-[#111827] p-8 text-white rounded-xs border border-white/10 space-y-6 shadow-xl">
              <h3 className="font-display text-3xl font-black italic text-white border-b border-white/10 pb-4 uppercase">
                COMMERCIAL DISPATCH DESK
              </h3>

              <div className="space-y-4 font-sans text-sm text-slate-300">
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#2CB51D] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-white">Telephone Support:</div>
                    <a href={`tel:${SITE_CONFIG.phone}`} className="text-[#2CB51D] font-mono text-base font-bold hover:underline">
                      {SITE_CONFIG.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#2CB51D] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-white">Central Dispatch Email:</div>
                    <a href={`mailto:${SITE_CONFIG.email}`} className="text-slate-200 hover:text-[#2CB51D]">
                      {SITE_CONFIG.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#2CB51D] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-white">Operations Hours:</div>
                    <div>{SITE_CONFIG.workingHours}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Regional Terminal List ready for data */}
            <div className="bg-[#111827] text-white p-6 rounded-xs border border-white/10 shadow-xl space-y-4">
              <div className="flex items-center gap-2 text-xs font-sans font-bold text-[#2CB51D] uppercase tracking-wider">
                <MapPin className="w-4 h-4 text-[#2CB51D]" />
                REGIONAL TERMINAL NETWORK LOCATIONS
              </div>

              <div className="grid grid-cols-1 gap-2.5 font-sans text-xs text-slate-300">
                {NETWORK_LOCATIONS.map((loc) => (
                  <div key={loc.id} className="p-2.5 bg-white/5 rounded-xs border border-white/10 flex justify-between items-center">
                    <div>
                      <span className="font-bold text-white">{loc.city}, {loc.state}</span>
                      <div className="text-[10px] text-slate-400">{loc.address}</div>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 bg-[#0B3F8C] text-white rounded-xs">
                      {loc.type.toUpperCase()}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
