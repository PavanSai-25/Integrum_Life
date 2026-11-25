import { FileDown, Globe, Mail, MapPin, Phone } from 'lucide-react';
import { BRAND_INFO, NAV_ITEMS, SERVICE_CATEGORIES } from '../data/corporateData';
import { IntegrumLogo, SocialLinksBar } from './BrandLogo';

const CURRENT_YEAR = new Date().getFullYear();

interface FooterProps {
  onSelectService: (serviceId: string) => void;
}

export function Footer({ onSelectService }: FooterProps) {
  const scrollTo = (selector: string) => {
    const el = document.querySelector(selector);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-[#1D1B56] text-slate-200">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          {/* Brand Column */}
          <div className="md:col-span-4">
            <IntegrumLogo variant="dark" showTagline />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-slate-300">
              Chemistry-focused CRDMO supporting global pharmaceutical, biotechnology, and
              chemical innovators from early route scouting to scale-up synthesis.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <SocialLinksBar tone="dark" />
              <a
                href="/docs/Integrum-Life-Sciences-Company-Profile.pdf"
                download="Integrum-Life-Sciences-Company-Profile.pdf"
                className="inline-flex items-center gap-1.5 rounded-lg border border-white/20 bg-white/8 px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:border-[#88B1CD] hover:bg-white/15"
              >
                <FileDown className="h-3.5 w-3.5 text-[#88B1CD]" />
                <span>Company Profile</span>
              </a>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="md:col-span-2">
            <h3 className="font-[Manrope] text-xs font-bold tracking-[0.14em] text-[#88B1CD] uppercase">
              Navigation
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo(item.href);
                    }}
                    className="text-slate-300 transition-colors hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div className="md:col-span-3">
            <h3 className="font-[Manrope] text-xs font-bold tracking-[0.14em] text-[#88B1CD] uppercase">
              Services
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {SERVICE_CATEGORIES.map((service) => (
                <li key={service.id}>
                  <button
                    type="button"
                    onClick={() => onSelectService(service.id)}
                    className="text-left text-slate-300 transition-colors hover:text-white cursor-pointer"
                  >
                    {service.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Verified Contact Column */}
          <div className="md:col-span-3">
            <h3 className="font-[Manrope] text-xs font-bold tracking-[0.14em] text-[#88B1CD] uppercase">
              Contact Details
            </h3>
            <div className="mt-4 space-y-3 text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#88B1CD]" />
                <p className="leading-relaxed">{BRAND_INFO.address}</p>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-[#88B1CD]" />
                <a href={BRAND_INFO.phoneHref} className="transition-colors hover:text-white">
                  {BRAND_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-[#88B1CD]" />
                <a href={BRAND_INFO.emailHref} className="transition-colors hover:text-white">
                  {BRAND_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Globe className="h-4 w-4 shrink-0 text-[#88B1CD]" />
                <a
                  href={BRAND_INFO.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-white"
                >
                  www.integrum.in
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 bg-[#151342] py-4 text-xs text-slate-300">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 sm:flex-row sm:px-6 lg:px-8">
          <p>&copy; {CURRENT_YEAR} {BRAND_INFO.legalName}. All rights reserved.</p>
          <p>CIN: {BRAND_INFO.cin}</p>
        </div>
      </div>
    </footer>
  );
}
