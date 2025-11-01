import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'ro' | 'ru';

interface I18nContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    'nav.home': 'Home',
    'nav.shop': 'Shop',
    'nav.lookbook': 'Lookbook',
    'nav.sisters': 'Sisters',
    'nav.showroom': 'Showroom',
    'nav.about': 'About',
    'nav.sizeGuide': 'Size Guide',
    'nav.faq': 'FAQ',
    'nav.contact': 'Contact',
    'cta.shopNow': 'Shop Now',
    'cta.bookFitting': 'Book a Fitting',
    'cta.viewCollection': 'View Collection',
    'cta.learnMore': 'Learn More',
    'footer.madeInMd': 'Made in Moldova with love',
    'footer.followUs': 'Follow Us',
    'home.hero.title': 'Timeless Elegance',
    'home.hero.subtitle': 'Contemporary fashion crafted with heritage',
    'shop.filters.all': 'All',
    'shop.filters.category': 'Category',
    'shop.filters.size': 'Size',
    'shop.filters.color': 'Color',
    'shop.filters.sort': 'Sort By',
    'shop.filters.inShowroom': 'Available in Showroom',
    'product.addToCart': 'Add to Cart',
    'product.buyNow': 'Buy Now',
    'product.materials': 'Materials',
    'product.care': 'Care Instructions',
    'product.sizeGuide': 'Size Guide',
    'showroom.title': 'Visit Our Showroom',
    'showroom.bookingForm.title': 'Book Your Fitting',
    'showroom.bookingForm.name': 'Name',
    'showroom.bookingForm.email': 'Email',
    'showroom.bookingForm.phone': 'Phone',
    'showroom.bookingForm.date': 'Preferred Date',
    'showroom.bookingForm.submit': 'Book Appointment',
  },
  ro: {
    'nav.home': 'Acasă',
    'nav.shop': 'Magazin',
    'nav.lookbook': 'Lookbook',
    'nav.sisters': 'Sisters',
    'nav.showroom': 'Showroom',
    'nav.about': 'Despre',
    'nav.sizeGuide': 'Ghid Mărimi',
    'nav.faq': 'Întrebări',
    'nav.contact': 'Contact',
    'cta.shopNow': 'Cumpără Acum',
    'cta.bookFitting': 'Rezervă o Probă',
    'cta.viewCollection': 'Vezi Colecția',
    'cta.learnMore': 'Află Mai Mult',
    'footer.madeInMd': 'Făcut în Moldova cu dragoste',
    'footer.followUs': 'Urmărește-ne',
    'home.hero.title': 'Eleganță Atemporală',
    'home.hero.subtitle': 'Modă contemporană creată cu patrimoniu',
    'shop.filters.all': 'Toate',
    'shop.filters.category': 'Categorie',
    'shop.filters.size': 'Mărime',
    'shop.filters.color': 'Culoare',
    'shop.filters.sort': 'Sortare',
    'shop.filters.inShowroom': 'Disponibil în Showroom',
    'product.addToCart': 'Adaugă în Coș',
    'product.buyNow': 'Cumpără Acum',
    'product.materials': 'Materiale',
    'product.care': 'Instrucțiuni de Îngrijire',
    'product.sizeGuide': 'Ghid Mărimi',
    'showroom.title': 'Vizitează Showroom-ul Nostru',
    'showroom.bookingForm.title': 'Rezervă Proba Ta',
    'showroom.bookingForm.name': 'Nume',
    'showroom.bookingForm.email': 'Email',
    'showroom.bookingForm.phone': 'Telefon',
    'showroom.bookingForm.date': 'Data Preferată',
    'showroom.bookingForm.submit': 'Rezervă Programare',
  },
  ru: {
    'nav.home': 'Главная',
    'nav.shop': 'Магазин',
    'nav.lookbook': 'Лукбук',
    'nav.sisters': 'Сёстры',
    'nav.showroom': 'Шоурум',
    'nav.about': 'О нас',
    'nav.sizeGuide': 'Размеры',
    'nav.faq': 'Вопросы',
    'nav.contact': 'Контакты',
    'cta.shopNow': 'Купить Сейчас',
    'cta.bookFitting': 'Записаться на Примерку',
    'cta.viewCollection': 'Смотреть Коллекцию',
    'cta.learnMore': 'Узнать Больше',
    'footer.madeInMd': 'Сделано в Молдове с любовью',
    'footer.followUs': 'Подписывайтесь',
    'home.hero.title': 'Вечная Элегантность',
    'home.hero.subtitle': 'Современная мода с наследием',
    'shop.filters.all': 'Все',
    'shop.filters.category': 'Категория',
    'shop.filters.size': 'Размер',
    'shop.filters.color': 'Цвет',
    'shop.filters.sort': 'Сортировка',
    'shop.filters.inShowroom': 'Доступно в Шоуруме',
    'product.addToCart': 'В Корзину',
    'product.buyNow': 'Купить Сейчас',
    'product.materials': 'Материалы',
    'product.care': 'Уход',
    'product.sizeGuide': 'Размеры',
    'showroom.title': 'Посетите Наш Шоурум',
    'showroom.bookingForm.title': 'Забронировать Примерку',
    'showroom.bookingForm.name': 'Имя',
    'showroom.bookingForm.email': 'Email',
    'showroom.bookingForm.phone': 'Телефон',
    'showroom.bookingForm.date': 'Предпочтительная Дата',
    'showroom.bookingForm.submit': 'Забронировать',
  },
};

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export const I18nProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <I18nContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = () => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within I18nProvider');
  }
  return context;
};
