import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Payment = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://tally.so/widgets/embed.js';
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <div className="min-h-screen py-12 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">Register For A Course</h1>
            <p className="text-xl text-muted-foreground">
              Secure payment processing for all our services
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {/* Important Advisories - New Left Column */}
            <div className="md:col-span-1">
              <Card className="shadow-elevation border-amber-200 bg-gradient-to-br from-amber-50 to-orange-50">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2 text-amber-900">
                    <AlertCircle className="w-5 h-5 text-amber-600" />
                    Important Notices
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm text-amber-900">
                    <li className="flex items-start space-x-2">
                      <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                      <span>No sandals, slippers, or slides while driving</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                      <span>Sessions may be cancelled due to inclement weather</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                      <span>Course cancelled if no response for 30+ days (no refunds)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                      <span>$50 cancellation fee if not ready after 1st session</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Payment Form - Middle Column */}
            <div className="md:col-span-2">
              <Card className="shadow-strong">
                <CardHeader>
                  <CardTitle className="text-foreground">Registration Details</CardTitle>
                  <CardDescription>Please enter your registration information</CardDescription>
                </CardHeader>
                <CardContent>
                  <iframe 
                    data-tally-src="https://tally.so/embed/yPXJVx?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" 
                    loading="lazy" 
                    width="100%" 
                    height="1489" 
                    frameBorder="0" 
                    marginHeight={0}
                    marginWidth={0}
                    title="Registration form"
                    style={{ border: 'none' }}
                  ></iframe>
                  <div className="mt-6">
                    <a
                      href={`${import.meta.env.BASE_URL}contract.pdf`}
                      download="SA-Driving-School-Contract.pdf"
                      className="w-full block"
                    >
                      <Button type="button" variant="outline" size="lg" className="w-full">
                        <Download className="w-4 h-4 mr-2" />
                        Download Contract
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Payment Info Sidebar - Right Column */}
            <div className="md:col-span-1 space-y-6">
              <Card className="shadow-elevation">
                <CardHeader>
                  <CardTitle>We Accept</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-sm">
                  <div>
                    <p className="font-semibold">Cash:</p>
                    <p className="text-muted-foreground">In person only at the 1st session, receipt will be issued upon request.</p>
                  </div>
                  <div>
                    <p className="font-semibold">Check:</p>
                    <p className="text-muted-foreground">Payable to SA Driving School Inc</p>
                  </div>
                  <div>
                    <p className="font-semibold">Credit Card:</p>
                    <p className="text-muted-foreground">Via Square (5% service fee)</p>
                  </div>
                  <div>
                    <p className="font-semibold">Zelle:</p>
                    <p className="text-muted-foreground">Send to info@sadriving.com</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-elevation" style={{ backgroundColor: 'hsl(24, 80%, 50%)' }}>
                <CardHeader>
                  <CardTitle className="text-white">Make an Online Credit Card Payment</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <img 
                    src={`${import.meta.env.BASE_URL}creditcards.png`} 
                    alt="Accepted credit cards" 
                    className="w-full max-w-[200px] mx-auto"
                  />
                  <a 
                    href="https://sa-driving-school-inc.square.site/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button className="w-full bg-white hover:bg-gray-100" style={{ color: 'hsl(24, 80%, 50%)' }}>
                      Pay Online Now →
                    </Button>
                  </a>
                </CardContent>
              </Card>

              <Card className="shadow-elevation bg-secondary">
                <CardHeader>
                  <CardTitle className="text-lg">Need Help?</CardTitle>
                </CardHeader>
                <CardContent className="text-sm">
                  <p className="mb-4">If you have questions about payment, please contact us.</p>
                  <Link to="/contact" className="text-primary hover:underline font-medium">
                    Contact Support →
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
