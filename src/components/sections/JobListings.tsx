import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, DollarSign, Users, Code, Database, Cloud, Shield } from "lucide-react";
import { useState } from "react";

const JobListings = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    { name: "All", icon: Users },
    { name: "Engineering", icon: Code },
    { name: "Data Science", icon: Database },
    { name: "Cloud", icon: Cloud },
    { name: "Security", icon: Shield }
  ];

  const jobs = [
    {
      id: 1,
      title: "Senior Software Engineer",
      department: "Engineering",
      location: "Bangalore, India",
      type: "Full-time",
      experience: "3-5 years",
      salary: "₹15-25 LPA",
      skills: ["React", "Node.js", "Python", "AWS"],
      description: "Join our engineering team to build scalable solutions for global clients.",
      urgent: true
    },
    {
      id: 2,
      title: "Data Scientist",
      department: "Data Science",
      location: "Hyderabad, India",
      type: "Full-time",
      experience: "2-4 years",
      salary: "₹12-20 LPA",
      skills: ["Python", "ML", "TensorFlow", "SQL"],
      description: "Drive insights from data to transform business decisions.",
      urgent: false
    },
    {
      id: 3,
      title: "Cloud Solutions Architect",
      department: "Cloud",
      location: "Mumbai, India",
      type: "Full-time",
      experience: "5-8 years",
      salary: "₹25-35 LPA",
      skills: ["AWS", "Azure", "Kubernetes", "Terraform"],
      description: "Design and implement enterprise cloud solutions.",
      urgent: true
    },
    {
      id: 4,
      title: "Frontend Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      experience: "1-3 years",
      salary: "₹8-15 LPA",
      skills: ["React", "TypeScript", "Tailwind", "Next.js"],
      description: "Create beautiful and responsive user interfaces.",
      urgent: false
    },
    {
      id: 5,
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Pune, India",
      type: "Full-time",
      experience: "3-6 years",
      salary: "₹18-28 LPA",
      skills: ["Docker", "Jenkins", "AWS", "Monitoring"],
      description: "Build and maintain robust deployment pipelines.",
      urgent: false
    },
    {
      id: 6,
      title: "Cybersecurity Analyst",
      department: "Security",
      location: "Delhi, India",
      type: "Full-time",
      experience: "2-5 years",
      salary: "₹14-22 LPA",
      skills: ["SIEM", "Penetration Testing", "Risk Assessment"],
      description: "Protect our systems and data from security threats.",
      urgent: true
    }
  ];

  const filteredJobs = selectedCategory === "All" 
    ? jobs 
    : jobs.filter(job => job.department === selectedCategory);

  return (
    <section className="py-20 bg-gradient-to-b from-background to-background/50">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <Badge className="bg-primary/10 text-primary border-primary/20">
            Current Openings
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold">
            Find Your Perfect{" "}
            <span className="hero-text">Role</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover exciting opportunities across different domains and locations. 
            Start your journey with us today.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.name}
              variant={selectedCategory === category.name ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.name)}
              className={`transition-smooth ${
                selectedCategory === category.name 
                  ? "bg-gradient-primary shadow-glow" 
                  : "hover:bg-accent"
              }`}
            >
              <category.icon className="w-4 h-4 mr-2" />
              {category.name}
            </Button>
          ))}
        </div>

        {/* Job Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredJobs.map((job) => (
            <Card 
              key={job.id} 
              className="bg-gradient-card border-border/50 hover:border-primary/30 hover:shadow-card transition-smooth group"
            >
              <CardHeader className="space-y-3">
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <CardTitle className="text-lg group-hover:text-primary transition-smooth">
                      {job.title}
                    </CardTitle>
                    <CardDescription className="font-medium text-primary">
                      {job.department}
                    </CardDescription>
                  </div>
                  {job.urgent && (
                    <Badge className="bg-destructive/10 text-destructive border-destructive/20">
                      Urgent
                    </Badge>
                  )}
                </div>

                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>{job.type} • {job.experience}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <DollarSign className="w-4 h-4" />
                    <span>{job.salary}</span>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  {job.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {job.skills.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="secondary" 
                      className="text-xs bg-primary/10 text-primary border-primary/20"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="flex space-x-2">
                <Button variant="outline" size="sm" className="flex-1">
                  Learn More
                </Button>
                <Button size="sm" className="flex-1 bg-gradient-primary hover:shadow-glow transition-smooth">
                  Apply Now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* View All Jobs CTA */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="hover:bg-accent transition-smooth">
            View All {jobs.length}+ Open Positions
          </Button>
        </div>
      </div>
    </section>
  );
};

export default JobListings;