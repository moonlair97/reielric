import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Clock, Globe, Rocket, Check, ChevronDown, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Pricing = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(1);

  const faqs = [
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary based on complexity. A simple website typically takes 1-2 weeks, while a full web application can take 4-8 weeks. I'll provide a detailed timeline during our initial consultation.",
    },
    {
      question: "Do you offer support after project completion?",
      answer: "Yes! All packages include free support after delivery (1 month for Simple Website, 2 months for Web Application). After that, I offer ongoing maintenance at the hourly rate.",
    },
    {
      question: "Can I combine hourly rate with a fixed package?",
      answer: "Absolutely. Many clients start with a fixed package and then use hourly billing for additional features or ongoing improvements.",
    },
    {
      question: "What technologies do you use?",
      answer: "I primarily work with Next.js, React, TypeScript, Tailwind CSS, and PostgreSQL. For authentication, I use Better-Auth, and for payments, Stripe integration is available.",
    },
    {
      question: "Do you offer hosting and domain?",
      answer: "I can help set up hosting (Vercel, Railway, etc.) and configure your domain. Hosting costs are separate and depend on your chosen provider.",
    },
    {
      question: "How does the payment process work?",
      answer: "For fixed packages, I typically require 50% upfront and 50% upon completion. For hourly work, invoicing is done weekly or bi-weekly based on logged hours.",
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
              Pricing & Packages
            </h1>
            <p className="text-muted-foreground">Flexible solutions for any type of project</p>
          </div>

          {/* Hourly Rate */}
          <div className="rounded-2xl bg-card border border-border p-6 mb-12 gradient-border">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-primary/10 border border-primary/30">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-mono font-semibold text-foreground">Hourly Rate</h3>
                  <p className="text-sm text-muted-foreground">Hourly rate for flexible projects and consulting</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-primary">15 USD</p>
                <p className="text-xs text-muted-foreground">per hour</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-4 pt-4 border-t border-border">
              Ideal for: consulting, modifications, maintenance, or projects with evolving requirements
            </p>
          </div>

          {/* Fixed Packages Header */}
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-1 bg-border" />
            <h2 className="text-2xl font-mono font-bold text-foreground">Fixed Price Packages</h2>
            <div className="h-px flex-1 bg-border" />
          </div>
          <p className="text-center text-muted-foreground mb-8">Complete solutions for your needs</p>

          {/* Packages Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {/* Simple Website */}
            <div className="rounded-2xl bg-card border border-border p-8 gradient-border">
              <div className="flex items-center gap-3 mb-2">
                <Globe className="w-5 h-5 text-primary" />
                <h3 className="font-mono font-semibold text-foreground">Simple Website</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-6">Perfect for your basic online presence</p>
              
              <p className="text-4xl font-bold text-foreground mb-1">330 USD</p>
              <p className="text-sm text-muted-foreground mb-8">starting price</p>

              <ul className="space-y-3 mb-8">
                {[
                  "3-5 non-dynamic pages",
                  "Modern and responsive design",
                  "Complete SEO optimization",
                  "Functional contact form",
                  "Google Analytics integration",
                  "Hosting setup assistance",
                  "1 month free support",
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-primary flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                to="/contact"
                className="block w-full text-center px-5 py-3 rounded-lg bg-secondary border border-border text-foreground font-medium text-sm hover:bg-secondary/80 hover:border-primary/30 transition-all duration-200"
              >
                Request quote
              </Link>
            </div>

            {/* Web Application */}
            <div className="rounded-2xl bg-card border border-border p-8 gradient-border relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-pink-500/20 text-pink-400 border border-pink-500/30">
                  Popular
                </span>
              </div>

              <div className="flex items-center gap-3 mb-2">
                <Rocket className="w-5 h-5 text-pink-400" />
                <h3 className="font-mono font-semibold text-foreground">Web Application</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-6">Dynamic web application with advanced features</p>
              
              <p className="text-4xl font-bold text-foreground mb-1">550 USD</p>
              <p className="text-sm text-muted-foreground mb-8">starting price</p>

              <ul className="space-y-3 mb-8">
                {[
                  "5-7 dynamic pages",
                  "API integrations",
                  "Content management",
                  "Custom functionality",
                  "Personalized and responsive design",
                  "Advanced SEO optimization",
                  "Complete deployment and setup",
                  "2 months free support",
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Check className={`w-4 h-4 flex-shrink-0 ${i > 3 ? "text-pink-400" : "text-primary"}`} />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                to="/contact"
                className="block w-full text-center px-5 py-3 rounded-lg bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-500/30 text-foreground font-medium text-sm hover:from-pink-500/30 hover:to-purple-500/30 transition-all duration-200"
              >
                Request quote
              </Link>
            </div>
          </div>

          {/* Custom */}
          <p className="text-center text-muted-foreground mb-16">
            Need something custom?{" "}
            <Link to="/contact" className="text-primary hover:underline">
              Let's discuss
            </Link>
          </p>

          {/* FAQ Section */}
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-1 bg-border" />
            <h2 className="text-2xl font-mono font-bold text-foreground">Frequently Asked Questions</h2>
            <div className="h-px flex-1 bg-border" />
          </div>
          <p className="text-center text-muted-foreground mb-8">Everything you need to know about working with me</p>

          <div className="rounded-2xl bg-card border border-border overflow-hidden gradient-border mb-16">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-border last:border-b-0">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-secondary/50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className={`w-4 h-4 ${openFaq === index ? "text-primary" : "text-muted-foreground"}`} />
                    <span className={`font-medium ${openFaq === index ? "text-primary" : "text-foreground"}`}>
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform ${openFaq === index ? "rotate-180" : ""}`} />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6 pt-0">
                    <p className="text-sm text-muted-foreground pl-7">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="rounded-2xl bg-card border border-border p-8 text-center gradient-border">
            <h2 className="text-xl font-mono font-bold text-foreground mb-3">Ready to get started?</h2>
            <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
              Contact me for a free discussion about your project. I'll provide you with a detailed estimate and personalized work plan.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-colors"
            >
              Contact me now
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
