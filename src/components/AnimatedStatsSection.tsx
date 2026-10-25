import React, { useState, useEffect, useRef } from 'react';
import { CLINIC_STATS } from '../utils/clinic-data';
import { Award, Users, ShieldCheck, Star } from 'lucide-react';

export const AnimatedStatsSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState<number[]>([0, 0, 0, 0]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const durationMs = 1400;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(1, elapsed / durationMs);
      const easeProgress = 1 - Math.pow(1 - progress, 3);

      const nextCounts = CLINIC_STATS.map((stat) => {
        return Math.floor(stat.target * easeProgress);
      });

      setCounts(nextCounts);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCounts(CLINIC_STATS.map((s) => s.target));
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible]);

  const getStatIcon = (id: string) => {
    switch (id) {
      case 'exp':
        return <Award className="w-3.5 h-3.5 text-[#2D4B3E]" />;
      case 'smiles':
        return <Users className="w-3.5 h-3.5 text-[#2D4B3E]" />;
      case 'painfree':
        return <ShieldCheck className="w-3.5 h-3.5 text-[#2D4B3E]" />;
      case 'rating':
        return <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />;
      default:
        return <Award className="w-3.5 h-3.5 text-[#2D4B3E]" />;
    }
  };

  return (
    <section ref={sectionRef} className="py-4 sm:py-6 bg-[#F5F2EB] border-y border-[#E6DFD2]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Compact, slim ribbon replacing the previous oversized boxes */}
        <div className="bg-white/80 backdrop-blur-xs rounded-2xl border border-[#E2DBD0] shadow-2xs px-4 py-3 sm:py-4">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[#EAE4D7]">
            {CLINIC_STATS.map((stat, idx) => (
              <div
                key={stat.id}
                className="py-2.5 sm:py-1 px-3 text-center flex flex-col items-center justify-center transition-transform duration-200 hover:scale-[1.03] animate-slide-up"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="flex items-center gap-1.5 mb-0.5">
                  <div className="w-6 h-6 rounded-full bg-[#EAE4D7]/80 flex items-center justify-center">
                    {getStatIcon(stat.id)}
                  </div>
                  <div className="font-serif-clinic text-lg sm:text-2xl font-bold text-[#1A1F1B] tracking-tight tabular-nums">
                    {stat.id === 'rating' ? (
                      <span>
                        {counts[idx]}.0{stat.suffix === '.0' ? '' : stat.suffix}
                      </span>
                    ) : (
                      <span>
                        {counts[idx].toLocaleString()}
                        {stat.suffix}
                      </span>
                    )}
                  </div>
                </div>
                <p className="text-[10px] sm:text-[11px] font-semibold text-stone-600 uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
