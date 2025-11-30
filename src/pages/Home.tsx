import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { GraduationCap, Car, Shield, Award, Users, Clock, CheckCircle, Instagram } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const Home = () => {
  const [isAnimated, setIsAnimated] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    // Start animations immediately when component mounts
    const timer = setTimeout(() => {
      setIsAnimated(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  const services = [
    {
      icon: GraduationCap,
      title: "Teen License Program",
      description: "Complete behind-the-wheel training for teens.",
      link: "/teen-license",
    },
    {
      icon: Car,
      title: "Driving Lessons",
      description: "Individual lessons for all skill levels.",
      link: "/driving-lessons",
    },
    {
      icon: Shield,
      title: "Driver Improvement",
      description: "Online courses to enhance skills and reduce points.",
      link: "/driver-improvement",
    },
  ];

  const features = [
    { icon: Award, text: "DMV Certified" },
    { icon: Users, text: "Personalized" },
    { icon: Clock, text: "Flexible Hours" },
    { icon: CheckCircle, text: "High Pass Rate" },
  ];

  return (
    <div className="min-h-screen -mt-20">
      {/* Hero Section */}
      <section className="relative text-white h-screen flex flex-col justify-center items-center pt-20" style={{
        background: `linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        {/* Logo overlay */}
        <div className="absolute inset-0" style={{
          backgroundImage: `url("${import.meta.env.BASE_URL}logo.png")`,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.9
        }}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in-up ${
              isAnimated ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'
            }`}>Learn to Drive with Confidence</h1>
            <p className={`text-xl md:text-2xl mb-6 animate-fade-in-up ${
              isAnimated ? 'opacity-90 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'
            }`}>
              Professional driving instruction for teens and adults in Loudoun County, Virginia
            </p>
            <div className={`flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-1000`}>
              <Link to="/payment">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8">
                  Register Now
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary text-lg px-8">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Arrow */}
        <button 
          onClick={() => {
            const mainContent = document.getElementById('main-content');
            mainContent?.scrollIntoView({ 
              behavior: 'smooth',
              block: 'start'
            });
          }}
          className={`absolute bottom-4 z-10 p-4 text-white hover:text-accent transition-all duration-1500 ease-out delay-900 motion-safe:animate-[bounce_2s_infinite] ${
            isAnimated ? 'opacity-100' : 'opacity-0'
          }`}
          aria-label="Scroll to content"
        >
          <svg 
            className="w-8 h-8" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3" 
            />
          </svg>
        </button>
      </section>

      {/* Features and Services */}
      <section id="main-content" className="py-12 scroll-mt-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <feature.icon className="w-8 h-8 text-accent mb-2" />
                <span className="text-sm font-medium text-foreground">{feature.text}</span>
              </div>
            ))}
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="shadow-elevation hover:shadow-strong transition-all duration-300">
                <CardHeader>
                  <service.icon className="w-10 h-10 text-accent mb-3" />
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Link to={service.link}>
                    <Button variant="outline" className="w-full">Learn More</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="border-2 border-border rounded-lg p-6">
                <h2 className="text-3xl font-bold text-foreground mb-4">Why Choose Us?</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span className="text-muted-foreground">Experienced Instructors</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span className="text-muted-foreground">High Pass Rate</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span className="text-muted-foreground">Flexible Schedule</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span className="text-muted-foreground">All Skill Levels</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-gradient-primary rounded-xl p-6 text-primary-foreground">
                <h3 className="text-2xl font-bold mb-2">Ready to Start?</h3>
                <p className="text-sm mb-4 opacity-90">Join hundreds of satisfied students who have learned to drive with us.</p>
                <Link to="/payment">
                  <Button className="bg-accent hover:bg-accent/90 text-accent-foreground w-full">
                    Register Today
                  </Button>
                </Link>
              </div>
              
              <a 
                href="https://www.instagram.com/sadrivingva/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block"
              >
                <Card className="shadow-elevation cursor-pointer transition-transform hover:scale-105">
                  <CardContent className="flex items-center justify-center gap-3 py-4">
                    <Instagram className="w-6 h-6 text-primary" />
                    <div>
                      <p className="font-semibold text-foreground">Follow @sadrivingva</p>
                      <p className="text-xs text-muted-foreground">Stay updated on Instagram</p>
                    </div>
                  </CardContent>
                </Card>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Schools Section */}
      <section className="py-8">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">Serving All Loudoun County High Schools</h2>
          <div className="flex flex-wrap justify-center gap-2 text-sm text-muted-foreground">
            <span className="px-3 py-1 bg-secondary rounded">Rock Ridge</span>
            <span className="px-3 py-1 bg-secondary rounded">Independence</span>
            <span className="px-3 py-1 bg-secondary rounded">Briar Woods</span>
            <span className="px-3 py-1 bg-secondary rounded">Stone Bridge</span>
            <span className="px-3 py-1 bg-secondary rounded">Broad Run</span>
            <span className="px-3 py-1 bg-secondary rounded">Riverside</span>
            <span className="px-3 py-1 bg-secondary rounded">Heritage</span>
            <span className="px-3 py-1 bg-secondary rounded">Potomac Falls</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
