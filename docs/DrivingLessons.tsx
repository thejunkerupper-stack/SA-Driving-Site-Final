import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Car, Clock, MapPin, Award, CheckCircle, DollarSign } from "lucide-react";

const DrivingLessons = () => {
  const packages = [
    {
      title: "Single Lesson",
      price: "$60",
      duration: "1 Hour",
      description: "Quick refresher or specific skills",
      features: [
        "1 hour instruction",
        "Pick-up/drop-off",
        "Flexible timing",
        "One-on-one focus",
      ],
    },
    {
      title: "5-Lesson Pack",
      price: "$275",
      duration: "5 Hours",
      description: "Build confidence and skills",
      features: [
        "Save $25",
        "Track progress",
        "Priority booking",
        "Skill development",
      ],
      popular: true,
    },
    {
      title: "10-Lesson Pack",
      price: "$500",
      duration: "10 Hours",
      description: "Complete driver training",
      features: [
        "Save $100",
        "Road test prep",
        "Full coverage",
        "Best value",
      ],
    },
  ];

  const benefits = [
    {
      icon: Award,
      title: "DMV Certified",
      description: "Professional instructors with years of experience",
    },
    {
      icon: Car,
      title: "Safe Vehicles",
      description: "Dual-control cars with modern safety features",
    },
    {
      icon: MapPin,
      title: "Pick-up Service",
      description: "Convenient pick-up and drop-off locations",
    },
    {
      icon: Clock,
      title: "Flexible Hours",
      description: "Schedule lessons at your convenience",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-3">Individual Driving Lessons</h1>
            <p className="text-lg opacity-90">
              One-on-one instruction for all skill levels
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Benefits */}
            <div className="grid md:grid-cols-4 gap-4 mb-12">
              {benefits.map((benefit, index) => (
                <Card key={index} className="shadow-sm">
                  <CardHeader className="space-y-2">
                    <benefit.icon className="w-8 h-8 text-accent" />
                    <div>
                      <CardTitle className="text-base">{benefit.title}</CardTitle>
                      <CardDescription className="text-sm">{benefit.description}</CardDescription>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>

            {/* Packages */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {packages.map((pkg, index) => (
                <Card
                  key={index}
                  className={`shadow-sm relative ${
                    pkg.popular ? "border-2 border-accent shadow-elevation" : ""
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-3 py-0.5 rounded-full text-xs font-bold">
                      Popular
                    </div>
                  )}
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-xl mb-2">{pkg.title}</CardTitle>
                    <div className="flex items-center justify-center gap-1 text-3xl font-bold text-accent mb-1">
                      <DollarSign className="w-6 h-6" />
                      <span>{pkg.price.replace("$", "")}</span>
                    </div>
                    <div className="text-sm text-muted-foreground mb-2">{pkg.duration}</div>
                    <CardDescription>{pkg.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-4 text-sm">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link to="/payment">
                      <Button
                        className={`w-full ${pkg.popular ? "bg-gradient-accent" : ""}`}
                        variant={pkg.popular ? "default" : "outline"}
                      >
                        Book Now
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Skills Grid */}
            <Card className="shadow-elevation mb-12">
              <CardHeader>
                <CardTitle className="text-2xl text-center mb-6">What You'll Learn</CardTitle>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    <span>Vehicle Control</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    <span>Parking Skills</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    <span>Highway Driving</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    <span>City Navigation</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    <span>Defensive Driving</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    <span>Road Test Prep</span>
                  </div>
                </div>
              </CardHeader>
            </Card>

            {/* CTA */}
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-6">Ready to Start?</h2>
              <div className="flex justify-center gap-4">
                <Link to="/payment">
                  <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                    Book Now
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

export default DrivingLessons;
