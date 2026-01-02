import { ArrowRight, Code, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-32 pb-16 px-6">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Hero Card */}
          <div className="lg:col-span-2 rounded-2xl bg-card border border-border p-8 lg:p-10 gradient-border">
            {/* Available badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-primary/10 border border-primary/30 mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-mono text-primary">Available for projects</span>
            </div>

            {/* Name */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              <span className="gradient-text text-glow font-mono">Robert Ionut</span>
              <br />
              <span className="gradient-text text-glow font-mono">Fundulea</span>
            </h1>

            {/* Title */}
            <h2 className="text-xl md:text-2xl text-muted-foreground mb-4">
              Software Engineer & Fullstack Web Developer
            </h2>

            {/* Description */}
            <p className="text-muted-foreground mb-8 max-w-lg">
              Specialized in developing modern web applications with a focus on backend.
              Experience in Next.js, React, TypeScript, and cloud technologies.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-colors"
              >
                View Projects
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-secondary text-secondary-foreground font-medium text-sm hover:bg-secondary/80 transition-colors"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="flex flex-col gap-6">
            {/* Projects Count */}
            <div className="flex-1 rounded-2xl bg-card border border-border p-6 gradient-border">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10 border border-primary/30">
                  <Code className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-3xl font-bold text-foreground">15+</p>
                  <p className="text-sm text-muted-foreground">Completed Projects</p>
                </div>
              </div>
            </div>

            {/* Years Experience */}
            <div className="flex-1 rounded-2xl bg-card border border-border p-6 gradient-border">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-orange-500/20 to-pink-500/20 border border-orange-500/30">
                  <Zap className="w-5 h-5 text-orange-400" />
                </div>
                <div>
                  <p className="text-3xl font-bold text-foreground">7+</p>
                  <p className="text-sm text-muted-foreground">Years Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
