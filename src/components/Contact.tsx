import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { MessageCircle, Camera, MapPin, Truck, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 relative overflow-hidden" style={{ background: 'var(--cream)' }}>
      {/* Background decoration */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 100%, rgba(200,151,42,0.08) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-5xl mx-auto relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold mb-4 tracking-widest uppercase"
            style={{ background: 'rgba(200,151,42,0.12)', color: 'var(--gold-dark)' }}
          >
            📞 {t('contact.title')}
          </span>
          <h2 className="section-title text-gold-gradient mb-4">{t('contact.title')}</h2>
          <p className="text-base sm:text-lg max-w-xl mx-auto" style={{ color: 'var(--text-muted)' }}>
            {t('contact.subtitle')}
          </p>
          <div className="mt-6 flex justify-center">
            <div className="h-px w-24 rounded-full" style={{ background: 'linear-gradient(to right, transparent, var(--gold), transparent)' }} />
          </div>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {/* WhatsApp */}
          <motion.a
            href="https://wa.me/9720527749114"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ scale: 1.03, y: -4 }}
            className="flex items-center gap-5 p-6 rounded-3xl shadow-lg transition-shadow hover:shadow-2xl"
            style={{
              background: 'linear-gradient(135deg, #25D366, #128C7E)',
              color: 'white',
            }}
          >
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(255,255,255,0.2)' }}>
              <MessageCircle size={32} />
            </div>
            <div>
              <p className="font-bold text-xl mb-1">{t('contact.whatsapp')}</p>
              <p className="text-white/80 text-sm">{t('contact.phone')}</p>
              <p className="text-white/70 text-xs mt-1">{t('contact.orders_via')}</p>
            </div>
          </motion.a>

          {/* Instagram */}
          <motion.a
            href="https://instagram.com/fruit_bloomm"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.03, y: -4 }}
            className="flex items-center gap-5 p-6 rounded-3xl shadow-lg transition-shadow hover:shadow-2xl"
            style={{
              background: 'linear-gradient(135deg, #E1306C, #833AB4, #F77737)',
              color: 'white',
            }}
          >
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(255,255,255,0.2)' }}>
              <Camera size={32} />
            </div>
            <div>
              <p className="font-bold text-xl mb-1">{t('contact.instagram')}</p>
              <p className="text-white/80 text-sm">@fruit_bloomm</p>
              <p className="text-white/70 text-xs mt-1">{t('contact.instagram')}</p>
            </div>
          </motion.a>
        </div>

        {/* Info cards row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            {
              icon: <MapPin size={24} />,
              label: t('contact.location'),
              delay: 0.3,
            },
            {
              icon: <Truck size={24} />,
              label: t('contact.delivery'),
              delay: 0.4,
            },
            {
              icon: <Phone size={24} />,
              label: t('contact.phone'),
              delay: 0.5,
            },
          ].map((info, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: info.delay }}
              className="flex items-center gap-4 p-5 rounded-2xl"
              style={{ background: 'white', border: '1px solid rgba(200,151,42,0.15)', boxShadow: '0 2px 12px rgba(200,151,42,0.08)' }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(200,151,42,0.1)', color: 'var(--gold-dark)' }}
              >
                {info.icon}
              </div>
              <p className="font-semibold text-sm" style={{ color: 'var(--dark)' }}>
                {info.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
