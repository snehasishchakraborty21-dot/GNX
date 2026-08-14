import { ServiceDivision, NetworkLocation, QualitativeProofPoint } from '../types';

export const SITE_CONFIG = {
  companyName: 'Gulf Northern X',
  tagline: 'Built to Keep America Moving',
  phone: '',
  email: '',
  headquarters: 'United States Regional Network',
  workingHours: 'Operations: Direct Dispatch Response',
  socialLinks: {}
};

export const PROOF_POINTS: QualitativeProofPoint[] = [
  {
    title: 'MULTIPLE CONNECTED SERVICES',
    description: 'Freight movement, equipment transfer, storage, tires, washouts, and repairs unified under one central operational network.',
    iconName: 'Network'
  },
  {
    title: 'CUSTOMER-FOCUSED SUPPORT',
    description: 'Direct communications, dedicated dispatch teams, and customized commercial vehicle service options designed for operational reliability.',
    iconName: 'ShieldCheck'
  },
  {
    title: 'BUILT FOR DEPENDABLE OPERATIONS',
    description: 'Strict maintenance standards, high-capacity equipment, and rigorous service protocols ensuring minimal downtime for your fleet.',
    iconName: 'Truck'
  }
];

export const SERVICE_DIVISIONS: ServiceDivision[] = [
  {
    id: 'xpress',
    title: 'XPRESS',
    badge: 'FREIGHT & TRANSPORTATION',
    tagline: 'Transportation and freight solutions built to move business forward.',
    shortPositioning: 'Over-the-road freight movement, temperature-controlled logistics, flatbed hauling, and flexible fleet leasing options.',
    heroHeadline: 'NATIONWIDE FREIGHT MOVEMENT & FLEET CAPACITY',
    description: 'Gulf Northern Xpress delivers dependable over-the-road freight transportation. Whether moving temperature-sensitive perishables, dry box goods, or oversized flatbed cargo, Xpress provides modern trailer equipment, skilled drivers, and flexible leasing services.',
    primaryColor: '#0B3F8C',
    accentColor: '#2CB51D',
    heroImage: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1600&q=80',
    iconName: 'Truck',
    categories: [
      {
        categoryName: 'Freight Services',
        items: ['Refrigerated Freight', 'Dry-Box Freight', 'Flatbed Freight']
      },
      {
        categoryName: 'Fleet & Leasing',
        items: ['Brokerage Logistics', 'Truck Leasing', 'Trailer Rental']
      }
    ],
    detailedServices: [
      {
        id: 'refrigerated',
        name: 'Refrigerated Freight (Reefer)',
        shortDescription: 'Precision temperature-controlled transport for food, pharmaceutical, and climate-critical cargo.',
        fullDescription: 'Our Xpress refrigerated fleet uses multi-temp cooling units and real-time remote thermal monitoring to protect perishable goods from origin to destination across the United States.',
        iconName: 'ThermometerSnowflake',
        features: ['Real-time continuous temperature logging', 'Multi-zone climate compartments', 'Pre-cooled trailer staging', 'FSMA food safety compliant'],
        imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
        category: 'freight'
      },
      {
        id: 'dry-box',
        name: 'Dry-Box Freight',
        shortDescription: 'High-volume dry van shipping for manufactured goods, retail products, and industrial materials.',
        fullDescription: 'Equipped with clean 53ft dry van trailers featuring air-ride suspension and logistics tracks, Xpress dry-box shipping ensures safe, damage-free transit for palleted and bulk goods.',
        iconName: 'Package',
        features: ['Air-ride suspension trailers', 'Track & trace visibility', 'High-cube 53-foot dry vans', 'Dedicated linehaul & drop-and-hook'],
        imageUrl: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1200&q=80',
        category: 'freight'
      },
      {
        id: 'flatbed',
        name: 'Flatbed Freight',
        shortDescription: 'Heavy-duty open deck transportation for construction, machinery, lumber, and steel cargo.',
        fullDescription: 'From step decks to standard flatbeds, our specialized hauling division manages heavy, bulky, or side-loaded freight with complete securement and permit compliance.',
        iconName: 'Layers',
        features: ['Standard & step-deck configurations', 'Full tarping and dunnage options', 'Oversize load permitting assistance', 'Heavy machinery securement experts'],
        imageUrl: 'https://images.unsplash.com/photo-1508873696983-2df515122519?auto=format&fit=crop&w=1200&q=80',
        category: 'freight'
      },
      {
        id: 'brokerage',
        name: 'Freight Brokerage',
        shortDescription: 'Scalable third-party capacity matching cargo with vetted carrier networks nationwide.',
        fullDescription: 'When demand surges or specialized routes open up, our brokerage team connects your shipments with reliable, fully vetted carrier partners under Gulf Northern X quality oversight.',
        iconName: 'TrendingUp',
        features: ['24/7 coverage dispatch', 'Strict carrier safety auditing', 'Spot market & contract pricing', 'End-to-end milestone updates'],
        imageUrl: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80',
        category: 'freight'
      },
      {
        id: 'truck-lease',
        name: 'Truck Leasing',
        shortDescription: 'Modern, well-maintained commercial tractors available for long-term fleet expansion.',
        fullDescription: 'Expand fleet capacity without heavy upfront capital. Our truck leasing programs offer late-model Class 8 tractors backed by comprehensive preventive maintenance plans.',
        iconName: 'KeyRound',
        features: ['Late-model Class 8 power units', 'Custom mileage & term plans', 'Full preventive maintenance included', '24/7 roadside assistance coverage'],
        imageUrl: 'https://images.unsplash.com/photo-1591768793355-74d04bb6608f?auto=format&fit=crop&w=1200&q=80',
        category: 'freight'
      },
      {
        id: 'trailer-rent',
        name: 'Trailer Rental',
        shortDescription: 'Flexible rental options for dry van, reefer, and flatbed trailers on short or extended terms.',
        fullDescription: 'Solve seasonal demand spikes or storage needs with ready-to-roll trailers inspected and maintained to strict DOT standards.',
        iconName: 'Container',
        features: ['Reefer, dry van & flatbed trailers', 'Short-term or seasonal term flexibility', 'Pre-rental DOT safety check', 'On-site drop-off setup'],
        imageUrl: 'https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=1200&q=80',
        category: 'freight'
      }
    ]
  },
  {
    id: 'xfers',
    title: 'XFERS',
    badge: 'TRANSFERS & STORAGE',
    tagline: 'Transfer, setup, pump and storage-related support for demanding operations.',
    shortPositioning: 'Specialized equipment staging, industrial liquid & cargo transfer, escort services, and climate-managed warehouse storage.',
    heroHeadline: 'INDUSTRIAL TRANSFERS, EQUIPMENT STAGING & STORAGE',
    description: 'Gulf Northern Xfers specializes in complex equipment positioning, industrial liquid transfer setups, heavy equipment escorts, and secure warehousing. From cold storage staging to field pull-outs, Xfers handles heavy technical execution.',
    primaryColor: '#087F5B',
    accentColor: '#2CB51D',
    heroImage: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=80',
    iconName: 'ArrowLeftRight',
    categories: [
      {
        categoryName: 'Transfer & Field Operations',
        items: ['Pull-Outs', 'Setups', 'Pumps', 'Boats']
      },
      {
        categoryName: 'Storage & Escorts',
        items: ['Escort Services', 'Cold Storage', 'Dry Storage']
      }
    ],
    detailedServices: [
      {
        id: 'pull-outs',
        name: 'Field Pull-Outs & Relocation',
        shortDescription: 'Heavy equipment extraction, trailer pull-outs, and difficult site relocations.',
        fullDescription: 'Our experienced Xfers crew safely extracts heavy industrial machinery, stationary trailers, and specialized units from tight or challenging job site terrain.',
        iconName: 'MoveUpRight',
        features: ['Off-road recovery power units', 'Job-site site access evaluations', 'Heavy rigging & winch setups', 'Rapid response field units'],
        imageUrl: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
        category: 'transfers'
      },
      {
        id: 'setups',
        name: 'Site Setups & Rig-Ins',
        shortDescription: 'Precision positioning and leveling of mobile offices, trailers, and heavy machinery on-site.',
        fullDescription: 'From commercial site trailers to industrial pump manifolds, Xfers provides complete turn-key setup, anchoring, and alignment at customer locations.',
        iconName: 'Wrench',
        features: ['Precision leveling & cribbing', 'Anchoring & safety tethering', 'Utility & hose connection setup', 'Site safety compliance certification'],
        imageUrl: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=1200&q=80',
        category: 'transfers'
      },
      {
        id: 'pumps',
        name: 'Industrial Pump Operations',
        shortDescription: 'Fluid transfer setups, high-capacity pumping systems, and liquid cargo movement.',
        fullDescription: 'Specialized high-flow pump equipment and trained technicians for transferring liquids, slurries, and industrial fluids between transport vessels or tanks.',
        iconName: 'Activity',
        features: ['High-CFM liquid transfer pumps', 'Spill containment protocol', 'Certified chemical/fluid handlers', 'Continuous pressure monitoring'],
        imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
        category: 'transfers'
      },
      {
        id: 'cold-storage',
        name: 'Cold Storage Warehousing',
        shortDescription: 'Temperature-monitored warehouse space for frozen, chilled, and seasonal goods.',
        fullDescription: 'High-density cold storage facility space equipped with climate automation, backup generators, and palletized rack management for food and chemical producers.',
        iconName: 'Snowflake',
        features: ['Multi-zone temperature settings (-15°F to 45°F)', 'Pallet tracking & inventory software', 'Secure dock loading bays', '24/7 security monitoring'],
        imageUrl: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=1200&q=80',
        category: 'transfers'
      },
      {
        id: 'dry-storage',
        name: 'Dry Warehousing & Staging',
        shortDescription: 'Secure indoor dry storage and cross-docking for commercial inventory and raw materials.',
        fullDescription: 'Clean, secure dry warehouse facilities with dedicated loading docks, forklift handling, and flexible short- or long-term pallet storage options.',
        iconName: 'Warehouse',
        features: ['High-ceiling warehouse bays', 'Cross-docking & transloading', 'Asset tracking & inventory reports', 'Gated perimeter & video surveillance'],
        imageUrl: 'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1200&q=80',
        category: 'transfers'
      },
      {
        id: 'escorts',
        name: 'Escort & Escort Support Services',
        shortDescription: 'Certified pilot cars and escort teams for oversize and superload transport clearance.',
        fullDescription: 'Route safety surveying, state permit coordination, and lead/follow pilot vehicles ensuring over-dimensional loads travel safely across highways.',
        iconName: 'ShieldAlert',
        features: ['Certified pilot vehicle operators', 'Route clearance & height pole checks', 'State DOT permit coordination', 'High-visibility safety equipment'],
        imageUrl: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80',
        category: 'transfers'
      }
    ]
  },
  {
    id: 'xtras',
    title: 'XTRAS',
    badge: 'TIRES, WASHOUTS & REPAIRS',
    tagline: 'Essential commercial vehicle and facility support in one convenient service division.',
    shortPositioning: 'Commercial truck tire sales & recycling, certified trailer washouts, mobile repair bays, and heavy duty battery replacement.',
    heroHeadline: 'COMMERCIAL TIRE SALES, TRAILER WASHOUTS & REPAIRS',
    description: 'Gulf Northern Xtras keeps commercial fleets compliant, safe, and ready for the highway. Offering commercial tires, environmentally compliant disposal, food-grade trailer washouts, and emergency truck repair services.',
    primaryColor: '#062B63',
    accentColor: '#2CB51D',
    heroImage: 'https://images.unsplash.com/photo-1578844251758-2f71da64c96f?auto=format&fit=crop&w=1600&q=80',
    iconName: 'Wrench',
    categories: [
      {
        categoryName: 'Tire Services',
        items: ['Commercial Tire Sales', 'Tire Disposal', 'Recycled Tires']
      },
      {
        categoryName: 'Facility & Maintenance',
        items: ['Trailer Washouts', 'Commercial Repairs', 'Heavy Duty Batteries']
      }
    ],
    detailedServices: [
      {
        id: 'tire-sales',
        name: 'Commercial Tire Sales & Mount',
        shortDescription: 'Premium steer, drive, and trailer tires from top commercial manufacturers.',
        fullDescription: 'Comprehensive inventory of heavy-duty truck tires engineered for mileage efficiency and durability. Includes professional high-speed balancing and rapid wheel installation.',
        iconName: 'Disc',
        features: ['Steer, drive & trailer positions', 'Major brand commercial inventory', 'Precision mounting & balancing', 'On-site service bay availability'],
        imageUrl: 'https://images.unsplash.com/photo-1578844251758-2f71da64c96f?auto=format&fit=crop&w=1200&q=80',
        category: 'commercial-support'
      },
      {
        id: 'trailer-washouts',
        name: 'Certified Trailer Washouts',
        shortDescription: 'FDA/FSMA compliant high-pressure hot water washouts and sanitization for reefer and dry van trailers.',
        fullDescription: 'State-of-the-art washout bays utilizing eco-friendly sanitizing solutions, high-pressure hot water, and water reclamation systems for food-grade cleanliness.',
        iconName: 'Droplets',
        features: ['Hot water high-pressure power wash', 'FSMA & food-grade sanitization certificates', 'Eco-friendly water filtration reclamation', 'Deodorization & express drying'],
        imageUrl: 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=1200&q=80',
        category: 'commercial-support'
      },
      {
        id: 'repairs',
        name: 'Commercial Truck & Trailer Repairs',
        shortDescription: 'Full-service diesel mechanic repair, trailer door fixing, brake systems, and roadside maintenance.',
        fullDescription: 'Our certified diesel technicians handle engine diagnostics, electrical repairs, brake replacements, air line fixes, and structural trailer maintenance.',
        iconName: 'Tool',
        features: ['Computerized engine diagnostics', 'Brake system & air line service', 'Trailer door & seal repair', 'Mobile roadside repair trucks'],
        imageUrl: 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=1200&q=80',
        category: 'commercial-support'
      },
      {
        id: 'tire-disposal',
        name: 'Eco-Friendly Tire Disposal',
        shortDescription: 'Certified environmental disposal and recycling programs for worn commercial casings.',
        fullDescription: 'Compliant scrap tire removal for transport fleets and service centers, adhering to state and EPA environmental disposal regulations.',
        iconName: 'Recycle',
        features: ['EPA compliant recycling chain', 'Certificate of proper disposal', 'Bulk scrap tire pickup', 'Zero-landfill processing goals'],
        imageUrl: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=1200&q=80',
        category: 'commercial-support'
      },
      {
        id: 'recycled-tires',
        name: 'Quality Retreads & Recycled Tires',
        shortDescription: 'Cost-effective retreaded tires tested for high safety and long casing life.',
        fullDescription: 'Premium retread tire options delivering up to 80% of new tire tread life at a fraction of the cost, audited for casing integrity.',
        iconName: 'RotateCcw',
        features: ['Rigorous shearographic casing inspection', 'Durable tread compound formulations', 'Drive & trailer tread patterns', 'Significant fleet cost savings'],
        imageUrl: 'https://images.unsplash.com/photo-1578844251758-2f71da64c96f?auto=format&fit=crop&w=1200&q=80',
        category: 'commercial-support'
      },
      {
        id: 'batteries',
        name: 'Heavy-Duty Batteries & Electrical',
        shortDescription: 'High-CCA commercial tractor batteries, alternators, and starter motor replacements.',
        fullDescription: 'Commercial-grade AGM and flooded batteries engineered to handle high vibration, severe climate conditions, and heavy APU electrical loads.',
        iconName: 'Zap',
        features: ['High Cold Cranking Amps (CCA)', 'Vibration-resistant AGM technology', 'Fast installation at service hubs', 'Full charging system diagnostic'],
        imageUrl: 'https://images.unsplash.com/photo-1558441719-23451ead3528?auto=format&fit=crop&w=1200&q=80',
        category: 'commercial-support'
      }
    ]
  }
];

