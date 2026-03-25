import SectionWrapper from './ui/SectionWrapper'
import FadeIn from './ui/FadeIn'
import WaitlistForm from './ui/WaitlistForm'

const STEPS = [
  {
    num: '01',
    title: 'Join the waitlist',
    description: "Sign up below. We'll notify you when ClaudeFirm is ready for your practice.",
  },
  {
    num: '02',
    title: 'Configure your firm',
    description: 'Edit TOOLS.md with your tech stack. Set your jurisdiction. Customize the matter folder structure.',
  },
  {
    num: '03',
    title: 'Start compounding',
    description: 'Every week, the system gets more valuable. Your institutional memory grows. The returns compound.',
  },
]

export default function GettingStarted() {
  return (
    <SectionWrapper id="waitlist" variant="light">
      <FadeIn>
        <p className="font-display font-semibold text-brass-muted text-[13px] tracking-widest uppercase mb-4">
          Get Started
        </p>
        <h2 className="font-display font-bold text-3xl md:text-[2.75rem] leading-[1.1] tracking-tight">
          Three steps. That's it.
        </h2>
      </FadeIn>

      <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
        {STEPS.map((step, i) => (
          <FadeIn key={step.num} delay={i * 100}>
            <div>
              <span className="font-mono text-[32px] font-bold text-brass/20 leading-none block mb-4">
                {step.num}
              </span>
              <h3 className="font-display font-semibold text-gray-900 text-[16px]">{step.title}</h3>
              <p className="mt-2 text-slate text-[14px] leading-relaxed">{step.description}</p>
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={400}>
        <div className="mt-20 pt-16 border-t border-gray-200">
          <p className="font-display font-semibold text-gray-900 text-lg mb-6">
            Ready to stop drowning in admin?
          </p>
          <WaitlistForm />
        </div>
      </FadeIn>
    </SectionWrapper>
  )
}
