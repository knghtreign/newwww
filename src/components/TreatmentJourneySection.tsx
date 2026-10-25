import React, { useState } from 'react';
import { TREATMENT_STEPS } from '../utils/clinic-data';
import {
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Coffee,
  Heart,
  Eye,
  FileText,
  Calendar,
} from 'lucide-react';

interface TreatmentJourneyProps {
  onOpenBooking: () => void;
}

export const TreatmentJourneySection: React.FC<TreatmentJourneyProps> = ({
  onOpenBooking,
}) => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const currentStep = TREATMENT_STEPS[activeStepIndex];

  const handlePrev = () => {
    setActiveStepIndex((prev) => (prev > 0 ? prev - 1 : TREATMENT_STEPS.length - 1));
  };

  const handleNext = () => {
    setActiveStepIndex((prev) => (prev < TREATMENT_STEPS.length - 1 ? prev + 1 : 0));
  };

  const renderIcon = (name: string, className: string) => {
    switch (name) {
      case 'Coffee':
        return <Coffee className={className} />;
      case 'Heart':
        return <Heart className={className} />;
      case 'Eye':
        return <Eye className={className} />;
      case 'FileText':
      default:
        return <FileText className={className} />;
    }
  };

  return (
    <section id="journey" className="py-12 sm:py-16 bg-[#FAF8F5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header matching clinic design theme */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-[#C5DDD0] bg-[#EAF2ED] text-[#2D4B3E] text-[11px] font-bold tracking-wider uppercase mb-2.5">
            <Sparkles className="w-3.5 h-3.5 text-[#2D4B3E]" />
            <span>Visit Experience</span>
          </div>

          <h2 className="font-serif-clinic text-3xl sm:text-4xl md:text-5xl font-bold text-[#1C221D] tracking-tight">
            What Happens When You <span className="text-[#2D4B3E]">Visit?</span>
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 mt-2 font-normal">
            A clear, comfortable 4-step sequence designed for peace of mind.
          </p>
        </div>

        {/* 4 Step Navigation Tabs styled with clinic brand theme */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-3.5 mb-6">
          {TREATMENT_STEPS.map((step, idx) => {
            const isActive = idx === activeStepIndex;
            return (
              <button
                key={step.step}
                onClick={() => setActiveStepIndex(idx)}
                className={`flex items-center justify-between p-3 sm:p-3.5 rounded-2xl transition-all duration-300 text-left cursor-pointer border ${
                  isActive
                    ? 'bg-gradient-to-r from-[#F0C05A] via-[#E8B546] to-[#D49E2E] text-stone-950 border-amber-300 shadow-md font-bold scale-[1.02]'
                    : 'bg-[#243E32] text-stone-200 hover:text-white hover:bg-[#2C4D3E] border-[#385E4D] shadow-2xs'
                }`}
              >
                <div className="flex items-center gap-2 sm:gap-2.5 min-w-0">
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
                      isActive ? 'bg-stone-950/10 text-stone-950' : 'bg-[#1E362B] text-stone-200'
                    }`}
                  >
                    {renderIcon(step.icon, 'w-4 h-4')}
                  </div>
                  <div className="truncate">
                    <span className="text-[10px] sm:text-[11px] uppercase tracking-wider block opacity-85 leading-none mb-0.5">
                      {step.step}
                    </span>
                    <span className="text-xs sm:text-sm font-bold tracking-tight truncate block">
                      {step.tabLabel}
                    </span>
                  </div>
                </div>

                <div
                  className={`w-2 h-2 rounded-full shrink-0 ml-1.5 ${
                    isActive ? 'bg-stone-950' : 'bg-[#507A65]'
                  }`}
                />
              </button>
            );
          })}
        </div>

        {/* Deep Emerald Forest Presentation Card with Pop-Up animation on step change */}
        <div
          key={currentStep.step}
          className="bg-gradient-to-br from-[#1E362B] via-[#244235] to-[#172B22] rounded-3xl p-5 sm:p-8 md:p-10 border border-[#355848]/80 shadow-2xl text-white animate-pop-up"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
            {/* Left Photo Column */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#3C6451] aspect-4/3 bg-[#15251E] group">
                <img
                  key={currentStep.image}
                  src={currentStep.image}
                  alt={currentStep.title}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src = '/assets/hero-portrait.png';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
                <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-[#15251E]/90 backdrop-blur-md text-[11px] font-bold text-amber-300 border border-amber-400/30">
                  {currentStep.step}
                </div>
              </div>
            </div>

            {/* Right Information Column */}
            <div className="lg:col-span-6 flex flex-col justify-between h-full">
              <div>
                <div className="inline-block bg-[#E8B546] text-stone-950 font-extrabold text-[11px] tracking-wider uppercase px-3 py-1 rounded-md mb-3 shadow-xs">
                  {currentStep.step}
                </div>

                <h3 className="font-serif-clinic text-2xl sm:text-3xl md:text-3xl font-bold text-white tracking-tight mb-3">
                  {currentStep.title}
                </h3>

                <p className="text-[#E0EBE4] text-xs sm:text-sm md:text-base leading-relaxed mb-5 font-normal">
                  {currentStep.desc}
                </p>

                {/* Tag Pills */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {currentStep.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-[#2B4A3C] border border-[#3E6855] text-[#E5F2EB] text-xs px-3.5 py-1.5 rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Divider & Navigation Controls */}
              <div className="pt-4 border-t border-[#375A49] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrev}
                    aria-label="Previous Step"
                    className="w-9 h-9 rounded-full bg-[#2B4A3C] hover:bg-[#385F4D] text-[#E0EBE4] flex items-center justify-center transition-colors cursor-pointer border border-[#3E6855]"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={handleNext}
                    aria-label="Next Step"
                    className="w-9 h-9 rounded-full bg-[#2B4A3C] hover:bg-[#385F4D] text-[#E0EBE4] flex items-center justify-center transition-colors cursor-pointer border border-[#3E6855]"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-xs sm:text-sm font-bold text-[#E8B546]">
                    Step {activeStepIndex + 1} of {TREATMENT_STEPS.length}
                  </span>
                  <button
                    onClick={onOpenBooking}
                    className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-[#F0C05A] to-[#E8B546] text-stone-950 font-bold text-xs hover:brightness-105 shadow-md transition-all cursor-pointer"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Book This Step</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
