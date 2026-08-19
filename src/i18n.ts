export type Language = 'en' | 'rw';

export interface TranslationDict {
  // Navigation
  sysInit: string;
  companySpec: string;
  ecoServices: string;
  realizedNodes: string;
  blueprintLab: string;
  commLine: string;
  systemStable: string;

  // Header & Footer
  latency: string;
  initBlueprint: string;
  syncing: string;
  decadalExcellence: string;
  footerRights: string;

  // Hero Section
  decadePrecision: string;
  techSubtitle: string;
  heroDesc: string;
  exploreArchive: string;
  runSimulator: string;
  completedGrid: string;
  completedGridDesc: string;
  activeContracts: string;
  activeContractsDesc: string;
  satisfaction: string;
  satisfactionDesc: string;
  yearsActiveLabel: string;
  cleanWattsLabel: string;
  safeDeliveryLabel: string;

  // About Section
  aboutTitle: string;
  aboutBadge: string;
  aboutDesc: string;
  pillar1Title: string;
  pillar1Desc: string;
  pillar2Title: string;
  pillar2Desc: string;
  pillar3Title: string;
  pillar3Desc: string;
  fieldDiariesTitle: string;
  fieldDiariesDesc: string;
  clickEnlarge: string;

  // Services Section
  servicesBadge: string;
  servicesTitle: string;
  servicesDesc: string;
  lensLabel: string;
  techSpecs: string;
  safetyRating: string;
  warranty: string;
  constructSchematic: string;

  // Portfolio Section
  portfolioBadge: string;
  portfolioTitle: string;
  portfolioDesc: string;
  all: string;
  completed: string;
  ongoing: string;
  partner: string;
  ecoRating: string;

  // Estimator Section
  estimatorBadge: string;
  estimatorTitle: string;
  estimatorDesc: string;
  variablesTitle: string;
  classLabel: string;
  residentialTitle: string;
  residentialDesc: string;
  commercialTitle: string;
  commercialDesc: string;
  solarLabel: string;
  solarInput: string;
  solarOff: string;
  solarAvg: string;
  solarEnt: string;
  cctvLabel: string;
  cctvNodes: string;
  cctvFull: string;
  cctvStrict: string;
  fireLabel: string;
  fireDesc: string;
  calculatorNote: string;

  // Estimator Results
  calculatedSpecs: string;
  classOutput: string;
  solarGridOutput: string;
  cctvNodesOutput: string;
  fireShieldOutput: string;
  carbonOffsetTitle: string;
  carbonOffsetDesc: string;
  hardwareCost: string;
  engineeringCost: string;
  testingCost: string;
  estimatedSum: string;
  lockBlueprintBtn: string;

  // Contact Section
  contactBadge: string;
  contactTitle: string;
  contactDesc: string;
  officeCoords: string;
  opsZone: string;
  opsZoneDesc: string;
  fullName: string;
  emailAddress: string;
  subject: string;
  message: string;
  messagePlaceholder: string;
  submitMessage: string;
  submitting: string;
  successMsg: string;
  errorMsg: string;
  addressLabel: string;
  phoneLabel: string;
  emailLabel: string;
}

