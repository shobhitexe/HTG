import { GoldenText, Heading } from "@repo/ui";
import Image from "next/image";

export default function Events() {
  return (
    <section className="lg:mt-20 sm:mt-28 mt-20 flex flex-col items-center">
      <Heading>Global Events</Heading>

      <div className="text-center sm:text-xl text-base px-5 font-ClashGroteskRegular max-w-5xl">
        Dive into HeraTradingCapital's global events, where trading enthusiasts
        connect, engage, and grow. We're more than the best prop firm, we're a
        community of new and experienced traders committed to learning, growing,
        and finding success.
      </div>

      <div className="mt-10 flex sm:flex-row flex-col items-center justify-center sm:gap-10 gap-5 px-5">
        {Array.from({ length: 2 }).map((_, idx) => (
          <div
            key={idx}
            className="max-w-mdd sm:w-full w-[90%] rounded-xl bg-[#151515] text-center relative border border-white/5"
          >
            <div className="absolute inset-x-0 h-px w-full mx-auto -top-px shadow-2xl  bg-gradient-to-r from-transparent via-white/60 to-transparent" />

            <GoldenText className="font-bold md:text-4xl text-3xl font-ClashGroteskRegular p-5">
              Networking
              <br /> Dinner Event
            </GoldenText>
            <Stroke />
            <div className="relative left-1/2 -translate-x-1/2 top-5">
              London, Coming Soon
            </div>
            <Image
              src={"/images/events/london.avif"}
              alt={"event"}
              width={400}
              height={200}
              className="rounded-b-xl"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

function Stroke() {
  return (
    <svg
      height="2"
      viewBox="0 0 715 4"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mx-auto"
    >
      <rect
        opacity="0.5"
        width="715"
        height="4"
        fill="url(#paint0_linear_161_66)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_161_66"
          x1="0"
          y1="2"
          x2="715"
          y2="2"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopOpacity="0" />
          <stop offset="0.5" stopColor="#F79955" />
          <stop offset="1" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}
