
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-24 bg-accent text-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h2 className="text-3xl md:text-5xl font-bold font-headline mb-6 max-w-4xl mx-auto leading-tight">
          Have a Complex Case That Needs Deeper Investigation?
        </h2>
        <p className="text-xl text-accent-foreground/90 mb-12 max-w-2xl mx-auto">
          Partner with our clinical genomics experts to find answers for your patients.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button size="lg" className="h-16 px-10 text-xl rounded-full bg-white text-accent hover:bg-white/90 shadow-xl" asChild>
            <a href="#calendly">Discuss a Case</a>
          </Button>
          <Button size="lg" variant="outline" className="h-16 px-10 text-xl rounded-full border-white text-white hover:bg-white/10" asChild>
            <a href="#calendly">Book Clinical Discussion</a>
          </Button>
        </div>
        <p className="mt-8 text-accent-foreground/70 font-medium">
          Takes less than 30 minutes • No obligation • Expert-led discussion
        </p>
      </div>
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px]" />
    </section>
  );
}