export const translations: Record<Language, TranslationDict> = {
  en: {
    sysInit: "System Init",
    companySpec: "Company Spec",
    ecoServices: "Eco Services",
    realizedNodes: "Realized Nodes",
    blueprintLab: "Blueprint Lab",
    commLine: "Comm Line",
    systemStable: "SYSTEM STABLE",

    latency: "Latency",
    initBlueprint: "INITIALIZE BLUEPRINT",
    syncing: "SYNCING...",
    decadalExcellence: "Decadal excellence. Registered contractor Kigali, Rwanda.",
    footerRights: "Star 7 Technology Ltd. Built with high-contrast Neo-Futuristic architecture.",

    decadePrecision: "A Decade of Precision Engineering / Rwanda",
    techSubtitle: "ELECTRICAL & CIVIL UTILITIES",
    heroDesc: "Star 7 Technology is a certified general contractor executing complex power line distributions, solar integrations, industrial HVAC automation, civil structural works, and AI-enabled IP surveillance networks across East Africa.",
    exploreArchive: "EXPLORE PHOTO ARCHIVE",
    runSimulator: "RUN BLUEPRINT SIMULATOR",
    completedGrid: "24+ Completed Grids",
    completedGridDesc: "High-voltage distribution networks",
    activeContracts: "100% Active Contracts",
    activeContractsDesc: "Corporate/institutional compliance",
    satisfaction: "100% Standard Met",
    satisfactionDesc: "Zero safety incidents registered",
    yearsActiveLabel: "Years Active",
    cleanWattsLabel: "Clean Watts",
    safeDeliveryLabel: "Safe Delivery",

    aboutTitle: "THE STAR 7 MATRIX",
    aboutBadge: "01 // VISUAL FIELD DIARIES & CAPABILITIES",
    aboutDesc: "We engineer resilient utilities designed to support high-density industrial and residential clusters, blending raw material safety with high-efficiency energy cells.",
    pillar1Title: "Aesthetic Rigor",
    pillar1Desc: "Custom-balanced system cabinets, physical distribution grids, and flawless line structures.",
    pillar2Title: "Absolute Standard",
    pillar2Desc: "Certified for rigorous institutional parameters, public safety regulations, and embassy-level security protocols.",
    pillar3Title: "Green Autonomy",
    pillar3Desc: "Leading-edge monocrystalline solar configurations and low-resistance copper grounding loops.",
    fieldDiariesTitle: "HIGH-DENSITY FIELD DIARIES",
    fieldDiariesDesc: "Real, unmodified snapshots capturing active works, fiber connections, safety terminations, and substation construction across Rwanda.",
    clickEnlarge: "Click to enlarge site photo",

    servicesBadge: "02 // SYSTEM UTILITIES & CLIENT SPECIALIZATIONS",
    servicesTitle: "ECO-ENGINEERING SUITE",
    servicesDesc: "Interactive system specs. Select any utility terminal on the left to inspect its real-world physical spec, safety rating, and installation blueprint.",
    lensLabel: "Interactive Service Lens",
    techSpecs: "Core Tech Specs",
    safetyRating: "Safety Rating",
    warranty: "System SLA Warranty",
    constructSchematic: "CONSTRUCT SCHEMATIC",

    portfolioBadge: "03 // PERFORMANCE INDEX & NODES",
    portfolioTitle: "PROVEN WORK SPAN",
    portfolioDesc: "We execute our operations with mathematical precision, delivering bulletproof industrial installations across high-profile institutional clients.",
    all: "ALL UTILITY SECTORS",
    completed: "COMPLETED SITES",
    ongoing: "ONGOING MATRIX",
    partner: "Partner",
    ecoRating: "Eco Rating",

    estimatorBadge: "04 // CONFIGURATOR",
    estimatorTitle: "BLUEPRINT SIMULATOR",
    estimatorDesc: "Configure solar components, security sensors, and structural complexity targets to run an instantaneous installation cost simulation.",
    variablesTitle: "Adjust Engineering Variables",
    classLabel: "1. Property Complex Class",
    residentialTitle: "Residential",
    residentialDesc: "Private villa/estate grids",
    commercialTitle: "Commercial",
    commercialDesc: "Heavy duty corporate blocks",
    solarLabel: "2. Photovoltaic Capacity (Solar)",
    solarInput: "Input",
    solarOff: "0 kW (Off)",
    solarAvg: "15 kW (Average Load)",
    solarEnt: "30 kW (Enterprise)",
    cctvLabel: "3. Camera Surveillance Count",
    cctvNodes: "CCTV Nodes",
    cctvFull: "32 Nodes (Full Coverage)",
    cctvStrict: "64 Nodes (Strict Matrix)",
    fireLabel: "Add Integrated Fire Detection Panel",
    fireDesc: "Addressable smart sensor units",
    calculatorNote: "*Browser calculation model. Values approximate average materials & qualified labor costs in Kigali, Rwanda.",

    calculatedSpecs: "Calculated Specifications",
    classOutput: "CLASS",
    solarGridOutput: "SOLAR GRID",
    cctvNodesOutput: "CCTV NODES",
    fireShieldOutput: "FIRE SHIELD",
    carbonOffsetTitle: "Carbon Offset Coefficient",
    carbonOffsetDesc: "Metric Tons saved / year",
    hardwareCost: "S7 High-Grade Hardware",
    engineeringCost: "Field Splicing & Assembly",
    testingCost: "Calibration & Safety Audit",
    estimatedSum: "ESTIMATED SUM",
    lockBlueprintBtn: "Lock in blueprint & submit query",

    contactBadge: "05 // DIRECT SECURE COMM LINE",
    contactTitle: "SUBMIT PARAMETERS",
    contactDesc: "Submit your pre-loaded configuration or write directly to our central operations team. We reply with formal RFPs within 24 hours.",
    officeCoords: "Office Coordinates",
    opsZone: "Operations Zone",
    opsZoneDesc: "Licensed & insured across Rwanda",
    fullName: "Full Name",
    emailAddress: "Email Address",
    subject: "Engineering Subject",
    message: "Blueprint Message / Scope of Work",
    messagePlaceholder: "Outline your engineering scope, timeline, and parameters here...",
    submitMessage: "TRANSMIT DATA TO STAR 7",
    submitting: "TRANSMITTING...",
    successMsg: "DATA TRANSMITTED: Blueprint has been locked and operations room has been notified. We will reach back shortly.",
    errorMsg: "TRANSMISSION DELAY: There was a connection bottleneck. Please retry or email directly.",
    addressLabel: "Headquarters",
    phoneLabel: "Phone",
    emailLabel: "Secured Mail"
  },
  rw: {
    sysInit: "Gutangira",
    companySpec: "Ibikorwa byacu",
    ecoServices: "Serivisi",
    realizedNodes: "Imyandiko y'Ibikozwe",
    blueprintLab: "Kubara Igiciro",
    commLine: "Twandikire",
    systemStable: "SISITEMU_IKOMEYE",

    latency: "Umuvuduko",
    initBlueprint: "KUBARA IGISHUSHANYO",
    syncing: "GUHUZA IMIRANDANYARAZI...",
    decadalExcellence: "Imyaka icumi y'ubuhanga buhanitse. Rwiyemezamirimo wemewe i Kigali, mu Rwanda.",
    footerRights: "Star 7 Technology Ltd. Yubatswe n'ubuhanga buhanitse bwa Kijyambere.",

    decadePrecision: "Imyaka Icumi y'Ubuhanga n'Ubupimantare Buhambaye / Rwanda",
    techSubtitle: "INGUFU Z'AMASHANYARAZI N'INYUBAKO Z'IKIDAGE",
    heroDesc: "Star 7 Technology ni sosiyete yubaka kandi igashyira mu bikorwa imiyoboro y'amashanyarazi akomeye, ingufu z'imirasire y'izuba, sisitemu z'ubushyuhe n'ubukonje bwa mudasobwa mu nganda, inyubako n'amazi, ndetse n'imiyoboro ya kamera z'umutekano zifashisha ubuhanga bwa AI muri Afurika y'Iburasirazuba.",
    exploreArchive: "REBA AMAFOTO Y'IBIKORWA",
    runSimulator: "KUBARA IGISHUSHANYO CYAWE",
    completedGrid: "Miyoboro 24+ Yuzuye",
    completedGridDesc: "Miyoboro y'amashanyarazi akomeye",
    activeContracts: "100% Amasezerano Atunganye",
    activeContractsDesc: "Kubahiriza ibisabwa n'ibigo n'inzego",
    satisfaction: "100% Ubuziranenge",
    satisfactionDesc: "Nta mpanuka y'umutekano yigeze ibaho",
    yearsActiveLabel: "Imyaka Dukorera",
    cleanWattsLabel: "Ingufu Dusarura",
    safeDeliveryLabel: "Umutekano Usesuye",

    aboutTitle: "INYURABWENGE YA STAR 7",
    aboutBadge: "01 // AMAFOTO Y'IBIBANZA N'UBUHANGA BWACU",
    aboutDesc: "Tugena kandi tukubaka ibikorwaremezo bikomeye bifasha inyubako z'inganda n'iz'abaturage, tuguza ubuziranenge bw'ibikoresho n'imirasire y'izuba ikora neza.",
    pillar1Title: "Ubuhanga buhanitse",
    pillar1Desc: "Agasanduku k'amashanyarazi gapimye neza, imiyoboro ishinze neza, n'imirandanyarazi itagira inenge.",
    pillar2Title: "Kubahiriza Ibisabwa",
    pillar2Desc: "Twemejwe n'inzego zikomeye, amategeko y'umutekano rusange, n'amabwiriza y'umutekano yo ku rwego rwa za Ambasade.",
    pillar3Title: "Kwirinda Inkongi no Kwiha Ingufu",
    pillar3Desc: "Gukoresha imirasire y'izuba ikora neza n'imiyoboro y'amashanyarazi ishyize ku butaka ifite umuvuduko mwiza.",
    fieldDiariesTitle: "AMAFOTO Y'IBIKORWA BYACU",
    fieldDiariesDesc: "Amafoto mazima, atagize icyo ahindurwaho agaragaza imirimo, guhuza imiyoboro ya fiber, ibikorwa by'umutekano, n'iyubakwa rya kano sitasiyo mu Rwanda.",
    clickEnlarge: "Kanda kugira ngo ubengeze ifoto",

    servicesBadge: "02 // IMIRIMO KANDI ICYO ABO TUFASHA BAKENEYE",
    servicesTitle: "INYURABWENGE Y'IMIRIMO YACU",
    servicesDesc: "Imiterere y'imirimo. Hitamo serivisi iburyo kugira ngo urebe ibisobanuro byayo, umutekano wayo, n'igishushanyo mbonera cyayo.",
    lensLabel: "Imbonerahamwe y'Ibikoresho",
    techSpecs: "Ibisobanuro by'Ibyuma",
    safetyRating: "Umutekano",
    warranty: "Gahunda y'Ingarantii (SLA)",
    constructSchematic: "KUREBA IGISHUSHANYO MBONERA",

    portfolioBadge: "03 // IMYANDIKO N'IBIKORWA BYACU NYABYO",
    portfolioTitle: "IMISHINGA YACU YUZUYE KANDI IKORWA",
    portfolioDesc: "Dukora imirimo yacu ku gipimo cya mbuga n'imibare mbonera, tuguza imishinga ikomeye ku bafatanyabikorwa n'ibigo bikomeye.",
    all: "SERIVISI ZOSE",
    completed: "IMISHINGA YUZUYE",
    ongoing: "IMISHINGA IKORWA",
    partner: "Uwo twafatanyije",
    ecoRating: "Gupima ibidukikije",

    estimatorBadge: "04 // KUBARA IGICIRO",
    estimatorTitle: "KUBARA IGISHUSHANYO CYAWE",
    estimatorDesc: "Gena ingufu z'imirasire y'izuba, kamera z'umutekano, n'ubwoko bw'inyubako kugira ngo uhite ubona igiciro kigereranije cy'ubwubatsi.",
    variablesTitle: "Gena Ibyiciro by'Imirimo",
    classLabel: "1. Ubwoko bw'Inyubako",
    residentialTitle: "Inzu yo kubamo",
    residentialDesc: "Inzu z'abantu ku giti cyabo",
    commercialTitle: "Inyubako y'Ubucuruzi",
    commercialDesc: "Inyubako nini z'ibigo",
    solarLabel: "2. Ingufu z'Imirasire y'Izuba",
    solarInput: "Imirasire",
    solarOff: "0 kW (Nta yihari)",
    solarAvg: "15 kW (Iringaniye)",
    solarEnt: "30 kW (Inini y'Inganda)",
    cctvLabel: "3. Umubare wa Kamera z'Umutekano",
    cctvNodes: "Kamera",
    cctvFull: "32 Kamera (Ahantu hose)",
    cctvStrict: "64 Kamera (Umutekano uhambaye)",
    fireLabel: "Shyiraho Ibyuma Byerekana Inkongi y'Umuriro",
    fireDesc: "Ibyuma bigezweho by'inzogera z'inkongi",
    calculatorNote: "*Ubu buryo bubarirwa kuri mushakisha (browser). Ibiciro bigeranywa hashingiwe ku bikoresho n'amaboko y'abakozi b'inzobere i Kigali, mu Rwanda.",

    calculatedSpecs: "Ibisobanuro Bikozwe",
    classOutput: "UBWOKO",
    solarGridOutput: "IMIRASIRE Y'IZUBA",
    cctvNodesOutput: "KAMERA",
    fireShieldOutput: "KWIRINDA INKONGI",
    carbonOffsetTitle: "Igipimo cy'Inzika ya CO2 Igabanuka",
    carbonOffsetDesc: "Toni za CO2 zizigamwa / mwaka",
    hardwareCost: "Ibyuma n'Ibikoresho bya S7",
    engineeringCost: "Gushyiraho n'Ibyuma ku Kibanza",
    testingCost: "Gupima n'Isuzumwa ry'Umutekano",
    estimatedSum: "IGICIRO KIGERERANYO CYOSE",
    lockBlueprintBtn: "Emeza igishushanyo & ohereza",

    contactBadge: "05 // INTERANDANZA Y'UMUTEKANO DIRECT",
    contactTitle: "OHEREZA IBISABWA",
    contactDesc: "Ohereza igishushanyo wabaze cyangwa utwandikire amakuru yawe. Tukubaza amakuru arambuye mu masaha 24.",
    officeCoords: "Icyicaro Gikuru",
    opsZone: "Agace Dukorera",
    opsZoneDesc: "Tufite uruhushya n'ubwishingizi mu Rwanda hose",
    fullName: "Amazina Yose",
    emailAddress: "Imeli Yawe",
    subject: "Umutwe w'Ubutumwa",
    message: "Ubutumwa cyangwa Ibisobanuro by'Imirimo",
    messagePlaceholder: "Andika hano ibijyanye n'umushinga wawe, igihe wifuza ko urangirira, n'ibindi...",
    submitMessage: "OHEREZA AMAKURU KURI STAR 7",
    submitting: "BIRAKURIKIRANWA...",
    successMsg: "AMAKURU YOHEREJWE NEZA: Igishushanyo mbonera cyawe cyakiriwe. Tugiye kugusubiza mu kanya.",
    errorMsg: "NTIBYAKUNZE KUGENDA NEZA: Habayeho ikibazo cy'itumanaho. Ongera ugerageze cyangwa utwandikire kuri imeli.",
    addressLabel: "Kigali, Rwanda",
    phoneLabel: "Telefone",
    emailLabel: "Imeli y'Akazi"
  }
};

