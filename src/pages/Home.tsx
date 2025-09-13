import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Users, Award, Sparkles, Heart, Globe } from 'lucide-react';
import heroImage from '@/assets/hero-artisan.jpg';
import textilesImage from '@/assets/textiles-craft.jpg';
import metalworkImage from '@/assets/metalwork-craft.jpg';
import woodworkImage from '@/assets/woodwork-craft.jpg';
import jewelryImage from '@/assets/jewelry-craft.jpg';

const Home = () => {
  const featuredCrafts = [
    { name: 'Pottery & Ceramics', image: heroImage, artisans: 45 },
    { name: 'Textiles & Weaving', image: textilesImage, artisans: 38 },
    { name: 'Metalwork & Brass', image: metalworkImage, artisans: 22 },
    { name: 'Woodwork & Carving', image: woodworkImage, artisans: 31 },
    { name: 'Jewelry Making', image: jewelryImage, artisans: 27 },
  ];

  const stats = [
    { icon: Users, label: 'Active Artisans', value: '500+' },
    { icon: Star, label: 'Happy Customers', value: '10,000+' },
    { icon: Award, label: 'Craft Categories', value: '25+' },
    { icon: Globe, label: 'Cities Covered', value: '100+' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            Discover India's
            <span className="block text-gradient bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
              Master Artisans
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Connect with skilled craftspeople preserving centuries-old traditions. 
            Learn, shop, and support authentic Indian craftsmanship.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="hero-gradient text-white hover:scale-105 transition-transform" asChild>
              <Link to="/browse">
                Explore Artisans <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20" asChild>
              <Link to="/products">
                Shop Products
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <stat.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-2">{stat.value}</h3>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Crafts */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Traditional Crafts of <span className="text-primary">India</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore our diverse collection of authentic Indian crafts, each telling a unique story 
              of cultural heritage and artistic excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {featuredCrafts.map((craft, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 overflow-hidden craft-shadow">
                <div className="relative overflow-hidden">
                  <img 
                    src={craft.image} 
                    alt={craft.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="font-semibold text-lg mb-1">{craft.name}</h3>
                    <p className="text-sm text-gray-200">{craft.artisans} Artisans</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Sections */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-accent/20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Learn Traditional <span className="text-primary">Indian Crafts</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Master the art of traditional Indian craftsmanship with guided courses 
                from expert artisans. From pottery to weaving, discover your creative potential.
              </p>
              <Button size="lg" className="hero-gradient" asChild>
                <Link to="/learn">
                  Explore Courses <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">
                AI-Powered <span className="text-primary">Marketing</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Transform your craft descriptions into compelling marketing content 
                with our AI-powered tool. Perfect for artisans looking to reach more customers.
              </p>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white" asChild>
                <Link to="/ai-tool">
                  Try AI Tool <Sparkles className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Artisan of the Month */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Artisan of the <span className="text-primary">Month</span>
            </h2>
          </div>

          <Card className="max-w-4xl mx-auto overflow-hidden craft-shadow">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative">
                <img 
                  src={heroImage} 
                  alt="Featured Artisan"
                  className="w-full h-80 md:h-full object-cover"
                />
              </div>
              <CardContent className="p-8 flex flex-col justify-center">
                <div className="mb-4">
                  <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
                    Featured Artisan
                  </span>
                  <h3 className="text-3xl font-bold mb-2">Rajesh Kumar</h3>
                  <p className="text-primary font-medium mb-4">Master Potter from Rajasthan</p>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  With over 30 years of experience, Rajesh creates stunning terracotta pieces 
                  that showcase the rich heritage of Rajasthani pottery. His work has been 
                  featured in exhibitions across India and internationally.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <Star className="h-5 w-5 text-yellow-400 fill-current" />
                      <span className="ml-1 font-medium">4.9</span>
                    </div>
                    <div className="flex items-center">
                      <Heart className="h-5 w-5 text-red-500" />
                      <span className="ml-1">2.3k followers</span>
                    </div>
                  </div>
                  <Button asChild>
                    <Link to="/browse/rajesh-kumar">View Profile</Link>
                  </Button>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Home;