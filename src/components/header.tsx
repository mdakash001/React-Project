"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";

const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/donation", label: "Donation" },
  { href: "/pages", label: "Pages" },
  { href: "/events", label: "Events" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
] as const;

export default function Header() {
  const pathname = usePathname();
  const searchId = useId();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
    setSearchOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        setSearchOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header className="sticky top-0 z-50 font-sans">
      <div className="bg-[#0d3d8c] text-white">
        <div className="mx-auto flex h-10 max-w-[1320px] items-center justify-between px-4 text-[13px] sm:px-6 lg:px-10">
          <ul className="flex min-w-0 items-center">
            <li className="flex items-center gap-2 pr-4 lg:pr-5">
              <PhoneIcon />
              <a href="tel:+11234567890" className="whitespace-nowrap hover:opacity-80">
                (+1) 123 456 7890
              </a>
            </li>
            <li className="hidden items-center gap-2 border-l border-white/40 px-4 lg:flex lg:px-5">
              <MailIcon />
              <a href="mailto:webaddress@email.com" className="hover:opacity-80">
                webaddress@email.com
              </a>
            </li>
            <li className="hidden items-center gap-2 border-l border-white/40 pl-5 xl:flex">
              <PinIcon />
              <span>Buffalo Creek Road Nolee, TN 37135, UK.</span>
            </li>
          </ul>

          <ul className="flex items-center gap-4">
            <li>
              <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noreferrer">
                <FacebookIcon />
              </a>
            </li>
            <li>
              <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noreferrer">
                <InstagramIcon />
              </a>
            </li>
            <li>
              <a href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noreferrer">
                <TwitterIcon />
              </a>
            </li>
            <li>
              <a href="https://linkedin.com" aria-label="LinkedIn" target="_blank" rel="noreferrer">
                <LinkedInIcon />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-b border-black/5 bg-white shadow-[0_8px_24px_rgba(15,23,42,0.06)]">
        <div className="mx-auto flex h-[88px] max-w-[1320px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-10">
          
            <span>
              Politin
            </span>
         

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
            {NAV_ITEMS.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-[15px] font-medium transition-colors ${
                    isActive
                      ? "text-[#e4454a]"
                      : "text-[#1c2434] hover:text-[#e4454a]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-4">
            <button
              type="button"
              className="grid h-10 w-10 place-items-center text-[#1c2434] hover:text-[#e4454a]"
              aria-label={searchOpen ? "Close search" : "Open search"}
              aria-expanded={searchOpen}
              aria-controls={searchId}
              onClick={() => {
                setSearchOpen((open) => !open);
                setMenuOpen(false);
              }}
            >
              <SearchIcon />
            </button>

            <Link
              href="/donation"
              className="hidden rounded-[4px] bg-[#e4454a] px-5 py-2.5 text-[14px] font-semibold text-white transition-colors hover:bg-[#cc3c41] sm:inline-flex"
            >
              Donate Now
            </Link>

            <button
              type="button"
              className="grid h-10 w-10 place-items-center text-[#1c2434] lg:hidden"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => {
                setMenuOpen((open) => !open);
                setSearchOpen(false);
              }}
            >
              {menuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        {searchOpen ? (
          <form
            id={searchId}
            className="mx-auto flex max-w-[1320px] items-center gap-3 px-4 pb-5 sm:px-6 lg:px-10"
            onSubmit={(event) => event.preventDefault()}
          >
            <label htmlFor={`${searchId}-input`} className="sr-only">
              Search
            </label>
            <input
              id={`${searchId}-input`}
              type="search"
              name="q"
              placeholder="Search here..."
              autoFocus
              className="h-11 w-full rounded-[4px] border border-black/10 px-4 text-sm text-[#1c2434] outline-none ring-[#e4454a] placeholder:text-black/40 focus:ring-2"
            />
            <button
              type="submit"
              className="h-11 shrink-0 rounded-[4px] bg-[#e4454a] px-5 text-sm font-semibold text-white hover:bg-[#cc3c41]"
            >
              Search
            </button>
          </form>
        ) : null}

        {menuOpen ? (
          <div className="border-t border-black/5 bg-white px-4 py-4 lg:hidden">
            <nav className="flex flex-col gap-1" aria-label="Mobile">
              {NAV_ITEMS.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`rounded-[4px] px-3 py-2.5 text-[15px] font-medium ${
                      isActive
                        ? "bg-[#e4454a]/10 text-[#e4454a]"
                        : "text-[#1c2434] hover:bg-black/5"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
            <Link
              href="/donation"
              className="mt-3 inline-flex w-full items-center justify-center rounded-[4px] bg-[#e4454a] px-5 py-2.5 text-[14px] font-semibold text-white sm:hidden"
            >
              Donate Now
            </Link>
          </div>
        ) : null}
      </div>
    </header>
  );
}

function LogoMark() {
  return (
    <svg width="38" height="38" viewBox="0 0 48 48" aria-hidden="true">
      <path
        d="M24 3.2 29.8 18.1 45.6 19.2 33.6 29.5 37.8 44.8 24 36.6 10.2 44.8 14.4 29.5 2.4 19.2 18.2 18.1Z"
        fill="#1e4ea8"
      />
      <path
        d="M24 8.1 28.4 19.4 40.4 20.2 31.3 28 34.5 39.6 24 33.4 13.5 39.6 16.7 28 7.6 20.2 19.6 19.4Z"
        fill="#ffffff"
      />
      <path
        d="M24 12.6 27.3 21.1 36.3 21.7 29.5 27.6 31.9 36.3 24 31.6 16.1 36.3 18.5 27.6 11.7 21.7 20.7 21.1Z"
        fill="#e4454a"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M6.6 3.2h2.1c.5 0 .9.3 1 .8l.8 2.6c.1.4 0 .9-.3 1.2L8.8 9.3a12.5 12.5 0 0 0 5.9 5.9l1.5-1.4c.3-.3.8-.4 1.2-.3l2.6.8c.5.1.8.5.8 1v2.1c0 .6-.5 1.1-1.1 1.1C10.9 19.5 4.5 13.1 4.5 4.3c0-.6.5-1.1 1.1-1.1Z"
        fill="currentColor"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M3.5 6.5h17v11h-17v-11Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="m4 7 8 6 8-6"
        stroke="currentColor"
        strokeWidth="1.8"
        fill="none"
      />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 21s7-6.2 7-11.2A7 7 0 1 0 5 9.8C5 14.8 12 21 12 21Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle cx="12" cy="9.8" r="2.1" fill="currentColor" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M14.6 8.4V6.7c0-.7.5-1 1.1-1h1.8V3h-2.7c-2.7 0-4.2 1.8-4.2 4.4v1H8.5v2.8h2.1V21h3.1v-9.8h2.4l.4-2.8h-2.9Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="3.6" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M21.5 6.3c-.7.3-1.4.5-2.2.6.8-.5 1.4-1.2 1.7-2.1-.7.5-1.6.8-2.5 1A3.6 3.6 0 0 0 12 9.2c0 .3 0 .6.1.8-3-.1-5.7-1.6-7.5-3.8-.3.6-.5 1.2-.5 1.9 0 1.3.6 2.4 1.6 3.1-.6 0-1.2-.2-1.7-.5v.1c0 1.8 1.3 3.3 3 3.6-.3.1-.6.1-1 .1-.2 0-.5 0-.7-.1.5 1.5 1.9 2.6 3.6 2.6A7.3 7.3 0 0 1 3 17.8 10.2 10.2 0 0 0 8.6 19.5c6.6 0 10.3-5.5 10.3-10.3v-.5c.7-.5 1.4-1.2 1.9-1.9Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M6.5 9.2H3.7V20h2.8V9.2ZM5.1 4C4.1 4 3.3 4.8 3.3 5.8S4.1 7.6 5.1 7.6 6.9 6.8 6.9 5.8 6.1 4 5.1 4ZM20.3 20h-2.8v-5.2c0-1.2 0-2.8-1.7-2.8s-2 1.3-2 2.7V20h-2.8V9.2h2.7v1.5h.1c.4-.7 1.3-1.5 2.7-1.5 2.9 0 3.4 1.9 3.4 4.4V20Z" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
      <path d="m16.2 16.2 4.3 4.3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="m6 6 12 12M18 6 6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
