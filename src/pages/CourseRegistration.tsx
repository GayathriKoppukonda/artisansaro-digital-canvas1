import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Clock, Star, Users, Award, CreditCard } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import potteryCourse from '@/assets/pottery-course.jpg';

const CourseRegistration = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    experience: '',
    motivation: '',
    paymentMethod: 'card'
  });

  // Mock course data - in a real app, this would be fetched from an API
  const course = {
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
    features: ['Hands-on practice', 'Traditional techniques', 'All materials included'],
    schedule: 'Saturdays & Sundays, 10:00 AM - 1:00 PM',
    startDate: '15th October 2024',
    location: 'Pottery Studio, Connaught Place, New Delhi'
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mock registration process
    toast({
      title: "Registration Successful!",
      description: `You have been enrolled in ${course.title}. Payment confirmation will be sent to your email.`,
    });
    
    // Redirect to a success page or back to courses
    setTimeout(() => {
      navigate('/learn');
    }, 2000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Back Button */}
        <Button variant="ghost" className="mb-6" onClick={() => navigate('/learn')}>
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Courses
        </Button>

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Course Registration</h1>
          <p className="text-muted-foreground">Complete your enrollment for the selected course</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Course Details */}
          <Card className="h-fit">
            <CardHeader>
              <CardTitle>Course Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="relative">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <div className="absolute top-4 left-4 space-y-2">
                  <Badge variant="secondary" className="bg-white/90">
                    {course.category}
                  </Badge>
                  <Badge variant="default" className="bg-white/90 text-foreground block w-fit">
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

              <div>
                <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                <p className="text-muted-foreground mb-4">by {course.instructor}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current mr-2" />
                    <span className="font-medium">{course.rating}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span className="text-sm">{course.students} students</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span className="text-sm">{course.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <Award className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span className="text-sm">{course.lessons} lessons</span>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mb-4">{course.description}</p>

                <div className="space-y-3">
                  <div>
                    <p className="font-medium text-sm">Schedule:</p>
                    <p className="text-sm text-muted-foreground">{course.schedule}</p>
                  </div>
                  <div>
                    <p className="font-medium text-sm">Start Date:</p>
                    <p className="text-sm text-muted-foreground">{course.startDate}</p>
                  </div>
                  <div>
                    <p className="font-medium text-sm">Location:</p>
                    <p className="text-sm text-muted-foreground">{course.location}</p>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-secondary/50 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-medium">Total Amount:</span>
                    <span className="text-2xl font-bold text-primary">₹{course.price.toLocaleString()}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    Includes all materials and certification
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Registration Form */}
          <Card>
            <CardHeader>
              <CardTitle>Registration Form</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="space-y-4">
                  <h4 className="font-medium">Personal Information</h4>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Full Name *</Label>
                      <Input
                        id="fullName"
                        placeholder="Enter your full name"
                        value={formData.fullName}
                        onChange={(e) => handleInputChange('fullName', e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="Enter your phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                    />
                  </div>
                </div>

                {/* Address Information */}
                <div className="space-y-4">
                  <h4 className="font-medium">Address Information</h4>
                  
                  <div className="space-y-2">
                    <Label htmlFor="address">Street Address *</Label>
                    <Textarea
                      id="address"
                      placeholder="Enter your complete address"
                      value={formData.address}
                      onChange={(e) => handleInputChange('address', e.target.value)}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="city">City *</Label>
                      <Input
                        id="city"
                        placeholder="City"
                        value={formData.city}
                        onChange={(e) => handleInputChange('city', e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="state">State *</Label>
                      <Input
                        id="state"
                        placeholder="State"
                        value={formData.state}
                        onChange={(e) => handleInputChange('state', e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="pincode">Pincode *</Label>
                      <Input
                        id="pincode"
                        placeholder="Pincode"
                        value={formData.pincode}
                        onChange={(e) => handleInputChange('pincode', e.target.value)}
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Additional Information */}
                <div className="space-y-4">
                  <h4 className="font-medium">Additional Information</h4>
                  
                  <div className="space-y-2">
                    <Label htmlFor="experience">Previous Experience (if any)</Label>
                    <Select value={formData.experience} onValueChange={(value) => handleInputChange('experience', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your experience level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="none">No previous experience</SelectItem>
                        <SelectItem value="hobby">Hobby level</SelectItem>
                        <SelectItem value="some">Some experience</SelectItem>
                        <SelectItem value="intermediate">Intermediate level</SelectItem>
                        <SelectItem value="advanced">Advanced level</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="motivation">Why do you want to learn this craft?</Label>
                    <Textarea
                      id="motivation"
                      placeholder="Tell us about your motivation and goals..."
                      value={formData.motivation}
                      onChange={(e) => handleInputChange('motivation', e.target.value)}
                    />
                  </div>
                </div>

                {/* Payment Information */}
                <div className="space-y-4">
                  <h4 className="font-medium">Payment Method</h4>
                  
                  <Select value={formData.paymentMethod} onValueChange={(value) => handleInputChange('paymentMethod', value)}>
                    <SelectTrigger>
                      <CreditCard className="h-4 w-4 mr-2" />
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="card">Credit/Debit Card</SelectItem>
                      <SelectItem value="upi">UPI Payment</SelectItem>
                      <SelectItem value="netbanking">Net Banking</SelectItem>
                      <SelectItem value="wallet">Digital Wallet</SelectItem>
                    </SelectContent>
                  </Select>
                  
                  <p className="text-sm text-muted-foreground">
                    You will be redirected to a secure payment gateway after registration.
                  </p>
                </div>

                <div className="pt-4 border-t">
                  <Button type="submit" className="w-full hero-gradient text-white" size="lg">
                    Complete Registration & Pay ₹{course.price.toLocaleString()}
                  </Button>
                  <p className="text-xs text-muted-foreground text-center mt-2">
                    By registering, you agree to our terms and conditions
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CourseRegistration;