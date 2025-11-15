import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ContractLink } from "@/components/ui/contract-link";
import { Link } from "react-router-dom";
import { Clock, DollarSign, Car, CheckCircle, Users, Award } from "lucide-react";
import { useEffect, useState } from "react";

const TeenLicense = () => {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    // Start animations immediately when component mounts
    const timer = setTimeout(() => {
      setIsAnimated(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  const requirements = [
    "15.5+ years old",
    "Learner's permit",
    "Parent consent",
    "Classroom course",
  ];

  const features = [
    { icon: Clock, title: "7-Day Course", description: "Complete training with road test prep" },
    { icon: Users, title: "50 Min Drive", description: "Behind-the-wheel instruction" },
    { icon: Car, title: "50 Min Watch", description: "Learn from peer observation" },
    { icon: Award, title: "Test Ready", description: "DMV road test preparation" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-3">Teen License Behind the Wheel</h1>
            <p className="text-lg opacity-90 mb-4">
              Professional driving instruction to help teens become safe, confident drivers
            </p>
            <div className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2 rounded-lg font-bold">
              <span>$400</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section id="main-content" className="py-12 scroll-mt-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Features Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {features.map((feature, index) => (
                <Card key={index} className="shadow-sm">
                  <CardHeader className="space-y-2">
                    <feature.icon className="w-8 h-8 text-accent" />
                    <div>
                      <CardTitle className="text-base">{feature.title}</CardTitle>
                      <CardDescription className="text-xs">{feature.description}</CardDescription>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>

            {/* Program Details */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {/* What's Included */}
              <Card className="shadow-elevation">
                <CardHeader>
                  <CardTitle className="text-xl mb-4">What's Included</CardTitle>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-accent" />
                      <span className="text-sm">7 training sessions</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-accent" />
                      <span className="text-sm">DMV certified instructors</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-accent" />
                      <span className="text-sm">Road test prep & scheduling</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-accent" />
                      <span className="text-sm">Pick-up/drop-off service</span>
                    </div>
                  </div>
                </CardHeader>
              </Card>

              {/* Requirements */}
              <Card className="shadow-elevation">
                <CardHeader>
                  <CardTitle className="text-xl mb-4">Requirements</CardTitle>
                  <div className="grid grid-cols-2 gap-3">
                    {requirements.map((req, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-5 h-5 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-xs font-bold">
                          {index + 1}
                        </div>
                        <span className="text-sm">{req}</span>
                      </div>
                    ))}
                  </div>
                </CardHeader>
              </Card>
            </div>

            {/* CTA */}
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-6">Ready to Start?</h2>
              <div className="flex justify-center gap-4">
                <Link to="/payment">
                  <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                    Register Now
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Contract Link */}
            <ContractLink />
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeenLicense;
