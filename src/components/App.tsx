import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import '../i18n';
import Header from './Header';
import Hero from './Hero';
import MenuSection from './Menu';
import Gallery from './Gallery';
import Contact from './Contact';
import Footer from './Footer';
import type { Language } from '../types';

const App: React.FC = () => {
  const { i18n } = useTranslation();
  const [currentLang, setCurrentLang] = useState<Language>('he');

  const rtlLangs: Language[] = ['ar', 'he'];

  const handleLangChange = (lang: Language) => {
    setCurrentLang(lang);
    i18n.changeLanguage(lang);
    const dir = rtlLangs.includes(lang) ? 'rtl' : 'ltr';
    document.documentElement.dir = dir;
    document.documentElement.lang = lang;
  };

  useEffect(() => {
    // Set initial RTL for Hebrew
    document.documentElement.dir = 'rtl';
    document.documentElement.lang = 'he';
  }, []);

  return (
    <div className="min-h-screen">
      <Header currentLang={currentLang} onLangChange={handleLangChange} />
      <main>
        <Hero />
        <MenuSection />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
