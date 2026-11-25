import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';

interface HeroProps {
  onEnquireNow: () => void;
}

export function Hero({ onEnquireNow }: HeroProps) {
  const prefersReducedMotion = useReducedMotion();

  const scrollTo = (selector: string) => {
    const el = document.querySelector(selector);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-screen h-[100svh] w-full items-center overflow-hidden bg-[#1D1B56]"
    >
      {/* Authentic Integrum R&D Laboratory Photograph with subtle scale drift */}
      <motion.img
        src="/media/rd-lab-4.webp"
        alt="Integrum Life Sciences chemists working inside the Pragatinagar R&D synthesis fume hoods"
        initial={prefersReducedMotion ? false : { scale: 1.0 }}
        animate={prefersReducedMotion ? undefined : { scale: 1.05 }}
        transition={{ duration: 18, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
        className="absolute inset-0 h-full w-full object-cover object-[65%_center] sm:object-center will-change-transform"
      />

      {/* Lighter Directional Navy-to-Violet Overlay preserving lab visibility & text contrast */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[#1D1B56]/18"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-[#1D1B56]/84 via-[#1D1B56]/55 to-[#7570B0]/28"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pt-16 sm:px-6 lg:px-8">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <p className="inline-block rounded-full border border-[#88B1CD]/45 bg-[#1D1B56]/45 px-3.5 py-1.5 font-[Manrope] text-[11px] font-bold tracking-[0.16em] text-[#88B1CD] uppercase backdrop-blur-xs sm:text-xs">
            INNOVATION | TECHNOLOGY | NATURE
          </p>

          <h1 className="mt-5 font-[Manrope] text-3xl font-bold leading-[1.15] tracking-tight text-white drop-shadow-[0_2px_12px_rgba(29,27,86,0.45)] sm:text-5xl lg:text-[56px]">
            Chemistry-Driven Solutions.
            <br />
            From Research to Scale-Up.
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-100 drop-shadow-[0_1px_6px_rgba(29,27,86,0.45)] sm:text-lg">
            Integrum Life Sciences partners with pharmaceutical, biotechnology and chemical
            innovators to accelerate research, development and manufacturing through specialised
            chemistry expertise.
          </p>

          <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center">
            <button
              type="button"
              onClick={() => scrollTo('#expertise')}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#7570B0] px-6 py-3.5 font-[Manrope] text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#5D5899] cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <span>Explore Our Capabilities</span>
              <ArrowRight className="h-4 w-4" />
            </button>

            <button
              type="button"
              onClick={onEnquireNow}
              className="inline-flex items-center justify-center rounded-lg border border-white/55 bg-[#1D1B56]/35 px-6 py-3.5 font-[Manrope] text-sm font-semibold text-white backdrop-blur-xs transition-colors hover:bg-white hover:text-[#1D1B56] cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Enquire Now
            </button>
          </div>
        </motion.div>
      </div>

      {/* Subtle Bottom Scroll Indicator */}
      <button
        type="button"
        onClick={() => scrollTo('#overview')}
        aria-label="Scroll to company overview"
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 inline-flex flex-col items-center gap-1 text-xs font-medium tracking-wider text-slate-100/95 transition-colors hover:text-white cursor-pointer"
      >
        <span className="text-[11px] uppercase tracking-[0.14em]">Scroll</span>
        <ChevronDown className="h-4 w-4 animate-bounce" />
      </button>
    </section>
  );
}
