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
        <div className="max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-bold font-headline mb-8 leading-tight">
            Why Clinicians Trust GeneInsight
          </h2>
          <p className="text-primary-foreground/90 text-xl mb-12 leading-relaxed max-w-2xl">
            We provide more than just data. We provide clinical confidence for the most challenging cases in your practice.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            {trustPoints.map((point, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="mt-1 bg-white/20 rounded-full p-1 shrink-0">
                  <Check className="h-4 w-4 text-white" />
                </div>
                <span className="text-lg font-medium">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
