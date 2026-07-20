import { Link } from "react-router-dom";
import illustration from "../assets/Illustration.png";
import logo0 from "../assets/Logo(0).svg";
import logo1 from "../assets/Logo (1).svg";
import logo2 from "../assets/Logo (2).svg";
import logo3 from "../assets/Logo (3).svg";
import logo4 from "../assets/Logo (4).svg";
import logo5 from "../assets/Logo (5).svg";
import logo6 from "../assets/Logo (6).svg";
import frame35 from "../assets/Frame 35.png";
import pana from "../assets/pana.png";
import image9 from "../assets/image 9.png";

const clientLogos = [
  { src: logo0, alt: "Client logo 1" },
  { src: logo1, alt: "Client logo 2" },
  { src: logo2, alt: "Client logo 3" },
  { src: logo3, alt: "Client logo 4" },
  { src: logo4, alt: "Client logo 5" },
  { src: logo5, alt: "Client logo 6" },
  { src: logo6, alt: "Client logo 7" },
];

const communityCards = [
  {
    title: "Membership Organisations",
    description:
      "Our membership management software provides full automation of membership renewals and payments",
  },
  {
    title: "National Associations",
    description:
      "Our membership management software provides full automation of membership renewals and payments",
  },
  {
    title: "Clubs And Groups",
    description:
      "Our membership management software provides full automation of membership renewals and payments",
  },
];

const achievementStats = [
  { label: "Members", value: "2,245,341" },
  { label: "Clubs", value: "46,328" },
  { label: "Event Bookings", value: "828,867" },
  { label: "Payments", value: "1,926,436" },
];

