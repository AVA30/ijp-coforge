import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, DollarSign, Briefcase, Users, Code, Database, Palette, BarChart3, Settings, Building } from "lucide-react";
import { useJobs } from "@/hooks/useJobs";
import { JobApplication } from "./JobApplication";

const JobListings = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const { jobs, loading, error } = useJobs();

  const categories = [
    { name: "All", icon: Users },
    { name: "Engineering", icon: Code },
    { name: "Product", icon: Building },
    { name: "Design", icon: Palette },
    { name: "Analytics", icon: BarChart3 },
    { name: "Strategy", icon: Settings },
  ];

  const formatSalary = (min?: number, max?: number) => {
    if (!min || !max) return 'Competitive salary';
    const minLakh = Math.round(min / 100000);
    const maxLakh = Math.round(max / 100000);
    return `₹${minLakh}-${maxLakh} LPA`;
  };

  const filteredJobs = selectedCategory === "All" 
    ? jobs 
    : jobs.filter(job => job.department === selectedCategory);

  if (loading) {
    return (
      <section id="jobs" className="py-16 bg-secondary/20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Loading Opportunities...</h2>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="jobs" className="py-16 bg-secondary/20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Error Loading Jobs</h2>
            <p className="text-muted-foreground">{error}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="jobs" className="py-16 bg-secondary/20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Current Openings</h2>
          <p className="text-muted-foreground mb-8">
            Discover exciting opportunities across different domains and locations
          </p>
          
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <Button
                key={category.name}
                variant={selectedCategory === category.name ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.name)}
                className="flex items-center gap-2"
              >
                <category.icon className="h-4 w-4" />
                {category.name}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredJobs.map((job) => (
            <Card key={job.id} className="relative">
              <CardHeader>
                <CardTitle className="text-lg">{job.title}</CardTitle>
                <CardDescription>{job.department}</CardDescription>
                
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {job.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {job.job_type}
                  </div>
                  <div className="flex items-center gap-1">
                    <Briefcase className="h-4 w-4" />
                    {job.experience_level}
                  </div>
                  <div className="flex items-center gap-1">
                    <DollarSign className="h-4 w-4" />
                    {formatSalary(job.salary_min, job.salary_max)}
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">{job.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {job.skills_required?.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    Learn More
                  </Button>
                  <JobApplication jobId={job.id} jobTitle={job.title}>
                    <Button size="sm">
                      Apply Now
                    </Button>
                  </JobApplication>
                </div>
              </CardContent>

              {job.is_urgent && (
                <Badge className="absolute top-4 right-4 bg-red-500 hover:bg-red-600">
                  Urgent
                </Badge>
              )}
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All {jobs.length}+ Open Positions
          </Button>
        </div>
      </div>
    </section>
  );
};

export default JobListings;