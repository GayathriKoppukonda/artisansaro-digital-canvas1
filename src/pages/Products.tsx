import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Star, ShoppingCart, Heart, Filter, Search } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useCart } from '@/contexts/CartContext';
import { toast } from '@/hooks/use-toast';
import potteryProducts from '@/assets/pottery-products.jpg';
import textileProducts from '@/assets/textile-products.jpg';
import metalProducts from '@/assets/metal-products.jpg';
import woodProducts from '@/assets/wood-products.jpg';
import jewelryProducts from '@/assets/jewelry-products.jpg';

// Individual product images
import terracottaVase from '@/assets/products/terracotta-vase.jpg';
import bluePotteryBowls from '@/assets/products/blue-pottery-bowls.jpg';
import clayWaterPot from '@/assets/products/clay-water-pot.jpg';
import ceramicPlate from '@/assets/products/ceramic-plate.jpg';
import clayTeaSet from '@/assets/products/clay-tea-set.jpg';
import banarasiSaree from '@/assets/products/banarasi-saree.jpg';
import chikankariKurta from '@/assets/products/chikankari-kurta.jpg';
import blockPrintDupatta from '@/assets/products/block-print-dupatta.jpg';
import kanchipuramSaree from '@/assets/products/kanchipuram-saree.jpg';
import pochampally from '@/assets/products/pochampally-ikkat.jpg';
import brassTray from '@/assets/products/brass-tray.jpg';
import silverMeenakariBox from '@/assets/products/silver-meenakari-box.jpg';
import bronzeSculpture from '@/assets/products/bronze-sculpture.jpg';
import copperVessel from '@/assets/products/copper-vessel.jpg';
import ironPanel from '@/assets/products/iron-panel.jpg';
import woodenJewelryBox from '@/assets/products/wooden-jewelry-box.jpg';
import channapatnaToys from '@/assets/products/channapatna-toys.jpg';
import woodenElephant from '@/assets/products/wooden-elephant.jpg';
import sandalwoodGanesha from '@/assets/products/sandalwood-ganesha.jpg';
import woodenDoorPanel from '@/assets/products/wooden-door-panel.jpg';
import goldNecklaceSet from '@/assets/products/gold-necklace-set.jpg';
import kundanJewelrySet from '@/assets/products/kundan-jewelry-set.jpg';
import silverTribalEarrings from '@/assets/products/silver-tribal-earrings.jpg';
import bengaliGoldNecklace from '@/assets/products/bengali-gold-necklace.jpg';
import punjabiWeddingSet from '@/assets/products/punjabi-wedding-set.jpg';

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const { dispatch } = useCart();

  const products = [
    // Pottery Products
    { id: 1, name: 'Handmade Terracotta Vase', price: 1500, category: 'Pottery', artisan: 'Rajesh Kumar', rating: 4.8, image: terracottaVase, description: 'Beautiful handcrafted terracotta vase with traditional motifs' },
    { id: 2, name: 'Blue Pottery Bowl Set', price: 2500, category: 'Pottery', artisan: 'Meera Devi', rating: 4.9, image: bluePotteryBowls, description: 'Set of 4 decorative blue pottery bowls from Jaipur' },
    { id: 3, name: 'Traditional Water Pot', price: 800, category: 'Pottery', artisan: 'Bharat Singh', rating: 4.7, image: clayWaterPot, description: 'Eco-friendly clay water pot with cooling properties' },
    { id: 4, name: 'Ceramic Decorative Plate', price: 1200, category: 'Pottery', artisan: 'Kamala Kumari', rating: 4.8, image: ceramicPlate, description: 'Hand-painted ceramic plate with floral designs' },
    { id: 5, name: 'Clay Tea Set', price: 3500, category: 'Pottery', artisan: 'Ravi Sharma', rating: 4.9, image: clayTeaSet, description: 'Complete traditional clay tea set for 6 people' },

    // Textile Products
    { id: 6, name: 'Banarasi Silk Saree', price: 15000, category: 'Textiles', artisan: 'Sunita Devi', rating: 4.9, image: banarasiSaree, description: 'Pure silk Banarasi saree with gold zari work' },
    { id: 7, name: 'Chikankari Kurta', price: 4500, category: 'Textiles', artisan: 'Abdul Rahman', rating: 4.8, image: chikankariKurta, description: 'Hand-embroidered white cotton kurta with chikankari work' },
    { id: 8, name: 'Block Print Dupatta', price: 1800, category: 'Textiles', artisan: 'Priya Sharma', rating: 4.7, image: blockPrintDupatta, description: 'Cotton dupatta with traditional block print designs' },
    { id: 9, name: 'Kanchipuram Silk Saree', price: 18000, category: 'Textiles', artisan: 'Lakshmi Bai', rating: 4.9, image: kanchipuramSaree, description: 'Temple border Kanchipuram silk saree in rich colors' },
    { id: 10, name: 'Pochampally Ikkat Fabric', price: 2200, category: 'Textiles', artisan: 'Mohammed Yusuf', rating: 4.8, image: pochampally, description: 'Handwoven ikkat fabric per meter' },

    // Metal Products
    { id: 11, name: 'Brass Decorative Tray', price: 3200, category: 'Metalwork', artisan: 'Arjun Patel', rating: 4.8, image: brassTray, description: 'Ornate brass serving tray with intricate engravings' },
    { id: 12, name: 'Silver Meenakari Box', price: 8500, category: 'Metalwork', artisan: 'Govind Das', rating: 4.9, image: silverMeenakariBox, description: 'Hand-crafted silver jewelry box with meenakari work' },
    { id: 13, name: 'Bronze Temple Sculpture', price: 12000, category: 'Metalwork', artisan: 'Suresh Kumar', rating: 4.9, image: bronzeSculpture, description: 'Traditional bronze sculpture of Hindu deity' },
    { id: 14, name: 'Copper Water Vessel', price: 2800, category: 'Metalwork', artisan: 'Ramesh Chand', rating: 4.7, image: copperVessel, description: 'Pure copper water vessel for health benefits' },
    { id: 15, name: 'Iron Decorative Panel', price: 5500, category: 'Metalwork', artisan: 'Vikram Singh', rating: 4.8, image: ironPanel, description: 'Handforged iron decorative wall panel' },

    // Wood Products
    { id: 16, name: 'Hand-carved Wooden Box', price: 2400, category: 'Woodwork', artisan: 'Deepak Joshi', rating: 4.8, image: woodenJewelryBox, description: 'Intricately carved wooden jewelry box' },
    { id: 17, name: 'Channapatna Wooden Toys', price: 1500, category: 'Woodwork', artisan: 'Naresh Kumar', rating: 4.9, image: channapatnaToys, description: 'Set of colorful lacquered wooden toys' },
    { id: 18, name: 'Miniature Wooden Elephant', price: 800, category: 'Woodwork', artisan: 'Mohan Lal', rating: 4.7, image: woodenElephant, description: 'Hand-carved miniature elephant with intricate details' },
    { id: 19, name: 'Sandalwood Sculpture', price: 15000, category: 'Woodwork', artisan: 'Santosh Yadav', rating: 4.9, image: sandalwoodGanesha, description: 'Beautiful sandalwood sculpture of Ganesha' },
    { id: 20, name: 'Traditional Wooden Door Panel', price: 8500, category: 'Woodwork', artisan: 'Rajendra Prasad', rating: 4.8, image: woodenDoorPanel, description: 'Carved wooden door panel with traditional motifs' },

    // Jewelry Products
    { id: 21, name: 'Gold Plated Necklace Set', price: 12500, category: 'Jewelry', artisan: 'Sonal Mehta', rating: 4.9, image: goldNecklaceSet, description: 'Contemporary gold plated necklace with matching earrings' },
    { id: 22, name: 'Kundan Jewelry Set', price: 25000, category: 'Jewelry', artisan: 'Kiran Devi', rating: 4.9, image: kundanJewelrySet, description: 'Traditional Kundan jewelry set with precious stones' },
    { id: 23, name: 'Silver Tribal Earrings', price: 3500, category: 'Jewelry', artisan: 'Anil Kumar', rating: 4.7, image: silverTribalEarrings, description: 'Handcrafted silver earrings with tribal designs' },
    { id: 24, name: 'Bengali Gold Necklace', price: 18000, category: 'Jewelry', artisan: 'Pooja Sharma', rating: 4.8, image: bengaliGoldNecklace, description: 'Traditional Bengali style gold necklace' },
    { id: 25, name: 'Punjabi Wedding Set', price: 35000, category: 'Jewelry', artisan: 'Raman Seth', rating: 4.9, image: punjabiWeddingSet, description: 'Complete Punjabi bridal jewelry set' }
  ];

  const categories = ['all', 'Pottery', 'Textiles', 'Metalwork', 'Woodwork', 'Jewelry'];
  const priceRanges = [
    { value: 'all', label: 'All Prices' },
    { value: '0-2000', label: 'Under ₹2,000' },
    { value: '2000-5000', label: '₹2,000 - ₹5,000' },
    { value: '5000-15000', label: '₹5,000 - ₹15,000' },
    { value: '15000+', label: 'Above ₹15,000' }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.artisan.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    
    let matchesPrice = true;
    if (priceRange !== 'all') {
      const [min, max] = priceRange.split('-').map(p => p.replace('+', ''));
      const price = product.price;
      if (max) {
        matchesPrice = price >= parseInt(min) && price <= parseInt(max);
      } else {
        matchesPrice = price >= parseInt(min);
      }
    }
    
    return matchesSearch && matchesCategory && matchesPrice;
  });

  const addToCart = (product: any) => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        artisan: product.artisan,
        category: product.category
      }
    });
    
    toast({
      title: "Added to Cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Artisan <span className="text-primary">Products</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover authentic handcrafted products from talented Indian artisans
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 space-y-4 lg:space-y-0 lg:flex lg:items-center lg:space-x-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search products, artisans..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-full lg:w-48">
              <Filter className="h-4 w-4 mr-2" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {categories.map(category => (
                <SelectItem key={category} value={category}>
                  {category === 'all' ? 'All Categories' : category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={priceRange} onValueChange={setPriceRange}>
            <SelectTrigger className="w-full lg:w-48">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {priceRanges.map(range => (
                <SelectItem key={range.value} value={range.value}>
                  {range.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden craft-shadow">
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-white/90">
                    {product.category}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Button size="sm" variant="ghost" className="h-8 w-8 p-0 bg-white/90 hover:bg-white">
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="mb-4">
                  <h3 className="text-lg font-semibold mb-1 line-clamp-2">{product.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">by {product.artisan}</p>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                      <span className="text-sm font-medium">{product.rating}</span>
                    </div>
                    <span className="text-lg font-bold text-primary">₹{product.price.toLocaleString()}</span>
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {product.description}
                </p>
                
                <Button 
                  className="w-full" 
                  onClick={() => addToCart(product)}
                >
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">
              No products found matching your criteria. Try adjusting your filters.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;