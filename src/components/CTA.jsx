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
            Your back office is ready.
          </h2>
          <p className="mt-5 text-slate-light text-lg leading-relaxed">
            Join the waitlist. We'll reach out when it's your turn.
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
