
import { useEffect, useRef } from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Monitor, Laptop, Users, CheckCircle, Clock, Star } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FeatureSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const featuresRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const title = titleRef.current;
    const features = featuresRef.current?.children;
    const image = imageRef.current;

    gsap.from(title, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      scrollTrigger: {
        trigger: title,
        start: "top 80%",
        toggleActions: "play none none none"
      }
    });

    gsap.from(features, {
      y: 30,
      opacity: 0,
      duration: 0.6,
      stagger: 0.15,
      scrollTrigger: {
        trigger: featuresRef.current,
        start: "top 75%",
        toggleActions: "play none none none"
      }
    });

    gsap.from(image, {
      x: 50,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: image,
        start: "top 75%",
        toggleActions: "play none none none"
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-6 md:px-12 relative overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 ref={titleRef} className="text-3xl md:text-5xl font-bold mb-6 gradient-text">
            Powerful Features to Guide Your Career
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Every tool you need to discover, prepare for, and excel in your dream profession
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div ref={featuresRef} className="space-y-8">
            <div className="glass-card p-6 rounded-2xl card-hover">
              <div className="flex items-start gap-4">
                <div className="bg-pathscout-blue/20 p-3 rounded-xl">
                  <Monitor className="text-pathscout-blue h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">3D Job Simulation</h3>
                  <p className="text-white/70">Experience a day in your dream role with our interactive 3D office environment.</p>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 rounded-2xl card-hover">
              <div className="flex items-start gap-4">
                <div className="bg-pathscout-yellow/20 p-3 rounded-xl">
                  <Laptop className="text-pathscout-yellow h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Skill Development Roadmap</h3>
                  <p className="text-white/70">Custom learning plans with curated resources for your desired career path.</p>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 rounded-2xl card-hover">
              <div className="flex items-start gap-4">
                <div className="bg-green-500/20 p-3 rounded-xl">
                  <Users className="text-green-500 h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Alumni Network</h3>
                  <p className="text-white/70">Connect with professionals who have successfully navigated similar career paths.</p>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 rounded-2xl card-hover">
              <div className="flex items-start gap-4">
                <div className="bg-purple-500/20 p-3 rounded-xl">
                  <CheckCircle className="text-purple-500 h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Daily Task Management</h3>
                  <p className="text-white/70">Practice real job responsibilities through interactive task assignments.</p>
                </div>
              </div>
            </div>
          </div>

          <div ref={imageRef} className="glass-card p-6 rounded-2xl overflow-hidden relative h-[500px] glow">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-pathscout-dark to-transparent opacity-40 z-10"></div>
            <div className="w-full h-full relative z-0 overflow-hidden rounded-xl bg-pathscout-darker">
              <div className="absolute inset-0 flex items-center justify-center text-white font-medium text-xl">
                Interactive 3D Office Environment
              </div>
              
              {/* Mock UI elements for 3D environment */}
              <div className="absolute bottom-8 left-8 right-8 glass-card p-4 rounded-xl z-20">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-pathscout-blue flex items-center justify-center">
                      <Users size={20} className="text-white" />
                    </div>
                    <div className="text-left">
                      <p className="text-sm text-white/70">Current Task</p>
                      <p className="text-white font-medium">Team Meeting in Conference Room</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={16} className="text-white/70" />
                    <span className="text-white/70">10:30 AM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-pathscout-blue/5 rounded-full blur-3xl -z-10"></div>
    </section>
  );
};

export default FeatureSection;
