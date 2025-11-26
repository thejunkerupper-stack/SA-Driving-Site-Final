import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { DollarSign, CheckCircle, Download } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Payment = () => {
  const { toast } = useToast();
  const [paymentData, setPaymentData] = useState({
    service: "",
    name: "",
    email: "",
    studentCell: "",
    parentCell: "",
    altCell: "",
    address: "",
    contactMethod: "",
    birthday: "",
    permitIssued: "",
    fortyFiveHoursComplete: "",
    driversEdCert: "",
    availability: "",
    highSchool: "",
    drivingExperience: "",
    currentDrivingExp: "",
    nearbyHighSchool: "",
    comments: "",
  });

  const services = [
    { value: "teen-license", label: "Teen License Behind the Wheel", amount: "400", type: "teen" },
    { value: "adult-waiver", label: "Adult License Waiver Course", amount: "400", type: "adult" },
    { value: "teen-online", label: "Teen Online Drivers Ed", amount: "175", type: "adult" },
    { value: "adult-online", label: "Adult Online Drivers Ed", amount: "150", type: "adult" },
    { value: "feedback", label: "Feedback Lesson", amount: "100", type: "lessons" },
    { value: "2-lessons", label: "2 Driving Lessons", amount: "190", type: "lessons" },
    { value: "3-lessons", label: "3 Driving Lessons", amount: "270", type: "lessons" },
    { value: "4-lessons", label: "4 Driving Lessons", amount: "360", type: "lessons" },
    { value: "5-lessons", label: "5 Driving Lessons", amount: "450", type: "lessons" },
    { value: "reexam", label: "Re-examination Course", amount: "400", type: "lessons" },
  ];

  const highSchools = [
    "Briar Woods High School",
    "Broad Run High School", 
    "Dominion High School",
    "Freedom High School",
    "Heritage High School",
    "Independence High School",
    "John Champe High School",
    "Lightridge High School",
    "Loudoun County High School",
    "Loudoun Valley High School",
    "Park View High School",
    "Potomac Falls High School",
    "Riverside High School",
    "Rock Ridge High School",
    "Stone Bridge High School",
    "Tuscarora High School",
    "Woodgrove High School",
    "Other (see comments)"
  ];

  const handleServiceChange = (value: string) => {
    const selected = services.find((s) => s.value === value);
    setPaymentData({
      ...paymentData,
      service: value,
      // Reset conditional fields when service changes
      studentCell: "",
      parentCell: "",
      altCell: "",
      address: "",
      contactMethod: "",
      birthday: "",
      permitIssued: "",
      fortyFiveHoursComplete: "",
      driversEdCert: "",
      availability: "",
      highSchool: "",
      drivingExperience: "",
      currentDrivingExp: "",
      nearbyHighSchool: "",
      comments: "",
    });
  };

  const getServiceType = () => {
    const selected = services.find((s) => s.value === paymentData.service);
    return selected?.type || null;
  };

  const getServiceAmount = () => {
    const selected = services.find((s) => s.value === paymentData.service);
    return selected?.amount || "";
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Registration Successful!",
      description: "Thank you for choosing SA Driving School. We'll contact you shortly!",
    });
    // Reset form
    setPaymentData({
      service: "",
      name: "",
      email: "",
      studentCell: "",
      parentCell: "",
      altCell: "",
      address: "",
      contactMethod: "",
      birthday: "",
      permitIssued: "",
      fortyFiveHoursComplete: "",
      driversEdCert: "",
      availability: "",
      highSchool: "",
      drivingExperience: "",
      currentDrivingExp: "",
      nearbyHighSchool: "",
      comments: "",
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
                  <CardTitle>Registration Details</CardTitle>
                  <CardDescription>Please enter your registration information</CardDescription>
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
                              {service.label} - ${service.amount}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Basic Info - Always shown after service selection */}
                    {paymentData.service && (
                      <>
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

                        {/* Teen License Fields */}
                        {getServiceType() === "teen" && (
                          <>
                            <div className="grid md:grid-cols-2 gap-4">
                              <div className="space-y-2">
                                <Label htmlFor="studentCell">Student Cell *</Label>
                                <Input
                                  id="studentCell"
                                  type="tel"
                                  required
                                  value={paymentData.studentCell}
                                  onChange={(e) => setPaymentData({ ...paymentData, studentCell: e.target.value })}
                                  placeholder="(555) 123-4567"
                                />
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="parentCell">Parent Cell *</Label>
                                <Input
                                  id="parentCell"
                                  type="tel"
                                  required
                                  value={paymentData.parentCell}
                                  onChange={(e) => setPaymentData({ ...paymentData, parentCell: e.target.value })}
                                  placeholder="(555) 123-4567"
                                />
                              </div>
                            </div>

                            <div className="space-y-2">
                              <Label htmlFor="address">Address *</Label>
                              <Input
                                id="address"
                                required
                                value={paymentData.address}
                                onChange={(e) => setPaymentData({ ...paymentData, address: e.target.value })}
                                placeholder="123 Main St, City, State, ZIP"
                              />
                            </div>

                            <div className="space-y-2">
                              <Label htmlFor="contactMethod">Contact Method *</Label>
                              <Select value={paymentData.contactMethod} onValueChange={(value) => setPaymentData({ ...paymentData, contactMethod: value })}>
                                <SelectTrigger>
                                  <SelectValue placeholder="Choose contact method" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="student">Text Message to Student Cell</SelectItem>
                                  <SelectItem value="parent">Text Message to Parent Cell</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>

                            <div className="grid md:grid-cols-2 gap-4">
                              <div className="space-y-2">
                                <Label htmlFor="birthday">Birthday *</Label>
                                <Input
                                  id="birthday"
                                  type="date"
                                  required
                                  value={paymentData.birthday}
                                  onChange={(e) => setPaymentData({ ...paymentData, birthday: e.target.value })}
                                />
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="permitIssued">Permit Issued Date *</Label>
                                <Input
                                  id="permitIssued"
                                  type="date"
                                  required
                                  value={paymentData.permitIssued}
                                  onChange={(e) => setPaymentData({ ...paymentData, permitIssued: e.target.value })}
                                />
                              </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-4">
                              <div className="space-y-2">
                                <Label htmlFor="fortyFiveHours">45 Hours Training Completed *</Label>
                                <Select value={paymentData.fortyFiveHoursComplete} onValueChange={(value) => setPaymentData({ ...paymentData, fortyFiveHoursComplete: value })}>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="yes">Yes</SelectItem>
                                    <SelectItem value="no">No</SelectItem>
                                  </SelectContent>
                                </Select>
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="driversEdCert">Drivers Ed Certificate *</Label>
                                <Select value={paymentData.driversEdCert} onValueChange={(value) => setPaymentData({ ...paymentData, driversEdCert: value })}>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="yes">Yes</SelectItem>
                                    <SelectItem value="no">No</SelectItem>
                                  </SelectContent>
                                </Select>
                              </div>
                            </div>

                            <div className="space-y-2">
                              <Label htmlFor="availability">Availability *</Label>
                              <Select value={paymentData.availability} onValueChange={(value) => setPaymentData({ ...paymentData, availability: value })}>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select availability" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="before">Before School</SelectItem>
                                  <SelectItem value="after">After School</SelectItem>
                                  <SelectItem value="both">Both/Flex</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>

                            <div className="space-y-2">
                              <Label htmlFor="highSchool">Your High School Name (Optional)</Label>
                              <Input
                                id="highSchool"
                                value={paymentData.highSchool}
                                onChange={(e) => setPaymentData({ ...paymentData, highSchool: e.target.value })}
                                placeholder="Enter your high school name"
                              />
                            </div>
                          </>
                        )}

                        {/* Adult License/Online Drivers Ed Fields */}
                        {getServiceType() === "adult" && (
                          <>
                            <div className="grid md:grid-cols-2 gap-4">
                              <div className="space-y-2">
                                <Label htmlFor="studentCell">Student Cell Number *</Label>
                                <Input
                                  id="studentCell"
                                  type="tel"
                                  required
                                  value={paymentData.studentCell}
                                  onChange={(e) => setPaymentData({ ...paymentData, studentCell: e.target.value })}
                                  placeholder="(555) 123-4567"
                                />
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="altCell">Alt Cell (Optional)</Label>
                                <Input
                                  id="altCell"
                                  type="tel"
                                  value={paymentData.altCell}
                                  onChange={(e) => setPaymentData({ ...paymentData, altCell: e.target.value })}
                                  placeholder="(555) 123-4567"
                                />
                              </div>
                            </div>

                            <div className="space-y-2">
                              <Label htmlFor="address">Address *</Label>
                              <Input
                                id="address"
                                required
                                value={paymentData.address}
                                onChange={(e) => setPaymentData({ ...paymentData, address: e.target.value })}
                                placeholder="123 Main St, City, State, ZIP"
                              />
                            </div>

                            <div className="grid md:grid-cols-2 gap-4">
                              <div className="space-y-2">
                                <Label htmlFor="birthday">Birthday *</Label>
                                <Input
                                  id="birthday"
                                  type="date"
                                  required
                                  value={paymentData.birthday}
                                  onChange={(e) => setPaymentData({ ...paymentData, birthday: e.target.value })}
                                />
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="permitIssued">Permit Issued *</Label>
                                <Input
                                  id="permitIssued"
                                  type="date"
                                  required
                                  value={paymentData.permitIssued}
                                  onChange={(e) => setPaymentData({ ...paymentData, permitIssued: e.target.value })}
                                />
                              </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-4">
                              <div className="space-y-2">
                                <Label htmlFor="drivingExperience">Driving Experience *</Label>
                                <Select value={paymentData.drivingExperience} onValueChange={(value) => setPaymentData({ ...paymentData, drivingExperience: value })}>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select experience" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="none">---</SelectItem>
                                    <SelectItem value="10hrs">10 hrs</SelectItem>
                                    <SelectItem value="20hrs">20 hrs</SelectItem>
                                    <SelectItem value="30hrs">30 hrs</SelectItem>
                                  </SelectContent>
                                </Select>
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="driversEdCert">Drivers Ed Certificate *</Label>
                                <Select value={paymentData.driversEdCert} onValueChange={(value) => setPaymentData({ ...paymentData, driversEdCert: value })}>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="yes">Yes</SelectItem>
                                    <SelectItem value="no">No</SelectItem>
                                  </SelectContent>
                                </Select>
                              </div>
                            </div>
                          </>
                        )}

                        {/* Lessons/Feedback/Reexam Fields */}
                        {getServiceType() === "lessons" && (
                          <>
                            <div className="grid md:grid-cols-2 gap-4">
                              <div className="space-y-2">
                                <Label htmlFor="studentCell">Student Cell Number *</Label>
                                <Input
                                  id="studentCell"
                                  type="tel"
                                  required
                                  value={paymentData.studentCell}
                                  onChange={(e) => setPaymentData({ ...paymentData, studentCell: e.target.value })}
                                  placeholder="(555) 123-4567"
                                />
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="altCell">Alt Cell (Optional)</Label>
                                <Input
                                  id="altCell"
                                  type="tel"
                                  value={paymentData.altCell}
                                  onChange={(e) => setPaymentData({ ...paymentData, altCell: e.target.value })}
                                  placeholder="(555) 123-4567"
                                />
                              </div>
                            </div>

                            <div className="space-y-2">
                              <Label htmlFor="address">Address *</Label>
                              <Input
                                id="address"
                                required
                                value={paymentData.address}
                                onChange={(e) => setPaymentData({ ...paymentData, address: e.target.value })}
                                placeholder="123 Main St, City, State, ZIP"
                              />
                            </div>

                            <div className="grid md:grid-cols-2 gap-4">
                              <div className="space-y-2">
                                <Label htmlFor="birthday">Birthday *</Label>
                                <Input
                                  id="birthday"
                                  type="date"
                                  required
                                  value={paymentData.birthday}
                                  onChange={(e) => setPaymentData({ ...paymentData, birthday: e.target.value })}
                                />
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="permitIssued">Permit Issued *</Label>
                                <Input
                                  id="permitIssued"
                                  type="date"
                                  required
                                  value={paymentData.permitIssued}
                                  onChange={(e) => setPaymentData({ ...paymentData, permitIssued: e.target.value })}
                                />
                              </div>
                            </div>

                            <div className="space-y-2">
                              <Label htmlFor="currentDrivingExp">Current Driving Experience *</Label>
                              <Select value={paymentData.currentDrivingExp} onValueChange={(value) => setPaymentData({ ...paymentData, currentDrivingExp: value })}>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select experience level" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="beginner">Beginner - 0 hrs</SelectItem>
                                  <SelectItem value="parking">Parking Lot - 1-5 hours</SelectItem>
                                  <SelectItem value="onroad">On Road - 5-10 hours</SelectItem>
                                  <SelectItem value="experienced">10+ hrs experience</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>

                            <div className="space-y-2">
                              <Label htmlFor="nearbyHighSchool">Nearby High School *</Label>
                              <Select value={paymentData.nearbyHighSchool} onValueChange={(value) => setPaymentData({ ...paymentData, nearbyHighSchool: value })}>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select a high school" />
                                </SelectTrigger>
                                <SelectContent>
                                  {highSchools.map((school) => (
                                    <SelectItem key={school} value={school}>
                                      {school}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </div>
                          </>
                        )}

                        {/* Comments/Requests - shown for all services */}
                        <div className="space-y-2">
                          <Label htmlFor="comments">Comments/Requests (Optional)</Label>
                          <Textarea
                            id="comments"
                            value={paymentData.comments}
                            onChange={(e) => setPaymentData({ ...paymentData, comments: e.target.value })}
                            placeholder="Any additional information or special requests..."
                            rows={4}
                          />
                        </div>

                        <div className="flex flex-col gap-3">
                          <Button type="submit" size="lg" className="w-full bg-gradient-accent">
                            Submit Registration
                          </Button>
                          <a
                            href={`${import.meta.env.BASE_URL}contract.pdf`}
                            download="SA-Driving-School-Contract.pdf"
                            className="w-full"
                          >
                            <Button type="button" variant="outline" size="lg" className="w-full">
                              <Download className="w-4 h-4 mr-2" />
                              Download Contract
                            </Button>
                          </a>
                        </div>
                      </>
                    )}
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Payment Info Sidebar */}
            <div className="space-y-6">
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
