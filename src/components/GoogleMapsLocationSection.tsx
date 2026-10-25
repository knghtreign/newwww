import React, { useState } from 'react';
import {
  MapPin,
  ExternalLink,
  Phone,
  Clock,
  Navigation,
  CheckCircle2,
  Mail,
  Copy,
  Check,
} from 'lucide-react';
import { CLINIC_INFO } from '../utils/clinic-data';
import { ScrollReveal } from './ScrollReveal';

export const GoogleMapsLocationSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(CLINIC_INFO.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="location" className="py-12 sm:py-16 bg-[#FBF9F5] border-t border-[#EAE3D5]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10">
            <span className="text-[11px] font-bold tracking-widest text-[#2D4B3E] uppercase">
              Google Maps Location
            </span>
            <h2 className="font-serif-clinic text-2xl sm:text-3xl md:text-4xl font-bold text-[#1C221D] mt-1">
              Visit Dr. Deepal's Dental Clinic
            </h2>
            <div className="w-10 h-0.5 bg-[#2D4B3E] mx-auto mt-2 mb-2 rounded-full" />
            <p className="text-xs sm:text-sm text-stone-600">
              Malabar Hill, Mumbai • Near Priyadarshini Park
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left: Google Maps Interactive Card */}
          <div className="lg:col-span-7 flex flex-col">
            <ScrollReveal delay={100} className="h-full">
              <div className="bg-white rounded-3xl border border-[#DDD5C5] shadow-md overflow-hidden flex flex-col justify-between h-full">
                {/* Visual Map Header */}
                <div className="relative bg-[#EAE5D8] h-48 sm:h-56 p-5 flex flex-col justify-between overflow-hidden">
                  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#2D4B3E_1px,transparent_1px)] [background-size:16px_16px]" />
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-white text-[#2D4B3E] text-xs font-bold shadow-xs">
                      Malabar Hill, Mumbai
                    </span>
                    <a
                      href={CLINIC_INFO.googleMapsUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#2D4B3E] text-white text-xs font-semibold hover:bg-[#1E342B] transition-colors shadow-xs"
                    >
                      <span>Open Google Maps</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  {/* Marker representation */}
                  <div className="relative z-10 self-center text-center">
                    <div className="w-12 h-12 rounded-full bg-[#2D4B3E] text-white flex items-center justify-center mx-auto shadow-xl ring-4 ring-white animate-bounce">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <p className="font-serif-clinic font-bold text-stone-900 mt-2 text-sm bg-white/90 px-3 py-0.5 rounded-full shadow-2xs inline-block">
                      Dr. Deepal's Dental Clinic
                    </p>
                  </div>
                </div>

                {/* Address Details & Actions */}
                <div className="p-5 sm:p-6 space-y-4 flex-1 flex flex-col justify-between bg-white">
                  <div>
                    <h3 className="font-serif-clinic text-lg font-bold text-stone-900 mb-1">
                      Empire Guide Building
                    </h3>
                    <p className="text-xs sm:text-[13px] text-stone-600 leading-relaxed">
                      {CLINIC_INFO.address}
                    </p>
                  </div>

                  {/* Quick highlights from Google Maps image */}
                  <div className="bg-[#FAF7F2] p-3 rounded-xl border border-[#E8E2D6] space-y-1.5 text-xs text-stone-700">
                    <div className="flex items-center gap-1.5 text-[#2D4B3E] font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Live treatment explanations on overhead screens</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-[#2D4B3E] font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Gentle, comfortable routine cleanups</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-[#2D4B3E] font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Zero unnecessary procedures guaranteed</span>
                    </div>
                  </div>

                  <div className="pt-2 flex flex-wrap gap-2.5">
                    <a
                      href={CLINIC_INFO.googleMapsUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 py-2.5 px-4 bg-[#2D4B3E] hover:bg-[#1E342B] text-white text-xs font-semibold rounded-full flex items-center justify-center gap-1.5 shadow-xs transition-colors"
                    >
                      <Navigation className="w-3.5 h-3.5" />
                      <span>Get Driving Directions</span>
                    </a>
                    <button
                      onClick={handleCopyAddress}
                      className="py-2.5 px-4 bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-semibold rounded-full flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                    >
                      {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copied ? 'Copied!' : 'Copy Address'}</span>
                    </button>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Visiting Card Details & Exact Hours */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            <ScrollReveal delay={150}>
              {/* Card matching user visiting card attachment */}
              <div className="bg-[#FAF7F2] rounded-3xl p-5 sm:p-6 border border-[#DDD5C5] shadow-xs space-y-4">
                <span className="text-[10px] font-bold tracking-widest text-[#2D4B3E] uppercase block">
                  Official Business Card
                </span>
                <div>
                  <h4 className="font-serif-clinic text-xl font-bold text-stone-900">
                    Dr. Deepal Shah
                  </h4>
                  <p className="text-xs text-stone-500">Orthodontist & Dental Surgeon</p>
                </div>

                <div className="space-y-2.5 text-xs text-stone-700">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-[#EAE4D7] flex items-center justify-center text-[#2D4B3E] shrink-0">
                      <Phone className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <a href={`tel:${CLINIC_INFO.phoneMobile}`} className="font-bold hover:underline block text-[#1C221D]">
                        {CLINIC_INFO.phoneMobile}
                      </a>
                      <a href={`tel:${CLINIC_INFO.phoneLandline}`} className="text-stone-500 hover:underline block text-[11px]">
                        {CLINIC_INFO.phoneLandline} (Landline)
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-[#EAE4D7] flex items-center justify-center text-[#2D4B3E] shrink-0">
                      <Mail className="w-3.5 h-3.5" />
                    </div>
                    <a href={`mailto:${CLINIC_INFO.email}`} className="font-medium hover:underline text-[#2D4B3E]">
                      {CLINIC_INFO.email}
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Clinic Opening Hours from Google Maps Image */}
            <ScrollReveal delay={200}>
              <div className="bg-white rounded-3xl p-5 sm:p-6 border border-[#DDD5C5] shadow-xs space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold tracking-widest text-[#2D4B3E] uppercase flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Clinic Hours</span>
                  </span>
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-semibold">
                    Open Now
                  </span>
                </div>

                <div className="divide-y divide-stone-100 text-xs">
                  {CLINIC_INFO.hours.map((h) => (
                    <div key={h.day} className="py-1.5 flex items-center justify-between">
                      <span className="text-stone-600 font-medium">{h.day}</span>
                      <span className={`font-semibold ${h.time === 'Closed' ? 'text-stone-400' : 'text-stone-900'}`}>
                        {h.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};
