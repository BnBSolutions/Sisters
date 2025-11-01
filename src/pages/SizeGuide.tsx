import { useI18n } from '@/lib/i18n';

const SizeGuide = () => {
  const { t } = useI18n();

  const sizes = [
    { size: 'XS', bust: '82-86', waist: '64-68', hips: '90-94' },
    { size: 'S', bust: '86-90', waist: '68-72', hips: '94-98' },
    { size: 'M', bust: '90-94', waist: '72-76', hips: '98-102' },
    { size: 'L', bust: '94-98', waist: '76-80', hips: '102-106' },
    { size: 'XL', bust: '98-102', waist: '80-84', hips: '106-110' },
  ];

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif mb-4">{t('nav.sizeGuide')}</h1>
          <p className="text-lg text-muted-foreground">Find your perfect fit</p>
        </div>

        <div className="space-y-12">
          <div>
            <h2 className="text-2xl font-serif mb-6">Women's Measurements (cm)</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-line">
                    <th className="text-left py-3 px-4">Size</th>
                    <th className="text-left py-3 px-4">Bust</th>
                    <th className="text-left py-3 px-4">Waist</th>
                    <th className="text-left py-3 px-4">Hips</th>
                  </tr>
                </thead>
                <tbody>
                  {sizes.map((row) => (
                    <tr key={row.size} className="border-b border-line">
                      <td className="py-3 px-4 font-medium">{row.size}</td>
                      <td className="py-3 px-4 text-muted-foreground">{row.bust}</td>
                      <td className="py-3 px-4 text-muted-foreground">{row.waist}</td>
                      <td className="py-3 px-4 text-muted-foreground">{row.hips}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-secondary p-8 rounded-sm">
            <h2 className="text-2xl font-serif mb-4">How to Measure</h2>
            <div className="space-y-4 text-muted-foreground">
              <div>
                <strong className="text-foreground">Bust:</strong> Measure around the fullest part
                of your bust, keeping the tape parallel to the floor.
              </div>
              <div>
                <strong className="text-foreground">Waist:</strong> Measure around your natural
                waistline, keeping the tape comfortably loose.
              </div>
              <div>
                <strong className="text-foreground">Hips:</strong> Measure around the fullest part
                of your hips, approximately 20cm below your waist.
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-muted-foreground mb-4">
              Still unsure about sizing? Visit our showroom for personalized fitting advice.
            </p>
            <a href="/showroom" className="text-accent hover:underline">
              {t('cta.bookFitting')}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SizeGuide;
