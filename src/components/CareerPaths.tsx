import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const CareerPaths = () => {
  const careerPaths = [
    {
      category: "Technology",
      color: "primary",
      paths: [
        { title: "Software Developer", demand: "High", salary: "$70K-$150K" },
        { title: "Data Scientist", demand: "Very High", salary: "$80K-$180K" },
        { title: "UX/UI Designer", demand: "High", salary: "$60K-$130K" },
        { title: "Cybersecurity Specialist", demand: "Critical", salary: "$75K-$160K" }
      ]
    },
    {
      category: "Healthcare",
      color: "success",
      paths: [
        { title: "Nurse Practitioner", demand: "High", salary: "$85K-$125K" },
        { title: "Healthcare Administrator", demand: "Medium", salary: "$70K-$120K" },
        { title: "Physical Therapist", demand: "High", salary: "$75K-$95K" },
        { title: "Medical Technologist", demand: "High", salary: "$55K-$85K" }
      ]
    },
    {
      category: "Business & Finance",
      color: "warm",
      paths: [
        { title: "Financial Analyst", demand: "Medium", salary: "$65K-$110K" },
        { title: "Marketing Manager", demand: "High", salary: "$70K-$140K" },
        { title: "Project Manager", demand: "High", salary: "$75K-$135K" },
        { title: "Business Consultant", demand: "Medium", salary: "$80K-$150K" }
      ]
    }
  ];

  const getDemandBadgeColor = (demand: string) => {
    switch (demand) {
      case "Critical": return "bg-red-500 text-white";
      case "Very High": return "bg-orange-500 text-white";
      case "High": return "bg-success text-success-foreground";
      case "Medium": return "bg-muted text-muted-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section id="careers" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Explore Career Paths
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover high-demand careers across various industries, complete with salary ranges and growth opportunities.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {careerPaths.map((category, index) => (
            <Card key={index} className="bg-background border-border hover:shadow-elegant transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl font-bold flex items-center gap-2">
                  <div className={`w-4 h-4 rounded-full ${
                    category.color === 'primary' ? 'bg-primary' :
                    category.color === 'success' ? 'bg-success' : 'bg-warm'
                  }`}></div>
                  {category.category}
                </CardTitle>
                <CardDescription>High-growth opportunities in {category.category.toLowerCase()}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.paths.map((path, pathIndex) => (
                  <div key={pathIndex} className="p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-foreground">{path.title}</h4>
                      <Badge className={getDemandBadgeColor(path.demand)}>
                        {path.demand}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{path.salary}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button size="lg" className="bg-hero-gradient hover:opacity-90 transition-opacity text-lg px-8 py-6">
            Take Career Assessment
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CareerPaths;