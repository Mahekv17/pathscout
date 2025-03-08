
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeatureSection from '@/components/FeatureSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

// Import GSAP and ScrollTrigger
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  useEffect(() => {
    // Create animations for the page sections
    const tl = gsap.timeline();
    
    tl.from(".hero-animate", {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out"
    });
    
    // Create a smooth scroll effect with fun animations for students
    const sections = document.querySelectorAll('section');
    
    sections.forEach((section) => {
      ScrollTrigger.create({
        trigger: section,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleClass: { targets: section, className: 'active' },
        onEnter: () => {
          gsap.to(section.querySelectorAll('.section-animate'), {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: "back.out(1.5)"
          });
        },
        once: true
      });
    });

    // Add floating animations to decorative elements
    gsap.to(".floating-element", {
      y: -15,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: 0.2
    });

    // Add subtle rotation to certain elements
    gsap.to(".rotate-element", {
      rotation: 360,
      duration: 20,
      repeat: -1,
      ease: "none"
    });

    // Clean up scroll triggers on component unmount
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Navbar />
      
      <HeroSection />
      <FeatureSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
      
      {/* Add fun decorative elements that appeal to students */}
      <div className="fixed top-1/4 right-5 w-6 h-6 bg-pathscout-yellow/30 rounded-full blur-sm floating-element"></div>
      <div className="fixed top-1/3 left-5 w-8 h-8 bg-pathscout-blue/30 rounded-full blur-sm floating-element"></div>
      <div className="fixed bottom-1/4 right-8 w-10 h-10 bg-purple-500/20 rounded-full blur-sm floating-element"></div>
      <div className="fixed bottom-1/3 left-8 w-5 h-5 bg-green-500/20 rounded-full blur-sm floating-element"></div>
      
      <div className="fixed top-[15%] right-[15%] w-32 h-32 rounded-full border border-dashed border-pathscout-blue/20 rotate-element opacity-30"></div>
      <div className="fixed bottom-[20%] left-[10%] w-24 h-24 rounded-full border border-dashed border-pathscout-yellow/20 rotate-element opacity-30"></div>
    </div>
  );
};

export default Index;
