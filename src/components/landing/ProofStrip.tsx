
import { CheckCircle2, ShieldCheck, Microscope } from "lucide-react";

export function ProofStrip() {
  return (
    <section className="py-12 border-y bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
            <div className="bg-primary/10 p-3 rounded-full">
              <CheckCircle2 className="h-6 w-6 text-primary" />
            </div>
            <p className="font-medium text-foreground leading-snug">
              Helping clinicians solve complex and undiagnosed cases
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
            <div className="bg-primary/10 p-3 rounded-full">
              <ShieldCheck className="h-6 w-6 text-primary" />
            </div>
            <p className="font-medium text-foreground leading-snug">
              Experience across rare diseases, oncology, neurology, and prenatal
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
            <div className="bg-primary/10 p-3 rounded-full">
              <Microscope className="h-6 w-6 text-primary" />
            </div>
            <p className="font-medium text-foreground leading-snug">
              Enabling precise diagnosis through advanced genomic insights
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
