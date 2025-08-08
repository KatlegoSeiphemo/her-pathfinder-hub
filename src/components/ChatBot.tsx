import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MessageCircle, Send, Bot, User } from "lucide-react";

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const ChatBot = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hi! I'm here to help you with your career questions. Ask me about career paths, skills development, or how to get started in different fields!",
      isBot: true,
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const careerResponses = {
    "tech": "Technology offers amazing opportunities! Consider starting with coding bootcamps, online courses, or exploring roles like web development, data analysis, or UX design. What specific area interests you?",
    "business": "Business careers are diverse! You could explore marketing, project management, entrepreneurship, or consulting. Building communication and analytical skills is key. What aspect of business excites you most?",
    "healthcare": "Healthcare is incredibly rewarding! Consider nursing, healthcare administration, medical technology, or therapy. Many roles offer flexible education paths. Are you interested in direct patient care or behind-the-scenes work?",
    "education": "Education opens doors to impact lives! Teaching, curriculum development, educational technology, or administration are great paths. Consider what age group or subject area you're passionate about.",
    "creative": "Creative fields are flourishing! Graphic design, content creation, marketing, writing, or digital media offer exciting opportunities. Building a portfolio is crucial. What type of creative work inspires you?",
    "skills": "Focus on both hard and soft skills! Communication, problem-solving, and adaptability are universally valuable. Consider online courses, workshops, or volunteering to build experience. What skills would you like to develop?",
    "start": "Starting your career journey is exciting! First, identify your interests and strengths. Research different fields, network with professionals, and consider internships or entry-level positions. What's your educational background?",
    "default": "That's a great question! Career paths are unique to each person. Consider your interests, skills, and values. I'd recommend speaking with professionals in fields that interest you and exploring online resources. What specific aspect would you like to know more about?"
  };

  const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    if (message.includes("tech") || message.includes("coding") || message.includes("programming")) {
      return careerResponses.tech;
    } else if (message.includes("business") || message.includes("marketing") || message.includes("management")) {
      return careerResponses.business;
    } else if (message.includes("health") || message.includes("medical") || message.includes("nurse")) {
      return careerResponses.healthcare;
    } else if (message.includes("teach") || message.includes("education") || message.includes("school")) {
      return careerResponses.education;
    } else if (message.includes("creative") || message.includes("design") || message.includes("art") || message.includes("writing")) {
      return careerResponses.creative;
    } else if (message.includes("skill") || message.includes("learn") || message.includes("develop")) {
      return careerResponses.skills;
    } else if (message.includes("start") || message.includes("begin") || message.includes("how")) {
      return careerResponses.start;
    } else {
      return careerResponses.default;
    }
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      isBot: false,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);

    // Simulate bot response
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(inputMessage),
        isBot: true,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);

    setInputMessage("");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              size="lg"
              className="h-14 w-14 rounded-full bg-gradient-primary text-white shadow-elegant hover:shadow-glow transition-all duration-300 hover:scale-105"
            >
              <MessageCircle className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[400px] sm:w-[540px] p-0">
            <div className="flex flex-col h-full">
              <SheetHeader className="p-6 border-b bg-gradient-subtle">
                <SheetTitle className="flex items-center gap-2 text-primary">
                  <Bot className="h-5 w-5" />
                  Career Guidance Assistant
                </SheetTitle>
              </SheetHeader>

              {/* Messages Area */}
              <ScrollArea className="flex-1 p-4">
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex gap-3 ${
                        message.isBot ? "justify-start" : "justify-end"
                      }`}
                    >
                      {message.isBot && (
                        <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center flex-shrink-0">
                          <Bot className="h-4 w-4 text-white" />
                        </div>
                      )}
                      <div
                        className={`max-w-[80%] p-3 rounded-lg ${
                          message.isBot
                            ? "bg-muted text-muted-foreground"
                            : "bg-gradient-primary text-white"
                        }`}
                      >
                        <p className="text-sm">{message.text}</p>
                      </div>
                      {!message.isBot && (
                        <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                          <User className="h-4 w-4 text-secondary-foreground" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </ScrollArea>

              {/* Input Area */}
              <div className="p-4 border-t bg-background">
                <div className="flex gap-2">
                  <Input
                    placeholder="Ask me about your career..."
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="flex-1"
                  />
                  <Button
                    onClick={handleSendMessage}
                    disabled={!inputMessage.trim()}
                    size="icon"
                    className="bg-gradient-primary hover:bg-gradient-primary/90"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
};

export default ChatBot;