// Localized database for lists
export const localizedServices: Record<Language, Array<{ id: string; title: string; desc: string; techSpecs: string[] }>> = {
  en: [
    {
      id: 'construction',
      title: 'Construction Works',
      desc: 'Advanced architectural and structural development for premium residential & commercial complexes.',
      techSpecs: ['Reinforced concrete works', 'Full site grading & drainage', 'Interactive blueprints', 'Sustainable raw materials'],
    },
    {
      id: 'surveillance',
      title: 'AI Surveillance & IP Cameras',
      desc: 'Professional security solutions integrating AI-assisted IP camera networks and reliable motion sensors.',
      techSpecs: ['4K high-definition sensors', 'Remote mobile control access', 'Secure firewall layers', 'Active motion notification alerts'],
    },
    {
      id: 'electrical',
      title: 'Grid & Electrical Installations',
      desc: 'Expert low-to-medium voltage installations, smart distribution panels, and preventive utility maintenance.',
      techSpecs: ['Safe grid power balancing', 'Premium copper cabling', 'Certified system surge breakers', 'Bespoke cabinet terminations'],
    },
    {
      id: 'solar',
      title: 'Clean Solar Modules',
      desc: 'Self-sustaining solar module integration paired with high-efficiency energy cells to reduce utility bills.',
      techSpecs: ['Premium monocrystalline panels', 'Smart MPPT clean controllers', 'Advanced lithium battery backup', 'Full automatic power transfer'],
    },
    {
      id: 'networking',
      title: 'IT & Fiber Networking',
      desc: 'Integrated office LAN setups, premium fiber slicing, secure rack configurations, and robust firewalls.',
      techSpecs: ['High-speed CAT6 termination', 'Rack routing architectures', 'Secure virtual networks (VLAN)', 'Redundant local backup servers'],
    },
    {
      id: 'fire',
      title: 'Fire & Alarm Protection',
      desc: 'Intelligent multi-sensor alarm systems mapped to clear alarm panels for optimal safety standards compliance.',
      techSpecs: ['Advanced smoke detectors', 'Centrally monitored panels', 'Emergency escape path indicators', 'Automated safe cutoff lines'],
    }
  ],
  rw: [
    {
      id: 'construction',
      title: 'Imirimo yo Kubaka Inyubako',
      desc: 'Ubwubatsi bugezweho n\'inyubako zikomeye z\'abantu n\'iz\'ubucuruzi bukorwa ku buryo bwa kijyambere.',
      techSpecs: ['Ubwubatsi bwa beto nini n\'ibyuma', 'Gutunganya ubutaka n\'imiganda', 'Igishushanyo mbonera kibazwe neza', 'Ibikoresho bikomeye bidahungabana'],
    },
    {
      id: 'surveillance',
      title: 'Kamera z\'Umutekano na AI',
      desc: 'Umutekano uhambaye ukoresha imiyoboro ya kamera za IP n\'ibyuma byumva urujya n\'uruza byifashisha AI.',
      techSpecs: ['Ibyuma bishya bifata neza bya 4K', 'Kurebera kuri telefone uri kure', 'Imiyoboro ikingiye kurandatamo', 'Kumenya imigendo ihita isohoka'],
    },
    {
      id: 'electrical',
      title: 'Amashanyarazi n\'Imiyoboro',
      desc: 'Gushyiraho imiyoboro y\'amashanyarazi aringaniye n\'aremereye, twebwe n\'isuzuma ry\'ibikoresho.',
      techSpecs: ['Guringaniza amashanyarazi neza', 'Insinga z\'umuringa zikomeye cyane', 'Ibyuma bikubita bikazirinda', 'Agasanduku k\'amashanyarazi kapimye neza'],
    },
    {
      id: 'solar',
      title: 'Imirasire y\'Izuba Igezweho',
      desc: 'Gushyiraho imirasire y\'izuba ifite bateri zizigama neza ingufu mu kugabanya ibiciro bya fagitire zose.',
      techSpecs: ['Ibyuma bikomeye bya monocrystalline', 'Ibyuma biyobora ingufu bya MPPT', 'Bateri zo mu rwego rwo hejuru za Lithium', 'Guhita ryaka mu buryo bwikora ryonyine'],
    },
    {
      id: 'networking',
      title: 'Imirandanyarazi na Fiber / IT',
      desc: 'Guhuza imiyoboro ya interineti y\'ibiro (LAN), guhuza neza insinga za fiber, n\'ibipimo by\'umutekano.',
      techSpecs: ['Gushyiraho insinga z\'umuvuduko wa CAT6', 'Ibyuma biyobora imirongo mu makabati', 'Imiyoboro ya interineti ikingiye (VLAN)', 'Sereveri zizigama amakuru hafi hano'],
    },
    {
      id: 'fire',
      title: 'Kwirinda Inkongi n\'Inzogera',
      desc: 'Sisitemu z\'inzogera z\'inkongi zifite ibyuma byumva umwotsi n\'umuriro ku mutekano usesuye.',
      techSpecs: ['Ibyuma bigezweho byumva umwotsi', 'Imbonerahamwe igenzura ahantu hose', 'Ibyapa byerekana aho banyura bahunga', 'Guhita bikata amashanyarazi bwikora'],
    }
  ]
};

