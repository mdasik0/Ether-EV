import Image from "next/image";
import type { RefObject } from "react";
import { FiInfo } from "react-icons/fi";

type AboutSectionProps = {
  sectionRef: RefObject<HTMLElement | null>;
  sectionEyebrowClass: string;
  sectionTitleClass: string;
  sectionDescriptionClass: string;
};

export function AboutSection({
  sectionRef,
  sectionEyebrowClass,
  sectionTitleClass,
  sectionDescriptionClass,
}: AboutSectionProps) {
  return (
    <section
      id="about"
      ref={sectionRef}
      className="about-us w-full border border-[#dcdcdc] bg-[#f4f4f4] px-4 py-10 sm:px-6 sm:py-12 md:px-8 md:py-14 lg:px-10 lg:py-16 xl:px-12 xl:py-20 2xl:px-16 2xl:py-24"
    >
      <div className="mx-auto w-full max-w-[1600px]">
        <p className={`about-reveal ${sectionEyebrowClass}`}>
          <FiInfo className="text-[13px]" aria-hidden />
          About EtherTech EV
        </p>

        <div className="mb-16 grid gap-6 lg:grid-cols-[1.25fr_1fr] lg:items-end lg:gap-8">
          <h2 className={`about-reveal ${sectionTitleClass}`}>
            Going Electric With Ether Tech EV Is Simple And Fast
          </h2>
          <p className={`about-reveal ${sectionDescriptionClass}`}>
            We have streamlined every step so you can move from first inquiry to delivery without friction. Choose your
            model, confirm your options, and our team handles preparation, charging setup guidance, and final handover.
          </p>
        </div>

        <div className="grid gap-6 rounded-xl border border-[#dcdcdc] bg-[#f7f7f7] p-4 sm:p-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch lg:gap-8">
          <div className="flex h-full flex-col rounded-lg bg-white p-5 sm:p-6">
            <h3 className="about-reveal text-[clamp(1.6rem,2.4vw,2.3rem)] font-medium leading-tight text-[#24262b]">
              Reserve Your Ether EV
            </h3>
            <p className="about-reveal mt-3 max-w-[34ch] text-sm leading-relaxed text-[#5f636b]">
              Secure your production slot with priority scheduling, tailored configuration support, and direct assistance
              from our delivery team.
            </p>

            <button
              type="button"
              className="about-reveal mt-auto w-fit rounded-md bg-[#111214] px-5 py-2 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[var(--ether-yellow)] hover:text-[#1f2126]"
            >
              Pre-Order Now
            </button>
          </div>

          <div className="about-reveal-image relative min-h-[260px] overflow-hidden rounded-lg sm:min-h-[340px] lg:min-h-[380px]">
            <Image
              src="/header-image/header-image-4.jpg"
              alt="Ether EV reservation and delivery process"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div className="border-t border-[#dcdcdc] pt-5 lg:col-span-2">
            <div className="grid gap-5 sm:grid-cols-3 sm:gap-6">
              <div className="about-reveal">
                <h4 className="text-sm font-semibold text-[#222429]">Talk With Our Team</h4>
                <p className="mt-2 text-xs leading-relaxed text-[#5f636b] sm:text-sm">
                  Reach out via call, WhatsApp, or email for personalized guidance.
                </p>
              </div>
              <div className="about-reveal">
                <h4 className="text-sm font-semibold text-[#222429]">Confirm Configuration</h4>
                <p className="mt-2 text-xs leading-relaxed text-[#5f636b] sm:text-sm">
                  Finalize variant, battery range, and options with a small booking amount.
                </p>
              </div>
              <div className="about-reveal">
                <h4 className="text-sm font-semibold text-[#222429]">Delivery & Onboarding</h4>
                <p className="mt-2 text-xs leading-relaxed text-[#5f636b] sm:text-sm">
                  Your Ether EV arrives fully inspected and ready, with charging orientation included.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
