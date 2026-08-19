import { Service, PortfolioItem, HeroSlide, FieldDiary } from './types';

export const SERVICES: Service[] = [
  {
    id: 'construction',
    title: 'Construction Works',
    icon: 'HardHat',
    desc: 'Advanced architectural and structural development for premium residential & commercial complexes.',
    techSpecs: ['Reinforced concrete works', 'Full site grading & drainage', 'Interactive blueprints', 'Sustainable raw materials'],
    img: 'assets/img/st7Images/Murambi1.jpg'
  },
  {
    id: 'surveillance',
    title: 'AI Surveillance & IP Cameras',
    icon: 'ShieldCheck',
    desc: 'Professional security solutions integrating AI-assisted IP camera networks and reliable motion sensors.',
    techSpecs: ['4K high-definition sensors', 'Remote mobile control access', 'Secure firewall layers', 'Active motion notification alerts'],
    img: 'assets/img/st7Images/st71.jpg'
  },
  {
    id: 'electrical',
    title: 'Grid & Electrical Installations',
    icon: 'Plug',
    desc: 'Expert low-to-medium voltage installations, smart distribution panels, and preventive utility maintenance.',
    techSpecs: ['Safe grid power balancing', 'Premium copper cabling', 'Certified system surge breakers', 'Bespoke cabinet terminations'],
    img: 'assets/img/st7Images/My project-1.jpg'
  },
  {
    id: 'solar',
    title: 'Clean Solar Modules',
    icon: 'Sun',
    desc: 'Self-sustaining solar module integration paired with high-efficiency energy cells to reduce utility bills.',
    techSpecs: ['Premium monocrystalline panels', 'Smart MPPT clean controllers', 'Advanced lithium battery backup', 'Full automatic power transfer'],
    img: 'assets/img/st7Images/solar_light.jpg'
  },
  {
    id: 'networking',
    title: 'IT & Fiber Networking',
    icon: 'Network',
    desc: 'Integrated office LAN setups, premium fiber slicing, secure rack configurations, and robust firewalls.',
    techSpecs: ['High-speed CAT6 termination', 'Rack routing architectures', 'Secure virtual networks (VLAN)', 'Redundant local backup servers'],
    img: 'assets/img/st7Images/gicumbi_district2.jpg'
  },
  {
    id: 'fire',
    title: 'Fire & Alarm Protection',
    icon: 'Flame',
    desc: 'Intelligent multi-sensor alarm systems mapped to clear alarm panels for optimal safety standards compliance.',
    techSpecs: ['Advanced smoke detectors', 'Centrally monitored panels', 'Emergency escape path indicators', 'Automated safe cutoff lines'],
    img: 'assets/img/st7Images/st72.jpg'
  }
];

export const PORTFOLIO: PortfolioItem[] = [
  {
    title: 'Turkish Embassy Project',
    category: 'completed',
    type: 'Electrical Grid Installation',
    scope: 'Comprehensive low & medium voltage infrastructure deployment.',
    partner: 'Partner: Eroni Ltd',
    img: 'assets/img/st7Images/turkish_embassy.jpg',
    completion: 100,
    rating: 'Eco: Highly Efficient'
  },
  {
    title: 'Magashi Luxury Camp',
    category: 'completed',
    type: 'Infrastructure Modernization',
    scope: 'Kitchen facilities upgrade and sustainable plumbing grids inside Akagera National Park.',
    partner: 'Partner: Star 7 Team',
    img: 'assets/img/st7Images/magashi_camp.jpg',
    completion: 100,
    rating: 'Eco: Pure Clean'
  },
  {
    title: 'IPRC Tumba Campus',
    category: 'completed',
    type: 'Power Distribution Systems',
    scope: 'Academic facility electrical networking and lightning protection integration.',
    partner: 'Partner: Reserve Force',
    img: 'assets/img/st7Images/iprc_tumba.jpg',
    completion: 100,
    rating: 'Eco: Grade A Class'
  },
  {
    title: 'Gicumbi District Headquarters',
    category: 'completed',
    type: 'Electrical & Fire Safety Systems',
    scope: 'Modern safety panels, security cameras, and electrical upgrades.',
    partner: 'Partner: Reserve Force',
    img: 'assets/img/st7Images/gicumbi_district1.jpg',
    completion: 100,
    rating: 'Eco: Outstanding'
  },
  {
    title: 'Kabeza Housing Estate',
    category: 'completed',
    type: 'Power Line Grid Development',
    scope: 'Strategic high-performance electrical power supply lines across the community.',
    partner: 'Partner: Reserve Force',
    img: 'assets/img/st7Images/kabeza_resettlement.jpg',
    completion: 100,
    rating: 'Eco: Green Path'
  },
  {
    title: 'Modern Smart Villa',
    category: 'ongoing',
    type: 'Net-Zero Solar & HVAC Automation',
    scope: 'Smart residential house powered by a 15kW off-grid solar installation and premium CCTV protection.',
    partner: 'Partner: Star 7 Team',
    img: 'assets/img/st7Images/architecture1.png',
    completion: 80,
    rating: 'Eco: Solar Autonomy'
  }
];

