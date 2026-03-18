import { cn } from '../../lib/utils'
import { TestimonialCard } from './testimonial-card'

export function TestimonialsSection({ title, description, testimonials, className }) {
  const duplicatedTestimonials = [...testimonials, ...testimonials]

  return (
    <section className={cn('bg-[var(--color-bg)] py-16 sm:py-24', className)}>
      <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-10 px-4 text-center sm:gap-16 sm:px-6 lg:px-8">
        <div className="flex max-w-3xl flex-col items-center gap-4 sm:gap-8">
          <h2 className="max-w-[820px] font-heading text-3xl font-semibold leading-tight text-slate-950 sm:text-5xl sm:leading-tight">
            {title}
          </h2>
          {description ? (
            <p className="max-w-[680px] text-base font-medium leading-7 text-slate-600 sm:text-xl sm:leading-8">
              {description}
            </p>
          ) : null}
        </div>

        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <div className="group hidden w-full overflow-hidden p-2 [--duration:42s] [--gap:1rem] sm:flex">
            <div className="flex w-max min-w-full shrink-0 animate-marquee flex-row [gap:var(--gap)] group-hover:[animation-play-state:paused]">
              {duplicatedTestimonials.map((testimonial, index) => (
                <TestimonialCard key={index} {...testimonial} />
              ))}
            </div>
          </div>

          <div className="grid w-full gap-4 sm:hidden">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} className="max-w-none min-w-0" />
            ))}
          </div>

          <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-1/4 bg-gradient-to-r from-white via-white/90 to-transparent sm:block" />
          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/4 bg-gradient-to-l from-white via-white/90 to-transparent sm:block" />
        </div>
      </div>
    </section>
  )
}
