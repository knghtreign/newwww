import React from 'react';
import { ArrowRight, Star, Calendar, MapPin, Award } from 'lucide-react';
import { CLINIC_INFO } from '../utils/clinic-data';
import { SlideDown, SlideUp, PopUp } from './ScrollReveal';
import { useScroll, useVelocity, useTransform, useSpring, motion } from 'motion/react';

interface HeroSectionProps {
  onScheduleConsultation: () => void;
  onExploreServices: () => void;
  onOpenSmileSimulator: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onScheduleConsultation,
  onExploreServices,
  onOpenSmileSimulator,
}) => {
  // Framer-motion scroll velocity and scroll progress hooks for gentle parallax
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 350,
    mass: 0.5,
  });

  // Vertical parallax depth offset reacting to scroll progress
  const imageY = useTransform(scrollY, [0, 600], [0, 52]);

  // Subtle 3D tilt responding to scroll velocity
  const imageRotateX = useTransform(smoothVelocity, [-1600, 1600], [2.5, -2.5]);
  const imageRotateZ = useTransform(smoothVelocity, [-1600, 1600], [-1.2, 1.2]);

  // Organic scale response creating subtle depth during motion
  const imageScale = useTransform(smoothVelocity, [-1600, 0, 1600], [1.025, 1, 1.025]);

  // Floating rating card slight counter-parallax
  const badgeY = useTransform(scrollY, [0, 500], [0, -16]);

  return (
    <section id="home" className="relative pt-4 pb-8 sm:py-14 overflow-hidden bg-gradient-to-b from-[#FAF7F2] via-[#F8F5EE] to-[#FAF8F5]">
      {/* Soft warm glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-amber-100/35 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Slogan with deliberate slide-up and pop-up buttons */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5">
            <SlideDown delay={100}>
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#EAE5D8] text-[#2D4B3E] text-xs font-semibold tracking-wide border border-[#DDD6C7]">
                <MapPin className="w-3.5 h-3.5 text-[#2D4B3E]" />
                <span>Dr. Deepal Shah • Malabar Hill, Mumbai</span>
              </div>
            </SlideDown>

            {/* Slogan with deliberate slide-up entrance */}
            <SlideUp delay={220} distance={50}>
              <h1 className="font-serif-clinic text-3xl sm:text-5xl lg:text-6xl font-bold text-[#1C221D] leading-[1.1] tracking-tight">
                {CLINIC_INFO.slogan}
              </h1>
            </SlideUp>

            {/* Compact Action Buttons with Pop-Up animation */}
            <PopUp delay={380}>
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={onScheduleConsultation}
                  className="px-6 py-3 text-xs sm:text-sm font-semibold text-white bg-[#2D4B3E] hover:bg-[#1E342B] rounded-full shadow-md hover:shadow-xl transition-all duration-200 transform hover:scale-105 active:scale-95 cursor-pointer flex items-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Visit</span>
                </button>

                <button
                  onClick={onExploreServices}
                  className="text-xs sm:text-sm font-semibold text-[#2D4B3E] hover:text-[#182921] flex items-center gap-1.5 py-2.5 px-4 rounded-full hover:bg-stone-200/60 transition-all cursor-pointer group"
                >
                  <span>Services</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1.5 transition-transform" />
                </button>

                <button
                  onClick={onOpenSmileSimulator}
                  className="text-xs font-medium text-stone-700 hover:text-[#2D4B3E] px-4 py-2 border border-stone-300 rounded-full hover:bg-white transition-colors cursor-pointer"
                >
                  AI Smile Test
                </button>
              </div>
            </PopUp>

            {/* Quick credentials strip */}
            <SlideUp delay={460} distance={20}>
              <div className="pt-2 flex items-center gap-4 text-xs text-stone-500 font-medium">
                <span className="flex items-center gap-1">
                  <Award className="w-3.5 h-3.5 text-[#2D4B3E]" />
                  B.D.S., M.D.S. Dental Surgeon
                </span>
                <span className="text-stone-300">·</span>
                <span>Priyadarshini Park, Malabar Hill</span>
              </div>
            </SlideUp>
          </div>

          {/* Right Column: High-Res Portrait with Velocity Parallax depth effect */}
          <div className="lg:col-span-5 relative perspective-[1200px]">
            <PopUp delay={260}>
              <div className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-none group">
                <motion.div
                  style={{
                    y: imageY,
                    rotateX: imageRotateX,
                    rotateZ: imageRotateZ,
                    scale: imageScale,
                    transformPerspective: 1000,
                  }}
                  className="relative rounded-3xl overflow-hidden shadow-2xl bg-stone-100 border border-[#DDD5C5] h-64 sm:h-80 lg:h-96 w-full will-change-transform"
                >
                  <img
                    src="/src/assets/images/hero_dentist_portrait_1792914517445.jpg"
                    alt="Dr. Deepal Shah - Dental Surgeon in Malabar Hill Mumbai"
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.src = '/assets/hero-portrait.png';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />

                  {/* Parallax badge counter-reacting to scroll */}
                  <motion.div
                    style={{ y: badgeY }}
                    className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md rounded-2xl p-3 border border-[#E8E1D2] shadow-lg flex items-center justify-between text-xs"
                  >
                    <div className="flex items-center gap-1.5 text-amber-500">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      <span className="font-bold text-stone-900">5.0</span>
                      <span className="text-[11px] text-stone-500 font-normal hidden sm:inline">
                        • 38 Google Reviews
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-[11px] font-bold text-[#2D4B3E] block leading-tight">
                        Dr. Deepal Shah
                      </span>
                      <span className="text-[9px] uppercase tracking-wider text-stone-500">
                        Malabar Hill Practice
                      </span>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </PopUp>
          </div>
        </div>
      </div>
    </section>
  );
};