export const localizedPortfolio: Record<Language, Array<{ title: string; category: string; type: string; scope: string; partner: string; img: string; completion: number; rating: string }>> = {
  en: [
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
  ],
  rw: [
    {
      title: 'Ambasade ya Turukiya',
      category: 'completed',
      type: 'Imiyoboro y\'Amashanyarazi akomeye',
      scope: 'Gushyiraho imiyoboro y\'amashanyarazi n\'isanduku zigezweho.',
      partner: 'Uwo twafatanyije: Eroni Ltd',
      img: 'assets/img/st7Images/turkish_embassy.jpg',
      completion: 100,
      rating: 'Ibidukikije: Urwego Rwo Hejuru'
    },
    {
      title: 'Ikigo cy\'Ubukerarugendo Magashi',
      category: 'completed',
      type: 'Kuvugurura Ibyuma n\'Ibikoresho',
      scope: 'Gushyiraho ibikoresho bigezweho by\'igikoni n\'isuku mu gace ka Pariki y\'Akagera.',
      partner: 'Uwo twafatanyije: Star 7 Team',
      img: 'assets/img/st7Images/magashi_camp.jpg',
      completion: 100,
      rating: 'Ibidukikije: Imbaraga Pure'
    },
    {
      title: 'Kaminuza ya IPRC Tumba',
      category: 'completed',
      type: 'Imiyoboro y\'Amashanyarazi n\'Umutekano',
      scope: 'Guhuza amashanyarazi ku nyubako zose no gushyiraho imirandanyarazi n\'umutekano w\'inkuba.',
      partner: 'Uwo twafatanyije: Reserve Force',
      img: 'assets/img/st7Images/iprc_tumba.jpg',
      completion: 100,
      rating: 'Ibidukikije: Icyiciro cya Mbere'
    },
    {
      title: 'Ibiro Bikuru by\'Akarere ka Gicumbi',
      category: 'completed',
      type: 'Amashanyarazi n\'Ibyuma by\'Umutekano',
      scope: 'Gushyiraho imbonerahamwe nshya z\'inkongi, kamera z\'umutekano n\'ibindi byuma bigezweho.',
      partner: 'Uwo twafatanyije: Reserve Force',
      img: 'assets/img/st7Images/gicumbi_district1.jpg',
      completion: 100,
      rating: 'Ibidukikije: Ibyiza Bitangaje'
    },
    {
      title: 'Agace k\'Imiturire Kabeza',
      category: 'completed',
      type: 'Imiyoboro y\'Ingufu z\'Amashanyarazi',
      scope: 'Gukwirakwiza amashanyarazi nshya n\'insinga bikomeye ku baturage.',
      partner: 'Uwo twafatanyije: Reserve Force',
      img: 'assets/img/st7Images/kabeza_resettlement.jpg',
      completion: 100,
      rating: 'Ibidukikije: Gahunda y\'Icyatsi'
    },
    {
      title: 'Villa Bigezweho by\'Ikoranabuhanga',
      category: 'ongoing',
      type: 'Ingufu z\'Imirasire n\'Ibyuma by\'Umutekano',
      scope: 'Inzu y\'icyitegererezo ikoresha imirasire y\'izuba ya 15kW na kamera za CCTV zubakiye kuri AI.',
      partner: 'Uwo twafatanyije: Star 7 Team',
      img: 'assets/img/st7Images/architecture1.png',
      completion: 80,
      rating: 'Ibidukikije: Kudahungabana'
    }
  ]
};

