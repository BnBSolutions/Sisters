import { useI18n } from '@/lib/i18n';

const About = () => {
  const { t } = useI18n();

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif mb-4">{t('nav.about')}</h1>
          <p className="text-lg text-muted-foreground">Our story and values</p>
        </div>

        <div className="space-y-12">
          <div className="aspect-[21/9] rounded-sm overflow-hidden bg-secondary">
            <img
              src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1400&q=80"
              alt="Brand story"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-serif mb-4">Our Story</h2>
            <p className="text-muted-foreground mb-6">
              Founded in the heart of Moldova, SISTERS represents a fusion of heritage
              craftsmanship and contemporary design. Our journey began with a simple vision: to
              create fashion that transcends trends and stands the test of time.
            </p>

            <h2 className="text-3xl font-serif mb-4 mt-12">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-8 my-8">
              <div className="text-center">
                <h3 className="font-serif text-xl mb-3">Quality</h3>
                <p className="text-sm text-muted-foreground">
                  We use only the finest materials and employ skilled artisans to ensure every
                  piece meets our exacting standards.
                </p>
              </div>
              <div className="text-center">
                <h3 className="font-serif text-xl mb-3">Sustainability</h3>
                <p className="text-sm text-muted-foreground">
                  Our commitment to sustainable practices extends from sourcing to production,
                  ensuring minimal environmental impact.
                </p>
              </div>
              <div className="text-center">
                <h3 className="font-serif text-xl mb-3">Timelessness</h3>
                <p className="text-sm text-muted-foreground">
                  We design pieces that you'll cherish for years, creating a wardrobe that evolves
                  with you.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-serif mb-4 mt-12">Made in Moldova</h2>
            <p className="text-muted-foreground">
              Every SISTERS piece is proudly made in Moldova, supporting local artisans and
              preserving traditional craftsmanship techniques. We believe in creating not just
              beautiful fashion, but also meaningful employment and sustainable growth for our
              community.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
