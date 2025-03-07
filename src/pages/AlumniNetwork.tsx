
import { useState } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import Sidebar from '@/components/dashboard/Sidebar';
import Header from '@/components/dashboard/Header';
import { 
  Users, 
  MessageSquare, 
  Calendar, 
  Briefcase,
  MapPin,
  Search,
  Filter
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Avatar } from '@/components/ui/avatar';

const AlumniNetwork = () => {
  const isMobile = useIsMobile();
  const [isCollapsed, setIsCollapsed] = useState(isMobile);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const alumniProfiles = [
    {
      id: 1,
      name: 'Jennifer Wilson',
      role: 'Senior Product Manager',
      company: 'Google',
      location: 'San Francisco, CA',
      bio: 'Passionate about building products that solve real user problems. Previously at Facebook and Airbnb.',
      expertise: ['Product Strategy', 'User Research', 'Roadmapping'],
      avatar: 'https://randomuser.me/api/portraits/women/28.jpg',
      available: true
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'UI/UX Designer',
      company: 'Figma',
      location: 'New York, NY',
      bio: 'Creating intuitive interfaces for digital products. Focusing on accessibility and inclusive design.',
      expertise: ['Interface Design', 'Design Systems', 'Prototyping'],
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      available: true
    },
    {
      id: 3,
      name: 'Sarah Johnson',
      role: 'Data Scientist',
      company: 'Spotify',
      location: 'Stockholm, Sweden',
      bio: 'Using data to power product decisions and business strategy. Background in machine learning and analytics.',
      expertise: ['Data Analysis', 'A/B Testing', 'ML Models'],
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      available: false
    },
    {
      id: 4,
      name: 'David Park',
      role: 'Front-End Developer',
      company: 'Airbnb',
      location: 'Seattle, WA',
      bio: 'Building beautiful, performant web applications. Passionate about React and modern web technologies.',
      expertise: ['React', 'Web Performance', 'JavaScript'],
      avatar: 'https://randomuser.me/api/portraits/men/22.jpg',
      available: true
    },
    {
      id: 5,
      name: 'Olivia Martinez',
      role: 'Product Design Lead',
      company: 'Slack',
      location: 'San Francisco, CA',
      bio: 'Leading design teams to create cohesive product experiences. Mentor for aspiring designers.',
      expertise: ['Design Leadership', 'User Research', 'Product Strategy'],
      avatar: 'https://randomuser.me/api/portraits/women/63.jpg',
      available: true
    },
    {
      id: 6,
      name: 'James Wilson',
      role: 'Engineering Manager',
      company: 'Meta',
      location: 'Menlo Park, CA',
      bio: 'Building and leading engineering teams. Focused on scalable infrastructure and team growth.',
      expertise: ['Team Leadership', 'Backend Systems', 'Engineering Processes'],
      avatar: 'https://randomuser.me/api/portraits/men/91.jpg',
      available: false
    }
  ];

  const filteredAlumni = alumniProfiles.filter(profile => 
    profile.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    profile.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
    profile.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
    profile.bio.toLowerCase().includes(searchTerm.toLowerCase()) ||
    profile.expertise.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const upcomingEvents = [
    {
      id: 1,
      title: 'Product Management AMA',
      date: 'Oct 15, 2023',
      time: '5:00 PM PST',
      host: 'Jennifer Wilson',
      attendees: 45
    },
    {
      id: 2,
      title: 'UX Design Portfolio Review',
      date: 'Oct 22, 2023',
      time: '4:00 PM PST',
      host: 'Michael Chen',
      attendees: 32
    },
    {
      id: 3,
      title: 'Career Transition Strategies',
      date: 'Oct 29, 2023',
      time: '6:00 PM PST',
      host: 'Sarah Johnson',
      attendees: 58
    }
  ];

  return (
    <div className="min-h-screen bg-pathscout-darker text-white flex">
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
          <h1 className="text-3xl font-bold mb-2">Alumni Network</h1>
          <p className="text-white/70 mb-8">Connect with professionals who have successfully transitioned careers</p>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-6">
                <div className="relative flex-1 w-full">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50" size={18} />
                  <Input 
                    placeholder="Search alumni by name, role, company, or skills..."
                    className="pl-10 bg-white/5 border-white/10 w-full"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <Button variant="outline" className="border-white/10 gap-2">
                  <Filter size={16} />
                  Filters
                </Button>
              </div>
              
              <div className="space-y-4">
                {filteredAlumni.map((profile) => (
                  <Card key={profile.id} className="glass-card p-5 border-white/10 hover:border-pathscout-blue/30 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <Avatar className="h-16 w-16 border-2 border-pathscout-blue/30">
                        <img src={profile.avatar} alt={profile.name} />
                      </Avatar>
                      
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-semibold text-lg">{profile.name}</h3>
                            <p className="text-white/70">{profile.role} at {profile.company}</p>
                          </div>
                          <div className="flex items-center gap-1">
                            <span className={`h-2 w-2 rounded-full ${profile.available ? 'bg-green-500' : 'bg-gray-500'}`}></span>
                            <span className="text-xs text-white/60">{profile.available ? 'Available for mentoring' : 'Currently unavailable'}</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-2 text-sm text-white/60 mt-1 mb-3">
                          <MapPin size={14} />
                          <span>{profile.location}</span>
                        </div>
                        
                        <p className="text-white/80 mb-3">{profile.bio}</p>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          {profile.expertise.map((skill, index) => (
                            <span 
                              key={index}
                              className="text-xs bg-white/10 px-2 py-1 rounded-full"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                        
                        <div className="flex gap-3">
                          <Button size="sm" className="bg-pathscout-blue hover:bg-pathscout-blue/90">
                            <MessageSquare size={14} className="mr-2" />
                            Message
                          </Button>
                          <Button size="sm" variant="outline" className="border-white/10">
                            View Profile
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
                
                {filteredAlumni.length === 0 && (
                  <div className="text-center py-10">
                    <h3 className="text-xl font-semibold mb-2">No alumni found</h3>
                    <p className="text-white/70">Try different search terms</p>
                  </div>
                )}
              </div>
            </div>
            
            <div>
              <Card className="glass-card p-6 border-white/10 sticky top-24">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-pathscout-blue/20 p-2 rounded-lg">
                    <Calendar size={20} className="text-pathscout-blue" />
                  </div>
                  <h3 className="text-lg font-semibold">Upcoming Events</h3>
                </div>
                
                <div className="space-y-4 mb-6">
                  {upcomingEvents.map((event) => (
                    <div key={event.id} className="p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                      <h4 className="font-medium mb-2">{event.title}</h4>
                      <div className="flex items-center gap-2 text-white/70 text-sm mb-2">
                        <Calendar size={14} />
                        <span>{event.date} • {event.time}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-white/60">Hosted by {event.host}</span>
                        <span className="text-xs bg-white/10 px-2 py-1 rounded-full">
                          {event.attendees} attending
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                
                <Button className="w-full bg-pathscout-blue/20 hover:bg-pathscout-blue/30">
                  View All Events
                </Button>
                
                <div className="mt-8 pt-8 border-t border-white/10">
                  <h3 className="text-lg font-semibold mb-4">Your Mentor Match</h3>
                  <div className="flex items-center gap-4 mb-4">
                    <Avatar className="h-16 w-16 border-2 border-pathscout-yellow/30">
                      <img src="https://randomuser.me/api/portraits/women/28.jpg" alt="Jennifer Wilson" />
                    </Avatar>
                    <div>
                      <h4 className="font-medium">Jennifer Wilson</h4>
                      <p className="text-white/70 text-sm">Senior Product Manager at Google</p>
                      <div className="flex items-center gap-1 text-pathscout-yellow text-sm mt-1">
                        <span className="h-2 w-2 rounded-full bg-pathscout-yellow"></span>
                        <span>95% Match</span>
                      </div>
                    </div>
                  </div>
                  <Button className="w-full">
                    <MessageSquare size={16} className="mr-2" />
                    Start Mentorship
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AlumniNetwork;
