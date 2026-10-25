import React, { useState, useEffect } from 'react';
import { Calendar, Sparkles, MapPin, Phone, Menu, X, ArrowRight } from 'lucide-react';
import { calculateProgressPercentage } from '../utils/clinic-data';

interface NavbarProps {
  onOpenBooking: (serviceTitle?: string) => void;
  onOpenSmileSimulator: () => void;
  onOpenMapsModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenBooking,
  onOpenSmileSimulator,
  onOpenMapsModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      const progress = calculateProgressPercentage(scrollTop, scrollHeight, clientHeight);
      setScrollProgress(progress);

      // Detect current section
      const sections = ['home', 'services', 'transformation', 'journey', 'about', 'reviews', 'resources', 'faq', 'location'];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'Transformations', href: '#transformation', id: 'transformation' },
    { label: 'Journey', href: '#journey', id: 'journey' },
    { label: 'Reviews', href: '#reviews', id: 'reviews' },
    { label: 'FAQ', href: '#faq', id: 'faq' },
    { label: 'Location', href: '#location', id: 'location' },
  ];

  return (
    <>
      {/* Subtle Scroll Depth Progress Bar at the very top of the screen */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-[#E8E2D6] z-50 overflow-hidden">
        <div
          className="h-full bg-[#2D4B3E] transition-[width] duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
          role="progressbar"
          aria-valuenow={scrollProgress}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>

      <header className="sticky top-0 z-40 bg-[#FBF9F5]/90 backdrop-blur-md border-b border-[#E8E2D6] transition-all pt-1 animate-slide-down">
        {/* Top minimal clinic alert bar */}
        <div className="bg-[#2D4B3E] text-white text-[11px] sm:text-xs py-1.5 px-4">
          <div className="max-w-6xl mx-auto flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-medium tracking-wide">Dr. Deepal Shah • Malabar Hill, Mumbai</span>
            </div>
            <div className="flex items-center gap-4 text-emerald-100">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Dr.+Deepal%27s+Dental+clinic+Malabar+Hill+Mumbai"
                target="_blank"
                rel="noreferrer"
                className="hidden sm:flex items-center gap-1 hover:text-white transition-colors cursor-pointer"
              >
                <MapPin className="w-3 h-3 text-emerald-300" />
                <span>Google Maps</span>
              </a>
              <a
                href="tel:+917977776136"
                className="flex items-center gap-1 hover:text-white font-medium"
              >
                <Phone className="w-3 h-3 text-emerald-300" />
                <span>+91 79777 76136</span>
              </a>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-xl bg-stone-100 border border-[#D9D2C3] flex items-center justify-center p-1.5 shadow-2xs group-hover:border-[#2D4B3E] transition-colors">
              <svg
                className="w-full h-full text-[#2D4B3E]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
              >
                <path d="M12 2C8.5 2 6 4 6 7c0 3 1.5 5 2 8 0.5 3 1.5 7 4 7s3.5-4 4-7c0.5-3 2-5 2-8 0-3-2.5-5-6-5z" />
                <path d="M9 12c1 1.5 2 2 3 2s2-0.5 3-2" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-serif-clinic text-lg sm:text-xl font-bold tracking-tight text-[#1A1E1A] leading-none">
                Dr. Deepal's
              </span>
              <span className="text-[10px] font-semibold tracking-[0.2em] text-[#3E4940] uppercase mt-0.5">
                DENTAL CLINIC
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <nav className="hidden lg:flex items-center gap-6 text-[13px] font-medium text-stone-600">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`transition-colors py-1 relative ${
                    isActive ? 'text-[#2D4B3E] font-semibold' : 'hover:text-[#2D4B3E]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#2D4B3E] rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-2.5">
            <button
              onClick={onOpenSmileSimulator}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#2D4B3E] bg-[#EFECE3] hover:bg-[#E5E0D5] border border-[#DDD6C7] rounded-full transition-all cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>AI Smile</span>
            </button>

            <button
              onClick={() => onOpenBooking()}
              className="flex items-center gap-1.5 px-5 py-2 text-xs font-semibold text-white bg-[#2D4B3E] hover:bg-[#20372D] shadow-xs hover:shadow-md rounded-full transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-stone-700 hover:bg-stone-100 cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#FAF7F2] border-b border-[#E0D9CB] px-6 py-4 space-y-2.5">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block text-xs font-medium py-1 ${
                  activeSection === link.id ? 'text-[#2D4B3E] font-bold' : 'text-stone-700'
                }`}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-stone-200 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenSmileSimulator();
                }}
                className="w-full flex items-center justify-center gap-2 py-2 text-xs font-semibold text-[#2D4B3E] bg-[#EFECE3] rounded-full"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                <span>AI Smile Simulator</span>
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full flex items-center justify-center gap-2 py-2 text-xs font-semibold text-white bg-[#2D4B3E] rounded-full"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book Appointment</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
