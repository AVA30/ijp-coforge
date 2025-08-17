import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ArrowRight, Code, Database, Cloud, Users, Briefcase, TrendingUp } from "lucide-react";

const CareerPaths = () => {
  const careerPaths = [
    {
      title: "Software Engineering",
      icon: Code,
      description: "Build scalable applications and systems",
      levels: [
        { title: "Associate Software Engineer", experience: "0-2 years", salary: "₹6-12 LPA" },
        { title: "Software Engineer", experience: "2-4 years", salary: "₹12-18 LPA" },
        { title: "Senior Software Engineer", experience: "4-7 years", salary: "₹18-28 LPA" },
        { title: "Principal Engineer", experience: "7+ years", salary: "₹28-45 LPA" }
      ],
      skills: ["React", "Java", "Python", "Microservices", "System Design"],
      growth: 85,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Data Science & AI",
      icon: Database,
      description: "Transform data into actionable insights",
      levels: [
        { title: "Data Analyst", experience: "0-2 years", salary: "₹5-10 LPA" },
        { title: "Data Scientist", experience: "2-4 years", salary: "₹12-20 LPA" },
        { title: "Senior Data Scientist", experience: "4-7 years", salary: "₹20-32 LPA" },
        { title: "Lead Data Scientist", experience: "7+ years", salary: "₹32-50 LPA" }
      ],
      skills: ["Python", "ML/AI", "TensorFlow", "Statistics", "Big Data"],
      growth: 92,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      description: "Design and manage cloud infrastructure",
      levels: [
        { title: "Cloud Associate", experience: "0-2 years", salary: "₹7-13 LPA" },
        { title: "Cloud Engineer", experience: "2-4 years", salary: "₹15-22 LPA" },
        { title: "Cloud Architect", experience: "4-7 years", salary: "₹25-35 LPA" },
        { title: "Principal Architect", experience: "7+ years", salary: "₹35-55 LPA" }
      ],
      skills: ["AWS", "Azure", "Kubernetes", "Docker", "Terraform"],
      growth: 88,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Product Management",
      icon: Briefcase,
      description: "Drive product strategy and execution",
      levels: [
        { title: "Associate PM", experience: "0-2 years", salary: "₹8-15 LPA" },
        { title: "Product Manager", experience: "2-5 years", salary: "₹15-25 LPA" },
        { title: "Senior PM", experience: "5-8 years", salary: "₹25-40 LPA" },
        { title: "VP Product", experience: "8+ years", salary: "₹40-70 LPA" }
      ],
      skills: ["Strategy", "Analytics", "User Research", "Agile", "Leadership"],
      growth: 78,
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background/50 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <Badge className="bg-primary/10 text-primary border-primary/20">
            Career Development
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold">
            Your Growth{" "}
            <span className="hero-text">Journey</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore structured career paths with clear progression, competitive compensation, 
            and continuous learning opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {careerPaths.map((path, index) => (
            <Card 
              key={index}
              className="bg-gradient-card border-border/50 hover:border-primary/30 hover:shadow-card transition-smooth group"
            >
              <CardHeader className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${path.color} flex items-center justify-center group-hover:scale-110 transition-smooth`}>
                    <path.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="space-y-1">
                    <CardTitle className="text-xl group-hover:text-primary transition-smooth">
                      {path.title}
                    </CardTitle>
                    <CardDescription>
                      {path.description}
                    </CardDescription>
                  </div>
                </div>

                {/* Growth Indicator */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Career Growth Potential</span>
                    <span className="text-sm text-primary font-medium">{path.growth}%</span>
                  </div>
                  <Progress value={path.growth} className="h-2" />
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Career Levels */}
                <div className="space-y-4">
                  <h4 className="font-medium text-sm text-muted-foreground uppercase tracking-wide">
                    Career Progression
                  </h4>
                  <div className="space-y-3">
                    {path.levels.map((level, levelIndex) => (
                      <div 
                        key={levelIndex}
                        className="flex items-center justify-between p-3 rounded-lg bg-background/50 border border-border/30"
                      >
                        <div className="space-y-1">
                          <div className="font-medium text-sm">{level.title}</div>
                          <div className="text-xs text-muted-foreground">
                            {level.experience}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-medium text-sm text-primary">
                            {level.salary}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Skills */}
                <div className="space-y-3">
                  <h4 className="font-medium text-sm text-muted-foreground uppercase tracking-wide">
                    Key Skills
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {path.skills.map((skill) => (
                      <Badge 
                        key={skill}
                        variant="secondary"
                        className="text-xs bg-primary/10 text-primary border-primary/20"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <Button className="w-full bg-gradient-primary hover:shadow-glow transition-smooth group">
                  Explore {path.title} Roles
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <Card className="text-center p-6 bg-gradient-card border-border/50">
            <TrendingUp className="w-8 h-8 text-primary mx-auto mb-3" />
            <div className="text-2xl font-bold hero-text">40%</div>
            <div className="text-sm text-muted-foreground">Average Annual Growth</div>
          </Card>
          <Card className="text-center p-6 bg-gradient-card border-border/50">
            <Users className="w-8 h-8 text-primary mx-auto mb-3" />
            <div className="text-2xl font-bold hero-text">85%</div>
            <div className="text-sm text-muted-foreground">Internal Promotions</div>
          </Card>
          <Card className="text-center p-6 bg-gradient-card border-border/50">
            <Briefcase className="w-8 h-8 text-primary mx-auto mb-3" />
            <div className="text-2xl font-bold hero-text">200+</div>
            <div className="text-sm text-muted-foreground">Learning Programs</div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CareerPaths;