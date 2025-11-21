import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Laptop, Clock, Award, CheckCircle, DollarSign, BookOpen } from "lucide-react";

const DriverImprovement = () => {
  const features = [
    {
      icon: Laptop,
      title: "100% Online",
      description: "Complete at your own pace from home",
    },
    {
      icon: Clock,
      title: "Flexible",
      description: "24/7 access to course materials",
    },
    {
      icon: BookOpen,
      title: "Comprehensive",
      description: "State-approved safety curriculum",
    },
    {
      icon: Award,
      title: "DMV Approved",
      description: "Meets all VA requirements",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-3">Online Driver Improvement</h1>
            <p className="text-lg opacity-90 mb-4">
              Improve your driving record and refresh your skills from home
            </p>
            <div className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2 rounded-lg font-bold">
              <DollarSign className="w-5 h-5" />
              <span>Competitive Pricing</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Features Grid */}
            <div className="grid md:grid-cols-2 gap-4 mb-12">
              {features.map((feature, index) => (
                <Card key={index} className="shadow-sm">
                  <CardHeader className="space-y-2">
                    <feature.icon className="w-8 h-8 text-accent" />
                    <div>
                      <CardTitle className="text-lg">{feature.title}</CardTitle>
                      <CardDescription>{feature.description}</CardDescription>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>

            {/* Process Steps */}
            <div className="bg-muted rounded-lg p-6 mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6 text-center">How It Works</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">1</div>
                  <h3 className="font-medium mb-1">Register</h3>
                  <p className="text-sm text-muted-foreground">Quick signup, instant access</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">2</div>
                  <h3 className="font-medium mb-1">Complete</h3>
                  <p className="text-sm text-muted-foreground">Study at your own pace</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">3</div>
                  <h3 className="font-medium mb-1">Certificate</h3>
                  <p className="text-sm text-muted-foreground">Submit to DMV/court</p>
                </div>
              </div>
            </div>

            {/* Course Topics */}
            <Card className="shadow-elevation mb-12">
              <CardHeader>
                <CardTitle className="text-2xl text-center mb-4">What You'll Learn</CardTitle>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span>Virginia Traffic Laws</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span>Defensive Driving</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span>Safe Driving Practices</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span>Accident Prevention</span>
                  </div>
                </div>
              </CardHeader>
            </Card>

            {/* CTA */}
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-3">Ready to Improve Your Driving Record?</h2>
              <div className="flex justify-center gap-4">
                <Link to="/payment">
                  <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                    Enroll Now
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DriverImprovement;
