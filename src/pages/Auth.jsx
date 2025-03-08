import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Mail, Lock, User, ArrowLeft } from 'lucide-react';
import gsap from 'gsap';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const containerRef = useRef(null);
  const formRef = useRef(null);
  const illustrationRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    
    tl.from(illustrationRef.current, {
      x: -50,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    })
    .from(formRef.current, {
      x: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    }, "-=0.7");

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div className="min-h-screen flex items-stretch bg-pathscout-darker">
      {/* Illustration Side */}
      <div ref={illustrationRef} className="hidden md:flex md:w-1/2 bg-pathscout-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-pathscout-blue/20 via-transparent to-transparent opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center p-12">
          <div className="glass-card p-8 rounded-3xl max-w-md text-center relative overflow-hidden border border-white/10">
            <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-pathscout-blue/20 rounded-full blur-3xl"></div>
            <div className="absolute -top-20 -left-20 w-40 h-40 bg-pathscout-yellow/10 rounded-full blur-3xl"></div>
            
            <h2 className="text-3xl font-bold mb-4 gradient-text">Find Your Career Path</h2>
            <p className="text-white/80 mb-6">
              Join thousands of professionals who discovered their perfect career with PathScout's AI-driven guidance.
            </p>
            
            <div className="flex justify-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full glass-card flex items-center justify-center animate-float">
                <div className="text-2xl">💼</div>
              </div>
              <div className="w-12 h-12 rounded-full glass-card flex items-center justify-center animate-float delay-75">
                <div className="text-2xl">💻</div>
              </div>
              <div className="w-12 h-12 rounded-full glass-card flex items-center justify-center animate-float delay-150">
                <div className="text-2xl">📊</div>
              </div>
              <div className="w-12 h-12 rounded-full glass-card flex items-center justify-center animate-float delay-225">
                <div className="text-2xl">🚀</div>
              </div>
            </div>
            
            <div className="text-white/70 italic">
              "PathScout helped me transition to my dream career in just 3 months!" - Sarah J.
            </div>
          </div>
        </div>
      </div>

      {/* Auth Form Side */}
      <div ref={formRef} className="w-full md:w-1/2 flex items-center justify-center p-6 md:p-12">
        <Card className="w-full max-w-md glass-card border-white/10 p-8 rounded-2xl">
          <div className="mb-8">
            <Link to="/" className="text-pathscout-blue flex items-center mb-8 hover:underline">
              <ArrowLeft size={16} className="mr-2" />
              Back to Home
            </Link>
            <h2 className="text-3xl font-bold mb-2">{isLogin ? 'Welcome Back' : 'Create Account'}</h2>
            <p className="text-white/70">
              {isLogin ? 'Sign in to continue your career journey' : 'Start your career exploration today'}
            </p>
          </div>

          <Tabs defaultValue="login" onValueChange={(val) => setIsLogin(val === 'login')}>
            <TabsList className="grid grid-cols-2 mb-8">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="signup">Sign Up</TabsTrigger>
            </TabsList>

            <TabsContent value="login">
              <form className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50" size={16} />
                    <Input
                      id="email"
                      type="email"
                      placeholder="youremail@example.com"
                      className="pl-10 bg-white/5 border-white/10"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="password" className="text-sm font-medium">Password</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50" size={16} />
                    <Input
                      id="password"
                      type="password"
                      placeholder="••••••••"
                      className="pl-10 bg-white/5 border-white/10"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <label className="flex items-center space-x-2 text-sm">
                    <input type="checkbox" className="rounded text-pathscout-blue" />
                    <span>Remember me</span>
                  </label>
                  <a href="#" className="text-sm text-pathscout-blue hover:underline">Forgot password?</a>
                </div>

                <Link to="/dashboard">
                  <Button className="w-full bg-pathscout-blue hover:bg-pathscout-blue/90">
                    Login
                  </Button>
                </Link>
              </form>
            </TabsContent>

            <TabsContent value="signup">
              <form className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50" size={16} />
                    <Input
                      id="name"
                      type="text"
                      placeholder="John Doe"
                      className="pl-10 bg-white/5 border-white/10"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="signup-email" className="text-sm font-medium">Email</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50" size={16} />
                    <Input
                      id="signup-email"
                      type="email"
                      placeholder="youremail@example.com"
                      className="pl-10 bg-white/5 border-white/10"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="signup-password" className="text-sm font-medium">Password</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50" size={16} />
                    <Input
                      id="signup-password"
                      type="password"
                      placeholder="••••••••"
                      className="pl-10 bg-white/5 border-white/10"
                    />
                  </div>
                </div>

                <div className="flex items-center space-x-2 text-sm">
                  <input type="checkbox" className="rounded text-pathscout-blue" />
                  <span>I agree to the <a href="#" className="text-pathscout-blue hover:underline">Terms of Service</a> and <a href="#" className="text-pathscout-blue hover:underline">Privacy Policy</a></span>
                </div>

                <Link to="/dashboard">
                  <Button className="w-full bg-pathscout-blue hover:bg-pathscout-blue/90">
                    Create Account
                  </Button>
                </Link>
              </form>
            </TabsContent>
          </Tabs>

          <div className="mt-8 text-center">
            <p className="text-white/70 mb-4">Or continue with</p>
            <div className="flex justify-center space-x-4">
              <button className="glass-button p-3 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                  <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
                </svg>
              </button>
              <button className="glass-button p-3 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                  <path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02z"></path>
                </svg>
              </button>
              <button className="glass-button p-3 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                  <path d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"></path>
                </svg>
              </button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Auth;
