import { motion, useReducedMotion } from 'framer-motion';
import { Atom, Beaker } from 'lucide-react';
import {
  CORE_CHEMISTRY_CAPABILITIES,
  CORE_TECHNICAL_CAPABILITIES,
} from '../data/corporateData';

export function TechnicalExpertise() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="expertise" className="bg-[#F4F5FA] py-20 lg:py-24 scroll-mt-16">
      <div className="mx-auto max-w-7xl space-y-16 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold tracking-[0.14em] text-[#168C89] uppercase">
            Scientific Depth
          </p>
          <h2 className="mt-2 font-[Manrope] text-3xl font-bold tracking-tight text-[#1D1B56] sm:text-4xl">
            Technical &amp; Chemistry Expertise
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-slate-600">
            Our technical foundation rests on extensive execution across CRDMO programs,
            fine chemicals synthesis, and customised impurity chemistry.
          </p>
        </div>

        {/* SECTION A: CORE TECHNICAL CAPABILITIES (9 items) */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-9"
        >
          <div className="flex flex-col justify-between gap-4 border-b border-slate-100 pb-6 sm:flex-row sm:items-center">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#7570B0]/12 text-[#7570B0]">
                <Beaker className="h-5 w-5" />
              </span>
              <div>
                <p className="text-[11px] font-bold tracking-[0.14em] text-[#7570B0] uppercase">
                  Section A
                </p>
                <h3 className="font-[Manrope] text-2xl font-bold text-[#1D1B56]">
                  Core Technical Capabilities
                </h3>
              </div>
            </div>
            <span className="text-xs font-semibold text-slate-500">
              9 Verified Execution Capabilities
            </span>
          </div>

          <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {CORE_TECHNICAL_CAPABILITIES.map((cap) => (
              <div
                key={cap.code}
                className="flex items-start gap-3.5 rounded-xl border border-slate-200/80 bg-[#F4F5FA]/65 p-5 transition-colors hover:border-[#7570B0]/45 hover:bg-white"
              >
                <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#7570B0] font-[Manrope] text-xs font-bold text-white">
                  {cap.code}
                </span>
                <div>
                  <h4 className="font-[Manrope] text-sm font-bold text-[#1D1B56]">
                    {cap.title}
                  </h4>
                  <p className="mt-1 text-xs leading-relaxed text-slate-600">{cap.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* SECTION B: CORE CHEMISTRY CAPABILITIES (12 items) */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-9"
        >
          <div className="flex flex-col justify-between gap-4 border-b border-slate-100 pb-6 sm:flex-row sm:items-center">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#168C89]/12 text-[#168C89]">
                <Atom className="h-5 w-5" />
              </span>
              <div>
                <p className="text-[11px] font-bold tracking-[0.14em] text-[#168C89] uppercase">
                  Section B
                </p>
                <h3 className="font-[Manrope] text-2xl font-bold text-[#1D1B56]">
                  Core Chemistry Capabilities
                </h3>
              </div>
            </div>
            <span className="text-xs font-semibold text-slate-500">
              Beyond Traditional Expertise · 12 Reaction Areas
            </span>
          </div>

          <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {CORE_CHEMISTRY_CAPABILITIES.map((chem) => (
              <div
                key={chem.code}
                className="flex items-start gap-3.5 rounded-xl border border-slate-200/80 bg-[#F4F5FA]/65 p-5 transition-colors hover:border-[#168C89]/45 hover:bg-white"
              >
                <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#1D1B56] font-[Manrope] text-xs font-bold text-white">
                  {chem.code}
                </span>
                <div>
                  <h4 className="font-[Manrope] text-sm font-bold text-[#1D1B56]">
                    {chem.title}
                  </h4>
                  <p className="mt-1 text-xs leading-relaxed text-slate-600">{chem.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
