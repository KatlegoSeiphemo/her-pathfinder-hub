import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import Auth from "./Auth";

const Header = () => {
  const [showAuth, setShowAuth] = useState(false);
  const { user, isAuthenticated, logout } = useAuth();

  const handleAuthSuccess = () => {
    setShowAuth(false);
    window.location.reload(); // Refresh to show authenticated state
  };

  const handleLogout = async () => {
    await logout();
    window.location.reload(); // Refresh to show logged out state
  };

  return (
    <>
      <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-slate-600 to-slate-800 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">C</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-slate-600 to-slate-800 bg-clip-text text-transparent">
              CareerNest
            </span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#features" className="text-foreground hover:text-primary transition-colors">
              Features
            </a>
            <a href="#careers" className="text-foreground hover:text-primary transition-colors">
              Career Paths
            </a>
            <a href="#stories" className="text-foreground hover:text-primary transition-colors">
              Success Stories
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              About
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            {isAuthenticated ? (
              <>
                <span className="text-sm text-muted-foreground hidden sm:block">
                  Welcome, {user?.name}!
                </span>
                <Button variant="outline" onClick={handleLogout}>
                  Sign Out
                </Button>
              </>
            ) : (
              <>
                <Button variant="ghost" onClick={() => setShowAuth(true)}>
                  Sign In
                </Button>
                <Button 
                  className="bg-gradient-to-r from-slate-600 to-slate-800 hover:opacity-90 transition-opacity"
                  onClick={() => setShowAuth(true)}
                >
                  Get Started
                </Button>
              </>
            )}
          </div>
        </div>
      </header>
      
      {showAuth && (
        <Auth 
          onClose={() => setShowAuth(false)} 
          onSuccess={handleAuthSuccess}
        />
      )}
    </>
  );
};

export default Header;