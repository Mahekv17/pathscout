
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronRight, Briefcase, BookOpen, Star, Award, Users } from 'lucide-react';
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
      className="min-h-screen pt-28 pb-20 px-6 md:px-12 hero-gradient relative overflow-hidden"
    >
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 
            ref={titleRef}
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight gradient-text"
          >
            Find Your Future Career Path Today
          </h1>
          <p 
            ref={subtitleRef}
            className="text-xl md:text-2xl text-foreground/80 mb-10 max-w-3xl mx-auto"
          >
            Discover exciting careers, develop awesome skills, and explore what you're passionate about - all in one place!
          </p>
          <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/auth">
              <Button className="bg-pathscout-blue hover:bg-pathscout-blue/90 text-white py-6 px-8 text-lg rounded-xl font-semibold shadow-lg animate-pulse-glow group">
                Start Your Journey
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/auth">
              <Button variant="outline" className="bg-transparent border-border hover:bg-background/10 text-foreground py-6 px-8 text-lg rounded-xl font-semibold">
                Explore Careers
              </Button>
            </Link>
          </div>
        </div>

        <div 
          ref={floatingElementsRef}
          className="mt-28 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <div className="glass-card p-6 rounded-2xl card-hover animate-float">
            <div className="bg-pathscout-blue/20 p-4 rounded-xl w-16 h-16 flex items-center justify-center mb-4">
              <Award className="text-pathscout-blue h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Find Your Strengths</h3>
            <p className="text-foreground/70">Discover what you're great at and how it connects to cool careers.</p>
          </div>
          
          <div className="glass-card p-6 rounded-2xl card-hover animate-float" style={{animationDelay: "0.1s"}}>
            <div className="bg-pathscout-yellow/20 p-4 rounded-xl w-16 h-16 flex items-center justify-center mb-4">
              <BookOpen className="text-pathscout-yellow h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Learn New Skills</h3>
            <p className="text-foreground/70">Fun tutorials and challenges to build skills for your future.</p>
          </div>
          
          <div className="glass-card p-6 rounded-2xl card-hover animate-float" style={{animationDelay: "0.2s"}}>
            <div className="bg-green-500/20 p-4 rounded-xl w-16 h-16 flex items-center justify-center mb-4">
              <Briefcase className="text-green-500 h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Try Out Careers</h3>
            <p className="text-foreground/70">Virtual job simulations let you experience different careers.</p>
          </div>
          
          <div className="glass-card p-6 rounded-2xl card-hover animate-float" style={{animationDelay: "0.3s"}}>
            <div className="bg-purple-500/20 p-4 rounded-xl w-16 h-16 flex items-center justify-center mb-4">
              <Users className="text-purple-500 h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Connect With Mentors</h3>
            <p className="text-foreground/70">Talk to students and professionals who can guide your path.</p>
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
