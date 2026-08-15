function SearchIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="11" cy="11" r="7" stroke="#5B5CE2" strokeWidth="1.8" />
      <path d="M16.5 16.5 20 20" stroke="#5B5CE2" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function ChevronDown() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function UsFlag() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" aria-hidden="true">
      <circle cx="14" cy="14" r="14" fill="#B22234" />
      <path
        fill="#fff"
        d="M0 10.2h28v1.6H0zm0 3.2h28v1.6H0zm0 3.2h28v1.6H0zM0 6.9h28v1.6H0z"
      />
      <path d="M0 0h14v12H0z" fill="#3C3B6E" />
      <circle cx="14" cy="14" r="13.2" fill="none" stroke="#E8E8E8" />
    </svg>
  );
}

function BellIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M6 9.5a6 6 0 1 1 12 0c0 4.2 1.5 5.5 1.5 5.5H4.5S6 13.7 6 9.5Z"
        fill="#FFC107"
      />
      <path d="M10 18.5a2 2 0 0 0 4 0" fill="#FFC107" />
    </svg>
  );
}

export default function Header() {
  return (
    <header className="flex h-[84px] items-center justify-between gap-6 bg-transparent px-8">
      <p className="m-0 shrink-0 text-[24px] font-bold tracking-tight text-[#15134B]">
        Dashboard
      </p>

      <label className="relative mx-auto hidden w-full max-w-[420px] md:block">
        <span className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2">
          <SearchIcon />
        </span>
        <input
          type="search"
          placeholder="Search here..."
          className="h-12 w-full rounded-xl border-0 bg-[#F5F6FA] pr-4 pl-11 text-[14px] text-[#15134B] outline-none placeholder:text-[#A3A6B1]"
        />
      </label>

      <div className="flex shrink-0 items-center gap-5">
        <button
          type="button"
          className="hidden items-center gap-2 text-[14px] font-medium text-[#15134B] sm:inline-flex"
        >
          <UsFlag />
          <span>Eng (US)</span>
          <span className="text-[#A3A6B1]">
            <ChevronDown />
          </span>
        </button>

        <button
          type="button"
          className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-[#FFF8E5]"
          aria-label="Notifications"
        >
          <BellIcon />
          <span className="absolute top-2.5 right-2.5 h-2 w-2 rounded-full bg-[#FF4C61] ring-2 ring-[#FFF8E5]" />
        </button>

        <button type="button" className="flex items-center gap-3">
          <img
            src="https://i.pravatar.cc/80?img=12"
            alt="Musfiq"
            className="h-11 w-11 rounded-xl object-cover"
          />
          <span className="hidden text-left sm:block">
            <span className="block text-[14px] font-semibold text-[#15134B]">Musfiq</span>
            <span className="block text-[12px] text-[#737791]">Admin</span>
          </span>
          <span className="hidden text-[#A3A6B1] sm:block">
            <ChevronDown />
          </span>
        </button>
      </div>
    </header>
  );
}
