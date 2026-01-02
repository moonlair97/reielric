import { Github, Mail } from "lucide-react";

const Footer = () => {
  const quickLinks = ["Home", "About", "Projects", "Pricing", "Contact"];

  return (
    <footer className="border-t border-border py-12 px-6 mt-16">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Logo & Description */}
          <div>
            <a href="#" className="flex items-center gap-1 font-mono text-lg font-semibold mb-4">
              <span className="text-primary">&lt;RE</span>
              <span className="text-muted-foreground">/&gt;</span>
            </a>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Software Engineer & Fullstack Web Developer specialized in Next.js, React, and modern web technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-mono text-primary text-sm font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-mono text-primary text-sm font-semibold mb-4">Connect</h4>
            <div className="flex gap-3">
              <a
                href="#"
                className="p-2.5 rounded-lg bg-secondary border border-border text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all duration-200"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="p-2.5 rounded-lg bg-secondary border border-border text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all duration-200"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border gap-4">
          <p className="text-xs text-muted-foreground">
            © 2026 Rei Elric. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Built with{" "}
            <span className="text-primary">Next.js</span>
            {" "}&{" "}
            <span className="text-pink-400">TypeScript</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
