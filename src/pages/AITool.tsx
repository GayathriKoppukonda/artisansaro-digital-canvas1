import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Sparkles, Copy, RefreshCw, Wand2 } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const AITool = () => {
  const [productDescription, setProductDescription] = useState('');
  const [generatedContent, setGeneratedContent] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Mock AI response for demonstration
  const generateMarketing = async () => {
    if (!productDescription.trim()) {
      toast({
        title: "Error",
        description: "Please enter a product description first.",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate API call delay
    setTimeout(() => {
      const mockResponse = `Transform your space with this exquisite handcrafted ${productDescription.toLowerCase()}, a masterpiece born from generations of traditional Indian craftsmanship. Each piece tells a unique story of heritage and artistry, meticulously created by skilled artisans who have inherited their craft through centuries of cultural tradition. This authentic creation not only serves as a functional item but also as a conversation starter that brings the rich legacy of Indian artistry into your modern lifestyle. Perfect for discerning collectors and those who appreciate the beauty of handmade excellence, this piece represents the perfect fusion of traditional techniques with contemporary appeal. Experience the soul of India's artistic heritage with every use.`;
      
      setGeneratedContent(mockResponse);
      setIsLoading(false);
      toast({
        title: "Content Generated!",
        description: "Your marketing content is ready.",
      });
    }, 2000);

    // In real implementation, this would call the backend API:
    /*
    try {
      const response = await fetch('/api/generate-text', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ productDescription }),
      });
      
      const data = await response.json();
      setGeneratedContent(data.generatedText);
      setIsLoading(false);
    } catch (error) {
      console.error('Error generating content:', error);
      setIsLoading(false);
    }
    */
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedContent);
    toast({
      title: "Copied!",
      description: "Marketing content copied to clipboard.",
    });
  };

  const examples = [
    "Handwoven silk saree with traditional zari work",
    "Terracotta pottery vase with folk art motifs",
    "Brass decorative lamp with intricate engravings",
    "Wooden jewelry box with hand-carved designs",
    "Silver earrings with tribal patterns"
  ];

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
            <Sparkles className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            AI Marketing <span className="text-primary">Assistant</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transform your product descriptions into compelling marketing content 
            that tells the story of your craft and connects with customers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Input Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Wand2 className="h-5 w-5 mr-2 text-primary" />
                Product Description
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="product-description">
                  Describe your handcrafted product
                </Label>
                <Textarea
                  id="product-description"
                  placeholder="e.g., Traditional blue pottery bowl set from Jaipur with floral patterns..."
                  value={productDescription}
                  onChange={(e) => setProductDescription(e.target.value)}
                  className="mt-2 min-h-[120px] resize-none"
                />
              </div>

              <div>
                <Label className="text-sm font-medium mb-3 block">
                  Try these examples:
                </Label>
                <div className="grid gap-2">
                  {examples.map((example, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      className="text-left justify-start h-auto py-2 px-3"
                      onClick={() => setProductDescription(example)}
                    >
                      {example}
                    </Button>
                  ))}
                </div>
              </div>

              <Button 
                onClick={generateMarketing}
                disabled={isLoading}
                className="w-full hero-gradient text-white"
                size="lg"
              >
                {isLoading ? (
                  <>
                    <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Sparkles className="h-4 w-4 mr-2" />
                    Generate Marketing Content
                  </>
                )}
              </Button>
            </CardContent>
          </Card>

          {/* Output Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="flex items-center">
                  <Sparkles className="h-5 w-5 mr-2 text-primary" />
                  Generated Content
                </span>
                {generatedContent && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={copyToClipboard}
                  >
                    <Copy className="h-4 w-4 mr-2" />
                    Copy
                  </Button>
                )}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {generatedContent ? (
                <div className="space-y-4">
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <p className="text-sm leading-relaxed whitespace-pre-wrap">
                      {generatedContent}
                    </p>
                  </div>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>Content generated successfully</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={generateMarketing}
                      disabled={isLoading}
                    >
                      <RefreshCw className="h-3 w-3 mr-1" />
                      Regenerate
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="text-center py-8 text-muted-foreground">
                  <Sparkles className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>Your generated marketing content will appear here</p>
                  <p className="text-sm mt-2">Enter a product description and click generate to get started</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* How it Works */}
        <Card className="mt-12">
          <CardHeader>
            <CardTitle>How AI Marketing Assistant Works</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                  <span className="text-primary font-bold">1</span>
                </div>
                <h3 className="font-semibold mb-2">Describe Your Product</h3>
                <p className="text-sm text-muted-foreground">
                  Provide details about your handcrafted item, including materials, techniques, and unique features.
                </p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                  <span className="text-primary font-bold">2</span>
                </div>
                <h3 className="font-semibold mb-2">AI Processing</h3>
                <p className="text-sm text-muted-foreground">
                  Our AI analyzes your description and crafts compelling marketing content that highlights the craftsmanship.
                </p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                  <span className="text-primary font-bold">3</span>
                </div>
                <h3 className="font-semibold mb-2">Ready to Use</h3>
                <p className="text-sm text-muted-foreground">
                  Get professional marketing copy that tells your product's story and connects with customers.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Features */}
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Perfect for Artisans</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Highlights traditional craftsmanship
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Emphasizes cultural heritage
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Creates emotional connections
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Professional marketing language
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Powered by AI</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Gemini AI integration
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Instant content generation
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Multiple content variations
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  SEO-friendly descriptions
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AITool;