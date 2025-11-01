import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ProductCard } from '@/components/shop/ProductCard';
import { mockProducts } from '@/lib/mockData';
import { Button } from '@/components/ui/button';
import { useI18n } from '@/lib/i18n';
import { Filter } from 'lucide-react';

const Shop = () => {
  const { t } = useI18n();
  const [searchParams, setSearchParams] = useSearchParams();
  const [filtersOpen, setFiltersOpen] = useState(false);

  const category = searchParams.get('category') || 'all';

  const filteredProducts =
    category === 'all'
      ? mockProducts
      : mockProducts.filter((p) => p.category === category);

  const categories = [
    { value: 'all', label: t('shop.filters.all') },
    { value: 'dresses', label: 'Dresses' },
    { value: 'tops', label: 'Tops' },
    { value: 'bottoms', label: 'Bottoms' },
    { value: 'outerwear', label: 'Outerwear' },
  ];

  return (
    <div className="min-h-screen py-4 md:py-8 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6 md:mb-8">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-serif">{t('nav.shop')}</h1>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setFiltersOpen(!filtersOpen)}
            className="md:hidden"
          >
            <Filter className="h-4 w-4 mr-2" />
            Filters
          </Button>
        </div>

        <div className="flex gap-8">
          {/* Filters Sidebar */}
          <aside
            className={`${
              filtersOpen ? 'block' : 'hidden'
            } md:block w-full md:w-64 flex-shrink-0 mb-6 md:mb-0`}
          >
            <div className="md:sticky md:top-24 space-y-6 bg-secondary md:bg-transparent p-4 md:p-0 rounded-sm">
              <div>
                <h3 className="font-semibold mb-3 text-sm md:text-base">{t('shop.filters.category')}</h3>
                <div className="flex flex-col gap-2">
                  {categories.map((cat) => (
                    <button
                      key={cat.value}
                      onClick={() => {
                        if (cat.value === 'all') {
                          searchParams.delete('category');
                        } else {
                          searchParams.set('category', cat.value);
                        }
                        setSearchParams(searchParams);
                        setFiltersOpen(false);
                      }}
                      className={`text-left px-3 py-2 rounded transition-colors text-sm ${
                        category === cat.value
                          ? 'bg-accent text-accent-foreground'
                          : 'hover:bg-secondary md:hover:bg-muted'
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            <p className="text-xs md:text-sm text-muted-foreground mb-4 md:mb-6">
              {filteredProducts.length} products
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
