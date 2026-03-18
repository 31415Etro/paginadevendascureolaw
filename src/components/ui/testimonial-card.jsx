import { Star } from 'lucide-react'

import { cn } from '../../lib/utils'

export function TestimonialCard({ author, text, href, className }) {
  const Card = href ? 'a' : 'div'

  return (
    <Card
      {...(href ? { href, target: '_blank', rel: 'noreferrer' } : {})}
      className={cn(
        'flex max-w-[340px] min-w-[300px] flex-col rounded-[28px] border border-[var(--color-border)] bg-[linear-gradient(180deg,_#ffffff,_#f8fbff)] p-5 text-start shadow-[0_20px_60px_rgba(15,23,42,0.06)] transition-colors duration-300 hover:bg-[linear-gradient(180deg,_#ffffff,_#f3f9ff)] sm:p-6',
        className,
      )}
    >
      <div className="flex items-center gap-1 text-[var(--color-primary)]">
        {[...Array(5)].map((_, index) => (
          <Star key={index} className="h-4 w-4 fill-current" />
        ))}
      </div>

      <p className="mt-5 font-heading text-[1.55rem] leading-8 text-slate-900 sm:text-[1.7rem] sm:leading-9">“{text}”</p>

      <div className="mt-6 border-t border-slate-100 pt-5">
        <h3 className="text-base font-semibold leading-none text-slate-900">{author.name}</h3>
        <p className="mt-1 text-sm text-slate-500">{author.handle}</p>
      </div>
    </Card>
  )
}
