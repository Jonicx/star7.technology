import React from 'react';
import { X } from 'lucide-react';

interface LightboxProps {
  lightboxImage: {
    title: string;
    desc?: string;
    img: string;
    category?: string;
    metric?: string;
  } | null;
  onClose: () => void;
}

export const Lightbox: React.FC<LightboxProps> = ({ lightboxImage, onClose }) => {
  if (!lightboxImage) return null;

  return (
    <div
      className="fixed inset-0 bg-neutral-950/95 backdrop-blur-md z-[100] flex items-center justify-center p-4 transition-all duration-300"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full bg-neutral-900 border border-neutral-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 w-8 h-8 rounded-full bg-neutral-950/80 border border-white/10 text-white hover:bg-accent hover:text-neutral-950 flex items-center justify-center transition-all cursor-pointer"
          title="Close Inspector"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Left Photo Panel */}
        <div className="md:w-3/5 relative aspect-[4/3] md:aspect-auto bg-black flex items-center justify-center">
          <img src={lightboxImage.img} className="max-w-full max-h-[80vh] object-contain" alt={lightboxImage.title} />
        </div>

        {/* Right Detail Panel */}
        <div className="md:w-2/5 p-6 sm:p-8 flex flex-col justify-between space-y-6 text-white bg-neutral-950 border-t md:border-t-0 md:border-l border-white/10 text-left">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#1b4321] pulse-dot"></span>
              <span className="text-[9px] font-mono text-accent uppercase tracking-widest font-bold bg-[#1b4321]/20 py-0.5 px-2 rounded-full">
                {lightboxImage.category || 'Site Photograph'}
              </span>
            </div>

            <div className="space-y-1.5">
              <h3 className="text-xl font-bold font-tech text-white leading-tight">
                {lightboxImage.title}
              </h3>
              <p className="text-[10px] font-mono text-accent">
                Site Node Identifier: {lightboxImage.metric || 'VERIFIED_OK'}
              </p>
            </div>

            <p className="text-xs text-white/70 leading-relaxed font-sans">
              {lightboxImage.desc ||
                'Comprehensive site documentation validated by the Star 7 technical supervisor. The installation matches high-density heat-resistant specs.'}
            </p>
          </div>

          {/* Technical Status Readout */}
          <div className="space-y-3 pt-6 border-t border-white/10">
            <div className="grid grid-cols-2 gap-3 text-[9px] font-mono text-white/50">
              <div>
                <span>SAFETY RATING:</span>
                <span className="text-emerald-500 font-bold block">100% NOMINAL</span>
              </div>
              <div>
                <span>COMPLIANCE:</span>
                <span className="text-accent font-bold block">ISO 9001 APPROVED</span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="w-full py-2.5 bg-[#1b4321] hover:bg-accent text-white hover:text-neutral-950 text-xs font-tech font-bold rounded-xl transition-all duration-300 uppercase tracking-wider cursor-pointer"
            >
              Close Inspector
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
