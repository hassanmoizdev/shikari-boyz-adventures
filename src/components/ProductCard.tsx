import { ShoppingCart, Tag } from "lucide-react";
import { Product } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-lg shadow-forest hover:shadow-golden transition-all duration-500 transform hover:-translate-y-2 bg-card">
      <div className="aspect-square overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
      </div>
      
      <div className="absolute top-3 right-3 flex flex-col gap-2">
        <Badge className="bg-accent text-accent-foreground">
          {product.category}
        </Badge>
        {product.inStock ? (
          <Badge className="bg-primary text-primary-foreground">
            In Stock
          </Badge>
        ) : (
          <Badge variant="destructive">
            Out of Stock
          </Badge>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
          {product.name}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {product.description}
        </p>
        
        {product.sizes && (
          <div className="mb-3">
            <p className="text-xs text-muted-foreground mb-1">Available Sizes:</p>
            <div className="flex gap-1 flex-wrap">
              {product.sizes.map((size) => (
                <span
                  key={size}
                  className="px-2 py-0.5 text-xs bg-muted rounded border border-border"
                >
                  {size}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
          <div className="flex items-center gap-1 text-accent">
            <Tag className="w-4 h-4" />
            <span className="text-2xl font-bold">${product.price}</span>
          </div>
          <Button
            variant="hero"
            size="sm"
            onClick={() => onAddToCart(product)}
            disabled={!product.inStock}
            className="gap-2"
          >
            <ShoppingCart className="w-4 h-4" />
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};
