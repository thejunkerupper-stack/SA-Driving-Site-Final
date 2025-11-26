import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Clock, Send, Instagram } from "lucide-react";
import { useState } from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct email body with all form information
    const emailBody = `
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}

${formData.message}
    `;
    
    // Create mailto link with all information
    const mailtoLink = `mailto:hemanya.katram@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(emailBody)}`;
    
    // Open default email client
    window.location.href = mailtoLink;
    
    toast({
      title: "Opening Email Client",
      description: "Your default email app will open to send the message.",
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      content: "(703) 982-1400",
      description: "Mon-Fri 8AM-6PM, Sat 9AM-4PM",
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
      content: "Mon-Fri: 8AM-6PM",
      description: "Sat: 9AM-4PM, Sun: Closed",
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

        {/* Scroll Arrow - positioned lower, centered between cards and form */}
        <button 
          onClick={() => {
            const formSection = document.getElementById('contact-form');
            formSection?.scrollIntoView({ 
              behavior: 'smooth',
              block: 'start'
            });
          }}
          className="absolute bottom-12 left-[48%] -translate-x-1/2 z-10 p-4 text-foreground hover:text-primary transition-all duration-300 motion-safe:animate-[bounce_2s_infinite]"
          aria-label="Scroll to form"
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

      {/* Contact Form */}
      <section id="contact-form" className="py-16 scroll-mt-8">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card className="shadow-strong">
              <CardHeader>
                <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                <CardDescription>Fill out the form below and we'll get back to you shortly</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="What's this regarding?"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us how we can help you..."
                      rows={6}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-gradient-primary"
                    disabled={isSubmitting}
                  >
                    <Send className="w-4 h-4 mr-2" />
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;
