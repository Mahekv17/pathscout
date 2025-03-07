
import { useEffect, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Avatar } from '@/components/ui/avatar';
import { Star } from 'lucide-react';
import gsap from 'gsap';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Software Engineer',
    company: 'TechGlobal',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    content: 'PathScout helped me transition from marketing to software engineering. The job simulation was incredibly helpful in understanding what the day-to-day work would be like.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Data Scientist',
    company: 'DataViz Inc.',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    content: 'The skill development roadmap was exactly what I needed. It provided clear steps and resources to build my data science portfolio and land my dream job.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Jessica Parker',
    role: 'UX Designer',
    company: 'Creative Solutions',
    avatar: 'https://randomuser.me/api/portraits/women/63.jpg',
    content: 'The alumni network was a game-changer for me. I connected with senior designers who gave me invaluable advice and even referred me for my current position.',
    rating: 4,
  },
  {
    id: 4,
    name: 'David Wilson',
    role: 'Product Manager',
    company: 'InnoTech',
    avatar: 'https://randomuser.me/api/portraits/men/22.jpg',
    content: 'PathScout's personality assessment matched me with product management, a career I hadn't considered before. Now I'm thriving in a role that fits my strengths perfectly.',
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Title animation
    gsap.from(titleRef.current, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 80%",
        toggleActions: "play none none none"
      }
    });

    // Cards animation
    gsap.from(cardsRef.current?.children || [], {
      scale: 0.9,
      opacity: 0,
      duration: 0.6,
      stagger: 0.15,
      scrollTrigger: {
        trigger: cardsRef.current,
        start: "top 75%",
        toggleActions: "play none none none"
      }
    });

    // Auto-scrolling for testimonials
    const scrollTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: scrollRef.current,
        start: "top 80%",
        toggleActions: "play none none none"
      },
      repeat: -1,
      repeatDelay: 1,
    });

    if (scrollRef.current) {
      const totalWidth = scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
      
      scrollTimeline.to(scrollRef.current, {
        x: -totalWidth,
        duration: 20,
        ease: "none"
      }).to(scrollRef.current, {
        x: 0,
        duration: 1,
        ease: "power2.inOut"
      });
    }

    return () => {
      scrollTimeline.kill();
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-6 md:px-12 bg-pathscout-dark/60">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 ref={titleRef} className="text-3xl md:text-5xl font-bold mb-6 gradient-text">
            Success Stories
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Hear from professionals who found their perfect career path with PathScout
          </p>
        </div>

        <div ref={scrollRef} className="flex space-x-6 overflow-visible">
          <div ref={cardsRef} className="flex space-x-6 py-4">
            {testimonials.map((testimonial) => (
              <Card 
                key={testimonial.id} 
                className="glass-card p-6 rounded-2xl min-w-[320px] md:min-w-[400px] card-hover flex-shrink-0"
              >
                <div className="flex items-center gap-4 mb-4">
                  <Avatar className="h-12 w-12 border-2 border-pathscout-blue/30">
                    <img src={testimonial.avatar} alt={testimonial.name} />
                  </Avatar>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-white/70">{testimonial.role} at {testimonial.company}</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={16} 
                      className={i < testimonial.rating ? "fill-pathscout-yellow text-pathscout-yellow" : "text-gray-500"} 
                    />
                  ))}
                </div>
                <p className="text-white/80 italic">"{testimonial.content}"</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
