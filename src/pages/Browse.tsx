import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { Search, MapPin, Star, Heart, Filter } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import heroImage from '@/assets/hero-artisan.jpg';
import textilesImage from '@/assets/textiles-craft.jpg';
import metalworkImage from '@/assets/metalwork-craft.jpg';
import woodworkImage from '@/assets/woodwork-craft.jpg';
import jewelryImage from '@/assets/jewelry-craft.jpg';

const Browse = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCraft, setSelectedCraft] = useState('all');

  const artisans = [
    // Pottery Artists
    { id: 1, name: 'Rajesh Kumar', craft: 'Pottery', location: 'Jaipur, Rajasthan', rating: 4.9, followers: 2340, image: heroImage, specialties: ['Terracotta', 'Blue Pottery', 'Traditional Pots'] },
    { id: 2, name: 'Meera Devi', craft: 'Pottery', location: 'Khurja, Uttar Pradesh', rating: 4.8, followers: 1890, image: heroImage, specialties: ['Ceramic Tiles', 'Decorative Pottery'] },
    { id: 3, name: 'Bharat Singh', craft: 'Pottery', location: 'Bikaner, Rajasthan', rating: 4.7, followers: 1560, image: heroImage, specialties: ['Clay Sculptures', 'Water Pots'] },
    { id: 4, name: 'Kamala Kumari', craft: 'Pottery', location: 'Pondicherry', rating: 4.9, followers: 2100, image: heroImage, specialties: ['Modern Ceramics', 'Art Pottery'] },
    { id: 5, name: 'Ravi Sharma', craft: 'Pottery', location: 'Delhi', rating: 4.6, followers: 1200, image: heroImage, specialties: ['Studio Pottery', 'Glazed Ceramics'] },
    
    // Textile Artists
    { id: 6, name: 'Sunita Devi', craft: 'Textiles', location: 'Varanasi, Uttar Pradesh', rating: 4.9, followers: 3200, image: textilesImage, specialties: ['Banarasi Silk', 'Handloom Sarees'] },
    { id: 7, name: 'Abdul Rahman', craft: 'Textiles', location: 'Lucknow, Uttar Pradesh', rating: 4.8, followers: 2800, image: textilesImage, specialties: ['Chikankari', 'Embroidery'] },
    { id: 8, name: 'Priya Sharma', craft: 'Textiles', location: 'Chandigarh', rating: 4.7, followers: 1950, image: textilesImage, specialties: ['Block Printing', 'Natural Dyes'] },
    { id: 9, name: 'Lakshmi Bai', craft: 'Textiles', location: 'Kanchipuram, Tamil Nadu', rating: 4.9, followers: 2650, image: textilesImage, specialties: ['Kanchipuram Silk', 'Temple Borders'] },
    { id: 10, name: 'Mohammed Yusuf', craft: 'Textiles', location: 'Hyderabad, Telangana', rating: 4.8, followers: 2200, image: textilesImage, specialties: ['Pochampally Ikkat', 'Handwoven Fabrics'] },
    
    // Metalwork Artists
    { id: 11, name: 'Arjun Patel', craft: 'Metalwork', location: 'Moradabad, Uttar Pradesh', rating: 4.8, followers: 1890, image: metalworkImage, specialties: ['Brass Work', 'Metal Inlay'] },
    { id: 12, name: 'Govind Das', craft: 'Metalwork', location: 'Jaipur, Rajasthan', rating: 4.7, followers: 1650, image: metalworkImage, specialties: ['Silver Jewelry', 'Meenakari'] },
    { id: 13, name: 'Suresh Kumar', craft: 'Metalwork', location: 'Thanjavur, Tamil Nadu', rating: 4.9, followers: 2100, image: metalworkImage, specialties: ['Bronze Sculptures', 'Temple Art'] },
    { id: 14, name: 'Ramesh Chand', craft: 'Metalwork', location: 'Kasauli, Himachal Pradesh', rating: 4.6, followers: 1350, image: metalworkImage, specialties: ['Copper Vessels', 'Decorative Items'] },
    { id: 15, name: 'Vikram Singh', craft: 'Metalwork', location: 'Jodhpur, Rajasthan', rating: 4.8, followers: 1780, image: metalworkImage, specialties: ['Iron Craft', 'Decorative Panels'] },
    
    // Woodwork Artists
    { id: 16, name: 'Deepak Joshi', craft: 'Woodwork', location: 'Saharanpur, Uttar Pradesh', rating: 4.9, followers: 2450, image: woodworkImage, specialties: ['Wood Carving', 'Furniture'] },
    { id: 17, name: 'Naresh Kumar', craft: 'Woodwork', location: 'Channapatna, Karnataka', rating: 4.8, followers: 2100, image: woodworkImage, specialties: ['Toys', 'Lacquerware'] },
    { id: 18, name: 'Mohan Lal', craft: 'Woodwork', location: 'Udaipur, Rajasthan', rating: 4.7, followers: 1850, image: woodworkImage, specialties: ['Miniature Art', 'Decorative Boxes'] },
    { id: 19, name: 'Santosh Yadav', craft: 'Woodwork', location: 'Nagpur, Maharashtra', rating: 4.6, followers: 1450, image: woodworkImage, specialties: ['Sandalwood Carving', 'Religious Sculptures'] },
    { id: 20, name: 'Rajendra Prasad', craft: 'Woodwork', location: 'Kerala', rating: 4.8, followers: 1950, image: woodworkImage, specialties: ['Traditional Doors', 'Architectural Elements'] },
    
    // Jewelry Artists
    { id: 21, name: 'Sonal Mehta', craft: 'Jewelry', location: 'Mumbai, Maharashtra', rating: 4.9, followers: 3100, image: jewelryImage, specialties: ['Gold Jewelry', 'Contemporary Design'] },
    { id: 22, name: 'Kiran Devi', craft: 'Jewelry', location: 'Jaipur, Rajasthan', rating: 4.8, followers: 2750, image: jewelryImage, specialties: ['Kundan Jewelry', 'Precious Stones'] },
    { id: 23, name: 'Anil Kumar', craft: 'Jewelry', location: 'Delhi', rating: 4.7, followers: 2200, image: jewelryImage, specialties: ['Silver Jewelry', 'Tribal Designs'] },
    { id: 24, name: 'Pooja Sharma', craft: 'Jewelry', location: 'Kolkata, West Bengal', rating: 4.9, followers: 2650, image: jewelryImage, specialties: ['Traditional Bengali', 'Handcrafted Pieces'] },
    { id: 25, name: 'Raman Seth', craft: 'Jewelry', location: 'Amritsar, Punjab', rating: 4.8, followers: 2350, image: jewelryImage, specialties: ['Punjabi Jewelry', 'Wedding Collections'] }
  ];

  const crafts = ['all', 'Pottery', 'Textiles', 'Metalwork', 'Woodwork', 'Jewelry'];

  const filteredArtisans = artisans.filter(artisan => {
    const matchesSearch = artisan.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         artisan.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         artisan.specialties.some(specialty => 
                           specialty.toLowerCase().includes(searchTerm.toLowerCase())
                         );
    const matchesCraft = selectedCraft === 'all' || artisan.craft === selectedCraft;
    return matchesSearch && matchesCraft;
  });

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Browse <span className="text-primary">Artisans</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover talented craftspeople from across India, each with their unique style and story
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 space-y-4 md:space-y-0 md:flex md:items-center md:space-x-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search by name, location, or specialty..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <Select value={selectedCraft} onValueChange={setSelectedCraft}>
            <SelectTrigger className="w-full md:w-48">
              <Filter className="h-4 w-4 mr-2" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {crafts.map(craft => (
                <SelectItem key={craft} value={craft}>
                  {craft === 'all' ? 'All Crafts' : craft}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            Showing {filteredArtisans.length} artisan{filteredArtisans.length !== 1 ? 's' : ''}
          </p>
        </div>

        {/* Artisan Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredArtisans.map((artisan) => (
            <Card key={artisan.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden craft-shadow">
              <div className="relative">
                <img 
                  src={artisan.image} 
                  alt={artisan.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-white/90">
                    {artisan.craft}
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
                  <h3 className="text-xl font-semibold mb-1">{artisan.name}</h3>
                  <div className="flex items-center text-muted-foreground text-sm mb-2">
                    <MapPin className="h-4 w-4 mr-1" />
                    {artisan.location}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                      <span className="font-medium">{artisan.rating}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {artisan.followers.toLocaleString()} followers
                    </span>
                  </div>
                </div>
                
                <div className="mb-4">
                  <p className="text-sm text-muted-foreground mb-2">Specialties:</p>
                  <div className="flex flex-wrap gap-1">
                    {artisan.specialties.slice(0, 2).map((specialty, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {specialty}
                      </Badge>
                    ))}
                    {artisan.specialties.length > 2 && (
                      <Badge variant="outline" className="text-xs">
                        +{artisan.specialties.length - 2} more
                      </Badge>
                    )}
                  </div>
                </div>
                
                <Button className="w-full" asChild>
                  <Link to={`/artisan/${artisan.id}`}>View Profile</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredArtisans.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">
              No artisans found matching your criteria. Try adjusting your search.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Browse;