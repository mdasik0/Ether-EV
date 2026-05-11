import Image from "next/image";

export function SiteFooter() {
  return (
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
  );
}
