export interface NavLinkItem {
  id: string;
  label: string;
  href: string;
}

export type BusinessIconType = 'crdmo' | 'fine-chemicals' | 'impurities' | 'non-gmp';

export interface OverviewBusinessArea {
  id: string;
  title: string;
  description: string;
  iconType: BusinessIconType;
}

export interface CoreValueItem {
  title: string;
  description: string;
  iconType: 'integrity' | 'excellence' | 'professionalism';
}

export interface ServiceCategory {
  number: string;
  id: string;
  title: string;
  serviceOption: string;
  servicesLabel: string;
  servicesSummary: string;
  expertiseTitle: string;
  expertiseItems: string[];
  iconType: BusinessIconType;
}

export interface NumberedCapability {
  code: string;
  title: string;
  detail: string;
}

export interface LeaderProfile {
  id: string;
  name: string;
  role: string;
  photoSrc: string;
  photoAlt: string;
  paragraphs: string[];
}

export interface FacilityPhoto {
  src: string;
  caption: string;
}

export interface LightboxPhoto {
  src: string;
  caption: string;
  facilityName: string;
}

export type ModalRoute =
  | { type: 'service'; serviceId: string }
  | { type: 'lightbox'; photos: LightboxPhoto[]; index: number }
  | null;
