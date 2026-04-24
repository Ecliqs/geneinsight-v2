
"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ChevronRight } from "lucide-react";

export function Hero() {
  const heroImage = PlaceHolderImages.find((img) => img.id === "hero-dna");

  return (
    <section className="relative overflow-hidden py-12 md:py-24 bg-gradient-to-b from-white to-background">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground font-headline leading-[1.1]">
            Still Struggling to Diagnose <span className="text-primary">Complex</span> or Undiagnosed Cases?
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-[600px] leading-relaxed">
            Identify the root cause with advanced genomic diagnostics powered by multi-omics and AI-driven insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
            <Button size="lg" className="h-14 px-8 text-lg rounded-full shadow-lg" asChild>
              <a href="#calendly">Discuss a Case</a>
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full" asChild>
              <a href="#calendly">Book a Clinical Discussion</a>
            </Button>
          </div>
          <p className="text-sm text-muted-foreground flex items-center justify-center md:justify-start gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Review your case with our genomics experts. No obligation.
          </p>
        </div>
        <div className="relative aspect-square md:aspect-auto md:h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl border bg-white">
          {heroImage && (
            <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              fill
              className="object-cover"
              data-ai-hint={heroImage.imageHint}
              priority
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
