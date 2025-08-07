import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const SuccessStories = () => {
  const stories = [
    {
      name: "Maria Rodriguez",
      beforeRole: "Restaurant Server",
      afterRole: "Software Developer",
      company: "Google",
      story: "From serving tables to coding applications, Maria transformed her life through our platform's coding bootcamp recommendations and mentorship program.",
      timeframe: "18 months",
      salaryIncrease: "300%",
      avatar: "👩🏽‍💻"
    },
    {
      name: "Aisha Patel",
      beforeRole: "Stay-at-home Mom",
      afterRole: "Digital Marketing Manager",
      company: "Shopify",
      story: "After 8 years out of the workforce, Aisha rebuilt her career with our flexible learning paths and landed her dream job in tech marketing.",
      timeframe: "12 months", 
      salaryIncrease: "From $0 to $85K",
      avatar: "👩🏻‍💼"
    },
    {
      name: "Jennifer Chen",
      beforeRole: "Retail Associate",
      afterRole: "Data Scientist",
      company: "Microsoft",
      story: "Jennifer discovered her passion for data analysis through our career assessment and is now leading AI projects at one of the world's top tech companies.",
      timeframe: "24 months",
      salaryIncrease: "400%",
      avatar: "👩🏻‍🔬"
    }
  ];

  return (
    <section id="stories" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-hero-gradient bg-clip-text text-transparent">
            Real Women, Real Success
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Be inspired by the incredible journeys of women who transformed their careers and lives through empowerHER.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <Card key={index} className="bg-card-gradient border-border/50 hover:shadow-elegant transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="text-4xl">{story.avatar}</div>
                  <div>
                    <CardTitle className="text-xl font-bold text-foreground">{story.name}</CardTitle>
                    <div className="flex flex-col space-y-1">
                      <span className="text-sm text-muted-foreground line-through">{story.beforeRole}</span>
                      <span className="text-sm font-semibold text-primary">{story.afterRole} at {story.company}</span>
                    </div>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Badge variant="secondary" className="bg-success/20 text-success">
                    {story.timeframe}
                  </Badge>
                  <Badge variant="secondary" className="bg-warm/20 text-warm">
                    {story.salaryIncrease}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  "{story.story}"
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-8 text-muted-foreground">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">95%</div>
              <div className="text-sm">Career Transition Success</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-success">$40K</div>
              <div className="text-sm">Average Salary Increase</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-warm">10K+</div>
              <div className="text-sm">Women Empowered</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;