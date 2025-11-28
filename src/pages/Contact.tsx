import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, Instagram } from "lucide-react";
import { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://tally.so/widgets/embed.js';
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      content: "(703) 982-1400",
      description: "Mon-Fri 7:30AM-5:30PM, Sat 9AM-2PM",
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@sadriving.com",
      description: "We'll respond within 24 hours",
    },
    {
      icon: MapPin,
      title: "Location",
      content: "43521 Old Ryan Rd, Ashburn, VA 20148",
      description: "Serving all of Northern Virginia",
      link: "https://maps.app.goo.gl/whX5CK39XApVn7BBA",
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "Mon-Fri: 7:30AM-5:30PM",
      description: "Sat: 9AM-2PM, Sun: 9AM-12PM",
    },
    {
      icon: Instagram,
      title: "Instagram",
      content: "@sadrivingva",
      description: "Follow us for updates",
      link: "https://www.instagram.com/sadrivingva/",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg opacity-90 mb-8">
              Get in touch with our team for any questions about our driving programs
            </p>
          </div>
        </div>
      </section>

        {/* Contact Info Cards */}
      <section id="contact-info" className="relative py-16 bg-muted scroll-mt-8">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid gap-6">
              {/* First row - 3 cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {contactInfo.slice(0, 3).map((info, index) => (
                  <Card 
                    key={index} 
                    className={`text-center shadow-elevation ${info.link ? 'cursor-pointer transition-transform hover:scale-105' : ''}`}
                    onClick={() => info.link && window.open(info.link, '_blank')}
                  >
                    <CardHeader>
                      <info.icon className="w-10 h-10 text-primary mx-auto mb-2" />
                      <CardTitle className="text-lg">{info.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="font-semibold text-foreground mb-1">{info.content}</p>
                      <p className="text-sm text-muted-foreground">{info.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              {/* Second row - 2 cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:w-2/3 mx-auto">
                {contactInfo.slice(3).map((info, index) => (
                  <Card 
                    key={index + 3}
                    className={`text-center shadow-elevation ${info.link ? 'cursor-pointer transition-transform hover:scale-105' : ''}`}
                    onClick={() => info.link && window.open(info.link, '_blank')}
                  >
                    <CardHeader>
                      <info.icon className="w-10 h-10 text-primary mx-auto mb-2" />
                      <CardTitle className="text-lg">{info.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="font-semibold text-foreground mb-1">{info.content}</p>
                      <p className="text-sm text-muted-foreground">{info.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>

  
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="py-16 scroll-mt-8">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card className="shadow-strong">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Send Us a Message</CardTitle>
                <CardDescription>Fill out the form below and we'll get back to you shortly</CardDescription>
              </CardHeader>
              <CardContent>
                <iframe 
                  data-tally-src="https://tally.so/embed/jaelN4?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" 
                  loading="lazy" 
                  width="100%" 
                  height="324" 
                  frameBorder="0" 
                  marginHeight={0}
                  marginWidth={0}
                  title="Contact form"
                  style={{ border: 'none' }}
                ></iframe>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;
