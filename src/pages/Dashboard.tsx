
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';
import Sidebar from '@/components/dashboard/Sidebar';
import Header from '@/components/dashboard/Header';
import { Briefcase, BookOpen, Monitor, Users, BarChart2, ArrowRight, Compass } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const Dashboard = () => {
  const isMobile = useIsMobile();
  const [isCollapsed, setIsCollapsed] = useState(isMobile);

  useEffect(() => {
    setIsCollapsed(isMobile);
  }, [isMobile]);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="min-h-screen bg-pathscout-darker text-white flex">
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
          <h1 className="text-3xl font-bold mb-2">Welcome, John</h1>
          <p className="text-white/70 mb-8">Here's an overview of your career journey</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="glass-card p-6 rounded-xl border-white/10">
              <div className="flex justify-between items-start mb-2">
                <div className="bg-pathscout-blue/20 p-3 rounded-lg">
                  <Briefcase size={24} className="text-pathscout-blue" />
                </div>
                <span className="text-white/60 text-sm">4/5 complete</span>
              </div>
              <h3 className="text-lg font-semibold mb-1">Career Assessment</h3>
              <p className="text-white/70 text-sm mb-3">Discover your ideal career path</p>
              <Progress value={80} className="h-2 bg-white/10" />
              <Link to="/dashboard/career" className="block mt-4">
                <Button size="sm" variant="outline" className="w-full border-white/10 hover:bg-white/5">
                  Continue Assessment
                </Button>
              </Link>
            </Card>
            
            <Card className="glass-card p-6 rounded-xl border-white/10">
              <div className="flex justify-between items-start mb-2">
                <div className="bg-pathscout-yellow/20 p-3 rounded-lg">
                  <BookOpen size={24} className="text-pathscout-yellow" />
                </div>
                <span className="text-white/60 text-sm">2/7 complete</span>
              </div>
              <h3 className="text-lg font-semibold mb-1">Skill Development</h3>
              <p className="text-white/70 text-sm mb-3">Build skills for your target career</p>
              <Progress value={30} className="h-2 bg-white/10" />
              <Link to="/dashboard/skills" className="block mt-4">
                <Button size="sm" variant="outline" className="w-full border-white/10 hover:bg-white/5">
                  Continue Learning
                </Button>
              </Link>
            </Card>
            
            <Card className="glass-card p-6 rounded-xl border-white/10">
              <div className="flex justify-between items-start mb-2">
                <div className="bg-green-500/20 p-3 rounded-lg">
                  <BarChart2 size={24} className="text-green-500" />
                </div>
                <span className="text-white/60 text-sm">Active</span>
              </div>
              <h3 className="text-lg font-semibold mb-1">Career Progress</h3>
              <p className="text-white/70 text-sm mb-3">Track your journey to your goals</p>
              <Progress value={55} className="h-2 bg-white/10" />
              <Link to="/dashboard/explore-careers" className="block mt-4">
                <Button size="sm" variant="outline" className="w-full border-white/10 hover:bg-white/5">
                  Explore Careers
                </Button>
              </Link>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            <div className="lg:col-span-2">
              <Card className="glass-card p-6 rounded-xl border-white/10 h-full">
                <h3 className="text-xl font-semibold mb-6">Recommended Career Paths</h3>
                
                <div className="space-y-6">
                  <div className="glass-card p-4 rounded-lg border border-white/5 hover:border-pathscout-blue/30 transition-colors cursor-pointer">
                    <div className="flex items-center gap-4">
                      <div className="bg-pathscout-blue/10 p-3 rounded-lg">
                        <Users size={24} className="text-pathscout-blue" />
                      </div>
                      <div>
                        <h4 className="font-medium">Product Management</h4>
                        <p className="text-white/70 text-sm">Match: 92%</p>
                      </div>
                      <Link to="/dashboard/explore-careers" className="ml-auto">
                        <Button className="glass-button p-2 h-9 w-9">
                          <ArrowRight size={18} />
                        </Button>
                      </Link>
                    </div>
                  </div>
                  
                  <div className="glass-card p-4 rounded-lg border border-white/5 hover:border-pathscout-blue/30 transition-colors cursor-pointer">
                    <div className="flex items-center gap-4">
                      <div className="bg-pathscout-yellow/10 p-3 rounded-lg">
                        <Monitor size={24} className="text-pathscout-yellow" />
                      </div>
                      <div>
                        <h4 className="font-medium">UX/UI Design</h4>
                        <p className="text-white/70 text-sm">Match: 85%</p>
                      </div>
                      <Link to="/dashboard/explore-careers" className="ml-auto">
                        <Button className="glass-button p-2 h-9 w-9">
                          <ArrowRight size={18} />
                        </Button>
                      </Link>
                    </div>
                  </div>
                  
                  <div className="glass-card p-4 rounded-lg border border-white/5 hover:border-pathscout-blue/30 transition-colors cursor-pointer">
                    <div className="flex items-center gap-4">
                      <div className="bg-green-500/10 p-3 rounded-lg">
                        <BookOpen size={24} className="text-green-500" />
                      </div>
                      <div>
                        <h4 className="font-medium">Data Analysis</h4>
                        <p className="text-white/70 text-sm">Match: 78%</p>
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
                    <Button variant="outline" className="border-white/10 hover:bg-white/5 w-full">
                      View All Career Matches
                    </Button>
                  </Link>
                </div>
              </Card>
            </div>
            
            <div>
              <Card className="glass-card p-6 rounded-xl border-white/10 h-full">
                <h3 className="text-xl font-semibold mb-6">Upcoming Tasks</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5">
                    <div className="w-3 h-3 rounded-full bg-pathscout-blue"></div>
                    <span className="text-sm">Complete Aptitude Test</span>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5">
                    <div className="w-3 h-3 rounded-full bg-pathscout-yellow"></div>
                    <span className="text-sm">Watch UI/UX Fundamentals</span>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5">
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span className="text-sm">Join Product Design Webinar</span>
                  </div>
                </div>
                
                <div className="mt-6">
                  <Link to="/dashboard/daily-tasks">
                    <Button variant="outline" className="border-white/10 hover:bg-white/5 w-full">
                      View All Tasks
                    </Button>
                  </Link>
                </div>
              </Card>
            </div>
          </div>
          
          <div>
            <Card className="glass-card p-6 rounded-xl border-white/10">
              <h3 className="text-xl font-semibold mb-6">Try Job Simulation</h3>
              
              <div className="relative overflow-hidden rounded-lg h-48 md:h-64">
                <div className="absolute inset-0 bg-gradient-to-br from-pathscout-blue/20 to-pathscout-dark/30"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
                  <h4 className="text-xl font-semibold mb-2">3D Interactive Office Environment</h4>
                  <p className="text-white/80 mb-4">Experience a day in the life of a Product Manager</p>
                  <Link to="/dashboard/job-simulation">
                    <Button className="bg-pathscout-blue hover:bg-pathscout-blue/90">
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
