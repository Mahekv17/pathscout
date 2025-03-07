
import { useState } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import Sidebar from '@/components/dashboard/Sidebar';
import Header from '@/components/dashboard/Header';
import { 
  Calendar, 
  CheckCircle, 
  Clock, 
  BookOpen,
  Briefcase,
  PenTool,
  FileText,
  MessageSquare,
  ChevronRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const DailyTasks = () => {
  const isMobile = useIsMobile();
  const [isCollapsed, setIsCollapsed] = useState(isMobile);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const tasks = [
    {
      id: 1,
      title: 'Complete UX Fundamentals Module',
      description: 'Finish the first module of the UX Design course',
      category: 'Learning',
      icon: BookOpen,
      iconColor: 'text-pathscout-blue',
      bgColor: 'bg-pathscout-blue/10',
      time: '45 mins',
      completed: false,
      dueToday: true,
    },
    {
      id: 2,
      title: 'Update Your Career Profile',
      description: 'Add your recent skills and experiences to your profile',
      category: 'Profile',
      icon: FileText,
      iconColor: 'text-green-500',
      bgColor: 'bg-green-500/10',
      time: '15 mins',
      completed: true,
      dueToday: true,
    },
    {
      id: 3,
      title: 'Practice Wireframing Exercise',
      description: 'Create wireframes for the e-commerce app challenge',
      category: 'Skill Practice',
      icon: PenTool,
      iconColor: 'text-pathscout-yellow',
      bgColor: 'bg-pathscout-yellow/10',
      time: '60 mins',
      completed: false,
      dueToday: true,
    },
    {
      id: 4,
      title: 'Product Manager Job Simulation',
      description: 'Experience a day as a PM with virtual team interactions',
      category: 'Simulation',
      icon: Briefcase,
      iconColor: 'text-purple-500',
      bgColor: 'bg-purple-500/10',
      time: '90 mins',
      completed: false,
      dueToday: false,
    },
    {
      id: 5,
      title: 'Connect with UX Designer Mentor',
      description: 'Schedule your first mentorship session',
      category: 'Networking',
      icon: MessageSquare,
      iconColor: 'text-pink-500',
      bgColor: 'bg-pink-500/10',
      time: '30 mins',
      completed: false,
      dueToday: false,
    },
  ];

  const completedTasks = tasks.filter(task => task.completed).length;
  const totalTasks = tasks.length;
  const completionPercentage = Math.round((completedTasks / totalTasks) * 100);
  
  // Tasks due today
  const todayTasks = tasks.filter(task => task.dueToday);
  const completedTodayTasks = todayTasks.filter(task => task.completed).length;

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
          <h1 className="text-3xl font-bold mb-2">Daily Tasks</h1>
          <p className="text-white/70 mb-8">Track your progress and complete daily activities to advance your career journey</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="glass-card p-6 rounded-xl border-white/10">
              <div className="flex justify-between items-start mb-2">
                <div className="bg-pathscout-blue/20 p-3 rounded-lg">
                  <Calendar size={24} className="text-pathscout-blue" />
                </div>
                <span className="text-white/60 text-sm">Today</span>
              </div>
              <h3 className="text-lg font-semibold mb-1">Today's Tasks</h3>
              <p className="text-white/70 text-sm mb-3">
                {completedTodayTasks} of {todayTasks.length} completed
              </p>
              <Progress value={(completedTodayTasks / todayTasks.length) * 100} className="h-2 bg-white/10" />
            </Card>
            
            <Card className="glass-card p-6 rounded-xl border-white/10">
              <div className="flex justify-between items-start mb-2">
                <div className="bg-pathscout-yellow/20 p-3 rounded-lg">
                  <CheckCircle size={24} className="text-pathscout-yellow" />
                </div>
                <span className="text-white/60 text-sm">Weekly</span>
              </div>
              <h3 className="text-lg font-semibold mb-1">Weekly Progress</h3>
              <p className="text-white/70 text-sm mb-3">
                {completedTasks} of {totalTasks} tasks completed
              </p>
              <Progress value={completionPercentage} className="h-2 bg-white/10" />
            </Card>
            
            <Card className="glass-card p-6 rounded-xl border-white/10">
              <div className="flex justify-between items-start mb-2">
                <div className="bg-green-500/20 p-3 rounded-lg">
                  <Clock size={24} className="text-green-500" />
                </div>
                <span className="text-white/60 text-sm">Streak</span>
              </div>
              <h3 className="text-lg font-semibold mb-1">Activity Streak</h3>
              <p className="text-white/70 text-sm mb-3">
                7 days in a row
              </p>
              <div className="flex justify-between">
                {[...Array(7)].map((_, index) => (
                  <div 
                    key={index}
                    className={`h-2 w-full mx-0.5 rounded-full ${
                      index < 7 ? 'bg-green-500' : 'bg-white/10'
                    }`}
                  ></div>
                ))}
              </div>
            </Card>
          </div>
          
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Today's Priority Tasks</h2>
            <div className="space-y-3">
              {todayTasks.map((task) => (
                <Card 
                  key={task.id}
                  className={`glass-card p-4 border-white/10 hover:border-pathscout-blue/30 transition-all duration-300 ${
                    task.completed ? 'opacity-70' : ''
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`${task.bgColor} p-3 rounded-lg shrink-0`}>
                      <task.icon size={20} className={task.iconColor} />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs px-2 py-0.5 bg-white/10 rounded-full">
                          {task.category}
                        </span>
                        <span className="text-xs text-white/60 flex items-center gap-1">
                          <Clock size={12} />
                          {task.time}
                        </span>
                      </div>
                      <h3 className={`font-medium ${task.completed ? 'line-through text-white/50' : ''}`}>
                        {task.title}
                      </h3>
                      <p className="text-sm text-white/70">{task.description}</p>
                    </div>
                    
                    <Button 
                      variant={task.completed ? "outline" : "default"} 
                      size="sm"
                      className={task.completed ? "border-white/10 hover:bg-white/5" : "bg-pathscout-blue hover:bg-pathscout-blue/90"}
                    >
                      {task.completed ? 'Completed' : 'Start Task'}
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
          
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Upcoming Tasks</h2>
            <div className="space-y-3">
              {tasks.filter(task => !task.dueToday).map((task) => (
                <Card 
                  key={task.id}
                  className="glass-card p-4 border-white/10 hover:border-pathscout-blue/30 transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className={`${task.bgColor} p-3 rounded-lg shrink-0`}>
                      <task.icon size={20} className={task.iconColor} />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs px-2 py-0.5 bg-white/10 rounded-full">
                          {task.category}
                        </span>
                        <span className="text-xs text-white/60 flex items-center gap-1">
                          <Clock size={12} />
                          {task.time}
                        </span>
                      </div>
                      <h3 className="font-medium">{task.title}</h3>
                      <p className="text-sm text-white/70">{task.description}</p>
                    </div>
                    
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="border-white/10 hover:bg-white/5"
                    >
                      Schedule
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
          
          <Card className="glass-card p-6 rounded-xl border-white/10">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Weekly Overview</h2>
              <Button variant="ghost" className="text-white/70 hover:text-white p-0">
                View All <ChevronRight size={16} />
              </Button>
            </div>
            
            <div className="grid grid-cols-7 gap-2 mb-4">
              {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, index) => (
                <div key={index} className="text-center">
                  <div className="text-white/70 text-sm mb-2">{day}</div>
                  <div className={`w-full pt-[100%] relative rounded-lg ${
                    index <= 4 ? 'bg-pathscout-blue/20' : 'bg-white/10'
                  }`}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      {index <= 4 && <CheckCircle size={14} className="text-pathscout-blue" />}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex items-center justify-between text-white/70 text-sm">
              <span>Current streak: 7 days</span>
              <span>Longest streak: 14 days</span>
            </div>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default DailyTasks;
