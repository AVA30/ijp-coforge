import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Linkedin, 
  Twitter, 
  Facebook, 
  Instagram,
  ArrowRight,
  Building,
  Users,
  Globe
} from "lucide-react";
import coforgeIcon from "@/assets/coforge-icon.png";

const Footer = () => {
  const companyLinks = [
    { title: "About Us", href: "#" },
    { title: "Leadership", href: "#" },
    { title: "Our Story", href: "#" },
    { title: "News & Press", href: "#" },
    { title: "Investor Relations", href: "#" },
    { title: "Corporate Responsibility", href: "#" }
  ];

  const careerLinks = [
    { title: "Current Openings", href: "#" },
    { title: "Campus Hiring", href: "#" },
    { title: "Experienced Hiring", href: "#" },
    { title: "Internship Programs", href: "#" },
    { title: "Application Process", href: "#" },
    { title: "Interview Tips", href: "#" }
  ];

  const supportLinks = [
    { title: "Contact Us", href: "#" },
    { title: "Help Center", href: "#" },
    { title: "Privacy Policy", href: "#" },
    { title: "Terms of Service", href: "#" },
    { title: "Cookie Policy", href: "#" },
    { title: "Accessibility", href: "#" }
  ];

  const offices = [
    {
      city: "Bangalore",
      address: "Electronics City, Hosur Road",
      phone: "+91 80 4033 9999",
      email: "careers.bangalore@coforge.com"
    },
    {
      city: "Mumbai",
      address: "Bandra Kurla Complex",
      phone: "+91 22 6767 8999",
      email: "careers.mumbai@coforge.com"
    },
    {
      city: "Hyderabad",
      address: "HITEC City, Madhapur",
      phone: "+91 40 4420 9999",
      email: "careers.hyderabad@coforge.com"
    }
  ];

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" }
  ];

  return (
    <footer className="bg-gradient-to-b from-background to-card border-t border-border">
      <div className="container mx-auto px-4">
        {/* Newsletter Section */}
        <div className="py-12 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <Badge className="bg-primary/10 text-primary border-primary/20">
              Stay Connected
            </Badge>
            <h3 className="text-2xl md:text-3xl font-bold">
              Get Career Updates & Insights
            </h3>
            <p className="text-muted-foreground">
              Subscribe to receive the latest job openings, career tips, and company news directly in your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input 
                placeholder="Enter your email address" 
                className="flex-1"
                type="email"
              />
              <Button className="bg-gradient-primary hover:shadow-glow transition-smooth">
                Subscribe
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>

        <Separator />

        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center space-x-3">
                <img src={coforgeIcon} alt="Coforge" className="h-10 w-10" />
                <div>
                  <div className="font-bold text-xl hero-text">Coforge</div>
                  <div className="text-sm text-muted-foreground">Career Connect</div>
                </div>
              </div>
              
              <p className="text-muted-foreground leading-relaxed">
                Leading digital transformation company helping businesses accelerate their journey to the cloud, 
                modernize their applications, and harness data for intelligent insights.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <Building className="w-4 h-4 text-primary" />
                  <span>25+ Global Offices</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4 text-primary" />
                  <span>5000+ Employees</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Globe className="w-4 h-4 text-primary" />
                  <span>25+ Countries</span>
                </div>
              </div>

              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <Button
                    key={social.label}
                    variant="outline"
                    size="sm"
                    className="w-10 h-10 p-0 hover:bg-primary hover:text-primary-foreground transition-smooth"
                  >
                    <social.icon className="w-4 h-4" />
                    <span className="sr-only">{social.label}</span>
                  </Button>
                ))}
              </div>
            </div>

            {/* Company Links */}
            <div className="space-y-4">
              <h4 className="font-semibold text-sm uppercase tracking-wide">Company</h4>
              <ul className="space-y-3">
                {companyLinks.map((link) => (
                  <li key={link.title}>
                    <a 
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-smooth"
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Career Links */}
            <div className="space-y-4">
              <h4 className="font-semibold text-sm uppercase tracking-wide">Careers</h4>
              <ul className="space-y-3">
                {careerLinks.map((link) => (
                  <li key={link.title}>
                    <a 
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-smooth"
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div className="space-y-4">
              <h4 className="font-semibold text-sm uppercase tracking-wide">Support</h4>
              <ul className="space-y-3">
                {supportLinks.map((link) => (
                  <li key={link.title}>
                    <a 
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-smooth"
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <Separator />

        {/* Office Locations */}
        <div className="py-12">
          <h4 className="font-semibold text-lg mb-8 text-center">Our Locations</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {offices.map((office) => (
              <div 
                key={office.city}
                className="text-center space-y-3 p-6 rounded-lg bg-card/50 border border-border/30 hover:border-primary/30 transition-smooth"
              >
                <h5 className="font-medium text-primary">{office.city}</h5>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center justify-center space-x-2">
                    <MapPin className="w-4 h-4" />
                    <span>{office.address}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Phone className="w-4 h-4" />
                    <span>{office.phone}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Mail className="w-4 h-4" />
                    <span>{office.email}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Separator />

        {/* Bottom Bar */}
        <div className="py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Coforge Limited. All rights reserved.
            </div>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-smooth">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-smooth">Terms of Service</a>
              <a href="#" className="hover:text-primary transition-smooth">Cookie Settings</a>
              <a href="#" className="hover:text-primary transition-smooth">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;