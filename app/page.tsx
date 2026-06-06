import { CalendlyWidget } from "@/components/calendly-widget"

export default function Page() {
  return (
    <main className="min-h-screen bg-background px-6 py-16">
      <div className="mx-auto flex max-w-3xl flex-col gap-12">
        <header className="space-y-3 text-center">
          <h1 className="text-balance text-3xl font-semibold tracking-tight text-foreground">
            Agenda una llamada conmigo
          </h1>
          <p className="text-pretty leading-relaxed text-muted-foreground">
            Mira el video y reserva el horario que mejor te funcione.
          </p>
        </header>

        <section className="space-y-4">
          <h2 className="text-xl font-medium text-foreground">Video</h2>
          <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-border">
            <iframe
              className="absolute inset-0 h-full w-full"
              src="https://www.youtube.com/embed/MdkoQL4phtc?si=t7ab2DB4txCDl6bm"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-medium text-foreground">Reserva tu cita</h2>
          <CalendlyWidget url="https://calendly.com/juanecorrea100" />
        </section>
      </div>
    </main>
  )
}
