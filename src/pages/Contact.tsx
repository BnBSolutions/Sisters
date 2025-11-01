import { Mail, Phone, MapPin } from 'lucide-react';
import { useI18n } from '@/lib/i18n';

const Contact = () => {
  const { t } = useI18n();

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif mb-4">{t('nav.contact')}</h1>
          <p className="text-lg text-muted-foreground">Get in touch with us</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-secondary rounded-sm">
            <Mail className="h-8 w-8 mx-auto mb-4 text-accent" />
            <h3 className="font-semibold mb-2">Email</h3>
            <a
              href="mailto:info@sisters.md"
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              info@sisters.md
            </a>
          </div>

          <div className="text-center p-6 bg-secondary rounded-sm">
            <Phone className="h-8 w-8 mx-auto mb-4 text-accent" />
            <h3 className="font-semibold mb-2">Phone</h3>
            <a
              href="tel:+37360123456"
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              +373 60 123 456
            </a>
          </div>

          <div className="text-center p-6 bg-secondary rounded-sm">
            <MapPin className="h-8 w-8 mx-auto mb-4 text-accent" />
            <h3 className="font-semibold mb-2">Showroom</h3>
            <p className="text-muted-foreground text-sm">
              31 August 1989 Street, nr. 78
              <br />
              Chișinău, Moldova
            </p>
          </div>
        </div>

        <div className="mt-12 text-center max-w-2xl mx-auto">
          <h2 className="text-2xl font-serif mb-4">Business Hours</h2>
          <div className="space-y-2 text-muted-foreground">
            <p>Monday - Friday: 10:00 - 19:00</p>
            <p>Saturday: 11:00 - 17:00</p>
            <p>Sunday: By appointment only</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
