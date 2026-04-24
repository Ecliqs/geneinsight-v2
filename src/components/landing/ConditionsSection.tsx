
import { Card, CardContent } from "@/components/ui/card";
import { Stethoscope, Activity, Brain, Baby, HeartPulse, Pill } from "lucide-react";

const conditions = [
  { icon: Activity, name: "Rare Diseases", desc: "Shorten diagnostic odysseys for undiagnosed syndromes." },
  { icon: HeartPulse, name: "Oncology", desc: "Identify driver mutations and guide targeted therapy." },
  { icon: Brain, name: "Neurology", desc: "Expertise in epilepsy, muscular dystrophies, and neurodegeneration." },
  { icon: Baby, name: "Prenatal", desc: "Non-invasive and invasive prenatal genomic screening." },
  { icon: Stethoscope, name: "Inherited Conditions", desc: "Family-wide screening for hereditary risks." },
  { icon: Pill, name: "Pharmacogenomics", desc: "Optimize drug dosage based on genetic metabolism." }
];

export function ConditionsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold font-headline text-center mb-12">Conditions We Help Diagnose</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {conditions.map((item, idx) => (
            <div key={idx} className="group relative p-8 rounded-2xl bg-background border hover:border-primary/50 transition-all hover:-translate-y-1">
              <div className="mb-4 text-primary bg-white w-12 h-12 rounded-xl flex items-center justify-center shadow-sm">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{item.name}</h3>
              <p className="text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