export default function Home() {
  return (
    <>
      <section className="w-full bg-[#F5F7FA]">
        <div className="mx-auto flex w-full max-w-[1152px] flex-col items-center gap-10 px-4 py-16 md:flex-row md:justify-between md:gap-16 md:py-24">
          <div className="flex w-full max-w-[657px] flex-col items-start text-left">
            <h1 className="m-0 text-4xl font-semibold leading-tight text-[#4D4D4D] md:text-5xl lg:text-[64px] lg:leading-[76px]">
              Lessons and insights{" "}
              <span className="block text-[#4CAF4F]">from 8 years</span>
            </h1>
            <p className="mt-4 text-base text-[#717171] md:text-lg">
              Where to grow your business as a photographer: site or social media?
            </p>
            <Link to="/" className="mt-8 inline-flex rounded-md bg-[#4CAF4F] px-8 py-3.5 text-base font-medium text-white no-underline hover:bg-[#449e48]">Register</Link>
          </div>

          <div className="flex w-full max-w-[391px] shrink-0 justify-center">
            <img src={illustration} alt="Business growth illustration"className="h-auto w-full max-w-[391px]" width={391}height={407}/>
          </div>
        </div>
      </section>

      <section className="w-full bg-white">
        <div className="mx-auto w-full max-w-[1152px] px-4 py-12 md:py-16">
          <div className="mx-auto max-w-[540px] text-center">
            <h2 className="m-0 text-3xl font-semibold text-[#4D4D4D] md:text-4xl">
              Our Clients
            </h2>
            <p className="mt-2 text-sm text-[#717171] md:text-base">
              We have been working with some Fortune 500+ clients
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 items-center justify-items-center gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">{clientLogos.map((logo) => (
              <img key={logo.alt}src={logo.src}alt={logo.alt}className="h-10 w-auto object-contain"loading="lazy" />
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-white">
        <div className="mx-auto w-full max-w-[1152px] px-4 pb-16 md:pb-24">
          <div className="mx-auto max-w-[560px] text-center">
            <h2 className="m-0 text-3xl font-semibold leading-tight text-[#4D4D4D] md:text-4xl">
              Manage your entire community in a single system
            </h2>
            <p className="mt-3 text-sm text-[#717171] md:text-base">
              Who is Nextcent suitable for?
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 md:mt-10 md:grid-cols-3 md:gap-8">{communityCards.map((card) => (
              <article key={card.title}className="mx-auto flex w-full max-w-[380px] flex-col items-center rounded-lg border border-[#F5F7FA] bg-white px-6 py-8 text-center shadow-[0_2px_8px_rgba(171,190,209,0.2)]" >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E8F5E9]">
                  <svg width="28" height="28" viewBox="0 0 24 24"fill="none"xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M7.5 11C9.15685 11 10.5 9.65685 10.5 8C10.5 6.34315 9.15685 5 7.5 5C5.84315 5 4.5 6.34315 4.5 8C4.5 9.65685 5.84315 11 7.5 11Z" stroke="#4D4D4D" strokeWidth="1.5"/>
                    <path d="M16.5 11C18.1569 11 19.5 9.65685 19.5 8C19.5 6.34315 18.1569 5 16.5 5C14.8431 5 13.5 6.34315 13.5 8C13.5 9.65685 14.8431 11 16.5 11Z"stroke="#4D4D4D" strokeWidth="1.5" />
                    <path d="M3 18C3 15.7909 4.79086 14 7 14H8C10.2091 14 12 15.7909 12 18V19H3V18Z"stroke="#4D4D4D" strokeWidth="1.5"/>
                    <path d="M12 19V18C12 15.7909 13.7909 14 16 14H17C19.2091 14 21 15.7909 21 18V19H12Z" stroke="#4D4D4D" strokeWidth="1.5"/>
                  </svg>
                </div>
                <h3 className="m-0 text-[28px] font-bold leading-[36px] text-[#4D4D4D]">{card.title}</h3>
                <p className="mt-3 max-w-[250px] text-sm leading-5 text-[#717171]"> {card.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-white">
        <div className="mx-auto flex w-full max-w-[1152px] flex-col items-center gap-10 px-4 pb-16 md:flex-row md:justify-between md:gap-16 md:pb-24">
          <div className="flex w-full max-w-[442px] justify-center">
            <img src={frame35} alt="Unseen spending illustration"className="h-auto w-full max-w-[442px]" width={442}height={433} />
          </div>

          <div className="w-full max-w-[661px] text-left">
            <h2 className="m-0 text-3xl font-semibold leading-tight text-[#4D4D4D] md:text-[36px] md:leading-[44px]">
              The unseen of spending three years at Pixelgrade
            </h2>
            <p className="mt-4 text-sm leading-6 text-[#717171] md:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo
              ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat
              vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar
              sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae,
              tempus sem. Donec elementum pulvinar odio.
            </p>
            <Link to="/" className="mt-8 inline-flex rounded-md bg-[#4CAF4F] px-8 py-3.5 text-base font-medium text-white no-underline hover:bg-[#449e48]">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#F5F7FA]">
        <div className="mx-auto flex w-full max-w-[1152px] flex-col gap-10 px-4 py-12 md:flex-row md:items-center md:justify-between md:py-16">
          <div className="w-full max-w-[540px] text-left">
            <h2 className="m-0 text-3xl font-semibold leading-tight text-[#4D4D4D] md:text-4xl">
              Helping a local
              <span className="block text-[#4CAF4F]">business reinvent itself</span>
            </h2>
            <p className="mt-2 text-sm text-[#18191F] md:text-base">
              We reached here with our hard work and dedication
            </p>
          </div>

          <div className="grid w-full max-w-[540px] grid-cols-1 gap-8 sm:grid-cols-2"> {achievementStats.map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <div className="mt-1 flex h-10 w-10 items-center justify-center">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" >
                    <path d="M6 22C6 18.6863 8.68629 16 12 16H13C16.3137 16 19 18.6863 19 22V24H6V22Z" stroke="#4CAF4F" strokeWidth="2"/>
                    <path d="M12.5 14C15.2614 14 17.5 11.7614 17.5 9C17.5 6.23858 15.2614 4 12.5 4C9.73858 4 7.5 6.23858 7.5 9C7.5 11.7614 9.73858 14 12.5 14Z" stroke="#4CAF4F" strokeWidth="2"/>
                    <path d="M19 12C19 10.3431 20.3431 9 22 9H23C25.2091 9 27 10.7909 27 13V14" stroke="#4CAF4F" strokeWidth="2" />
                    <path d="M22 8C23.6569 8 25 6.65685 25 5C25 3.34315 23.6569 2 22 2C20.3431 2 19 3.34315 19 5C19 6.65685 20.3431 8 22 8Z"  stroke="#4CAF4F"  strokeWidth="2" />
                  </svg>
                </div>

                <div>
                  <p className="m-0 text-[28px] font-bold leading-[36px] text-[#4D4D4D]"> {item.value} </p>
                  <p className="m-0 text-base text-[#717171]">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-white">
        <div className="mx-auto flex w-full max-w-[1152px] flex-col items-center gap-10 px-4 py-12 md:flex-row md:justify-between md:gap-16 md:py-16">
          <div className="flex w-full max-w-[442px] justify-center">
            <img src={pana} alt="Site footer design illustration" className="h-auto w-full max-w-[442px]" width={442} height={433} />
          </div>

          <div className="w-full max-w-[661px] text-left">
            <h2 className="m-0 text-3xl font-semibold leading-tight text-[#4D4D4D] md:text-[36px] md:leading-[44px]">
              How to design your site footer like we did
            </h2>
            <p className="mt-4 text-sm leading-6 text-[#717171] md:text-base">
              Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
              augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
              elit erat a magna. Donec quis erat at libero ultrices mollis. In hac
              habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi
              facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet
              urna tincidunt. Etiam sit amet arcu aliquet, tincidunt nisl ut,
              consequat lectus.
            </p>
            <Link to="/"className="mt-8 inline-flex rounded-md bg-[#4CAF4F] px-8 py-3.5 text-base font-medium text-white no-underline hover:bg-[#449e48]">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#F5F7FA]">
        <div className="mx-auto flex w-full max-w-[1152px] flex-col items-center gap-8 px-4 py-12 md:flex-row md:items-center md:gap-16 md:py-16">
          <div className="w-full max-w-[326px] shrink-0">
            <img src={image9} alt="Customer testimonial" className="h-auto w-full rounded-lg object-cover" width={326} height={326} />
          </div>

          <div className="w-full max-w-[738px] text-left">
            <p className="m-0 text-base leading-6 text-[#717171] md:text-lg">
              Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis
              sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus.
              Vivamus sed libero ornare, tincidunt libero eu, sagittis nibh. Morbi sed
              tincidunt dolor.
            </p>

            <p className="mt-6 m-0 text-xl font-semibold text-[#4CAF4F]">Tim Smith</p>
            <p className="mt-1 m-0 text-sm text-[#717171] md:text-base">
              British Dragon Boat Racing Association
            </p>

            <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-wrap items-center gap-6 md:gap-8"> {[logo0, logo1, logo2, logo3, logo4, logo5].map((logo, index) => (
                  <img key={index} src={logo} alt={`Customer logo ${index + 1}`} className="h-8 w-auto object-contain" loading="lazy" />
                ))}
              </div>

              <Link to="/testimonial" className="inline-flex shrink-0 items-center gap-2 text-base font-medium text-[#4CAF4F] no-underline hover:text-[#449e48]"  >
                Meet all customers
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#F5F7FA]">
        <div className="mx-auto flex w-full max-w-[1152px] flex-col items-center px-4 py-12 text-center md:py-16">
          <h2 className="m-0 max-w-[650px] text-5xl font-semibold leading-tight text-[#263238] md:text-[48px] md:leading-[52px]">
            Pellentesque suscipit fringilla libero eu.
          </h2>
          <Link
            to="/"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-[#4CAF4F] px-8 py-3.5 text-base font-medium text-white no-underline hover:bg-[#449e48]"
          >
            Get a Demo
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
