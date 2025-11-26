import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { Link } from "react-router-dom";
import { CreditCard } from "lucide-react";

const Register = () => {
  const { toast } = useToast();

  const coursePrices = {
    "teen-btw": { 
      price: 420, 
      name: "Teen License Behind the Wheel", 
      description: "Complete teen driving program" 
    },
    "adult-waiver": { 
      price: 420, 
      name: "Adult License Waiver Course", 
      description: "Complete waiver program" 
    },
    "online-adult": { 
      price: 157.50, 
      name: "Online Drivers Education - Adult", 
      description: "Complete online course" 
    },
    "online-teen": { 
      price: 183.75, 
      name: "Online Drivers Education - Teen", 
      description: "Complete online course" 
    },
    "feedback": { 
      price: 105, 
      name: "Feedback Driving Lesson", 
      description: "Single feedback session" 
    },
    "2-lessons": { 
      price: 199.50, 
      name: "2 Driving Lessons", 
      description: "Package of 2 lessons" 
    },
    "3-lessons": { 
      price: 283.50, 
      name: "3 Driving Lessons", 
      description: "Package of 3 lessons" 
    },
    "4-lessons": { 
      price: 378, 
      name: "4 Driving Lessons", 
      description: "Package of 4 lessons" 
    },
    "5-lessons": { 
      price: 472.50, 
      name: "5 Driving Lessons", 
      description: "Package of 5 lessons" 
    }
  };

  const paymentMethods = [
    {
      id: "cash",
      name: "Cash",
      description: "In person only at the 1st session, receipt will be issued upon request"
    },
    {
      id: "check",
      name: "Check",
      description: "Payable to SA Driving School Inc"
    },
    {
      id: "credit-card",
      name: "Credit Card",
      description: "Via Square (5% service fee applies)"
    },
    {
      id: "zelle",
      name: "Zelle",
      description: "Send to info@sadriving.com"
    }
  ];

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    studentPhone: "",
    parentPhone: "",
    address: "",
    permitDateIssued: "",
    dateOfBirth: "",
    course: "",
    paymentMethod: "",
    comments: "",
  });

  const calculateTotalPrice = () => {
    if (!formData.course) return null;
    const coursePrice = coursePrices[formData.course].price;
    if (coursePrice === null) return "Contact Us";
    return coursePrice;
  };

  const validateForm = () => {
    if (!formData.course) return "Please select a course";
    if (!formData.firstName.trim() || !formData.lastName.trim()) return "Please enter your full name";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) return "Please enter a valid email address";
    if (!formData.studentPhone.trim()) return "Please enter student phone number";
    if (!formData.address.trim()) return "Please enter address";
    if (!formData.permitDateIssued) return "Please enter permit date issued";
    if (!formData.dateOfBirth) return "Please enter date of birth";
    if (!formData.paymentMethod) return "Please select a payment method";
    
    const today = new Date();
    const birthDate = new Date(formData.dateOfBirth);
    const age = today.getFullYear() - birthDate.getFullYear();
    if (age < 15) return "You must be at least 15 years old to register";
    
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationError = validateForm();
    
    if (validationError) {
      toast({
        title: "Error",
        description: validationError,
        variant: "destructive",
      });
      return;
    }

    // In a real application, you would integrate with a payment processor here
    try {
      // Simulating processing
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const total = calculateTotalPrice();
      let successMessage = "";
      
      switch(formData.paymentMethod) {
        case "cash":
          successMessage = `Registration successful! Please bring $${total} in cash to your first session.`;
          break;
        case "check":
          successMessage = `Registration successful! Please bring a check for $${total} payable to SA Driving School Inc.`;
          break;
        case "zelle":
          successMessage = `Registration successful! Please send $${total} via Zelle to info@sadriving.com`;
          break;
        case "credit-card":
          successMessage = `Payment Successful! Thank you for choosing SA Driving School.`;
          break;
      }
      
      toast({
        title: "Registration Successful!",
        description: successMessage,
      });

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        studentPhone: "",
        parentPhone: "",
        address: "",
        permitDateIssued: "",
        dateOfBirth: "",
        course: "",
        paymentMethod: "",
        comments: "",
      });
    } catch (error) {
      toast({
        title: "Payment Failed",
        description: "There was an error processing your payment. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen py-12 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">Register for a Course</h1>
            <p className="text-xl text-muted-foreground">
              Fill out the form below to enroll in one of our driving programs
            </p>
          </div>

          <Card className="shadow-strong">
            <CardHeader>
              <CardTitle>Student Information</CardTitle>
              <CardDescription>Please provide accurate information for enrollment</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      required
                      value={formData.firstName}
                      onChange={(e) => handleChange("firstName", e.target.value)}
                      placeholder="John"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      required
                      value={formData.lastName}
                      onChange={(e) => handleChange("lastName", e.target.value)}
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      placeholder="john.doe@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="studentPhone">Student Phone Number *</Label>
                    <Input
                      id="studentPhone"
                      type="tel"
                      required
                      value={formData.studentPhone}
                      onChange={(e) => handleChange("studentPhone", e.target.value)}
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="parentPhone">Parent Phone Number (Optional)</Label>
                    <Input
                      id="parentPhone"
                      type="tel"
                      value={formData.parentPhone}
                      onChange={(e) => handleChange("parentPhone", e.target.value)}
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                    <Input
                      id="dateOfBirth"
                      type="date"
                      required
                      value={formData.dateOfBirth}
                      onChange={(e) => handleChange("dateOfBirth", e.target.value)}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Address *</Label>
                  <Input
                    id="address"
                    required
                    value={formData.address}
                    onChange={(e) => handleChange("address", e.target.value)}
                    placeholder="123 Main St, City, State, ZIP"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="permitDateIssued">Permit Date Issued *</Label>
                    <Input
                      id="permitDateIssued"
                      type="date"
                      required
                      value={formData.permitDateIssued}
                      onChange={(e) => handleChange("permitDateIssued", e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="course">Select Course *</Label>
                    <Select value={formData.course} onValueChange={(value) => handleChange("course", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose a course" />
                      </SelectTrigger>
                      <SelectContent>
                        {Object.entries(coursePrices).map(([key, course]) => (
                          <SelectItem key={key} value={key} className="py-3">
                            <div>
                              <div className="font-medium">{course.name}</div>
                              <div className="text-sm text-muted-foreground">{course.description}</div>
                              <div className="text-sm font-semibold text-primary">${course.price}</div>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {formData.course && (
                  <div className="space-y-6 pt-6 border-t">
                    <div className="flex items-center gap-2">
                      <CreditCard className="w-5 h-5" />
                      <h3 className="text-lg font-semibold">Payment Method</h3>
                    </div>

                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {paymentMethods.map((method) => (
                          <div
                            key={method.id}
                            className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                              formData.paymentMethod === method.id
                                ? "border-primary bg-primary/5"
                                : "border-border hover:border-primary/50"
                            }`}
                            onClick={() => handleChange("paymentMethod", method.id)}
                          >
                            <div className="flex items-center gap-2">
                              <input
                                type="radio"
                                checked={formData.paymentMethod === method.id}
                                onChange={() => handleChange("paymentMethod", method.id)}
                                className="text-primary"
                              />
                              <div>
                                <h4 className="font-medium">{method.name}</h4>
                                <p className="text-sm text-muted-foreground">{method.description}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                <div className="space-y-2">
                  <Label htmlFor="comments">Additional Comments or Questions</Label>
                  <Textarea
                    id="comments"
                    value={formData.comments}
                    onChange={(e) => handleChange("comments", e.target.value)}
                    placeholder="Let us know if you have any specific needs or questions..."
                    rows={4}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full bg-gradient-accent">
                  {calculateTotalPrice() === "Contact Us" ? "Submit Inquiry" : "Complete Registration"}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="mt-8 text-center text-muted-foreground">
            <p>Questions about registration? <Link to="/contact" className="text-primary hover:underline">Contact us</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
