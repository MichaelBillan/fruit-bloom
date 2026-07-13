import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { MessageCircle, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/media/hero-bg.png"
          alt="Fresh fruits background"
          className="w-full h-full object-cover"
        />
        {/* Multi-layer overlay for depth */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(135deg, rgba(26,26,26,0.75) 0%, rgba(26,26,26,0.55) 50%, rgba(200,151,42,0.25) 100%)',
          }}
        />
        {/* Bottom gradient to blend into page */}
        <div
          className="absolute bottom-0 left-0 right-0 h-48"
          style={{
            background: 'linear-gradient(to bottom, transparent, var(--cream))',
          }}
        />
      </div>

      {/* Decorative floating circles */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${60 + i * 40}px`,
              height: `${60 + i * 40}px`,
              background: `rgba(200, 151, 42, ${0.04 + i * 0.01})`,
              border: '1px solid rgba(200,151,42,0.1)',
              top: `${10 + i * 13}%`,
              left: i % 2 === 0 ? `${5 + i * 8}%` : undefined,
              right: i % 2 !== 0 ? `${5 + i * 6}%` : undefined,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.8,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto pt-20">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium mb-8"
          style={{
            background: 'rgba(200,151,42,0.15)',
            border: '1px solid rgba(200,151,42,0.4)',
            color: '#E8B84B',
            backdropFilter: 'blur(8px)',
          }}
        >
          {t('hero.badge')}
        </motion.div>

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1, type: 'spring', bounce: 0.35 }}
          className="flex justify-center mb-6"
        >
          <div className="float-animation">
            <img
              src="/logo.png"
              alt="Fruit Bloom"
              className="h-36 w-36 sm:h-48 sm:w-48 object-cover rounded-full drop-shadow-2xl"
              style={{ boxShadow: '0 0 0 4px rgba(200,151,42,0.4), 0 20px 60px rgba(0,0,0,0.4)' }}
            />
          </div>
        </motion.div>

        {/* Business name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="font-bold mb-3"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(2.8rem, 7vw, 5rem)',
            background: 'linear-gradient(135deg, #E8B84B, #C8972A, #FFD875, #9A7220)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            lineHeight: 1.1,
          }}
        >
          Fruit Bloom
        </motion.h1>

        {/* Motto */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="text-lg sm:text-xl font-light mb-10"
          style={{ color: 'rgba(255,255,255,0.85)', letterSpacing: '0.05em' }}
        >
          {t('hero.motto')}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="https://wa.me/9720527749114"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp pulse-gold flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-base shadow-xl"
          >
            <MessageCircle size={20} />
            {t('hero.cta_order')}
          </a>
          <a
            href="#menu"
            className="flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-base transition-all duration-300 hover:-translate-y-1"
            style={{
              background: 'rgba(255,255,255,0.1)',
              border: '1px solid rgba(255,255,255,0.35)',
              color: 'white',
              backdropFilter: 'blur(8px)',
            }}
          >
            {t('hero.cta_menu')}
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          style={{ color: 'rgba(255,255,255,0.5)' }}
        >
          <ChevronDown size={28} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
