import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Briefcase, GraduationCap, Github } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const experiences = [
    {
      title: "Freelance Developer",
      company: "",
      period: "Dec 2025-Present",
      description: "Developing web applications for clients using Next.js, React, TypeScript. Over 15 completed projects, including 4+ client projects. Company reopened in December 2025.",
    },
    {
      title: "Freelance Developer (First Period)",
      company: "",
      period: "2024-2025",
      description: "First freelancing period after Zerobounce. Development of personal and client projects, experimentation with new technologies and stacks.",
    },
    {
      title: "Backend Software Engineer",
      company: "Zerobounce",
      period: "2022-2023",
      description: "Worked on the validation team, implementing features and changes that are in production. Experience with Java Spring, agile, SOLID principles, DevOps, and Linux.",
    },
    {
      title: "Customer Support T2",
      company: "Zerobounce",
      period: "2021-2022",
      description: "Returned to Zerobounce after finishing bachelor's. Level 2 customer support, solving complex technical issues and supporting colleagues with API problems.",
    },
    {
      title: "Customer Support",
      company: "Zerobounce",
      period: "2018-2019",
      description: "First period at Zerobounce during 2nd year of university. Customer support and parallel development with React and Node.js/Firebase. Left temporarily to finish bachelor's thesis.",
    },
  ];

  const education = [
    {
      degree: "Master's in Web Technologies and Databases",
      school: "University of Bucharest",
      period: "2021-2023",
    },
    {
      degree: "Bachelor's in Computer Science",
      school: "Titu Maiorescu University, Bucharest",
      period: "2017-2021",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-16 px-6">
        <div className="container mx-auto max-w-4xl">
          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-mono font-bold gradient-text text-glow mb-4">
              About Me
            </h1>
            <p className="text-muted-foreground">
              Software Engineer & Fullstack Web Developer with a focus on backend
            </p>
          </div>

          {/* My Story */}
          <section className="mb-16">
            <div className="rounded-2xl bg-card border border-border p-8 gradient-border">
              <h2 className="text-xl font-mono font-semibold text-primary mb-6">My Story</h2>
              <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
                <p>
                  I started programming working on game servers, then moved to C++ developing console applications and eventually to C# for Windows applications. After high school, I transitioned to web development and started working with Java and Java Spring.
                </p>
                <p>
                  I started at Zerobounce in my 2nd year of university as Customer Support, where I mostly worked on helping clients with product issues, but I also used my skills to help both clients and colleagues with low-level API problems or assist in team projects. Then I left temporarily to finish my bachelor's thesis and complete the year.
                </p>
                <p>
                  After finishing my bachelor's, I returned to Zerobounce as Customer Support T2, and then moved to the development team as a Backend Software Engineer on the validation team. I made many changes and features that went live, including some validation changes and features I created fully. I became familiar with agile, SOLID principles, DevOps, Linux, clean code, SQL/NoSQL, as well as other programming languages like Python and some PHP.
                </p>
                <p>
                  At the same time, on my own, I switched to React for front-end and Node/Firebase for backend at the time for web applications. Then I transitioned to my new programming stack: Next.js/TypeScript/React/Shadcn-UI/Tailwind/Better-Auth and Bun for plugins for personal projects and some client projects.
                </p>
                <p>
                  I left the company to work as an individual freelancer and did many projects. I also tried other things like Go, with a client project related to cryptocurrency exchanges, and some websites and web applications like a blog for a website that I coded in that stack.
                </p>
                <p>
                  I also became proficient in AI, developed many custom instruction agents tailored for specific jobs, and implemented AI in my apps or via AI for coding (not vibe-coding), but AI-assisted coding. In total, I've built over 15 projects in that period, including at least 4 client projects, and learned how to communicate requirements with clients and how to deliver a good product/service.
                </p>
                <p>
                  The company was temporarily closed and reopened in December 2025, and now I'm open to new projects and collaborations.
                </p>
              </div>
            </div>
          </section>

          {/* Professional Experience */}
          <section className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px flex-1 bg-border" />
              <h2 className="text-2xl font-mono font-bold text-foreground">Professional Experience</h2>
              <div className="h-px flex-1 bg-border" />
            </div>
            <p className="text-center text-muted-foreground mb-8">My journey in the tech industry</p>

            <div className="space-y-4">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="rounded-xl bg-card border border-border p-6 gradient-border hover:border-primary/30 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-secondary border border-border">
                      <Briefcase className="w-4 h-4 text-muted-foreground" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                        <h3 className="font-mono font-semibold text-foreground">
                          {exp.title}{exp.company && ` - ${exp.company}`}
                        </h3>
                        <span className="text-xs font-mono text-primary">{exp.period}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{exp.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px flex-1 bg-border" />
              <h2 className="text-2xl font-mono font-bold text-foreground">Education</h2>
              <div className="h-px flex-1 bg-border" />
            </div>
            <p className="text-center text-muted-foreground mb-8">My academic background</p>

            <div className="grid md:grid-cols-2 gap-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="rounded-xl bg-card border border-border p-6 gradient-border"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-primary/10 border border-primary/30">
                      <GraduationCap className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{edu.degree}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{edu.school}</p>
                      <span className="inline-block px-2 py-1 rounded text-xs font-mono bg-pink-500/20 text-pink-400 border border-pink-500/30">
                        {edu.period}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Let's work together */}
          <section>
            <div className="rounded-2xl bg-card border border-border p-8 text-center gradient-border">
              <h2 className="text-xl font-mono font-bold text-foreground mb-3">Let's work together</h2>
              <p className="text-muted-foreground mb-6">
                I'm always open to new opportunities and interesting collaborations
              </p>
              <div className="flex justify-center gap-4">
                <a
                  href="mailto:rei.elric@email.com"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-colors"
                >
                  Email
                </a>
                <a
                  href="https://github.com/ReiElric"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-secondary border border-border text-foreground font-medium text-sm hover:bg-secondary/80 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
