export default function Button({ variant = 'primary', href, onClick, children, className = '', type }) {
  const base = 'inline-flex items-center justify-center font-display font-semibold text-sm tracking-wide transition-all duration-300 cursor-pointer'
  const variants = {
    primary: 'px-7 py-3.5 bg-brass text-ink rounded hover:bg-brass-light hover:shadow-[0_0_24px_rgba(196,150,60,0.3)]',
    secondary: 'px-7 py-3.5 border border-brass/40 text-brass rounded hover:border-brass hover:bg-brass/5',
    ghost: 'text-brass hover:text-brass-light tracking-widest uppercase text-xs',
  }
  const cls = `${base} ${variants[variant]} ${className}`

  if (href) {
    return <a href={href} className={cls}>{children}</a>
  }
  return <button type={type} onClick={onClick} className={cls}>{children}</button>
}
