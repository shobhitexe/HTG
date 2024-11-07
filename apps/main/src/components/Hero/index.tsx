import { Button, buttonVariants, GoldenText, SilverText } from "@repo/ui";
import Image from "next/image";
import Link from "next/link";

const USPs = [
  { title: "Up to 100%", sub: "of Profit Split" },
  { title: "Up to $300k", sub: "Trading Accounts" },
  { title: "Add-Ons", sub: "to Enhance Trading" },
  { title: "No Min", sub: "Trading Days" },
];

export default function Hero() {
  return (
    <section
      id="waitlist-form"
      className="flex flex-col sm:gap-3 gap-0 sm:mt-44 mt-28 sm:px-10 px-5"
    >
      <div className="flex sm:flex-row flex-col justify-center">
        <div className="flex flex-col gap-3 max-sm:items-center max-sm:text-center">
          <Image
            src={"/images/hero/trustpilot.webp"}
            alt={"trustpilot"}
            width={400}
            height={20}
            className="md:w-[350px] sm:w-[250px] w-[200px]"
          />
          <GoldenText className="font-Kugile lg:text-7xl md:text-6xl sm:text-5xl text-4xl font-semibold py-6 max-sm:py-3">
            Go Beyond your
            <br />
            Trading Limits
          </GoldenText>
          <p className="font-ClashGroteskLight lg:text-2xl text-lg max-w-lg">
            Join a Community of Successful Traders and get Funded with right
            tools and support.
          </p>

          <div className="flex gap-3 mt-5">
            <Link
              href={"/#challenges"}
              className={`${buttonVariants({ variant: "gold", size: "xl" })}`}
            >
              Get Funded
            </Link>

            <Link
              href={"https://discord.com/invite/cKuzhCUBud"}
              target="_blank"
              rel="noopener noreferrer"
              className={`${buttonVariants({ variant: "silver", size: "xl" })}`}
            >
              Join Discord
            </Link>
          </div>
        </div>

        <Image
          src={"/images/hero/hero.webp"}
          alt={"hero"}
          width={650}
          height={600}
          className="relative md:-top-24 sm:-top-20 z-0 lg:w-[650px] md:w-[550px] sm:w-[400px] w-[450px] max-sm:mx-auto"
        />
      </div>

      <div className="grid sm:grid-cols-4 grid-cols-2 justify-arounds relative md:-top-3 top-3">
        {USPs.map((item, idx) => (
          <div key={item.title} className="flex items-center justify-around">
            {idx !== 0 && (
              <Image
                src={"/images/hero/stroke.svg"}
                alt={item.title}
                width={10}
                height={10}
                className={`max-sm:hidden`}
              />
            )}
            <div className="flex flex-col items-center justify-center">
              <SilverText className="md:text-4xl sm:text-3xl text-2xl">
                {item.title}
              </SilverText>

              <div className="text-white/60 md:text-xl sm:text-lg text-base">
                {item.sub}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
