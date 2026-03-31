import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, BookOpen, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const location = useLocation();

  const toggleDark = () => {
    setDark(!dark);
    document.documentElement.classList.toggle("dark");
  };

  const links = [
    { to: "/", label: "Home" },
    { to: "/courses", label: "Courses" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-bold text-xl">
          <div className="w-8 h-8 rounded-lg bg-hero-gradient flex items-center justify-center">
            <BookOpen className="w-4 h-4 text-primary-foreground" />
          </div>
          <span className="text-foreground">Learn<span className="text-gradient">X</span></span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive(l.to) ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" size="icon" onClick={toggleDark} className="text-muted-foreground">
            {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </Button>
          <Button variant="outline" size="sm">Sign In</Button>
          <Button size="sm" className="bg-hero-gradient text-primary-foreground border-0">Get Started</Button>
        </div>

        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X /> : <Menu />}
        </Button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-background border-b border-border px-4 pb-4 animate-fade-up">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setMobileOpen(false)}
              className="block py-2 text-sm font-medium text-muted-foreground hover:text-primary"
            >
              {l.label}
            </Link>
          ))}
          <div className="flex items-center gap-2 pt-2">
            <Button variant="ghost" size="icon" onClick={toggleDark}>
              {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </Button>
            <Button variant="outline" size="sm" className="flex-1">Sign In</Button>
            <Button size="sm" className="flex-1 bg-hero-gradient text-primary-foreground border-0">Get Started</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
