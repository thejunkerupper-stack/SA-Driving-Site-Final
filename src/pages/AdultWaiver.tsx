import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Car, Clock, MapPin, Award, CheckCircle, AlertCircle, FileText } from "lucide-react";

const AdultWaiver = () => {
  const courses = [
    {
      title: "Adult Waiver Course",
      price: "$400",
      duration: "7 Days",
      description: "Complete waiver course with road test",
      features: [
        "Two 50-min sessions each day",
        "Driving & Observation included",
        "Road Test included",
        "DTS-D Waiver form upon completion",
      ],
      requirements: [
        "18 years old or over",
        "30hrs prior driving experience",
        "Virginia Driver's Ed Certificate",
        "Learner's Permit + Photocopy",
      ],
    },
    {
      title: "Online Driver's Ed",
      price: "$150",
      duration: "Self-Paced",
      description: "Required prerequisite for Adult Waiver",
      features: [
        "30hrs online course",
        "7 chapters with quizzes",
        "Final test included",
        "Certificate issued upon completion",
      ],
      requirements: [
        "Payment in advance",
        "User ID & Password provided",
        "Required for Adult Waiver Course",
        "Non-refundable",
      ],
    },
  ];

  const benefits = [
    {
      icon: Award,
      title: "DMV Certified",
      description: "Professional driving assessment course",
    },
    {
      icon: Car,
      title: "Road Test Included",
      description: "Complete course with road test evaluation",
    },
    {
      icon: MapPin,
      title: "Free Pickup",
      description: "Pickup & dropoff within range",
    },
    {
      icon: Clock,
      title: "Flexible Schedule",
      description: "Weekdays & holidays available",
    },
  ];

  const scheduleDetails = [
    "Flexible on weekdays & holidays",
    "Sessions can be made up",
    "Does not have to be consecutive days",
    "Time of operation: 7am-7pm",
    "Preferred start day: Mondays",
    "Email confirmation within 24hrs",
  ];

  const completionInfo = [
    "Student receives DTS-D Waiver form",
    "DTS-D exempts you from DMV Road Test",
    "SA Driving School mails DTS-D to DMV Richmond",
    "Processing takes up to 2 weeks",
    "Letter mailed if license cannot be processed",
  ];

  const advisories = [
    "No sandals, slippers, or slides while driving",
    "Sessions may be cancelled due to inclement weather",
    "Course cancelled if no response for 30+ days (no refunds)",
    "$50 cancellation fee if not ready after 1st session",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-primary text-primary-foreground py-12 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-3">Adult Waiver Course</h1>
            <p className="text-lg opacity-90">
              Driving skills assessment for experienced drivers
            </p>
          </div>
        </div>
      </section>

      {/* Banner CTA */}
      <div className="container mx-auto px-4 my-10 md:my-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-xl font-bold mb-3">Ready to Get Your License?</h2>
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
      <section className="pt-0 pb-12">
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

            {/* Course Options */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {courses.map((course, index) => (
                <Card key={index} className="shadow-elevation">
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-xl mb-2">{course.title}</CardTitle>
                    <div className="text-3xl font-bold text-accent mb-1">
                      {course.price}
                    </div>
                    <div className="text-sm text-muted-foreground mb-2">{course.duration}</div>
                    <CardDescription>{course.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <h4 className="font-semibold text-sm mb-2">Features:</h4>
                      <ul className="space-y-2 text-sm">
                        {course.features.map((feature, i) => (
                          <li key={i} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mb-4">
                      <h4 className="font-semibold text-sm mb-2">Requirements:</h4>
                      <ul className="space-y-2 text-sm">
                        {course.requirements.map((req, i) => (
                          <li key={i} className="flex items-center space-x-2">
                            <FileText className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Link to="/payment">
                      <Button className="w-full">
                        Register
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Schedule Details */}
            <Card className="shadow-elevation mb-6">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <Clock className="w-5 h-5 text-accent" />
                  Course Schedule
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-3 text-sm">
                  {scheduleDetails.map((detail, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Upon Completion */}
            <Card className="shadow-elevation mb-6">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <Award className="w-5 h-5 text-accent" />
                  Upon Completion of Course
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  {completionInfo.map((info, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                      <span>{info}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-muted-foreground mt-4 italic">
                  * SA Driving School Inc is not responsible for any delays or processing by the DMV (Richmond).
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdultWaiver;
