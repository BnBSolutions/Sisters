import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useI18n } from '@/lib/i18n';
import { useToast } from '@/hooks/use-toast';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { MapPin, Clock, Phone } from 'lucide-react';

const bookingSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(6, 'Phone number is required'),
  date: z.string().min(1, 'Please select a date'),
});

type BookingForm = z.infer<typeof bookingSchema>;

const Showroom = () => {
  const { t } = useI18n();
  const { toast } = useToast();

  const form = useForm<BookingForm>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      date: '',
    },
  });

  const onSubmit = (data: BookingForm) => {
    console.log('Booking submitted:', data);
    toast({
      title: 'Booking Submitted!',
      description: 'We will contact you shortly to confirm your appointment.',
    });
    form.reset();
  };

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif mb-4">{t('showroom.title')}</h1>
          <p className="text-lg text-muted-foreground">
            Experience our collection in person and get personalized styling advice
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Location Info */}
          <div className="space-y-8">
            <div className="aspect-video rounded-sm overflow-hidden bg-secondary">
              <img
                src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1200&q=80"
                alt="Showroom interior"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <MapPin className="h-6 w-6 text-accent flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Location</h3>
                  <p className="text-muted-foreground">
                    31 August 1989 Street, nr. 78
                    <br />
                    Chișinău, Moldova
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Clock className="h-6 w-6 text-accent flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Hours</h3>
                  <p className="text-muted-foreground">
                    Monday - Friday: 10:00 - 19:00
                    <br />
                    Saturday: 11:00 - 17:00
                    <br />
                    Sunday: By appointment only
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone className="h-6 w-6 text-accent flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Contact</h3>
                  <p className="text-muted-foreground">
                    +373 60 123 456
                    <br />
                    showroom@sisters.md
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <div className="bg-secondary rounded-sm p-8">
            <h2 className="text-2xl font-serif mb-6">{t('showroom.bookingForm.title')}</h2>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('showroom.bookingForm.name')}</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('showroom.bookingForm.email')}</FormLabel>
                      <FormControl>
                        <Input type="email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('showroom.bookingForm.phone')}</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="date"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('showroom.bookingForm.date')}</FormLabel>
                      <FormControl>
                        <Input type="date" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full bg-accent hover:bg-accent/90" size="lg">
                  {t('showroom.bookingForm.submit')}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showroom;
