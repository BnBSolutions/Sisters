import { lookbookImages } from '@/lib/mockData';
import { useI18n } from '@/lib/i18n';

const Lookbook = () => {
  const { t } = useI18n();

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif mb-4">{t('nav.lookbook')}</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our latest collections and styling inspiration
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {lookbookImages.map((item) => (
            <div key={item.id} className="group relative overflow-hidden rounded-sm aspect-[3/4]">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <h3 className="text-white text-2xl font-serif">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Lookbook;
