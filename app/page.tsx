"use client";

import Image from "next/image";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiCpu, FiInfo, FiMenu, FiMessageSquare, FiPhoneCall, FiUsers } from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

const navItems = [
  { label: "Home", target: "home" },
  { label: "About Us", target: "about" },
  { label: "Capabilities", target: "technology" },
  { label: "Team", target: "team" },
  { label: "Testimonials", target: "product" },
  { label: "Contact", target: "contact" },
] as const;
const thumbs = [
  "/header-image/header-image-1.jpeg",
  "/header-image/header-image-2.jpg",
  "/header-image/header-image-3.jpg",
  "/header-image/header-image-4.jpg",
] as const;
const testimonials = [
  {
    quote:
      "This electric vehicle completely changed my daily commute. It's quiet, responsive, and the charging network is way more accessible than I expected.",
    name: "Amanda Rivera",
    initials: "AR",
  },
  {
    quote:
      "As someone who drives long distances, I'm impressed by the comfort and battery range. It's built for real-world use, not just show.",
    name: "Jordan Riley",
    initials: "JR",
  },
  {
    quote:
      "The ride quality is smooth, tech is intuitive, and the customer support is excellent. Easily one of the best EV experiences I've had.",
    name: "James Lin",
    initials: "JL",
  },
  {
    quote:
      "Charging has become effortless. The route planning and station visibility make weekend road trips far more predictable and stress-free.",
    name: "Priya Sen",
    initials: "PS",
  },
  {
    quote:
      "The build quality feels premium, and I love how quickly the app responds. It gives me confidence every time I head out.",
    name: "Noah Carter",
    initials: "NC",
  },
  {
    quote:
      "From onboarding to daily driving, the whole experience is polished. It feels like a complete EV ecosystem, not just a vehicle.",
    name: "Fatima Rahman",
    initials: "FR",
  },
] as const;
const teamMembers = [
  {
    name: "Anis Hannan Chowdhury",
    role: "Chairman",
    image: "/users/chairman.jpg",
  },
  {
    name: "Syed Sahdab Mahbub",
    role: "Managing Director",
    image: "/users/Managing%20Director.jpg",
  },
  {
    name: "Nabil Hossain",
    role: "Director",
    image: "/users/director-one.jpg",
  },
  {
    name: "Farzana Karim",
    role: "Director",
    image: "/users/director-two.jpeg",
  },
] as const;

