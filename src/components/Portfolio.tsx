import React, { useMemo } from 'react';
import { Cpu } from 'lucide-react';
import { Language, translations, localizedPortfolio } from '../i18n';
import { PortfolioItem } from '../types';

interface PortfolioProps {
  portfolioFilter: string;
  setPortfolioFilter: (filter: string) => void;
  lang: Language;
}

export const Portfolio: React.FC<PortfolioProps> = ({
  portfolioFilter,
  setPortfolioFilter,
  lang,
}) => {
  const t = translations[lang];
  const portfolioList = localizedPortfolio[lang];

  const filteredPortfolio = useMemo(() => {
    if (portfolioFilter === 'all') return portfolioList;
    return portfolioList.filter((item) => item.category === portfolioFilter);
  }, [portfolioFilter, portfolioList]);

  return (
    <section id="portfolio" className="px-6 lg:px-16 py-20 bg-neutral-50/40 border-b border-neutral-100">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 border-b border-neutral-100 pb-6">
          <div className="space-y-3 max-w-lg text-left">
            <div className="text-xs font-mono text-[#1b4321] font-bold uppercase tracking-wider bg-neutral-100 rounded-full px-3 py-1 w-fit">
              {t.portfolioBadge}
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-neutral-950 font-tech">
              {t.portfolioTitle}
            </h2>
            <p className="text-neutral-500 text-xs sm:text-sm">
              {t.portfolioDesc}
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-1.5 bg-neutral-100 p-1 rounded-xl border border-neutral-200/50 shrink-0">
            <button
              onClick={() => setPortfolioFilter('all')}
              className={`text-[10px] font-mono px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                portfolioFilter === 'all'
                  ? 'bg-white text-neutral-950 font-bold shadow-sm'
                  : 'text-neutral-500 hover:text-neutral-900'
              }`}
            >
              {lang === 'rw' ? 'BYOSE' : 'ALL'}
            </button>
            <button
              onClick={() => setPortfolioFilter('completed')}
              className={`text-[10px] font-mono px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                portfolioFilter === 'completed'
                  ? 'bg-white text-neutral-950 font-bold shadow-sm'
                  : 'text-neutral-500 hover:text-neutral-900'
              }`}
            >
              {lang === 'rw' ? 'BYARANGIYE' : 'COMPLETED'}
            </button>
            <button
              onClick={() => setPortfolioFilter('ongoing')}
              className={`text-[10px] font-mono px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                portfolioFilter === 'ongoing'
                  ? 'bg-white text-neutral-950 font-bold shadow-sm'
                  : 'text-neutral-500 hover:text-neutral-900'
              }`}
            >
              {lang === 'rw' ? 'BIRYAKORWA' : 'ON_GOING'}
            </button>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPortfolio.map((proj, idx) => (
            <div
              key={idx}
              className="glass-card rounded-3xl overflow-hidden flex flex-col justify-between border border-neutral-200/40 hover:border-[#1b4321] shadow-sm transition-all duration-300 group"
            >
              {/* Frame Image */}
              <div className="relative aspect-[4/3] bg-neutral-950 overflow-hidden">
                {proj.img ? (
                  <img
                    src={proj.img}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    alt={proj.title}
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-neutral-900 relative">
                    <Cpu className="text-[#1b4321] w-8 h-8 mb-2 animate-pulse" />
                    <span className="text-xs font-mono text-neutral-400">STAR 7 SCHEMATIC LAYOUT</span>
                  </div>
                )}
                <div className="absolute top-3 left-3">
                  <span className="text-[8px] font-mono font-bold uppercase px-2 py-1 rounded bg-white text-neutral-950 border border-neutral-200">
                    {proj.category === 'completed' ? (lang === 'rw' ? 'BYARANGIYE' : 'COMPLETED') : (lang === 'rw' ? 'BIRYAKORWA' : 'ON GOING')}
                  </span>
                </div>
                <div className="absolute bottom-3 right-3 bg-neutral-950/85 px-2.5 py-1 rounded border border-neutral-800">
                  <span className="text-[9px] font-mono text-accent font-semibold">{proj.rating}</span>
                </div>
              </div>

              {/* Details */}
              <div className="p-6 space-y-3.5 flex-1 flex flex-col justify-between bg-white text-left">
                <div className="space-y-2">
                  <span className="text-[8px] font-mono text-neutral-400 block uppercase">{proj.type}</span>
                  <h4 className="font-bold font-tech text-base text-neutral-950 leading-tight">
                    {proj.title}
                  </h4>
                  <p className="text-xs text-neutral-500 leading-relaxed font-sans">{proj.scope}</p>
                </div>

                <div className="pt-3 border-t border-neutral-100 space-y-2.5">
                  <div className="flex justify-between text-[9px] font-mono text-neutral-400">
                    <span className="truncate pr-2">{lang === 'rw' ? 'Ububiko' : 'Type'}: {proj.type}</span>
                    <span className="shrink-0">{proj.partner}</span>
                  </div>

                  <div className="space-y-1">
                    <div className="flex justify-between items-center text-[9px] font-mono text-neutral-500">
                      <span>{lang === 'rw' ? 'IBIKORWA BYEMEJE:' : 'VERIFIED INSTALLATION:'}</span>
                      <span className="font-bold text-neutral-950">{proj.completion}%</span>
                    </div>
                    <div className="w-full h-1 bg-neutral-100 rounded-full overflow-hidden">
                      <div className="h-full bg-[#1b4321] rounded-full" style={{ width: `${proj.completion}%` }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
