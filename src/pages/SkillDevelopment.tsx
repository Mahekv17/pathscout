
import { useState } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import Sidebar from '@/components/dashboard/Sidebar';
import Header from '@/components/dashboard/Header';
import { 
  Briefcase, 
  BookOpen, 
  Play,
  Check,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const SkillDevelopment = () => {
  const isMobile = useIsMobile();
  const [isCollapsed, setIsCollapsed] = useState(isMobile);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const skillCourses = [
    {
      id: 1,
      title: 'UX Fundamentals',
      description: 'Learn the basics of user experience design',
      progress: 65,
      lessons: 12,
      completed: 8,
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      category: 'UX Design'
    },
    {
      id: 2,
      title: 'Product Strategy',
      description: 'Master the art of product planning and execution',
      progress: 40,
      lessons: 10,
      completed: 4,
      image: 'https://images.unsplash.com/photo-1553484771-371a605b060b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      category: 'Product Management'
    },
    {
      id: 3,
      title: 'Data Analysis with Python',
      description: 'Learn to analyze and visualize data with Python',
      progress: 20,
      lessons: 15,
      completed: 3,
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      category: 'Data Analysis'
    },
    {
      id: 4,
      title: 'UI Design Principles',
      description: 'Master the core principles of interface design',
      progress: 0,
      lessons: 8,
      completed: 0,
      image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      category: 'UI Design'
    }
  ];

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
          <h1 className="text-3xl font-bold mb-2">Skill Development</h1>
          <p className="text-white/70 mb-8">Build the skills needed for your target career path</p>
          
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-xl font-semibold">Your Learning Path</h2>
              <p className="text-white/70">Based on your career interests in UX/UI Design & Product Management</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-white/70">Overall progress:</span>
              <div className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full">
                <Progress value={42} className="w-24 h-2 bg-white/10" />
                <span className="text-sm">42%</span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
            {skillCourses.map((course) => (
              <Card key={course.id} className="glass-card border-white/10 overflow-hidden hover:border-pathscout-blue/30 transition-all duration-300 hover:translate-y-[-5px]">
                <div className="h-40 relative">
                  <img 
                    src={course.image} 
                    alt={course.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                    <span className="text-xs px-2 py-1 bg-white/20 backdrop-blur-sm rounded-full">
                      {course.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-5">
                  <h3 className="text-lg font-semibold mb-1">{course.title}</h3>
                  <p className="text-white/70 text-sm mb-3">{course.description}</p>
                  
                  <div className="mb-4">
                    <div className="flex justify-between mb-1 text-xs text-white/60">
                      <span>{course.completed} of {course.lessons} lessons completed</span>
                      <span>{course.progress}%</span>
                    </div>
                    <Progress value={course.progress} className="h-2 bg-white/10" />
                  </div>
                  
                  <Button 
                    className={`w-full ${course.progress === 0 ? 'bg-pathscout-blue hover:bg-pathscout-blue/90' : 'bg-pathscout-blue/20 hover:bg-pathscout-blue/30'}`}
                  >
                    {course.progress === 0 ? (
                      <>
                        Start Course <Play size={16} className="ml-2" />
                      </>
                    ) : course.progress === 100 ? (
                      <>
                        Completed <Check size={16} className="ml-2" />
                      </>
                    ) : (
                      <>
                        Continue <ArrowRight size={16} className="ml-2" />
                      </>
                    )}
                  </Button>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Recommended Skills</h2>
            <Card className="glass-card p-6 border-white/10">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                  <h4 className="font-medium mb-2">UX Research</h4>
                  <p className="text-white/70 text-sm">Essential for UX/UI Design careers</p>
                </div>
                <div className="p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                  <h4 className="font-medium mb-2">User Interviews</h4>
                  <p className="text-white/70 text-sm">Critical for Product Management</p>
                </div>
                <div className="p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                  <h4 className="font-medium mb-2">Wireframing</h4>
                  <p className="text-white/70 text-sm">Key skill for UI/UX Design</p>
                </div>
                <div className="p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                  <h4 className="font-medium mb-2">Prototyping</h4>
                  <p className="text-white/70 text-sm">Important for UI/UX Design</p>
                </div>
                <div className="p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                  <h4 className="font-medium mb-2">Usability Testing</h4>
                  <p className="text-white/70 text-sm">Critical for UX/UI Design</p>
                </div>
                <div className="p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                  <h4 className="font-medium mb-2">Analytics</h4>
                  <p className="text-white/70 text-sm">Valuable for Product Management</p>
                </div>
              </div>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default SkillDevelopment;
