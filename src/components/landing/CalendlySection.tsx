
export function CalendlySection() {
  return (
    <section className="py-20 bg-background" id="calendly">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">Choose a convenient time for your discussion</h2>
            <p className="text-muted-foreground text-lg">30-minute expert-led clinical case discussion</p>
          </div>
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border min-h-[700px]">
            <iframe
              src="https://calendly.com/mudita-ecliqs/30min?hide_event_type_details=1&hide_gdpr_banner=1"
              width="100%"
              height="700"
              frameBorder="0"
              title="Calendly Booking"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
