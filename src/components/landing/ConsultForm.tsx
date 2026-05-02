"use client";

import { useState } from "react";
import { format } from "date-fns";
import { CalendarIcon, CheckCircle2, Loader2, Send } from "lucide-react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { AREAS_OF_INTEREST, CONSULT_BENEFITS, FORM_ENDPOINT } from "@/lib/constants";

const formSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  phone: z.string().trim().min(6, "Enter a valid phone").max(30),
  company: z.string().trim().min(1, "Company is required").max(150),
  area: z.string().min(1, "Select an area of interest"),
  preferredAt: z.string().optional(),
  message: z.string().trim().min(10, "Tell us a bit more (min 10 chars)").max(2000),
});

type FormState = {
  name: string; email: string; phone: string; company: string;
  area: string; message: string;
};

export const ConsultForm = () => {
  const { toast } = useToast();
  const [values, setValues] = useState<FormState>({
    name: "", email: "", phone: "", company: "", area: "", message: "",
  });
  const [date, setDate] = useState<Date | undefined>();
  const [time, setTime] = useState<string>("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  const set = (k: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setValues(v => ({ ...v, [k]: e.target.value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const preferredAt = date
      ? `${format(date, "yyyy-MM-dd")}${time ? `T${time}` : ""}`
      : undefined;
    const payload = { ...values, preferredAt };
    const parsed = formSchema.safeParse(payload);
    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      parsed.error.issues.forEach(i => {
        const k = i.path[0] as string;
        if (!fieldErrors[k]) fieldErrors[k] = i.message;
      });
      setErrors(fieldErrors);
      toast({ title: "Please fix the highlighted fields", variant: "destructive" });
      return;
    }
    setErrors({});
    setSubmitting(true);
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      if (!res.ok) throw new Error(`Request failed (${res.status})`);
      toast({
        title: "Request received ✓",
        description: "Our team will reach out within 24 hours.",
      });
      setValues({ name: "", email: "", phone: "", company: "", area: "", message: "" });
      setDate(undefined);
      setTime("");
    } catch (err) {
      toast({
        title: "Couldn't submit right now",
        description: err instanceof Error ? err.message : "Please try again or email us.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  const fieldError = (k: string) => errors[k] && (
    <p className="text-xs text-destructive mt-1">{errors[k]}</p>
  );

  return (
    <section id="contact" className="py-24 bg-surface/40">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Schedule a Free Consultation
          </h2>
          <p className="text-muted-foreground text-lg">
            Tell us about your project and a GeneInsight expert will get back within 24 hours — at no cost.
          </p>
        </div>

        <div>
          <div className="grid lg:grid-cols-[1fr_2fr] gap-6 bg-background rounded-2xl border border-accent-soft p-4 md:p-6 shadow-[var(--shadow-card)]">
            <div className="p-4 md:p-6">
              <h3 className="font-display text-xl font-semibold mb-5 text-foreground">
                What you'll get
              </h3>
              <ul className="space-y-4">
                {CONSULT_BENEFITS.map(b => (
                  <li key={b} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground/85">{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <form onSubmit={onSubmit} className="rounded-xl bg-surface/60 border border-border p-5 md:p-7 space-y-4" noValidate>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Full name *</Label>
                  <Input id="name" value={values.name} onChange={set("name")} placeholder="Jane Doe" className="mt-1.5" />
                  {fieldError("name")}
                </div>
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" type="email" value={values.email} onChange={set("email")} placeholder="you@company.com" className="mt-1.5" />
                  {fieldError("email")}
                </div>
                <div>
                  <Label htmlFor="phone">Phone *</Label>
                  <Input id="phone" type="tel" value={values.phone} onChange={set("phone")} placeholder="+1 555 000 1234" className="mt-1.5" />
                  {fieldError("phone")}
                </div>
                <div>
                  <Label htmlFor="company">Company / Institution *</Label>
                  <Input id="company" value={values.company} onChange={set("company")} placeholder="GeneInsight Labs" className="mt-1.5" />
                  {fieldError("company")}
                </div>
              </div>

              <div>
                <Label htmlFor="area">Area of interest *</Label>
                <Select value={values.area} onValueChange={(v) => setValues(s => ({ ...s, area: v }))}>
                  <SelectTrigger id="area" className="mt-1.5">
                    <SelectValue placeholder="Select an area" />
                  </SelectTrigger>
                  <SelectContent>
                    {AREAS_OF_INTEREST.map(a => (
                      <SelectItem key={a} value={a}>{a}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {fieldError("area")}
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <Label>Preferred date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        type="button"
                        variant="outline"
                        className={cn(
                          "mt-1.5 justify-start text-left font-normal",
                          !date && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : "Pick a date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        disabled={(d) => d < new Date(new Date().setHours(0,0,0,0))}
                        initialFocus
                        className={cn("p-3 pointer-events-auto")}
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                <div>
                  <Label htmlFor="time">Preferred time</Label>
                  <Input id="time" type="time" value={time} onChange={(e) => setTime(e.target.value)} className="mt-1.5" />
                </div>
              </div>

              <div>
                <Label htmlFor="message">How can we help? *</Label>
                <Textarea
                  id="message"
                  value={values.message}
                  onChange={set("message")}
                  rows={5}
                  placeholder="Briefly describe your project, sample types, or research goals…"
                  className="mt-1.5"
                />
                {fieldError("message")}
              </div>

              <Button
                type="submit"
                disabled={submitting}
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold"
                size="lg"
              >
                {submitting ? (
                  <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Sending…</>
                ) : (
                  <><Send className="w-4 h-4 mr-2" /> Request Consultation</>
                )}
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                We respect your privacy. Your information is kept confidential.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