export default function Homepage() {
  const sectionTitleClass =
    "max-w-[20ch] text-[clamp(1.9rem,4.1vw,3.4rem)] font-semibold leading-[1.14] tracking-[-0.02em] text-[#24262b] sm:leading-[1.08] lg:leading-[1.06]";
  const sectionDescriptionClass =
    "max-w-[60ch] text-sm leading-relaxed text-[#5f636b] sm:text-[15px]";
  const sectionEyebrowClass =
    "mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#666b73]";
  const capabilityCardClass =
    "cap-card-reveal group flex min-h-[240px] flex-col rounded-2xl border border-[#e8eaef] bg-white p-6 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:border-transparent hover:bg-[var(--ether-yellow)] sm:min-h-[260px] sm:p-7 lg:min-h-[280px] cursor-pointer";

  const [activeImage, setActiveImage] = useState<string>(
    "/header-image/header-image-1.jpeg",
  );
  const [cardsPerView, setCardsPerView] = useState(3);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const imageFrameRef = useRef<HTMLDivElement>(null);
  const headerSectionRef = useRef<HTMLElement>(null);
  const aboutSectionRef = useRef<HTMLElement>(null);
  const capabilitiesSectionRef = useRef<HTMLElement>(null);
  const teamSectionRef = useRef<HTMLElement>(null);
  const testimonialSectionRef = useRef<HTMLElement>(null);
  const contactSectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const frame = imageFrameRef.current;
    if (!frame) return;

    gsap.killTweensOf(frame);
    gsap.fromTo(
      frame,
      { opacity: 0.58, scale: 1.015 },
      { opacity: 1, scale: 1, duration: 0.5, ease: "power2.out" },
    );
  }, [activeImage]);

  useEffect(() => {
    const section = headerSectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".intro-fade-item",
        { opacity: 0, y: -28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          stagger: 0.16,
          ease: "power3.out",
          clearProps: "opacity,transform",
        },
      );
    }, section);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth >= 1024) {
        setCardsPerView(3);
      } else if (window.innerWidth >= 640) {
        setCardsPerView(2);
      } else {
        setCardsPerView(1);
      }
    };

    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) {
      document.body.style.overflow = "";
      return;
    }
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  useLayoutEffect(() => {
    const section = aboutSectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const q = gsap.utils.selector(section);
      const textBlocks = q(".about-reveal");
      const imageEl = section.querySelector<HTMLElement>(".about-reveal-image");

      // Hidden before first paint (avoids one-frame full-opacity flash when ScrollTrigger plays)
      gsap.set(textBlocks, { autoAlpha: 0, y: -48 });
      if (imageEl) gsap.set(imageEl, { autoAlpha: 0, y: -36, scale: 1.04 });

      const st = {
        trigger: section,
        start: "top 80%",
        toggleActions: "play none none none",
      };

      gsap.to(textBlocks, {
        autoAlpha: 1,
        y: 0,
        duration: 0.8,
        delay: 0.35,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: st,
      });

      if (imageEl) {
        gsap.to(imageEl, {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 0.85,
          delay: 0.5,
          ease: "power2.out",
          scrollTrigger: st,
        });
      }
    }, section);

    return () => ctx.revert();
  }, []);

  useLayoutEffect(() => {
    const section = capabilitiesSectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const q = gsap.utils.selector(section);
      const textItems = q(".cap-text-reveal");
      const cardItems = q(".cap-card-reveal");

      gsap.set(textItems, { autoAlpha: 0, y: -48 });
      gsap.set(cardItems, { autoAlpha: 0, x: 56 });

      const scrollDefaults = {
        trigger: section,
        start: "top 80%",
        toggleActions: "play none none none",
      };

      gsap.to(textItems, {
        autoAlpha: 1,
        y: 0,
        duration: 0.8,
        delay: 0.35,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: scrollDefaults,
      });

      gsap.to(cardItems, {
        autoAlpha: 1,
        x: 0,
        duration: 0.82,
        delay: 0.48,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: scrollDefaults,
      });
    }, section);

    return () => ctx.revert();
  }, []);

  useLayoutEffect(() => {
    const section = testimonialSectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const q = gsap.utils.selector(section);
      const textItems = q(".testimonial-reveal");
      const cards = q(".testimonial-card-reveal");

      gsap.set(textItems, { autoAlpha: 0, y: -48 });
      gsap.set(cards, { autoAlpha: 0, y: 38 });

      const scrollDefaults = {
        trigger: section,
        start: "top 80%",
        toggleActions: "play none none none",
      };

      gsap.to(textItems, {
        autoAlpha: 1,
        y: 0,
        duration: 0.8,
        delay: 0.35,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: scrollDefaults,
      });

      gsap.to(cards, {
        autoAlpha: 1,
        y: 0,
        duration: 0.82,
        delay: 0.5,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: scrollDefaults,
      });
    }, section);

    return () => ctx.revert();
  }, []);

  useLayoutEffect(() => {
    const section = teamSectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const q = gsap.utils.selector(section);
      const textItems = q(".team-reveal");
      const cards = q(".team-card-reveal");

      gsap.set(textItems, { autoAlpha: 0, y: -48 });
      gsap.set(cards, { autoAlpha: 0, x: 52 });

      const scrollDefaults = {
        trigger: section,
        start: "top 80%",
        toggleActions: "play none none none",
      };

      gsap.to(textItems, {
        autoAlpha: 1,
        y: 0,
        duration: 0.8,
        delay: 0.35,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: scrollDefaults,
      });

      gsap.to(cards, {
        autoAlpha: 1,
        x: 0,
        duration: 0.82,
        delay: 0.48,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: scrollDefaults,
      });
    }, section);

    return () => ctx.revert();
  }, []);

  useLayoutEffect(() => {
    const section = contactSectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const q = gsap.utils.selector(section);
      const textItems = q(".contact-reveal");
      const contentItems = q(".contact-content-reveal");

      gsap.set(textItems, { autoAlpha: 0, y: -48 });
      gsap.set(contentItems, { autoAlpha: 0, y: 34 });

      const scrollDefaults = {
        trigger: section,
        start: "top 80%",
        toggleActions: "play none none none",
      };

      gsap.to(textItems, {
        autoAlpha: 1,
        y: 0,
        duration: 0.8,
        delay: 0.35,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: scrollDefaults,
      });

      gsap.to(contentItems, {
        autoAlpha: 1,
        y: 0,
        duration: 0.82,
        delay: 0.48,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: scrollDefaults,
      });
    }, section);

    return () => ctx.revert();
  }, []);

  const maxTestimonialIndex = Math.max(0, testimonials.length - cardsPerView);
  const currentTestimonialIndex = Math.min(testimonialIndex, maxTestimonialIndex);
  const canGoPrev = currentTestimonialIndex > 0;
  const canGoNext = currentTestimonialIndex < maxTestimonialIndex;
  const slideStepOffsetRem = 1.25 / cardsPerView;
  const smoothScrollTo = (targetY: number, duration = 950) => {
    const startY = window.scrollY;
    const distance = targetY - startY;
    let startTime: number | null = null;

    const easeInOutCubic = (t: number) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const animate = (time: number) => {
      if (startTime === null) startTime = time;
      const elapsed = time - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeInOutCubic(progress);
      window.scrollTo(0, startY + distance * eased);
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  };

  const handleNavClick = (targetId: string) => {
    const target = document.getElementById(targetId);
    if (!target) return;
    const targetTop = target.getBoundingClientRect().top + window.scrollY;
    smoothScrollTo(targetTop, 980);
    setMobileMenuOpen(false);
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f2f2f2] text-[#24262b]">
      <section
        id="home"
        ref={headerSectionRef}
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

      {/* about us */}
      <section
        id="about"
        ref={aboutSectionRef}
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

      <section
        id="technology"
        ref={capabilitiesSectionRef}
        className="company-capabilities relative w-full overflow-hidden border-t border-[#dcdcdc] bg-white px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-20 lg:px-10 lg:py-24 xl:px-12 xl:py-28 2xl:px-16 2xl:py-32"
      >
        {/* Subtle map / grid texture */}
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
      <section
        id="team"
        ref={teamSectionRef}
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

      <section
        id="product"
        ref={testimonialSectionRef}
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

      <section
        id="contact"
        ref={contactSectionRef}
        className="w-full border-t border-[#dcdcdc] bg-white px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-20 lg:px-10 lg:py-24 xl:px-12 xl:py-28 2xl:px-16 2xl:py-32"
      >
        <div className="mx-auto w-full max-w-[1600px]">
          <p className={`contact-reveal ${sectionEyebrowClass}`}>
            <FiPhoneCall className="text-[13px]" aria-hidden />
            Contact
          </p>

          <div className="mb-10 grid gap-6 lg:mb-12 lg:grid-cols-[1.25fr_1fr] lg:items-end lg:gap-8">
            <h2 className={`contact-reveal ${sectionTitleClass}`}>Let&apos;s power your EV journey together</h2>
            <p className={`contact-reveal ${sectionDescriptionClass}`}>
              Have questions about products, charging, or partnerships? Send us a message and our team will get back to
              you with the right guidance.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:gap-8">
            <div className="contact-content-reveal rounded-2xl border border-[#e8eaef] bg-[#f8f8f8] p-6 sm:p-7">
              <h3 className="text-xl font-semibold text-[#1f2126]">Reach us directly</h3>
              <div className="mt-6 space-y-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#70747d]">Email</p>
                  <a
                    href="mailto:info@ethertech.ltd"
                    className="mt-1 inline-block text-base font-medium text-[#24262b] transition-colors duration-200 hover:text-[var(--ether-yellow)]"
                  >
                    info@ethertech.ltd
                  </a>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#70747d]">Phone</p>
                  <a
                    href="tel:+8801326880983"
                    className="mt-1 inline-block text-base font-medium text-[#24262b] transition-colors duration-200 hover:text-[var(--ether-yellow)]"
                  >
                    +880 1326-880983
                  </a>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#70747d]">Office</p>
                  <p className="mt-1 max-w-[30ch] text-sm leading-relaxed text-[#5f636b]">
                    Jatramura, Tarabo, Kachpur, Narayanganj
                  </p>
                </div>
              </div>
            </div>

            <form className="contact-content-reveal rounded-2xl border border-[#e8eaef] bg-white p-6 shadow-sm sm:p-7">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="flex flex-col gap-2 sm:col-span-1">
                  <span className="text-sm font-medium text-[#2c2f35]">Full name</span>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    className="h-11 rounded-lg border border-[#d9dce2] px-3 text-sm text-[#24262b] outline-none transition-colors duration-200 focus:border-[var(--ether-yellow)]"
                  />
                </label>
                <label className="flex flex-col gap-2 sm:col-span-1">
                  <span className="text-sm font-medium text-[#2c2f35]">Phone number</span>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+880..."
                    className="h-11 rounded-lg border border-[#d9dce2] px-3 text-sm text-[#24262b] outline-none transition-colors duration-200 focus:border-[var(--ether-yellow)]"
                  />
                </label>
                <label className="flex flex-col gap-2 sm:col-span-2">
                  <span className="text-sm font-medium text-[#2c2f35]">Email address</span>
                  <input
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    className="h-11 rounded-lg border border-[#d9dce2] px-3 text-sm text-[#24262b] outline-none transition-colors duration-200 focus:border-[var(--ether-yellow)]"
                  />
                </label>
                <label className="flex flex-col gap-2 sm:col-span-2">
                  <span className="text-sm font-medium text-[#2c2f35]">Your message</span>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Tell us what you need..."
                    className="resize-none rounded-lg border border-[#d9dce2] px-3 py-2.5 text-sm text-[#24262b] outline-none transition-colors duration-200 focus:border-[var(--ether-yellow)]"
                  />
                </label>
              </div>
              <button
                type="submit"
                className="mt-6 inline-flex h-11 items-center justify-center rounded-full bg-[#23242a] px-6 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[var(--ether-yellow)] hover:text-[#1f2126]"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="w-full border-t border-[#dcdcdc] bg-[#1f2126] px-4 py-8 text-[#e9ebef] sm:px-6 sm:py-10 md:px-8 lg:px-10 lg:py-12 xl:px-12 2xl:px-16">
        <div className="mx-auto grid w-full max-w-[1600px] gap-8 md:grid-cols-[1.2fr_1fr] md:items-end">
          <div>
            <div className="relative h-8 w-[160px] sm:h-9 sm:w-[185px]">
              <Image
                src="/etherEvLogo.png"
                alt="Ether EV logo"
                fill
                className="object-contain object-left brightness-0 invert"
                sizes="185px"
              />
            </div>
            <p className="mt-4 max-w-[48ch] text-sm leading-relaxed text-[#c7ccd6]">
              Smart electric mobility powered by reliable charging intelligence and a connected EV ecosystem built for
              modern drivers.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-2.5 text-sm">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-[#3a3f49] px-3 py-1.5 text-[#e9ebef] transition-colors duration-200 hover:bg-[var(--ether-yellow)] hover:text-[#1f2126]"
              >
                Facebook
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-[#3a3f49] px-3 py-1.5 text-[#e9ebef] transition-colors duration-200 hover:bg-[var(--ether-yellow)] hover:text-[#1f2126]"
              >
                LinkedIn
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-[#3a3f49] px-3 py-1.5 text-[#e9ebef] transition-colors duration-200 hover:bg-[var(--ether-yellow)] hover:text-[#1f2126]"
              >
                Instagram
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-3 md:items-end">
            <div className="space-y-2 text-sm text-[#c7ccd6] md:text-right">
              <p>
                Email:{" "}
                <a href="mailto:info@ethertech.ltd" className="text-[#e9ebef] hover:text-[var(--ether-yellow)]">
                  info@ethertech.ltd
                </a>
              </p>
              <p>
                Phone:{" "}
                <a href="tel:+8801326880983" className="text-[#e9ebef] hover:text-[var(--ether-yellow)]">
                  +880 1326-880983
                </a>
              </p>
              <p>Address: Jatramura, Tarabo, Kachpur, Narayanganj</p>
            </div>
            <p className="text-xs tracking-[0.08em] text-[#9fa6b3]">© {new Date().getFullYear()} Ether Tech EV. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
