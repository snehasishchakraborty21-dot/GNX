import React, { useState, useEffect } from 'react';
import { QuoteRequestData } from '../../types';
import { apiService } from '../../services/apiService';
import { X, Truck, ArrowLeftRight, Wrench, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultDivision?: 'xpress' | 'xfers' | 'xtras';
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  defaultDivision = 'xpress'
}) => {
  const [division, setDivision] = useState<'xpress' | 'xfers' | 'xtras'>(defaultDivision);
  const [formData, setFormData] = useState<QuoteRequestData>({
    division: defaultDivision,
    specificService: 'Refrigerated Freight',
    origin: '',
    destination: '',
    commodityOrEquipment: '',
    timeframe: 'Immediate (1-3 Days)',
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    notes: ''
  });

  const [loading, setLoading] = useState(false);
  const [successResult, setSuccessResult] = useState<{ message: string; refId: string } | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    setDivision(defaultDivision);
    setFormData((prev) => ({
      ...prev,
      division: defaultDivision,
      specificService:
        defaultDivision === 'xpress'
          ? 'Refrigerated Freight'
          : defaultDivision === 'xfers'
          ? 'Cold Storage'
          : 'Trailer Washout'
    }));
  }, [defaultDivision, isOpen]);

  if (!isOpen) return null;

  const handleDivisionChange = (div: 'xpress' | 'xfers' | 'xtras') => {
    setDivision(div);
    const defaultServices = {
      xpress: 'Refrigerated Freight',
      xfers: 'Cold Storage Warehousing',
      xtras: 'Certified Trailer Washouts'
    };
    setFormData((prev) => ({
      ...prev,
      division: div,
      specificService: defaultServices[div]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setLoading(true);

    try {
      const res = await apiService.submitQuoteRequest(formData);
      if (res.success) {
        setSuccessResult({
          message: res.message,
          refId: res.referenceId || 'GNX-QT-0000'
        });
      } else {
        setErrorMessage(res.message);
      }
    } catch {
      setErrorMessage('A network error occurred. Please try again or call dispatch directly.');
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setSuccessResult(null);
    setErrorMessage(null);
    setFormData({
      division: 'xpress',
      specificService: 'Refrigerated Freight',
      origin: '',
      destination: '',
      commodityOrEquipment: '',
      timeframe: 'Immediate (1-3 Days)',
      fullName: '',
      companyName: '',
      email: '',
      phone: '',
      notes: ''
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0A0D0C]/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-white text-[#0A0D0C] shadow-2xl rounded-sm border-2 border-[#0B3F8C] overflow-hidden my-8">
        {/* Header Bar */}
        <div className="bg-[#062B63] text-white px-6 py-4 flex items-center justify-between border-b border-[#2CB51D]/40">
          <div>
            <div className="text-xs font-sans font-bold text-[#2CB51D] tracking-widest uppercase">
              Gulf Northern X Operational Network
            </div>
            <h2 className="font-display text-2xl font-bold tracking-wider">
              REQUEST A COMMERCIAL SERVICE QUOTE
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-sm text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close quote modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 md:p-8 max-h-[80vh] overflow-y-auto">
          {successResult ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 bg-[#2CB51D]/10 text-[#2CB51D] rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="font-display text-3xl font-bold text-[#062B63]">
                QUOTE REQUEST CONFIRMED
              </h3>
              <p className="text-sm font-sans text-slate-600 max-w-md mx-auto">
                {successResult.message}
              </p>
              <div className="p-4 bg-[#F7FAF8] border border-slate-200 rounded-sm inline-block text-left font-mono text-xs">
                <div>Reference ID: <span className="font-bold text-[#0B3F8C]">{successResult.refId}</span></div>
                <div>Division: <span className="font-bold text-slate-800 uppercase">{formData.division}</span></div>
                <div>Requested Service: <span className="font-bold text-slate-800">{formData.specificService}</span></div>
              </div>
              <div className="pt-4">
                <button
                  onClick={resetForm}
                  className="px-8 py-3 bg-[#062B63] text-white font-display text-lg font-bold rounded-sm hover:bg-[#0B3F8C] transition-colors"
                >
                  DONE
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Step 1: Select Division */}
              <div>
                <label className="block text-xs font-sans font-bold text-slate-500 uppercase tracking-widest mb-3">
                  Step 1: Select Service Division
                </label>
                <div className="grid grid-cols-3 gap-3">
                  <button
                    type="button"
                    onClick={() => handleDivisionChange('xpress')}
                    className={`p-3 rounded-sm border-2 text-left transition-all ${
                      division === 'xpress'
                        ? 'border-[#0B3F8C] bg-[#0B3F8C]/10 text-[#062B63] font-bold shadow-xs'
                        : 'border-slate-200 hover:border-slate-300 text-slate-700'
                    }`}
                  >
                    <div className="flex items-center gap-2 font-display text-xl">
                      <Truck className="w-5 h-5 text-[#0B3F8C]" />
                      XPRESS
                    </div>
                    <div className="text-[11px] font-sans text-slate-500 mt-0.5 hidden sm:block">Freight & Leasing</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleDivisionChange('xfers')}
                    className={`p-3 rounded-sm border-2 text-left transition-all ${
                      division === 'xfers'
                        ? 'border-[#087F5B] bg-[#087F5B]/10 text-[#087F5B] font-bold shadow-xs'
                        : 'border-slate-200 hover:border-slate-300 text-slate-700'
                    }`}
                  >
                    <div className="flex items-center gap-2 font-display text-xl">
                      <ArrowLeftRight className="w-5 h-5 text-[#087F5B]" />
                      XFERS
                    </div>
                    <div className="text-[11px] font-sans text-slate-500 mt-0.5 hidden sm:block">Transfers & Storage</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleDivisionChange('xtras')}
                    className={`p-3 rounded-sm border-2 text-left transition-all ${
                      division === 'xtras'
                        ? 'border-[#062B63] bg-[#062B63]/10 text-[#062B63] font-bold shadow-xs'
                        : 'border-slate-200 hover:border-slate-300 text-slate-700'
                    }`}
                  >
                    <div className="flex items-center gap-2 font-display text-xl">
                      <Wrench className="w-5 h-5 text-[#062B63]" />
                      XTRAS
                    </div>
                    <div className="text-[11px] font-sans text-slate-500 mt-0.5 hidden sm:block">Tires & Washouts</div>
                  </button>
                </div>
              </div>

              {/* Step 2: Specific Service Options */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-sans font-bold text-slate-700 mb-1">
                    Specific Service Needed *
                  </label>
                  <select
                    value={formData.specificService}
                    onChange={(e) => setFormData({ ...formData, specificService: e.target.value })}
                    className="w-full px-3 py-2.5 border border-slate-300 rounded-sm focus:ring-2 focus:ring-[#0B3F8C] focus:border-transparent outline-hidden font-sans text-sm"
                    required
                  >
                    {division === 'xpress' && (
                      <>
                        <option value="Refrigerated Freight">Refrigerated Freight (Reefer)</option>
                        <option value="Dry-Box Freight">Dry-Box Freight</option>
                        <option value="Flatbed Freight">Flatbed Freight</option>
                        <option value="Brokerage Logistics">Freight Brokerage</option>
                        <option value="Truck Leasing">Truck Leasing</option>
                        <option value="Trailer Rental">Trailer Rental</option>
                      </>
                    )}
                    {division === 'xfers' && (
                      <>
                        <option value="Field Pull-Outs">Field Pull-Outs</option>
                        <option value="Site Setups">Site Setups</option>
                        <option value="Industrial Pumps">Industrial Pumps</option>
                        <option value="Cold Storage Warehousing">Cold Storage Warehousing</option>
                        <option value="Dry Storage Warehousing">Dry Storage Warehousing</option>
                        <option value="Escort Services">Pilot / Escort Support</option>
                      </>
                    )}
                    {division === 'xtras' && (
                      <>
                        <option value="Commercial Tire Sales">Commercial Tire Sales</option>
                        <option value="Trailer Washouts">Certified Trailer Washout</option>
                        <option value="Commercial Repairs">Commercial Truck & Trailer Repairs</option>
                        <option value="Tire Disposal">Eco-Friendly Tire Disposal</option>
                        <option value="Recycled Tires">Retreads & Recycled Tires</option>
                        <option value="Heavy-Duty Batteries">Heavy-Duty Batteries</option>
                      </>
                    )}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-sans font-bold text-slate-700 mb-1">
                    Required Timeframe *
                  </label>
                  <select
                    value={formData.timeframe}
                    onChange={(e) => setFormData({ ...formData, timeframe: e.target.value })}
                    className="w-full px-3 py-2.5 border border-slate-300 rounded-sm focus:ring-2 focus:ring-[#0B3F8C] focus:border-transparent outline-hidden font-sans text-sm"
                    required
                  >
                    <option value="Immediate (1-3 Days)">Immediate Dispatch (1-3 Days)</option>
                    <option value="Next Week">Next Week</option>
                    <option value="Contract / Recurring">Contract / Recurring Service</option>
                    <option value="Planning Stage">Planning / Future Budgeting</option>
                  </select>
                </div>
              </div>

              {/* Service Route / Location Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-sans font-bold text-slate-700 mb-1">
                    Origin / Location
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Atlanta, GA or Terminal ZIP"
                    value={formData.origin || ''}
                    onChange={(e) => setFormData({ ...formData, origin: e.target.value })}
                    className="w-full px-3 py-2.5 border border-slate-300 rounded-sm focus:ring-2 focus:ring-[#0B3F8C] outline-hidden font-sans text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-sans font-bold text-slate-700 mb-1">
                    Destination (if applicable)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Chicago, IL or Delivery Site"
                    value={formData.destination || ''}
                    onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                    className="w-full px-3 py-2.5 border border-slate-300 rounded-sm focus:ring-2 focus:ring-[#0B3F8C] outline-hidden font-sans text-sm"
                  />
                </div>
              </div>

              {/* Step 3: Contact Info */}
              <div className="border-t border-slate-200 pt-4">
                <label className="block text-xs font-sans font-bold text-slate-500 uppercase tracking-widest mb-3">
                  Step 2: Contact Information
                </label>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-sans font-bold text-slate-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="John Smith"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-3 py-2.5 border border-slate-300 rounded-sm focus:ring-2 focus:ring-[#0B3F8C] outline-hidden font-sans text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-sans font-bold text-slate-700 mb-1">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Logistics Corp Inc."
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className="w-full px-3 py-2.5 border border-slate-300 rounded-sm focus:ring-2 focus:ring-[#0B3F8C] outline-hidden font-sans text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-sans font-bold text-slate-700 mb-1">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jsmith@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3 py-2.5 border border-slate-300 rounded-sm focus:ring-2 focus:ring-[#0B3F8C] outline-hidden font-sans text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-sans font-bold text-slate-700 mb-1">
                      Direct Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="(555) 123-4567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3 py-2.5 border border-slate-300 rounded-sm focus:ring-2 focus:ring-[#0B3F8C] outline-hidden font-sans text-sm"
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <label className="block text-xs font-sans font-bold text-slate-700 mb-1">
                    Special Service Notes / Requirements
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Specific weight, trailer temp requirement, quantity of tires or equipment details..."
                    value={formData.notes || ''}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-300 rounded-sm focus:ring-2 focus:ring-[#0B3F8C] outline-hidden font-sans text-sm"
                  />
                </div>
              </div>

              {errorMessage && (
                <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs font-sans rounded-sm flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 py-2.5 border border-slate-300 text-slate-700 hover:bg-slate-100 font-display text-lg font-bold rounded-sm transition-colors"
                >
                  CANCEL
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="px-8 py-2.5 bg-[#2CB51D] hover:bg-[#259b18] text-white font-display text-xl font-bold rounded-sm transition-all shadow-md flex items-center gap-2 disabled:opacity-50"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>SUBMITTING...</span>
                    </>
                  ) : (
                    <span>SUBMIT QUOTE REQUEST →</span>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
