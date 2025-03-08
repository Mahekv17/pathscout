
import { Bell, Search, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ThemeToggle } from '@/components/ThemeToggle';
import { useTheme } from '@/components/ThemeProvider';

const Header = ({ isCollapsed = false }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <header 
      className={`fixed top-0 right-0 h-16 border-b z-20 transition-all duration-300 ease-in-out
        ${isDark ? 'bg-pathscout-dark/80 backdrop-blur-md border-white/10' : 'bg-white/90 backdrop-blur-md border-gray-200'}
        ${isCollapsed ? 'left-20' : 'left-0 md:left-64'}`}
    >
      <div className="flex items-center justify-between h-full px-6">
        <div className="w-full max-w-md relative hidden md:block">
          <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${isDark ? 'text-white/50' : 'text-gray-400'}`} size={18} />
          <Input 
            type="text"
            placeholder="Search for careers, skills, or topics..."
            className={`pl-10 w-full ${
              isDark 
                ? 'bg-white/5 border-white/10 focus-visible:ring-pathscout-blue' 
                : 'bg-gray-100 border-gray-200 focus-visible:ring-pathscout-blue'
            }`}
          />
        </div>
        
        <div className="flex items-center ml-auto space-x-4">
          <div className="hidden sm:flex items-center bg-gradient-to-r from-pathscout-blue/20 to-pathscout-yellow/20 px-3 py-1.5 rounded-full">
            <Sparkles size={16} className="text-pathscout-yellow mr-2" />
            <span className={`text-sm ${isDark ? 'text-white' : 'text-gray-700'}`}>250 XP</span>
          </div>
          
          <ThemeToggle />
          
          <Button 
            variant="outline" 
            size="icon" 
            className={`relative ${
              isDark 
                ? 'bg-transparent border-white/10 hover:bg-white/10' 
                : 'bg-transparent border-gray-200 hover:bg-gray-100'
            }`}
          >
            <Bell className="h-5 w-5" />
            <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
          </Button>
          
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-pathscout-blue flex items-center justify-center">
              <span className="text-white font-medium text-sm">T</span>
            </div>
            <div className="hidden md:block">
              <p className={`text-sm font-medium ${isDark ? 'text-white' : 'text-gray-800'}`}>Taylor Swift</p>
              <p className={`text-xs ${isDark ? 'text-white/60' : 'text-gray-500'}`}>Grade 10 Student</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