export const HERO_SLIDES: HeroSlide[] = [
  {
    title: 'Turkish Embassy',
    desc: 'Low and medium voltage grid configuration and primary distribution systems.',
    img: 'assets/img/st7Images/turkish_embassy.jpg',
    metric: 'Grid Secure: 400V Balanced',
    loc: 'Kigali, Rwanda'
  },
  {
    title: 'Magashi Luxury Camp',
    desc: 'Advanced modern infrastructure setups, solar water heating and wilderness plumbing.',
    img: 'assets/img/st7Images/magashi_camp.jpg',
    metric: 'Eco Grade: Net-Zero Rated',
    loc: 'Akagera National Park'
  },
  {
    title: 'IPRC Tumba Campus',
    desc: 'Surge lightning protection and main substation grounding frameworks.',
    img: 'assets/img/st7Images/iprc_tumba.jpg',
    metric: 'Shield Capacity: 1.2kVA protection',
    loc: 'Northern Province'
  },
  {
    title: 'Gicumbi District HQ',
    desc: 'Addressable central fire defense networks and multi-point smart security arrays.',
    img: 'assets/img/st7Images/gicumbi_district1.jpg',
    metric: 'Security Nodes: 48 Live Feeds',
    loc: 'Northern Region'
  }
];

export const FIELD_DIARIES: FieldDiary[] = [
  {
    title: 'Murambi Power Grid Base',
    desc: 'Main foundations and structural grounding framework for Murambi substation project.',
    img: 'assets/img/st7Images/Murambi1.jpg',
    category: 'Power Grid',
    metric: 'Site Node: #011'
  },
  {
    title: 'Kigali High-Rise Cabling',
    desc: 'Expert technician routing premium fire-resistant copper cabling and low-voltage busbars.',
    img: 'assets/img/st7Images/st71.jpg',
    category: 'Electrical Wiring',
    metric: 'Load Rated: 600A'
  },
  {
    title: 'Gicumbi Main Servers',
    desc: 'High-density fiber optic splicing, rack management and enterprise firewalls at District HQ.',
    img: 'assets/img/st7Images/gicumbi_district2.jpg',
    category: 'Fiber / IT',
    metric: 'Speed: 10Gbps Trunkline'
  },
  {
    title: 'Solar Highway Luminescence',
    desc: 'Bespoke off-grid monocrystalline solar poles with automated light-sensing smart microcontrollers.',
    img: 'assets/img/st7Images/solar_light.jpg',
    category: 'Solar Systems',
    metric: 'Autonomy: 48-Hour Backup'
  },
  {
    title: 'Structural Steel Assembly',
    desc: 'Heavy-duty steel reinforcement framework and site drainage calibration for industrial builds.',
    img: 'assets/img/st7Images/Murambi2.jpg',
    category: 'Civil Works',
    metric: 'Strength: ISO C35 Concrete'
  },
  {
    title: 'Grounding Bar Termination',
    desc: 'Close-up of precise brass grounding bar terminations and lightning protection conductors.',
    img: 'assets/img/st7Images/st72.jpg',
    category: 'Safety Engineering',
    metric: 'Resistance: < 1.0 Ohm'
  },
  {
    title: 'Muhira Modern Resettlement',
    desc: 'Pristine residential community electric grids and streetlights designed for sustainable growth.',
    img: 'assets/img/st7Images/muhira_resettlement_project.jpg',
    category: 'Infrastructure',
    metric: 'Capacity: 120 Houses'
  },
  {
    title: 'High-Voltage Transformer Station',
    desc: 'Rigorous safety calibration of a high-capacity community transformer hub in Kigali.',
    img: 'assets/img/st7Images/IMG-20230314-WA0026.jpg',
    category: 'Power Grid',
    metric: 'Grid Capacity: 15kV/400V'
  }
];
