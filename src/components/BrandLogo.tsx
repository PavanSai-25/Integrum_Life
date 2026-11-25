import { SOCIAL_CONFIG } from '../config/socialLinks';

interface IntegrumLogoProps {
  variant?: 'light' | 'hero' | 'dark';
  showTagline?: boolean;
}

export function IntegrumLogo({
  variant = 'light',
  showTagline = false,
}: IntegrumLogoProps) {
  const isLightText = variant === 'hero' || variant === 'dark';

  return (
    <span className="inline-flex items-center gap-3 select-none">
      <span
        className={`inline-flex shrink-0 items-center justify-center rounded-lg transition-colors ${
          variant === 'hero'
            ? 'bg-white/92 px-2 py-1 shadow-xs'
            : variant === 'dark'
              ? 'bg-white px-2.5 py-1.5'
              : ''
        }`}
      >
        <img
          src="/media/integrum-logo.png"
          alt="Integrum Life Sciences official logo"
          className="h-8 w-auto object-contain sm:h-9"
        />
      </span>

      <span className="flex flex-col leading-none">
        <span
          className={`font-[Manrope] text-[17px] font-extrabold tracking-[0.05em] sm:text-[18px] ${
            isLightText ? 'text-white' : 'text-[#1D1B56]'
          }`}
        >
          INTEGRUM
        </span>
        <span
          className={`mt-1 font-[Inter] text-[10px] font-semibold tracking-[0.14em] uppercase ${
            isLightText ? 'text-[#88B1CD]' : 'text-[#7570B0]'
          }`}
        >
          Life Sciences
        </span>
        {showTagline && (
          <span
            className={`mt-1 font-[Inter] text-[9.5px] tracking-[0.08em] ${
              isLightText ? 'text-slate-300' : 'text-slate-500'
            }`}
          >
            Innovation · Technology · Nature
          </span>
        )}
      </span>
    </span>
  );
}

function LinkedInIcon({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z" />
    </svg>
  );
}

function YouTubeIcon({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M21.58 7.19a2.75 2.75 0 0 0-1.94-1.95C17.93 4.78 12 4.78 12 4.78s-5.93 0-7.64.46A2.75 2.75 0 0 0 2.42 7.19 28.7 28.7 0 0 0 1.96 12c0 1.62.16 3.24.46 4.81a2.75 2.75 0 0 0 1.94 1.95c1.71.46 7.64.46 7.64.46s5.93 0 7.64-.46a2.75 2.75 0 0 0 1.94-1.95c.3-1.57.46-3.19.46-4.81s-.16-3.24-.46-4.81ZM9.96 15.05V8.95L15.2 12l-5.24 3.05Z" />
    </svg>
  );
}

interface SocialLinksBarProps {
  tone?: 'hero' | 'light' | 'dark';
}

export function SocialLinksBar({ tone = 'light' }: SocialLinksBarProps) {
  const channels = [
    {
      id: 'linkedin',
      label: 'LinkedIn',
      url: SOCIAL_CONFIG.linkedinUrl.trim(),
      icon: <LinkedInIcon />,
    },
    {
      id: 'youtube',
      label: 'YouTube',
      url: SOCIAL_CONFIG.youtubeUrl.trim(),
      icon: <YouTubeIcon />,
    },
  ];

  const baseClass =
    tone === 'hero'
      ? 'border-white/25 bg-white/10 text-white hover:bg-white/20'
      : tone === 'dark'
        ? 'border-white/15 bg-white/5 text-slate-200 hover:border-[#88B1CD] hover:text-white'
        : 'border-slate-200 bg-[#F4F5FA] text-[#1D1B56] hover:border-[#7570B0] hover:text-[#7570B0]';

  return (
    <div className="inline-flex items-center gap-2">
      {channels.map((ch) =>
        ch.url ? (
          <a
            key={ch.id}
            href={ch.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Integrum Life Sciences on ${ch.label}`}
            className={`inline-flex h-8.5 w-8.5 items-center justify-center rounded-lg border transition-colors ${baseClass}`}
          >
            {ch.icon}
          </a>
        ) : (
          <span
            key={ch.id}
            role="img"
            aria-label={`${ch.label} link pending configuration`}
            title={`Official ${ch.label} URL not yet supplied — configure in src/config/socialLinks.ts`}
            className={`inline-flex h-8.5 w-8.5 items-center justify-center rounded-lg border opacity-45 cursor-not-allowed ${baseClass}`}
          >
            {ch.icon}
          </span>
        ),
      )}
    </div>
  );
}
