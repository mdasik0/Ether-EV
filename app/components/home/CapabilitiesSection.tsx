import type { RefObject } from "react";
import { FiCpu } from "react-icons/fi";

type CapabilitiesSectionProps = {
  sectionRef: RefObject<HTMLElement | null>;
  sectionEyebrowClass: string;
  sectionTitleClass: string;
  sectionDescriptionClass: string;
  capabilityCardClass: string;
};

export function CapabilitiesSection({
  sectionRef,
  sectionEyebrowClass,
  sectionTitleClass,
  sectionDescriptionClass,
  capabilityCardClass,
}: CapabilitiesSectionProps) {
  return (
    <section
      id="technology"
      ref={sectionRef}
      className="company-capabilities relative w-full overflow-hidden border-t border-[#dcdcdc] bg-white px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-20 lg:px-10 lg:py-24 xl:px-12 xl:py-28 2xl:px-16 2xl:py-32"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.45]"
        aria-hidden
        style={{
          backgroundImage: `
              linear-gradient(90deg, rgba(252,184,19,0.06) 1px, transparent 1px),
              linear-gradient(rgba(252,184,19,0.06) 1px, transparent 1px),
              radial-gradient(circle at 20% 30%, rgba(252,184,19,0.045) 0%, transparent 45%),
              radial-gradient(circle at 80% 70%, rgba(252,184,19,0.035) 0%, transparent 40%)
            `,
          backgroundSize: "56px 56px, 56px 56px, 100% 100%, 100% 100%",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-[1600px]">
        <p className={`about-reveal ${sectionEyebrowClass}`}>
          <FiCpu className="text-[13px]" aria-hidden />
          EtherTech EV Capabilities
        </p>

        <div className="mb-16 grid gap-6 lg:grid-cols-[1.25fr_1fr] lg:items-end lg:gap-8">
          <h2 className={`about-reveal ${sectionTitleClass}`}>
            Why Choose EtherTech EV
          </h2>
          <p className={`about-reveal ${sectionDescriptionClass}`}>
            From discovery to plug-in, Ether EV connects you with dependable charging intelligence, transparent station
            data, and a platform built for drivers who expect more than a pin on a map—because your time, range, and peace
            of mind all matter.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-5">
          <article className={capabilityCardClass}>
            <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#fff3d3] text-sm font-bold text-[#1f2126] transition-colors duration-300 group-hover:bg-white/95">
              01
            </span>
            <h3 className="mt-6 text-lg font-bold leading-snug text-[#141619] sm:text-xl">Time and Stress Saver</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#5f636b] transition-colors duration-300 group-hover:text-[#1f2126]/90">
              Ether EV&apos;s precise charger location and live availability help you route faster and avoid the stress
              of hunting for an open bay when range is tight.
            </p>
          </article>

          <article className={capabilityCardClass}>
            <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#fff3d3] text-sm font-bold text-[#1f2126] transition-colors duration-300 group-hover:bg-white/95">
              02
            </span>
            <h3 className="mt-6 text-lg font-bold leading-snug text-[#141619] sm:text-xl">Contribute to Sustainability</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#5f636b] transition-colors duration-300 group-hover:text-[#1f2126]/90">
              Every session you start through Ether EV supports cleaner miles—less idle searching, smarter charging, and
              lower emissions across your weekly drive pattern.
            </p>
          </article>

          <article className={capabilityCardClass}>
            <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#fff3d3] text-sm font-bold text-[#1f2126] transition-colors duration-300 group-hover:bg-white/95">
              03
            </span>
            <h3 className="mt-6 text-lg font-bold leading-snug text-[#141619] sm:text-xl">Reliable Charging</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#5f636b] transition-colors duration-300 group-hover:text-[#1f2126]/90">
              Station quality scores, plug-type filters, and uptime signals mean fewer surprises—so you can trust the
              next stop is ready when you arrive.
            </p>
          </article>

          <article className={capabilityCardClass}>
            <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#fff3d3] text-sm font-bold text-[#1f2126] transition-colors duration-300 group-hover:bg-white/95">
              04
            </span>
            <h3 className="mt-6 text-lg font-bold leading-snug text-[#141619] sm:text-xl">Join the EV Community</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#5f636b] transition-colors duration-300 group-hover:text-[#1f2126]/90">
              Connect with drivers, fleet operators, and builders who care about the future of transport—shared routes,
              feedback loops, and better infrastructure for everyone.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
