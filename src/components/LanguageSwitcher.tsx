import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Globe } from 'lucide-react';

const languages = [
  { code: 'en', name: 'English' },
  { code: 'ru', name: 'Русский' },
  { code: 'fr', name: 'Français' },
  { code: 'de', name: 'Deutsch' },
  { code: 'es', name: 'Español' },
] as const;

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="relative group">
      <button
        className="flex items-center gap-2 px-3 py-2 rounded-xl bg-[#1c1c1e] text-white/70 hover:text-white transition-colors"
      >
        <Globe size={16} />
        <span className="text-sm hidden sm:inline">{languages.find(l => l.code === language)?.name}</span>
      </button>
      
      <div className="absolute right-0 mt-2 py-1 bg-[#1c1c1e] rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 min-w-[120px]">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className={`w-full px-4 py-2 text-left text-sm ${
              language === lang.code
                ? 'text-white bg-white/10'
                : 'text-white/70 hover:text-white hover:bg-white/5'
            }`}
          >
            {lang.name}
          </button>
        ))}
      </div>
    </div>
  );
}