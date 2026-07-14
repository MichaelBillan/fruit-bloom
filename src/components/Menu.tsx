import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { MessageCircle, ShoppingCart } from 'lucide-react';
import { menuItems } from '../data/menu';

const WHATSAPP_NUMBER = '9720527749114';

const MenuSection: React.FC = () => {
  const { t } = useTranslation();

  const getSushiDetail = (sizeKey: string) => {
    if (sizeKey === 'menu.size.small') return t('menu.size_detail.sushi_small');
    if (sizeKey === 'menu.size.medium') return t('menu.size_detail.sushi_medium');
    if (sizeKey === 'menu.size.large') return t('menu.size_detail.sushi_large');
    return null;
  };

  const buildWhatsAppMessage = (itemName: string, size: string, price: number) => {
    const msg = encodeURIComponent(`مرحباً، أريد الطلب:\n🛒 ${itemName} - ${size} - ${price}₪`);
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;
  };

  return (
    <section id="menu" className="py-24 px-4 sm:px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 20% 50%, rgba(200,151,42,0.06) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(46,125,50,0.05) 0%, transparent 60%)',
        }}
      />

      <div className="max-w-7xl mx-auto relative">
        {/* Section header */}
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
            ✨ {t('menu.title')}
          </span>
          <h2 className="section-title text-gold-gradient mb-4">{t('menu.title')}</h2>
          <p className="text-base sm:text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-muted)' }}>
            {t('menu.subtitle')}
          </p>
          <div className="mt-6 flex justify-center">
            <div className="h-px w-24 rounded-full" style={{ background: 'linear-gradient(to right, transparent, var(--gold), transparent)' }} />
          </div>
        </motion.div>

        {/* Menu cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {menuItems.map((item, index) => (
            <MenuCard
              key={item.id}
              item={item}
              index={index}
              t={t}
              getSushiDetail={getSushiDetail}
              buildWhatsAppMessage={buildWhatsAppMessage}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface MenuCardProps {
  item: (typeof menuItems)[0];
  index: number;
  t: (key: string) => string;
  getSushiDetail: (key: string) => string | null;
  buildWhatsAppMessage: (name: string, size: string, price: number) => string;
}

const MenuCard: React.FC<MenuCardProps> = ({ item, index, t, getSushiDetail, buildWhatsAppMessage }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -6 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: 'easeOut' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500"
      style={{
        background: 'white',
        border: hovered ? '1px solid rgba(200,151,42,0.4)' : '1px solid rgba(200,151,42,0.1)',
      }}
    >
      {/* Image */}
      <div className="relative overflow-hidden" style={{ height: '260px' }}>
        <motion.img
          src={item.image}
          alt={t(item.nameKey)}
          className="w-full h-full object-cover"
          animate={{ scale: hovered ? 1.07 : 1 }}
          transition={{ duration: 0.5 }}
        />
        {/* Overlay gradient */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to top, rgba(26,26,26,0.6) 0%, transparent 60%)',
          }}
        />
        {/* Emoji badge */}
        <div
          className="absolute top-4 start-4 w-12 h-12 rounded-2xl flex items-center justify-center text-2xl shadow-lg"
          style={{ background: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(8px)' }}
        >
          {item.emoji}
        </div>
        {/* Name on image */}
        <div className="absolute bottom-4 start-4">
          <h3 className="text-white font-bold text-2xl drop-shadow-lg" style={{ fontFamily: "'Playfair Display', serif" }}>
            {t(item.nameKey)}
          </h3>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--text-muted)' }}>
          {t(item.descriptionKey)}
        </p>

        {/* Sizes & Prices */}
        <div className="space-y-3 mb-6">
          {item.sizes.map((size) => {
            const sizeLabel = t(size.label);
            const sushiDetail = item.id === 'fruit-sushi' ? getSushiDetail(size.label) : null;
            return (
              <div
                key={size.label}
                className="flex items-center justify-between px-4 py-3 rounded-xl transition-colors duration-200 group/size hover:cursor-pointer"
                style={{ background: 'rgba(200,151,42,0.06)', border: '1px solid rgba(200,151,42,0.12)' }}
              >
                <div className="flex items-center gap-3">
                  <span
                    className="w-2 h-2 rounded-full flex-shrink-0"
                    style={{ background: 'var(--gold)' }}
                  />
                  <div>
                    <span className="font-medium text-sm" style={{ color: 'var(--dark)' }}>
                      {sizeLabel}
                    </span>
                    {sushiDetail && (
                      <span className="text-xs ms-2" style={{ color: 'var(--text-muted)' }}>
                        ({sushiDetail})
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-bold text-lg" style={{ color: 'var(--gold-dark)' }}>
                    {size.price}₪
                  </span>
                  <a
                    href={buildWhatsAppMessage(t(item.nameKey), sizeLabel, size.price)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cart-shine-btn w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 relative overflow-hidden"
                    style={{ background: '#25D366', color: 'white' }}
                    title={t('menu.order_now')}
                  >
                    <ShoppingCart size={14} />
                    <span className="cart-shine" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Main order button */}
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hello, I would like to order: ${t(item.nameKey)}`)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm relative overflow-hidden"
        >
          <MessageCircle size={17} />
          {t('menu.order_now')}
          <span className="cart-shine" />
        </a>
      </div>
    </motion.div>
  );
};

export default MenuSection;
