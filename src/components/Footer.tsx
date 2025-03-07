
import { Link } from 'react-router-dom';
import { Twitter, Facebook, Instagram, Linkedin, Mail, Phone, MapPin, ChevronRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-pathscout-darker border-t border-white/5 pt-16 pb-8 px-6 md:px-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pathscout-blue to-pathscout-yellow flex items-center justify-center">
                <span className="text-white font-bold text-xl">P</span>
              </div>
              <span className="text-white font-poppins font-bold text-xl">PathScout</span>
            </div>
            <p className="text-white/70 mb-6">
              Guiding professionals to discover and prepare for their perfect career path through AI-driven tools and resources.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/70 hover:text-pathscout-blue transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-pathscout-blue transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-pathscout-blue transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-pathscout-blue transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/auth" className="text-white/70 hover:text-white flex items-center group">
                  <ChevronRight size={16} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Career Assessment
                </Link>
              </li>
              <li>
                <Link to="/auth" className="text-white/70 hover:text-white flex items-center group">
                  <ChevronRight size={16} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Skill Development
                </Link>
              </li>
              <li>
                <Link to="/auth" className="text-white/70 hover:text-white flex items-center group">
                  <ChevronRight size={16} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Job Simulation
                </Link>
              </li>
              <li>
                <Link to="/auth" className="text-white/70 hover:text-white flex items-center group">
                  <ChevronRight size={16} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Alumni Network
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/auth" className="text-white/70 hover:text-white flex items-center group">
                  <ChevronRight size={16} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Career Blog
                </Link>
              </li>
              <li>
                <Link to="/auth" className="text-white/70 hover:text-white flex items-center group">
                  <ChevronRight size={16} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Success Stories
                </Link>
              </li>
              <li>
                <Link to="/auth" className="text-white/70 hover:text-white flex items-center group">
                  <ChevronRight size={16} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/auth" className="text-white/70 hover:text-white flex items-center group">
                  <ChevronRight size={16} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Career Guide
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail size={20} className="text-pathscout-blue mr-3 mt-1 flex-shrink-0" />
                <span className="text-white/70">info@pathscout.com</span>
              </li>
              <li className="flex items-start">
                <Phone size={20} className="text-pathscout-blue mr-3 mt-1 flex-shrink-0" />
                <span className="text-white/70">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <MapPin size={20} className="text-pathscout-blue mr-3 mt-1 flex-shrink-0" />
                <span className="text-white/70">123 Career Street, San Francisco, CA 94103</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-white/50">
          <p>&copy; {new Date().getFullYear()} PathScout. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
