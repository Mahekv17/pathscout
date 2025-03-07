
import { useState } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import { useNavigate } from 'react-router-dom';
import Sidebar from '@/components/dashboard/Sidebar';
import Header from '@/components/dashboard/Header';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { ChevronRight, ChevronLeft, CheckCircle } from 'lucide-react';

// Define proper TypeScript interfaces for our question types
interface PersonalityQuestion {
  id: string;
  text: string;
  trait: string;
}

interface AptitudeQuestion {
  id: string;
  text: string;
  type: string;
  options: string[];
}

// Use a type union to represent both question types
type QuestionType = PersonalityQuestion | AptitudeQuestion;

// Type guard to check if a question is a personality question
const isPersonalityQuestion = (question: QuestionType): question is PersonalityQuestion => {
  return 'trait' in question;
};

// Type guard to check if a question is an aptitude question
const isAptitudeQuestion = (question: QuestionType): question is AptitudeQuestion => {
  return 'type' in question;
};

const CareerAssessment = () => {
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  const [isCollapsed, setIsCollapsed] = useState(isMobile);
  const [currentStep, setCurrentStep] = useState(1);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [isCompleted, setIsCompleted] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const personalityQuestions: PersonalityQuestion[] = [
    {
      id: 'q1',
      text: 'I enjoy working with people more than working alone.',
      trait: 'Extraversion'
    },
    {
      id: 'q2',
      text: 'I prefer having a structured routine over flexibility in my day.',
      trait: 'Conscientiousness'
    },
    {
      id: 'q3',
      text: 'I find it easy to come up with creative solutions to problems.',
      trait: 'Openness'
    },
    {
      id: 'q4',
      text: 'I tend to be calm, even in stressful situations.',
      trait: 'Neuroticism'
    },
    {
      id: 'q5',
      text: 'I prioritize harmony and cooperation in group settings.',
      trait: 'Agreeableness'
    }
  ];

  const aptitudeQuestions: AptitudeQuestion[] = [
    {
      id: 'a1',
      text: 'Which of these patterns comes next in the sequence?',
      type: 'Logical Reasoning',
      options: ['Pattern A', 'Pattern B', 'Pattern C', 'Pattern D']
    },
    {
      id: 'a2',
      text: 'If a project has a 40% chance of success, what is the probability of failing?',
      type: 'Numerical Reasoning',
      options: ['40%', '50%', '60%', '80%']
    },
    {
      id: 'a3',
      text: 'In a team meeting, Sarah speaks after John but before Mike. If Mike speaks after Paul, who speaks last?',
      type: 'Verbal Reasoning',
      options: ['Sarah', 'John', 'Mike', 'Paul']
    },
    {
      id: 'a4',
      text: 'Which of these would best solve the problem of increasing team collaboration?',
      type: 'Problem Solving',
      options: ['Weekly team meetings', 'Individual performance bonuses', 'Rearranging the office layout', 'Creating a digital collaboration tool']
    },
    {
      id: 'a5',
      text: 'If you were leading a product launch that was delayed, what would be your first action?',
      type: 'Decision Making',
      options: ['Notify stakeholders about the delay', 'Work overtime to meet the deadline', 'Scale back features to launch on time', 'Analyze the cause of the delay']
    }
  ];

  const currentQuestions: QuestionType[] = currentStep === 1 ? personalityQuestions : aptitudeQuestions;
  const totalQuestions = personalityQuestions.length + aptitudeQuestions.length;
  const completedQuestions = Object.keys(answers).length;
  const progressPercentage = (completedQuestions / totalQuestions) * 100;

  const handleAnswer = (questionId: string, value: number) => {
    setAnswers({
      ...answers,
      [questionId]: value
    });
    
    if (currentQuestion < currentQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else if (currentStep === 1) {
      setCurrentStep(2);
      setCurrentQuestion(0);
    } else {
      setIsCompleted(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    } else if (currentStep === 2) {
      setCurrentStep(1);
      setCurrentQuestion(personalityQuestions.length - 1);
    }
  };

  const viewResults = () => {
    navigate('/dashboard/explore-careers');
  };

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
          <h1 className="text-3xl font-bold mb-2">Career Assessment</h1>
          <p className="text-white/70 mb-8">
            Discover your ideal career path through our comprehensive assessment
          </p>
          
          <div className="max-w-3xl mx-auto">
            {!isCompleted ? (
              <>
                <div className="mb-6 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Step {currentStep} of 2: {currentStep === 1 ? 'Personality Assessment' : 'Aptitude Test'}</span>
                    <span>Question {currentQuestion + 1} of {currentQuestions.length}</span>
                  </div>
                  <Progress value={progressPercentage} className="h-3 bg-white/10" />
                </div>
                
                <Card className="glass-card p-8 rounded-xl border-white/10 mb-8">
                  <h3 className="text-xl font-semibold mb-6">
                    {currentQuestions[currentQuestion].text}
                  </h3>
                  
                  {currentStep === 1 ? (
                    <div className="space-y-4">
                      {isPersonalityQuestion(currentQuestions[currentQuestion]) && (
                        <p className="text-white/70 text-sm mb-4">{currentQuestions[currentQuestion].trait}</p>
                      )}
                      <div className="flex flex-col space-y-3">
                        {[
                          { value: 1, label: 'Strongly Disagree' },
                          { value: 2, label: 'Disagree' },
                          { value: 3, label: 'Neutral' },
                          { value: 4, label: 'Agree' },
                          { value: 5, label: 'Strongly Agree' }
                        ].map((option) => (
                          <Button
                            key={option.value}
                            variant={answers[currentQuestions[currentQuestion].id] === option.value ? 'default' : 'outline'}
                            className={`justify-start h-12 ${
                              answers[currentQuestions[currentQuestion].id] === option.value 
                                ? 'bg-pathscout-blue hover:bg-pathscout-blue/90' 
                                : 'border-white/10 hover:bg-white/5'
                            }`}
                            onClick={() => handleAnswer(currentQuestions[currentQuestion].id, option.value)}
                          >
                            {option.label}
                          </Button>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {isAptitudeQuestion(currentQuestions[currentQuestion]) && (
                        <p className="text-white/70 text-sm mb-4">{currentQuestions[currentQuestion].type}</p>
                      )}
                      <div className="flex flex-col space-y-3">
                        {isAptitudeQuestion(currentQuestions[currentQuestion]) && 
                          currentQuestions[currentQuestion].options.map((option, index) => (
                            <Button
                              key={index}
                              variant={answers[currentQuestions[currentQuestion].id] === index ? 'default' : 'outline'}
                              className={`justify-start h-12 ${
                                answers[currentQuestions[currentQuestion].id] === index 
                                  ? 'bg-pathscout-blue hover:bg-pathscout-blue/90' 
                                  : 'border-white/10 hover:bg-white/5'
                              }`}
                              onClick={() => handleAnswer(currentQuestions[currentQuestion].id, index)}
                            >
                              {option}
                            </Button>
                          ))
                        }
                      </div>
                    </div>
                  )}
                </Card>
                
                <div className="flex justify-between">
                  <Button 
                    variant="outline" 
                    className="border-white/10"
                    onClick={handlePrevious}
                    disabled={currentStep === 1 && currentQuestion === 0}
                  >
                    <ChevronLeft className="mr-2 h-4 w-4" />
                    Previous
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="border-white/10"
                    onClick={() => {
                      if (currentQuestion < currentQuestions.length - 1) {
                        setCurrentQuestion(currentQuestion + 1);
                      } else if (currentStep === 1) {
                        setCurrentStep(2);
                        setCurrentQuestion(0);
                      } else {
                        setIsCompleted(true);
                      }
                    }}
                  >
                    Skip
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </>
            ) : (
              <Card className="glass-card p-8 rounded-xl border-white/10 text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="text-green-500" size={32} />
                </div>
                <h2 className="text-2xl font-bold mb-3">Assessment Completed!</h2>
                <p className="text-white/70 mb-8 max-w-md mx-auto">
                  Great job completing the assessment! We've analyzed your responses and have 
                  personalized career recommendations ready for you.
                </p>
                <Button 
                  className="bg-pathscout-blue hover:bg-pathscout-blue/90 px-8 py-6 text-lg"
                  onClick={viewResults}
                >
                  View My Career Matches
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </Card>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default CareerAssessment;
