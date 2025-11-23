import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ContractLink } from "@/components/ui/contract-link";
import { Link } from "react-router-dom";
import { Clock, DollarSign, Car, CheckCircle, Users, Award, MapPin, Calendar, AlertTriangle, FileText } from "lucide-react";
import { useEffect, useState } from "react";

const TeenLicense = () => {
  const [isAnimated, setIsAnimated] = useState(false);

  // Carousel state for side images
  const carouselImages = [
    `${import.meta.env.BASE_URL}teendriverssadriving.jpg`,
    `${import.meta.env.BASE_URL}sadrivingimage2.jpg`,
    `${import.meta.env.BASE_URL}sadrivingimage3.jpg`,
  ];
  const [carouselIndex, setCarouselIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCarouselIndex((i) => (i + 1) % carouselImages.length);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    // Start animations immediately when component mounts
    const timer = setTimeout(() => {
      setIsAnimated(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  const requirements = [
    "High School DEC Pink Slip / VADETS DEC Card / Online/In-Person Drivers Ed Certificate",
    "45hrs Training Hours Completed (30h Day & 15h Night)",
    "Learner's Permit close to 9 months from issue date",
    "Parent Contract signed",
  ];

  const features = [
    { icon: Clock, title: "7-Day Course", description: "Two 50min sessions each day + Road Test" },
    { icon: Users, title: "Driving & Observation", description: "Behind-the-wheel instruction and peer learning" },
    { icon: Award, title: "Road Test Included", description: "Complete assessment of driving skills" },
    { icon: MapPin, title: "Pick-up Service", description: "Free pickup and drop-off within range" },
  ];

  const scheduleInfo = [
    "Flexible on weekdays & holidays",
    "Preferred start day: Monday",
    "Before/after school availability",
    "Sessions can be made up",
    "Time of Operation: 7am-7pm",
    "Students paired with others",
  ];

  const importantNotes = [
    "No sandals/slippers/slides while driving",
    "Sessions may cancel due to inclement weather",
    "$50 cancellation fee if not ready after 1st session",
    "Course cancelled if no response for 30+ days (no refunds)",
    "45hrs minimum training required",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative text-primary-foreground py-24 md:py-32 overflow-hidden">
        {/* Background carousel images */}
        <div className="absolute inset-0">
          {carouselImages.map((src, i) => (
            <div
              key={i}
              className={`absolute inset-0 transition-opacity duration-1500 ${carouselIndex === i ? 'opacity-100' : 'opacity-0'}`}
            >
              <img
                src={src}
                alt={`banner-${i}`}
                className={`w-full h-full object-cover ${i === 2 ? 'object-[center_80%]' : ''}`}
              />
              {/* Dark overlay to decrease brightness */}
              <div className="absolute inset-0 bg-black/60"></div>
            </div>
          ))}
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-3 text-white drop-shadow-lg">Teen License Behind the Wheel</h1>
            <p className="text-lg opacity-90 mb-4 text-white drop-shadow-md">
              Professional driving instruction to help teens become safe, confident drivers
            </p>
            <div className="mt-6" />
            <div className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2 rounded-lg font-bold shadow-lg">
              <span>$400</span>
            </div>
          </div>
        </div>

      </section>

      {/* Banner CTA placed directly under hero (pushes content down) */}
      <div className="container mx-auto px-4 my-10 md:my-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Start?</h2>
          <div className="flex justify-center gap-4">
            <Link to="/payment">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">Register Now</Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline">Contact Us</Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section id="main-content" className="pt-0 pb-12 scroll-mt-8">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Features Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
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
                    <div>
                      <span className="text-sm">• 7-day complete course</span>
                    </div>
                    <div>
                      <span className="text-sm">• Driving & Observation sessions</span>
                    </div>
                    <div>
                      <span className="text-sm">• Road Test included</span>
                    </div>
                    <div>
                      <span className="text-sm">• Free pick-up/drop-off service</span>
                    </div>
                    <div>
                      <span className="text-sm">• 180-day temporary license</span>
                    </div>
                  </div>
                </CardHeader>
              </Card>

              {/* Requirements */}
              <Card className="shadow-elevation">
                <CardHeader>
                  <CardTitle className="text-xl mb-4">Requirements</CardTitle>
                  <div className="space-y-3">
                    {requirements.map((req, index) => (
                      <div key={index}>
                        <span className="text-sm">• {req}</span>
                      </div>
                    ))}
                  </div>
                </CardHeader>
              </Card>
            </div>

            {/* Schedule Information */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <Card className="shadow-elevation">
                <CardHeader>
                  <CardTitle className="text-xl mb-4">Schedule & Information</CardTitle>
                  <div className="space-y-2">
                    {scheduleInfo.map((info, index) => (
                      <div key={index}>
                        <span className="text-sm">• {info}</span>
                      </div>
                    ))}
                  </div>
                </CardHeader>
              </Card>

              <Card className="shadow-elevation">
                <CardHeader>
                  <CardTitle className="text-xl mb-4">Important Notes</CardTitle>
                  <div className="space-y-2">
                    {importantNotes.map((note, index) => (
                      <div key={index}>
                        <span className="text-sm">• {note}</span>
                      </div>
                    ))}
                  </div>
                </CardHeader>
              </Card>
            </div>

            {/* Upon Completion */}
            <Card className="shadow-elevation mb-12">
              <CardHeader>
                <CardTitle className="text-xl mb-4">Upon Completion</CardTitle>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Temporary License</h4>
                    <p className="text-sm text-muted-foreground">
                      Teen receives a 180-day (6 months) temporary Virginia drivers license through SA Driving School Inc.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Physical License</h4>
                    <p className="text-sm text-muted-foreground">
                      Within 60-90 days of completion, you will automatically receive your drivers license from DMV (Richmond) in the mail.
                    </p>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-muted rounded-lg">
                  <p className="text-xs text-muted-foreground">
                    <strong>Note:</strong> SA Driving School Inc submits all Teen License paperwork at the end of each month to the DMV. 
                    As of 7/15/2024, DMV will NOT process any license documents at customer service centers - you will receive it by mail.
                  </p>
                </div>
              </CardHeader>
            </Card>

            {/* CTA moved into banner */}
            
            {/* Contract Link */}
            <ContractLink />
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeenLicense;
