
import { Check } from "lucide-react";

const trustPoints = [
  "Designed specifically for complex, refractory cases",
  "Clear, clinically relevant reports with actionable findings",
  "End-to-end sample management and logistical support",
  "No institutional infrastructure burden for clinicians",
  "Consistent high-quality sequencing standards",
  "Focus on delivering actionable clinical insights"
];

export function TrustSection() {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold font-headline mb-8 leading-tight">
              Why Clinicians Trust GeneInsight
            </h2>
            <p className="text-primary-foreground/90 text-lg mb-12 leading-relaxed">
              We provide more than just data. We provide clinical confidence for the most challenging cases in your practice.
            </p>
            <div className="grid grid-cols-1 gap-4">
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
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold mb-6">What You Can Expect</h3>
            <ul className="space-y-6">
              {[
                "Higher diagnostic resolution",
                "Faster turnaround times",
                "Deeper genomic insights",
                "Clinically relevant outputs",
                "Precision medicine support"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-4 text-lg">
                  <div className="h-2 w-2 rounded-full bg-white shadow-glow" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
