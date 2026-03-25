import FadeIn from './ui/FadeIn'
import WaitlistForm from './ui/WaitlistForm'
import Button from './ui/Button'
import { FileText, HeartPulse, Brain, Wrench, BookOpen } from 'lucide-react'

const FILES = [
  { name: 'AGENTS.md', icon: FileText, size: '4.2 KB', desc: 'Agent role & safety rules' },
  { name: 'HEARTBEAT.md', icon: HeartPulse, size: '6.1 KB', desc: 'Operational checklists' },
  { name: 'SOUL.md', icon: Brain, size: '3.8 KB', desc: 'Voice & decision framework' },
  { name: 'TOOLS.md', icon: Wrench, size: '5.4 KB', desc: 'Tech stack config' },
  { name: 'PRACTICE.md', icon: BookOpen, size: '7.2 KB', desc: 'Practice extensions' },
]

export default function Hero() {
  return (
    <section className="relative bg-ink text-white min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-60" />
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-brass/[0.04] rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-[1140px] mx-auto px-6 py-32 md:py-0 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="lg:col-span-7">
            <FadeIn delay={80}>
              <h1 className="font-display font-bold text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.05] tracking-tight">
                Your small firm{' '}
                <br className="hidden md:block" />
                just got an{' '}
                <span className="relative">
                  <span className="text-brass">AI chief of staff</span>
                  <svg className="absolute -bottom-1 left-0 w-full h-2 text-brass/30" viewBox="0 0 300 8" preserveAspectRatio="none">
                    <path d="M0 6 Q75 0 150 6 Q225 12 300 6" stroke="currentColor" strokeWidth="2" fill="none" />
                  </svg>
                </span>
              </h1>
            </FadeIn>

            <FadeIn delay={160}>
              <p className="mt-8 text-lg md:text-xl leading-relaxed text-slate-light max-w-[640px]">
                ClaudeFirm is an agent template that turns Claude
                into your firm's operational backbone — handling intake, deadlines,
                billing, drafting, and client communications while you focus on
                the work that actually requires a law degree.
              </p>
            </FadeIn>

            <FadeIn delay={240}>
              <div className="mt-12">
                <WaitlistForm dark />
                <div className="mt-5">
                  <Button variant="ghost" href="#what-is">See how it works &darr;</Button>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right: Finder-style file browser */}
          <div className="lg:col-span-5">
            <FadeIn delay={400} direction="left">
              <div className="rounded-lg overflow-hidden border border-white/[0.08] shadow-2xl shadow-black/40">
                {/* Finder title bar */}
                <div className="bg-[#2A2A2E] px-4 py-2.5 flex items-center">
                  <div className="flex gap-[7px]">
                    <div className="w-[11px] h-[11px] rounded-full bg-[#FF5F57]" />
                    <div className="w-[11px] h-[11px] rounded-full bg-[#FEBC2E]" />
                    <div className="w-[11px] h-[11px] rounded-full bg-[#28C840]" />
                  </div>
                  <span className="flex-1 text-center text-[12px] text-white/40 font-body">
                    ~/firm
                  </span>
                </div>

                {/* Column headers */}
                <div className="bg-[#1E1E22] px-4 py-1.5 flex items-center text-[11px] text-white/25 font-body border-b border-white/[0.06]">
                  <span className="flex-1">Name</span>
                  <span className="w-20 text-right">Size</span>
                </div>

                {/* File rows */}
                <div className="bg-[#161619]">
                  {FILES.map((file, i) => (
                    <div
                      key={file.name}
                      className={`flex items-center px-4 py-2.5 gap-3 ${
                        i === 0
                          ? 'bg-[#2B4B8A]/40'
                          : 'hover:bg-white/[0.03]'
                      } ${i < FILES.length - 1 ? 'border-b border-white/[0.04]' : ''} transition-colors`}
                    >
                      <file.icon className="w-4 h-4 text-brass/60 flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <span className="text-[13px] text-white/80 font-mono block">{file.name}</span>
                        <span className="text-[11px] text-white/25">{file.desc}</span>
                      </div>
                      <span className="text-[11px] text-white/25 font-mono w-20 text-right">{file.size}</span>
                    </div>
                  ))}
                </div>

                {/* Status bar */}
                <div className="bg-[#1E1E22] px-4 py-1.5 text-[11px] text-white/20 font-body border-t border-white/[0.06]">
                  5 items
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
