
import { ShieldCheck } from "lucide-react";

export function QualitySection() {
  const standards = ["ISO 22962", "ISO 15189", "ISO 9001:2015"];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold font-headline mb-10 text-muted-foreground uppercase tracking-widest">Quality & Standards</h2>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {standards.map((s, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="w-20 h-20 bg-muted/50 rounded-full flex items-center justify-center mb-4 text-primary">
                <ShieldCheck className="h-10 w-10" />
              </div>
              <span className="font-bold text-foreground text-lg">{s}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
