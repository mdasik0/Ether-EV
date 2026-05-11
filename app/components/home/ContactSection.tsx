import type { RefObject } from "react";
import { FiPhoneCall } from "react-icons/fi";

type ContactSectionProps = {
  sectionRef: RefObject<HTMLElement | null>;
  sectionEyebrowClass: string;
  sectionTitleClass: string;
  sectionDescriptionClass: string;
};

export function ContactSection({
  sectionRef,
  sectionEyebrowClass,
  sectionTitleClass,
  sectionDescriptionClass,
}: ContactSectionProps) {
  return (
    <section
      id="contact"
      ref={sectionRef}
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
  );
}