export const localizedHeroSlides: Record<Language, Array<{ title: string; desc: string; img: string; metric: string; loc: string }>> = {
  en: [
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
  ],
  rw: [
    {
      title: 'Ambasade ya Turukiya',
      desc: 'Uruganda rugarura no gushyiraho imiyoboro nshya y\'amashanyarazi ku bigo.',
      img: 'assets/img/st7Images/turkish_embassy.jpg',
      metric: 'Imiyoboro ikingiye: 400V Balanced',
      loc: 'Kigali, Rwanda'
    },
    {
      title: 'Ikigo cy\'Ubukerarugendo Magashi',
      desc: 'Ibyuma bigezweho byo gutunganya amazi bishyushye n\'isuku mu masitasiyo yo mu gasozi.',
      img: 'assets/img/st7Images/magashi_camp.jpg',
      metric: 'Umutekano: Net-Zero Rated',
      loc: 'Pariki y\'Akagera'
    },
    {
      title: 'IPRC Tumba Campus',
      desc: 'Sisitemu yo kurinda inkuba no gushyira amashanyarazi mu butaka bikomeye.',
      img: 'assets/img/st7Images/iprc_tumba.jpg',
      metric: 'Kurinda inkuba: 1.2kVA protection',
      loc: 'Intara y\'Amajyaruguru'
    },
    {
      title: 'Ibiro Bikuru by\'Akarere ka Gicumbi',
      desc: 'Imiyoboro yo kwirinda inkongi n\'imbaga ya kamera z\'umutekano usesuye zigezweho.',
      img: 'assets/img/st7Images/gicumbi_district1.jpg',
      metric: ' Kamera: 48 Live Feeds',
      loc: 'Intara y\'Amajyaruguru'
    }
  ]
};

