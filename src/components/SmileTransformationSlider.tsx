import React, { useState, useRef, useCallback } from 'react';
import { Sparkles, MoveHorizontal } from 'lucide-react';

interface SmileTransformationSliderProps {
  onOpenBooking: () => void;
  onOpenSmileSimulator: () => void;
}

export const SmileTransformationSlider: React.FC<SmileTransformationSliderProps> = ({
  onOpenBooking,
  onOpenSmileSimulator,
}) => {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = Math.min(100, Math.max(0, (x / rect.width) * 100));
    setSliderPos(percent);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    handleMove(e.clientX);
  };

  return (
    <section id="transformation" className="py-14 sm:py-20 bg-[#F5F1E8] border-t border-[#E6DFD1]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-[11px] font-bold tracking-widest text-[#2D4B3E] uppercase">
            Interactive Visualizer
          </span>
          <h2 className="font-serif-clinic text-3xl sm:text-4xl font-bold text-[#1C221D] mt-1">
            Real Smile Transformations
          </h2>
          <div className="w-10 h-0.5 bg-[#2D4B3E] mx-auto mt-2.5 mb-2 rounded-full" />
          <p className="text-xs sm:text-sm text-stone-600">
            Slide horizontally to see the result of Dr. Shah's clear aligners.
          </p>
        </div>

        {/* Interactive Before / After Comparison Slider Container */}
        <div className="max-w-3xl mx-auto">
          <div
            ref={containerRef}
            onMouseDown={() => (isDragging.current = true)}
            onMouseUp={() => (isDragging.current = false)}
            onMouseLeave={() => (isDragging.current = false)}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            className="relative rounded-3xl overflow-hidden shadow-xl border-2 border-[#DDD5C5] aspect-16/10 select-none cursor-ew-resize bg-stone-900"
          >
            {/* After Image (Full background) */}
            <img
              src="/assets/gal-7.png"
              alt="After smile transformation"
              className="absolute inset-0 w-full h-full object-cover"
              draggable={false}
            />
            <div className="absolute top-4 right-4 bg-[#2D4B3E]/90 text-white text-[11px] font-bold px-3 py-1 rounded-full backdrop-blur-xs shadow-xs">
              After: Clear Aligners
            </div>

            {/* Before Image (Clipped by slider position) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${sliderPos}%` }}
            >
              <img
                src="/assets/gal-5.png"
                alt="Before smile transformation"
                className="absolute inset-0 w-full h-full object-cover max-w-none"
                style={{ width: containerRef.current ? containerRef.current.clientWidth : '100%' }}
                draggable={false}
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 text-stone-200 text-[11px] font-bold px-3 py-1 rounded-full backdrop-blur-xs shadow-xs">
                Before Treatment
              </div>
            </div>

            {/* Divider Line & Draggable Handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white shadow-lg cursor-ew-resize flex items-center justify-center"
              style={{ left: `${sliderPos}%`, transform: 'translateX(-50%)' }}
            >
              <div className="w-9 h-9 rounded-full bg-white text-[#2D4B3E] border-2 border-[#2D4B3E] shadow-xl flex items-center justify-center transition-transform hover:scale-110">
                <MoveHorizontal className="w-4 h-4" />
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-4 text-xs text-stone-600 px-2">
            <span className="flex items-center gap-1.5 font-medium text-stone-700">
              <span className="w-2 h-2 rounded-full bg-[#2D4B3E]" />
              Average Treatment: 6 – 9 Months
            </span>
            <div className="flex items-center gap-3">
              <button
                onClick={onOpenSmileSimulator}
                className="text-[#2D4B3E] font-semibold hover:underline flex items-center gap-1 cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                <span>Simulate Your Smile</span>
              </button>
              <button
                onClick={onOpenBooking}
                className="px-4 py-2 bg-[#2D4B3E] hover:bg-[#20372D] text-white rounded-full font-semibold transition-colors cursor-pointer"
              >
                Book Your Scan
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
