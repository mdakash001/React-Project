import { Link } from "react-router-dom";
import logo from "../assets/Logo.svg";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/service", label: "Service" },
  { to: "/feature", label: "Feature" },
  { to: "/product", label: "Product" },
  { to: "/testimonial", label: "Testimonial" },
  { to: "/faq", label: "FAQ" },
] as const;

function Logo() {
  return (
    <Link to="/" className="flex items-center shrink-0 no-underline">
      <img src={logo} alt="Nexcent" width={155} height={24} />
    </Link>
  );
}

function UserIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="8" r="3.5" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M5.5 19.5C5.5 16.4624 8.46243 14 12 14C15.5376 14 18.5 16.4624 18.5 19.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Header() {
  return (
    <header className="w-full border-b border-[#E8E8E8] bg-white">
      <div className="mx-auto flex h-[72px] w-full max-w-[1200px] items-center justify-between gap-6 px-6">
        <Logo />

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className="text-[15px] font-normal text-[#222222] no-underline transition-colors hover:text-[#1D7AD9]"
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-5 shrink-0">
          <Link
            to="/"
            className="hidden items-center gap-2 text-[15px] font-normal text-[#222222] no-underline transition-colors hover:text-[#1D7AD9] sm:inline-flex"
          >
            <UserIcon />
            My Account
          </Link>
          <Link
            to="/"
            className="inline-flex items-center rounded-full bg-[#1D7AD9] px-5 py-2.5 text-[14px] font-semibold text-white no-underline transition-colors hover:bg-[#1669c1]"
          >
            + Add Property
          </Link>
        </div>
      </div>
    </header>
  );
}
