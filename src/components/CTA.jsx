import FadeIn from './ui/FadeIn'
import WaitlistForm from './ui/WaitlistForm'

export default function CTA() {
  return (
    <section id="waitlist" className="relative bg-ink-light text-white overflow-hidden noise">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brass/[0.04] rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-[640px] mx-auto px-6 py-24 md:py-32 text-center">
        <FadeIn>
          <h2 className="font-display font-bold text-3xl md:text-[2.75rem] leading-[1.1] tracking-tight">
            Stop renting your firm&rsquo;s memory
            <br />
            <span className="text-brass">to AI vendors.</span>
          </h2>
          <p className="mt-5 text-slate-light text-lg leading-relaxed">
            Run a burner. Your client work doesn&rsquo;t leave your office; the
            agent doesn&rsquo;t survive the matter; nothing trains on what
            didn&rsquo;t reach a cloud. The third way that&rsquo;s structural,
            not operational.
          </p>
        </FadeIn>

        <FadeIn delay={120}>
          <div className="mt-10 flex justify-center">
            <WaitlistForm dark />
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
