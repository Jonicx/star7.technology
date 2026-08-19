import React from 'react';
import { MapPin, Mail, Phone, Map, ShieldCheck, AlertTriangle } from 'lucide-react';
import { Language, translations } from '../i18n';
import { InteractiveCard } from './InteractiveCard';

interface ContactProps {
  formData: {
    name: string;
    email: string;
    subject: string;
    message: string;
  };
  handleInputChange: (key: string, val: string) => void;
  handleFormSubmit: (e: React.FormEvent) => void;
  formStatus: string;
  lang: Language;
}

export const Contact: React.FC<ContactProps> = ({
  formData,
  handleInputChange,
  handleFormSubmit,
  formStatus,
  lang,
}) => {
  const t = translations[lang];

  return (
    <section id="contact" className="px-6 lg:px-16 py-20 bg-neutral-50/40 border-b border-neutral-100">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center max-w-xl mx-auto space-y-3">
          <div className="text-xs font-mono text-[#1b4321] font-bold uppercase tracking-wider bg-neutral-100 rounded-full px-3 py-1 w-fit mx-auto">
            {t.contactBadge}
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-neutral-950 font-tech">
            {t.contactTitle}
          </h2>
          <p className="text-neutral-500 text-xs sm:text-sm">
            {t.contactDesc}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Info card (Left) */}
          <div className="lg:col-span-5 space-y-4">
            <InteractiveCard className="rounded-2xl p-6 space-y-5 text-left" glassStyle="premium">
              <h4 className="font-bold text-neutral-950 font-tech uppercase text-sm tracking-wider">{t.officeCoordinates}</h4>

              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3 text-left">
                  <MapPin className="text-[#1b4321] w-4 h-4 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-neutral-800 block font-tech">{t.primaryBase}</span>
                    <p className="text-neutral-500 mt-0.5 font-sans">Kigali, Rwanda</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-left">
                  <Mail className="text-[#1b4321] w-4 h-4 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-neutral-800 block font-tech">{t.digitalMailbox}</span>
                    <p className="text-neutral-500 mt-0.5 font-sans">info@star7technology.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-left">
                  <Phone className="text-[#1b4321] w-4 h-4 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-neutral-800 block font-tech">{t.commTrunk}</span>
                    <p className="text-neutral-500 mt-0.5 font-sans">+250 788 300 000</p>
                  </div>
                </div>
              </div>
            </InteractiveCard>

            {/* Map graphic card */}
            <InteractiveCard className="rounded-2xl p-6 space-y-2 text-center relative overflow-hidden min-h-[140px] flex flex-col justify-center" glassStyle="premium" glowColor="rgba(237, 168, 0, 0.15)">
              <div className="absolute inset-0 bg-neutral-100/10 opacity-65 flex items-center justify-center">
                <Map className="text-neutral-200/40 w-16 h-16 select-none" />
              </div>
              <div className="relative z-10 space-y-1">
                <span className="text-[#1b4321] font-bold text-xs uppercase tracking-wider font-mono">{t.operationsZone}</span>
                <p className="text-xs text-neutral-700 font-semibold font-sans">{t.servingDistricts}</p>
              </div>
            </InteractiveCard>
          </div>

          {/* Form panel (Right) */}
          <InteractiveCard className="lg:col-span-7 rounded-3xl p-6 sm:p-8" glassStyle="premium">
            <form onSubmit={handleFormSubmit} className="space-y-4 text-left">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[9px] font-mono text-neutral-400 uppercase tracking-wider block">{t.yourName}</label>
                  <input
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    placeholder="John Doe"
                    className="w-full text-xs border border-neutral-200/50 focus:border-[#1b4321] focus:outline-none rounded-xl p-3 bg-white/45 backdrop-blur-md text-neutral-800 font-sans"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[9px] font-mono text-neutral-400 uppercase tracking-wider block">{t.yourEmail}</label>
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="john@example.com"
                    className="w-full text-xs border border-neutral-200/50 focus:border-[#1b4321] focus:outline-none rounded-xl p-3 bg-white/45 backdrop-blur-md text-neutral-800 font-sans"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[9px] font-mono text-neutral-400 uppercase tracking-wider block">{t.subject}</label>
                <input
                  required
                  type="text"
                  value={formData.subject}
                  onChange={(e) => handleInputChange('subject', e.target.value)}
                  placeholder={lang === 'rw' ? 'Guhuza ibikorwa by\'umushinga / Amasezerano' : 'Project RFP/Maintenance contract'}
                  className="w-full text-xs border border-neutral-200/50 focus:border-[#1b4321] focus:outline-none rounded-xl p-3 bg-white/45 backdrop-blur-md text-neutral-800 font-sans"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[9px] font-mono text-neutral-400 uppercase tracking-wider block">{t.messageBody}</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  placeholder={lang === 'rw' ? 'Sobanura neza ibikenewe mu mushinga wawe hano...' : 'Outline your engineering scope, timeline, and parameters here...'}
                  className="w-full text-xs border border-neutral-200/50 focus:border-[#1b4321] focus:outline-none rounded-xl p-3 bg-white/45 backdrop-blur-md text-neutral-800 resize-none font-sans"
                ></textarea>
              </div>

              {/* Button & Alerts */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={formStatus === 'loading'}
                  className="w-full bg-neutral-950 text-white font-tech hover:text-[#1b4321] hover:shadow-[0_0_15px_rgba(27,67,33,0.3)] border border-neutral-950 hover:border-[#1b4321] py-3 px-6 rounded-xl font-bold transition-all duration-300 disabled:opacity-50 text-xs sm:text-sm uppercase tracking-wider cursor-pointer"
                >
                  {formStatus === 'loading' ? t.transmitting : t.transmitMessage}
                </button>
              </div>

              {formStatus === 'success' && (
                <div className="p-3 bg-emerald-50 border border-emerald-100 text-emerald-800 text-xs rounded-xl font-mono flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 shrink-0 text-emerald-600" />
                  <span>{t.transmitSuccess}</span>
                </div>
              )}

              {formStatus === 'error' && (
                <div className="p-3 bg-red-50 border border-red-100 text-red-800 text-xs rounded-xl font-mono flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 shrink-0 text-red-600" />
                  <span>{t.transmitError}</span>
                </div>
              )}
            </form>
          </InteractiveCard>
        </div>
      </div>
    </section>
  );
};
