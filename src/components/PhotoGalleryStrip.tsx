import React, { useState } from 'react';
import { ZoomIn, X, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

interface PhotoItem {
  id: string;
  title: string;
  category: 'all' | 'smiles' | 'clinic';
  url: string;
}

const GALLERY_PHOTOS: PhotoItem[] = [
  {
    id: 'p1',
    title: 'Clinic Reception & Consultation Lounge',
    category: 'clinic',
    url: '/assets/gal-1.png',
  },
  {
    id: 'p2',
    title: 'Ergonomic Treatment Operatory Suite',
    category: 'clinic',
    url: '/assets/gal-2.png',
  },
  {
    id: 'p3',
    title: 'Laser & Micro-Bonding Technology',
    category: 'clinic',
    url: '/assets/gal-3.png',
  },
  {
    id: 'p4',
    title: 'Natural Smile Result - Clear Aligners',
    category: 'smiles',
    url: '/assets/gal-4.png',
  },
  {
    id: 'p5',
    title: 'Aesthetic Enamel Bonding',
    category: 'smiles',
    url: '/assets/gal-5.png',
  },
  {
    id: 'p6',
    title: 'Digitally Guided Microscopic Exam',
    category: 'clinic',
    url: '/assets/gal-6.png',
  },
  {
    id: 'p7',
    title: 'Healthy Radiant Smile Result',
    category: 'smiles',
    url: '/assets/gal-7.png',
  },
  {
    id: 'p8',
    title: 'Gentle Ultrasonic Hygiene Cleaning',
    category: 'clinic',
    url: '/assets/gal-8.png',
  },
];

export const PhotoGalleryStrip: React.FC = () => {
  const [activePhotoIdx, setActivePhotoIdx] = useState<number | null>(null);
  const [filter, setFilter] = useState<'all' | 'smiles' | 'clinic'>('all');

  const filteredPhotos = filter === 'all'
    ? GALLERY_PHOTOS
    : GALLERY_PHOTOS.filter((p) => p.category === filter);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activePhotoIdx !== null) {
      setActivePhotoIdx((activePhotoIdx - 1 + filteredPhotos.length) % filteredPhotos.length);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activePhotoIdx !== null) {
      setActivePhotoIdx((activePhotoIdx + 1) % filteredPhotos.length);
    }
  };

  return (
    <section id="gallery" className="py-12 sm:py-16 bg-[#FAF8F5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <div>
            <h3 className="font-serif-clinic text-2xl sm:text-3xl font-bold text-[#1C221D]">
              Gallery & Results
            </h3>
            <p className="text-xs text-stone-500 mt-0.5">
              Real results from our Surat, Mumbai & Vapi practices.
            </p>
          </div>

          {/* Interactive Filter Pills */}
          <div className="flex items-center gap-1.5 bg-[#EFECE3] p-1 rounded-full border border-[#DDD6C7] text-xs">
            <button
              onClick={() => setFilter('all')}
              className={`px-3.5 py-1 rounded-full font-medium transition-all cursor-pointer ${
                filter === 'all' ? 'bg-[#2D4B3E] text-white shadow-xs' : 'text-stone-700 hover:text-stone-900'
              }`}
            >
              All (8)
            </button>
            <button
              onClick={() => setFilter('smiles')}
              className={`px-3.5 py-1 rounded-full font-medium transition-all cursor-pointer ${
                filter === 'smiles' ? 'bg-[#2D4B3E] text-white shadow-xs' : 'text-stone-700 hover:text-stone-900'
              }`}
            >
              Smiles
            </button>
            <button
              onClick={() => setFilter('clinic')}
              className={`px-3.5 py-1 rounded-full font-medium transition-all cursor-pointer ${
                filter === 'clinic' ? 'bg-[#2D4B3E] text-white shadow-xs' : 'text-stone-700 hover:text-stone-900'
              }`}
            >
              Clinic & Tech
            </button>
          </div>
        </div>

        {/* 4x2 Photo Grid matching bottom of Image 1 with interactive hover lift & zoom */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          {filteredPhotos.map((photo, index) => (
            <div
              key={photo.id}
              onClick={() => setActivePhotoIdx(index)}
              style={{ animationDelay: `${(index % 8) * 60}ms` }}
              className="group relative rounded-xl overflow-hidden aspect-4/3 bg-stone-200 border border-[#DDD5C5] shadow-xs hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-105 cursor-pointer animate-pop-up"
            >
              <img
                src={photo.url}
                alt={photo.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
              />
              <div className="absolute inset-0 bg-stone-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-3 text-center">
                <div className="w-8 h-8 rounded-full bg-white/90 text-stone-900 flex items-center justify-center shadow-md">
                  <ZoomIn className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activePhotoIdx !== null && (
        <div
          onClick={() => setActivePhotoIdx(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-3xl w-full bg-[#1A1E1B] rounded-3xl overflow-hidden shadow-2xl border border-stone-700 animate-pop-up"
          >
            <div className="relative aspect-16/10 bg-black flex items-center justify-center">
              <img
                src={filteredPhotos[activePhotoIdx].url}
                alt={filteredPhotos[activePhotoIdx].title}
                className="max-h-[75vh] w-auto object-contain"
              />

              <button
                onClick={handlePrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 text-white hover:bg-black/90 transition-colors cursor-pointer"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={handleNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 text-white hover:bg-black/90 transition-colors cursor-pointer"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              <button
                onClick={() => setActivePhotoIdx(null)}
                className="absolute top-3 right-3 p-2 rounded-full bg-black/60 text-white hover:bg-black/90 transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4 bg-stone-900 flex items-center justify-between text-stone-200 text-xs sm:text-sm">
              <span className="font-medium">{filteredPhotos[activePhotoIdx].title}</span>
              <span className="text-stone-400">
                {activePhotoIdx + 1} of {filteredPhotos.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
