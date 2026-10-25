import React, { useState } from 'react';
import {
  Heart,
  Cpu,
  Instagram,
  Facebook,
  Mail,
  Star,
  ThumbsUp,
  Award,
  Sparkles,
} from 'lucide-react';

interface PhilosophySectionProps {
  onOpenReviewModal: () => void;
  onOpenBooking: () => void;
}

export const PhilosophySection: React.FC<PhilosophySectionProps> = ({
  onOpenReviewModal,
  onOpenBooking,
}) => {
  const [hasLiked, setHasLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(148);

  const handleToggleLike = () => {
    if (!hasLiked) {
      setHasLiked(true);
      setLikeCount(likeCount + 1);
    } else {
      setHasLiked(false);
      setLikeCount(likeCount - 1);
    }
  };

  return (
    <section id="about" className="py-14 sm:py-20 bg-[#FAF8F5] border-t border-[#EAE3D5]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Main Heading matching Image 2 */}
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="font-serif-clinic text-2xl sm:text-3xl md:text-[34px] font-bold text-[#1C221D] leading-snug tracking-tight">
            Dr. Deepal's Dental Clinic – Unique Care Philosophy
          </h2>
          <div className="w-12 h-0.5 bg-[#2D4B3E] mx-auto mt-3 rounded-full" />
        </div>

        {/* Large Featured Photo matching Image 2 */}
        <div className="max-w-xl mx-auto mb-10">
          <div className="relative rounded-3xl overflow-hidden shadow-lg border border-[#DDD5C5] aspect-4/3 bg-stone-100">
            <img
              src="/src/assets/images/hero_dentist_portrait_1792914517445.jpg"
              alt="Dr. Deepal Shah - Unique Care Philosophy"
              className="w-full h-full object-cover object-center"
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/assets/hero-portrait.png';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent flex items-end p-6">
              <div className="text-white">
                <span className="text-xs uppercase tracking-widest font-semibold text-emerald-200">
                  Orthodontist & Aesthetic Dental Surgeon
                </span>
                <p className="font-serif-clinic text-xl sm:text-2xl font-bold">
                  Dr. Deepal Shah, BDS, MDS
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Subhead: "Dr. Deepal's Dental Clinic values" matching Image 2 */}
        <div className="text-center mb-8">
          <h3 className="font-serif-clinic text-xl sm:text-2xl font-bold text-[#1F2520]">
            Dr. Deepal's Dental Clinic values
          </h3>
        </div>

        {/* 3 Values with circular badge icons matching Image 2 */}
        <div className="space-y-6 max-w-xl mx-auto">
          {/* Value 1: Exclusive 1-on-1 Focus */}
          <div
            style={{ animationDelay: '50ms' }}
            className="flex items-center gap-4 bg-[#F5F1E9] p-4 sm:p-5 rounded-2xl border border-[#E4DDD0] shadow-xs hover:border-[#2D4B3E]/40 transition-colors animate-slide-up"
          >
            <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#2D4B3E] shrink-0 bg-stone-200">
              <img
                src="/src/assets/images/hero_dentist_portrait_1792914517445.jpg"
                alt="Dr. Deepal Shah"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div>
              <h4 className="font-serif-clinic text-base sm:text-lg font-bold text-[#1A1F1B] leading-tight mb-1">
                Exclusive 1-on-1 Focus
              </h4>
              <p className="text-xs sm:text-[13px] text-[#4A544C] leading-relaxed">
                Dr. Shah manages every aspect of your treatment directly.
              </p>
            </div>
          </div>

          {/* Value 2: Total Transparency */}
          <div
            style={{ animationDelay: '150ms' }}
            className="flex items-center gap-4 bg-[#F5F1E9] p-4 sm:p-5 rounded-2xl border border-[#E4DDD0] shadow-xs hover:border-[#2D4B3E]/40 transition-colors animate-slide-up"
          >
            <div className="w-14 h-14 rounded-full bg-[#EAE2D2] border-2 border-[#C5A869] flex items-center justify-center shrink-0 text-[#8C6D27]">
              <Heart className="w-6 h-6 fill-[#C5A869]/30 text-[#8C6D27]" />
            </div>
            <div>
              <h4 className="font-serif-clinic text-base sm:text-lg font-bold text-[#1A1F1B] leading-tight mb-1">
                Total Transparency
              </h4>
              <p className="text-xs sm:text-[13px] text-[#4A544C] leading-relaxed">
                Clear pricing, treatment paths, and outcomes before we begin.
              </p>
            </div>
          </div>

          {/* Value 3: Advanced, Proven Tech */}
          <div
            style={{ animationDelay: '250ms' }}
            className="flex items-center gap-4 bg-[#F5F1E9] p-4 sm:p-5 rounded-2xl border border-[#E4DDD0] shadow-xs hover:border-[#2D4B3E]/40 transition-colors animate-slide-up"
          >
            <div className="w-14 h-14 rounded-full bg-[#E2ECE7] border-2 border-[#2D4B3E] flex items-center justify-center shrink-0 text-[#2D4B3E]">
              <Cpu className="w-6 h-6 text-[#2D4B3E]" />
            </div>
            <div>
              <h4 className="font-serif-clinic text-base sm:text-lg font-bold text-[#1A1F1B] leading-tight mb-1">
                Advanced, Proven Tech
              </h4>
              <p className="text-xs sm:text-[13px] text-[#4A544C] leading-relaxed">
                Laser-guided procedures, direct imaging, and digital workflows.
              </p>
            </div>
          </div>
        </div>

        {/* Social Icons, Review Us & Script Calligraphy matching Image 2 */}
        <div className="mt-10 pt-8 border-t border-[#EAE3D5] flex flex-col sm:flex-row items-center justify-between gap-6 max-w-xl mx-auto">
          {/* Social Icons & Review Us */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-[#2D4B3E] text-white flex items-center justify-center hover:bg-[#1E342B] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-[#2D4B3E] text-white flex items-center justify-center hover:bg-[#1E342B] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="mailto:contact@drdeepaldental.com"
                className="w-9 h-9 rounded-full bg-[#2D4B3E] text-white flex items-center justify-center hover:bg-[#1E342B] transition-colors"
                aria-label="Email Dr. Shah"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            {/* Review Us matching Image 2 */}
            <div className="flex items-center gap-2 text-xs font-semibold text-stone-800">
              <span>Review Us</span>
              <button
                onClick={onOpenReviewModal}
                className="p-1 text-amber-500 hover:scale-110 transition-transform cursor-pointer"
                title="Write a 5-star review"
              >
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              </button>
              <button
                onClick={handleToggleLike}
                className={`p-1 transition-transform cursor-pointer ${
                  hasLiked ? 'text-emerald-700 scale-110' : 'text-stone-500 hover:text-stone-800'
                }`}
                title="Recommend clinic"
              >
                <ThumbsUp className={`w-4 h-4 ${hasLiked ? 'fill-emerald-600' : ''}`} />
              </button>
              <span className="text-[11px] text-stone-500 font-normal">({likeCount} thumbs)</span>
            </div>
          </div>

          {/* Script Text matching Image 2: "Healthy Smiles, Happy Lives ♡" */}
          <div className="text-right">
            <p className="font-script text-3xl sm:text-4xl text-[#2D4B3E] transform -rotate-3 select-none">
              Healthy Smiles, Happy Lives ♡
            </p>
            <p className="text-[10px] text-stone-500 tracking-wider uppercase mt-1">
              — Dr. Deepal Shah
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
