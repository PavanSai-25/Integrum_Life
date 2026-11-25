import { motion, useReducedMotion } from 'framer-motion';
import { Award, Building2, Calendar, CheckCircle2, FileText, Handshake, ShieldCheck, Target } from 'lucide-react';
import {
  BRAND_INFO,
  COMPANY_MISSION_POINTS,
  COMPANY_VALUES,
  COMPANY_VISION,
  WHY_INTEGRUM_POINTS,
} from '../data/corporateData';

function ValueIcon({ type }: { type: 'integrity' | 'excellence' | 'professionalism' }) {
  const props = { className: 'h-5 w-5', strokeWidth: 1.85 };
  switch (type) {
    case 'integrity':
      return <ShieldCheck {...props} />;
    case 'excellence':
      return <Award {...props} />;
    case 'professionalism':
      return <Handshake {...props} />;
  }
}

export function AboutUs() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="about" className="bg-[#F4F5FA] py-20 lg:py-24 scroll-mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Verified Corporate Registry Snapshot */}
        <div className="grid grid-cols-1 gap-4 rounded-xl border border-slate-200 bg-white p-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex items-start gap-3">
            <Building2 className="mt-0.5 h-5 w-5 shrink-0 text-[#7570B0]" />
            <div>
              <p className="text-[11px] font-bold tracking-wider text-slate-500 uppercase">Entity</p>
              <p className="mt-0.5 text-sm font-semibold text-[#1D1B56]">{BRAND_INFO.legalName}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Target className="mt-0.5 h-5 w-5 shrink-0 text-[#168C89]" />
            <div>
              <p className="text-[11px] font-bold tracking-wider text-slate-500 uppercase">Business</p>
              <p className="mt-0.5 text-sm font-semibold text-[#1D1B56]">Chemistry-focused CRDMO</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Calendar className="mt-0.5 h-5 w-5 shrink-0 text-[#88B1CD]" />
            <div>
              <p className="text-[11px] font-bold tracking-wider text-slate-500 uppercase">Incorporated</p>
              <p className="mt-0.5 text-sm font-semibold text-[#1D1B56]">
                {BRAND_INFO.incorporated} · Hyderabad
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <FileText className="mt-0.5 h-5 w-5 shrink-0 text-[#7570B0]" />
            <div>
              <p className="text-[11px] font-bold tracking-wider text-slate-500 uppercase">CIN</p>
              <p className="mt-0.5 text-sm font-semibold text-[#1D1B56]">{BRAND_INFO.cin}</p>
            </div>
          </div>
        </div>

        {/* A. WHO WE ARE */}
        <div className="mt-14 grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6"
          >
            <p className="text-xs font-bold tracking-[0.14em] text-[#168C89] uppercase">About Us</p>
            <h2 className="mt-2 font-[Manrope] text-3xl font-bold tracking-tight text-[#1D1B56] sm:text-4xl">
              Who We Are
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-slate-600">
              Incorporated in September 2017 in Hyderabad, Telangana, Integrum Life Sciences Private
              Limited is a Contract Research, Development and Manufacturing Organization (CRDMO)
              built around a diverse portfolio of synthetic chemistry capabilities to provide
              integrated drug development solutions.
            </p>
            <p className="mt-3.5 text-[15px] leading-relaxed text-slate-600">
              We operate as a technical extension of our partners&apos; R&amp;D teams—combining route
              scouting, non-infringing process development, custom impurity synthesis, and scale-up
              disciplines to deliver consistent results from first milestone to batch scale-up.
            </p>
          </motion.div>

          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="lg:col-span-6"
          >
            <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
              <img
                src="/media/team-photo.webp"
                alt="Integrum Life Sciences scientific research team in Pragatinagar laboratory"
                loading="lazy"
                className="aspect-[16/10] w-full object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* B. OUR VISION Banner */}
        <div className="mt-14 rounded-xl bg-[#1D1B56] px-6 py-7 text-white sm:px-10">
          <p className="text-xs font-bold tracking-[0.16em] text-[#88B1CD] uppercase">Our Vision</p>
          <p className="mt-2 font-[Manrope] text-xl font-semibold italic leading-snug sm:text-2xl">
            &ldquo;{COMPANY_VISION}&rdquo;
          </p>
        </div>

        {/* C. OUR MISSION & D. OUR VALUES */}
        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-12">
          <div className="rounded-xl border border-slate-200 bg-white p-7 lg:col-span-4">
            <p className="text-xs font-bold tracking-[0.14em] text-[#7570B0] uppercase">
              Our Mission
            </p>
            <ul className="mt-4 space-y-3">
              {COMPANY_MISSION_POINTS.map((point) => (
                <li key={point} className="flex items-start gap-2.5 text-sm leading-relaxed text-slate-700">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#168C89]" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 lg:col-span-8">
            {COMPANY_VALUES.map((val) => (
              <article
                key={val.title}
                className="rounded-xl border border-slate-200 bg-white p-6"
              >
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#7570B0]/12 text-[#7570B0]">
                  <ValueIcon type={val.iconType} />
                </div>
                <h3 className="mt-4 font-[Manrope] text-base font-bold text-[#1D1B56]">
                  {val.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {val.description}
                </p>
              </article>
            ))}
          </div>
        </div>

        {/* E. WHY INTEGRUM */}
        <div className="mt-10 rounded-xl border border-slate-200 bg-white p-7 sm:p-9">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-md">
              <p className="text-xs font-bold tracking-[0.14em] text-[#168C89] uppercase">
                Differentiators
              </p>
              <h3 className="mt-1.5 font-[Manrope] text-2xl font-bold text-[#1D1B56]">
                Why Integrum
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Built to provide chemistry clarity, IP security, and dependable partner execution.
              </p>
            </div>

            <div className="grid flex-1 grid-cols-1 gap-4 sm:grid-cols-2">
              {WHY_INTEGRUM_POINTS.map((point) => (
                <div
                  key={point}
                  className="flex items-start gap-3 rounded-lg border border-slate-100 bg-[#F4F5FA] p-4"
                >
                  <CheckCircle2 className="mt-0.5 h-4.5 w-4.5 shrink-0 text-[#7570B0]" />
                  <p className="text-sm font-medium leading-relaxed text-[#1D1B56]">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
