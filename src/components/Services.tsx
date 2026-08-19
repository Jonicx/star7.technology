import React from 'react';
import { HardHat, ShieldCheck, Plug, Sun, Network, Flame, ChevronRight, ArrowRight, Maximize2, LucideProps } from 'lucide-react';
import { Language, translations, localizedServices } from '../i18n';
import { Service } from '../types';
import { InteractiveCard } from './InteractiveCard';
import { DecryptedText } from './DecryptedText';

const iconMap: Record<string, React.ComponentType<LucideProps>> = {
  HardHat,
  ShieldCheck,
  Plug,
  Sun,
  Network,
  Flame,
};

interface ServicesProps {
  selectedService: Service;
  setSelectedService: (service: Service) => void;
  setLightboxImage: (img: any) => void;
  lang: Language;
}

export const Services: React.FC<ServicesProps> = ({
  selectedService,
  setSelectedService,
  setLightboxImage,
  lang,
}) => {
  const t = translations[lang];
  const servicesList = localizedServices[lang];
  const localizedSelected = servicesList.find((s) => s.id === selectedService.id) || servicesList[0];

  return (
    <section id="services" className="px-6 lg:px-16 py-20 bg-white border-b border-neutral-100">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="border-l-4 border-[#1b4321] pl-6 space-y-2 text-left">
          <div className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest">
            {t.servicesBadge}
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-neutral-900 font-tech">
            <DecryptedText text={t.servicesTitle} />
          </h2>
          <p className="text-neutral-500 text-xs sm:text-sm font-sans max-w-xl">
            {t.servicesDesc}
          </p>
        </div>

        {/* Dynamic Split Screen Interactive Console */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left spec catalog list */}
          <div className="lg:col-span-7 flex flex-col gap-3.5">
            {servicesList.map((svc) => (
              <button
                key={svc.id}
                onClick={() => {
                  // Find original or recreate simple version of Service for callback compatibility
                  setSelectedService({
                    id: svc.id,
                    title: svc.title,
                    desc: svc.desc,
                    techSpecs: svc.techSpecs,
                    icon: svc.id === 'construction' ? 'HardHat' : svc.id === 'surveillance' ? 'ShieldCheck' : svc.id === 'electrical' ? 'Plug' : svc.id === 'solar' ? 'Sun' : svc.id === 'networking' ? 'Network' : 'Flame',
                    img: svc.id === 'construction' ? 'assets/img/st7Images/Murambi1.jpg' : svc.id === 'surveillance' ? 'assets/img/st7Images/st71.jpg' : svc.id === 'electrical' ? 'assets/img/st7Images/My project-1.jpg' : svc.id === 'solar' ? 'assets/img/st7Images/solar_light.jpg' : svc.id === 'networking' ? 'assets/img/st7Images/gicumbi_district2.jpg' : 'assets/img/st7Images/st72.jpg'
                  });
                }}
                className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 flex items-start gap-4 cursor-pointer relative group ${
                  selectedService.id === svc.id
                    ? 'bg-neutral-50/80 border-[#1b4321] shadow-md ring-1 ring-[#1b4321]/20'
                    : 'bg-white border-neutral-150 hover:border-neutral-300 hover:bg-neutral-50/30'
                }`}
              >
                {/* Left Active Glow bar */}
                {selectedService.id === svc.id && (
                  <span className="absolute left-0 top-1/4 bottom-1/4 w-1 bg-[#1b4321] rounded-r-full"></span>
                )}

                {/* Service Icon */}
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center transition-colors shrink-0 ${
                    selectedService.id === svc.id
                      ? 'bg-[#1b4321] text-accent'
                      : 'bg-neutral-100 text-[#1b4321] group-hover:bg-[#1b4321]/10'
                  }`}
                >
                  {(() => {
                    const iconName = svc.id === 'construction' ? 'HardHat' : svc.id === 'surveillance' ? 'ShieldCheck' : svc.id === 'electrical' ? 'Plug' : svc.id === 'solar' ? 'Sun' : svc.id === 'networking' ? 'Network' : 'Flame';
                    const IconComponent = iconMap[iconName] || Plug;
                    return <IconComponent className="w-5 h-5" />;
                  })()}
                </div>

                {/* Details */}
                <div className="space-y-1 pr-4">
                  <h3
                    className={`font-bold font-tech text-sm tracking-wide ${
                      selectedService.id === svc.id ? 'text-neutral-950 font-extrabold' : 'text-neutral-800'
                    }`}
                  >
                    {svc.title}
                  </h3>
                  <p className="text-[11px] text-neutral-500 leading-normal font-sans line-clamp-2">
                    {svc.desc}
                  </p>
                </div>

                {/* Small indicator */}
                <div className="ml-auto shrink-0 self-center flex items-center justify-center">
                  <ChevronRight
                    className={`w-5 h-5 transition-transform ${
                      selectedService.id === svc.id ? 'text-accent translate-x-1' : 'text-neutral-300'
                    }`}
                  />
                </div>
              </button>
            ))}
          </div>

          {/* Right spec monitor screen (Stark dark terminal style with real-world photo backgrounds) */}
          <InteractiveCard className="lg:col-span-5 text-white rounded-3xl overflow-hidden flex flex-col justify-between min-h-[360px] group/svc" glassStyle="premium-dark" glowColor="rgba(237, 168, 0, 0.15)">
            {/* High-Resolution Site Photo background */}
            <img
              src={selectedService.img}
              className="absolute inset-0 w-full h-full object-cover opacity-40 transition-all duration-500 group-hover/svc:scale-105 pointer-events-none"
              alt={localizedSelected.title}
            />
            {/* Dark Gradient Overlay for optimal contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/70 to-transparent pointer-events-none"></div>

            {/* Header */}
            <div className="relative z-10 p-5 flex justify-between items-center border-b border-white/10 bg-neutral-950/60 backdrop-blur-sm">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-[#1b4321] text-accent flex items-center justify-center">
                  {(() => {
                    const iconName = selectedService.id === 'construction' ? 'HardHat' : selectedService.id === 'surveillance' ? 'ShieldCheck' : selectedService.id === 'electrical' ? 'Plug' : selectedService.id === 'solar' ? 'Sun' : selectedService.id === 'networking' ? 'Network' : 'Flame';
                    const IconComponent = iconMap[iconName] || Plug;
                    return <IconComponent className="w-4 h-4" />;
                  })()}
                </div>
                <div className="text-left">
                  <span className="text-[8px] font-mono text-neutral-400 uppercase">{t.lensLabel}</span>
                  <h3 className="text-xs font-bold font-tech text-white leading-none">{localizedSelected.title}</h3>
                </div>
              </div>
              <button
                onClick={() =>
                  setLightboxImage({
                    title: localizedSelected.title,
                    desc: localizedSelected.desc,
                    img: selectedService.img,
                    category: 'Service Blueprint',
                    metric: `S7T-${selectedService.id.toUpperCase()}`,
                  })
                }
                className="p-1.5 rounded bg-white/10 hover:bg-accent hover:text-neutral-950 text-white transition-all text-xs border border-white/5 flex items-center justify-center"
                title="Expand Installation Photo"
              >
                <Maximize2 className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Main specifications */}
            <div className="relative z-10 p-6 space-y-4 text-left">
              <p className="text-xs text-white/90 leading-relaxed font-sans">
                {localizedSelected.desc}
              </p>

              <div className="space-y-1.5">
                <span className="text-[9px] font-mono text-accent uppercase tracking-wider font-bold">
                  {t.techSpecs}:
                </span>
                <div className="grid grid-cols-1 gap-1.5">
                  {localizedSelected.techSpecs.map((spec, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 bg-neutral-950/80 backdrop-blur-md border border-white/5 p-2 rounded-xl"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1b4321]"></span>
                      <span className="text-[10px] font-mono text-white/95">{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="relative z-10 p-4 border-t border-white/10 bg-neutral-950/75 backdrop-blur-md flex justify-between items-center">
              <span className="text-[9px] font-mono text-white/45">CODE: S7T-{selectedService.id.toUpperCase()}</span>
              <a
                href="#estimator"
                className="text-[10px] font-mono text-accent hover:text-white flex items-center gap-1 transition-colors uppercase font-bold"
              >
                {t.constructSchematic} <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </InteractiveCard>
        </div>
      </div>
    </section>
  );
};
