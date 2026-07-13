import type { MenuItem } from '../types';

export const menuItems: MenuItem[] = [
  {
    id: 'fruit-platter',
    nameKey: 'menu.platter.name',
    descriptionKey: 'menu.platter.description',
    image: '/media/fruit-platter.png',
    emoji: '🍽️',
    sizes: [
      { label: 'menu.size.small', price: 50 },
      { label: 'menu.size.medium', price: 100 },
      { label: 'menu.size.large', price: 130 },
    ],
  },
  {
    id: 'fruit-ship',
    nameKey: 'menu.ship.name',
    descriptionKey: 'menu.ship.description',
    image: '/media/fruit-ship.png',
    emoji: '🚢',
    sizes: [
      { label: 'menu.size.one_meter', price: 300 },
    ],
  },
  {
    id: 'fruit-sushi',
    nameKey: 'menu.sushi.name',
    descriptionKey: 'menu.sushi.description',
    image: '/media/fruit-sushi.png',
    emoji: '🍱',
    sizes: [
      { label: 'menu.size.small', price: 40 },
      { label: 'menu.size.medium', price: 110 },
      { label: 'menu.size.large', price: 150 },
    ],
  },
  {
    id: 'fakhfakhina',
    nameKey: 'menu.fakhfakhina.name',
    descriptionKey: 'menu.fakhfakhina.description',
    image: '/media/fakhfakhina.png',
    emoji: '🍨',
    sizes: [
      { label: 'menu.size.small', price: 10 },
      { label: 'menu.size.medium', price: 15 },
      { label: 'menu.size.large', price: 20 },
    ],
  },
];
