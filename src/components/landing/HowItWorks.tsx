
const steps = [
  { num: "01", title: "Case Understanding", desc: "Initial discussion of symptoms and clinical history." },
  { num: "02", title: "Sample Processing", desc: "Seamless logistics for sample collection and intake." },
  { num: "03", title: "Analysis", desc: "High-throughput sequencing at accredited facilities." },
  { num: "04", title: "AI Interpretation", desc: "Automated prioritization of clinical relevance." },
  { num: "05", title: "Clinical Report", desc: "Actionable results reviewed by genomics experts." }
];

export function HowItWorks() {
  return (
    <section className="py-20 bg-background" id="how-it-works">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold font-headline text-center mb-16">How It Works</h2>
        <div className="relative">
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-primary/20 z-0" />
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 relative z-10">
            {steps.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-2xl bg-white border-2 border-primary flex items-center justify-center text-primary font-bold text-xl mb-6 shadow-sm">
                  {step.num}
                </div>
                <h4 className="font-bold text-lg mb-2">{step.title}</h4>
                <p className="text-muted-foreground text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
