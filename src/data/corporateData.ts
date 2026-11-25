import type {
  CoreValueItem,
  FacilityPhoto,
  LeaderProfile,
  NavLinkItem,
  NumberedCapability,
  OverviewBusinessArea,
  ServiceCategory,
} from '../types/corporate';

export const BRAND_INFO = {
  name: 'INTEGRUM LIFE SCIENCES',
  shortName: 'Integrum Life Sciences',
  legalName: 'Integrum Life Sciences Private Limited',
  tagline: 'Innovation | Technology | Nature',
  incorporated: 'September 2017',
  locationShort: 'Hyderabad, Telangana, India',
  cin: 'U74999TG2017PTC119406',
  address: 'Plot No 34, ALEAP Industrial Estate, Pragatinagar, Hyderabad – 500072, Telangana, India',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Plot+No+34+ALEAP+Industrial+Estate+Pragatinagar+Hyderabad+500072',
  phone: '+91 95024 71357',
  phoneHref: 'tel:+919502471357',
  email: 'sales@Integrum.in',
  emailHref: 'mailto:sales@Integrum.in',
  website: 'https://www.integrum.in',
} as const;

export const NAV_ITEMS: NavLinkItem[] = [
  { id: 'home', label: 'Home', href: '#hero' },
  { id: 'about', label: 'About Us', href: '#about' },
  { id: 'services', label: 'Services', href: '#services' },
  { id: 'expertise', label: 'Expertise', href: '#expertise' },
  { id: 'leadership', label: 'Leadership Team', href: '#leadership' },
  { id: 'facilities', label: 'Facilities', href: '#facilities' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

export const OVERVIEW_AREAS: OverviewBusinessArea[] = [
  {
    id: 'crdmo',
    title: 'CRDMO',
    description: 'Contract research, development and manufacturing solutions.',
    iconType: 'crdmo',
  },
  {
    id: 'fine-chemicals',
    title: 'Fine Chemicals',
    description: 'Route scouting, process optimization, scale-up and technology transfer.',
    iconType: 'fine-chemicals',
  },
  {
    id: 'impurities',
    title: 'Impurities',
    description: 'Impurity identification and synthesis.',
    iconType: 'impurities',
  },
  {
    id: 'non-gmp',
    title: 'Non-GMP Manufacturing',
    description:
      'Gram-to-kilogram supply of clinically active compound intermediates and research-grade compounds.',
    iconType: 'non-gmp',
  },
];

export const COMPANY_VISION =
  'To be a global leader for science-based integrated drug development solutions.';

export const COMPANY_MISSION_POINTS = [
  'Pursuit of excellence through science and technology.',
  'Agile team with open communication and commitment to deliverables.',
];

export const COMPANY_VALUES: CoreValueItem[] = [
  {
    title: 'Integrity',
    description: 'Ethical, honest and transparent conduct.',
    iconType: 'integrity',
  },
  {
    title: 'Excellence',
    description: 'Commitment to high scientific and operational standards.',
    iconType: 'excellence',
  },
  {
    title: 'Professionalism',
    description: 'Accountability, reliability and customer focus.',
    iconType: 'professionalism',
  },
];

export const WHY_INTEGRUM_POINTS: string[] = [
  'Experienced chemists with expertise in complex and chiral synthesis.',
  'Flexible engagement models: FTE, FFS and hybrid.',
  'Commitment to quality, confidentiality and IP protection.',
  'Responsive communication and dedicated project management.',
];

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    number: '01',
    id: 'crdmo',
    title: 'CRDMO',
    serviceOption: 'CRDMO',
    servicesLabel: 'SERVICES',
    servicesSummary:
      'Contract Research, Development and Manufacturing Organization solutions.',
    expertiseTitle: 'EXPERTISE',
    expertiseItems: [
      'Custom contract manufacturing',
      'Non-infringing process development',
      'Product scale-up from pilot to commercial',
      'Route scouting',
      'Identification of new impurities',
      'Chiral resolution and optimisation',
    ],
    iconType: 'crdmo',
  },
  {
    number: '02',
    id: 'fine-chemicals',
    title: 'Fine Chemicals',
    serviceOption: 'Fine Chemicals',
    servicesLabel: 'SERVICES',
    servicesSummary: 'Fine chemical development and synthesis.',
    expertiseTitle: 'EXPERTISE',
    expertiseItems: [
      'Synthesis and supply of high-value fine chemicals',
      'Synthesis of unique key starting materials (KSMs)',
      'Route scouting',
      'Process optimization',
      'Scale-up',
      'Technology transfer',
    ],
    iconType: 'fine-chemicals',
  },
  {
    number: '03',
    id: 'impurities',
    title: 'Impurities',
    serviceOption: 'Impurities',
    servicesLabel: 'SERVICES',
    servicesSummary: 'Critical impurity synthesis.',
    expertiseTitle: 'EXPERTISE',
    expertiseItems: [
      'New and customisable impurity synthesis',
      'Impurity identification',
      'Custom synthesis of critical impurities',
    ],
    iconType: 'impurities',
  },
  {
    number: '04',
    id: 'non-gmp-manufacturing',
    title: 'Non-GMP Manufacturing',
    serviceOption: 'Non-GMP Manufacturing',
    servicesLabel: 'SUPPLY SCOPE',
    servicesSummary:
      'Reliable gram-to-kilogram non-GMP manufacturing supporting preclinical and early development.',
    expertiseTitle: 'CAPABILITIES',
    expertiseItems: [
      'Gram-to-kilogram supply',
      'Clinically active compound intermediates',
      'Research-grade compounds',
    ],
    iconType: 'non-gmp',
  },
];

