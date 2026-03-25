import { useState } from 'react'
import SectionWrapper from './ui/SectionWrapper'
import FadeIn from './ui/FadeIn'
import { FAQS } from '../lib/constants'
import { Plus, Minus } from 'lucide-react'

function FAQItem({ question, answer, index }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-white/[0.06]">
      <button
        className="w-full py-6 flex items-start justify-between text-left cursor-pointer group"
        onClick={() => setOpen(!open)}
      >
        <div className="flex items-start gap-4">
          <span className="font-mono text-[13px] text-brass/40 pt-0.5">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className="font-display font-semibold text-white text-[15px] pr-4 group-hover:text-brass/90 transition-colors duration-300">
            {question}
          </span>
        </div>
        {open
          ? <Minus className="w-4 h-4 text-brass flex-shrink-0 mt-1" />
          : <Plus className="w-4 h-4 text-white/30 flex-shrink-0 mt-1 group-hover:text-brass/60 transition-colors" />
        }
      </button>
      <div className={`overflow-hidden transition-all duration-500 ${open ? 'max-h-96 pb-6' : 'max-h-0'}`}>
        <p className="pl-10 text-slate-light text-[14px] leading-relaxed max-w-2xl">{answer}</p>
      </div>
    </div>
  )
}

export default function FAQ() {
  return (
    <SectionWrapper id="faq" variant="dark">
      <FadeIn>
        <p className="font-display font-semibold text-brass text-[13px] tracking-widest uppercase mb-4">
          FAQ
        </p>
        <h2 className="font-display font-bold text-3xl md:text-[2.75rem] leading-[1.1] tracking-tight text-white">
          Questions lawyers actually ask
        </h2>
      </FadeIn>

      <div className="mt-12 max-w-2xl">
        {FAQS.map((faq, i) => (
          <FadeIn key={i} delay={i * 40}>
            <FAQItem question={faq.question} answer={faq.answer} index={i} />
          </FadeIn>
        ))}
      </div>
    </SectionWrapper>
  )
}
