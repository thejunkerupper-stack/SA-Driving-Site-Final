import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted text-muted-foreground mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="font-bold text-lg mb-4">SA Driving School Inc</h3>
            <p className="text-sm opacity-90">
              Professional driving instruction for teens and adults. Licensed and certified instructors committed to your safety and success.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/register" className="opacity-90 hover:opacity-100 transition-opacity">Register</Link></li>
              <li><Link to="/teen-license" className="opacity-90 hover:opacity-100 transition-opacity">Teen License</Link></li>
              <li><Link to="/driving-lessons" className="opacity-90 hover:opacity-100 transition-opacity">Driving Lessons</Link></li>
              <li><Link to="/payment" className="opacity-90 hover:opacity-100 transition-opacity">Payment</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="opacity-90">(703) 982-1400</span>
              </li>
              <li className="flex items-start space-x-2">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="opacity-90">info@sadriving.com</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="opacity-90">43521 Old Ryan Rd, Ashburn, VA 20148</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-bold text-lg mb-4">Business Hours</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start space-x-2">
                <Clock className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <div className="opacity-90">
                  <div>Mon - Fri: 8:00 AM - 6:00 PM</div>
                  <div>Sat: 9:00 AM - 4:00 PM</div>
                  <div>Sun: Closed</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm opacity-90">
          <div className="mb-4">
            <a
              href="/contract.pdf"
              className="text-primary hover:underline"
              download="contract.pdf"
            >
              Student Contract Download
            </a>
          </div>
          <p>&copy; {new Date().getFullYear()} SA Driving School Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
