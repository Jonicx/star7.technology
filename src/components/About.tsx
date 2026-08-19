import React from 'react';
import { ShieldCheck, CheckCircle, ZoomIn } from 'lucide-react';
import { Language, translations, localizedFieldDiaries } from '../i18n';
import { FieldDiary } from '../types';
import { InteractiveCard } from './InteractiveCard';
import { DecryptedText } from './DecryptedText';

interface AboutProps {
  setLightboxImage: (img: any) => void;
  lang: Language;
}

export const About: React.FC<AboutProps> = ({ setLightboxImage, lang }) => {
  const t = translations[lang];
  const diaries = localizedFieldDiaries[lang];

  return (
    <section id="about" className="px-6 lg:px-16 py-20 bg-neutral-50/40 border-b border-neutral-100">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Section Header with Minimal Words & High Design */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-neutral-200/60 pb-8">
          <div className="space-y-3 max-w-xl text-left">
            <div className="text-xs font-mono text-[#1b4321] font-bold uppercase tracking-wider bg-[#1b4321]/10 rounded-full px-3.5 py-1 w-fit">
              {t.aboutBadge}
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-neutral-950 font-tech">
              <DecryptedText text={t.aboutTitle} />
            </h2>
          </div>
          <p className="text-neutral-500 text-xs sm:text-sm font-sans max-w-md leading-relaxed text-left">
            {t.aboutDesc}
          </p>
        </div>

        {/* Bento Grid: Combining Core Stats with Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Details Column (Brief Pillars) */}
          <InteractiveCard className="lg:col-span-4 flex flex-col justify-between p-8" glassStyle="premium">
            <div className="space-y-4 text-left">
              <div className="w-10 h-10 bg-[#1b4321] rounded-xl flex items-center justify-center text-accent shadow-md">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold font-tech text-neutral-950">{lang === 'rw' ? 'Inkingi nshingiro' : 'Engineering Pillars'}</h3>
              <p className="text-neutral-500 text-xs leading-relaxed font-sans">
                {lang === 'rw' 
                  ? 'Dushyiraho ibikoresho byemejwe n\'inzego zikomeye za ISO mu kurinda ubushyuhe bukabije, umutekano w\'amashanyarazi akomeye, no kuguza ingufu zerekeza ku gicaniro.'
                  : 'We deploy certified components with strict adherence to ISO standards, ensuring optimal heat mitigation, heavy-load safety, and continuous power delivery across residential and industrial nodes.'
                }
              </p>
            </div>

            <div className="space-y-3.5 pt-6 border-t border-neutral-100 text-left">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[#1b4321]/10 flex items-center justify-center text-[#1b4321]">
                  <CheckCircle className="w-3.5 h-3.5" />
                </div>
                <span className="text-[10px] font-mono font-bold text-neutral-700 tracking-wider">
                  {lang === 'rw' ? 'IBISHUSHANYO BYEMEWE NA ISO' : 'ISO CERTIFIED BLUEPRINTS'}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[#1b4321]/10 flex items-center justify-center text-[#1b4321]">
                  <CheckCircle className="w-3.5 h-3.5" />
                </div>
                <span className="text-[10px] font-mono font-bold text-neutral-700 tracking-wider">
                  {lang === 'rw' ? 'INGUFU ZIDAHUNGABANYA IBIDUKIKIJE' : 'NET-ZERO ECO INTELLIGENCE'}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[#1b4321]/10 flex items-center justify-center text-[#1b4321]">
                  <CheckCircle className="w-3.5 h-3.5" />
                </div>
                <span className="text-[10px] font-mono font-bold text-neutral-700 tracking-wider">
                  {lang === 'rw' ? 'KUBARA INZIKA Y\'UBUSHYUHE' : 'PREVENTIVE THERMAL SHIELD'}
                </span>
              </div>
            </div>
          </InteractiveCard>

          {/* Right Image Banner Card (Visual Catalyst) */}
          <InteractiveCard className="lg:col-span-8 overflow-hidden relative min-h-[300px] group flex flex-col justify-end" glassStyle="premium-dark" glowColor="rgba(237, 168, 0, 0.15)">
            <img
              src="assets/img/electrician-tools-electrical-equipment-wiring-diagram-electrician-tools-electrical-equipment-wiring-diagram-205201199.jpg"
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700 pointer-events-none"
              alt="Electrician Tools"
            />
            {/* Subtle Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent pointer-events-none"></div>

            <div className="relative z-10 p-8 space-y-2 max-w-xl text-left">
              <span className="text-[10px] font-mono text-accent font-bold bg-[#1b4321] py-0.5 px-2.5 rounded-full uppercase tracking-wider">
                {lang === 'rw' ? 'UBUZIRANENGE BW\'IGISHUSHANYO' : 'BLUEPRINT INTEGRITY'}
              </span>
              <h4 className="text-white font-bold text-2xl font-tech">{lang === 'rw' ? 'Ubuhanga buhanitse mu kibanza' : 'Precision Site Engineering'}</h4>
              <p className="text-white/80 text-xs font-sans leading-relaxed">
                {lang === 'rw'
                  ? 'Buri mushinga utangirana n\'isuzuma ry\'ikoranabuhanga rya mudasobwa kugira ngo tumenye neza ko ibikoresho bihura neza n\'imiterere y\'inyubako.'
                  : 'Every project begins with computerized design validation, ensuring physical materials are routed precisely matching structural architectural dimensions.'
                }
              </p>
            </div>
          </InteractiveCard>
        </div>

        {/* HIGH-DENSITY "VISUAL FIELD DIARIES" PHOTO GRID */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
            <div className="space-y-1 text-left">
              <h3 className="text-xl font-bold font-tech text-neutral-950 flex items-center gap-2">
                <span className="w-1.5 h-5 bg-[#EDA800] inline-block rounded-full"></span>
                {lang === 'rw' ? 'Amafoto y\'Ibibanza Nyabyo' : 'Visual Field Catalog'}
              </h3>
              <p className="text-neutral-400 text-xs font-mono">
                {t.fieldDiariesDesc}
              </p>
            </div>
            <span className="text-[10px] font-mono text-neutral-500 bg-neutral-100 py-1 px-3 rounded-full uppercase">
              {t.clickEnlarge}
            </span>
          </div>

          {/* 4-Column Responsive High-Impact Visual Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {diaries.map((item, idx) => (
              <div
                key={idx}
                onClick={() => setLightboxImage(item)}
                className="group/diary relative aspect-square rounded-2xl overflow-hidden border border-neutral-200/80 bg-neutral-950 cursor-pointer shadow-sm hover:shadow-md transition-all duration-300"
              >
                {/* Real Site Image */}
                <img
                  src={item.img}
                  className="absolute inset-0 w-full h-full object-cover opacity-90 transition-transform duration-500 group-hover/diary:scale-105"
                  alt={item.title}
                />

                {/* Hover Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent opacity-80 group-hover/diary:opacity-95 transition-opacity duration-300"></div>

                {/* Top Tag */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="text-[8px] font-mono text-white bg-[#1b4321]/90 backdrop-blur-md px-2 py-0.5 rounded-md border border-white/10 uppercase tracking-wider font-bold">
                    {item.category}
                  </span>
                </div>

                {/* Zoom Indicator Icon */}
                <div className="absolute top-3 right-3 z-10 opacity-0 group-hover/diary:opacity-100 transition-opacity duration-300">
                  <div className="w-7 h-7 rounded-full bg-accent/90 flex items-center justify-center text-neutral-950 shadow">
                    <ZoomIn className="w-4 h-4" />
                  </div>
                </div>

                {/* Caption details (Bottom) */}
                <div className="absolute bottom-0 left-0 right-0 p-4 z-10 space-y-1 text-left">
                  <span className="text-[8px] font-mono text-accent font-bold tracking-widest uppercase">
                    {item.metric}
                  </span>
                  <h4 className="text-white font-bold text-xs truncate font-tech">
                    {item.title}
                  </h4>
                  <p className="text-[9px] text-white/70 line-clamp-2 leading-snug font-sans group-hover/diary:text-white transition-colors duration-200">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
