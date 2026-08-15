const metrics = [
  {
    value: "$1k",
    label: "Total Sales",
    trend: "+8% from yesterday",
    cardBg: "bg-[#FFE2E5]",
    iconBg: "bg-[#FA5A7D]",
    icon: SalesIcon,
  },
  {
    value: "300",
    label: "Total Order",
    trend: "+5% from yesterday",
    cardBg: "bg-[#FFF4DE]",
    iconBg: "bg-[#FF947A]",
    icon: OrderIcon,
  },
  {
    value: "5",
    label: "Product Sold",
    trend: "+1.2% from yesterday",
    cardBg: "bg-[#DCFCE7]",
    iconBg: "bg-[#3CD856]",
    icon: TagIcon,
  },
  {
    value: "8",
    label: "New Customers",
    trend: "0.5% from yesterday",
    cardBg: "bg-[#F3E8FF]",
    iconBg: "bg-[#BF83FF]",
    icon: UsersIcon,
  },
] as const;

function SalesIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 19V5" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M4 19h16" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
      <rect x="7" y="12" width="3" height="5" rx="0.8" fill="white" />
      <rect x="12" y="8" width="3" height="9" rx="0.8" fill="white" />
      <rect x="17" y="10" width="3" height="7" rx="0.8" fill="white" />
    </svg>
  );
}

function OrderIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="6" y="3.5" width="12" height="17" rx="2" stroke="white" strokeWidth="1.8" />
      <path d="M9 8h6M9 12h6M9 16h3.5" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function TagIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 12.5V6.8A1.8 1.8 0 0 1 5.8 5h5.7c.5 0 .9.2 1.3.5l6.4 6.4a1.8 1.8 0 0 1 0 2.5l-5.2 5.2a1.8 1.8 0 0 1-2.5 0L5.3 13.4A1.8 1.8 0 0 1 4 12.5Z"
        stroke="white"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <circle cx="9" cy="9" r="1.2" fill="white" />
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="10" cy="8" r="3" stroke="white" strokeWidth="1.8" />
      <path d="M4.5 18c.6-2.8 2.7-4.2 5.5-4.2s4.9 1.4 5.5 4.2" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M17 8v5M14.5 10.5H19.5" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function ExportIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 4v11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M8 8l4-4 4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5 16v2.5A1.5 1.5 0 0 0 6.5 20h11a1.5 1.5 0 0 0 1.5-1.5V16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export default function Sales() {
  return (
    <section className="rounded-[20px] bg-white p-6 shadow-[0_2px_20px_rgba(21,19,75,0.04)]">
      <div className="mb-6 flex items-start justify-between gap-4">
        <div>
          <p className="m-0 text-[18px] font-semibold tracking-tight text-[#15134B]">
            Today's Sales
          </p>
          <p className="mt-1 text-[13px] text-[#737791]">Sales Summary</p>
        </div>
        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-lg border border-[#E8E8EE] px-3.5 py-2 text-[13px] font-medium text-[#15134B]"
        >
          <ExportIcon />
          Export
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4 xl:grid-cols-4">
        {metrics.map(({ value, label, trend, cardBg, iconBg, icon: Icon }) => (
          <article key={label} className={`rounded-[16px] p-5 ${cardBg}`}>
            <span className={`mb-4 flex h-10 w-10 items-center justify-center rounded-xl ${iconBg}`}>
              <Icon />
            </span>
            <p className="m-0 text-[22px] font-bold tracking-tight text-[#15134B]">{value}</p>
            <p className="mt-1 text-[14px] font-medium text-[#425166]">{label}</p>
            <p className="mt-2 text-[12px] text-[#4079ED]">{trend}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
