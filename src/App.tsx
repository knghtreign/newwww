import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AnimatedStatsSection } from './components/AnimatedStatsSection';
import { ServicesSection } from './components/ServicesSection';
import { SmileTransformationSlider } from './components/SmileTransformationSlider';
import { TreatmentJourneySection } from './components/TreatmentJourneySection';
import { PhotoGalleryStrip } from './components/PhotoGalleryStrip';
import { PhilosophySection } from './components/PhilosophySection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { PatientFaqSection } from './components/PatientFaqSection';
import { BookVisitSection } from './components/BookVisitSection';
import { GoogleMapsLocationSection } from './components/GoogleMapsLocationSection';
import { Footer } from './components/Footer';
import {
  BookingModal,
  SmileSimulatorModal,
  HighThinkingAdvisorModal,
  MapsDirectionsModal,
} from './components/InteractiveModals';
import {
  ScrollReveal,
  SlideUp,
  PopUp,
  SlideDown,
  FadeUp,
} from './components/ScrollReveal';
import { Layers, Image as ImageIcon, X } from 'lucide-react';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedServiceToBook, setSelectedServiceToBook] = useState('');
  const [isSmileSimulatorOpen, setIsSmileSimulatorOpen] = useState(false);
  const [isAiConsultOpen, setIsAiConsultOpen] = useState(false);
  const [isMapsModalOpen, setIsMapsModalOpen] = useState(false);
  const [isReferenceModalOpen, setIsReferenceModalOpen] = useState(false);
  const [activeReferenceTab, setActiveReferenceTab] = useState<'all' | 'card' | 'maps'>('all');

  const handleOpenBooking = (serviceTitle?: string) => {
    setSelectedServiceToBook(serviceTitle || '');
    setIsBookingOpen(true);
  };

  const handleOpenAiConsult = (serviceTitle?: string) => {
    setSelectedServiceToBook(serviceTitle || '');
    setIsAiConsultOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FBF9F5] text-[#232A25] font-sans selection:bg-[#2D4B3E] selection:text-white">
      {/* 1. Navbar with Top Scroll Progress Bar */}
      <Navbar
        onOpenBooking={() => handleOpenBooking()}
        onOpenSmileSimulator={() => setIsSmileSimulatorOpen(true)}
        onOpenMapsModal={() => setIsMapsModalOpen(true)}
      />

      <main>
        {/* 2. Hero Section: Slogan (under 5 words max), no long text, compact mobile */}
        <HeroSection
          onScheduleConsultation={() => handleOpenBooking('General Checkup')}
          onExploreServices={() => {
            const el = document.getElementById('services');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
          onOpenSmileSimulator={() => setIsSmileSimulatorOpen(true)}
        />

        {/* 3. Animated Impact Stats Counter (Numeric scroll count-up with Slide-Up) */}
        <SlideUp distance={40} delay={150}>
          <AnimatedStatsSection />
        </SlideUp>

        {/* 4. Comprehensive Services (Slide-Up) */}
        <SlideUp distance={50} delay={180}>
          <ServicesSection
            onSelectServiceToBook={(title) => handleOpenBooking(title)}
            onOpenAiConsult={(title) => handleOpenAiConsult(title)}
          />
        </SlideUp>

        {/* 5. Interactive Before & After Smile Slider (Pop-Up animation) */}
        <PopUp distance={30} delay={180}>
          <SmileTransformationSlider
            onOpenBooking={() => handleOpenBooking('Teeth Straightening (Invisible Braces)')}
            onOpenSmileSimulator={() => setIsSmileSimulatorOpen(true)}
          />
        </PopUp>

        {/* 6. What Happens When You Visit? (Slide-Up) */}
        <SlideUp distance={50} delay={180}>
          <TreatmentJourneySection
            onOpenBooking={() => handleOpenBooking('General Checkup')}
          />
        </SlideUp>

        {/* 7. Gallery with Pop-Up scale-in */}
        <PopUp distance={25} delay={180}>
          <PhotoGalleryStrip />
        </PopUp>

        {/* 8. Care Philosophy & Values (Slide-Up) */}
        <SlideUp distance={45} delay={180}>
          <PhilosophySection
            onOpenReviewModal={() => {
              const el = document.getElementById('reviews');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            onOpenBooking={() => handleOpenBooking()}
          />
        </SlideUp>

        {/* 9. Real Google Maps Patient Reviews (Slide-Up) */}
        <SlideUp distance={45} delay={180}>
          <div id="reviews">
            <TestimonialsSection
              onOpenBooking={() => handleOpenBooking()}
            />
          </div>
        </SlideUp>

        {/* 10. Patient Frequently Asked Questions (Accordion Style) */}
        <SlideUp distance={40} delay={180}>
          <div id="faq">
            <PatientFaqSection />
          </div>
        </SlideUp>

        {/* 11. Book Your Visit Direct Form (Pop-Up) */}
        <PopUp distance={35} delay={200}>
          <BookVisitSection />
        </PopUp>

        {/* 12. Google Maps Clinic Location (Malabar Hill, Mumbai) */}
        <SlideUp distance={45} delay={180}>
          <div id="location">
            <GoogleMapsLocationSection />
          </div>
        </SlideUp>
      </main>

      {/* 13. Footer with Malabar Hill contacts & hours */}
      <Footer
        onOpenBooking={() => handleOpenBooking()}
        onOpenMapsModal={() => setIsMapsModalOpen(true)}
        onOpenSmileSimulator={() => setIsSmileSimulatorOpen(true)}
      />

      {/* Floating Action Button with Pop-Up entrance */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col sm:flex-row items-end sm:items-center gap-2 animate-pop-up">
        <button
          onClick={() => handleOpenBooking()}
          className="group flex items-center gap-3 px-4 py-2.5 bg-gradient-to-r from-[#F0C05A] via-[#E8B546] to-[#D49E2E] text-slate-950 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 active:scale-95 cursor-pointer border-2 border-amber-300"
        >
          <div className="w-2.5 h-2.5 rounded-full bg-slate-950 animate-ping" />
          <div className="text-left leading-tight">
            <div className="text-[11px] font-black uppercase tracking-wider">
              TOOTH HURTING? BOOK VISIT
            </div>
            <div className="text-[10px] font-bold text-slate-800">
              Malabar Hill • Dr Deepal
            </div>
          </div>
        </button>

        <button
          onClick={() => setIsReferenceModalOpen(true)}
          className="flex items-center gap-1.5 px-3 py-2 bg-slate-900/90 text-white text-[11px] font-semibold rounded-xl shadow-md hover:bg-slate-800 transition-all cursor-pointer border border-slate-700 backdrop-blur-xs hover:scale-105 active:scale-95"
          title="View Dr. Deepal's Visiting Card & Google Maps Attachment"
        >
          <Layers className="w-3.5 h-3.5 text-amber-400" />
          <span className="hidden sm:inline">Visiting Card</span>
        </button>
      </div>

      {/* Reference Card Modal (Visiting Card & Google Maps) with Pop-Up animation */}
      {isReferenceModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/80 backdrop-blur-sm">
          <div className="bg-[#FAF8F5] rounded-3xl max-w-2xl w-full max-h-[90vh] flex flex-col overflow-hidden border border-stone-600 shadow-2xl animate-pop-up">
            <div className="p-4 sm:p-5 border-b border-stone-200 flex items-center justify-between bg-white">
              <div className="flex items-center gap-2">
                <ImageIcon className="w-5 h-5 text-[#2D4B3E]" />
                <h3 className="font-serif-clinic text-lg font-bold text-stone-900">
                  Business Card & Google Maps Attachments
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex bg-stone-100 p-1 rounded-lg text-xs font-medium">
                  {(['all', 'card', 'maps'] as const).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveReferenceTab(tab)}
                      className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
                        activeReferenceTab === tab
                          ? 'bg-[#2D4B3E] text-white font-semibold'
                          : 'text-stone-600 hover:text-stone-900'
                      }`}
                    >
                      {tab === 'all' ? 'All' : tab === 'card' ? 'Visiting Card' : 'Google Maps'}
                    </button>
                  ))}
                </div>
                <button
                  onClick={() => setIsReferenceModalOpen(false)}
                  className="p-1.5 rounded-full hover:bg-stone-100 text-stone-500 hover:text-stone-800 cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="p-4 sm:p-6 overflow-y-auto space-y-6">
              {(activeReferenceTab === 'all' || activeReferenceTab === 'card') && (
                <div className="bg-white p-4 rounded-2xl border border-stone-200 shadow-xs">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#2D4B3E]">
                      Official Visiting Card
                    </span>
                    <span className="text-[11px] text-stone-500">Dr. Deepal J. Shah</span>
                  </div>
                  <div className="rounded-xl overflow-hidden border border-stone-300">
                    <img
                      src="/assets/aistudio/image_b242961f.png"
                      alt="Dr. Deepal Visiting Card"
                      className="w-full object-contain max-h-[420px] bg-stone-100"
                    />
                  </div>
                </div>
              )}

              {(activeReferenceTab === 'all' || activeReferenceTab === 'maps') && (
                <div className="bg-white p-4 rounded-2xl border border-stone-200 shadow-xs">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#2D4B3E]">
                      Google Maps Verified Profile
                    </span>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=Dr.+Deepal%27s+Dental+clinic+Malabar+Hill+Mumbai"
                      target="_blank"
                      rel="noreferrer"
                      className="text-[11px] text-[#2D4B3E] underline font-semibold cursor-pointer"
                    >
                      Open Live Google Maps ↗
                    </a>
                  </div>
                  <div className="rounded-xl overflow-hidden border border-stone-300">
                    <img
                      src="/assets/aistudio/image_b19bba4e.png"
                      alt="Google Maps Profile"
                      className="w-full object-contain max-h-[420px] bg-stone-100"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Interactive Booking Modal with 10 treatment options matching image_f9c8b7eb */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        preselectedService={selectedServiceToBook}
      />

      {/* AI Smile Simulator Modal */}
      <SmileSimulatorModal
        isOpen={isSmileSimulatorOpen}
        onClose={() => setIsSmileSimulatorOpen(false)}
        onBookConsultation={() => {
          setIsSmileSimulatorOpen(false);
          handleOpenBooking('Smile Makeover');
        }}
      />

      {/* AI Advisor Modal */}
      <HighThinkingAdvisorModal
        isOpen={isAiConsultOpen}
        onClose={() => setIsAiConsultOpen(false)}
        initialService={selectedServiceToBook}
      />

      {/* Google Maps Directions Modal */}
      <MapsDirectionsModal
        isOpen={isMapsModalOpen}
        onClose={() => setIsMapsModalOpen(false)}
      />
    </div>
  );
}
