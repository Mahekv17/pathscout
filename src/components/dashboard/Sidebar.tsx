
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
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

type SidebarProps = {
  isMobile: boolean;
  isCollapsed: boolean;
  toggleSidebar: () => void;
};

const Sidebar = ({ isMobile, isCollapsed, toggleSidebar }: SidebarProps) => {
  const location = useLocation();

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
    },
    {
      icon: LogOut,
      label: 'Logout',
      href: '/',
      active: false,
    },
  ];

  return (
    <aside
      className={cn(
        "flex flex-col h-screen fixed z-30 bg-pathscout-dark border-r border-white/10 transition-all duration-300 ease-in-out",
        isCollapsed ? "w-20" : "w-64",
        isMobile && isCollapsed && "translate-x-[-100%]"
      )}
    >
      <div className="flex items-center justify-between p-4 h-16 border-b border-white/10">
        <div className={cn("flex items-center", isCollapsed && "justify-center w-full")}>
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pathscout-blue to-pathscout-yellow flex items-center justify-center">
            <span className="text-white font-bold text-xl">P</span>
          </div>
          {!isCollapsed && <span className="ml-3 text-white font-poppins font-bold text-xl">PathScout</span>}
        </div>
        {!isMobile && (
          <button 
            onClick={toggleSidebar} 
            className="text-white/70 hover:text-white"
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
            className="bg-pathscout-dark border-white/10"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      )}

      <div className="flex-1 overflow-y-auto py-4 space-y-2">
        {navItems.map((item, index) => (
          <Link to={item.href} key={index}>
            <div
              className={cn(
                "flex items-center px-4 py-3 mx-2 rounded-lg transition-colors",
                item.active 
                  ? "bg-pathscout-blue/20 text-white" 
                  : "text-white/70 hover:text-white hover:bg-white/5"
              )}
            >
              <item.icon 
                size={20} 
                className={cn(
                  isCollapsed ? "mx-auto" : "mr-3", 
                  item.active && "text-pathscout-blue"
                )} 
              />
              {!isCollapsed && <span>{item.label}</span>}
            </div>
          </Link>
        ))}
      </div>

      <div className="p-4 space-y-2 border-t border-white/10">
        {bottomNavItems.map((item, index) => (
          <Link to={item.href} key={index}>
            <div
              className={cn(
                "flex items-center px-4 py-3 rounded-lg transition-colors",
                item.active 
                  ? "bg-pathscout-blue/20 text-white" 
                  : "text-white/70 hover:text-white hover:bg-white/5"
              )}
            >
              <item.icon 
                size={20} 
                className={cn(isCollapsed ? "mx-auto" : "mr-3")} 
              />
              {!isCollapsed && <span>{item.label}</span>}
            </div>
          </Link>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
