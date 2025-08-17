import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Users, Briefcase, TrendingUp, Star } from "lucide-react";
import { useState, useEffect } from "react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const [currentStat, setCurrentStat] = useState(0);
  
  const stats = [
    { value: "5000+", label: "Employees" },
    { value: "50+", label: "Open Positions" },
    { value: "95%", label: "Employee Satisfaction" },
    { value: "25+", label: "Countries" }
  ];

  const benefits = [
    "Competitive Salary & Benefits",
    "Flexible Work Arrangements", 
    "Learning & Development Programs",
    "Global Career Opportunities"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroBg} 
          alt="Professional workspace" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/90 backdrop-blur-sm"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-8">
            {/* Header Badge */}
            <Badge className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-smooth">
              <Star className="w-3 h-3 mr-1" />
              Join India's Leading IT Services Company
            </Badge>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                Shape Your{" "}
                <span className="hero-text">
                  Future
                </span>
                <br />
                at Coforge
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Discover endless possibilities in technology, innovation, and career growth. 
                Join a global community of passionate professionals building tomorrow's solutions today.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-smooth text-lg px-8 py-6">
                Explore Careers
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 hover:bg-accent transition-smooth">
                <Users className="w-5 h-5 mr-2" />
                Meet Our Team
              </Button>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
              {stats.map((stat, index) => (
                <Card 
                  key={index}
                  className={`p-6 bg-gradient-card border-border/50 hover:border-primary/30 transition-smooth ${
                    currentStat === index ? 'shadow-glow scale-105' : ''
                  }`}
                >
                  <div className="text-center space-y-2">
                    <div className="text-2xl md:text-3xl font-bold hero-text">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
              {benefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className="flex items-center space-x-3 p-4 rounded-lg bg-card/50 border border-border/30 hover:border-primary/30 transition-smooth"
                >
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span className="text-sm font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-bounce">
        <Briefcase className="w-8 h-8 text-primary/30" />
      </div>
      <div className="absolute bottom-20 right-10 animate-pulse">
        <TrendingUp className="w-10 h-10 text-primary/20" />
      </div>
    </section>
  );
};

export default HeroSection;