
import { useState } from 'react';
import { Bell, Search, Settings, Moon, Sun, User } from 'lucide-react';
import { Avatar } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type HeaderProps = {
  isCollapsed: boolean;
};

const Header = ({ isCollapsed }: HeaderProps) => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <header className={`h-16 border-b border-white/10 bg-pathscout-dark fixed top-0 right-0 z-20 transition-all duration-300 ease-in-out flex items-center justify-between px-6 ${isCollapsed ? 'left-20' : 'left-64'}`}>
      <div className="flex items-center">
        <div className="relative hidden md:block">
          <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50" />
          <Input 
            placeholder="Search..." 
            className="w-64 pl-10 bg-white/5 border-white/10 focus:border-pathscout-blue" 
          />
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="text-white/70 hover:text-white hover:bg-white/5"
        >
          {isDarkMode ? <Moon size={18} /> : <Sun size={18} />}
        </Button>

        <Button 
          variant="ghost" 
          size="icon"
          className="text-white/70 hover:text-white hover:bg-white/5 relative"
        >
          <Bell size={18} />
          <span className="absolute top-2 right-2 w-2 h-2 bg-pathscout-blue rounded-full"></span>
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-9 w-9 rounded-full">
              <Avatar className="h-9 w-9 border border-white/20">
                <User size={20} className="text-white/70" />
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 glass-card border-white/10" align="end" forceMount>
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">John Doe</p>
                <p className="text-xs leading-none text-white/60">john.doe@example.com</p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-white/10" />
            <DropdownMenuItem className="focus:bg-white/10 cursor-pointer">
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem className="focus:bg-white/10 cursor-pointer">
              Settings
            </DropdownMenuItem>
            <DropdownMenuSeparator className="bg-white/10" />
            <DropdownMenuItem className="focus:bg-white/10 cursor-pointer text-red-400">
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default Header;
