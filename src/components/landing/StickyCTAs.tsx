
"use client";

import { MessageCircle, Phone, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

export function StickyCTAs() {
  return (
    <>
      {/* Floating CTA (Desktop/All) */}
      <div className="fixed bottom-8 right-8 z-[60] hidden md:block">
        <Button size="lg" className="h-14 px-8 rounded-full shadow-2xl animate-in slide-in-from-bottom-4 duration-500" asChild>
          <a href="#calendly" className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            Discuss a Case
          </a>
        </Button>
      </div>

      {/* Sticky Bottom Bar (Mobile) */}
      <div className="fixed bottom-0 left-0 right-0 z-[60] md:hidden bg-white border-t p-3 flex items-center justify-between shadow-[0_-4px_10px_rgba(0,0,0,0.05)]">
        <div className="flex gap-2">
          <Button variant="outline" size="icon" className="h-12 w-12 rounded-full text-green-600 border-green-200" asChild>
            <a href="https://wa.me/yourwhatsappnumber" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-6 w-6" />
            </a>
          </Button>
          <Button variant="outline" size="icon" className="h-12 w-12 rounded-full text-primary border-primary/20" asChild>
            <a href="tel:+1234567890">
              <Phone className="h-6 w-6" />
            </a>
          </Button>
        </div>
        <Button className="h-12 px-6 rounded-full font-bold flex-1 ml-3" asChild>
          <a href="#calendly">Discuss a Case</a>
        </Button>
      </div>
    </>
  );
}
