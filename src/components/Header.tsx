import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Language } from '../types';

const languages: { code: Language; label: string; dir: 'rtl' | 'ltr' }[] = [
  { code: 'ar', label: 'العربية', dir: 'rtl' },
  { code: 'he', label: 'עברית', dir: 'rtl' },
  { code: 'en', label: 'English', dir: 'ltr' },
];

interface HeaderProps {
  currentLang: Language;
  onLangChange: (lang: Language) => void;
}

const Header: React.FC<HeaderProps> = ({ currentLang, onLangChange }) => {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { key: 'nav.home', href: '#home' },
    { key: 'nav.menu', href: '#menu' },
    { key: 'nav.gallery', href: '#gallery' },
    { key: 'nav.contact', href: '#contact' },
  ];

  const currentLangInfo = languages.find(l => l.code === currentLang)!;

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <img
              src="/logo.png"
              alt="Fruit Bloom Logo"
              className="h-14 w-14 object-cover rounded-full transition-transform duration-300 group-hover:scale-110 shadow-md"
            />
            <div className="hidden sm:block">
              <p className="font-bold text-lg leading-tight" style={{ color: 'var(--gold-dark)' }}>
                Fruit Bloom
              </p>
              <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
                {t('hero.motto')}
              </p>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <a
                key={link.key}
                href={link.href}
                className="text-sm font-medium transition-all duration-200 hover:opacity-70 relative group"
                style={{ color: 'var(--dark)' }}
              >
                {t(link.key)}
                <span
                  className="absolute -bottom-1 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full"
                  style={{ background: 'var(--gold)' }}
                />
              </a>
            ))}
          </nav>

          {/* Right controls */}
          <div className="flex items-center gap-3">
            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-full text-sm font-medium transition-all duration-200 border hover:shadow-md"
                style={{ borderColor: 'var(--gold)', color: 'var(--gold-dark)' }}
              >
                <Globe size={16} />
                <span className="hidden sm:inline">{currentLangInfo.label}</span>
                <span className="sm:hidden">{currentLang.toUpperCase()}</span>
              </button>
              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-12 end-0 glass rounded-xl shadow-xl overflow-hidden min-w-[140px] border"
                    style={{ borderColor: 'rgba(200,151,42,0.2)' }}
                  >
                    {languages.map(lang => (
                      <button
                        key={lang.code}
                        onClick={() => { onLangChange(lang.code); setLangOpen(false); }}
                        className={`w-full px-4 py-3 text-sm text-start transition-colors duration-150 flex items-center gap-2 ${
                          currentLang === lang.code
                            ? 'font-bold'
                            : 'hover:bg-amber-50'
                        }`}
                        style={{
                          color: currentLang === lang.code ? 'var(--gold)' : 'var(--dark)',
                          background: currentLang === lang.code ? 'rgba(200,151,42,0.08)' : undefined,
                        }}
                      >
                        {currentLang === lang.code && <span className="text-xs">✓</span>}
                        {lang.label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Mobile menu toggle */}
            <button
              className="md:hidden p-2 rounded-lg transition-colors"
              style={{ color: 'var(--gold-dark)' }}
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glass border-t overflow-hidden"
            style={{ borderColor: 'rgba(200,151,42,0.15)' }}
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map(link => {
                const sectionId = link.href.replace('#', '');
                return (
                  <button
                    key={link.key}
                    className="text-base font-medium py-2 border-b transition-colors text-start w-full"
                    style={{ color: 'var(--dark)', borderColor: 'rgba(200,151,42,0.1)', background: 'transparent' }}
                    onClick={() => {
                      setMobileOpen(false);
                      // Wait for menu close animation, then scroll
                      setTimeout(() => {
                        const el = document.getElementById(sectionId);
                        if (el) {
                          const headerOffset = 80;
                          const top = el.getBoundingClientRect().top + window.scrollY - headerOffset;
                          window.scrollTo({ top, behavior: 'smooth' });
                        }
                      }, 320);
                    }}
                  >
                    {t(link.key)}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
