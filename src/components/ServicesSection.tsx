import React, { useState, useRef, useEffect } from 'react';
import {
  Search,
  Sparkles,
  Layers,
  Smile,
  ShieldCheck,
  Component,
  HeartPulse,
  Scissors,
  Shield,
  ShieldAlert,
  CalendarCheck,
  Activity,
  Heart,
  Zap,
  Droplets,
  Crown,
  Scan,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Info,
  Calendar,
  X,
} from 'lucide-react';
import { SERVICES_DATA, ServiceItem } from '../utils/clinic-data';

interface ServicesSectionProps {
  onSelectServiceToBook: (serviceTitle: string) => void;
  onOpenAiConsult: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectServiceToBook,
  onOpenAiConsult,
}) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<'all' | 'preventive' | 'cosmetic' | 'restorative' | 'surgery'>('all');
  const sliderRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const filteredServices = activeCategory === 'all'
    ? SERVICES_DATA
    : SERVICES_DATA.filter((s) => s.category === activeCategory);

  const updateScrollButtons = () => {
    if (!sliderRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  useEffect(() => {
    const el = sliderRef.current;
    if (el) {
      el.addEventListener('scroll', updateScrollButtons, { passive: true });
      updateScrollButtons();
    }
    return () => el?.removeEventListener('scroll', updateScrollButtons);
  }, [filteredServices]);

  const handleScrollLeft = () => {
    if (!sliderRef.current) return;
    sliderRef.current.scrollBy({ left: -360, behavior: 'smooth' });
  };

  const handleScrollRight = () => {
    if (!sliderRef.current) return;
    sliderRef.current.scrollBy({ left: 360, behavior: 'smooth' });
  };

  const getIcon = (name: string) => {
    const className = "w-5 h-5";
    switch (name) {
      case 'Search':
        return <Search className={className} />;
      case 'Sparkles':
        return <Sparkles className={className} />;
      case 'Layers':
        return <Layers className={className} />;
      case 'Smile':
        return <Smile className={className} />;
      case 'ShieldCheck':
        return <ShieldCheck className={className} />;
      case 'Component':
        return <Component className={className} />;
      case 'HeartPulse':
        return <HeartPulse className={className} />;
      case 'Scissors':
        return <Scissors className={className} />;
      case 'Shield':
        return <Shield className={className} />;
      case 'ShieldAlert':
        return <ShieldAlert className={className} />;
      case 'CalendarCheck':
        return <CalendarCheck className={className} />;
      case 'Activity':
        return <Activity className={className} />;
      case 'Heart':
        return <Heart className={className} />;
      case 'Zap':
        return <Zap className={className} />;
      case 'Droplets':
        return <Droplets className={className} />;
      case 'Crown':
        return <Crown className={className} />;
      case 'Scan':
        return <Scan className={className} />;
      default:
        return <Sparkles className={className} />;
    }
  };

  const categoryTabs = [
    { key: 'all', label: `All Services (${SERVICES_DATA.length})` },
    { key: 'preventive', label: 'Preventive & Hygiene' },
    { key: 'cosmetic', label: 'Cosmetic & Whitening' },
    { key: 'restorative', label: 'Restorative & Implants' },
    { key: 'surgery', label: 'Surgery & Emergency' },
  ] as const;

  return (
    <section id="services" className="py-12 sm:py-16 bg-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header with Left/Right Navigation Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 sm:mb-8">
          <div>
            <span className="text-[11px] font-bold tracking-widest text-[#2D4B3E] uppercase">
              Clinical Excellence
            </span>
            <h2 className="font-serif-clinic text-2xl sm:text-3xl md:text-4xl font-bold text-[#1C221D] mt-1">
              Comprehensive Services
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 mt-1 max-w-xl">
              Modern, digitally guided procedures with minimal drilling. Browse our full clinical offerings below.
            </p>
          </div>

          {/* Carousel Left / Right Slider Controls */}
          <div className="flex items-center gap-2 self-end md:self-auto">
            <span className="text-[11px] font-medium text-stone-500 mr-2 hidden sm:inline">
              Slide left & right to explore
            </span>
            <button
              onClick={handleScrollLeft}
              disabled={!canScrollLeft}
              aria-label="Previous services"
              className={`w-9 h-9 rounded-full flex items-center justify-center border transition-all cursor-pointer ${
                canScrollLeft
                  ? 'bg-white hover:bg-[#2D4B3E] hover:text-white text-stone-700 border-stone-300 shadow-xs'
                  : 'bg-stone-100 text-stone-300 border-stone-200 cursor-not-allowed opacity-50'
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleScrollRight}
              disabled={!canScrollRight}
              aria-label="Next services"
              className={`w-9 h-9 rounded-full flex items-center justify-center border transition-all cursor-pointer ${
                canScrollRight
                  ? 'bg-[#2D4B3E] hover:bg-[#1E352B] text-white border-[#2D4B3E] shadow-xs'
                  : 'bg-stone-100 text-stone-300 border-stone-200 cursor-not-allowed opacity-50'
              }`}
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Category Tabs for Fast Filter */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-3 mb-4">
          {categoryTabs.map((tab) => {
            const isActive = activeCategory === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => {
                  setActiveCategory(tab.key);
                  if (sliderRef.current) {
                    sliderRef.current.scrollTo({ left: 0, behavior: 'smooth' });
                  }
                }}
                className={`px-3 py-1.5 text-xs font-semibold rounded-full whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#2D4B3E] text-white shadow-xs'
                    : 'bg-white/80 hover:bg-stone-100 text-stone-600 border border-stone-200'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Horizontal Carousel Track with Subtle Scale-Up Hover Animations */}
        <div
          ref={sliderRef}
          className="flex gap-4 sm:gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar py-2 px-0.5"
          tabIndex={0}
          role="region"
          aria-label="Services carousel"
        >
          {filteredServices.map((service, idx) => (
            <div
              key={service.id}
              onClick={() => setSelectedService(service)}
              style={{ animationDelay: `${(idx % 6) * 60}ms` }}
              className="snap-start shrink-0 w-[270px] sm:w-[300px] md:w-[320px] bg-[#F4F0E8] hover:bg-white border border-[#E6E0D3] hover:border-[#2D4B3E]/60 rounded-2xl p-5 flex flex-col justify-between cursor-pointer group shadow-2xs hover:shadow-xl transition-all duration-300 ease-out transform hover:scale-[1.03] hover:-translate-y-1.5 animate-slide-up"
            >
              <div>
                <div className="flex items-start justify-between mb-3.5">
                  <div className="w-10 h-10 rounded-full bg-[#EAE4D7] border border-[#DDD5C5] flex items-center justify-center text-stone-800 group-hover:scale-110 group-hover:bg-[#2D4B3E] group-hover:text-white transition-all duration-300">
                    {getIcon(service.iconName)}
                  </div>
                  {service.highlight && (
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#2D4B3E] bg-[#E8EFEA] px-2 py-0.5 rounded-full border border-[#D0E2D7]">
                      {service.highlight}
                    </span>
                  )}
                </div>

                <div className="text-[10px] font-semibold uppercase tracking-wider text-stone-500 mb-0.5">
                  {service.categoryLabel}
                </div>

                <h3 className="font-serif-clinic text-lg sm:text-[19px] font-bold text-[#1A1F1B] leading-snug mb-2 group-hover:text-[#2D4B3E] transition-colors">
                  {service.title}
                </h3>

                <p className="text-xs sm:text-[13px] text-[#4F5951] leading-relaxed line-clamp-3">
                  {service.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#E3DDCF] flex items-center justify-between text-[11px] font-semibold text-[#2D4B3E]">
                <span>Details & Schedule</span>
                <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1.5 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Helper Bar */}
        <div className="mt-4 flex items-center justify-between text-xs text-stone-500 px-1">
          <span className="text-[11px]">
            Showing {filteredServices.length} clinical procedures
          </span>
          <div className="flex items-center gap-1.5">
            <button
              onClick={handleScrollLeft}
              className="text-[#2D4B3E] font-semibold hover:underline cursor-pointer flex items-center gap-0.5"
            >
              <ChevronLeft className="w-3 h-3" />
              <span>Left</span>
            </button>
            <span className="text-stone-300">·</span>
            <button
              onClick={handleScrollRight}
              className="text-[#2D4B3E] font-semibold hover:underline cursor-pointer flex items-center gap-0.5"
            >
              <span>Right</span>
              <ChevronRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-[#FAF8F5] rounded-3xl max-w-lg w-full p-6 border border-[#E2DBD0] shadow-2xl space-y-4 animate-pop-up">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#EAE4D7] flex items-center justify-center text-[#2D4B3E]">
                  {getIcon(selectedService.iconName)}
                </div>
                <div>
                  <h3 className="font-serif-clinic text-2xl font-bold text-stone-900">
                    {selectedService.title}
                  </h3>
                  <span className="text-xs text-stone-500 font-medium">
                    {selectedService.categoryLabel} • ~{selectedService.durationMinutes} mins • Dr. Deepal Shah
                  </span>
                </div>
              </div>
              <button
                onClick={() => setSelectedService(null)}
                className="text-stone-400 hover:text-stone-700 p-1.5 rounded-full cursor-pointer hover:bg-stone-200/60"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="bg-[#F2EEE4] p-4 rounded-2xl text-xs sm:text-sm text-stone-700 leading-relaxed border border-[#E6DFD2] space-y-2">
              <p className="font-semibold text-stone-900">Procedure Details:</p>
              <p>{selectedService.description}</p>
              <p className="text-stone-600 text-xs">
                Performed at Empire Guide Building clinic in Malabar Hill using digital sterilization standards and gentle techniques.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-2.5 pt-2">
              <button
                onClick={() => {
                  const title = selectedService.title;
                  setSelectedService(null);
                  onSelectServiceToBook(title);
                }}
                className="flex-1 py-3 px-4 rounded-full bg-[#2D4B3E] hover:bg-[#1E352B] text-white font-semibold text-xs flex items-center justify-center gap-2 cursor-pointer shadow-sm transition-all"
              >
                <Calendar className="w-4 h-4" />
                <span>Book This Service</span>
              </button>
              <button
                onClick={() => {
                  const title = selectedService.title;
                  setSelectedService(null);
                  onOpenAiConsult(title);
                }}
                className="py-3 px-4 rounded-full bg-stone-200 hover:bg-stone-300 text-stone-800 font-semibold text-xs flex items-center justify-center gap-2 cursor-pointer transition-all"
              >
                <Info className="w-4 h-4 text-[#2D4B3E]" />
                <span>Ask AI Advisor</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
