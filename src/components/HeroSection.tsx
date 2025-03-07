
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronRight, Briefcase, BarChart, Book, Users, Star } from 'lucide-react';
import gsap from 'gsap';

const HeroSection = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);
  const floatingElementsRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    
    tl.from(titleRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    })
    .from(subtitleRef.current, {
      y: 30,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    }, "-=0.6")
    .from(ctaRef.current, {
      y: 20,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out"
    }, "-=0.6")
    .from(floatingElementsRef.current?.children || [], {
      y: 40,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: "power3.out"
    }, "-=0.4");

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section 
      ref={heroRef}
      className="min-h-screen pt-32 pb-20 px-6 md:px-12 hero-gradient relative overflow-hidden"
    >
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 
            ref={titleRef}
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight gradient-text"
          >
            Discover Your Perfect Career Path
          </h1>
          <p 
            ref={subtitleRef}
            className="text-xl md:text-2xl text-white/80 mb-10 max-w-3xl mx-auto"
          >
            AI-driven guidance, personalized skill development, and interactive job simulations to help you navigate your professional journey.
          </p>
          <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/auth">
              <Button className="bg-pathscout-blue hover:bg-pathscout-blue/90 text-white py-6 px-8 text-lg rounded-xl font-semibold shadow-lg animate-pulse-glow group">
                Get Started
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/auth">
              <Button variant="outline" className="bg-transparent border-white/20 hover:bg-white/10 text-white py-6 px-8 text-lg rounded-xl font-semibold">
                Explore Careers
              </Button>
            </Link>
          </div>
        </div>

        <div 
          ref={floatingElementsRef}
          className="mt-28 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <div className="glass-card p-6 rounded-2xl card-hover animate-float">
            <div className="bg-pathscout-blue/20 p-4 rounded-xl w-16 h-16 flex items-center justify-center mb-4">
              <Briefcase className="text-pathscout-blue h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Career Assessment</h3>
            <p className="text-white/70">Discover careers that match your personality, skills, and interests.</p>
          </div>
          
          <div className="glass-card p-6 rounded-2xl card-hover animate-float delay-100">
            <div className="bg-pathscout-yellow/20 p-4 rounded-xl w-16 h-16 flex items-center justify-center mb-4">
              <Book className="text-pathscout-yellow h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Skill Development</h3>
            <p className="text-white/70">Interactive learning paths to build skills for your dream career.</p>
          </div>
          
          <div className="glass-card p-6 rounded-2xl card-hover animate-float delay-200">
            <div className="bg-green-500/20 p-4 rounded-xl w-16 h-16 flex items-center justify-center mb-4">
              <BarChart className="text-green-500 h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Progress Tracking</h3>
            <p className="text-white/70">Monitor your growth and achievements along your career journey.</p>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/3 -left-24 w-64 h-64 bg-pathscout-blue/10 rounded-full blur-3xl"></div>
      <div className="absolute top-2/3 -right-32 w-80 h-80 bg-pathscout-yellow/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default HeroSection;
