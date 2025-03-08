
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronRight, Rocket } from 'lucide-react';
import gsap from 'gsap';

const CTASection = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  
  useEffect(() => {
    gsap.from(contentRef.current?.children || [], {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
        toggleActions: "play none none none"
      }
    });
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-24 px-6 md:px-12 relative overflow-hidden"
    >
      <div className="absolute inset-0 hero-gradient opacity-50"></div>
      
      <div className="container mx-auto relative z-10">
        <div 
          ref={contentRef}
          className="glass-card p-10 md:p-16 rounded-3xl text-center max-w-4xl mx-auto border border-pathscout-blue/20 glow"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 gradient-text">
            Ready to Explore Your Future?
          </h2>
          <p className="text-xl text-foreground/80 mb-10 max-w-2xl mx-auto">
            Join thousands of students who are discovering awesome careers and building skills for their future!
          </p>
          <Link to="/auth">
            <Button className="bg-pathscout-blue hover:bg-pathscout-blue/90 text-white py-6 px-10 text-lg rounded-xl font-semibold shadow-lg animate-pulse-glow group">
              Begin Your Adventure
              <Rocket className="ml-2 group-hover:translate-y-[-2px] transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
