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

export default function Header() {
  return (
    <header className="w-full bg-[#F5F7FA]">
      <div className="mx-auto flex h-[84px] w-full max-w-[1152px] items-center justify-between gap-6 px-4">
        <Logo />

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map(({ to, label }) => (
            <Link key={to} to={to} className="text-base font-normal text-[#18191F] no-underline hover:text-[#4CAF4F]"
                >{label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3.5 shrink-0">
          <Link to="/"className="rounded-md px-5 py-2.5 text-sm font-medium text-[#4CAF4F] no-underline hover:bg-[#4CAF4F]/10"
            >Login
          </Link>
          <Link to="/"className="rounded-md bg-[#4CAF4F] px-5 py-2.5 text-sm font-medium text-white no-underline hover:bg-[#449e48]"
            >Sign up
          </Link>
        </div>
      </div>
    </header>
  );
}
