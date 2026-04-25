import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { ProofStrip } from "@/components/landing/ProofStrip";
import { ProblemSection } from "@/components/landing/ProblemSection";
import { SolutionSection } from "@/components/landing/SolutionSection";
import { Capabilities } from "@/components/landing/Capabilities";
import { TrustSection } from "@/components/landing/TrustSection";
import { WhatToExpect } from "@/components/landing/WhatToExpect";
import { ConditionsSection } from "@/components/landing/ConditionsSection";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { QualitySection } from "@/components/landing/QualitySection";
import { CTASection } from "@/components/landing/CTASection";
import { CalendlySection } from "@/components/landing/CalendlySection";
import { StickyCTAs } from "@/components/landing/StickyCTAs";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <ProofStrip />
        <ProblemSection />
        <SolutionSection />
        
        {/* Symptoms to Root Cause Section */}
        <section className="py-24 bg-muted/20 border-y">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Stop Managing Symptoms. Start Finding the Root Cause.</h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
              Many conditions remain unresolved because underlying genetic causes are missed. We help identify what traditional diagnostics cannot.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 mb-12">
              <div className="w-full md:w-auto px-8 py-5 bg-white rounded-2xl shadow-sm border border-red-100 line-through text-muted-foreground opacity-60 font-medium">
                Traditional Testing
              </div>
              <div className="text-primary animate-bounce md:animate-none md:rotate-0 rotate-90">
                <ArrowRight className="h-8 w-8" />
              </div>
              <div className="w-full md:w-auto px-8 py-5 bg-primary text-white rounded-2xl shadow-lg font-bold text-lg ring-4 ring-primary/20">
                Root Cause Diagnosis
              </div>
            </div>
            <Button size="lg" variant="outline" className="rounded-full h-12 px-8" asChild>
              <a href="#how-it-works">See How It Works</a>
            </Button>
          </div>
        </section>

        <Capabilities />
        <ConditionsSection />
        <TrustSection />
        <WhatToExpect />
        <HowItWorks />
        <QualitySection />

        {/* When to Consider Section */}
        <section className="py-20 bg-background border-t">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl font-bold text-center mb-12">When Should You Consider This?</h2>
            <div className="space-y-4">
              {[
                "Diagnosis remains unclear after multiple rounds of testing",
                "Rare or suspected inherited conditions in pediatric or adult patients",
                "Complex multisystem cases with heterogeneous symptoms",
                "Need for precise mutation detection in oncology management",
                "Evaluating hereditary risk profiles for asymptomatic family members"
              ].map((text, idx) => (
                <div key={idx} className="flex items-center gap-4 p-4 bg-white rounded-xl border border-border/50">
                  <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                  <span className="text-lg font-medium">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
        <CalendlySection />
      </main>
      
      <footer className="bg-white border-t py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center items-center space-x-2 mb-6">
            <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center">
              <CheckCircle2 className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight font-headline">GeneInsightConnect</span>
          </div>
          <p className="text-muted-foreground text-sm max-w-md mx-auto mb-8">
            Advanced genomic diagnostics support for clinicians. Precision insights for complex cases.
          </p>
          <div className="text-xs text-muted-foreground border-t pt-8">
            &copy; {new Date().getFullYear()} GeneInsight. All rights reserved. 
            Clinical support services provided by certified genomics professionals.
          </div>
        </div>
      </footer>

      <StickyCTAs />
    </div>
  );
}
