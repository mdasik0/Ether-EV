import Image from "next/image";
import type { RefObject } from "react";
import { FiMenu } from "react-icons/fi";

type NavItem = { label: string; target: string };

type HeaderSectionProps = {
  sectionRef: RefObject<HTMLElement | null>;
  imageFrameRef: RefObject<HTMLDivElement | null>;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  navItems: readonly NavItem[];
  handleNavClick: (targetId: string) => void;
  activeImage: string;
  setActiveImage: (src: string) => void;
  thumbs: readonly string[];
};

export function HeaderSection({
  sectionRef,
  imageFrameRef,
  mobileMenuOpen,
  setMobileMenuOpen,
  navItems,
  handleNavClick,
  activeImage,
  setActiveImage,
  thumbs,
}: HeaderSectionProps) {
  return (
    <section
      id="home"
      ref={sectionRef}
      className="grid w-full min-h-screen overflow-hidden border border-[#dcdcdc] bg-[#f4f4f4] px-4 py-5 sm:px-6 sm:py-6 md:grid-cols-[1fr_1fr] md:px-8 md:py-8 lg:px-10 lg:py-10 xl:px-12 xl:py-12 2xl:px-16 2xl:py-14"
    >
      <div
        className={`fixed inset-0 z-40 bg-black/30 transition-opacity duration-300 md:hidden ${
          mobileMenuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden
      />
      <aside
        className={`fixed right-0 top-0 z-50 h-auto w-[280px] rounded-bl-2xl border-l border-b border-[#d3d7de] bg-white p-5 shadow-xl transition-transform duration-300 md:hidden ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="mb-4 flex items-center justify-between">
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#4c515a]">Menu</p>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(false)}
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#d0d4dc] text-[#2b2f36]"
            aria-label="Close navigation menu"
          >
            ✕
          </button>
        </div>
        <nav className="flex flex-col gap-2">
          {navItems.map((item) => (
            <button
              key={`mobile-nav-${item.target}`}
              type="button"
              onClick={() => handleNavClick(item.target)}
              className="inline-flex items-center rounded-lg border border-[#d9dce2] px-3 py-2 text-left text-sm font-medium text-[#272b32] transition-colors duration-200 hover:bg-[var(--ether-yellow)] hover:text-[#1f2126]"
            >
              {item.label}
            </button>
          ))}
        </nav>
      </aside>

      <div className="mb-4 flex items-center justify-between rounded-xl border border-[#dcdcdc] bg-white px-4 py-3 md:hidden">
        <div className="relative h-7 w-[150px]">
          <Image
            src="/etherEvLogo.png"
            alt="Ether EV logo"
            fill
            className="object-contain object-left"
            sizes="150px"
          />
        </div>
        <button
          type="button"
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Open navigation menu"
          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#cfd3db] text-[#23262d]"
        >
          <FiMenu className="text-lg" />
        </button>
      </div>

      <div
        ref={imageFrameRef}
        className="relative order-2 min-h-[260px] rounded-xl overflow-hidden bg-[#101115] sm:min-h-[360px] md:order-1 md:min-h-[520px] lg:min-h-[620px] xl:min-h-[700px] 2xl:min-h-[760px]"
      >
        <Image
          src={activeImage}
          alt="Electric car on road"
          fill
          priority
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/5 to-black/10" />

        <div className="relative z-10 hidden h-full flex-col justify-between p-5 sm:p-7 md:flex">
          <div className="relative h-8 w-[160px] sm:h-12 sm:w-[320px]">
            <Image
              src="/etherEvLogo.png"
              alt="Ether EV logo"
              fill
              className="object-contain object-left brightness-0 invert"
              sizes="220px"
            />
          </div>
          <p className="intro-fade-item max-w-[20ch] text-2xl font-medium leading-tight text-white sm:max-w-[40ch] sm:text-[2.1rem]">
            Experience smarter, cleaner, and more sustainable mobility powered
            by next-generation electric innovation.
          </p>
        </div>
      </div>

      <div className="order-3 flex h-full flex-col px-0 pt-5 sm:pt-6 md:order-2 md:pl-6 md:pt-0 lg:pl-8 xl:pl-10">
        <div className="mb-8 hidden items-center justify-between gap-3 sm:mb-10 md:mb-12 md:flex">
          <nav className="flex flex-wrap items-center gap-2 text-sm text-[#24262b] sm:gap-2.5 sm:text-base">
            {navItems.map((item) => (
              <a
                key={`desktop-nav-${item.target}`}
                href={`#${item.target}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.target);
                }}
                className="inline-flex items-center rounded-full border border-[#1f2126]/35 px-3 py-1.5 font-medium transition-colors duration-200 hover:bg-[var(--ether-yellow)] hover:text-[#1f2126] sm:px-5"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="order-2 md:order-1">
          <div className="intro-fade-item mb-4 max-w-[12ch] text-[clamp(1.8rem,5vw,4.35rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-[#26282d] sm:mb-6 sm:leading-[1.02] lg:mb-8 lg:leading-[0.98]">
            Drive the Future with{" "}
            <span className="text-[var(--ether-yellow)]">Ether Tech EV</span>
          </div>
        </div>

        <div className="order-1 md:order-3 md:mt-auto">
          <div className="intro-fade-item mb-6 flex flex-wrap items-center gap-3 sm:gap-4 xl:gap-6">
            {thumbs.map((src, i) => {
              const isActive = activeImage === src;
              return (
                <button
                  key={src}
                  type="button"
                  onClick={() => setActiveImage(src)}
                  className={`relative h-[74px] w-[74px] overflow-hidden rounded-xl border bg-white p-0 transition-all duration-200 sm:h-[86px] sm:w-[86px] lg:h-[95px] lg:w-[95px] ${
                    isActive
                      ? "border-transparent outline outline-2 outline-[#6a6d73] outline-offset-0"
                      : "border-[#ececec] hover:border-[#b8bbc1]"
                  }`}
                  aria-label={`Show vehicle view ${i + 1}`}
                  aria-pressed={isActive}
                >
                  <Image
                    src={src}
                    alt={`Vehicle view ${i + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 74px, (max-width: 1024px) 86px, 95px"
                  />
                </button>
              );
            })}
          </div>
        </div>
        <div className="order-4 mt-6 md:order-2 md:mt-0">
          <button className="w-fit rounded-full bg-[#23242a] px-5 py-2.5 font-light font-semibold text-white shadow-[0_8px_18px_rgba(35,36,42,0.25)] transition-transform duration-200 hover:-translate-y-0.5">
            Explore Now
          </button>
        </div>
        <p className="intro-fade-item order-3 max-w-[58ch] text-[15px] leading-relaxed text-[#73757c] md:order-4">
          Experience powerful, zero-emission driving with cutting edge
          technology designed for tomorrow. Discover how electric mobility
          can transform the way you move, live, and breathe.
        </p>
      </div>
    </section>
  );
}
