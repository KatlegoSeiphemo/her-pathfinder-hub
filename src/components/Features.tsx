import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Features = () => {
  const features = [
    {
      title: "Personal Career Assessment",
      description: "Discover your strengths, interests, and ideal career matches through our comprehensive assessment tools.",
      icon: "🎯",
      badge: "Popular"
    },
    {
      title: "Skill Development Hub",
      description: "Access curated learning resources, online courses, and workshops to build in-demand skills.",
      icon: "📚",
      badge: "Free"
    },
    {
      title: "Mentorship Network",
      description: "Connect with successful women professionals who can guide your career journey.",
      icon: "🤝",
      badge: "Premium"
    },
    {
      title: "Success Stories",
      description: "Get inspired by real stories from women who've transformed their careers and lives.",
      icon: "⭐",
      badge: "Inspiring"
    },
    {
      title: "Job Opportunity Matching",
      description: "Find positions that align with your skills, values, and career goals.",
      icon: "💼",
      badge: "AI-Powered"
    },
    {
      title: "Community Support",
      description: "Join a supportive community of like-minded women on similar journeys.",
      icon: "👥",
      badge: "24/7"
    }
  ];

  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-hero-gradient bg-clip-text text-transparent">
            Everything You Need to Succeed
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive platform provides all the tools, resources, and support you need to discover and pursue your ideal career path.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="relative bg-card-gradient border-border/50 hover:shadow-elegant transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl">{feature.icon}</div>
                  <Badge variant="secondary" className="bg-secondary text-secondary-foreground">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;