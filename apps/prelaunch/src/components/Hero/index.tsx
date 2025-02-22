import { Button, GoldenText, MailIcon } from "@repo/ui";
import Image from "next/image";
import EmailForm from "../EmailForm";

export default function Hero() {
  return (
    <section
      id="waitlist-form"
      className="flex flex-col sm:gap-3 gap-0 mt-24 sm:px-10 px-5"
    >
      <div className="text-center bg-[#14100C] w-fit mx-auto sm:px-10 px-5 py-2 rounded-3xl relative sm:text-base text-sm">
        <div className="absolute inset-x-0 h-px w-4/5 mx-auto -top-px shadow-2xl bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        LAUNCHING SOON
      </div>
      <div className="text-vanilla text-center lg:text-6xl md:text-5xl sm:text-4xl text-3xl py-2 font-ClashGroteskRegular relative z-10">
        Hera Trading Capital
      </div>

      <div className="flex sm:flex-row flex-col justify-center">
        <div className="flex flex-col sm:gap-5 gap-3 max-sm:items-center max-sm:text-center">
          <GoldenText className="font-Kugile lg:text-7xl md:text-6xl sm:text-5xl text-4xl font-semibold md:py-6 py-5 max-sm:py-3">
            Go Beyond your
            <br />
            Trading Limits
          </GoldenText>
          <p className="font-ClashGroteskRegular lg:text-xl text-lg max-w-md">
            Join a Community of Successful Traders and get Funded with right
            tools and support.
          </p>

          <EmailForm />
        </div>

        <Image
          src={"/images/hero/hero.webp"}
          alt={"hero"}
          width={650}
          height={600}
          className="relative md:-top-24 sm:-top-20 z-0 lg:w-[650px] md:w-[550px] sm:w-[400px] w-[450px] max-sm:mx-auto"
        />
      </div>
    </section>
  );
}