export const CORE_TECHNICAL_CAPABILITIES: NumberedCapability[] = [
  {
    code: '01',
    title: 'Multi-step transformations',
    detail: 'Executed across convergent and linear synthetic sequences.',
  },
  {
    code: '02',
    title: 'Gram to multi-kilogram level synthesis',
    detail: 'Bridging milligram discovery to multi-kilogram batch delivery.',
  },
  {
    code: '03',
    title: 'Unique compounds even without CAS and literature',
    detail: 'De novo synthetic route architecture for novel scaffolds.',
  },
  {
    code: '04',
    title: 'High-value fine chemicals',
    detail: 'Specialized intermediates, building blocks, and KSMs.',
  },
  {
    code: '05',
    title: 'Customised critical impurities',
    detail: 'Process-related impurities synthesized and characterized cleanly.',
  },
  {
    code: '06',
    title: 'Route scouting and reaction optimization',
    detail: 'Yield improvement, selectivity, and safer reagent selection.',
  },
  {
    code: '07',
    title: 'Quick scale-up capabilities for new compounds',
    detail: 'Streamlined tech transfer from bench scale to all-glass reactors.',
  },
  {
    code: '08',
    title: 'High purity and analytical standards',
    detail: 'Stringent chromatographic and spectroscopic verification.',
  },
  {
    code: '09',
    title: 'On-time delivery with customer specifications',
    detail: 'Milestone accountability with clear client communication.',
  },
];

