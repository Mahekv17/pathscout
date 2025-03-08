
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
      title: 'Game Design Basics',
      description: 'Learn to create your own awesome video games',
      progress: 65,
      lessons: 12,
      completed: 8,
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      category: 'Game Design'
    },
    {
      id: 2,
      title: 'Coding for Beginners',
      description: 'Start your coding journey with fun projects',
      progress: 40,
      lessons: 10,
      completed: 4,
      image: 'https://images.unsplash.com/photo-1553484771-371a605b060b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      category: 'Programming'
    },
    {
      id: 3,
      title: 'Digital Art Fundamentals',
      description: 'Create amazing digital artwork with simple tools',
      progress: 20,
      lessons: 15,
      completed: 3,
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      category: 'Digital Art'
    },
    {
      id: 4,
      title: 'Robotics for Teens',
      description: 'Build your own robots and learn how they work',
      progress: 0,
      lessons: 8,
      completed: 0,
      image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      category: 'Robotics'
    }
  ];

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
          <h1 className="text-3xl font-bold mb-2 section-animate">Skill Development</h1>
          <p className="text-muted-foreground mb-8 section-animate">Discover awesome skills for your future career</p>
          
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 section-animate">
            <div>
              <h2 className="text-xl font-semibold">Your Learning Path</h2>
              <p className="text-muted-foreground">Based on your interests in Gaming, Art & Technology</p>
            </div>
            <div className="flex items-center gap-3 mt-4 md:mt-0">
              <span className="text-muted-foreground">Your progress:</span>
              <div className="flex items-center gap-2 bg-primary/10 px-3 py-1 rounded-full">
                <Progress value={42} className="w-24 h-2" />
                <span className="text-sm">42%</span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
            {skillCourses.map((course) => (
              <Card key={course.id} className="border overflow-hidden hover:border-primary/30 transition-all duration-300 hover:translate-y-[-5px] section-animate">
                <div className="h-40 relative">
                  <img 
                    src={course.image} 
                    alt={course.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                    <span className="text-xs px-2 py-1 bg-primary/20 backdrop-blur-sm rounded-full text-white">
                      {course.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-5">
                  <h3 className="text-lg font-semibold mb-1">{course.title}</h3>
                  <p className="text-muted-foreground text-sm mb-3">{course.description}</p>
                  
                  <div className="mb-4">
                    <div className="flex justify-between mb-1 text-xs text-muted-foreground">
                      <span>{course.completed} of {course.lessons} lessons completed</span>
                      <span>{course.progress}%</span>
                    </div>
                    <Progress value={course.progress} className="h-2" />
                  </div>
                  
                  <Button 
                    className={`w-full ${course.progress === 0 ? 'bg-primary hover:bg-primary/90' : 'bg-primary/20 hover:bg-primary/30'}`}
                  >
                    {course.progress === 0 ? (
                      <>
                        Start Learning <Play size={16} className="ml-2" />
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
          
          <div className="mb-8 section-animate">
            <h2 className="text-xl font-semibold mb-4">Recommended Skills for Students</h2>
            <Card className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="p-4 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors">
                  <h4 className="font-medium mb-2">Game Design</h4>
                  <p className="text-muted-foreground text-sm">Learn to create your own video games!</p>
                </div>
                <div className="p-4 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors">
                  <h4 className="font-medium mb-2">3D Modeling</h4>
                  <p className="text-muted-foreground text-sm">Design awesome 3D characters and scenes</p>
                </div>
                <div className="p-4 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors">
                  <h4 className="font-medium mb-2">Animation</h4>
                  <p className="text-muted-foreground text-sm">Make your characters come to life!</p>
                </div>
                <div className="p-4 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors">
                  <h4 className="font-medium mb-2">Coding</h4>
                  <p className="text-muted-foreground text-sm">Build cool apps and websites</p>
                </div>
                <div className="p-4 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors">
                  <h4 className="font-medium mb-2">Robotics</h4>
                  <p className="text-muted-foreground text-sm">Create your own robots!</p>
                </div>
                <div className="p-4 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors">
                  <h4 className="font-medium mb-2">Digital Art</h4>
                  <p className="text-muted-foreground text-sm">Express yourself through digital drawing</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Decorative elements */}
          <div className="fixed top-1/4 right-5 w-8 h-8 bg-yellow-400/30 rounded-full blur-sm floating-element"></div>
          <div className="fixed top-1/3 left-5 w-10 h-10 bg-blue-500/30 rounded-full blur-sm floating-element"></div>
          <div className="fixed bottom-1/4 right-8 w-12 h-12 bg-purple-500/20 rounded-full blur-sm floating-element"></div>
          <div className="fixed bottom-1/3 left-8 w-7 h-7 bg-green-500/20 rounded-full blur-sm floating-element"></div>
        </main>
      </div>
    </div>
  );
};

export default SkillDevelopment;
