import { useI18n } from '@/lib/i18n';

const Sisters = () => {
  const { t } = useI18n();

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif mb-4">{t('nav.sisters')}</h1>
          <p className="text-lg text-muted-foreground">
            Where craftsmanship meets contemporary design
          </p>
        </div>

        <div className="space-y-12">
          <div className="aspect-[16/9] rounded-sm overflow-hidden bg-secondary">
            <img
              src="https://images.unsplash.com/photo-1558769132-cb1aea3c8e71?w=1400&q=80"
              alt="Sisters workspace"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-serif mb-4">Our Craft</h2>
            <p className="text-muted-foreground mb-6">
              Our studio is the heart of our brand, where each garment is carefully crafted by
              skilled artisans. We combine traditional techniques with modern design sensibilities
              to create pieces that are both timeless and contemporary.
            </p>

            <h2 className="text-3xl font-serif mb-4 mt-12">Made to Measure</h2>
            <p className="text-muted-foreground mb-6">
              We offer bespoke tailoring services for those seeking a truly personalized
              experience. Our master tailors work closely with you to create garments that fit
              perfectly and reflect your unique style.
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-12">
              <div className="aspect-square rounded-sm overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=800&q=80"
                  alt="Tailoring process"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square rounded-sm overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1558769132-cb1aea3c8e71?w=800&q=80"
                  alt="Fabric selection"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <h2 className="text-3xl font-serif mb-4">Sustainable Practices</h2>
            <p className="text-muted-foreground">
              Sustainability is at the core of our practice. We source materials responsibly, work
              with local suppliers, and ensure minimal waste in our production process. Each piece
              is made to last, designed to be worn and cherished for years to come.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sisters;
