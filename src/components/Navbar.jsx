
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from '@/components/ThemeToggle';
import { useTheme } from '@/components/ThemeProvider';
import gsap from 'gsap';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      gsap.fromTo(
        ".mobile-menu-item",
        { y: 20, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.4, 
          stagger: 0.1,
          ease: "power2.out" 
        }
      );
    }
  }, [mobileMenuOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 py-4 px-6 transition-all duration-300 ${
        scrolled 
          ? `bg-background/80 backdrop-blur-md shadow-md` 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2 group">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pathscout-blue to-pathscout-yellow flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
            <span className="text-white font-bold text-xl">P</span>
          </div>
          <span className="text-foreground font-poppins font-bold text-xl">PathScout</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-foreground/80 hover:text-foreground transition-colors">Home</Link>
          <Link to="/dashboard/explore-careers" className="text-foreground/80 hover:text-foreground transition-colors">Careers</Link>
          <Link to="/dashboard/skills" className="text-foreground/80 hover:text-foreground transition-colors">Skills</Link>
          <Link to="/dashboard" className="text-foreground/80 hover:text-foreground transition-colors">Dashboard</Link>
          <ThemeToggle />
          <Link to="/auth">
            <Button className="bg-primary hover:bg-primary/90 text-white">
              Get Started
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-2"> 
          <ThemeToggle />
          <button 
            className="text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md shadow-lg py-4 px-6 flex flex-col space-y-4 animate-fade-in">
          <Link to="/" className="mobile-menu-item text-foreground/80 hover:text-foreground transition-colors py-2">Home</Link>
          <Link to="/dashboard/explore-careers" className="mobile-menu-item text-foreground/80 hover:text-foreground transition-colors py-2">Careers</Link>
          <Link to="/dashboard/skills" className="mobile-menu-item text-foreground/80 hover:text-foreground transition-colors py-2">Skills</Link>
          <Link to="/dashboard" className="mobile-menu-item text-foreground/80 hover:text-foreground transition-colors py-2">Dashboard</Link>
          <Link to="/auth" className="mobile-menu-item">
            <Button className="w-full bg-primary hover:bg-primary/90 text-white">
              Get Started
            </Button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
