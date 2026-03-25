export default function SectionWrapper({ id, variant = 'light', className = '', children, noisy }) {
  const variants = {
    light: 'bg-parchment text-gray-900',
    dark: 'bg-ink text-white',
    darker: 'bg-ink-light text-white',
    mid: 'bg-ink-mid text-white',
  }

  return (
    <section id={id} className={`relative ${variants[variant]} ${noisy ? 'noise' : ''} ${className}`}>
      <div className="relative z-10 max-w-[1140px] mx-auto px-6 py-24 md:py-32">
        {children}
      </div>
    </section>
  )
}
