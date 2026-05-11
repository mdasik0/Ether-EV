import type { Dispatch, RefObject, SetStateAction } from "react";
import { FiMessageSquare } from "react-icons/fi";

type Testimonial = { quote: string; name: string; initials: string };

type TestimonialsSectionProps = {
  sectionRef: RefObject<HTMLElement | null>;
  sectionEyebrowClass: string;
  sectionTitleClass: string;
  sectionDescriptionClass: string;
  testimonials: readonly Testimonial[];
  canGoPrev: boolean;
  canGoNext: boolean;
  maxTestimonialIndex: number;
  setTestimonialIndex: Dispatch<SetStateAction<number>>;
  currentTestimonialIndex: number;
  cardsPerView: number;
  slideStepOffsetRem: number;
};

export function TestimonialsSection({
  sectionRef,
  sectionEyebrowClass,
  sectionTitleClass,
  sectionDescriptionClass,
  testimonials,
  canGoPrev,
  canGoNext,
  maxTestimonialIndex,
  setTestimonialIndex,
  currentTestimonialIndex,
  cardsPerView,
  slideStepOffsetRem,
}: TestimonialsSectionProps) {
  return (
    <section
      id="product"
      ref={sectionRef}
      className="w-full border-t border-[#dcdcdc] bg-[#f4f4f4] px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-20 lg:px-10 lg:py-24 xl:px-12 xl:py-28 2xl:px-16 2xl:py-32"
    >
      <div className="mx-auto w-full max-w-[1600px]">
        <p className={`testimonial-reveal ${sectionEyebrowClass}`}>
          <FiMessageSquare className="text-[13px]" aria-hidden />
          Testimonials
        </p>

        <div className="mb-10 grid gap-6 lg:mb-12 lg:grid-cols-[1.25fr_1fr] lg:items-end lg:gap-8">
          <h2 className={`testimonial-reveal ${sectionTitleClass}`}>
            What our drivers and customers say
          </h2>
          <p className={`testimonial-reveal ${sectionDescriptionClass}`}>
            Hear real stories from customers who have experienced the difference with electric mobility, from seamless
            charging to powerful performance on every terrain.
          </p>
        </div>

        <div className="testimonial-reveal mb-6 flex items-center justify-end gap-3">
          <button
            type="button"
            onClick={() => setTestimonialIndex((prev) => Math.max(0, prev - 1))}
            disabled={!canGoPrev}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#d7d9de] bg-white text-lg font-semibold text-[#2a2d33] transition-colors duration-200 hover:bg-[var(--ether-yellow)] hover:text-[#1f2126] disabled:cursor-not-allowed disabled:opacity-40"
            aria-label="Previous testimonials"
          >
            ←
          </button>
          <button
            type="button"
            onClick={() =>
              setTestimonialIndex((prev) => Math.min(maxTestimonialIndex, prev + 1))
            }
            disabled={!canGoNext}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#d7d9de] bg-white text-lg font-semibold text-[#2a2d33] transition-colors duration-200 hover:bg-[var(--ether-yellow)] hover:text-[#1f2126] disabled:cursor-not-allowed disabled:opacity-40"
            aria-label="Next testimonials"
          >
            →
          </button>
        </div>

        <div className="overflow-hidden">
          <div
            className="flex gap-5 transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(calc(-${currentTestimonialIndex} * (${100 / cardsPerView}% + ${slideStepOffsetRem}rem)))`,
            }}
          >
            {testimonials.map((item) => (
              <div
                key={item.name}
                className="testimonial-card-reveal w-full shrink-0 sm:w-[calc(50%-0.625rem)] lg:w-[calc(33.333%-0.833rem)]"
              >
                <article className="flex min-h-[300px] flex-col rounded-2xl border border-[#e8eaef] bg-white p-5 shadow-sm sm:min-h-[320px] sm:p-6">
                  <div className="text-[18px] leading-none tracking-[0.2em] text-[var(--ether-yellow)]">★★★★★</div>
                  <p className="mt-6 max-w-[29ch] text-[clamp(1.65rem,2vw,2.05rem)] font-medium leading-[1.04] tracking-[-0.015em] text-[#212329]">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                  <div className="mt-auto flex items-center gap-3 pt-8">
                    <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#eef0f4] text-xs font-semibold text-[#3a3d45]">
                      {item.initials}
                    </div>
                    <p className="text-lg font-semibold text-[#24262b]">{item.name}</p>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
