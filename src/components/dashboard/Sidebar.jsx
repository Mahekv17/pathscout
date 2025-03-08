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
  Compass 
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/components/ThemeProvider';
import { useToast } from '@/hooks/use-toast';

const Sidebar = ({ isMobile, isCollapsed, toggleSidebar }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { theme } = useTheme();
  const { toasts, addToast, updateToast, dismissToast, removeToast } = useToast();
  
  const isDark = theme === 'dark';

  const navItems = [
    {
      icon: Home,
      label: 'Dashboard',
      href: '/dashboard',
      active: location.pathname === '/dashboard',
    },
    {
      icon: Briefcase,
      label: 'Career Assessment',
      href: '/dashboard/career',
      active: location.pathname === '/dashboard/career',
    },
    {
      icon: Compass,
      label: 'Explore Careers',
      href: '/dashboard/explore-careers',
      active: location.pathname === '/dashboard/explore-careers',
    },
    {
      icon: BookOpen,
      label: 'Skill Development',
      href: '/dashboard/skills',
      active: location.pathname === '/dashboard/skills',
    },
    {
      icon: Monitor,
      label: 'Job Simulation',
      href: '/dashboard/job-simulation',
      active: location.pathname === '/dashboard/job-simulation',
    },
    {
      icon: Users,
      label: 'Alumni Network',
      href: '/dashboard/alumni',
      active: location.pathname === '/dashboard/alumni',
    },
    {
      icon: Calendar,
      label: 'Daily Tasks',
      href: '/dashboard/daily-tasks',
      active: location.pathname === '/dashboard/daily-tasks',
    },
  ];

  const bottomNavItems = [
    {
      icon: Settings,
      label: 'Settings',
      href: '/dashboard/settings',
      active: location.pathname === '/dashboard/settings',
      onClick: () => {
        addToast({
          id: crypto.randomUUID(),
          title: "Settings",
          description: "Settings panel coming soon",
          open: true
        });
      }
    },
    {
      icon: LogOut,
      label: 'Logout',
      href: '/',
      active: false,
      onClick: () => {
        addToast({
          id: crypto.randomUUID(),
          title: "Logged out",
          description: "You have been successfully logged out",
          open: true
        });
        navigate('/');
      }
    },
  ];

  return (
    <aside
      className={cn(
        "flex flex-col h-screen fixed z-30 bg-sidebar border-r border-border transition-all duration-300 ease-in-out",
        isCollapsed ? "w-20" : "w-64",
        isMobile && isCollapsed && "translate-x-[-100%]"
      )}
    >
      <div className="flex items-center justify-between p-4 h-16 border-b border-border">
        <div className={cn("flex items-center", isCollapsed && "justify-center w-full")}>
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pathscout-blue to-pathscout-yellow flex items-center justify-center animate-pulse-glow">
            <span className="text-white font-bold text-xl">P</span>
          </div>
          {!isCollapsed && <span className="ml-3 text-sidebar-foreground font-poppins font-bold text-xl">PathScout</span>}
        </div>
        {!isMobile && (
          <button 
            onClick={toggleSidebar} 
            className="text-sidebar-foreground/70 hover:text-sidebar-foreground transition-colors"
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
            className="bg-sidebar border-border"
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
                  ? "bg-primary/20 text-sidebar-foreground" 
                  : "text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent/20"
              )}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <item.icon 
                size={20} 
                className={cn(
                  isCollapsed ? "mx-auto" : "mr-3", 
                  item.active && "text-primary"
                )} 
              />
              {!isCollapsed && <span className="transition-all duration-300">{item.label}</span>}
            </div>
          </Link>
        ))}
      </div>

      <div className="p-4 space-y-2 border-t border-border">
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
                    ? "bg-primary/20 text-sidebar-foreground" 
                    : "text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent/20"
                )}
              >
                <item.icon 
                  size={20} 
                  className={cn(isCollapsed ? "mx-auto" : "mr-3")} 
                />
                {!isCollapsed && <span>{item.label}</span>}
              </div>
            </Link>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
