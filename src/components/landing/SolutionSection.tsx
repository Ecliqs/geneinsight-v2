import { Dna, Network, Cpu, Microscope } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  { icon: Microscope, label: "Sample Collection" },
  { icon: Dna, label: "Advanced Sequencing" },
  { icon: Cpu, label: "AI-Powered Analysis" },
  { icon: Network, label: "Actionable Clinical Insights" },
];

export function SolutionSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-headline mb-6">Solve Complex Cases That Standard Tests Miss</h2>
          <p className="text-lg text-muted-foreground mb-12">
            Identify the root cause with advanced genomic diagnostics and AI-driven insights.
          </p>
          
          <div className="relative flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0 py-8 px-4 bg-muted/30 rounded-3xl mb-16">
            {steps.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center z-10 w-full md:w-auto">
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white shadow-lg mb-4 ring-8 ring-white">
                  <step.icon className="h-8 w-8" />
                </div>
                <span className="font-bold text-foreground text-sm md:text-base">{step.label}</span>
                {idx < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -translate-y-1/2 border-t-2 border-dashed border-primary/30" 
                    style={{ left: `${(idx * 25) + 18}%`, width: '14%' }} 
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          <div className="text-center p-6 bg-background rounded-2xl border border-border/50">
            <h4 className="font-bold text-xl mb-2">Deeper Diagnosis</h4>
            <p className="text-muted-foreground">Identify genetic causes missed by traditional testing</p>
          </div>
          <div className="text-center p-6 bg-background rounded-2xl border border-border/50">
            <h4 className="font-bold text-xl mb-2">Complete Biological Insight</h4>
            <p className="text-muted-foreground">Understand disease at genomic, protein, and functional levels</p>
          </div>
          <div className="text-center p-6 bg-background rounded-2xl border border-border/50">
            <h4 className="font-bold text-xl mb-2">Faster Clinical Decisions</h4>
            <p className="text-muted-foreground">AI-driven insights to support accurate treatment</p>
          </div>
        </div>

        <div className="text-center">
          <p className="text-lg font-medium mb-6">Have a complex case?</p>
          <Button size="lg" className="rounded-full px-10 h-14 text-lg shadow-xl" asChild>
            <a href="#calendly">Discuss a Case</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
