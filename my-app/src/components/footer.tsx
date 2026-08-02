import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.svg";

const quickLinks = [
  { to: "/", label: "Home" },
  { to: "/service", label: "Service" },
  { to: "/feature", label: "Feature" },
  { to: "/product", label: "Product" },
  { to: "/testimonial", label: "Testimonial" },
  { to: "/faq", label: "FAQ" },
] as const;

function ArrowUpRight({ className = "" }: { className?: string }) {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true"className={className}> <path d="M7 17L17 7M17 7H9M17 7V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
  );
}

function KeysIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true"> <circle cx="16" cy="18" r="7" stroke="white" strokeWidth="2" opacity="0.9" /> <circle cx="16" cy="18" r="2.5" fill="white" opacity="0.9" /> <path d="M21 23L32 34M29 31L33 35L36 32L32 28" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.9" /> <circle cx="28" cy="14" r="5.5" stroke="white" strokeWidth="2" opacity="0.75" /> <path d="M32 18L38 24M36 22L39 25" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.75" /></svg>
  );
}

function IconBox({ children }: { children: ReactNode }) {
  return (
    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/15 text-white">
      {children}
    </span>
  );
}

export default function Footer() {
  return (
    <footer className="w-full bg-[#1D7AD9] text-white">
      <div className="mx-auto w-full max-w-[1200px] px-6 pb-8 pt-10 md:px-12 md:pt-12">
        {/* CTA banner */}
        <div className="flex flex-col items-start justify-between gap-6 border-b border-white/20 pb-10 md:flex-row md:items-center">
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-6">
            <KeysIcon />
            <p className="m-0 max-w-[520px] text-2xl font-semibold leading-snug md:text-[28px]">
              Let&apos;s find your dream with{" "}
              <span className="text-[#F5C518]">personalized home</span>
            </p>
          </div>
          <Link to="/" className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#F5C518] px-6 py-3 text-sm font-semibold text-[#1A1A1A] no-underline transition-colors hover:bg-[#e6b800]" > Contact us<ArrowUpRight /> </Link>
        </div>

        {/* Main columns */}
        <div className="grid grid-cols-1 gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-flex items-center no-underline">
              <img src={logo} alt="myhouse" width={112} height={40} />
            </Link>
            <p className="mt-5 max-w-[260px] text-sm leading-6 text-white/90">
              Finding my dream home was seamless home. Their dedicated team not only
              unders my needs but exceeded expectation making homeownership a reality.
            </p>
            <Link to="/" className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-white no-underline hover:opacity-80" > Read more <ArrowUpRight /> </Link>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="m-0 text-lg font-semibold text-white">Contact Us</h3>
            <ul className="mt-6 list-none space-y-5 p-0">
              <li className="flex items-start gap-3">
                <IconBox>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"> <path d="M12 21s7-5.2 7-11a7 7 0 1 0-14 0c0 5.8 7 11 7 11Z" stroke="currentColor"  strokeWidth="1.8" /><circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.8" /> </svg>
                </IconBox>
                <p className="m-0 pt-1.5 text-sm leading-5 text-white/90">
                  65 Park avenue road North Florida, USA
                </p>
              </li>
              <li className="flex items-start gap-3">
                <IconBox>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path
                      d="M6.5 4.5H9L10.5 9L8.5 10.5C9.5 12.5 11.5 14.5 13.5 15.5L15 13.5L19.5 15V17.5C19.5 18.5 18.5 19.5 17.5 19.5C11 19.5 4.5 13 4.5 6.5C4.5 5.5 5.5 4.5 6.5 4.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                  </svg>
                </IconBox>
                <div className="pt-1">
                  <p className="m-0 text-xs text-white/70">Call now</p>
                  <a href="tel:3019870256" className="text-sm font-medium text-white no-underline hover:opacity-80" >
                    (301) 987-0256
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <IconBox>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.8" />
                    <path d="M4 7L12 13L20 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </IconBox>
                <div className="pt-1">
                  <p className="m-0 text-xs text-white/70">Email</p>
                  <a href="mailto:home@themebeer.com" className="text-sm font-medium text-white no-underline hover:opacity-80">
                    home@themebeer.com
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Quick Links — project page names */}
          <div>
            <h3 className="m-0 text-lg font-semibold text-white">Quick Links</h3>
            <ul className="mt-6 list-none space-y-3.5 p-0">
              {quickLinks.map(({ to, label }) => (
                <li key={label}>
                  <Link to={to}  className="text-sm text-white/90 no-underline transition-opacity hover:opacity-80" > {label} </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Connected */}
          <div>
            <h3 className="m-0 text-lg font-semibold text-white">Get Connected</h3>
            <form
              className="mt-6" onSubmit={(event) => { event.preventDefault();
              }}
            >
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>
              <div className="relative border-b border-white pb-2">
                <input
                  id="footer-email" type="email" placeholder="Email address" className="w-full border-0 bg-transparent py-1 pr-8 text-sm text-white outline-none placeholder:text-white/70" />
                <button type="submit" aria-label="Subscribe" className="absolute right-0 top-1/2 -translate-y-1/2 border-0 bg-transparent p-0 text-white hover:opacity-80" >
                  <ArrowUpRight />
                </button>
              </div>
            </form>
            <p className="mt-3 text-xs leading-5 text-white/70">
              Finding my dream home was seamless me my needs but exceeded
            </p>

            <p className="mt-6 m-0 text-sm font-medium text-white">Social media</p>
            <div className="mt-3 flex items-center gap-4">
              <a href="#" aria-label="Facebook" className="text-white no-underline hover:opacity-80">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M14 9h3V6h-3c-1.7 0-3 1.3-3 3v2H8v3h3v7h3v-7h3l1-3h-4V9c0-.6.4-1 1-1Z" />
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="text-white no-underline hover:opacity-80">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M6.5 9.5H3.7V20h2.8V9.5ZM5.1 4C4.1 4 3.3 4.8 3.3 5.8S4.1 7.6 5.1 7.6 6.9 6.8 6.9 5.8 6.1 4 5.1 4ZM20.3 20h-2.8v-5.6c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9V20H10.8V9.5h2.7v1.4h.1c.4-.7 1.3-1.5 2.7-1.5 2.9 0 3.4 1.9 3.4 4.4V20Z" />
                </svg>
              </a>
              <a href="#" aria-label="Twitter" className="text-white no-underline hover:opacity-80">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M18.2 4H21l-6.5 7.4L22 20h-5.6l-4.4-5.7L7 20H4.2l7-8L2.5 4H8.2l4 5.2L18.2 4Zm-1 14.4h1.6L7.1 5.5H5.4l11.8 12.9Z" />
                </svg>
              </a>
              <a href="#" aria-label="Instagram" className="text-white no-underline hover:opacity-80">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="2" />
                  <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
                  <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 pt-6">
          <p className="m-0 text-xs text-white/80">
          © 2024 myhome by themebeer. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
