// src/app/components/ProductCard.tsx
import { Product } from "../data/mockData";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";
import { useCart } from "../context/CartContext"; // Context'ni chaqiramiz
import { toast } from "sonner"; // Chiroyli bildirishnoma uchun (agar o'rnatilgan bo'lsa)

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  // Savatga qo'shish funksiyasini olamiz
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product, 1); // 1 dona qo'shish
    // Ekranda chiroyli xabar chiqarish (ixtiyoriy)
    alert(`${product.name} savatga qo'shildi!`); 
  };

  return (
    <div data-slot="card" className="bg-card rounded-[1.5rem] p-4 flex flex-col gap-3">
      {/* Rasm qismi */}
      <div className="relative aspect-square rounded-2xl overflow-hidden bg-muted">
        <img 
          src={product.imageUrl} 
          alt={product.name}
          className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg text-xs font-bold text-primary">
          {product.quality}
        </div>
      </div>

      {/* Ma'lumot qismi */}
      <div className="flex-1">
        <h3 className="font-bold text-lg text-foreground">{product.name}</h3>
        <p className="text-sm text-muted-foreground">{product.farmerName}</p>
      </div>

      {/* Narx va Tugma */}
      <div className="flex items-center justify-between mt-2">
        <div>
          <p className="text-lg font-bold text-primary">
            {product.pricePerUnit.toLocaleString()} <span className="text-sm font-normal">so'm</span>
          </p>
          <p className="text-xs text-muted-foreground">1 {product.unit} uchun</p>
        </div>
        
        <Button 
          onClick={handleAddToCart}
          size="icon"
          className="w-12 h-12 rounded-full bg-primary hover:bg-primary/90 text-white shadow-md active:scale-95 transition-all"
        >
          <Plus className="w-6 h-6" />
        </Button>
      </div>
    </div>
  );
}
