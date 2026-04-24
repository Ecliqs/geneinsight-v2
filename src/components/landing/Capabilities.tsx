
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Zap, Activity, Microscope, BrainCircuit, Fingerprint, Layers } from "lucide-react";

const capabilities = [
  {
    title: "Genome Sequencing",
    description: "Whole genome and exome options for comprehensive diagnostic yield.",
    icon: Microscope
  },
  {
    title: "Short + Long Read",
    description: "Detecting structural variants and repeats that traditional panels miss.",
    icon: Zap
  },
  {
    title: "Multi-Omics Integration",
    description: "Merging genomic, transcriptomic, and proteomic data for functional insights.",
    icon: Layers
  },
  {
    title: "AI Interpretation",
    description: "Proprietary AI filters noise and prioritizes clinically actionable variants.",
    icon: BrainCircuit
  },
  {
    title: "Epigenetics",
    description: "Methylation profiling for neurodevelopmental and oncology cases.",
    icon: Fingerprint
  },
  {
    title: "End-to-End Workflow",
    description: "From sample logistics to clinical decision support—we handle it all.",
    icon: Activity
  }
];

export function Capabilities() {
  return (
    <section className="py-20 bg-background" id="capabilities">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">Clinical Capabilities</h2>
          <p className="text-muted-foreground text-lg">World-class technology designed for clinical excellence.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((c, idx) => (
            <Card key={idx} className="border-none shadow-sm hover:shadow-md transition-all">
              <CardHeader className="flex flex-row items-center space-x-4 pb-2">
                <div className="bg-primary/10 p-2 rounded-lg text-primary">
                  <c.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">{c.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{c.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
