'use client'

import { ArrowRight, MessageCircle } from 'lucide-react'

export function CureoCtaButton({ href, children, className = '', icon = 'whatsapp', target = '_blank' }) {
  const Icon = icon === 'arrow' ? ArrowRight : MessageCircle

  return (
    <a
      href={href}
      target={target}
      rel={target === '_blank' ? 'noreferrer' : undefined}
      className={`group relative inline-flex min-h-13 w-full items-center justify-center overflow-hidden rounded-full border border-[#86e0a9]/60 bg-[linear-gradient(135deg,_#25d366,_#1fb85a_58%,_#149647)] px-6 py-3.5 text-sm font-heading font-semibold text-white shadow-[0_20px_50px_rgba(37,211,102,0.28)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_28px_70px_rgba(37,211,102,0.34)] sm:min-h-14 sm:w-auto sm:px-7 sm:py-4 sm:text-base ${className}`}
    >
      <span className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.26),_transparent_52%)] opacity-90" />
      <span className="absolute inset-[1px] rounded-full bg-[linear-gradient(135deg,_rgba(255,255,255,0.14),_rgba(255,255,255,0.02))]" />
      <span className="absolute inset-y-[-40%] left-[-30%] w-[44%] rotate-12 bg-[linear-gradient(90deg,_transparent,_rgba(255,255,255,0.34),_transparent)] opacity-0 transition duration-1000 group-hover:left-[110%] group-hover:opacity-100" />
      <span className="relative z-10 flex items-center justify-center gap-2">
          <Icon className="h-5 w-5 shrink-0" />
          <span className="leading-none">{children}</span>
        </span>
      </a>
  )
}

export default CureoCtaButton
