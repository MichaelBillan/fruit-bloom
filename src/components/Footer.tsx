import React from 'react';
import { useTranslation } from 'react-i18next';
import { Camera, MessageCircle, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative py-10 px-4"
      style={{
        background: 'linear-gradient(135deg, var(--dark) 0%, var(--dark-soft) 100%)',
        color: 'rgba(255,255,255,0.7)',
      }}
    >
      {/* Top wave */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden leading-none">
        <svg viewBox="0 0 1440 40" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-10">
          <path d="M0,20 C360,40 1080,0 1440,20 L1440,0 L0,0 Z" fill="var(--cream)" />
        </svg>
      </div>

      <div className="max-w-5xl mx-auto text-center pt-4">
        {/* Logo & Name */}
        <div className="flex flex-col items-center gap-3 mb-6">
          <img src="/logo.png" alt="Fruit Bloom" className="h-16 w-16 object-cover rounded-full opacity-90 shadow-lg" />
          <p
            className="font-bold text-2xl"
            style={{
              fontFamily: "'Playfair Display', serif",
              background: 'linear-gradient(135deg, var(--gold-light), var(--gold-dark))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Fruit Bloom
          </p>
          <p className="text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>
            {t('footer.tagline')}
          </p>
        </div>

        {/* Social links */}
        <div className="flex justify-center gap-4 mb-8">
          <a
            href="https://wa.me/9720527749114"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
            style={{ background: '#25D366', color: 'white' }}
          >
            <MessageCircle size={18} />
          </a>
          <a
            href="https://instagram.com/fruit_bloomm"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
            style={{ background: 'linear-gradient(135deg, #E1306C, #833AB4)', color: 'white' }}
          >
            <Camera size={18} />
          </a>
        </div>

        {/* Divider */}
        <div className="h-px w-32 mx-auto mb-6" style={{ background: 'rgba(200,151,42,0.3)' }} />

        {/* Copyright */}
        <p className="text-xs flex items-center justify-center gap-1" style={{ color: 'rgba(255,255,255,0.4)' }}>
          © {year} Fruit Bloom — {t('footer.rights')}
          <Heart size={12} className="inline mx-1" style={{ color: 'var(--gold)' }} />
          Maghar, Israel
        </p>
      </div>
    </footer>
  );
};

export default Footer;
