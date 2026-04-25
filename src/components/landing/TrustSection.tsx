import { Check } from "lucide-react";

const trustPoints = [
  "Design specifically for complex, refractory cases",
  "Clear, clinically relevant reports with actionable findings",
  "End-to-end sample management and logistical support",
  "No institutional infrastructure burden for clinicians",
  "Consistent high-quality sequencing standards",
  "Focus on delivering actionable clinical insights"
];

export function TrustSection() {
  return (
    <section className="py-24 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="w-full">
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-headline mb-8 leading-tight">
              Why Clinicians Trust GeneInsight
            </h2>
            <p className="text-primary-foreground/90 text-xl leading-relaxed max-w-3xl">
              We provide more than just data. We provide clinical confidence for the most challenging cases in your practice.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-8">
            {trustPoints.map((point, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="mt-1 bg-white/20 rounded-full p-1.5 shrink-0">
                  <Check className="h-5 w-5 text-white stroke-[3px]" />
                </div>
                <span className="text-xl font-bold tracking-tight leading-snug">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