export const localizedFieldDiaries: Record<Language, Array<{ title: string; desc: string; img: string; category: string; metric: string }>> = {
  en: [
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
  ],
  rw: [
    {
      title: 'Sitasiyo y\'Ingufu Murambi',
      desc: 'Ibifunzo bikomeye n\'imirongo y\'amashanyarazi ashyize mu butaka kuri Sitasiyo ya Murambi.',
      img: 'assets/img/st7Images/Murambi1.jpg',
      category: 'Miyoboro y\'Amashanyarazi',
      metric: 'Inomero: #011'
    },
    {
      title: 'Insinga z\'Inyubako Kigali',
      desc: 'Umuhanga mu gukwirakwiza insinga z\'umuringa zirinda inkongi n\'isanduku z\'amashanyarazi.',
      img: 'assets/img/st7Images/st71.jpg',
      category: 'Insinga z\'Amashanyarazi',
      metric: 'Igipimo cy\'Ingufu: 600A'
    },
    {
      title: 'Sereveri z\'Akarere Gicumbi',
      desc: 'Guhuza insinga za fiber optic n\'isanduku igenzura amakuru n\'umutekano w\'ibiro by\'akarere.',
      img: 'assets/img/st7Images/gicumbi_district2.jpg',
      category: 'Fiber / IT',
      metric: 'Umuvuduko: 10Gbps Trunkline'
    },
    {
      title: 'Amashanyarazi y\'Imihanda',
      desc: 'Amatara y\'imihanda akoresha imirasire y\'izuba ifite ibyuma byumva umwijima bwikora.',
      img: 'assets/img/st7Images/solar_light.jpg',
      category: 'Imirasire y\'Izuba',
      metric: 'Kuzigama: Amasaha 48'
    },
    {
      title: 'Ibyuma bishinzwe Inyubako',
      desc: 'Gukora ibirindiro bikomeye by\'ibyuma na beto ishinze neza ku mishinga y\'inyubako zikomeye.',
      img: 'assets/img/st7Images/Murambi2.jpg',
      category: 'Ubwubatsi bwa Gisivili',
      metric: 'Beto ikomeye: ISO C35'
    },
    {
      title: 'Gushyira Imiyoboro ku Butaka',
      desc: 'Gufata neza imiyoboro y\'ibirinda inkuba n\'insinga ishyizwe ku butaka mu kurinda amashanyarazi mabi.',
      img: 'assets/img/st7Images/st72.jpg',
      category: 'Umutekano Usesuye',
      metric: 'Igipimo cy\'Inzika: < 1.0 Ohm'
    },
    {
      title: 'Imiturire Muhira',
      desc: 'Imiyoboro y\'amashanyarazi usesuye n\'amatara y\'imihanda mu gace k\'imiturire nshya.',
      img: 'assets/img/st7Images/muhira_resettlement_project.jpg',
      category: 'Ibikorwaremezo',
      metric: 'Ubwubatsi: Inzu 120'
    },
    {
      title: 'Sitasiyo y\'Itransiforomateri',
      desc: 'Isuzumwa ry\'umutekano ry\'itransiforomateri nini ikwirakwiza amashanyarazi i Kigali.',
      img: 'assets/img/st7Images/IMG-20230314-WA0026.jpg',
      category: 'Miyoboro y\'Amashanyarazi',
      metric: 'Igipimo: 15kV/400V'
    }
  ]
};
