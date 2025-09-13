import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { Palette, ShoppingBag, Eye, EyeOff, Mail, Lock, User, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { toast } from '@/hooks/use-toast';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [activeTab, setActiveTab] = useState('customer');

  const [customerForm, setCustomerForm] = useState({
    email: '',
    password: ''
  });

  const [artistForm, setArtistForm] = useState({
    email: '',
    password: ''
  });

  const [customerSignup, setCustomerSignup] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });

  const [artistSignup, setArtistSignup] = useState({
    name: '',
    email: '',
    phone: '',
    craft: '',
    experience: '',
    location: '',
    password: '',
    confirmPassword: ''
  });

  const [isSignup, setIsSignup] = useState(false);

  const handleCustomerLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock login - in real app, this would call an API
    toast({
      title: "Login Successful",
      description: "Welcome back to Artisansaro!",
    });
  };

  const handleArtistLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock login - in real app, this would call an API
    toast({
      title: "Artist Login Successful",
      description: "Welcome to your artist dashboard!",
    });
  };

  const handleCustomerSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (customerSignup.password !== customerSignup.confirmPassword) {
      toast({
        title: "Error",
        description: "Passwords do not match.",
        variant: "destructive"
      });
      return;
    }
    toast({
      title: "Account Created",
      description: "Welcome to Artisansaro! Please check your email to verify your account.",
    });
  };

  const handleArtistSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (artistSignup.password !== artistSignup.confirmPassword) {
      toast({
        title: "Error",
        description: "Passwords do not match.",
        variant: "destructive"
      });
      return;
    }
    toast({
      title: "Artist Application Submitted",
      description: "Your application is under review. We'll contact you within 2-3 business days.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-accent/30 py-8">
      <div className="container mx-auto px-4 max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">
            Welcome to <span className="text-primary">Artisansaro</span>
          </h1>
          <p className="text-muted-foreground">
            {isSignup ? 'Create your account to get started' : 'Sign in to your account'}
          </p>
        </div>

        <Card className="craft-shadow">
          <CardHeader>
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="customer" className="flex items-center">
                  <ShoppingBag className="h-4 w-4 mr-2" />
                  Customer
                </TabsTrigger>
                <TabsTrigger value="artist" className="flex items-center">
                  <Palette className="h-4 w-4 mr-2" />
                  Artist
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </CardHeader>

          <CardContent>
            <Tabs value={activeTab} className="w-full">
              <TabsContent value="customer">
                {!isSignup ? (
                  <form onSubmit={handleCustomerLogin} className="space-y-4">
                    <CardTitle className="text-xl text-center mb-6">Customer Login</CardTitle>
                    
                    <div className="space-y-2">
                      <Label htmlFor="customer-email">Email</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="customer-email"
                          type="email"
                          placeholder="Enter your email"
                          value={customerForm.email}
                          onChange={(e) => setCustomerForm({...customerForm, email: e.target.value})}
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="customer-password">Password</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="customer-password"
                          type={showPassword ? "text" : "password"}
                          placeholder="Enter your password"
                          value={customerForm.password}
                          onChange={(e) => setCustomerForm({...customerForm, password: e.target.value})}
                          className="pl-10 pr-10"
                          required
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="absolute right-0 top-0 h-full px-3"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </Button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <Link to="/forgot-password" className="text-sm text-primary hover:underline">
                        Forgot password?
                      </Link>
                    </div>

                    <Button type="submit" className="w-full hero-gradient text-white">
                      Sign In
                    </Button>

                    <Separator />

                    <div className="text-center">
                      <p className="text-sm text-muted-foreground">
                        Don't have an account?{' '}
                        <Button variant="link" className="p-0 h-auto text-primary" onClick={() => setIsSignup(true)}>
                          Sign up
                        </Button>
                      </p>
                    </div>
                  </form>
                ) : (
                  <form onSubmit={handleCustomerSignup} className="space-y-4">
                    <CardTitle className="text-xl text-center mb-6">Create Customer Account</CardTitle>
                    
                    <div className="space-y-2">
                      <Label htmlFor="customer-name">Full Name</Label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="customer-name"
                          placeholder="Enter your full name"
                          value={customerSignup.name}
                          onChange={(e) => setCustomerSignup({...customerSignup, name: e.target.value})}
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="customer-signup-email">Email</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="customer-signup-email"
                          type="email"
                          placeholder="Enter your email"
                          value={customerSignup.email}
                          onChange={(e) => setCustomerSignup({...customerSignup, email: e.target.value})}
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="customer-phone">Phone Number</Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="customer-phone"
                          type="tel"
                          placeholder="Enter your phone number"
                          value={customerSignup.phone}
                          onChange={(e) => setCustomerSignup({...customerSignup, phone: e.target.value})}
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="customer-signup-password">Password</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="customer-signup-password"
                          type="password"
                          placeholder="Create a password"
                          value={customerSignup.password}
                          onChange={(e) => setCustomerSignup({...customerSignup, password: e.target.value})}
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="customer-confirm-password">Confirm Password</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="customer-confirm-password"
                          type="password"
                          placeholder="Confirm your password"
                          value={customerSignup.confirmPassword}
                          onChange={(e) => setCustomerSignup({...customerSignup, confirmPassword: e.target.value})}
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>

                    <Button type="submit" className="w-full hero-gradient text-white">
                      Create Account
                    </Button>

                    <Separator />

                    <div className="text-center">
                      <p className="text-sm text-muted-foreground">
                        Already have an account?{' '}
                        <Button variant="link" className="p-0 h-auto text-primary" onClick={() => setIsSignup(false)}>
                          Sign in
                        </Button>
                      </p>
                    </div>
                  </form>
                )}
              </TabsContent>

              <TabsContent value="artist">
                {!isSignup ? (
                  <form onSubmit={handleArtistLogin} className="space-y-4">
                    <CardTitle className="text-xl text-center mb-6">Artist Login</CardTitle>
                    
                    <div className="space-y-2">
                      <Label htmlFor="artist-email">Email</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="artist-email"
                          type="email"
                          placeholder="Enter your email"
                          value={artistForm.email}
                          onChange={(e) => setArtistForm({...artistForm, email: e.target.value})}
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="artist-password">Password</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="artist-password"
                          type={showPassword ? "text" : "password"}
                          placeholder="Enter your password"
                          value={artistForm.password}
                          onChange={(e) => setArtistForm({...artistForm, password: e.target.value})}
                          className="pl-10 pr-10"
                          required
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="absolute right-0 top-0 h-full px-3"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </Button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <Link to="/forgot-password" className="text-sm text-primary hover:underline">
                        Forgot password?
                      </Link>
                    </div>

                    <Button type="submit" className="w-full hero-gradient text-white">
                      Sign In to Dashboard
                    </Button>

                    <Separator />

                    <div className="text-center">
                      <p className="text-sm text-muted-foreground">
                        New artist?{' '}
                        <Button variant="link" className="p-0 h-auto text-primary" onClick={() => setIsSignup(true)}>
                          Apply to join
                        </Button>
                      </p>
                    </div>
                  </form>
                ) : (
                  <form onSubmit={handleArtistSignup} className="space-y-4">
                    <CardTitle className="text-xl text-center mb-6">Artist Application</CardTitle>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="artist-name">Full Name</Label>
                        <Input
                          id="artist-name"
                          placeholder="Your name"
                          value={artistSignup.name}
                          onChange={(e) => setArtistSignup({...artistSignup, name: e.target.value})}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="artist-phone">Phone</Label>
                        <Input
                          id="artist-phone"
                          type="tel"
                          placeholder="Your phone"
                          value={artistSignup.phone}
                          onChange={(e) => setArtistSignup({...artistSignup, phone: e.target.value})}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="artist-signup-email">Email</Label>
                      <Input
                        id="artist-signup-email"
                        type="email"
                        placeholder="Your email address"
                        value={artistSignup.email}
                        onChange={(e) => setArtistSignup({...artistSignup, email: e.target.value})}
                        required
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="artist-craft">Primary Craft</Label>
                        <Input
                          id="artist-craft"
                          placeholder="e.g., Pottery"
                          value={artistSignup.craft}
                          onChange={(e) => setArtistSignup({...artistSignup, craft: e.target.value})}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="artist-experience">Experience</Label>
                        <Input
                          id="artist-experience"
                          placeholder="e.g., 15 years"
                          value={artistSignup.experience}
                          onChange={(e) => setArtistSignup({...artistSignup, experience: e.target.value})}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="artist-location">Location</Label>
                      <Input
                        id="artist-location"
                        placeholder="City, State"
                        value={artistSignup.location}
                        onChange={(e) => setArtistSignup({...artistSignup, location: e.target.value})}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="artist-signup-password">Password</Label>
                      <Input
                        id="artist-signup-password"
                        type="password"
                        placeholder="Create a password"
                        value={artistSignup.password}
                        onChange={(e) => setArtistSignup({...artistSignup, password: e.target.value})}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="artist-confirm-password">Confirm Password</Label>
                      <Input
                        id="artist-confirm-password"
                        type="password"
                        placeholder="Confirm your password"
                        value={artistSignup.confirmPassword}
                        onChange={(e) => setArtistSignup({...artistSignup, confirmPassword: e.target.value})}
                        required
                      />
                    </div>

                    <Button type="submit" className="w-full hero-gradient text-white">
                      Submit Application
                    </Button>

                    <Separator />

                    <div className="text-center">
                      <p className="text-sm text-muted-foreground">
                        Already registered?{' '}
                        <Button variant="link" className="p-0 h-auto text-primary" onClick={() => setIsSignup(false)}>
                          Sign in
                        </Button>
                      </p>
                    </div>
                  </form>
                )}
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;