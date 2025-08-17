import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Briefcase, Users, BookOpen, Trophy, Menu, X, LogOut } from "lucide-react";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";
import coforgeIcon from "@/assets/coforge-icon.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  const navItems = [
    {
      title: "Careers",
      icon: Briefcase,
      items: [
        { title: "Job Openings", description: "Explore current opportunities" },
        { title: "Application Process", description: "Learn how to apply" },
        { title: "Career Paths", description: "Discover growth opportunities" },
      ]
    },
    {
      title: "Development",
      icon: BookOpen,
      items: [
        { title: "Learning Hub", description: "Skill development resources" },
        { title: "Certifications", description: "Professional certifications" },
        { title: "Training Programs", description: "Structured learning paths" },
      ]
    },
    {
      title: "Community",
      icon: Users,
      items: [
        { title: "Mentorship", description: "Connect with mentors" },
        { title: "Employee Stories", description: "Real experiences" },
        { title: "Networking", description: "Build professional connections" },
      ]
    }
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src={coforgeIcon} alt="Coforge" className="h-8 w-8" />
            <div className="flex flex-col">
              <span className="font-bold text-lg hero-text">Coforge</span>
              <span className="text-xs text-muted-foreground">Career Connect</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList>
                {navItems.map((item) => (
                  <NavigationMenuItem key={item.title}>
                    <NavigationMenuTrigger className="text-foreground hover:text-primary transition-smooth">
                      <item.icon className="w-4 h-4 mr-2" />
                      {item.title}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid gap-3 p-6 w-80">
                        {item.items.map((subItem) => (
                          <NavigationMenuLink key={subItem.title} asChild>
                            <a className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                              <div className="text-sm font-medium leading-none">{subItem.title}</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                {subItem.description}
                              </p>
                            </a>
                          </NavigationMenuLink>
                        ))}
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Badge variant="secondary" className="bg-gradient-primary text-primary-foreground">
              <Trophy className="w-3 h-3 mr-1" />
              Now Hiring
            </Badge>
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback>{user.email?.charAt(0).toUpperCase()}</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end">
                  <DropdownMenuItem className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium">{user.email}</p>
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleSignOut}>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <>
                <Button variant="outline" size="sm" onClick={() => navigate('/auth')}>
                  Sign In
                </Button>
                <Button size="sm" className="bg-gradient-primary hover:shadow-glow transition-smooth" onClick={() => navigate('/auth')}>
                  Apply Now
                </Button>
              </>
            )}
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col space-y-6 mt-6">
                  <div className="flex items-center space-x-3">
                    <img src={coforgeIcon} alt="Coforge" className="h-8 w-8" />
                    <span className="font-bold text-lg hero-text">Coforge Career Connect</span>
                  </div>
                  
                  {navItems.map((item) => (
                    <div key={item.title} className="space-y-3">
                      <div className="flex items-center space-x-2 font-medium">
                        <item.icon className="w-4 h-4" />
                        <span>{item.title}</span>
                      </div>
                      <div className="space-y-2 ml-6">
                        {item.items.map((subItem) => (
                          <a key={subItem.title} className="block text-sm text-muted-foreground hover:text-primary transition-smooth">
                            {subItem.title}
                          </a>
                        ))}
                      </div>
                    </div>
                  ))}
                  
                  <div className="space-y-3 pt-6 border-t">
                    <Button variant="outline" className="w-full">
                      Sign In
                    </Button>
                    <Button className="w-full bg-gradient-primary">
                      Apply Now
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;