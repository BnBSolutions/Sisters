import { useParams, Link } from 'react-router-dom';
import { mockProducts } from '@/lib/mockData';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useI18n } from '@/lib/i18n';
import { ShoppingBag, ArrowLeft } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useIsMobile } from '@/hooks/use-mobile';

const ProductDetail = () => {
  const { slug } = useParams();
  const { t } = useI18n();
  const { toast } = useToast();
  const isMobile = useIsMobile();

  const product = mockProducts.find((p) => p.slug === slug);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-serif mb-4">Product not found</h1>
          <Button asChild variant="outline">
            <Link to="/shop">Back to Shop</Link>
          </Button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    toast({
      title: 'Added to cart',
      description: `${product.title} has been added to your cart.`,
    });
  };

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="container mx-auto">
        <Button asChild variant="ghost" className="mb-6">
          <Link to="/shop">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Shop
          </Link>
        </Button>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-[3/4] rounded-sm overflow-hidden bg-secondary">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-serif mb-2">{product.title}</h1>
              <p className="text-2xl font-medium text-accent">
                {product.price} {product.currency}
              </p>
            </div>

            {product.availableInShowroom && (
              <Badge variant="secondary">{t('shop.filters.inShowroom')}</Badge>
            )}

            {/* Sizes */}
            <div>
              <h3 className="font-semibold mb-3">{t('shop.filters.size')}</h3>
              <div className="flex gap-2">
                {product.sizes.map((size) => (
                  <Button key={size} variant="outline" size="sm" className="min-w-12">
                    {size}
                  </Button>
                ))}
              </div>
              <Link to="/size-guide" className="text-sm text-accent hover:underline block mt-2">
                {t('product.sizeGuide')}
              </Link>
            </div>

            {/* Colors */}
            <div>
              <h3 className="font-semibold mb-3">{t('shop.filters.color')}</h3>
              <div className="flex gap-2">
                {product.colors.map((color) => (
                  <Button key={color} variant="outline" size="sm">
                    {color}
                  </Button>
                ))}
              </div>
            </div>

            {/* Add to Cart - Desktop only, mobile has sticky button */}
            {!isMobile && (
              <Button size="lg" className="w-full bg-accent hover:bg-accent/90" onClick={handleAddToCart}>
                <ShoppingBag className="mr-2 h-5 w-5" />
                {t('product.addToCart')}
              </Button>
            )}

            {/* Materials & Care */}
            <div className="space-y-4 pt-6 border-t border-line">
              <div>
                <h3 className="font-semibold mb-2">{t('product.materials')}</h3>
                <p className="text-sm text-muted-foreground">{product.materials}</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">{t('product.care')}</h3>
                <p className="text-sm text-muted-foreground">{product.care}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Sticky Add to Cart Button */}
        {isMobile && (
          <div className="fixed bottom-16 left-0 right-0 z-40 p-4 bg-background border-t border-line shadow-lg">
            <Button 
              size="lg" 
              className="w-full bg-accent hover:bg-accent/90" 
              onClick={handleAddToCart}
            >
              <ShoppingBag className="mr-2 h-5 w-5" />
              {t('product.addToCart')} - {product.price} {product.currency}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
