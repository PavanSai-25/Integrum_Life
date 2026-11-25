import { Expand, FlaskRound, MapPin } from 'lucide-react';
import { RD_LAB_PHOTOS } from '../data/corporateData';
import type { LightboxPhoto } from '../types/corporate';

interface FacilitiesSectionProps {
  onOpenGallery: (photos: LightboxPhoto[], startIndex: number) => void;
}

const GALLERY_PHOTOS: LightboxPhoto[] = RD_LAB_PHOTOS.map((photo) => ({
  src: photo.src,
  caption: photo.caption,
  facilityName: 'Research & Development Laboratory — Pragatinagar, Hyderabad (3,500 sq. ft.)',
}));

export function FacilitiesSection({ onOpenGallery }: FacilitiesSectionProps) {
  return (
    <section id="facilities" className="bg-[#F4F5FA] py-20 lg:py-24 scroll-mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold tracking-[0.14em] text-[#168C89] uppercase">
            Infrastructure
          </p>
          <h2 className="mt-2 font-[Manrope] text-3xl font-bold tracking-tight text-[#1D1B56] sm:text-4xl">
            Our Facility
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-slate-600">
            Dedicated 3,500 sq. ft. Research and Development Laboratory in Pragatinagar, Hyderabad.
          </p>
        </div>

        {/* RESEARCH AND DEVELOPMENT LABORATORY */}
        <div className="mt-12 rounded-2xl border border-slate-200 bg-white p-6 sm:p-9">
          <div className="flex flex-col justify-between gap-5 border-b border-slate-100 pb-6 md:flex-row md:items-center">
            <div className="flex items-start gap-3.5">
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#7570B0]/12 text-[#7570B0]">
                <FlaskRound className="h-5.5 w-5.5" />
              </span>
              <div>
                <div className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-[0.14em] text-[#7570B0] uppercase">
                  <MapPin className="h-3.5 w-3.5" />
                  <span>3,500 sq. ft. · Pragatinagar, Hyderabad</span>
                </div>
                <h3 className="mt-0.5 font-[Manrope] text-2xl font-bold text-[#1D1B56]">
                  Research and Development Laboratory
                </h3>
              </div>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-slate-600">
              Equipped for multi-step route scouting, fume-hood synthesis, rotary evaporation, and
              analytical preparation from milligram to multi-kilogram development workflows.
            </p>
          </div>

          <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {GALLERY_PHOTOS.map((photo, index) => (
              <button
                key={photo.src}
                type="button"
                onClick={() => onOpenGallery(GALLERY_PHOTOS, index)}
                className="group relative overflow-hidden rounded-xl border border-slate-200 bg-[#F4F5FA] text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7570B0]"
              >
                <img
                  src={photo.src}
                  alt={photo.caption}
                  loading="lazy"
                  className="aspect-[3/2] w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
                <span className="absolute right-2.5 top-2.5 rounded-full bg-[#1D1B56]/75 p-1.5 text-white opacity-0 transition-opacity group-hover:opacity-100">
                  <Expand className="h-3.5 w-3.5" />
                </span>
                <div className="border-t border-slate-100 bg-white px-3.5 py-2.5">
                  <p className="text-xs font-medium text-[#1D1B56]">{photo.caption}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
