
import { useState, useEffect, useRef } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import Sidebar from '@/components/dashboard/Sidebar';
import Header from '@/components/dashboard/Header';
import { 
  Search, Filter, BookOpen, Monitor, HeartPulse, 
  Briefcase, ChevronRight, Award, Code, PenTool, Music,
  Leaf, Microscope, Camera, Users
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import gsap from 'gsap';

// Mock data for career fields
const careerFields = [
  { 
    id: 1, 
    name: "Technology", 
    icon: <Code size={24} />, 
    color: "bg-blue-500/20", 
    textColor: "text-blue-500",
    careers: ["Game Designer", "App Developer", "Cybersecurity Specialist", "AI Engineer"]
  },
  { 
    id: 2, 
    name: "Healthcare", 
    icon: <HeartPulse size={24} />, 
    color: "bg-red-500/20", 
    textColor: "text-red-500",
    careers: ["Veterinarian", "Pediatrician", "Physical Therapist", "Nutritionist"]
  },
  { 
    id: 3, 
    name: "Arts", 
    icon: <PenTool size={24} />, 
    color: "bg-purple-500/20", 
    textColor: "text-purple-500",
    careers: ["Animator", "Fashion Designer", "Music Producer", "Interior Designer"]
  },
  { 
    id: 4, 
    name: "Science", 
    icon: <Microscope size={24} />, 
    color: "bg-green-500/20", 
    textColor: "text-green-500",
    careers: ["Marine Biologist", "Astronomer", "Environmental Scientist", "Zoologist"]
  },
  { 
    id: 5, 
    name: "Media", 
    icon: <Camera size={24} />, 
    color: "bg-pink-500/20", 
    textColor: "text-pink-500",
    careers: ["YouTuber", "Social Media Manager", "Photographer", "Video Game Streamer"]
  }
];

// Featured careers
const featuredCareers = [
  {
    id: 1,
    title: "Game Designer",
    description: "Create the rules, characters, settings, stories, and visual elements for video games.",
    matchScore: 92,
    salary: "$75,000 - $120,000",
    education: "Bachelor's in Game Design or Computer Science",
    skills: ["Creativity", "Programming", "Storytelling", "Problem-solving"],
    icon: <Monitor size={24} />,
    color: "bg-blue-500/20",
    textColor: "text-blue-500",
    future: "Growing industry with many opportunities"
  },
  {
    id: 2,
    title: "Veterinarian",
    description: "Diagnose and treat health problems in animals including pets, livestock, and zoo animals.",
    matchScore: 85,
    salary: "$70,000 - $150,000",
    education: "Doctor of Veterinary Medicine (DVM)",
    skills: ["Animal care", "Surgery", "Diagnosis", "Communication"],
    icon: <HeartPulse size={24} />,
    color: "bg-red-500/20",
    textColor: "text-red-500",
    future: "Steady demand for animal healthcare professionals"
  },
  {
    id: 3,
    title: "Environmental Scientist",
    description: "Study the environment and how it's affected by human activity to help protect the planet.",
    matchScore: 78,
    salary: "$60,000 - $100,000",
    education: "Bachelor's in Environmental Science",
    skills: ["Research", "Data analysis", "Problem-solving", "Fieldwork"],
    icon: <Leaf size={24} />,
    color: "bg-green-500/20",
    textColor: "text-green-500",
    future: "Growing field as environmental issues become more important"
  }
];

const ExploreCareer = () => {
  const isMobile = useIsMobile();
  const [isCollapsed, setIsCollapsed] = useState(isMobile);
  const [selectedField, setSelectedField] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  
  const cardsRef = useRef(null);
  const fieldsRef = useRef(null);
  const detailsRef = useRef(null);

  useEffect(() => {
    setIsCollapsed(isMobile);
  }, [isMobile]);

  useEffect(() => {
    // GSAP animations
    gsap.fromTo(
      ".field-card",
      { y: 30, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.5, 
        stagger: 0.1, 
        ease: "power2.out" 
      }
    );

    gsap.fromTo(
      ".career-card",
      { y: 30, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.5, 
        stagger: 0.15, 
        delay: 0.3,
        ease: "back.out(1.2)" 
      }
    );
    
    return () => {
      // Clean up animations
      gsap.killTweensOf(".field-card");
      gsap.killTweensOf(".career-card");
    };
  }, []);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleFieldSelect = (field) => {
    setSelectedField(field);
    
    // Animate the details section when a field is selected
    if (detailsRef.current) {
      gsap.fromTo(
        detailsRef.current,
        { opacity: 0, y: 20 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.5,
          ease: "power2.out" 
        }
      );
    }
  };

  // Filter careers based on search query
  const filteredCareers = featuredCareers.filter(career => 
    career.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background text-foreground flex transition-colors duration-300">
      <Sidebar 
        isMobile={isMobile} 
        isCollapsed={isCollapsed} 
        toggleSidebar={toggleSidebar} 
      />
      
      <div 
        className={`flex-1 transition-all duration-300 ease-in-out ${
          isCollapsed ? 'ml-0 md:ml-20' : 'ml-0 md:ml-64'
        }`}
      >
        <Header isCollapsed={!isMobile && isCollapsed} />
        
        <main className="pt-24 pb-12 px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold mb-2">Explore Careers</h1>
              <p className="text-foreground/70">Discover exciting career possibilities that match your interests</p>
            </div>
            
            <div className="mt-4 md:mt-0 w-full md:w-auto flex">
              <div className="relative w-full md:w-64">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-foreground/50" size={18} />
                <Input 
                  type="text"
                  placeholder="Search careers..."
                  className="pl-10 w-full"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button variant="outline" className="ml-2 border-border">
                <Filter size={18} className="mr-2" />
                <span className="hidden md:inline">Filters</span>
              </Button>
            </div>
          </div>
          
          {/* Career Fields */}
          <div className="mb-10" ref={fieldsRef}>
            <h2 className="text-xl font-semibold mb-4">Career Fields</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {careerFields.map((field) => (
                <Card 
                  key={field.id}
                  className={`field-card p-4 rounded-xl hover:shadow-lg cursor-pointer transition-all duration-300 ${
                    selectedField?.id === field.id ? 'border-primary ring-1 ring-primary' : 'border-border'
                  }`}
                  onClick={() => handleFieldSelect(field)}
                >
                  <div className="flex items-center gap-3">
                    <div className={`${field.color} p-2 rounded-lg`}>
                      <span className={field.textColor}>
                        {field.icon}
                      </span>
                    </div>
                    <h3 className="font-medium">{field.name}</h3>
                  </div>
                </Card>
              ))}
            </div>
          </div>
          
          {/* Selected Field Details */}
          {selectedField && (
            <div ref={detailsRef} className="mb-10 glass-card p-6 rounded-xl border-border">
              <div className="flex items-center gap-3 mb-4">
                <div className={`${selectedField.color} p-3 rounded-lg`}>
                  <span className={selectedField.textColor}>
                    {selectedField.icon}
                  </span>
                </div>
                <h2 className="text-xl font-semibold">{selectedField.name} Careers</h2>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {selectedField.careers.map((career, index) => (
                  <Card 
                    key={index}
                    className="p-4 border-border hover:border-primary/30 transition-all duration-300 hover:shadow-md"
                  >
                    <p className="font-medium">{career}</p>
                    <Button variant="link" className="p-0 h-auto mt-2 text-primary">
                      Learn more <ChevronRight size={14} className="ml-1" />
                    </Button>
                  </Card>
                ))}
              </div>
            </div>
          )}
          
          {/* Featured Careers */}
          <div ref={cardsRef}>
            <h2 className="text-xl font-semibold mb-4">Recommended Careers For You</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCareers.map((career) => (
                <Card key={career.id} className="career-card overflow-hidden border-border hover:shadow-lg transition-all duration-300">
                  <div className={`${career.color} p-6`}>
                    <div className="bg-background/90 p-3 rounded-full w-min mb-3">
                      <span className={career.textColor}>
                        {career.icon}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold">{career.title}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <Award size={16} className="text-yellow-500" />
                      <span className="text-sm font-medium">Match: {career.matchScore}%</span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <p className="text-foreground/80 mb-4">{career.description}</p>
                    
                    <div className="space-y-3 mb-4">
                      <div>
                        <p className="text-sm font-medium">Average Salary:</p>
                        <p className="text-foreground/70">{career.salary}</p>
                      </div>
                      
                      <div>
                        <p className="text-sm font-medium">Required Education:</p>
                        <p className="text-foreground/70">{career.education}</p>
                      </div>
                      
                      <div>
                        <p className="text-sm font-medium">Key Skills:</p>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {career.skills.map((skill, i) => (
                            <span 
                              key={i}
                              className="text-xs px-2 py-1 rounded-full bg-foreground/10 text-foreground/80"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <Button className="w-full">Learn More</Button>
                  </div>
                </Card>
              ))}
            </div>
            
            {filteredCareers.length === 0 && (
              <div className="text-center py-12">
                <p className="text-xl">No careers found matching "{searchQuery}"</p>
                <p className="text-foreground/70 mt-2">Try a different search term or browse by category</p>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default ExploreCareer;
