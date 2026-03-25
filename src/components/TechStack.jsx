import SectionWrapper from './ui/SectionWrapper'
import FadeIn from './ui/FadeIn'
import { Monitor, Cloud, FileCode, FolderOpen, PlugZap } from 'lucide-react'

const FEATURES = [
  { icon: Cloud, text: 'Full support for Google Workspace — Gmail, Calendar, Drive, Docs' },
  { icon: Monitor, text: 'Full support for Microsoft 365 — Outlook, Calendar, OneDrive, Word' },
  { icon: FileCode, text: 'Claude operates at the XML level inside Word documents: real tracked changes, real formatting, real redlines' },
  { icon: PlugZap, text: 'Integration points for practice management software — Clio, MyCase, PracticePanther, Smokeball' },
  { icon: FolderOpen, text: 'Folder structures, deadline trackers, and conflict databases all work file-based — no platform dependency' },
]

export default function TechStack() {
  return (
    <SectionWrapper id="tech-stack" variant="light">
      <FadeIn>
        <p className="font-display font-semibold text-brass-muted text-[13px] tracking-widest uppercase mb-4">
          Integrations
        </p>
        <h2 className="font-display font-bold text-3xl md:text-[2.75rem] leading-[1.1] tracking-tight">
          Works with your stack
        </h2>
      </FadeIn>

      <div className="mt-14 space-y-1">
        {FEATURES.map((feature, i) => (
          <FadeIn key={i} delay={i * 60}>
            <div className="group flex items-start gap-5 py-5 border-b border-gray-200/80 last:border-0">
              <feature.icon className="w-5 h-5 text-slate/60 mt-0.5 flex-shrink-0 group-hover:text-brass-muted transition-colors duration-300" />
              <p className="text-[15px] text-gray-700 leading-relaxed">{feature.text}</p>
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={350}>
        <p className="mt-10 text-slate text-[14px]">
          Document output in <span className="font-mono text-[13px] bg-gray-100 px-1.5 py-0.5 rounded">.docx</span> — the universal legal document format — regardless of which stack you use.
        </p>
      </FadeIn>
    </SectionWrapper>
  )
}
