import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Sparkles, HelpCircle } from 'lucide-react';
import { PATIENT_FAQS, PatientFaqItem } from '../utils/clinic-data';
import { ScrollReveal } from './ScrollReveal';

export const PatientFaqSection: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>('faq-aligner-time');
  const [filter, setFilter] = useState<'all' | 'aligners' | 'visits'>('all');

  const toggle = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const filteredFaqs = filter === 'all'
    ? PATIENT_FAQS
    : PATIENT_FAQS.filter((f) => f.category === filter);

  return (
    <section id="faq" className="py-12 sm:py-16 bg-[#F8F5EE] border-t border-[#EAE3D5]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <div className="text-center max-w-lg mx-auto mb-8 sm:mb-10">
            <span className="text-[11px] font-bold tracking-widest text-[#2D4B3E] uppercase">
              Quick Answers
            </span>
            <h2 className="font-serif-clinic text-2xl sm:text-3xl md:text-4xl font-bold text-[#1C221D] mt-1">
              Patient Frequently Asked Questions
            </h2>
            <div className="w-10 h-0.5 bg-[#2D4B3E] mx-auto mt-2 mb-2 rounded-full" />
            <p className="text-xs sm:text-sm text-stone-600">
              Clear, honest answers about aligners and clinic visits.
            </p>

            {/* Filter pills */}
            <div className="flex items-center justify-center gap-2 mt-4">
              <button
                onClick={() => setFilter('all')}
                className={`px-3 py-1 text-xs rounded-full font-medium transition-colors cursor-pointer ${
                  filter === 'all'
                    ? 'bg-[#2D4B3E] text-white'
                    : 'bg-[#EAE4D7] text-stone-700 hover:bg-[#E0D8CA]'
                }`}
              >
                All (5)
              </button>
              <button
                onClick={() => setFilter('aligners')}
                className={`px-3 py-1 text-xs rounded-full font-medium transition-colors cursor-pointer ${
                  filter === 'aligners'
                    ? 'bg-[#2D4B3E] text-white'
                    : 'bg-[#EAE4D7] text-stone-700 hover:bg-[#E0D8CA]'
                }`}
              >
                Clear Aligners
              </button>
              <button
                onClick={() => setFilter('visits')}
                className={`px-3 py-1 text-xs rounded-full font-medium transition-colors cursor-pointer ${
                  filter === 'visits'
                    ? 'bg-[#2D4B3E] text-white'
                    : 'bg-[#EAE4D7] text-stone-700 hover:bg-[#E0D8CA]'
                }`}
              >
                Dental Visits
              </button>
            </div>
          </div>
        </ScrollReveal>

        {/* Minimal Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = expandedId === faq.id;
            return (
              <ScrollReveal key={faq.id} delay={idx * 50}>
                <div className="bg-white rounded-2xl border border-[#E5DFD2] overflow-hidden shadow-2xs hover:border-[#2D4B3E]/40 transition-colors">
                  <button
                    onClick={() => toggle(faq.id)}
                    className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-3 cursor-pointer focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="font-serif-clinic text-base sm:text-lg font-bold text-[#1C221D] leading-snug">
                      {faq.question}
                    </span>
                    <div className="w-6 h-6 rounded-full bg-stone-100 flex items-center justify-center text-stone-500 shrink-0">
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4 text-[#2D4B3E]" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-4 pt-1 text-xs sm:text-sm text-[#465048] leading-relaxed border-t border-stone-100 bg-[#FAF8F5]">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
