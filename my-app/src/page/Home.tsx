import spark from "../assets/spark.svg";
import key from "../assets/key.svg";
import rect14 from "../assets/Rectangle 14.png";
import rect83 from "../assets/Rectangle 83.png";
import rect84 from "../assets/Rectangle 84.png";
import rect85 from "../assets/Rectangle 85.png";
import rect86 from "../assets/Rectangle 86.png";
import rect87 from "../assets/Rectangle 87.png";
import rect88 from "../assets/Rectangle 88.png";
import rect89 from "../assets/Rectangle 89.png";
import recentOne from "../assets/one.png";
import recentTwo from "../assets/two.png";
import recentThree from "../assets/three.png";
import aboutImage from "../assets/four.png";

const featuredProperties = Array.from({ length: 8 }, (_, index) => ({
  id: index + 1,
  title: "Green heaven",
  location: "Park Avenue, North Carolina",
  price: "$3500",
  beds: 4,
  baths: 2,
  area: "2100 ft",
  tag: "Sell",
  agent: "Susana Paul",
  image: rect14,
}));

const recentProperties = [
  {
    id: 1,
    category: "Business",
    title: "Living in a luxury area is not a dream anymore now",
    image: recentOne,
  },
  {
    id: 2,
    category: "Business",
    title: "Living in a luxury area is not a dream anymore now",
    image: recentTwo,
  },
  {
    id: 3,
    category: "Business",
    title: "Living in a luxury area is not a dream anymore now",
    image: recentThree,
  },
] as const;

const aboutStats = [
  {
    value: "100+",
    label: "Committed to achieving full client satisfaction to exceed your expectations",
  },
  {
    value: "85",
    label: "Committed to achieving full client satisfaction to exceed your expectations",
  },
  {
    value: "9",
    label: "Committed to achieving full client satisfaction to exceed your expectations",
  },
] as const;

const features = [
  {
    title: "Ordered construction",
    description: "Exemplifying precision & excellence all homes are crafted with care",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <rect x="4" y="16" width="20" height="5" rx="1" stroke="#2F80ED" strokeWidth="1.6" />
        <rect x="6" y="10" width="16" height="5" rx="1" stroke="#2F80ED" strokeWidth="1.6" />
        <rect x="8" y="4" width="12" height="5" rx="1" fill="#F5C518" />
      </svg>
    ),
  },
  {
    title: "Decorated home",
    description: "Homes are adorned with style, reflecting our commitment to excellence",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path
          d="M5 13.5L14 6L23 13.5V23C23 23.5523 22.5523 24 22 24H6C5.44772 24 5 23.5523 5 23V13.5Z"
          stroke="#2F80ED"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path d="M11 24V16H17V24" stroke="#2F80ED" strokeWidth="1.6" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Ordered construction",
    description: "Discover your dream home. Find big range of properties",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <circle cx="11" cy="12" r="4.5" stroke="#2F80ED" strokeWidth="1.6" />
        <circle cx="11" cy="12" r="1.5" fill="#2F80ED" />
        <path
          d="M14.5 15.5L21 22M18.5 19.5L21.5 22.5L23.5 20.5L20.5 17.5"
          stroke="#2F80ED"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
] as const;

