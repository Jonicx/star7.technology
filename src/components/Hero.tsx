import React from 'react';
import { Image as ImageIcon, Sliders, Maximize2, ChevronLeft, ChevronRight } from 'lucide-react';
import { Language, translations, localizedHeroSlides } from '../i18n';
import { HeroSlide } from '../types';
import { MagneticHover } from './MagneticHover';
import { DecryptedText } from './DecryptedText';

interface HeroProps {
  heroSlideIndex: number;
  setHeroSlideIndex: React.Dispatch<React.SetStateAction<number>>;
  setLightboxImage: (img: any) => void;
  lang: Language;
}

export const Hero: React.FC<HeroProps> = ({
  heroSlideIndex,
  setHeroSlideIndex,
  setLightboxImage,
  lang,
}) => {
  const t = translations[lang];
  const slides = localizedHeroSlides[lang];

  return (
    <section
      id="hero"
      className="min-h-screen relative flex items-center justify-center px-6 lg:px-16 pt-24 pb-20"
    >
      {/* Grid Pattern overlay for depth */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none"
      ></div>

      {/* Content Grid */}
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 py-12">
        {/* Left Details (Forest Green & Gold Accents) */}
        <div className="lg:col-span-7 flex flex-col space-y-6 text-center lg:text-left">
          <div className="inline-flex items-center justify-center lg:justify-start gap-2 bg-neutral-50/50 backdrop-blur-sm border border-neutral-200/60 text-neutral-800 py-1 px-3 rounded-full w-fit mx-auto lg:mx-0">
            <span className="w-1.5 h-1.5 rounded-full bg-accent pulse-dot"></span>
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-600">
              {t.decadePrecision}
            </span>
          </div>

          <div className="space-y-3">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-900 leading-tight">
              STAR 7<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1b4321] via-[#2d6a31] to-[#EDA800] font-tech">
                <DecryptedText text="TECHNOLOGY" triggerOn="mount" delay={200} />
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-[#1b4321] font-tech font-bold tracking-widest uppercase flex items-center justify-center lg:justify-start gap-2">
              <span className="w-5 h-0.5 bg-[#EDA800] inline-block"></span>
              <DecryptedText text={t.techSubtitle} triggerOn="mount" delay={500} />
            </p>
          </div>

          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed max-w-xl mx-auto lg:mx-0 font-sans">
            {t.heroDesc}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
            <MagneticHover>
              <a
                href="#portfolio"
                className="bg-[#1b4321] text-white font-tech hover:bg-[#123017] hover:shadow-[0_0_20px_rgba(27,67,33,0.25)] border border-[#1b4321] py-3.5 px-8 rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2"
              >
                {t.exploreArchive} <ImageIcon className="w-4 h-4 text-accent" />
              </a>
            </MagneticHover>
            <MagneticHover>
              <a
                href="#estimator"
                className="bg-white/60 backdrop-blur-md text-neutral-900 border border-neutral-200/80 hover:border-[#1b4321] hover:bg-white py-3.5 px-8 rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2"
              >
                {t.runSimulator} <Sliders className="w-4 h-4 text-neutral-400" />
              </a>
            </MagneticHover>
          </div>

          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-neutral-150 max-w-md mx-auto lg:mx-0 text-left">
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-[#1b4321] font-tech">10+</div>
              <div className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider mt-0.5">{t.yearsActiveLabel}</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-[#1b4321] font-tech">500k+</div>
              <div className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider mt-0.5">{t.cleanWattsLabel}</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-[#1b4321] font-tech">100%</div>
              <div className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider mt-0.5">{t.safeDeliveryLabel}</div>
            </div>
          </div>
        </div>

        {/* Right Interactive Photo Slider (Ultra-Visual) */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center space-y-4">
          <div className="relative w-full max-w-md aspect-[4/3] rounded-3xl overflow-hidden border border-neutral-200 bg-neutral-950 p-1 flex flex-col justify-between shadow-xl group/hero">
            {/* Main Photograph */}
            <img
              src={slides[heroSlideIndex].img}
              className="absolute inset-0 w-full h-full object-cover opacity-85 transition-all duration-700 ease-in-out group-hover/hero:scale-105"
              alt={slides[heroSlideIndex].title}
            />

            {/* Dark Gradient Overlay for Typography Contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/30 to-neutral-950/40 pointer-events-none"></div>

            {/* Top HUD bar */}
            <div className="relative z-10 flex justify-between items-center p-4">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent pulse-dot"></span>
                <span className="text-[8px] font-mono text-white/90 bg-[#1b4321] py-0.5 px-2 rounded-full uppercase tracking-widest font-bold">
                  {slides[heroSlideIndex].loc}
                </span>
              </div>
              <button
                onClick={() => setLightboxImage(slides[heroSlideIndex])}
                className="p-1.5 rounded-lg bg-neutral-900/80 hover:bg-accent hover:text-neutral-950 text-white transition-all border border-white/10 flex items-center justify-center"
                title="Inspect Photograph"
              >
                <Maximize2 className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Left / Right Chevron Controls */}
            <div className="absolute inset-y-0 left-0 right-0 flex justify-between items-center px-2 pointer-events-none z-10">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setHeroSlideIndex((prev) => (prev - 1 + slides.length) % slides.length);
                }}
                className="p-2 rounded-full bg-neutral-900/60 hover:bg-accent text-white hover:text-neutral-950 pointer-events-auto transition-all flex items-center justify-center"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setHeroSlideIndex((prev) => (prev + 1) % slides.length);
                }}
                className="p-2 rounded-full bg-neutral-900/60 hover:bg-accent text-white hover:text-neutral-950 pointer-events-auto transition-all flex items-center justify-center"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Bottom Details Card inside Slide */}
            <div className="relative z-10 p-5 mt-auto bg-neutral-950/85 backdrop-blur-md rounded-2xl border border-white/5 m-3 space-y-1.5">
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-mono text-accent font-bold uppercase tracking-wider">
                  {slides[heroSlideIndex].metric}
                </span>
                <span className="text-[9px] font-mono text-white/40 font-bold">
                  0{heroSlideIndex + 1} / 0{slides.length}
                </span>
              </div>
              <h3 className="font-bold font-tech text-white text-base leading-tight">
                {slides[heroSlideIndex].title}
              </h3>
              <p className="text-[11px] text-white/70 leading-relaxed font-sans">
                {slides[heroSlideIndex].desc}
              </p>
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center items-center gap-2">
            {slides.map((slide, idx) => (
              <button
                key={idx}
                onClick={() => setHeroSlideIndex(idx)}
                className={`w-8 h-2 rounded-full transition-all duration-300 ${
                  heroSlideIndex === idx ? 'bg-[#1b4321] w-12' : 'bg-neutral-200 hover:bg-neutral-300'
                }`}
                title={`View ${slide.title}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
