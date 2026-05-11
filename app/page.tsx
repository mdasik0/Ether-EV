"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AboutSection } from "./components/home/AboutSection";
import { CapabilitiesSection } from "./components/home/CapabilitiesSection";
import { ContactSection } from "./components/home/ContactSection";
import { HeaderSection } from "./components/home/HeaderSection";
import { SiteFooter } from "./components/home/SiteFooter";
import { TeamSection } from "./components/home/TeamSection";
import { TestimonialsSection } from "./components/home/TestimonialsSection";
import { navItems, teamMembers, testimonials, thumbs } from "./components/home/data";

gsap.registerPlugin(ScrollTrigger);

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
      <HeaderSection
        sectionRef={headerSectionRef}
        imageFrameRef={imageFrameRef}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        navItems={navItems}
        handleNavClick={handleNavClick}
        activeImage={activeImage}
        setActiveImage={setActiveImage}
        thumbs={thumbs}
      />
      <AboutSection
        sectionRef={aboutSectionRef}
        sectionEyebrowClass={sectionEyebrowClass}
        sectionTitleClass={sectionTitleClass}
        sectionDescriptionClass={sectionDescriptionClass}
      />
      <CapabilitiesSection
        sectionRef={capabilitiesSectionRef}
        sectionEyebrowClass={sectionEyebrowClass}
        sectionTitleClass={sectionTitleClass}
        sectionDescriptionClass={sectionDescriptionClass}
        capabilityCardClass={capabilityCardClass}
      />
      <TeamSection
        sectionRef={teamSectionRef}
        sectionEyebrowClass={sectionEyebrowClass}
        sectionTitleClass={sectionTitleClass}
        sectionDescriptionClass={sectionDescriptionClass}
        teamMembers={teamMembers}
      />
      <TestimonialsSection
        sectionRef={testimonialSectionRef}
        sectionEyebrowClass={sectionEyebrowClass}
        sectionTitleClass={sectionTitleClass}
        sectionDescriptionClass={sectionDescriptionClass}
        testimonials={testimonials}
        canGoPrev={canGoPrev}
        canGoNext={canGoNext}
        maxTestimonialIndex={maxTestimonialIndex}
        setTestimonialIndex={setTestimonialIndex}
        currentTestimonialIndex={currentTestimonialIndex}
        cardsPerView={cardsPerView}
        slideStepOffsetRem={slideStepOffsetRem}
      />
      <ContactSection
        sectionRef={contactSectionRef}
        sectionEyebrowClass={sectionEyebrowClass}
        sectionTitleClass={sectionTitleClass}
        sectionDescriptionClass={sectionDescriptionClass}
      />
      <SiteFooter />
    </main>
  );
}
