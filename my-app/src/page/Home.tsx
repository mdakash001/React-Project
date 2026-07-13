import { Link } from "react-router-dom";
import illustration from "../assets/Illustration.png";

export default function Home() {
  return (
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
          <Link to="/signup" className="mt-8 inline-flex rounded-md bg-[#4CAF4F] px-8 py-3.5 text-base font-medium text-white no-underline hover:bg-[#449e48]"
          >
            Register
          </Link>
        </div>

        <div className="flex w-full max-w-[391px] shrink-0 justify-center">
          <img
            src={illustration} alt="Business growth illustration"className="h-auto w-full max-w-[391px]" width={391}height={407}
          />
        </div>
      </div>
    </section>
  );
}
