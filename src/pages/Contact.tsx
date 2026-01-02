import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, Github, Send, Clock } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "I'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const steps = [
    { number: 1, title: "I receive the message", description: "I'll get instant email notification" },
    { number: 2, title: "I analyze the request", description: "I'll study the project and prepare a response" },
    { number: 3, title: "I respond within 24h", description: "I'll get back with a detailed response and next steps" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-16 px-6">
        <div className="container mx-auto max-w-5xl">
          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-mono font-bold gradient-text text-glow mb-4">
              Let's talk
            </h1>
            <p className="text-muted-foreground">
              Have a project in mind? I'm always open to new opportunities and collaborations
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-8 mb-12">
            {/* Contact Form */}
            <div className="lg:col-span-3 rounded-2xl bg-card border border-border p-8 gradient-border">
              <h2 className="font-mono font-semibold text-foreground mb-2">Send me a message</h2>
              <p className="text-sm text-muted-foreground mb-6">
                Fill out the form below and I'll get back to you as soon as possible
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Name <span className="text-pink-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email <span className="text-pink-400">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Subject <span className="text-pink-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="What do you want to discuss?"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message <span className="text-pink-400">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Describe your project or question..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-colors"
                >
                  <Send className="w-4 h-4" />
                  Send message
                </button>

                <p className="text-xs text-center text-muted-foreground">
                  The message will be sent to{" "}
                  <span className="text-pink-400">rei.elric@email.com</span>
                </p>
              </form>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              {/* Email */}
              <div className="rounded-2xl bg-card border border-border p-6 gradient-border">
                <div className="p-3 rounded-xl bg-pink-500/10 border border-pink-500/30 w-fit mb-4">
                  <Mail className="w-5 h-5 text-pink-400" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Email</h3>
                <p className="text-sm text-muted-foreground">rei.elric@email.com</p>
              </div>

              {/* GitHub */}
              <div className="rounded-2xl bg-card border border-border p-6 gradient-border">
                <div className="p-3 rounded-xl bg-secondary border border-border w-fit mb-4">
                  <Github className="w-5 h-5 text-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">GitHub</h3>
                <p className="text-sm text-muted-foreground">@ReiElric</p>
              </div>

              {/* Response Time */}
              <div className="rounded-2xl bg-card border border-border p-6 gradient-border">
                <h3 className="font-mono text-sm font-semibold text-pink-400 mb-3">Response Time</h3>
                <p className="text-sm text-muted-foreground">
                  I usually respond within 24 hours on business days. For urgent matters, please mention it in the subject.
                </p>
              </div>

              {/* Availability */}
              <div className="rounded-2xl bg-card border border-border p-6 gradient-border">
                <h3 className="font-mono text-sm font-semibold text-pink-400 mb-3">Availability</h3>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Monday - Friday</span>
                    <span className="text-foreground">9:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Weekend</span>
                    <span className="text-foreground">On request</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Process Steps */}
          <div className="rounded-2xl bg-card border border-border p-8 gradient-border">
            <h2 className="font-mono font-semibold text-foreground text-center mb-8">
              What happens after you send the message?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {steps.map((step) => (
                <div key={step.number} className="text-center">
                  <p className="text-3xl font-bold text-primary mb-3">{step.number}</p>
                  <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
