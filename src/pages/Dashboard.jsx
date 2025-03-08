
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';
import Sidebar from '@/components/dashboard/Sidebar';
import Header from '@/components/dashboard/Header';
import { Briefcase, BookOpen, Monitor, Users, BarChart2, ArrowRight, Award, Star, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { useTheme } from '@/components/ThemeProvider';
import gsap from 'gsap';

const Dashboard = () => {
  const isMobile = useIsMobile();
  const [isCollapsed, setIsCollapsed] = useState(isMobile);
  const { theme } = useTheme();

  useEffect(() => {
    setIsCollapsed(isMobile);
  }, [isMobile]);

  useEffect(() => {
    // GSAP animations
    gsap.fromTo(
      ".dashboard-card",
      { y: 50, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.6, 
        stagger: 0.1, 
        ease: "power2.out" 
      }
    );

    gsap.fromTo(
      ".career-card",
      { x: 50, opacity: 0 },
      { 
        x: 0, 
        opacity: 1, 
        duration: 0.6, 
        stagger: 0.15, 
        delay: 0.3,
        ease: "back.out(1.2)" 
      }
    );

    gsap.fromTo(
      ".task-item",
      { scale: 0.9, opacity: 0 },
      { 
        scale: 1, 
        opacity: 1, 
        duration: 0.4, 
        stagger: 0.1, 
        delay: 0.6,
        ease: "elastic.out(1, 0.5)" 
      }
    );
    
    return () => {
      // Clean up animations
      gsap.killTweensOf(".dashboard-card");
      gsap.killTweensOf(".career-card");
      gsap.killTweensOf(".task-item");
    };
  }, []);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex transition-colors duration-300">
      <Sidebar 
        isMobile={isMobile} 
        isCollapsed={isCollapsed} 
        toggleSidebar={toggleSidebar} 
      />
      
      <div 
        className={`flex-1 transition-all duration-300 ease-in-out ${
          isCollapsed ? 'ml-0 md:ml-20' : 'ml-0 md:ml-64'
        }`}
      >
        <Header isCollapsed={!isMobile && isCollapsed} />
        
        <main className="pt-24 pb-12 px-6 md:px-12">
          <div className="animate-slide-in" style={{ animationDelay: '0.1s' }}>
            <h1 className="text-3xl font-bold mb-2">Welcome, Alex</h1>
            <p className="text-foreground/70 mb-8">Ready to explore some awesome careers today?</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="dashboard-card glass-card p-6 rounded-xl border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="flex justify-between items-start mb-2">
                <div className="bg-primary/20 p-3 rounded-lg">
                  <Award size={24} className="text-primary" />
                </div>
                <span className="text-foreground/60 text-sm">4/5 complete</span>
              </div>
              <h3 className="text-lg font-semibold mb-1">Career Quiz</h3>
              <p className="text-foreground/70 text-sm mb-3">Find careers that match your interests</p>
              <Progress value={80} className="h-2 bg-foreground/10" />
              <Link to="/dashboard/career" className="block mt-4">
                <Button size="sm" variant="outline" className="w-full border-border hover:bg-foreground/5">
                  Continue Quiz
                </Button>
              </Link>
            </Card>
            
            <Card className="dashboard-card glass-card p-6 rounded-xl border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="flex justify-between items-start mb-2">
                <div className="bg-secondary/20 p-3 rounded-lg">
                  <Star size={24} className="text-secondary" />
                </div>
                <span className="text-foreground/60 text-sm">2/7 complete</span>
              </div>
              <h3 className="text-lg font-semibold mb-1">Skill Challenges</h3>
              <p className="text-foreground/70 text-sm mb-3">Fun activities to build new skills</p>
              <Progress value={30} className="h-2 bg-foreground/10" />
              <Link to="/dashboard/skills" className="block mt-4">
                <Button size="sm" variant="outline" className="w-full border-border hover:bg-foreground/5">
                  Try Next Challenge
                </Button>
              </Link>
            </Card>
            
            <Card className="dashboard-card glass-card p-6 rounded-xl border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="flex justify-between items-start mb-2">
                <div className="bg-green-500/20 p-3 rounded-lg">
                  <Rocket size={24} className="text-green-500" />
                </div>
                <span className="text-foreground/60 text-sm">Level 3</span>
              </div>
              <h3 className="text-lg font-semibold mb-1">Your Progress</h3>
              <p className="text-foreground/70 text-sm mb-3">Track your journey and earn badges</p>
              <Progress value={55} className="h-2 bg-foreground/10" />
              <Link to="/dashboard/explore-careers" className="block mt-4">
                <Button size="sm" variant="outline" className="w-full border-border hover:bg-foreground/5">
                  View Your Badges
                </Button>
              </Link>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            <div className="lg:col-span-2">
              <Card className="glass-card p-6 rounded-xl border-border h-full">
                <h3 className="text-xl font-semibold mb-6">Careers That Match Your Interests</h3>
                
                <div className="space-y-6">
                  <div className="career-card glass-card p-4 rounded-lg border border-border hover:border-primary/30 transition-colors cursor-pointer">
                    <div className="flex items-center gap-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <Monitor size={24} className="text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium">Game Designer</h4>
                        <p className="text-foreground/70 text-sm">Match: 92%</p>
                      </div>
                      <Link to="/dashboard/explore-careers" className="ml-auto">
                        <Button className="glass-button p-2 h-9 w-9">
                          <ArrowRight size={18} />
                        </Button>
                      </Link>
                    </div>
                  </div>
                  
                  <div className="career-card glass-card p-4 rounded-lg border border-border hover:border-primary/30 transition-colors cursor-pointer">
                    <div className="flex items-center gap-4">
                      <div className="bg-secondary/10 p-3 rounded-lg">
                        <Briefcase size={24} className="text-secondary" />
                      </div>
                      <div>
                        <h4 className="font-medium">Veterinarian</h4>
                        <p className="text-foreground/70 text-sm">Match: 85%</p>
                      </div>
                      <Link to="/dashboard/explore-careers" className="ml-auto">
                        <Button className="glass-button p-2 h-9 w-9">
                          <ArrowRight size={18} />
                        </Button>
                      </Link>
                    </div>
                  </div>
                  
                  <div className="career-card glass-card p-4 rounded-lg border border-border hover:border-primary/30 transition-colors cursor-pointer">
                    <div className="flex items-center gap-4">
                      <div className="bg-green-500/10 p-3 rounded-lg">
                        <BookOpen size={24} className="text-green-500" />
                      </div>
                      <div>
                        <h4 className="font-medium">Environmental Scientist</h4>
                        <p className="text-foreground/70 text-sm">Match: 78%</p>
                      </div>
                      <Link to="/dashboard/explore-careers" className="ml-auto">
                        <Button className="glass-button p-2 h-9 w-9">
                          <ArrowRight size={18} />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <Link to="/dashboard/explore-careers">
                    <Button variant="outline" className="border-border hover:bg-foreground/5 w-full">
                      Explore All Career Matches
                    </Button>
                  </Link>
                </div>
              </Card>
            </div>
            
            <div>
              <Card className="glass-card p-6 rounded-xl border-border h-full">
                <h3 className="text-xl font-semibold mb-6">Daily Quests</h3>
                
                <div className="space-y-4">
                  <div className="task-item flex items-center gap-3 p-3 rounded-lg bg-foreground/5 hover:bg-foreground/10 transition-all duration-300">
                    <div className="w-3 h-3 rounded-full bg-primary"></div>
                    <span className="text-sm">Complete Animal Science Quiz</span>
                  </div>
                  
                  <div className="task-item flex items-center gap-3 p-3 rounded-lg bg-foreground/5 hover:bg-foreground/10 transition-all duration-300">
                    <div className="w-3 h-3 rounded-full bg-secondary"></div>
                    <span className="text-sm">Watch Video: "Day as a Game Designer"</span>
                  </div>
                  
                  <div className="task-item flex items-center gap-3 p-3 rounded-lg bg-foreground/5 hover:bg-foreground/10 transition-all duration-300">
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span className="text-sm">Join Science Club Zoom Meeting</span>
                  </div>
                </div>
                
                <div className="mt-6">
                  <Link to="/dashboard/daily-tasks">
                    <Button variant="outline" className="border-border hover:bg-foreground/5 w-full">
                      View All Quests
                    </Button>
                  </Link>
                </div>
              </Card>
            </div>
          </div>
          
          <div className="animate-scale-in" style={{ animationDelay: '0.8s' }}>
            <Card className="glass-card p-6 rounded-xl border-border">
              <h3 className="text-xl font-semibold mb-6">Try Career Simulator</h3>
              
              <div className="relative overflow-hidden rounded-lg h-48 md:h-64">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-background/30"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-pathscout-darker/70 to-transparent">
                  <h4 className="text-xl font-semibold mb-2">3D Virtual Career Day</h4>
                  <p className="text-foreground/80 mb-4">Experience what it's like to be a Vet, Game Designer, or Scientist!</p>
                  <Link to="/dashboard/job-simulation">
                    <Button className="bg-primary hover:bg-primary/90">
                      Start Simulation
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
