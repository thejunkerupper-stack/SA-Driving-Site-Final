import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const FAQs = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h1>
            <p className="text-lg opacity-90 mb-8">
              Find answers to common questions about our driving programs
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              <Card className="shadow-elevation">
                <CardHeader>
                  <CardTitle className="text-lg">What areas do you serve?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We serve all of Loudoun County, Virginia and surrounding areas in Northern Virginia.
                  </p>
                </CardContent>
              </Card>
              <Card className="shadow-elevation">
                <CardHeader>
                  <CardTitle className="text-lg">How do I schedule a driving lesson?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    You can register online through our registration page, or call us directly to schedule your lessons at a time that works for you.
                  </p>
                </CardContent>
              </Card>
              <Card className="shadow-elevation">
                <CardHeader>
                  <CardTitle className="text-lg">What do I need to bring to my first lesson?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Please bring your valid learner's permit or driver's license. We'll provide everything else you need for the lesson.
                  </p>
                </CardContent>
              </Card>
              <Card className="shadow-elevation">
                <CardHeader>
                  <CardTitle className="text-lg">Can I cancel or reschedule a lesson?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Yes, we offer flexible rescheduling. Please contact us at least 24 hours in advance to reschedule without penalty.
                  </p>
                </CardContent>
              </Card>
              <Card className="shadow-elevation">
                <CardHeader>
                  <CardTitle className="text-lg">How long does each driving lesson last?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our standard driving lessons are typically 2 hours long, providing ample time for instruction and practice.
                  </p>
                </CardContent>
              </Card>
              <Card className="shadow-elevation">
                <CardHeader>
                  <CardTitle className="text-lg">Do you provide a vehicle for the driving test?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Yes, we provide a fully insured, well-maintained vehicle for both lessons and the DMV road test.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQs;