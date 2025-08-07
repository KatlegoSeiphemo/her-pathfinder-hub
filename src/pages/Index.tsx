import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import CareerPaths from "@/components/CareerPaths";
import SuccessStories from "@/components/SuccessStories";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Features />
        <CareerPaths />
        <SuccessStories />
      </main>
      <Footer />
    </div>
  );
};

export default Index;