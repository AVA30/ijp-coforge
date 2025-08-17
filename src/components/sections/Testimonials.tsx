import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";
import { useState, useEffect } from "react";

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Senior Software Engineer",
      department: "Cloud Solutions",
      location: "Bangalore",
      image: "/api/placeholder/80/80",
      rating: 5,
      quote: "Coforge has been instrumental in shaping my career. The learning opportunities and mentorship programs helped me grow from a junior developer to a senior engineer in just 3 years.",
      highlight: "Career Growth"
    },
    {
      name: "Rajesh Kumar",
      role: "Data Science Lead",
      department: "AI/ML Division",
      location: "Hyderabad",
      image: "/api/placeholder/80/80",
      rating: 5,
      quote: "The work-life balance at Coforge is exceptional. I can pursue my passion for machine learning while spending quality time with my family. The flexible work arrangements are a game-changer.",
      highlight: "Work-Life Balance"
    },
    {
      name: "Anita Patel",
      role: "Product Manager",
      department: "Digital Transformation",
      location: "Mumbai",
      image: "/api/placeholder/80/80",
      rating: 5,
      quote: "I love how Coforge encourages innovation and creativity. Our ideas are heard, and we have the resources to turn them into reality. It's exciting to work on projects that impact millions of users.",
      highlight: "Innovation Culture"
    },
    {
      name: "Mohammed Ali",
      role: "DevOps Architect",
      department: "Platform Engineering",
      location: "Pune",
      image: "/api/placeholder/80/80",
      rating: 5,
      quote: "The diversity at Coforge is incredible. Working with colleagues from different backgrounds and cultures has broadened my perspective and made me a better professional.",
      highlight: "Diversity & Inclusion"
    },
    {
      name: "Kavita Singh",
      role: "UX Designer",
      department: "Design Systems",
      location: "Delhi",
      image: "/api/placeholder/80/80",
      rating: 5,
      quote: "Coforge invests heavily in employee development. The certification programs and conference sponsorships have helped me stay updated with the latest design trends and technologies.",
      highlight: "Learning & Development"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-background to-background/50">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <Badge className="bg-primary/10 text-primary border-primary/20">
            Employee Stories
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold">
            Hear From Our{" "}
            <span className="hero-text">Team</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover what makes Coforge a great place to work through the experiences 
            of our talented team members.
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="bg-gradient-card border-border/50 hover:border-primary/30 transition-smooth p-8 relative overflow-hidden">
            <Quote className="absolute top-6 right-6 w-12 h-12 text-primary/20" />
            
            <CardContent className="space-y-6 p-0">
              <div className="flex items-center space-x-4">
                <Avatar className="w-16 h-16 border-2 border-primary/20">
                  <AvatarImage src={testimonials[currentTestimonial].image} />
                  <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                    {testimonials[currentTestimonial].name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                
                <div className="space-y-2">
                  <div>
                    <h3 className="font-semibold text-lg">{testimonials[currentTestimonial].name}</h3>
                    <p className="text-primary font-medium">{testimonials[currentTestimonial].role}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonials[currentTestimonial].department} • {testimonials[currentTestimonial].location}
                    </p>
                  </div>
                  
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                </div>

                <Badge className="ml-auto bg-primary/10 text-primary border-primary/20">
                  {testimonials[currentTestimonial].highlight}
                </Badge>
              </div>

              <blockquote className="text-lg leading-relaxed text-muted-foreground italic">
                "{testimonials[currentTestimonial].quote}"
              </blockquote>
            </CardContent>
          </Card>
        </div>

        {/* Testimonial Navigation */}
        <div className="flex justify-center space-x-2 mb-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-smooth ${
                currentTestimonial === index 
                  ? 'bg-primary' 
                  : 'bg-border hover:bg-primary/50'
              }`}
            />
          ))}
        </div>

        {/* All Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className={`bg-gradient-card border-border/50 hover:border-primary/30 transition-smooth cursor-pointer ${
                currentTestimonial === index ? 'border-primary/50 shadow-glow' : ''
              }`}
              onClick={() => setCurrentTestimonial(index)}
            >
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center space-x-3">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={testimonial.image} />
                    <AvatarFallback className="bg-primary/10 text-primary text-sm font-semibold">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div className="space-y-1">
                    <h4 className="font-medium text-sm">{testimonial.name}</h4>
                    <p className="text-xs text-primary">{testimonial.role}</p>
                    <div className="flex items-center space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-primary text-primary" />
                      ))}
                    </div>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground line-clamp-3">
                  "{testimonial.quote}"
                </p>

                <Badge variant="secondary" className="text-xs bg-primary/10 text-primary border-primary/20">
                  {testimonial.highlight}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="max-w-lg mx-auto p-8 bg-gradient-primary text-primary-foreground">
            <h3 className="text-xl font-bold mb-4">Ready to Write Your Success Story?</h3>
            <p className="mb-6 opacity-90">
              Join thousands of professionals who have built amazing careers with us.
            </p>
            <button className="bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-lg font-medium transition-smooth">
              Start Your Journey
            </button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;