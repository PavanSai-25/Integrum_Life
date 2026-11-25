import { motion, useReducedMotion } from 'framer-motion';
import {
  ArrowRight,
  FileDown,
  FlaskConical,
  Layers,
  Microscope,
  PackageCheck,
} from 'lucide-react';
import { OVERVIEW_AREAS } from '../data/corporateData';
import type { BusinessIconType } from '../types/corporate';

function AreaIcon({ type }: { type: BusinessIconType }) {
  const props = { className: 'h-5 w-5', strokeWidth: 1.85 };
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

export function OverviewSection() {
  const prefersReducedMotion = useReducedMotion();

  const scrollToServices = () => {
    document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="overview" className="bg-white py-20 lg:py-24 scroll-mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <p className="text-xs font-bold tracking-[0.14em] text-[#168C89] uppercase">
              Company Overview
            </p>
            <h2 className="mt-2 font-[Manrope] text-3xl font-bold tracking-tight text-[#1D1B56] sm:text-4xl">
              An Agile Chemistry Partner Across Every Milestone
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-slate-600">
              Integrum Life Sciences Private Limited is a chemistry-focused Contract Research,
              Development and Manufacturing Organization (CRDMO) partnering with global
              pharmaceutical, biotechnology and chemical innovators. The company combines synthetic
              chemistry expertise with flexible partnership models to help clients progress from
              early research to scale-up.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href="/docs/Integrum-Life-Sciences-Company-Profile.pdf"
              download="Integrum-Life-Sciences-Company-Profile.pdf"
              className="inline-flex items-center gap-2 rounded-lg border border-[#1D1B56]/25 bg-[#F4F5FA] px-4 py-3 font-[Manrope] text-sm font-semibold text-[#1D1B56] transition-colors hover:border-[#7570B0] hover:bg-white"
            >
              <FileDown className="h-4 w-4 text-[#7570B0]" />
              <span>Download Company Profile</span>
            </a>

            <button
              type="button"
              onClick={scrollToServices}
              className="inline-flex items-center gap-2 rounded-lg bg-[#7570B0] px-5 py-3 font-[Manrope] text-sm font-semibold text-white transition-colors hover:bg-[#5D5899] cursor-pointer"
            >
              <span>Explore Services</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {OVERVIEW_AREAS.map((area, idx) => (
            <motion.article
              key={area.id}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.4,
                delay: prefersReducedMotion ? 0 : idx * 0.05,
                ease: 'easeOut',
              }}
              className="flex flex-col justify-between rounded-xl border border-slate-200 bg-[#F4F5FA]/70 p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#7570B0]/50 hover:bg-white"
            >
              <div>
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#7570B0]/12 text-[#7570B0]">
                  <AreaIcon type={area.iconType} />
                </div>
                <h3 className="mt-4 font-[Manrope] text-lg font-bold text-[#1D1B56]">
                  {area.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {area.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
