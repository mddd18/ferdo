import { useState } from "react";
import { products } from "../data/mockData";
import { ProductCard } from "../components/ProductCard";
import { Filter, ShoppingBag, Sparkles, TrendingDown, ShoppingCart } from "lucide-react";
import { useCart } from "../CartContext";
import { Button } from "../components/ui/button";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'oliy' | 'oddiy'>('all');
  const [selectedType, setSelectedType] = useState<'all' | 'Sabzavot' | 'Sut mahsuloti'>('all');

  // Savatdagi narsalar soni
  const { totalItems } = useCart();

  const filteredProducts = products.filter(product => {
    const categoryMatch = selectedCategory === 'all' || product.category === selectedCategory;
    const typeMatch = selectedType === 'all' || product.type === selectedType;
    return categoryMatch && typeMatch;
  });

  return (
    <div className="p-4 space-y-6 bg-background min-h-screen pb-24">
      {/* HEADER: Logotip va Savat */}
      <div className="flex justify-between items-center mb-6 pt-2">
        <div>
          <h1 className="text-2xl font-bold text-foreground tracking-tight">Ferdo</h1>
          <p className="text-sm text-muted-foreground">Xush kelibsiz, Do'kon egasi</p>
        </div>
        
        <button 
          className="relative p-3 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow"
          onClick={() => alert("Tez orada savat sahifasi qo'shiladi!")}
        >
          <ShoppingBag className="w-6 h-6 text-primary" />
          {totalItems > 0 && (
            <span className="absolute -top-1 -right-1 bg-destructive text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center animate-in zoom-in">
              {totalItems}
            </span>
          )}
        </button>
      </div>

      {/* AI AGENT TAVSIYASI */}
      <div className="bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 rounded-[2.5rem] p-6 mb-8 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <div className="p-2 bg-primary rounded-full">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
          <span className="font-bold text-primary">Ferdo AI: Aqlli tahlil</span>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm shrink-0">
              <TrendingDown className="w-6 h-6 text-orange-500" />
            </div>
            <div>
              <h4 className="font-bold text-gray-900">Zaxira kamaymoqda</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                Statistikaga ko'ra, <span className="font-bold text-primary">Sut</span> zaxirangiz tugayapti. 
                Yaqin atrofdagi fermerdan 40 litr buyurtma qilishni tavsiya qilaman.
              </p>
            </div>
          </div>

          <Button 
            className="w-full bg-primary hover:bg-primary/90 text-white py-6 text-base rounded-[1.8rem] shadow-lg shadow-primary/20 flex items-center justify-center gap-3"
            onClick={() => alert("AI buyurtmani tayyorladi!")}
          >
            <ShoppingCart className="w-5 h-5" />
            Tavsiyani tasdiqlash
          </Button>
        </div>
      </div>

      {/* FILTRLAR */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <Filter className="w-5 h-5 text-gray-700" />
          <span className="font-semibold text-gray-900">Filtrlash</span>
        </div>
        
        {/* Category Filter */}
        <div className="mb-4">
          <label className="text-xs font-medium text-gray-600 mb-2 block uppercase tracking-wide">
            Kategoriya
          </label>
          <div className="flex gap-2">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                selectedCategory === 'all'
                  ? 'bg-primary text-white shadow-md scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-50 shadow-sm'
              }`}
            >
              Hammasi
            </button>
            <button
              onClick={() => setSelectedCategory('oliy')}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                selectedCategory === 'oliy'
                  ? 'bg-primary text-white shadow-md scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-50 shadow-sm'
              }`}
            >
              ⭐ Oliy
            </button>
            <button
              onClick={() => setSelectedCategory('oddiy')}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                selectedCategory === 'oddiy'
                  ? 'bg-primary text-white shadow-md scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-50 shadow-sm'
              }`}
            >
              Oddiy
            </button>
          </div>
        </div>

        {/* Type Filter */}
        <div className="mb-4">
          <label className="text-xs font-medium text-gray-600 mb-2 block uppercase tracking-wide">
            Mahsulot turi
          </label>
          <div className="flex gap-2">
            <button
              onClick={() => setSelectedType('all')}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                selectedType === 'all'
                  ? 'bg-primary text-white shadow-md scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-50 shadow-sm'
              }`}
            >
              Hammasi
            </button>
            <button
              onClick={() => setSelectedType('Sabzavot')}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                selectedType === 'Sabzavot'
                  ? 'bg-primary text-white shadow-md scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-50 shadow-sm'
              }`}
            >
              🥕 Sabzavot
            </button>
            <button
              onClick={() => setSelectedType('Sut mahsuloti')}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                selectedType === 'Sut mahsuloti'
                  ? 'bg-primary text-white shadow-md scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-50 shadow-sm'
              }`}
            >
              🥛 Sut
            </button>
          </div>
        </div>
      </div>

      {/* MAHSULOTLAR RO'YXATI */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-gray-900 text-lg">
            Mavjud mahsulotlar
          </h3>
          <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold">
            {filteredProducts.length} ta
          </span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
