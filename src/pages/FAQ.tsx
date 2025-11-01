import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { useI18n } from '@/lib/i18n';

const FAQ = () => {
  const { t } = useI18n();

  const faqs = [
    {
      question: 'Do you offer international shipping?',
      answer:
        'Currently, we ship within Moldova and to select European countries. For inquiries about shipping to other locations, please contact us directly.',
    },
    {
      question: 'What is your return policy?',
      answer:
        'We accept returns within 14 days of delivery for unworn items in original condition with tags attached. Sale items are final sale.',
    },
    {
      question: 'Can I visit your showroom without an appointment?',
      answer:
        'While walk-ins are welcome during business hours, we recommend booking an appointment to ensure we can provide you with personalized attention.',
    },
    {
      question: 'Do you offer alterations?',
      answer:
        'Yes, we provide professional alteration services for items purchased from our collection. Please contact us for pricing and availability.',
    },
    {
      question: 'How do I care for my garments?',
      answer:
        'Each piece comes with specific care instructions on the label. Generally, we recommend dry cleaning for delicate fabrics and gentle washing for cotton and linen items.',
    },
    {
      question: 'Do you offer made-to-measure services?',
      answer:
        'Yes, our studio offers bespoke tailoring services. Book a consultation at our showroom to discuss your custom piece.',
    },
  ];

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif mb-4">{t('nav.faq')}</h1>
          <p className="text-lg text-muted-foreground">Frequently asked questions</p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border border-line rounded-sm px-6">
              <AccordionTrigger className="text-left hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 text-center p-8 bg-secondary rounded-sm">
          <h2 className="text-2xl font-serif mb-4">Still have questions?</h2>
          <p className="text-muted-foreground mb-6">
            We're here to help. Contact us and we'll get back to you as soon as possible.
          </p>
          <a href="/contact" className="text-accent hover:underline">
            {t('nav.contact')}
          </a>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
