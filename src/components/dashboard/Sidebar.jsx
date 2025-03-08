
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  Home, 
  Briefcase, 
  BookOpen, 
  Monitor, 
  Users, 
  Calendar, 
  Settings, 
  LogOut,
  ChevronLeft,
  Menu,
  Compass,
  Award,
  Lightbulb,
  Gamepad2,
  Star
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/components/ThemeProvider';
import { useToast } from '@/hooks/use-toast';

const Sidebar = ({ isMobile, isCollapsed, toggleSidebar }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { theme } = useTheme();
  const { toast } = useToast();
  
  const isDark = theme === 'dark';

  // Updated nav items with more fun icons and student-friendly labels
  const navItems = [
    {
      icon: Home,
      label: 'My Dashboard',
      href: '/dashboard',
      active: location.pathname === '/dashboard',
      color: 'text-pathscout-blue'
    },
    {
      icon: Lightbulb,
      label: 'Career Quiz',
      href: '/dashboard/career',
      active: location.pathname === '/dashboard/career',
      color: 'text-pathscout-yellow'
    },
    {
      icon: Compass,
      label: 'Explore Careers',
      href: '/dashboard/explore-careers',
      active: location.pathname === '/dashboard/explore-careers',
      color: 'text-green-500'
    },
    {
      icon: Star,
      label: 'Skill Builder',
      href: '/dashboard/skills',
      active: location.pathname === '/dashboard/skills',
      color: 'text-purple-500'
    },
    {
      icon: Gamepad2,
      label: 'Career Simulator',
      href: '/dashboard/job-simulation',
      active: location.pathname === '/dashboard/job-simulation',
      color: 'text-pink-500'
    },
    {
      icon: Users,
      label: 'Meet Professionals',
      href: '/dashboard/alumni',
      active: location.pathname === '/dashboard/alumni',
      color: 'text-orange-500'
    },
    {
      icon: Calendar,
      label: 'My Goals',
      href: '/dashboard/daily-tasks',
      active: location.pathname === '/dashboard/daily-tasks',
      color: 'text-cyan-500'
    },
  ];

  const bottomNavItems = [
    {
      icon: Settings,
      label: 'Settings',
      href: '/dashboard/settings',
      active: location.pathname === '/dashboard/settings',
      color: 'text-gray-400',
      onClick: () => {
        toast({
          title: "Settings",
          description: "Settings panel coming soon",
        });
      }
    },
    {
      icon: LogOut,
      label: 'Logout',
      href: '/',
      active: false,
      color: 'text-gray-400',
      onClick: () => {
        toast({
          title: "Logged out",
          description: "You have been successfully logged out",
        });
        navigate('/');
      }
    },
  ];

  return (
    <aside
      className={cn(
        "flex flex-col h-screen fixed z-30 border-r transition-all duration-300 ease-in-out",
        isDark ? "bg-sidebar border-border" : "bg-white border-gray-200",
        isCollapsed ? "w-20" : "w-64",
        isMobile && isCollapsed && "translate-x-[-100%]"
      )}
    >
      <div className={cn(
        "flex items-center justify-between p-4 h-16 border-b transition-all",
        isDark ? "border-border" : "border-gray-200"
      )}>
        <div className={cn("flex items-center", isCollapsed && "justify-center w-full")}>
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pathscout-blue to-pathscout-yellow flex items-center justify-center animate-pulse-glow">
            <span className="text-white font-bold text-xl">P</span>
          </div>
          {!isCollapsed && <span className={cn(
            "ml-3 font-poppins font-bold text-xl",
            isDark ? "text-sidebar-foreground" : "text-gray-800"
          )}>PathScout</span>}
        </div>
        {!isMobile && (
          <button 
            onClick={toggleSidebar} 
            className={cn(
              "transition-colors",
              isDark ? "text-sidebar-foreground/70 hover:text-sidebar-foreground" : "text-gray-600 hover:text-gray-800"
            )}
          >
            <ChevronLeft size={20} className={cn("transition-transform", isCollapsed && "rotate-180")} />
          </button>
        )}
      </div>

      {isMobile && (
        <div className="absolute top-4 -right-12">
          <Button 
            variant="outline" 
            size="icon" 
            onClick={toggleSidebar}
            className={cn(
              isDark ? "bg-sidebar border-border" : "bg-white border-gray-200"
            )}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      )}

      <div className="flex-1 overflow-y-auto py-4 space-y-2">
        {navItems.map((item, index) => (
          <Link to={item.href} key={index} className="block">
            <div
              className={cn(
                "flex items-center px-4 py-3 mx-2 rounded-lg transition-all duration-300 animate-fade-in",
                item.active 
                  ? isDark ? "bg-primary/20" : "bg-primary/10"
                  : isDark ? "hover:bg-sidebar-accent/20" : "hover:bg-gray-100",
                isDark ? "text-sidebar-foreground" : "text-gray-700",
                item.active && isDark ? "text-sidebar-foreground" : item.active && "text-gray-900"
              )}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <item.icon 
                size={22} 
                className={cn(
                  isCollapsed ? "mx-auto" : "mr-3", 
                  item.active ? item.color : isDark ? "text-sidebar-foreground/60" : "text-gray-500"
                )} 
              />
              {!isCollapsed && (
                <span className="transition-all duration-300 font-medium">
                  {item.label}
                </span>
              )}
            </div>
          </Link>
        ))}
      </div>

      <div className={cn(
        "p-4 space-y-2 border-t",
        isDark ? "border-border" : "border-gray-200"
      )}>
        {bottomNavItems.map((item, index) => (
          <div
            key={index}
            onClick={(e) => {
              if (item.onClick) {
                e.preventDefault();
                item.onClick();
              }
            }}
            className="cursor-pointer"
          >
            <Link to={item.href}>
              <div
                className={cn(
                  "flex items-center px-4 py-3 rounded-lg transition-colors",
                  item.active 
                    ? isDark ? "bg-primary/20" : "bg-primary/10"
                    : isDark ? "hover:bg-sidebar-accent/20" : "hover:bg-gray-100",
                  isDark ? "text-sidebar-foreground/70" : "text-gray-500",
                  item.active && isDark ? "text-sidebar-foreground" : item.active && "text-gray-900"
                )}
              >
                <item.icon 
                  size={20} 
                  className={cn(isCollapsed ? "mx-auto" : "mr-3", item.color)} 
                />
                {!isCollapsed && <span>{item.label}</span>}
              </div>
            </Link>
          </div>
        ))}
      </div>
      
      {/* Add fun decorative elements for students */}
      {!isCollapsed && (
        <div className="p-4 mx-2 mb-4 rounded-lg bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-white/10">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center">
              <Award size={16} className="text-pathscout-yellow mr-2" />
              <span className={isDark ? "text-white/90" : "text-gray-700"}>XP Points</span>
            </div>
            <span className="text-sm font-bold text-pathscout-yellow">250</span>
          </div>
          <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
            <div className="h-full bg-pathscout-yellow w-[65%] rounded-full"></div>
          </div>
          <div className="mt-1 text-xs text-center text-white/50">
            Level 3 Explorer
          </div>
        </div>
      )}
    </aside>
  );
};

export default Sidebar;
