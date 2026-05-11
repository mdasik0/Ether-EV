import Image from "next/image";
import type { RefObject } from "react";
import { FiUsers } from "react-icons/fi";

type TeamMember = { name: string; role: string; image: string };

type TeamSectionProps = {
  sectionRef: RefObject<HTMLElement | null>;
  sectionEyebrowClass: string;
  sectionTitleClass: string;
  sectionDescriptionClass: string;
  teamMembers: readonly TeamMember[];
};

export function TeamSection({
  sectionRef,
  sectionEyebrowClass,
  sectionTitleClass,
  sectionDescriptionClass,
  teamMembers,
}: TeamSectionProps) {
  return (
    <section
      id="team"
      ref={sectionRef}
      className="w-full border-t border-[#dcdcdc] bg-[#f4f4f4] px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-20 lg:px-10 lg:py-24 xl:px-12 xl:py-28 2xl:px-16 2xl:py-32"
    >
      <div className="mx-auto w-full max-w-[1600px]">
        <p className={`team-reveal ${sectionEyebrowClass}`}>
          <FiUsers className="text-[13px]" aria-hidden />
          Team
        </p>

        <div className="mb-10 grid gap-6 lg:mb-12 lg:grid-cols-[1.25fr_1fr] lg:items-end lg:gap-8">
          <h2 className={`team-reveal ${sectionTitleClass}`}>Leadership team driving Ether EV</h2>
          <p className={`team-reveal ${sectionDescriptionClass}`}>
            Meet the people shaping our vision, operations, and growth strategy to build a smarter, cleaner mobility
            ecosystem for everyone.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-5">
          {teamMembers.map((member) => (
            <article key={member.name} className="team-card-reveal rounded-xl border border-[#e5e7ec] bg-white p-3 shadow-sm">
              <div className="relative min-h-[280px] overflow-hidden rounded-lg bg-[#d7dbe2] sm:min-h-[320px]">
                <Image
                  src={member.image}
                  alt={`${member.name} portrait`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="px-1 pb-1 pt-3">
                <h3 className="text-base font-semibold text-[#1f2126]">{member.name}</h3>
                <p className="mt-1 text-sm text-[#7a7e86]">{member.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
