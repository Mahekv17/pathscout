import { useState } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import Sidebar from '@/components/dashboard/Sidebar';
import Header from '@/components/dashboard/Header';
import { 
  Monitor, 
  Briefcase, 
  Calendar, 
  MessageSquare, 
  FileText,
  Users,
  ArrowRight,
  Code,
  PenTool
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const JobSimulation = () => {
  const isMobile = useIsMobile();
  const [isCollapsed, setIsCollapsed] = useState(isMobile);

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
          <h1 className="text-3xl font-bold mb-2">Job Simulation</h1>
          <p className="text-white/70 mb-8">Experience a day in the life of different careers</p>
          
          <div className="mb-12">
            <Card className="glass-card border-white/10 p-0 overflow-hidden">
              <div className="relative h-80 md:h-96">
                <img 
                  src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Virtual 3D Office Space" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70"></div>
                <div className="absolute bottom-0 p-6 md:p-8">
                  <span className="bg-pathscout-blue px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">Featured Simulation</span>
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">Product Management Simulation</h2>
                  <p className="text-white/80 mb-6 max-w-2xl">Experience a day in the life of a Product Manager at a tech startup. Navigate product decisions, stakeholder management, and prioritization challenges.</p>
                  <Button className="bg-pathscout-blue hover:bg-pathscout-blue/90">
                    Enter 3D Virtual Office
                  </Button>
                </div>
              </div>
            </Card>
          </div>
          
          <h2 className="text-xl font-semibold mb-6">Available Simulations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <Card className="glass-card border-white/10 overflow-hidden hover:border-pathscout-blue/30 transition-all duration-300 hover:translate-y-[-5px]">
              <div className="h-48 relative">
                <img 
                  src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="UX/UI Design" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="bg-white/20 backdrop-blur-sm p-2 rounded-full">
                    <PenTool size={20} className="text-pathscout-yellow" />
                  </div>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold mb-2">UX/UI Design Simulation</h3>
                <p className="text-white/70 text-sm mb-4">Redesign a mobile app interface based on user feedback and usability testing results.</p>
                <Button variant="outline" className="w-full border-white/10 hover:bg-white/5">
                  Start Simulation
                </Button>
              </div>
            </Card>
            
            <Card className="glass-card border-white/10 overflow-hidden hover:border-pathscout-blue/30 transition-all duration-300 hover:translate-y-[-5px]">
              <div className="h-48 relative">
                <img 
                  src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Data Analysis" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="bg-white/20 backdrop-blur-sm p-2 rounded-full">
                    <Monitor size={20} className="text-green-500" />
                  </div>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold mb-2">Data Analysis Simulation</h3>
                <p className="text-white/70 text-sm mb-4">Analyze customer data to identify trends and present insights to stakeholders.</p>
                <Button variant="outline" className="w-full border-white/10 hover:bg-white/5">
                  Start Simulation
                </Button>
              </div>
            </Card>
            
            <Card className="glass-card border-white/10 overflow-hidden hover:border-pathscout-blue/30 transition-all duration-300 hover:translate-y-[-5px]">
              <div className="h-48 relative">
                <img 
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Software Development" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="bg-white/20 backdrop-blur-sm p-2 rounded-full">
                    <Code size={20} className="text-purple-500" />
                  </div>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold mb-2">Software Development Simulation</h3>
                <p className="text-white/70 text-sm mb-4">Debug code, implement features, and participate in code reviews in a development team.</p>
                <Button variant="outline" className="w-full border-white/10 hover:bg-white/5">
                  Start Simulation
                </Button>
              </div>
            </Card>
          </div>
          
          <h2 className="text-xl font-semibold mb-6">Simulation Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="glass-card border-white/10 p-5 hover:bg-white/5 transition-colors">
              <div className="bg-pathscout-blue/20 p-3 rounded-lg inline-block mb-4">
                <Calendar size={24} className="text-pathscout-blue" />
              </div>
              <h3 className="font-semibold mb-2">Daily Schedule</h3>
              <p className="text-white/70 text-sm">Experience a realistic workday schedule with meetings and tasks.</p>
            </Card>
            
            <Card className="glass-card border-white/10 p-5 hover:bg-white/5 transition-colors">
              <div className="bg-pathscout-yellow/20 p-3 rounded-lg inline-block mb-4">
                <MessageSquare size={24} className="text-pathscout-yellow" />
              </div>
              <h3 className="font-semibold mb-2">Virtual Colleagues</h3>
              <p className="text-white/70 text-sm">Interact with AI colleagues for a realistic team experience.</p>
            </Card>
            
            <Card className="glass-card border-white/10 p-5 hover:bg-white/5 transition-colors">
              <div className="bg-green-500/20 p-3 rounded-lg inline-block mb-4">
                <FileText size={24} className="text-green-500" />
              </div>
              <h3 className="font-semibold mb-2">Real Projects</h3>
              <p className="text-white/70 text-sm">Work on realistic projects based on actual industry scenarios.</p>
            </Card>
            
            <Card className="glass-card border-white/10 p-5 hover:bg-white/5 transition-colors">
              <div className="bg-purple-500/20 p-3 rounded-lg inline-block mb-4">
                <Users size={24} className="text-purple-500" />
              </div>
              <h3 className="font-semibold mb-2">Feedback System</h3>
              <p className="text-white/70 text-sm">Receive feedback on your performance and decision-making.</p>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default JobSimulation;
