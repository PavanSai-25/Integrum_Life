import { motion, useReducedMotion } from 'framer-motion';
import { LEADERSHIP_TEAM } from '../data/corporateData';

export function LeadershipSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="leadership" className="bg-white py-20 lg:py-24 scroll-mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold tracking-[0.14em] text-[#168C89] uppercase">
            Scientific Leadership
          </p>
          <h2 className="mt-2 font-[Manrope] text-3xl font-bold tracking-tight text-[#1D1B56] sm:text-4xl">
            Leadership Team
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-slate-600">
            Driving scientific excellence, customer partnerships, and process execution from
            discovery through scale-up.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {LEADERSHIP_TEAM.map((leader, idx) => (
            <motion.article
              key={leader.id}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.45,
                delay: prefersReducedMotion ? 0 : idx * 0.08,
                ease: 'easeOut',
              }}
              className="rounded-2xl border border-slate-200 bg-[#F4F5FA]/60 p-7 sm:p-8"
            >
              <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center">
                <div className="h-24 w-24 shrink-0 overflow-hidden rounded-full border-2 border-[#7570B0]/40 bg-white shadow-xs">
                  <img
                    src={leader.photoSrc}
                    alt={leader.photoAlt}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>

                <div>
                  <span className="inline-block rounded-md bg-[#7570B0] px-3 py-1 font-[Manrope] text-[11px] font-bold tracking-[0.12em] text-white uppercase">
                    {leader.role}
                  </span>
                  <h3 className="mt-2 font-[Manrope] text-2xl font-bold text-[#1D1B56]">
                    {leader.name}
                  </h3>
                </div>
              </div>

              <div className="mt-6 space-y-3.5 text-sm leading-[1.75] text-slate-700">
                {leader.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
