import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Projects = () => {
  const projects = [
    {
      title: "KeyFrameExtract",
      description: "Application for extracting key moments from long videos using transcripts",
      tags: ["React", "Node.js", "AI"],
    },
    {
      title: "RoleMint",
      description: "Platform for finding jobs through online search",
      tags: ["Next.js", "TypeScript", "API"],
    },
    {
      title: "AcademicianUI",
      description: "Academic paper generator with ready-made structure and bibliography",
      tags: ["React", "AI", "PDF"],
    },
  ];

  return (
    <section id="projects" className="py-16 px-6">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-mono font-bold text-foreground mb-3">
            Notable Projects
          </h2>
          <p className="text-muted-foreground">
            A selection of the most interesting projects I've developed
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group rounded-2xl bg-card border border-border p-6 gradient-border hover:border-primary/30 transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-5 line-clamp-2">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded bg-secondary text-xs font-mono text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-secondary border border-border text-foreground font-medium text-sm hover:bg-secondary/80 hover:border-primary/30 transition-all duration-200"
          >
            View all projects
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
