import { Search, Zap, FileText, Microscope, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";

const expectations = [
  {
    icon: Search,
    title: "Accurate Diagnosis",
    desc: "Identify conditions that standard tests miss"
  },
  {
    icon: Zap,
    title: "Faster Turnaround",
    desc: "Get critical insights without delays"
  },
  {
    icon: FileText,
    title: "Clear Clinical Reports",
    desc: "Actionable outputs for better decisions"
  },
  {
    icon: Microscope,
    title: "Deeper Insights",
    desc: "Multi-omics understanding of disease"
  },
  {
    icon: Stethoscope,
    title: "Better Treatment Decisions",
    desc: "Support precision medicine approaches"
  }
];

export function WhatToExpect() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">What To Expect</h2>
          <p className="text-muted-foreground text-lg">Partnering for clinical excellence and patient outcomes.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16">
          {expectations.map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl border border-border/50 shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                <item.icon className="h-7 w-7" />
              </div>
              <h3 className="font-bold text-lg mb-3">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-lg font-medium mb-6">Want these outcomes for your patients?</p>
          <Button size="lg" className="rounded-full px-10 h-14 text-lg" asChild>
            <a href="#calendly">Discuss a Case</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
