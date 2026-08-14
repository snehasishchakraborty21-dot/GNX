import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { GnxLogo } from './GnxLogo';
import { SITE_CONFIG } from '../../data/siteData';
import {
  Truck,
  ArrowLeftRight,
  Wrench,
  ChevronDown,
  PhoneCall,
  Menu,
  X,
  FileText,
  Building2,
  Phone,
  Home
} from 'lucide-react';

interface NavbarProps {
  onRequestQuote: (defaultDivision?: 'xpress' | 'xfers' | 'xtras') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onRequestQuote }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isHomePage = location.pathname === '/';
  const isAboutPage = location.pathname === '/about' || location.pathname === '/our-story';

  // Handle scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [location.pathname]);

  const headerBgClass = isScrolled
    ? 'bg-white/98 text-[#062B63] shadow-md border-b border-slate-200/80 backdrop-blur-md'
    : isHomePage
    ? 'bg-gradient-to-r from-transparent via-transparent via-45% to-[#03070A]/80 text-white border-b-0'
    : isAboutPage
    ? 'bg-white text-[#062B63] shadow-xs border-b border-slate-200/80'
    : 'bg-[#062B63] text-white shadow-md border-b border-white/10';

  const isLightHeader = isScrolled || isAboutPage;

  const linkClass = (path: string) => {
    const active = location.pathname === path;
    if (isLightHeader) {
      return active
        ? 'text-[#2CB51D] font-extrabold border-b-2 border-[#2CB51D]'
        : 'text-[#062B63] hover:text-[#2CB51D] font-bold transition-colors';
    }
    return active
      ? 'text-[#2CB51D] font-extrabold border-b-2 border-[#2CB51D]'
      : 'text-white hover:text-[#2CB51D] font-bold transition-colors';
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBgClass}`}>
        {/* Main Desktop Header */}
        <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-12 h-24 sm:h-28 md:h-32 lg:h-36 xl:h-40 flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="logo-wrapper focus:outline-hidden group"
            aria-label="Gulf Northern X Homepage"
          >
            <GnxLogo
              className="header-logo"
              alt="Gulf Northern X"
            />
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-10 font-display text-lg tracking-wider uppercase">
            <Link to="/" className={linkClass('/')}>
              HOME
            </Link>

            <Link to="/about" className={linkClass('/about')}>
              ABOUT
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button
                onClick={() => navigate('/services')}
                className={`flex items-center gap-1.5 py-1 ${
                  isLightHeader
                    ? location.pathname.startsWith('/services')
                      ? 'text-[#2CB51D] font-extrabold border-b-2 border-[#2CB51D]'
                      : 'text-[#062B63] hover:text-[#2CB51D] font-bold transition-colors'
                    : location.pathname.startsWith('/services')
                    ? 'text-[#2CB51D] font-extrabold border-b-2 border-[#2CB51D]'
                    : 'text-white hover:text-[#2CB51D] font-bold transition-colors'
                }`}
                aria-expanded={servicesDropdownOpen}
              >
                <span>SERVICES</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    servicesDropdownOpen ? 'rotate-180 text-[#2CB51D]' : ''
                  }`}
                />
              </button>

              {/* Services Dropdown Panel */}
              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 w-80 bg-white border border-slate-200 shadow-2xl rounded-xs p-3 mt-1 grid gap-2 animate-in fade-in slide-in-from-top-2 duration-200 text-slate-800 normal-case font-sans">
                  <div className="px-3 py-1.5 text-xs uppercase font-extrabold text-slate-400 tracking-widest border-b border-slate-100">
                    GULF NORTHERN X DIVISIONS
                  </div>

                  <Link
                    to="/services/xpress"
                    className="flex items-start gap-3 p-2.5 rounded-xs hover:bg-slate-50 transition-colors group"
                  >
                    <div className="p-2 bg-[#062B63] text-[#2CB51D] rounded-xs group-hover:bg-[#2CB51D] group-hover:text-white transition-colors">
                      <Truck className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-display text-lg font-bold text-[#062B63] group-hover:text-[#2CB51D] transition-colors flex items-center gap-2">
                        XPRESS
                        <span className="text-[10px] font-sans px-1.5 py-0.5 rounded-xs bg-[#0B3F8C] text-white">FREIGHT</span>
                      </div>
                      <p className="text-xs text-slate-500 line-clamp-2">Refrigerated, dry-box, flatbed freight & truck leasing.</p>
                    </div>
                  </Link>

                  <Link
                    to="/services/xfers"
                    className="flex items-start gap-3 p-2.5 rounded-xs hover:bg-slate-50 transition-colors group"
                  >
                    <div className="p-2 bg-[#087F5B] text-white rounded-xs group-hover:bg-[#2CB51D] group-hover:text-white transition-colors">
                      <ArrowLeftRight className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-display text-lg font-bold text-[#062B63] group-hover:text-[#2CB51D] transition-colors flex items-center gap-2">
                        XFERS
                        <span className="text-[10px] font-sans px-1.5 py-0.5 rounded-xs bg-[#087F5B] text-white">TRANSFERS</span>
                      </div>
                      <p className="text-xs text-slate-500 line-clamp-2">Equipment setups, pull-outs, pumps & cold/dry storage.</p>
                    </div>
                  </Link>

                  <Link
                    to="/services/xtras"
                    className="flex items-start gap-3 p-2.5 rounded-xs hover:bg-slate-50 transition-colors group"
                  >
                    <div className="p-2 bg-[#062B63] text-white rounded-xs group-hover:bg-[#2CB51D] group-hover:text-white transition-colors">
                      <Wrench className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-display text-lg font-bold text-[#062B63] group-hover:text-[#2CB51D] transition-colors flex items-center gap-2">
                        XTRAS
                        <span className="text-[10px] font-sans px-1.5 py-0.5 rounded-xs bg-[#062B63] text-white">SUPPORT</span>
                      </div>
                      <p className="text-xs text-slate-500 line-clamp-2">Commercial tires, trailer washouts & mobile repairs.</p>
                    </div>
                  </Link>

                  <div className="pt-2 border-t border-slate-100">
                    <Link
                      to="/services"
                      className="block text-center text-xs font-bold text-[#062B63] hover:text-[#2CB51D] py-1"
                    >
                      VIEW ALL DIVISIONS OVERVIEW →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link to="/about" className={linkClass('/about')}>
              OUR STORY
            </Link>

            <Link to="/contact" className={linkClass('/contact')}>
              CONTACT
            </Link>
          </nav>

          {/* Header Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => onRequestQuote()}
              className="font-display text-lg tracking-wider px-6 py-3 rounded-xs bg-[#2CB51D] hover:bg-[#259b18] text-white font-black uppercase transition-all shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <FileText className="w-4 h-4" />
              <span>REQUEST A QUOTE</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              onClick={() => onRequestQuote()}
              className="font-display text-sm tracking-wider px-3 py-1.5 rounded-sm bg-[#2CB51D] text-white font-bold"
            >
              QUOTE
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2.5 rounded-sm focus:outline-hidden ${
                isLightHeader ? 'bg-slate-100 text-[#062B63]' : 'bg-white/10 text-white'
              }`}
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#2CB51D]" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Slide-Out Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden bg-[#0A0D0C]/98 backdrop-blur-xl text-white flex flex-col justify-between p-6 overflow-y-auto animate-in fade-in duration-200">
          <div className="flex items-center justify-between pb-6 border-b border-white/10">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="logo-wrapper"
            >
              <GnxLogo
                className="w-[180px] sm:w-[220px]"
                alt="Gulf Northern X"
              />
            </Link>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-sm bg-white/10 text-white"
              aria-label="Close Mobile Navigation"
            >
              <X className="w-6 h-6 text-[#2CB51D]" />
            </button>
          </div>

          <div className="py-6 space-y-4 font-display text-2xl tracking-wider">
            <Link
              to="/"
              className="flex items-center gap-3 p-3 rounded-sm hover:bg-white/5 text-slate-100 hover:text-[#2CB51D]"
            >
              <Home className="w-6 h-6 text-[#2CB51D]" />
              <span>HOME</span>
            </Link>

            <Link
              to="/about"
              className="flex items-center gap-3 p-3 rounded-sm hover:bg-white/5 text-slate-100 hover:text-[#2CB51D]"
            >
              <Building2 className="w-6 h-6 text-[#2CB51D]" />
              <span>OUR STORY</span>
            </Link>

            {/* Mobile Service Links */}
            <div className="p-3 bg-white/5 rounded-sm space-y-3">
              <div className="text-xs font-sans font-bold text-slate-400 uppercase tracking-widest border-b border-white/10 pb-2">
                SERVICE DIVISIONS
              </div>

              <Link
                to="/services/xpress"
                className="flex items-center gap-3 text-xl text-white hover:text-[#2CB51D]"
              >
                <Truck className="w-5 h-5 text-[#2CB51D]" />
                <span>XPRESS (FREIGHT & LEASING)</span>
              </Link>

              <Link
                to="/services/xfers"
                className="flex items-center gap-3 text-xl text-white hover:text-[#2CB51D]"
              >
                <ArrowLeftRight className="w-5 h-5 text-[#2CB51D]" />
                <span>XFERS (TRANSFERS & STORAGE)</span>
              </Link>

              <Link
                to="/services/xtras"
                className="flex items-center gap-3 text-xl text-white hover:text-[#2CB51D]"
              >
                <Wrench className="w-5 h-5 text-[#2CB51D]" />
                <span>XTRAS (TIRES & WASHOUTS)</span>
              </Link>

              <Link
                to="/services"
                className="block text-xs font-sans text-[#2CB51D] font-bold underline pt-1"
              >
                VIEW ALL SERVICES OVERVIEW
              </Link>
            </div>

            <Link
              to="/contact"
              className="flex items-center gap-3 p-3 rounded-sm hover:bg-white/5 text-slate-100 hover:text-[#2CB51D]"
            >
              <PhoneCall className="w-6 h-6 text-[#2CB51D]" />
              <span>CONTACT / FIND US</span>
            </Link>
          </div>

          <div className="pt-6 border-t border-white/10 space-y-4">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onRequestQuote();
              }}
              className="w-full py-4 rounded-sm bg-[#2CB51D] text-white font-display text-2xl font-bold tracking-wider flex items-center justify-center gap-2"
            >
              <FileText className="w-6 h-6" />
              <span>REQUEST A QUOTE</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
};