export const NETWORK_LOCATIONS: NetworkLocation[] = [
  {
    id: 'loc-1',
    city: 'Atlanta',
    state: 'GA',
    coordinates: { x: 74, y: 64 },
    type: 'hub',
    address: 'Southeast Regional Terminal',
    servicesOffered: ['Xpress Freight', 'Xfers Cold Storage', 'Xtras Washouts & Tires']
  },
  {
    id: 'loc-2',
    city: 'Dallas-Fort Worth',
    state: 'TX',
    coordinates: { x: 50, y: 68 },
    type: 'hub',
    address: 'Southwest Freight & Transfer Hub',
    servicesOffered: ['Xpress Freight', 'Xfers Setups & Pullouts', 'Xtras Full Repairs']
  },
  {
    id: 'loc-3',
    city: 'Chicago',
    state: 'IL',
    coordinates: { x: 67, y: 38 },
    type: 'hub',
    address: 'Midwest Freight & Staging Logistics Center',
    servicesOffered: ['Xpress Reefer & Dry Van', 'Xfers Dry Warehousing', 'Xtras Tires & Washouts']
  },
  {
    id: 'loc-4',
    city: 'Houston',
    state: 'TX',
    coordinates: { x: 52, y: 78 },
    type: 'terminal',
    address: 'Gulf Coast Industrial Terminal',
    servicesOffered: ['Xfers Pumps & Fluid Transfers', 'Xpress Heavy Flatbed', 'Xtras Tire Disposal']
  },
  {
    id: 'loc-5',
    city: 'Memphis',
    state: 'TN',
    coordinates: { x: 64, y: 56 },
    type: 'washout',
    address: 'Mid-South Washout & Staging Facility',
    servicesOffered: ['Xtras FSMA Washouts', 'Xpress Drop & Hook', 'Xtras Tire Sales']
  },
  {
    id: 'loc-6',
    city: 'Columbus',
    state: 'OH',
    coordinates: { x: 73, y: 42 },
    type: 'terminal',
    address: 'Great Lakes Logistics Terminal',
    servicesOffered: ['Xpress Linehaul', 'Xtras Diesel Mechanics', 'Xfers Storage']
  },
  {
    id: 'loc-7',
    city: 'Denver',
    state: 'CO',
    coordinates: { x: 38, y: 46 },
    type: 'storage',
    address: 'Mountain Region Transfer & Staging Yard',
    servicesOffered: ['Xfers Pull-Outs & Escorts', 'Xpress Flatbed', 'Xtras Batteries']
  }
];

export const FAQ_ITEMS = [
  {
    q: 'How do the three divisions (Xpress, Xfers, Xtras) work together?',
    a: 'Gulf Northern X provides a single-point operational network. Customers can book freight transport with Xpress, utilize equipment transfers or cold storage with Xfers, and maintain their equipment with Xtras washouts and tires through a unified communication desk.'
  },
  {
    q: 'Can I request custom quotes for multiple service divisions simultaneously?',
    a: 'Yes. Our central service desk allows you to select combined services—for example, scheduling a food-grade trailer washout (Xtras) before picking up a refrigerated load (Xpress).'
  },
  {
    q: 'Are your trailer washout bays FDA and FSMA compliant?',
    a: 'Absolutely. Xtras washout facilities use high-pressure hot water sanitization and eco-friendly cleaning agents, issuing official compliance certificates for every washed unit.'
  },
  {
    q: 'What regions do Gulf Northern X services cover?',
    a: 'We operate across the contiguous United States with primary regional logistics terminals in the Southeast, Midwest, Gulf Coast, and Southwest.'
  }
];
