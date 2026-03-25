import SectionWrapper from './ui/SectionWrapper'
import FadeIn from './ui/FadeIn'
import { CONFIG_FILES } from '../lib/constants'

export default function WhatIs() {
  return (
    <SectionWrapper id="what-is" variant="dark" noisy>
      <FadeIn>
        <p className="font-display font-semibold text-brass text-[13px] tracking-widest uppercase mb-4">
          The Architecture
        </p>
        <h2 className="font-display font-bold text-3xl md:text-[2.75rem] leading-[1.1] tracking-tight text-white">
          Five files. Your entire firm's
          <br className="hidden md:block" />
          operating system.
        </h2>
        <p className="mt-5 text-slate-light text-lg leading-relaxed max-w-[580px]">
          Persistent instruction files that fire automatically in context.
          Set it up once. It compounds from there.
        </p>
      </FadeIn>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.06] rounded-lg overflow-hidden">
        {CONFIG_FILES.map((file, i) => (
          <FadeIn key={file.name} delay={i * 70}>
            <div className="bg-ink-light p-7 h-full hover:bg-ink-mid transition-colors duration-300 group">
              <div className="flex items-center gap-3 mb-4">
                <file.icon className="w-[18px] h-[18px] text-brass/70 transition-colors duration-300 group-hover:text-brass" />
                <span className="font-mono text-[13px] text-brass font-semibold tracking-wide">{file.name}</span>
              </div>
              <p className="text-slate-light text-[14px] leading-relaxed">{file.description}</p>
            </div>
          </FadeIn>
        ))}

        {/* Code preview cell */}
        <FadeIn delay={CONFIG_FILES.length * 70}>
          <div className="bg-ink-light p-7 h-full flex flex-col justify-center md:col-span-2 lg:col-span-1">
            <div className="font-mono text-[12px] leading-[1.8] text-white/30">
              <div><span className="text-brass/50">#</span> AGENTS.md</div>
              <div className="text-white/50">role: <span className="text-brass/70">Managing Partner</span></div>
              <div className="text-white/50">safety: <span className="text-brass/70">cardinal_rules</span></div>
              <div className="text-white/50">skills: <span className="text-brass/70">[review, draft,</span></div>
              <div className="text-white/50 pl-8"><span className="text-brass/70">research, comms]</span></div>
            </div>
          </div>
        </FadeIn>
      </div>
    </SectionWrapper>
  )
}
