import { Code, Moon, Sun } from "lucide-react";

const Header = () => {
  const navLinks = ["Home", "About", "Projects", "Pricing", "Contact"];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="#" className="flex items-center gap-1 font-mono text-lg font-semibold">
          <span className="text-primary">&lt;RE</span>
          <span className="text-muted-foreground">/&gt;</span>
        </a>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Right icons */}
        <div className="flex items-center gap-2">
          <button className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-all duration-200">
            <Code className="w-4 h-4" />
          </button>
          <button className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-all duration-200">
            <Moon className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
