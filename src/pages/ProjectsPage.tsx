import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import { Search, Github, ExternalLink } from "lucide-react";

type Category = "all" | "personal" | "client";
type Status = "all" | "completed" | "in-development";

interface Project {
  title: string;
  description: string;
  tags: string[];
  category: "personal" | "client";
  status: "completed" | "in-development";
  featured?: boolean;
  github?: string;
  testimonial?: { text: string; author: string };
}

const ProjectsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<Category>("all");
  const [statusFilter, setStatusFilter] = useState<Status>("all");

  const projects: Project[] = [
    {
      title: "KeyFrameExtract",
      description: "AI application that extracts key moments from long videos using transcripts. Uses natural language processing algorithms to identify the most important segments.",
      tags: ["React", "Bun.js", "AI", "NLP"],
      category: "personal",
      status: "completed",
      featured: true,
      github: "https://github.com/ReiElric/keyframe-extract",
    },
    {
      title: "RoleMint",
      description: "Platform for searching and finding jobs through online scanning. Aggregates job offers from multiple sources and offers advanced filtering.",
      tags: ["Next.js", "TypeScript", "API", "PostgreSQL"],
      category: "personal",
      status: "completed",
      featured: true,
    },
    {
      title: "AcademicianUI",
      description: "Academic paper generator with ready-made structure and bibliography. Helps students create correctly formatted academic documents.",
      tags: ["React", "AI", "PDF", "LaTeX"],
      category: "personal",
      status: "completed",
      featured: true,
    },
    {
      title: "E-commerce Platform",
      description: "Complete e-commerce platform with integrated payment system, inventory management, and admin dashboard.",
      tags: ["Next.js", "Stripe", "PostgreSQL", "Tailwind"],
      category: "client",
      status: "completed",
      testimonial: { text: "Excellent collaboration! The project was delivered on time and exceeds expectations.", author: "Maria P." },
    },
    {
      title: "Crypto Exchange Dashboard",
      description: "Dashboard for monitoring and trading on multiple cryptocurrency exchanges. Real-time interface with advanced charts.",
      tags: ["Go", "React", "WebSocket", "Redis"],
      category: "client",
      status: "completed",
    },
    {
      title: "Blog Platform",
      description: "Blogging platform with markdown editor, comment system, and SEO optimization. Supports multiple authors and categories.",
      tags: ["Next.js", "MDX", "PostgreSQL", "Vercel"],
      category: "client",
      status: "completed",
      testimonial: { text: "Very professional and easy to work with. Highly recommend!", author: "Alexandru D." },
    },
    {
      title: "Task Management App",
      description: "Task management application with team collaboration, real-time notifications, and integrations with other tools.",
      tags: ["Next.js", "Supabase", "Realtime", "TypeScript"],
      category: "personal",
      status: "in-development",
    },
    {
      title: "Portfolio Generator",
      description: "Tool for automatically generating personalized portfolios for developers. Includes templates and advanced customization.",
      tags: ["React", "Tailwind", "Framer Motion", "MDX"],
      category: "personal",
      status: "in-development",
    },
  ];

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesCategory = categoryFilter === "all" || project.category === categoryFilter;
    const matchesStatus = statusFilter === "all" || project.status === statusFilter;

    return matchesSearch && matchesCategory && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-16 px-6">
        <div className="container mx-auto max-w-6xl">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-mono font-bold gradient-text text-glow mb-4">
              My Projects
            </h1>
            <p className="text-muted-foreground">A collection of projects I've developed over time</p>
          </div>

          {/* Filters */}
          <div className="rounded-2xl bg-card border border-border p-6 mb-8 gradient-border">
            {/* Search */}
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search projects, technologies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
              />
            </div>

            {/* Filter Buttons */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-muted-foreground mb-3">Category</p>
                <div className="flex flex-wrap gap-2">
                  {(["all", "personal", "client"] as Category[]).map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setCategoryFilter(cat)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                        categoryFilter === cat
                          ? "bg-primary text-primary-foreground"
                          : "bg-secondary text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {cat === "all" ? "All" : cat.charAt(0).toUpperCase() + cat.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-3">Status</p>
                <div className="flex flex-wrap gap-2">
                  {(["all", "completed", "in-development"] as Status[]).map((status) => (
                    <button
                      key={status}
                      onClick={() => setStatusFilter(status)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                        statusFilter === status
                          ? "bg-primary text-primary-foreground"
                          : "bg-secondary text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {status === "all" ? "All" : status === "in-development" ? "In Development" : "Completed"}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Results count */}
          <p className="text-center text-muted-foreground mb-8">
            Found <span className="text-primary font-semibold">{filteredProjects.length}</span> projects
          </p>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.title}
                className="rounded-2xl bg-card border border-border p-6 gradient-border hover:border-primary/30 transition-all duration-300 flex flex-col"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-mono font-semibold text-foreground">{project.title}</h3>
                  {project.featured && (
                    <span className="px-2 py-1 rounded text-xs font-medium bg-pink-500/20 text-pink-400 border border-pink-500/30">
                      Featured
                    </span>
                  )}
                </div>

                {/* Status badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    project.category === "personal"
                      ? "bg-pink-500/20 text-pink-400"
                      : "bg-primary/20 text-primary"
                  }`}>
                    {project.category === "personal" ? "Personal" : "Client"}
                  </span>
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    project.status === "completed"
                      ? "bg-secondary text-muted-foreground"
                      : "bg-orange-500/20 text-orange-400"
                  }`}>
                    {project.status === "completed" ? "Completed" : "In Development"}
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground mb-4 flex-1">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 rounded bg-secondary text-xs font-mono text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Testimonial */}
                {project.testimonial && (
                  <div className="bg-secondary/50 rounded-lg p-4 mb-4 border border-border">
                    <p className="text-sm text-muted-foreground italic mb-2">"{project.testimonial.text}"</p>
                    <p className="text-xs text-pink-400">— {project.testimonial.author}</p>
                  </div>
                )}

                {/* Actions */}
                <div className="flex gap-2 mt-auto pt-4 border-t border-border">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-secondary text-foreground text-sm hover:bg-secondary/80 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      GitHub
                    </a>
                  )}
                  <button className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-secondary text-foreground text-sm hover:bg-secondary/80 transition-colors">
                    <ExternalLink className="w-4 h-4" />
                    Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectsPage;
