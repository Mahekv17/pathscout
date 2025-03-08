
import { useState } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import Sidebar from '@/components/dashboard/Sidebar';
import Header from '@/components/dashboard/Header';
import { 
  Briefcase, 
  Code, 
  PenTool, 
  BarChart2, 
  Brain,
  Database, 
  Search,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';

const ExploreCareer = () => {
  const isMobile = useIsMobile();
  const [isCollapsed, setIsCollapsed] = useState(isMobile);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const careerOptions = [
    {
      title: 'Product Management',
      description: 'Lead product development from conception to launch',
      icon: Briefcase,
      match: 92,
      color: 'text-pathscout-blue',
      bgColor: 'bg-pathscout-blue/10'
    },
    {
      title: 'UX/UI Design',
      description: 'Create intuitive, engaging user experiences',
      icon: PenTool,
      match: 85,
      color: 'text-pathscout-yellow',
      bgColor: 'bg-pathscout-yellow/10'
    },
    {
      title: 'Data Analysis',
      description: 'Transform data into actionable insights',
      icon: BarChart2,
      match: 78,
      color: 'text-green-500',
      bgColor: 'bg-green-500/10'
    },
    {
      title: 'Software Development',
      description: 'Build applications and digital solutions',
      icon: Code,
      match: 75,
      color: 'text-purple-500',
      bgColor: 'bg-purple-500/10'
    },
    {
      title: 'AI/Machine Learning',
      description: 'Develop intelligent systems and algorithms',
      icon: Brain,
      match: 70,
      color: 'text-pink-500',
      bgColor: 'bg-pink-500/10'
    },
    {
      title: 'Database Administration',
      description: 'Design and manage database systems',
      icon: Database,
      match: 65,
      color: 'text-blue-400',
      bgColor: 'bg-blue-400/10'
    }
  ];

  const filteredCareers = careerOptions.filter(career => 
    career.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    career.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background text-foreground flex">
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
          <h1 className="text-3xl font-bold mb-2">Explore Career Matches</h1>
          <p className="text-muted-foreground mb-8">Discover careers that align with your personality, skills, and interests</p>
          
          <div className="flex items-center mb-8 relative">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
              <Input 
                placeholder="Search careers..."
                className="pl-10 bg-background/5 border-border"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {filteredCareers.map((career, index) => (
              <Card 
                key={index} 
                className="glass-card p-6 rounded-xl border-border hover:border-primary/30 transition-all duration-300 hover:translate-y-[-5px]"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className={`${career.bgColor} p-3 rounded-lg`}>
                    <career.icon size={24} className={career.color} />
                  </div>
                  <span className="text-muted-foreground text-sm">Match: {career.match}%</span>
                </div>
                
                <h3 className="text-xl font-semibold mb-2">{career.title}</h3>
                <p className="text-muted-foreground mb-4">{career.description}</p>
                
                <div className="mb-4">
                  <div className="flex justify-between mb-1">
                    <span className="text-xs text-muted-foreground">Match Score</span>
                    <span className="text-xs text-muted-foreground">{career.match}%</span>
                  </div>
                  <Progress value={career.match} className="h-2 bg-muted" />
                </div>
                
                <Button className="w-full flex items-center justify-center gap-2">
                  Learn More
                  <ArrowRight size={16} />
                </Button>
              </Card>
            ))}
          </div>
          
          {filteredCareers.length === 0 && (
            <div className="text-center py-10">
              <h3 className="text-xl font-semibold mb-2">No careers found</h3>
              <p className="text-muted-foreground">Try different search terms</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default ExploreCareer;
