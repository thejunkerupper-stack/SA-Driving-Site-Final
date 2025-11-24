import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navigation = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/payment", label: "Register" },
    { path: "/contact", label: "Contact" },
    { path: "/faqs", label: "FAQs" },
  ];

  const programItems = [
    { path: "/teen-license", label: "Teen License Program" },
    { path: "/driving-lessons", label: "Driving Lessons" },
    { path: "/driver-improvement", label: "Driver Improvement" },
  ];

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      (location.pathname === "/" && !isScrolled) || mobileMenuOpen
        ? 'bg-transparent border-transparent'
        : 'bg-background border-b border-border shadow-sm'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img
              src={`${import.meta.env.BASE_URL}placeholder.svg`}
              alt="SA Driving School"
              className="w-12 h-12 rounded-lg object-cover"
            />
            <div className="flex flex-col">
              <span className={`font-bold text-lg leading-none transition-colors ${
                (location.pathname === "/" && !isScrolled && !mobileMenuOpen) ? 'text-white' : 'text-foreground'
              }`}>SA Driving School</span>
              <span className={`text-xs transition-colors ${
                (location.pathname === "/" && !isScrolled && !mobileMenuOpen) ? 'text-white/80' : 'text-muted-foreground'
              }`}>Inc.</span>
            </div>
          </Link>

          {/* Search Bar removed */}

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <Link to="/">
              <Button
                variant={location.pathname === "/" ? "default" : "ghost"}
                size="sm"
                className={`text-sm ${(location.pathname === "/" && !isScrolled) && !mobileMenuOpen && 'text-white hover:text-white'}`}
              >
                Home
              </Button>
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className={`text-sm ${(location.pathname === "/" && !isScrolled) && !mobileMenuOpen && 'text-white hover:text-white'}`}
                >
                  Programs <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {programItems.map((item) => (
                  <DropdownMenuItem key={item.path} asChild>
                    <Link to={item.path} className="w-full">
                      {item.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link to="/payment">
              <Button
                variant={location.pathname === "/payment" ? "default" : "ghost"}
                size="sm"
                className={`text-sm ${(location.pathname === "/" && !isScrolled && !mobileMenuOpen) ? 'text-white hover:text-white' : ''}`}
              >
                Register
              </Button>
            </Link>

            <Link to="/contact">
              <Button
                variant={location.pathname === "/contact" ? "default" : "ghost"}
                size="sm"
                className={`text-sm ${(location.pathname === "/" && !isScrolled && !mobileMenuOpen) ? 'text-white hover:text-white' : ''}`}
              >
                Contact
              </Button>
            </Link>

            <Link to="/faqs">
              <Button
                variant={location.pathname === "/faqs" ? "default" : "ghost"}
                size="sm"
                className={`text-sm ${(location.pathname === "/" && !isScrolled && !mobileMenuOpen) ? 'text-white hover:text-white' : ''}`}
              >
                FAQs
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className={`md:hidden transition-colors ${(location.pathname === "/" && !isScrolled) && !mobileMenuOpen && 'text-white hover:text-white'}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-2 border-t border-border bg-background">
            <Link to="/" onClick={() => setMobileMenuOpen(false)}>
              <Button
                variant={location.pathname === "/" ? "default" : "ghost"}
                className="w-full justify-start"
              >
                Home
              </Button>
            </Link>

            <div className="px-2 py-2 text-sm font-semibold">Programs:</div>
            {programItems.map((item) => (
              <Link key={item.path} to={item.path} onClick={() => setMobileMenuOpen(false)}>
                <Button
                  variant={location.pathname === item.path ? "default" : "ghost"}
                  className="w-full justify-start pl-4"
                >
                  {item.label}
                </Button>
              </Link>
            ))}

            <Link to="/payment" onClick={() => setMobileMenuOpen(false)}>
              <Button
                variant={location.pathname === "/payment" ? "default" : "ghost"}
                className="w-full justify-start"
              >
                Register
              </Button>
            </Link>

            <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
              <Button
                variant={location.pathname === "/contact" ? "default" : "ghost"}
                className="w-full justify-start"
              >
                Contact
              </Button>
            </Link>

            <Link to="/faqs" onClick={() => setMobileMenuOpen(false)}>
              <Button
                variant={location.pathname === "/faqs" ? "default" : "ghost"}
                className="w-full justify-start"
              >
                FAQs
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
