import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Star, Clock, Users, Search, Filter, BookOpen, Video, Award } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useNavigate } from 'react-router-dom';
import potteryCourse from '@/assets/pottery-course.jpg';
import weavingCourse from '@/assets/weaving-course.jpg';
import jewelryCourse from '@/assets/jewelry-course.jpg';
import metalworkImage from '@/assets/metalwork-craft.jpg';
import woodworkImage from '@/assets/woodwork-craft.jpg';

const Learn = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLevel, setSelectedLevel] = useState('all');
  const navigate = useNavigate();

  const courses = [
    // Pottery Courses
    {
      id: 1,
      title: 'Traditional Indian Pottery Basics',
      instructor: 'Master Rajesh Kumar',
      category: 'Pottery',
      level: 'Beginner',
      duration: '8 weeks',
      price: 4500,
      rating: 4.9,
      students: 324,
      image: potteryCourse,
      description: 'Learn the fundamentals of Indian pottery making from wheel throwing to glazing techniques.',
      lessons: 16,
      certificate: true,
      features: ['Hands-on practice', 'Traditional techniques', 'All materials included']
    },
    {
      id: 2,
      title: 'Advanced Terracotta Sculpture',
      instructor: 'Meera Devi',
      category: 'Pottery',
      level: 'Advanced',
      duration: '12 weeks',
      price: 7500,
      rating: 4.8,
      students: 156,
      image: potteryCourse,
      description: 'Master the art of creating intricate terracotta sculptures and decorative pieces.',
      lessons: 24,
      certificate: true,
      features: ['Advanced techniques', 'Personal projects', 'Gallery showcase']
    },
    {
      id: 3,
      title: 'Blue Pottery Workshop',
      instructor: 'Kamala Kumari',
      category: 'Pottery',
      level: 'Intermediate',
      duration: '6 weeks',
      price: 5500,
      rating: 4.9,
      students: 89,
      image: potteryCourse,
      description: 'Discover the unique blue pottery tradition of Jaipur with authentic techniques.',
      lessons: 12,
      certificate: true,
      features: ['Authentic glazing', 'Traditional patterns', 'Historic techniques']
    },

    // Textile Courses
    {
      id: 4,
      title: 'Handloom Weaving Fundamentals',
      instructor: 'Sunita Devi',
      category: 'Textiles',
      level: 'Beginner',
      duration: '10 weeks',
      price: 6000,
      rating: 4.9,
      students: 267,
      image: weavingCourse,
      description: 'Learn traditional handloom weaving techniques and create your own fabrics.',
      lessons: 20,
      certificate: true,
      features: ['Traditional looms', 'Fabric creation', 'Pattern design']
    },
    {
      id: 5,
      title: 'Chikankari Embroidery Mastery',
      instructor: 'Abdul Rahman',
      category: 'Textiles',
      level: 'Intermediate',
      duration: '8 weeks',
      price: 5000,
      rating: 4.8,
      students: 198,
      image: weavingCourse,
      description: 'Master the delicate art of Chikankari embroidery from Lucknow.',
      lessons: 16,
      certificate: true,
      features: ['Traditional stitches', 'Fine needlework', 'Historical context']
    },
    {
      id: 6,
      title: 'Block Printing Workshop',
      instructor: 'Priya Sharma',
      category: 'Textiles',
      level: 'Beginner',
      duration: '4 weeks',
      price: 3500,
      rating: 4.7,
      students: 145,
      image: weavingCourse,
      description: 'Learn traditional block printing techniques with natural dyes.',
      lessons: 8,
      certificate: true,
      features: ['Natural dyes', 'Hand-carved blocks', 'Fabric printing']
    },

    // Jewelry Courses
    {
      id: 7,
      title: 'Traditional Indian Jewelry Making',
      instructor: 'Sonal Mehta',
      category: 'Jewelry',
      level: 'Beginner',
      duration: '12 weeks',
      price: 8500,
      rating: 4.9,
      students: 234,
      image: jewelryCourse,
      description: 'Learn the art of creating traditional Indian jewelry with precious metals.',
      lessons: 24,
      certificate: true,
      features: ['Metal techniques', 'Stone setting', 'Design principles']
    },
    {
      id: 8,
      title: 'Kundan Jewelry Workshop',
      instructor: 'Kiran Devi',
      category: 'Jewelry',
      level: 'Advanced',
      duration: '16 weeks',
      price: 12000,
      rating: 4.9,
      students: 78,
      image: jewelryCourse,
      description: 'Master the intricate Kundan jewelry making technique from Rajasthan.',
      lessons: 32,
      certificate: true,
      features: ['Precious stones', 'Gold work', 'Royal techniques']
    },
    {
      id: 9,
      title: 'Silver Jewelry Crafting',
      instructor: 'Anil Kumar',
      category: 'Jewelry',
      level: 'Intermediate',
      duration: '8 weeks',
      price: 6500,
      rating: 4.7,
      students: 167,
      image: jewelryCourse,
      description: 'Create beautiful silver jewelry pieces using traditional tribal designs.',
      lessons: 16,
      certificate: true,
      features: ['Silver techniques', 'Tribal patterns', 'Oxidation methods']
    },

    // Metalwork Courses
    {
      id: 10,
      title: 'Brass Work Fundamentals',
      instructor: 'Arjun Patel',
      category: 'Metalwork',
      level: 'Beginner',
      duration: '10 weeks',
      price: 5500,
      rating: 4.8,
      students: 189,
      image: metalworkImage,
      description: 'Learn traditional brass working techniques and create decorative items.',
      lessons: 20,
      certificate: true,
      features: ['Brass techniques', 'Engraving skills', 'Finishing methods']
    },
    {
      id: 11,
      title: 'Bronze Sculpture Workshop',
      instructor: 'Suresh Kumar',
      category: 'Metalwork',
      level: 'Advanced',
      duration: '14 weeks',
      price: 9500,
      rating: 4.9,
      students: 92,
      image: metalworkImage,
      description: 'Create stunning bronze sculptures using traditional lost-wax casting.',
      lessons: 28,
      certificate: true,
      features: ['Lost-wax casting', 'Sculpture design', 'Patina techniques']
    },

    // Woodwork Courses
    {
      id: 12,
      title: 'Wood Carving Basics',
      instructor: 'Deepak Joshi',
      category: 'Woodwork',
      level: 'Beginner',
      duration: '8 weeks',
      price: 4000,
      rating: 4.8,
      students: 256,
      image: woodworkImage,
      description: 'Learn fundamental wood carving techniques and create decorative pieces.',
      lessons: 16,
      certificate: true,
      features: ['Carving tools', 'Wood selection', 'Safety techniques']
    },
    {
      id: 13,
      title: 'Channapatna Toy Making',
      instructor: 'Naresh Kumar',
      category: 'Woodwork',
      level: 'Intermediate',
      duration: '6 weeks',
      price: 4500,
      rating: 4.9,
      students: 134,
      image: woodworkImage,
      description: 'Create colorful lacquered wooden toys using traditional Channapatna techniques.',
      lessons: 12,
      certificate: true,
      features: ['Lathe work', 'Natural lacquers', 'Traditional designs']
    },
    {
      id: 14,
      title: 'Sandalwood Carving Mastery',
      instructor: 'Santosh Yadav',
      category: 'Woodwork',
      level: 'Advanced',
      duration: '12 weeks',
      price: 8000,
      rating: 4.8,
      students: 67,
      image: woodworkImage,
      description: 'Master the delicate art of sandalwood carving with religious and decorative themes.',
      lessons: 24,
      certificate: true,
      features: ['Precious wood', 'Intricate details', 'Religious motifs']
    }
  ];

  const categories = ['all', 'Pottery', 'Textiles', 'Jewelry', 'Metalwork', 'Woodwork'];
  const levels = ['all', 'Beginner', 'Intermediate', 'Advanced'];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.instructor.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
    const matchesLevel = selectedLevel === 'all' || course.level === selectedLevel;
    
    return matchesSearch && matchesCategory && matchesLevel;
  });

  const handleEnroll = (courseId: number) => {
    navigate(`/course-registration/${courseId}`);
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Learn Traditional <span className="text-primary">Crafts</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Master authentic Indian crafts with guided courses from expert artisans. 
            From beginner to advanced levels, discover your creative potential.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 space-y-4 lg:space-y-0 lg:flex lg:items-center lg:space-x-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search courses, instructors..."
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

          <Select value={selectedLevel} onValueChange={setSelectedLevel}>
            <SelectTrigger className="w-full lg:w-48">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {levels.map(level => (
                <SelectItem key={level} value={level}>
                  {level === 'all' ? 'All Levels' : level}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            Showing {filteredCourses.length} course{filteredCourses.length !== 1 ? 's' : ''}
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <Card key={course.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden craft-shadow">
              <div className="relative">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 space-y-2">
                  <Badge variant="secondary" className="bg-white/90">
                    {course.category}
                  </Badge>
                  <Badge 
                    variant={course.level === 'Beginner' ? 'default' : course.level === 'Intermediate' ? 'secondary' : 'destructive'}
                    className="bg-white/90 block w-fit"
                  >
                    {course.level}
                  </Badge>
                </div>
                {course.certificate && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-primary text-white">
                      <Award className="h-3 w-3 mr-1" />
                      Certificate
                    </Badge>
                  </div>
                )}
              </div>
              
              <CardContent className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold mb-2 line-clamp-2">{course.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">by {course.instructor}</p>
                  
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                        <span className="text-sm font-medium">{course.rating}</span>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Users className="h-4 w-4 mr-1" />
                        {course.students}
                      </div>
                    </div>
                    <span className="text-lg font-bold text-primary">₹{course.price.toLocaleString()}</span>
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {course.description}
                </p>

                <div className="space-y-3 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center text-muted-foreground">
                      <Clock className="h-4 w-4 mr-2" />
                      {course.duration}
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Video className="h-4 w-4 mr-2" />
                      {course.lessons} lessons
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium mb-2">What you'll learn:</p>
                    <div className="space-y-1">
                      {course.features.map((feature, index) => (
                        <div key={index} className="flex items-center text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <Button 
                  className="w-full" 
                  onClick={() => handleEnroll(course.id)}
                >
                  <BookOpen className="h-4 w-4 mr-2" />
                  Enroll Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">
              No courses found matching your criteria. Try adjusting your filters.
            </p>
          </div>
        )}

        {/* Features Section */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Award className="h-5 w-5 mr-2 text-primary" />
                Certified Courses
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                All courses come with completion certificates from recognized master artisans.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="h-5 w-5 mr-2 text-primary" />
                Expert Instructors
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Learn from master craftspeople with decades of experience in traditional arts.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Video className="h-5 w-5 mr-2 text-primary" />
                Hands-on Learning
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Interactive workshops with practical exercises and personalized feedback.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Learn;