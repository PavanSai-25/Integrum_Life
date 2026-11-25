import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../data/corporateData';
import { IntegrumLogo, SocialLinksBar } from './BrandLogo';

interface NavbarProps {
  onEnquireNow: () => void;
}

export function Navbar({ onEnquireNow }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 36);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navigateTo = (href: string) => {
    setMobileOpen(false);
    if (href === '#contact') {
      onEnquireNow();
      return;
    }
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 w-full transition-all duration-300 ${
        scrolled || mobileOpen
          ? 'border-b border-slate-200 bg-white/96 shadow-[0_4px_20px_rgba(29,27,86,0.06)] backdrop-blur-md'
          : 'border-b border-white/15 bg-[#1D1B56]/30 backdrop-blur-[2px]'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            navigateTo('#hero');
          }}
          aria-label="Integrum Life Sciences Home"
          className="shrink-0 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7570B0]"
        >
          <IntegrumLogo variant={scrolled || mobileOpen ? 'light' : 'hero'} />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-4 lg:flex xl:gap-6" aria-label="Primary Navigation">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                navigateTo(item.href);
              }}
              className={`font-[Inter] text-[13.5px] font-medium whitespace-nowrap transition-colors ${
                scrolled
                  ? 'text-[#1D1B56] hover:text-[#7570B0]'
                  : 'text-white/95 hover:text-[#88B1CD]'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right Controls: Social Icons + Enquire Now */}
        <div className="hidden shrink-0 items-center gap-3 lg:flex">
          <SocialLinksBar tone={scrolled ? 'light' : 'hero'} />
          <button
            type="button"
            onClick={onEnquireNow}
            className={`rounded-lg px-4.5 py-2.5 font-[Manrope] text-xs font-bold tracking-wide transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#88B1CD] ${
              scrolled
                ? 'bg-[#7570B0] text-white hover:bg-[#5D5899]'
                : 'bg-white text-[#1D1B56] hover:bg-[#F4F5FA]'
            }`}
          >
            Enquire Now
          </button>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={mobileOpen}
          className={`inline-flex items-center justify-center rounded-md p-2 transition-colors lg:hidden cursor-pointer ${
            scrolled || mobileOpen
              ? 'text-[#1D1B56] hover:bg-[#F4F5FA]'
              : 'text-white hover:bg-white/15'
          }`}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: 'easeInOut' }}
            className="overflow-hidden border-t border-slate-200 bg-white lg:hidden"
          >
            <div className="mx-auto max-w-7xl space-y-1 px-4 py-4">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    navigateTo(item.href);
                  }}
                  className="block rounded-md px-3 py-2.5 text-sm font-medium text-[#1D1B56] hover:bg-[#F4F5FA] hover:text-[#7570B0]"
                >
                  {item.label}
                </a>
              ))}

              <div className="mt-2 flex items-center justify-between border-t border-slate-100 pt-3">
                <SocialLinksBar tone="light" />
                <button
                  type="button"
                  onClick={() => {
                    setMobileOpen(false);
                    onEnquireNow();
                  }}
                  className="rounded-lg bg-[#7570B0] px-5 py-2.5 font-[Manrope] text-xs font-bold text-white hover:bg-[#5D5899] cursor-pointer"
                >
                  Enquire Now
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
