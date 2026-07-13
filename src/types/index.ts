export interface MenuSize {
  label: string; // translation key e.g. "menu.size.small"
  price: number;
}

export interface MenuItem {
  id: string;
  nameKey: string;
  descriptionKey: string;
  image: string;
  sizes: MenuSize[];
  emoji: string;
}

export type Language = 'ar' | 'he' | 'en';
