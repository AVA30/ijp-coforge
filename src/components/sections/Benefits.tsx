import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Heart, 
  GraduationCap, 
  Plane, 
  Shield, 
  Coffee, 
  Globe, 
  Zap, 
  Award,
  Clock,
  Home,
  Gamepad2,
  Stethoscope
} from "lucide-react";

const Benefits = () => {
  const benefitCategories = [
    {
      title: "Health & Wellness",
      icon: Heart,
      color: "from-red-500 to-pink-500",
      benefits: [
        {
          icon: Stethoscope,
          title: "Comprehensive Health Insurance",
          description: "Medical, dental, and vision coverage for you and your family"
        },
        {
          icon: Heart,
          title: "Mental Health Support",
          description: "Counseling services and wellness programs"
        },
        {
          icon: Coffee,
          title: "Wellness Programs",
          description: "Yoga classes, gym memberships, and health screenings"
        }
      ]
    },
    {
      title: "Learning & Growth",
      icon: GraduationCap,
      color: "from-blue-500 to-cyan-500",
      benefits: [
        {
          icon: GraduationCap,
          title: "Learning Stipend",
          description: "Annual budget for courses, certifications, and conferences"
        },
        {
          icon: Award,
          title: "Certification Support",
          description: "Company-sponsored professional certifications"
        },
        {
          icon: Globe,
          title: "Global Exposure",
          description: "International assignments and cross-cultural projects"
        }
      ]
    },
    {
      title: "Work-Life Balance",
      icon: Clock,
      color: "from-green-500 to-emerald-500",
      benefits: [
        {
          icon: Home,
          title: "Flexible Work Options",
          description: "Remote work, flexible hours, and hybrid arrangements"
        },
        {
          icon: Plane,
          title: "Unlimited PTO",
          description: "Take time off when you need it, no accrual limits"
        },
        {
          icon: Clock,
          title: "Sabbatical Leave",
          description: "Extended leave options for personal growth"
        }
      ]
    },
    {
      title: "Perks & Rewards",
      icon: Zap,
      color: "from-purple-500 to-pink-500",
      benefits: [
        {
          icon: Gamepad2,
          title: "Recreation Facilities",
          description: "Gaming zones, sports facilities, and entertainment areas"
        },
        {
          icon: Coffee,
          title: "Free Meals & Snacks",
          description: "Complimentary breakfast, lunch, and snacks"
        },
        {
          icon: Shield,
          title: "Employee Stock Options",
          description: "Share in company growth through equity participation"
        }
      ]
    }
  ];

  const quickStats = [
    { number: "₹50,000", label: "Annual Learning Budget", icon: GraduationCap },
    { number: "30+", label: "Days Paid Leave", icon: Plane },
    { number: "24/7", label: "Health Support", icon: Heart },
    { number: "100%", label: "Remote Work Option", icon: Home }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background/50 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <Badge className="bg-primary/10 text-primary border-primary/20">
            Employee Benefits
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold">
            More Than Just{" "}
            <span className="hero-text">Salary</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We believe in supporting our employees holistically with comprehensive benefits 
            that enhance both professional and personal well-being.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {quickStats.map((stat, index) => (
            <Card key={index} className="text-center p-6 bg-gradient-card border-border/50 hover:border-primary/30 transition-smooth">
              <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="text-2xl font-bold hero-text">{stat.number}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </Card>
          ))}
        </div>

        {/* Benefits Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {benefitCategories.map((category, categoryIndex) => (
            <Card 
              key={categoryIndex}
              className="bg-gradient-card border-border/50 hover:border-primary/30 hover:shadow-card transition-smooth"
            >
              <CardHeader className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">{category.title}</CardTitle>
                    <CardDescription>
                      Comprehensive support for your {category.title.toLowerCase()}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                {category.benefits.map((benefit, benefitIndex) => (
                  <div 
                    key={benefitIndex}
                    className="flex items-start space-x-4 p-4 rounded-lg bg-background/50 border border-border/30 hover:border-primary/20 transition-smooth"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <benefit.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-medium text-sm">{benefit.title}</h4>
                      <p className="text-sm text-muted-foreground">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Benefits Grid */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">
            And Much <span className="hero-text">More</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Parental Leave", description: "Extended leave for new parents", icon: Heart },
              { title: "Relocation Support", description: "Assistance with moving for work", icon: Plane },
              { title: "Employee Referral Bonus", description: "Rewards for successful referrals", icon: Award },
              { title: "Innovation Time", description: "20% time for personal projects", icon: Zap },
              { title: "Team Building Events", description: "Regular social and team activities", icon: Coffee },
              { title: "Career Coaching", description: "One-on-one career development", icon: GraduationCap }
            ].map((benefit, index) => (
              <Card 
                key={index}
                className="p-6 text-center bg-gradient-card border-border/50 hover:border-primary/30 transition-smooth group"
              >
                <benefit.icon className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-smooth" />
                <h4 className="font-medium mb-2">{benefit.title}</h4>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Card className="max-w-2xl mx-auto p-8 bg-gradient-primary text-primary-foreground">
            <h3 className="text-2xl font-bold mb-4">Ready to Enjoy These Benefits?</h3>
            <p className="mb-6 opacity-90 text-lg">
              Join our team and experience a workplace that truly cares about your well-being and success.
            </p>
            <Button 
              size="lg" 
              className="bg-white/20 hover:bg-white/30 text-white border-white/20 hover:border-white/40"
            >
              Explore Open Positions
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Benefits;