import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play } from 'lucide-react';

interface GalleryItem {
  type: 'image' | 'video';
  src: string;
  alt: string;
  span?: 'normal' | 'wide' | 'tall';
}

const galleryItems: GalleryItem[] = [
  { type: 'image', src: '/media/fruit-platter.png', alt: 'Fruit Platter', span: 'tall' },
  { type: 'image', src: '/media/fruit-sushi.png', alt: 'Fruit Sushi', span: 'normal' },
  { type: 'image', src: '/media/fakhfakhina.png', alt: 'Fakhfakhina', span: 'normal' },
  { type: 'image', src: '/media/fruit-ship.png', alt: 'Fruit Ship', span: 'wide' },
];

const Gallery: React.FC = () => {
  const { t } = useTranslation();
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const [lightboxType, setLightboxType] = useState<'image' | 'video'>('image');

  const openLightbox = (item: GalleryItem) => {
    setLightboxSrc(item.src);
    setLightboxType(item.type);
  };

  return (
    <section id="gallery" className="py-24 px-4 sm:px-6 relative" style={{ background: 'var(--cream-dark)' }}>
      {/* Decorative top wave */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden leading-none">
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-16">
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,0 L0,0 Z" fill="var(--cream)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold mb-4 tracking-widest uppercase"
            style={{ background: 'rgba(200,151,42,0.12)', color: 'var(--gold-dark)' }}
          >
            📸 {t('gallery.title')}
          </span>
          <h2 className="section-title text-gold-gradient mb-4">{t('gallery.title')}</h2>
          <p className="text-base sm:text-lg max-w-xl mx-auto" style={{ color: 'var(--text-muted)' }}>
            {t('gallery.subtitle')}
          </p>
          <div className="mt-6 flex justify-center">
            <div className="h-px w-24 rounded-full" style={{ background: 'linear-gradient(to right, transparent, var(--gold), transparent)' }} />
          </div>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[220px]">
          {galleryItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-2xl overflow-hidden cursor-pointer group shadow-md hover:shadow-xl transition-shadow duration-300 ${
                item.span === 'wide' ? 'col-span-2' :
                item.span === 'tall' ? 'row-span-2' : ''
              }`}
              onClick={() => openLightbox(item)}
            >
              {item.type === 'video' ? (
                <video
                  src={item.src}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  muted
                  loop
                  playsInline
                  onMouseEnter={e => (e.currentTarget as HTMLVideoElement).play()}
                  onMouseLeave={e => { (e.currentTarget as HTMLVideoElement).pause(); (e.currentTarget as HTMLVideoElement).currentTime = 0; }}
                />
              ) : (
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              )}
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                {item.type === 'video' && (
                  <div className="w-14 h-14 rounded-full flex items-center justify-center bg-white/90 shadow-lg">
                    <Play size={22} className="ms-1" style={{ color: 'var(--gold-dark)' }} />
                  </div>
                )}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white font-semibold text-sm drop-shadow-lg">{item.alt}</span>
                </div>
              </div>
              {/* Gold corner accent */}
              <div
                className="absolute top-3 end-3 w-8 h-8 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-xs"
                style={{ background: 'rgba(200,151,42,0.9)', color: 'white' }}
              >
                🔍
              </div>
            </motion.div>
          ))}
        </div>


      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxSrc && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: 'rgba(0,0,0,0.92)', backdropFilter: 'blur(8px)' }}
            onClick={() => setLightboxSrc(null)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              className="relative max-w-4xl w-full max-h-[90vh]"
              onClick={e => e.stopPropagation()}
            >
              {lightboxType === 'image' ? (
                <img src={lightboxSrc} alt="" className="w-full h-full object-contain rounded-2xl max-h-[85vh]" />
              ) : (
                <video src={lightboxSrc} controls autoPlay className="w-full rounded-2xl max-h-[85vh]" />
              )}
              <button
                onClick={() => setLightboxSrc(null)}
                className="absolute -top-4 -end-4 w-10 h-10 rounded-full flex items-center justify-center text-white shadow-xl"
                style={{ background: 'var(--gold-dark)' }}
              >
                <X size={18} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-16">
          <path d="M0,30 C360,0 1080,60 1440,30 L1440,60 L0,60 Z" fill="var(--cream)" />
        </svg>
      </div>
    </section>
  );
};

export default Gallery;
