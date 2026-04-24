
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { ProofStrip } from "@/components/landing/ProofStrip";
import { ProblemSection } from "@/components/landing/ProblemSection";
import { SolutionSection } from "@/components/landing/SolutionSection";
import { Capabilities } from "@/components/landing/Capabilities";
import { TrustSection } from "@/components/landing/TrustSection";
import { ConditionsSection } from "@/components/landing/ConditionsSection";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { QualitySection } from "@/components/landing/QualitySection";
import { CTASection } from "@/components/landing/CTASection";
import { CalendlySection } from "@/components/landing/CalendlySection";
import { StickyCTAs } from "@/components/landing/StickyCTAs";
import { CheckCircle2 } from "lucide-react";

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
        <section className="py-20 bg-muted/20">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <h2 className="text-3xl font-bold mb-6">From Symptoms to Root Cause</h2>
            <p className="text-lg text-muted-foreground mb-12">
              We enable the shift from traditional symptomatic observation to genetic precision, identifying underlying biological triggers.
            </p>
            <div className="flex items-center justify-center gap-4 md:gap-12">
              <div className="px-6 py-4 bg-white rounded-xl shadow-sm border border-red-100 line-through text-muted-foreground opacity-60">
                Symptom Management
              </div>
              <div className="text-primary">
                <svg width="48" height="24" viewBox="0 0 48 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 12H44M44 12L34 2M44 12L34 22" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="px-6 py-4 bg-primary text-white rounded-xl shadow-lg font-bold">
                Genetic Root Cause
              </div>
            </div>
          </div>
        </section>

        <Capabilities />
        <ConditionsSection />
        <TrustSection />
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
