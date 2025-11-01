import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ShoppingBag } from 'lucide-react';
import { useI18n } from '@/lib/i18n';
import { useToast } from '@/hooks/use-toast';
import { useIsMobile } from '@/hooks/use-mobile';

interface ProductCardProps {
  id: string;
  slug: string;
  title: string;
  price: number;
  currency: string;
  image: string;
  isNew?: boolean;
  onSale?: boolean;
}

export const ProductCard = ({
  slug,
  title,
  price,
  currency,
  image,
  isNew,
  onSale,
}: ProductCardProps) => {
  const { t } = useI18n();
  const { toast } = useToast();
  const isMobile = useIsMobile();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    toast({
      title: t('product.addToCart'),
      description: `${title} ${t('product.addToCart').toLowerCase()}`,
    });
  };

  return (
    <div className="group flex flex-col h-full">
      <Link to={`/product/${slug}`} className="block flex-1">
        <div className="relative overflow-hidden rounded-sm bg-secondary mb-3 aspect-[3/4]">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {(isNew || onSale) && (
            <div className="absolute top-2 left-2 flex gap-1.5 z-10">
              {isNew && <Badge className="bg-accent text-accent-foreground text-[10px] px-2 py-0.5">New</Badge>}
              {onSale && <Badge variant="destructive" className="text-[10px] px-2 py-0.5">Sale</Badge>}
            </div>
          )}
          
          {/* Add to Cart Button - always visible on mobile, hover on desktop */}
          <div className={`absolute inset-x-0 bottom-0 p-2 bg-gradient-to-t from-black/60 to-transparent transition-all duration-300 ${
            isMobile ? 'opacity-100' : 'opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0'
          }`}>
            <Button
              onClick={handleAddToCart}
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-medium shadow-lg text-[10px] md:text-xs py-1.5"
              size="sm"
            >
              <ShoppingBag className="h-3 w-3 md:h-4 md:w-4 mr-1.5" />
              {t('product.addToCart')}
            </Button>
          </div>
        </div>
      </Link>
      
      <div className="space-y-1 px-1">
        <Link to={`/product/${slug}`}>
          <h3 className="font-medium text-foreground group-hover:text-accent transition-colors text-sm md:text-base line-clamp-2">
            {title}
          </h3>
        </Link>
        <p className="text-xs md:text-sm font-semibold text-accent">
          {price} {currency}
        </p>
      </div>
    </div>
  );
};
