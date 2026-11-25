/**
 * Central social media and enquiry endpoint configuration for Integrum Life Sciences.
 *
 * Replace empty strings with verified official profile URLs or backend webhook
 * endpoints before deploying to production.
 */
export const SOCIAL_CONFIG = {
  /** Official Integrum Life Sciences LinkedIn company page URL (supply when verified) */
  linkedinUrl: '',
  /** Official Integrum Life Sciences YouTube channel URL (supply when verified) */
  youtubeUrl: '',
} as const;

export const ENQUIRY_ENDPOINT_URL: string =
  import.meta.env.VITE_ENQUIRY_ENDPOINT ?? '';
