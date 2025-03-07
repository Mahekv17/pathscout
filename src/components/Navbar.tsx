
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 py-4 px-6 transition-all duration-300 ${
        scrolled ? 'bg-pathscout-dark/80 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pathscout-blue to-pathscout-yellow flex items-center justify-center">
            <span className="text-white font-bold text-xl">P</span>
          </div>
          <span className="text-white font-poppins font-bold text-xl">PathScout</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-white/80 hover:text-white transition-colors">Home</Link>
          <Link to="/auth" className="text-white/80 hover:text-white transition-colors">Features</Link>
          <Link to="/auth" className="text-white/80 hover:text-white transition-colors">Testimonials</Link>
          <Link to="/auth" className="text-white/80 hover:text-white transition-colors">About</Link>
          <Link to="/auth">
            <Button className="bg-pathscout-blue hover:bg-pathscout-blue/90 text-white">
              Get Started
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-pathscout-dark/95 backdrop-blur-md shadow-lg py-4 px-6 flex flex-col space-y-4 animate-fade-in">
          <Link to="/" className="text-white/80 hover:text-white transition-colors py-2">Home</Link>
          <Link to="/auth" className="text-white/80 hover:text-white transition-colors py-2">Features</Link>
          <Link to="/auth" className="text-white/80 hover:text-white transition-colors py-2">Testimonials</Link>
          <Link to="/auth" className="text-white/80 hover:text-white transition-colors py-2">About</Link>
          <Link to="/auth">
            <Button className="w-full bg-pathscout-blue hover:bg-pathscout-blue/90 text-white">
              Get Started
            </Button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
