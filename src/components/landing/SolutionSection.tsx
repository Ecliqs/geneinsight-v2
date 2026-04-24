
import { Dna, Network, Cpu, Microscope } from "lucide-react";

const steps = [
  { icon: Microscope, label: "Sample" },
  { icon: Dna, label: "Sequencing" },
  { icon: Cpu, label: "AI Analysis" },
  { icon: Network, label: "Clinical Insight" },
];

export function SolutionSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-headline mb-6">Go Beyond Conventional Testing</h2>
          <p className="text-lg text-muted-foreground mb-12">
            Integrated multi-omics approach combining whole genome data with clinical AI interpretation for unparalleled resolution.
          </p>
          
          <div className="relative flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0 py-8 px-4 bg-muted/30 rounded-3xl">
            {steps.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center z-10 w-full md:w-auto">
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white shadow-lg mb-4 ring-8 ring-white">
                  <step.icon className="h-8 w-8" />
                </div>
                <span className="font-bold text-foreground">{step.label}</span>
                {idx < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -translate-y-1/2 left-[calc(100%/8 + idx*100%/4)] w-[calc(100%/4 - 100%/8)] border-t-2 border-dashed border-primary/30" 
                    style={{ left: `${(idx * 25) + 18}%`, width: '14%' }} 
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center p-6">
            <h4 className="font-bold text-xl mb-2">Genome Sequencing</h4>
            <p className="text-muted-foreground">Comprehensive coverage of non-coding and regulatory regions.</p>
          </div>
          <div className="text-center p-6">
            <h4 className="font-bold text-xl mb-2">Multi-Omics</h4>
            <p className="text-muted-foreground">Transcriptomics and epigenetics integration for functional validation.</p>
          </div>
          <div className="text-center p-6">
            <h4 className="font-bold text-xl mb-2">AI Interpretation</h4>
            <p className="text-muted-foreground">Prioritizing variants through phenotypic correlation algorithms.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