export default function Home() {
  return (
    <>
      <section className="w-full bg-white pb-10 pt-14 md:pb-16 md:pt-20">
        <div className="mx-auto flex w-full max-w-[900px] flex-col items-center px-4 text-center">
          <div className="relative flex w-full items-center justify-center">
            <img
              src={spark}
              alt=""
              aria-hidden="true"
              className="absolute left-0 top-1/2 hidden h-16 w-auto -translate-y-1/2 -rotate-12 sm:block md:left-2 md:h-[90px] lg:-left-4"
            />

            <h1 className="m-0 max-w-[640px] px-12 text-3xl font-bold leading-tight tracking-tight text-[#000000] sm:text-4xl md:text-5xl md:leading-[1.15] lg:text-[56px]">
              Let&apos;s discover your{" "}
              <span className="text-[#2F80ED]">dream palace</span>
            </h1>
            <img
              src={key}
              alt=""
              aria-hidden="true"
              className="absolute right-0 top-1/2 hidden h-16 w-auto -translate-y-1/2 rotate-12 sm:block md:right-2 md:h-[80px] lg:-right-4"
            />
          </div>

          <form
            className="mt-8 flex w-full max-w-[640px] items-center overflow-hidden rounded-xl bg-white p-1.5 shadow-lg md:mt-10"
            onSubmit={(event) => event.preventDefault()}
          >
            <label htmlFor="home-keyword" className="sr-only">
              Keyword
            </label>
            <input
              id="home-keyword"
              type="text"
              placeholder="Keyword"
              className="min-w-0 flex-1 border-0 bg-transparent px-4 py-3 text-base text-[#000000] outline-none placeholder:text-[#9CA3AF]"
            />
            <button
              type="submit"
              className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-[#F5C518] px-5 py-3 text-sm font-semibold text-[#1A1A1A] transition-colors hover:bg-[#e6b800]"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
                <path d="M20 20L16.5 16.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
              Search
            </button>
          </form>

          <p className="mt-5 text-sm text-[#9CA3AF] md:text-base">
            Your desired property from{" "}
            <span className="font-semibold text-[#2F80ED]">1250</span> items
          </p>
        </div>

        <div className="mx-auto mt-12 w-full max-w-[1200px] px-4 md:mt-16">
          <div className="hidden items-end justify-center gap-3 md:flex lg:gap-4">
            <div className="w-[18%] shrink-0 self-center">
              <img
                src={rect89}
                alt="Modern glass house"
                className="h-[280px] w-full rounded-[24px] object-cover lg:h-[320px]"
              />
            </div>

            <div className="flex w-[16%] shrink-0 flex-col gap-3 self-center lg:gap-4">
              <img
                src={rect86}
                alt="Minimal white house"
                className="h-[130px] w-full rounded-[20px] object-cover lg:h-[150px]"
              />
              <img
                src={rect87}
                alt="House with garden"
                className="h-[130px] w-full rounded-[20px] object-cover lg:h-[150px]"
              />
            </div>

            <div className="w-[28%] shrink-0">
              <img
                src={rect83}
                alt="Dream home with lawn"
                className="h-[360px] w-full rounded-[28px] object-cover lg:h-[420px]"
              />
            </div>

            <div className="flex w-[16%] shrink-0 flex-col gap-3 self-center lg:gap-4">
              <img
                src={rect84}
                alt="Wood and glass villa"
                className="h-[130px] w-full rounded-[20px] object-cover lg:h-[150px]"
              />
              <img
                src={rect85}
                alt="Coastal modern home"
                className="h-[130px] w-full rounded-[20px] object-cover lg:h-[150px]"
              />
            </div>

            <div className="w-[18%] shrink-0 self-center">
              <img
                src={rect88}
                alt="White modern residence"
                className="h-[280px] w-full rounded-[24px] object-cover lg:h-[320px]"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 md:hidden">
            <img src={rect83} alt="Dream home with lawn" className="col-span-2 h-56 w-full rounded-2xl object-cover" />
            <img src={rect89} alt="Modern glass house" className="h-36 w-full rounded-2xl object-cover" />
            <img src={rect88} alt="White modern residence" className="h-36 w-full rounded-2xl object-cover" />
            <img src={rect86} alt="Minimal white house" className="h-28 w-full rounded-2xl object-cover" />
            <img src={rect87} alt="House with garden" className="h-28 w-full rounded-2xl object-cover" />
            <img src={rect84} alt="Wood and glass villa" className="h-28 w-full rounded-2xl object-cover" />
            <img src={rect85} alt="Coastal modern home" className="h-28 w-full rounded-2xl object-cover" />
          </div>
        </div>
      </section>

      <section className="w-full bg-gradient-to-b from-[#EAF3FC] via-white to-[#EAF3FC] py-16 md:py-24">
        <div className="mx-auto flex w-full max-w-[1100px] flex-col items-center px-4">
          <img src={spark} alt="" aria-hidden="true" className="h-12 w-auto md:h-14" />

          <h2 className="mt-6 m-0 max-w-[720px] text-center text-2xl font-bold leading-snug text-[#1A1A1A] md:text-4xl md:leading-[1.3]">
            Find your dream home with{" "}
            <span className="text-[#2F80ED]">personalized</span> real estate expertise.
          </h2>

          <div className="mt-12 grid w-full grid-cols-1 gap-8 md:mt-16 md:grid-cols-3 md:gap-6 lg:gap-10">
            {features.map((feature) => (
              <article key={feature.title + feature.description} className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-white shadow-[0_4px_20px_rgba(47,128,237,0.12)]">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="m-0 text-base font-bold text-[#1A1A1A] md:text-lg">
                    {feature.title}
                  </h3>
                  <p className="mt-1.5 m-0 text-sm leading-5 text-[#6B7280]">
                    {feature.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-white py-16 md:py-20">
        <div className="mx-auto w-full max-w-[1200px] px-4">
          <h2 className="m-0 text-center text-2xl font-semibold text-[#000000] md:text-3xl">
            Featured properties
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {featuredProperties.map((property) => ( <article key={property.id}
                className="group overflow-hidden rounded-2xl bg-white">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img  src={property.image} alt={property.title}  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
                    <span className="absolute left-3 top-3 rounded-md bg-[#E8E8E8] px-3 py-1 text-xs font-medium text-[#333]"> {property.tag}
                  </span>

                  <div className="absolute right-3 top-3 flex gap-2 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                    <button
                      type="button"
                      aria-label="Favorite"
                      className="flex h-8 w-8 items-center justify-center rounded-full border-0 bg-white text-[#555] shadow-sm hover:text-[#E11D48]"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path
                          d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.6-7 10-7 10Z"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                    <button
                      type="button"
                      aria-label="Add"
                      className="flex h-8 w-8 items-center justify-center rounded-full border-0 bg-white text-[#555] shadow-sm hover:text-[#2F80ED]"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                      </svg>
                    </button>
                  </div>

                  <div className="absolute bottom-3 left-3 flex items-center gap-2 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                    <span className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full bg-[#2F80ED] text-xs font-semibold text-white ring-2 ring-white">
                      SP
                    </span>
                    <span className="rounded-full bg-white px-3 py-1.5 text-xs font-medium text-[#333] shadow-sm">
                      {property.agent}
                    </span>
                  </div>
                </div>

                <div className="px-4 py-4">
                  <h3 className="m-0 text-base font-bold text-[#1A1A1A]">{property.title}</h3>
                  <p className="mt-1 m-0 text-sm text-[#8A8A8A]">{property.location}</p>
                  <p className="mt-2 m-0 text-lg font-bold text-[#2F80ED]">{property.price}</p>

                  <div className="mt-3 flex items-center gap-4 text-sm text-[#9CA3AF]">
                    <span className="inline-flex items-center gap-1.5">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path
                          d="M3 12V20H21V12M3 12L5 7H19L21 12M3 12H21M8 20V14H11V20M13 20V14H16V20"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinejoin="round"
                        />
                      </svg>
                      {property.beds}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path
                          d="M4 12H20V17C20 18.1046 19.1046 19 18 19H6C4.89543 19 4 18.1046 4 17V12Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        />
                        <path d="M4 12V8C4 6.89543 4.89543 6 6 6H9" stroke="currentColor" strokeWidth="1.5" />
                        <path d="M4 19V21M20 19V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                      {property.baths}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path d="M4 8V4H8M16 4H20V8M20 16V20H16M8 20H4V16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        <path d="M9 15L15 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                      {property.area}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-white py-16 md:py-24">
        <div className="mx-auto grid w-full max-w-[1200px] grid-cols-1 items-center gap-10 px-4 lg:grid-cols-2 lg:gap-0">
          <div className="relative mx-auto flex w-full max-w-[480px] items-center justify-center lg:mx-0">
            <div className="relative aspect-square w-full max-w-[420px] overflow-hidden">
              <img
                src={aboutImage}
                alt="Modern city skyline"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="relative px-6 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-16">
            <h2 className="m-0 max-w-[420px] text-3xl font-bold leading-tight text-[#1A1A1A] md:text-4xl lg:text-[44px] lg:leading-[1.15]">
              Discover your <span className="text-[#2F80ED]">dream</span>
            </h2>

            <p className="mt-5 m-0 max-w-[480px] text-sm leading-6 text-[#6B7280] md:text-base md:leading-7">
              Welcome to my house, your trusted partner in finding your home. Whether
              you&apos;re buying, selling, or renting, our dedicated team...
            </p>

            <div className="mt-8 flex flex-col">
              {aboutStats.map((stat) => (
                <div
                  key={stat.value}
                  className="flex items-start gap-6 border-b border-[#D1D5DB] py-5 last:border-b-0 last:pb-0 first:pt-0"
                >
                  <span className="w-20 shrink-0 text-3xl font-bold text-[#374151] md:w-24 md:text-4xl">
                    {stat.value}
                  </span>
                  <p className="m-0 pt-1 text-sm leading-5 text-[#6B7280] md:pt-2 md:text-[15px] md:leading-6">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white py-16 md:py-24">
        <div className="mx-auto w-full max-w-[1200px] px-4">
          <h2 className="m-0 text-center text-2xl font-semibold text-[#1A1A1A] md:text-3xl">
            Recent properties
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {recentProperties.map((property) => (
              <article
                key={property.id}
                className="group overflow-hidden rounded-[24px] bg-white shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="px-6 py-5 md:px-7 md:py-6">
                  <span className="text-sm font-medium text-[#5B9DEF]">
                    {property.category}
                  </span>
                  <h3 className="mt-2 m-0 text-lg font-bold leading-snug text-[#1A1A1A] md:text-xl md:leading-snug">
                    {property.title}
                  </h3>
                  <a
                    href="#"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-[#6B7280] no-underline transition-colors hover:text-[#2F80ED]"
                  >
                    Read more
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path
                        d="M7 17L17 7M17 7H9M17 7V15"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
