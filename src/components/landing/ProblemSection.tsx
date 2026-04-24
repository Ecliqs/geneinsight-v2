
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, FileQuestion, Clock } from "lucide-react";

const problems = [
  {
    icon: Clock,
    title: "Delayed Diagnosis",
    description: "Weeks or months waiting for clarity while symptoms progress without a clear plan.",
  },
  {
    icon: FileQuestion,
    title: "Unclear Treatment Decisions",
    description: "Empiric treatments failing to deliver results due to missing genetic insights.",
  },
  {
    icon: AlertCircle,
    title: "Multiple Tests, No Answers",
    description: "Standard panels returning inconclusive results for complex symptomatic patients.",
  },
];

export function ProblemSection() {
  return (
    <section className="py-20 bg-background" id="solutions">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">When Standard Diagnostics Fall Short</h2>
          <p className="text-muted-foreground text-lg max-w-[700px] mx-auto">
            Traditional testing often hits a wall. We bridge the gap between symptoms and understanding.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((p, idx) => (
            <Card key={idx} className="border-none shadow-md hover:shadow-xl transition-shadow bg-white">
              <CardContent className="pt-8 text-center">
                <div className="bg-red-50 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <p.icon className="h-8 w-8 text-red-500" />
                </div>
                <h3 className="text-xl font-bold mb-3">{p.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{p.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
