import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { CreditCard, DollarSign, CheckCircle } from "lucide-react";
import { useState } from "react";

const Payment = () => {
  const { toast } = useToast();
  const [paymentData, setPaymentData] = useState({
    service: "",
    amount: "",
    name: "",
    email: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const services = [
    { value: "teen-license", label: "Teen License Behind the Wheel - $495", amount: "495" },
    { value: "single-lesson", label: "Single Driving Lesson - $65", amount: "65" },
    { value: "5-lessons", label: "5-Lesson Package - $300", amount: "300" },
    { value: "10-lessons", label: "10-Lesson Package - $550", amount: "550" },
    { value: "driver-improvement", label: "Online Driver Improvement - $100", amount: "100" },
  ];

  const handleServiceChange = (value: string) => {
    const selected = services.find((s) => s.value === value);
    setPaymentData({
      ...paymentData,
      service: value,
      amount: selected?.amount || "",
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Payment Processed!",
      description: "Thank you for your payment. You'll receive a confirmation email shortly.",
    });
    // Reset form
    setPaymentData({
      service: "",
      amount: "",
      name: "",
      email: "",
      cardNumber: "",
      expiry: "",
      cvv: "",
    });
  };

  return (
    <div className="min-h-screen py-12 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">Register For A Course</h1>
            <p className="text-xl text-muted-foreground">
              Secure payment processing for all our services
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Payment Form */}
            <div className="md:col-span-2">
              <Card className="shadow-strong">
                <CardHeader>
                  <CardTitle>Payment Details</CardTitle>
                  <CardDescription>Please enter your payment information</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Service Selection */}
                    <div className="space-y-2">
                      <Label htmlFor="service">Select Service *</Label>
                      <Select value={paymentData.service} onValueChange={handleServiceChange}>
                        <SelectTrigger>
                          <SelectValue placeholder="Choose a service" />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((service) => (
                            <SelectItem key={service.value} value={service.value}>
                              {service.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Amount */}
                    <div className="space-y-2">
                      <Label htmlFor="amount">Amount ($)</Label>
                      <div className="relative">
                        <DollarSign className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                        <Input
                          id="amount"
                          readOnly
                          value={paymentData.amount ? `$${paymentData.amount}` : ''}
                          className="pl-8 bg-muted"
                          placeholder="Select a service to see price"
                        />
                      </div>
                    </div>

                    {/* Personal Info */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          required
                          value={paymentData.name}
                          onChange={(e) => setPaymentData({ ...paymentData, name: e.target.value })}
                          placeholder="John Doe"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          value={paymentData.email}
                          onChange={(e) => setPaymentData({ ...paymentData, email: e.target.value })}
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    {/* Card Info */}
                    <div className="space-y-4 pt-4 border-t border-border">
                      <div className="flex items-center gap-2 text-sm font-medium">
                        <CreditCard className="w-4 h-4" />
                        <span>Card Information</span>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cardNumber">Card Number *</Label>
                        <Input
                          id="cardNumber"
                          required
                          value={paymentData.cardNumber}
                          onChange={(e) => setPaymentData({ ...paymentData, cardNumber: e.target.value })}
                          placeholder="1234 5678 9012 3456"
                          maxLength={19}
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="expiry">Expiry Date *</Label>
                          <Input
                            id="expiry"
                            required
                            value={paymentData.expiry}
                            onChange={(e) => setPaymentData({ ...paymentData, expiry: e.target.value })}
                            placeholder="MM/YY"
                            maxLength={5}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="cvv">CVV *</Label>
                          <Input
                            id="cvv"
                            required
                            value={paymentData.cvv}
                            onChange={(e) => setPaymentData({ ...paymentData, cvv: e.target.value })}
                            placeholder="123"
                            maxLength={4}
                          />
                        </div>
                      </div>
                    </div>

                    <Button type="submit" size="lg" className="w-full bg-gradient-primary">
                      <DollarSign className="w-5 h-5 mr-2" />
                      Process Payment
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Payment Info Sidebar */}
            <div className="space-y-6">
              <Card className="shadow-elevation">
                <CardHeader>
                  <CardTitle>Secure Payment</CardTitle>
                  <CardDescription>Your payment information is safe with us</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm">SSL encrypted connection</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm">PCI compliant processing</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Instant confirmation</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-elevation">
                <CardHeader>
                  <CardTitle>Payment Options</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <p>We accept:</p>
                  <ul className="space-y-1 ml-4">
                    <li>• Visa</li>
                    <li>• Mastercard</li>
                    <li>• American Express</li>
                    <li>• Discover</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-elevation bg-secondary">
                <CardHeader>
                  <CardTitle className="text-lg">Need Help?</CardTitle>
                </CardHeader>
                <CardContent className="text-sm">
                  <p className="mb-4">If you have questions about payment, please contact us.</p>
                  <a href="/contact" className="text-primary hover:underline font-medium">
                    Contact Support →
                  </a>
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
