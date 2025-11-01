import { Link, useLocation } from 'react-router-dom';
import { Home, ShoppingBag, BookImage, Store, User } from 'lucide-react';
import { useI18n } from '@/lib/i18n';

export const MobileNav = () => {
  const location = useLocation();
  const { t } = useI18n();

  const navItems = [
    { label: t('nav.home'), path: '/', icon: Home },
    { label: t('nav.shop'), path: '/shop', icon: ShoppingBag },
    { label: t('nav.lookbook'), path: '/lookbook', icon: BookImage },
    { label: t('nav.showroom'), path: '/showroom', icon: Store },
    { label: t('nav.about'), path: '/about', icon: User },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-background border-t border-line shadow-lg">
      <div className="grid grid-cols-5 h-16">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.path);
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center justify-center gap-1 transition-colors ${
                active ? 'text-accent' : 'text-muted-foreground'
              }`}
            >
              <Icon className={`h-5 w-5 ${active ? 'stroke-[2.5]' : ''}`} />
              <span className="text-[10px] font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};
