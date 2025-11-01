import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useI18n } from '@/lib/i18n';
import { ArrowRight } from 'lucide-react';

const Home = () => {
  const { t } = useI18n();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center bg-secondary overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=2000&q=80)',
          }}
        />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-serif mb-6 animate-fade-in">
            {t('home.hero.title')}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in">
            {t('home.hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
              <Link to="/shop">
                {t('cta.shopNow')}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/showroom">{t('cta.bookFitting')}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-12">
            {t('cta.viewCollection')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Dresses',
                image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80',
                link: '/shop?category=dresses',
              },
              {
                title: 'Tops & Blouses',
                image: 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=800&q=80',
                link: '/shop?category=tops',
              },
              {
                title: 'Outerwear',
                image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=800&q=80',
                link: '/shop?category=outerwear',
              },
            ].map((category) => (
              <Link
                key={category.title}
                to={category.link}
                className="group relative h-96 overflow-hidden rounded-sm hover-lift"
              >
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                  <h3 className="text-white text-2xl font-serif">{category.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 px-4 bg-secondary">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-6">Crafted with Heritage</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Every piece is thoughtfully designed and crafted in Moldova, blending contemporary
            aesthetics with traditional craftsmanship. We believe in timeless fashion that
            transcends seasons.
          </p>
          <Button asChild variant="outline" size="lg">
            <Link to="/about">{t('cta.learnMore')}</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
