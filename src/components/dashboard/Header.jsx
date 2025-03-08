
import { Bell, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ThemeToggle } from '@/components/ThemeToggle';

const Header = ({ isCollapsed = false }) => {
  return (
    <header 
      className={`fixed top-0 right-0 h-16 border-b bg-background/80 backdrop-blur-md border-border z-20 transition-all duration-300 ease-in-out
        ${isCollapsed ? 'left-20' : 'left-0 md:left-64'}`}
    >
      <div className="flex items-center justify-between h-full px-6">
        <div className="w-full max-w-md relative hidden md:block">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
          <Input 
            type="text"
            placeholder="Search..."
            className="pl-10 w-full bg-background/50 border-border focus-visible:ring-primary"
          />
        </div>
        
        <div className="flex items-center ml-auto space-x-4">
          <ThemeToggle />
          <Button 
            variant="outline" 
            size="icon" 
            className="relative bg-transparent border-border hover:bg-accent/50"
          >
            <Bell className="h-5 w-5" />
            <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
          </Button>
          
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-pathscout-blue flex items-center justify-center">
              <span className="text-white font-medium text-sm">J</span>
            </div>
            <div className="hidden md:block">
              <p className="text-sm font-medium">John Doe</p>
              <p className="text-xs text-muted-foreground">Student</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
