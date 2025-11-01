import { Link } from 'react-router-dom';
import { Instagram, Facebook, Mail } from 'lucide-react';
import { useI18n } from '@/lib/i18n';

export const Footer = () => {
  const { t } = useI18n();

  return (
    <footer className="border-t border-line bg-background mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-serif font-bold mb-4">SISTERS</h3>
            <p className="text-sm text-muted-foreground">{t('footer.madeInMd')}</p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-semibold mb-4">{t('nav.shop')}</h4>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <Link to="/shop?category=dresses" className="hover:text-accent transition-colors">
                Dresses
              </Link>
              <Link to="/shop?category=tops" className="hover:text-accent transition-colors">
                Tops
              </Link>
              <Link to="/shop?category=bottoms" className="hover:text-accent transition-colors">
                Bottoms
              </Link>
              <Link to="/shop?category=outerwear" className="hover:text-accent transition-colors">
                Outerwear
              </Link>
            </div>
          </div>

          {/* Information */}
          <div>
            <h4 className="font-semibold mb-4">Information</h4>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <Link to="/about" className="hover:text-accent transition-colors">
                {t('nav.about')}
              </Link>
              <Link to="/size-guide" className="hover:text-accent transition-colors">
                {t('nav.sizeGuide')}
              </Link>
              <Link to="/faq" className="hover:text-accent transition-colors">
                {t('nav.faq')}
              </Link>
              <Link to="/contact" className="hover:text-accent transition-colors">
                {t('nav.contact')}
              </Link>
            </div>
          </div>

          {/* Follow Us */}
          <div>
            <h4 className="font-semibold mb-4">{t('footer.followUs')}</h4>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a href="mailto:info@sisters.md" className="hover:text-accent transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-line mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>© 2024 SISTERS. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link to="/legal/privacy" className="hover:text-accent transition-colors">
              Privacy Policy
            </Link>
            <Link to="/legal/terms" className="hover:text-accent transition-colors">
              Terms of Service
            </Link>
            <Link to="/legal/returns" className="hover:text-accent transition-colors">
              Returns
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
