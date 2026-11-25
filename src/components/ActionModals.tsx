import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CheckCircle2, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { SERVICE_CATEGORIES } from '../data/corporateData';
import type { ModalRoute } from '../types/corporate';

interface ActionModalsProps {
  route: ModalRoute;
  onClose: () => void;
  onChangeLightboxIndex: (nextIndex: number) => void;
  onEnquireService: (serviceOption: string) => void;
}

export function ActionModals({
  route,
  onClose,
  onChangeLightboxIndex,
  onEnquireService,
}: ActionModalsProps) {
  useEffect(() => {
    if (!route) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }
      if (route.type === 'lightbox') {
        const total = route.photos.length;
        if (e.key === 'ArrowRight') {
          onChangeLightboxIndex((route.index + 1) % total);
        } else if (e.key === 'ArrowLeft') {
          onChangeLightboxIndex((route.index - 1 + total) % total);
        }
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [route, onClose, onChangeLightboxIndex]);

  if (!route) return null;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-[#1D1B56]/75 p-4 backdrop-blur-xs"
        role="dialog"
        aria-modal="true"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.97, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.97, y: 10 }}
          transition={{ duration: 0.18 }}
          onClick={(e) => e.stopPropagation()}
          className={`relative max-h-[88vh] w-full overflow-y-auto rounded-2xl border border-slate-200 bg-white shadow-2xl ${
            route.type === 'lightbox' ? 'max-w-3xl p-4 sm:p-6' : 'max-w-xl p-6 sm:p-8'
          }`}
        >
          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="absolute right-4 top-4 z-10 rounded-full bg-white/90 p-2 text-slate-500 shadow-xs transition-colors hover:bg-[#F4F5FA] hover:text-[#1D1B56] cursor-pointer"
          >
            <X className="h-5 w-5" />
          </button>

          {route.type === 'service' && (() => {
            const category =
              SERVICE_CATEGORIES.find((c) => c.id === route.serviceId) ?? SERVICE_CATEGORIES[0];

            return (
              <div>
                <span className="inline-block rounded-full bg-[#7570B0]/12 px-3 py-1 text-[11px] font-bold tracking-[0.14em] text-[#7570B0] uppercase">
                  Category {category.number} · {category.servicesLabel}
                </span>

                <h3 className="mt-2.5 pr-8 font-[Manrope] text-2xl font-bold text-[#1D1B56]">
                  {category.title}
                </h3>

                <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
                  {category.servicesSummary}
                </p>

                <h4 className="mt-6 font-[Manrope] text-xs font-bold tracking-[0.14em] text-[#168C89] uppercase">
                  {category.expertiseTitle}
                </h4>

                <ul className="mt-3 space-y-2.5">
                  {category.expertiseItems.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-[#1D1B56]">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#7570B0]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-7 flex items-center justify-end gap-3 border-t border-slate-100 pt-5">
                  <button
                    type="button"
                    onClick={onClose}
                    className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600 hover:bg-[#F4F5FA] cursor-pointer"
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    onClick={() => onEnquireService(category.serviceOption)}
                    className="rounded-lg bg-[#7570B0] px-5 py-2 font-[Manrope] text-sm font-semibold text-white hover:bg-[#5D5899] cursor-pointer"
                  >
                    Enquire Now
                  </button>
                </div>
              </div>
            );
          })()}

          {route.type === 'lightbox' && (() => {
            const current = route.photos[route.index] ?? route.photos[0];
            const total = route.photos.length;
            return (
              <div>
                <p className="pr-10 text-xs font-bold tracking-[0.12em] text-[#168C89] uppercase">
                  {current.facilityName}
                </p>

                <div className="relative mt-3 overflow-hidden rounded-xl border border-slate-200 bg-[#F4F5FA]">
                  <img
                    src={current.src}
                    alt={current.caption}
                    className="max-h-[64vh] w-full object-contain"
                  />

                  {total > 1 && (
                    <>
                      <button
                        type="button"
                        onClick={() => onChangeLightboxIndex((route.index - 1 + total) % total)}
                        aria-label="Previous facility photograph"
                        className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-[#1D1B56]/75 p-2 text-white transition-colors hover:bg-[#1D1B56] cursor-pointer"
                      >
                        <ChevronLeft className="h-5 w-5" />
                      </button>
                      <button
                        type="button"
                        onClick={() => onChangeLightboxIndex((route.index + 1) % total)}
                        aria-label="Next facility photograph"
                        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-[#1D1B56]/75 p-2 text-white transition-colors hover:bg-[#1D1B56] cursor-pointer"
                      >
                        <ChevronRight className="h-5 w-5" />
                      </button>
                    </>
                  )}
                </div>

                <div className="mt-3 flex items-center justify-between gap-4">
                  <p className="text-sm font-medium text-[#1D1B56]">{current.caption}</p>
                  <span className="shrink-0 text-xs font-semibold text-slate-500">
                    {route.index + 1} / {total}
                  </span>
                </div>
              </div>
            );
          })()}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
