import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Check, FlaskConical, Layers, Microscope, PackageCheck } from 'lucide-react';
import { SERVICE_CATEGORIES } from '../data/corporateData';
import type { BusinessIconType } from '../types/corporate';

interface ServicesGridProps {
  onSelectService: (serviceId: string) => void;
  onEnquireService: (serviceOption: string) => void;
}

function CategoryIcon({ type }: { type: BusinessIconType }) {
  const props = { className: 'h-6 w-6', strokeWidth: 1.75 };
  switch (type) {
    case 'crdmo':
      return <FlaskConical {...props} />;
    case 'fine-chemicals':
      return <Layers {...props} />;
    case 'impurities':
      return <Microscope {...props} />;
    case 'non-gmp':
      return <PackageCheck {...props} />;
  }
}

export function ServicesGrid({ onSelectService, onEnquireService }: ServicesGridProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="services" className="bg-white py-20 lg:py-24 scroll-mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold tracking-[0.14em] text-[#168C89] uppercase">
            Verified Portfolio
          </p>
          <h2 className="mt-2 font-[Manrope] text-3xl font-bold tracking-tight text-[#1D1B56] sm:text-4xl">
            Services &amp; Manufacturing Scope
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-slate-600">
            Chemistry-focused services structured across CRDMO, Fine Chemicals, Critical
            Impurities, and Non-GMP Manufacturing.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-7 md:grid-cols-2">
          {SERVICE_CATEGORIES.map((category, idx) => (
            <motion.article
              key={category.id}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.45,
                delay: prefersReducedMotion ? 0 : idx * 0.05,
                ease: 'easeOut',
              }}
              className="flex flex-col justify-between rounded-xl border border-slate-200 bg-[#F4F5FA]/50 p-7 transition-all duration-200 hover:border-[#7570B0]/50 hover:bg-white sm:p-8"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#7570B0] font-[Manrope] text-sm font-bold text-white">
                      {category.number}
                    </span>
                    <h3 className="font-[Manrope] text-xl font-bold text-[#1D1B56]">
                      {category.title}
                    </h3>
                  </div>

                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-[#168C89]">
                    <CategoryIcon type={category.iconType} />
                  </span>
                </div>

                <div className="mt-6">
                  <p className="text-[11px] font-bold tracking-[0.14em] text-[#7570B0] uppercase">
                    {category.servicesLabel}
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-700">
                    {category.servicesSummary}
                  </p>
                </div>

                <div className="mt-5">
                  <p className="text-[11px] font-bold tracking-[0.14em] text-[#168C89] uppercase">
                    {category.expertiseTitle}
                  </p>
                  <ul className="mt-2.5 space-y-2">
                    {category.expertiseItems.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-[#1D1B56]">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#7570B0]" strokeWidth={2.5} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-7 flex flex-wrap items-center justify-between gap-3 border-t border-slate-200/80 pt-5">
                <button
                  type="button"
                  onClick={() => onSelectService(category.id)}
                  className="text-xs font-semibold text-[#1D1B56] underline-offset-4 hover:text-[#7570B0] hover:underline cursor-pointer"
                >
                  View Capability Summary
                </button>

                <button
                  type="button"
                  onClick={() => onEnquireService(category.serviceOption)}
                  className="inline-flex items-center gap-1.5 rounded-lg bg-[#1D1B56] px-4 py-2 font-[Manrope] text-xs font-semibold text-white transition-colors hover:bg-[#7570B0] cursor-pointer"
                >
                  <span>Enquire {category.title}</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
