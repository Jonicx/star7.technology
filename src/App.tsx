import React, { useState, useEffect, useMemo } from 'react';
import { Clock } from 'lucide-react';
import { SERVICES } from './constants';
import { Language, translations } from './i18n';
import { Sidebar } from './components/Sidebar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { Contact } from './components/Contact';
import { Lightbox } from './components/Lightbox';

export default function App() {
  const [lang, setLang] = useState<Language>('en');
  const [activeSection, setActiveSection] = useState('hero');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [portfolioFilter, setPortfolioFilter] = useState('all');
  const [selectedService, setSelectedService] = useState(SERVICES[0]);
  const [heroSlideIndex, setHeroSlideIndex] = useState(0);
  const [lightboxImage, setLightboxImage] = useState<any>(null);


  // Contact form parameters
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [formStatus, setFormStatus] = useState('idle'); // idle, loading, success, error

  // Dynamic UTC Time
  const [currentTime, setCurrentTime] = useState('');
  useEffect(() => {
    const update = () => {
      const date = new Date();
      setCurrentTime(date.toUTCString().replace('GMT', 'UTC'));
    };
    update();
    const timer = setInterval(update, 1000);
    return () => clearInterval(timer);
  }, []);

  // Watch scrolling
  useEffect(() => {
    const checkScroll = () => {
      const sections = ['hero', 'about', 'services', 'portfolio', 'contact'];
      const pos = window.scrollY + 180;
      for (const s of sections) {
        const el = document.getElementById(s);
        if (el && pos >= el.offsetTop && pos < el.offsetTop + el.offsetHeight) {
          setActiveSection(s);
          break;
        }
      }
    };
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  // Mouse move listener for dynamic parallax background blobs and flashlight grid
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [clientMousePos, setClientMousePos] = useState({ x: -1000, y: -1000 });
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth - 0.5;
      const y = e.clientY / window.innerHeight - 0.5;
      setMousePos({ x, y });
      setClientMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleInputChange = (key: string, val: string) => {
    setFormData((prev) => ({ ...prev, [key]: val }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('loading');
    try {
      // Post to our custom form submission mock in vite.config / local server
      const res = await fetch('/forms/contact.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString(),
      });
      const text = await res.text();
      if (text.trim() === 'OK' || res.ok) {
        setFormStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setFormStatus('error');
      }
    } catch (err) {
      console.error(err);
      setFormStatus('error');
    }
  };

  const lockBlueprint = (subject: string, message: string) => {
    setFormData({ name: '', email: '', subject, message });
    // Scroll smoothly to contact section
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const t = translations[lang];

  return (
    <div className="flex flex-col md:flex-row min-h-screen relative bg-white text-neutral-900 selection:bg-[#1b4321] selection:text-white">
      {/* HIDDEN SVG FILTER FOR LIQUID GOOEY EFFECT */}
      <svg xmlns="http://www.w3.org/2000/svg" className="absolute w-0 h-0 hidden" pointerEvents="none">
        <defs>
          <filter id="liquid-goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="30" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>

      {/* DYNAMIC LIQUID BLOB BACKGROUND SYSTEM */}
      <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden bg-white" style={{ filter: 'url(#liquid-goo)' }}>
        <div
          className="absolute inset-0 transition-transform duration-700 ease-out"
          style={{ transform: `translate(${mousePos.x * 40}px, ${mousePos.y * 40}px)` }}
        >
          {/* Blob 1: Top Left - Forest Green */}
          <div className="absolute blob-1 w-96 h-96 rounded-full bg-[#1b4321] opacity-[0.08] blur-xl" style={{ top: '-10%', left: '-5%' }}></div>

          {/* Blob 2: Top Right - Gold Accent */}
          <div className="absolute blob-2 w-[500px] h-[500px] rounded-full bg-[#EDA800] opacity-[0.06] blur-xl" style={{ top: '20%', right: '-10%' }}></div>

          {/* Blob 3: Center Left - Forest Green */}
          <div className="absolute blob-3 w-[450px] h-[450px] rounded-full bg-[#1b4321] opacity-[0.07] blur-xl" style={{ top: '50%', left: '-15%' }}></div>

          {/* Blob 4: Bottom Center - Gold Accent */}
          <div className="absolute blob-4 w-[550px] h-[550px] rounded-full bg-[#EDA800] opacity-[0.06] blur-xl" style={{ bottom: '-5%', left: '30%' }}></div>

          {/* Blob 5: Bottom Right - Forest Green */}
          <div className="absolute blob-5 w-96 h-96 rounded-full bg-[#1b4321] opacity-[0.08] blur-xl" style={{ bottom: '10%', right: '5%' }}></div>
        </div>
      </div>

      {/* BLUEPRINT CYBER GRID WITH MOUSE SPOTLIGHT FLASHLIGHT */}
      <div 
        className="fixed inset-0 z-[-1] pointer-events-none cyber-grid"
        style={{
          maskImage: `radial-gradient(circle 350px at ${clientMousePos.x}px ${clientMousePos.y}px, black 20%, transparent 100%)`,
          WebkitMaskImage: `radial-gradient(circle 350px at ${clientMousePos.x}px ${clientMousePos.y}px, black 20%, transparent 100%)`,
          opacity: 0.65,
        }}
      />

      {/* SIDEBAR */}
      <Sidebar
        activeSection={activeSection}
        sidebarCollapsed={sidebarCollapsed}
        setSidebarCollapsed={setSidebarCollapsed}
        lang={lang}
      />

      {/* MAIN VIEWPORT */}
      <main className={`flex-1 transition-all duration-300 ${sidebarCollapsed ? 'md:pl-20' : 'md:pl-64'} pb-16 md:pb-0`}>
        {/* TOP STATUS HUB BAR (Fixed for alignment with modular aesthetics) */}
        <header className="sticky top-0 bg-white/85 backdrop-blur-md border-b border-neutral-100 z-40 py-4 px-6 lg:px-16 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="text-xs font-mono text-neutral-500 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-neutral-400" /> {currentTime || (lang === 'rw' ? 'IHUZA...' : 'SYNCING...')}
            </span>
          </div>
          <div className="flex items-center gap-5">
            {/* Elegant Language Switcher Selector */}
            <div className="flex bg-neutral-100 p-0.5 rounded-lg border border-neutral-200/50">
              <button
                onClick={() => setLang('en')}
                className={`text-[10px] font-mono font-bold px-2.5 py-1 rounded-md transition-all cursor-pointer ${
                  lang === 'en'
                    ? 'bg-white text-[#1b4321] shadow-sm'
                    : 'text-neutral-500 hover:text-neutral-900'
                }`}
                title="Switch to English"
              >
                EN
              </button>
              <button
                onClick={() => setLang('rw')}
                className={`text-[10px] font-mono font-bold px-2.5 py-1 rounded-md transition-all cursor-pointer ${
                  lang === 'rw'
                    ? 'bg-[#1b4321] text-accent shadow-sm'
                    : 'text-neutral-500 hover:text-neutral-900'
                }`}
                title="Hindura mu Kinyarwanda"
              >
                RW
              </button>
            </div>

            <div className="h-4 w-px bg-neutral-200 hidden sm:block"></div>

            <div className="h-4 w-px bg-neutral-200 hidden sm:block"></div>
            <a
              href="#estimator"
              className="hidden sm:inline-block text-xs font-tech font-bold bg-neutral-950 text-white hover:bg-neutral-800 hover:text-accent py-2 px-4 rounded-lg transition-all duration-200 border border-neutral-900 shadow-sm"
            >
              {lang === 'rw' ? 'KUBARA IBIKURE' : 'INITIALIZE BLUEPRINT'}
            </a>
          </div>
        </header>

        {/* HERO SECTION */}
        <Hero
          heroSlideIndex={heroSlideIndex}
          setHeroSlideIndex={setHeroSlideIndex}
          setLightboxImage={setLightboxImage}
          lang={lang}
        />

        {/* ABOUT SECTION */}
        <About setLightboxImage={setLightboxImage} lang={lang} />

        {/* SERVICES SECTION */}
        <Services
          selectedService={selectedService}
          setSelectedService={setSelectedService}
          setLightboxImage={setLightboxImage}
          lang={lang}
        />

        {/* PORTFOLIO SECTION */}
        <Portfolio
          portfolioFilter={portfolioFilter}
          setPortfolioFilter={setPortfolioFilter}
          lang={lang}
        />

        {/* CONTACT SECTION */}
        <Contact
          formData={formData}
          handleInputChange={handleInputChange}
          handleFormSubmit={handleFormSubmit}
          formStatus={formStatus}
          lang={lang}
        />

        {/* FOOTER */}
        <footer className="bg-neutral-950 text-neutral-400 py-12 px-6 lg:px-16 text-center sm:text-left border-t border-neutral-900">
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6">
            <div className="space-y-1.5 text-left">
              <div className="flex items-center gap-2 justify-center sm:justify-start">
                <span className="w-2 h-2 rounded-full bg-accent pulse-dot"></span>
                <span className="text-white font-tech font-bold text-sm tracking-wider uppercase">STAR 7 TECHNOLOGY LTD</span>
              </div>
              <p className="text-xs text-neutral-500 font-mono">
                {lang === 'rw' 
                  ? 'Imyaka icumi y\'ubuhanga buhanitse. Rwiyemezamirimo wemewe i Kigali, mu Rwanda.' 
                  : 'Decadal excellence. Registered contractor Kigali, Rwanda.'
                }
              </p>
            </div>

            <div className="text-[10px] font-mono text-neutral-500">
              &copy; 2014 - 2026 Star 7 Technology Ltd. {lang === 'rw' ? 'Yubatswe n\'ubuhanga buhanitse bugezweho.' : 'Built with high-contrast Neo-Futuristic architecture.'}
            </div>
          </div>
        </footer>
      </main>

      {/* IMMERSIVE PHOTO LIGHTBOX MODAL */}
      <Lightbox lightboxImage={lightboxImage} onClose={() => setLightboxImage(null)} />
    </div>
  );
}
