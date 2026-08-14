export interface ServiceItem {
  id: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  features: string[];
  imageUrl: string;
  category: 'freight' | 'transfers' | 'commercial-support';
}

export interface ServiceDivision {
  id: 'xpress' | 'xfers' | 'xtras';
  title: string;
  badge: string;
  tagline: string;
  shortPositioning: string;
  heroHeadline: string;
  description: string;
  primaryColor: string;
  accentColor: string;
  heroImage: string;
  iconName: string;
  categories: {
    categoryName: string;
    items: string[];
  }[];
  detailedServices: ServiceItem[];
}

export interface QualitativeProofPoint {
  title: string;
  description: string;
  iconName: string;
}

export interface NetworkLocation {
  id: string;
  city: string;
  state: string;
  coordinates: { x: number; y: number }; // percentage on SVG map
  type: 'hub' | 'terminal' | 'washout' | 'storage';
  phone?: string;
  address?: string;
  servicesOffered: string[];
}

export interface QuoteRequestData {
  division: 'xpress' | 'xfers' | 'xtras';
  specificService: string;
  origin?: string;
  destination?: string;
  commodityOrEquipment?: string;
  timeframe: string;
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  notes?: string;
}

export interface ContactInquiryData {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  preferredDivision: 'all' | 'xpress' | 'xfers' | 'xtras';
  subject: string;
  message: string;
  consent: boolean;
}

export interface ApiResponse<T = unknown> {
  success: boolean;
  message: string;
  data?: T;
  timestamp: string;
  referenceId?: string;
}
