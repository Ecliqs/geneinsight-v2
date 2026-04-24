
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Microscope } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
            <Microscope className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold tracking-tight font-headline">
            GeneInsight<span className="text-primary">Connect</span>
          </span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link href="#solutions" className="transition-colors hover:text-primary">Solutions</Link>
          <Link href="#capabilities" className="transition-colors hover:text-primary">Capabilities</Link>
          <Link href="#how-it-works" className="transition-colors hover:text-primary">How it Works</Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Button variant="outline" className="hidden sm:inline-flex" asChild>
            <Link href="#calendly">Book Discussion</Link>
          </Button>
          <Button asChild>
            <Link href="#calendly">Discuss a Case</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
