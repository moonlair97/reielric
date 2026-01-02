import { Rocket, Mail } from "lucide-react";

const TechStack = () => {
  const technologies = [
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "Tailwind CSS",
    "PostgreSQL",
    "Better-Auth",
    "Stripe",
  ];

  return (
    <section className="py-8 px-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Tech Stack Card */}
          <div className="rounded-2xl bg-card border border-border p-6 gradient-border">
            <div className="flex items-center gap-3 mb-5">
              <Rocket className="w-5 h-5 text-muted-foreground" />
              <h3 className="font-semibold text-foreground">Tech Stack</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-md bg-secondary border border-border text-xs font-mono text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all duration-200 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Collaborate Card */}
          <div className="rounded-2xl bg-card border border-border p-6 gradient-border">
            <div className="flex items-center gap-3 mb-3">
              <Mail className="w-6 h-6 text-pink-400" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Let's collaborate</h3>
            <p className="text-sm text-muted-foreground mb-5">Have a project in mind?</p>
            <a
              href="#contact"
              className="inline-flex w-full items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-500/30 text-foreground font-medium text-sm hover:from-pink-500/30 hover:to-purple-500/30 transition-all duration-200"
            >
              Send message
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
