import React from 'react';
import { ChevronLeft, ChevronRight, Cpu, Info, LayoutGrid, FolderOpen, Sliders, Send } from 'lucide-react';
import { Language, translations } from '../i18n';
import logo from '../../assets/img/logos/star7logo transparent.png';


interface SidebarProps {
  activeSection: string;
  sidebarCollapsed: boolean;
  setSidebarCollapsed: (collapsed: boolean) => void;
  lang: Language;
}

export const Sidebar: React.FC<SidebarProps> = ({
  activeSection,
  sidebarCollapsed,
  setSidebarCollapsed,
  lang,
}) => {
  const t = translations[lang];

  return (
    <>
      {/* SIDE-RAIL NAVIGATION BAR (White background & green accents) */}
      <aside
        className={`hidden md:flex fixed top-0 left-0 h-screen bg-white border-r border-neutral-100 z-50 flex-col justify-between items-center py-4 transition-all duration-300 ${
          sidebarCollapsed ? 'w-20' : 'w-64'
        }`}
      >
        {/* Logo Section */}
        <div className={`w-full px-6 flex items-center ${sidebarCollapsed ? 'justify-center' : 'justify-between'}`}>
          <a href="#" className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center hover:shadow-[0_0_15px_rgba(27,67,33,0.3)] transition-all duration-300">
              
              {!sidebarCollapsed && (
                <img 
                  src={logo} 
                  alt="Logo" 
                  className="h-full w-full object-contain" 
                />
              )}
              {sidebarCollapsed && (
                <img 
                  src={logo} 
                  alt="Logo" 
                  className="h-full w-full object-contain"
                  onClick={() => setSidebarCollapsed(false)} 
                />
              )}
            </div>
            {!sidebarCollapsed && (
              <div className="flex flex-col leading-none">
                <span className="font-tech text-[11px] font-bold text-neutral-600 tracking-wider text-sm">INNOVATION</span>
                <span className="text-[9px] font-mono text-neutral-400 tracking-widest mt-0.5">&amp; EXCELLENCE</span>
              </div>
            )}
          </a>
          {!sidebarCollapsed && (
            <button
              onClick={() => setSidebarCollapsed(true)}
              className="text-[#1b4321]  transition-colors flex items-center justify-center"
              title="Collapse Menu"
            >
              <ChevronLeft className="w-5 h-5 stroke-3 text-[#1b4321]" />
            </button>
          )}
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col gap-1.5 w-full px-3">
          <a
            href="#hero"
            className={`flex items-center gap-4 py-3 px-4 rounded-xl transition-all duration-200 ${
              activeSection === 'hero'
                ? 'bg-neutral-50 border-l-4 border-[#1b4321] text-neutral-950 font-bold'
                : 'text-neutral-500 hover:text-neutral-950 hover:bg-neutral-50/50'
            }`}
          >
            <div className={activeSection === 'hero' ? 'text-[#1b4321]' : 'text-neutral-400'}>
              <Cpu className="w-5 h-5" />
            </div>
            {!sidebarCollapsed && <span className="font-tech text-xs tracking-wider uppercase">{t.sysInit}</span>}
          </a>

          <a
            href="#about"
            className={`flex items-center gap-4 py-3 px-4 rounded-xl transition-all duration-200 ${
              activeSection === 'about'
                ? 'bg-neutral-50 border-l-4 border-[#1b4321] text-neutral-950 font-bold'
                : 'text-neutral-500 hover:text-neutral-950 hover:bg-neutral-50/50'
            }`}
          >
            <div className={activeSection === 'about' ? 'text-[#1b4321]' : 'text-neutral-400'}>
              <Info className="w-5 h-5" />
            </div>
            {!sidebarCollapsed && <span className="font-tech text-xs tracking-wider uppercase">{t.companySpec}</span>}
          </a>

          <a
            href="#services"
            className={`flex items-center gap-4 py-3 px-4 rounded-xl transition-all duration-200 ${
              activeSection === 'services'
                ? 'bg-neutral-50 border-l-4 border-[#1b4321] text-neutral-950 font-bold'
                : 'text-neutral-500 hover:text-neutral-950 hover:bg-neutral-50/50'
            }`}
          >
            <div className={activeSection === 'services' ? 'text-[#1b4321]' : 'text-neutral-400'}>
              <LayoutGrid className="w-5 h-5" />
            </div>
            {!sidebarCollapsed && <span className="font-tech text-xs tracking-wider uppercase">{t.ecoServices}</span>}
          </a>

          <a
            href="#portfolio"
            className={`flex items-center gap-4 py-3 px-4 rounded-xl transition-all duration-200 ${
              activeSection === 'portfolio'
                ? 'bg-neutral-50 border-l-4 border-[#1b4321] text-neutral-950 font-bold'
                : 'text-neutral-500 hover:text-neutral-950 hover:bg-neutral-50/50'
            }`}
          >
            <div className={activeSection === 'portfolio' ? 'text-[#1b4321]' : 'text-neutral-400'}>
              <FolderOpen className="w-5 h-5" />
            </div>
            {!sidebarCollapsed && <span className="font-tech text-xs tracking-wider uppercase">{t.realizedNodes}</span>}
          </a>

          <a
            href="#contact"
            className={`flex items-center gap-4 py-3 px-4 rounded-xl transition-all duration-200 ${
              activeSection === 'contact'
                ? 'bg-neutral-50 border-l-4 border-[#1b4321] text-neutral-950 font-bold'
                : 'text-neutral-500 hover:text-neutral-950 hover:bg-neutral-50/50'
            }`}
          >
            <div className={activeSection === 'contact' ? 'text-[#1b4321]' : 'text-neutral-400'}>
              <Send className="w-5 h-5" />
            </div>
            {!sidebarCollapsed && <span className="font-tech text-xs tracking-wider uppercase">{t.commLine}</span>}
          </a>
        </nav>

        {/* Status Check */}
        <div className={`w-full px-6 flex flex-col ${sidebarCollapsed ? 'items-center' : 'items-start'} gap-1.5 text-neutral-400`}>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#1b4321] pulse-dot"></span>
            {!sidebarCollapsed && <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest font-bold">{t.systemStable}</span>}
          </div>
          {!sidebarCollapsed && (
            <span className="text-[9px] font-mono text-neutral-400">VER. 1.1.0</span>
          )}
        </div>
      </aside>

      {/* MOBILE FLOATING DOCK */}
      <div className="md:hidden fixed bottom-4 left-4 right-4 bg-white/90 backdrop-blur-xl border border-neutral-100 shadow-lg rounded-2xl z-50 py-3 px-4 flex justify-around items-center animate-fadeIn">
        <a href="#hero" className={`flex flex-col items-center text-xs ${activeSection === 'hero' ? 'text-[#1b4321] font-bold' : 'text-neutral-400'}`}>
          <Cpu className="w-5 h-5" />
        </a>
        <a href="#about" className={`flex flex-col items-center text-xs ${activeSection === 'about' ? 'text-[#1b4321] font-bold' : 'text-neutral-400'}`}>
          <Info className="w-5 h-5" />
        </a>
        <a href="#services" className={`flex flex-col items-center text-xs ${activeSection === 'services' ? 'text-[#1b4321] font-bold' : 'text-neutral-400'}`}>
          <LayoutGrid className="w-5 h-5" />
        </a>
        <a href="#portfolio" className={`flex flex-col items-center text-xs ${activeSection === 'portfolio' ? 'text-[#1b4321] font-bold' : 'text-neutral-400'}`}>
          <FolderOpen className="w-5 h-5" />
        </a>
        <a href="#contact" className={`flex flex-col items-center text-xs ${activeSection === 'contact' ? 'text-[#1b4321] font-bold' : 'text-neutral-400'}`}>
          <Send className="w-5 h-5" />
        </a>
      </div>
    </>
  );
};