export const CORE_CHEMISTRY_CAPABILITIES: NumberedCapability[] = [
  {
    code: '01',
    title: 'High and low temperature reactions',
    detail: 'Controlled thermal windows across reactive intermediates.',
  },
  {
    code: '02',
    title: 'Amide coupling',
    detail: 'Clean peptide-bond and carboxylic acid functionalization.',
  },
  {
    code: '03',
    title: 'Alkylations',
    detail: 'Selective N-, O-, and C-alkylation chemistry.',
  },
  {
    code: '04',
    title: 'Sulphonations',
    detail: 'Targeted sulfonation and sulfonamide derivatization.',
  },
  {
    code: '05',
    title: 'Organometallic reactions',
    detail: 'Air- and moisture-sensitive metal-mediated transformations.',
  },
  {
    code: '06',
    title: 'Heterocyclic chemistry',
    detail: 'Diverse mono- and polycyclic heteroaromatic ring synthesis.',
  },
  {
    code: '07',
    title: 'Catalytic hydrogenation',
    detail: 'Selective heterogeneous and homogeneous reductions.',
  },
  {
    code: '08',
    title: 'Asymmetric synthesis',
    detail: 'Stereoselective catalysis and chiral resolution workflows.',
  },
  {
    code: '09',
    title: 'Halogenation',
    detail: 'Regioselective bromination, chlorination, and iodination.',
  },
  {
    code: '10',
    title: 'Aliphatic chemistry',
    detail: 'Straight-chain, branched, and alicyclic molecular frameworks.',
  },
  {
    code: '11',
    title: 'Peptide chemistry',
    detail: 'Protected amino acid coupling and oligopeptide synthesis.',
  },
  {
    code: '12',
    title: 'Nucleic acid chemistry',
    detail: 'Modified nucleosides, nucleotides, and specialized analogs.',
  },
];

export const LEADERSHIP_TEAM: LeaderProfile[] = [
  {
    id: 'santosh-adla',
    name: 'Dr. Santosh Kumar Adla',
    role: 'DIRECTOR',
    photoSrc: '/media/leader-santosh.png',
    photoAlt: 'Dr. Santosh Kumar Adla, Director of Integrum Life Sciences',
    paragraphs: [
      'Dr. Santosh Kumar Adla is a pharmaceutical research professional with over 19 years of international experience across Europe and India. He holds a PhD in Organic Chemistry from the Technical University of Braunschweig, Germany, and has held research positions at leading European institutions including Masaryk University, Czech Academy of Sciences, and the University of Eastern Finland.',
      'His experience spans synthetic organic chemistry, medicinal chemistry, drug discovery, CNS research, nucleoside chemistry, and drug delivery. He has authored 27 international publications and brings deep expertise in scientific project leadership, strategic planning, business development, and international collaborations.',
    ],
  },
  {
    id: 'narasimha-rao',
    name: 'Dr. Bandaru Narasimha Rao',
    role: 'MANAGING DIRECTOR',
    photoSrc: '/media/leader-narasimha.png',
    photoAlt: 'Dr. Bandaru Narasimha Rao, Managing Director of Integrum Life Sciences',
    paragraphs: [
      "Dr. Bandaru Narasimha Rao brings 21 years of research experience in CRO and process R&D, having previously contributed to leading pharmaceutical organizations including Dr. Reddy's Laboratories, GVK Bio Sciences, Sai Life Sciences, and Firmus Labs.",
      'His expertise encompasses bulk unit operations, process R&D, and synthesis of CRDMO, CRAMS, CRO molecules, and fine chemicals ranging from milligram to multi-kilogram scale—driving projects from development through to successful commercialization.',
    ],
  },
];

export const RD_LAB_PHOTOS: FacilityPhoto[] = [
  { src: '/media/rd-lab-4.webp', caption: 'Chemists executing synthesis inside R&D fume hoods' },
  { src: '/media/rd-lab-3.webp', caption: 'Benchtop analytical and synthesis preparation' },
  { src: '/media/rd-lab-6.webp', caption: 'Precision glassware and reaction monitoring' },
  { src: '/media/rd-lab-5.webp', caption: 'Pragatinagar 3,500 sq. ft. R&D laboratory suite' },
  { src: '/media/rd-lab-1.webp', caption: 'Rotary evaporation and temperature control setup' },
  { src: '/media/rd-lab-2.webp', caption: 'Dual rotary evaporator distillation stations' },
];

export const CONTACT_SERVICE_OPTIONS: string[] = [
  'CRDMO',
  'Fine Chemicals',
  'Impurities',
  'Non-GMP Manufacturing',
  'Other',
];
