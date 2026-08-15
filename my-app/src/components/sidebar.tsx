import { NavLink } from "react-router-dom";

const navItems = [
  { to: "/", label: "Dashboard", icon: DashboardIcon },
  { to: "/leaderboard", label: "Leaderboard", icon: LeaderboardIcon },
  { to: "/order", label: "order", icon: OrderIcon },
  { to: "/products", label: "Products", icon: ProductsIcon },
  { to: "/sales-report", label: "Sales Report", icon: SalesReportIcon },
  { to: "/messages", label: "Messages", icon: MessagesIcon },
  { to: "/settings", label: "Settings", icon: SettingsIcon },
  { to: "/sign-out", label: "Sign Out", icon: SignOutIcon },
] as const;

function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true"> <path d="M7.5 8.5c0-1.8 1.7-3.2 4.5-3.2 2.6 0 4.5 1.3 4.5 3.2 0 1.5-1.1 2.5-3 3.1" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/> <path d="M16.5 15.5c0 1.8-1.7 3.2-4.5 3.2-2.6 0-4.5-1.3-4.5-3.2 0-1.5 1.1-2.5 3-3.1" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" /> </svg>
  );
}
function DashboardIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path  d="M12 3a9 9 0 1 0 9 9h-9V3Z"  stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"  /> <path  d="M13.5 3.3A9 9 0 0 1 20.7 10.5H13.5V3.3Z" fill="currentColor"  /> </svg>
  );
}
function LeaderboardIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="11" width="4.5" height="9" rx="1.2" stroke="currentColor" strokeWidth="1.8" />
      <rect x="9.75" y="4" width="4.5" height="16" rx="1.2" stroke="currentColor" strokeWidth="1.8" />
      <rect x="16.5" y="8" width="4.5" height="12" rx="1.2" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}
function OrderIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"> <path  d="M3.5 5.5h2.1l1.6 10.2a1.8 1.8 0 0 0 1.8 1.5h8.7a1.8 1.8 0 0 0 1.8-1.4l1.3-6.3H7"  stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"  /><circle cx="9.5" cy="19.5" r="1.4" fill="currentColor" /> <circle cx="17" cy="19.5" r="1.4" fill="currentColor" /> </svg>
  );
}
function ProductsIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"> <path stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" /> <path d="M9 8.5V7a3 3 0 0 1 6 0v1.5"  stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"  /> </svg>
  );
}
function SalesReportIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"> <path d="M4 16.5 9.2 11l3.3 3.3L20 7" stroke="currentColor"  strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /> <path d="M15 7h5v5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /> </svg>
  );
}
function MessagesIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"> <path d="M5.5 17.5 4 20.5l3.5-1.2A8.5 8.5 0 1 0 5.5 17.5Z" stroke="currentColor"  strokeWidth="1.8" strokeLinejoin="round"  /> <circle cx="9" cy="12" r="1" fill="currentColor" /> <circle cx="12" cy="12" r="1" fill="currentColor" /> <circle cx="15" cy="12" r="1" fill="currentColor" /> </svg>
  );
}
function SettingsIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"> <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.8" /> <path d="M12 4.5v1.6M12 17.9v1.6M4.5 12h1.6M17.9 12h1.6M6.7 6.7l1.1 1.1M16.2 16.2l1.1 1.1M17.3 6.7l-1.1 1.1M7.8 16.2l-1.1 1.1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /> </svg>
  );
}
function SignOutIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"> <path  d="M10 17.5H7.5A2.5 2.5 0 0 1 5 15V9a2.5 2.5 0 0 1 2.5-2.5H10"  stroke="currentColor"  strokeWidth="1.8" strokeLinecap="round"  /> <path  d="M10 12h9m0 0-2.8-2.8M19 12l-2.8 2.8" stroke="currentColor"  strokeWidth="1.8"  strokeLinecap="round" strokeLinejoin="round" /> </svg>
  );
}
export default function Sidebar() {
  return (
    <aside className="sticky top-0 flex h-screen w-[260px] shrink-0 flex-col bg-white px-5 py-7">
      <div className="mb-8 flex items-center gap-3 px-2">
        <span className="flex h-10 w-10 items-center justify-center rounded-[10px] bg-linear-to-br from-[#5B5CE2] to-[#7C6CFF] text-white shadow-[0_8px_16px_rgba(91,92,226,0.28)]">
          <LogoMark className="h-5 w-5" />
        </span>
        <span className="text-[22px] font-bold tracking-tight text-[#15134B]">Dabang</span>
      </div>

      <nav className="flex flex-1 flex-col gap-1.5">
        {navItems.map(({ to, label, icon: Icon }) => (
          <NavLink key={to}  to={to} end={to === "/"}  className={({ isActive }) =>
              [
                "flex items-center gap-3 rounded-xl px-4 py-3 text-[15px] no-underline transition-colors",
                isActive
                  ? "bg-[#5B5CE2] font-semibold text-white shadow-[0_10px_20px_rgba(91,92,226,0.28)]"
                  : "font-medium text-[#737791] hover:bg-[#F5F6FA] hover:text-[#15134B]",
              ].join(" ")
            }
          >
            <Icon />
            {label}
          </NavLink>
        ))}
      </nav>

    </aside>
  );
}
