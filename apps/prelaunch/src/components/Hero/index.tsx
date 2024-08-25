import { Button, GoldenText, MailIcon } from "@repo/ui";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex flex-col gap-3 mt-24">
      <div className="text-center bg-[#14100C] w-fit mx-auto px-10 py-2 rounded-3xl relative">
        <div className="absolute inset-x-0 h-px w-4/5 mx-auto -top-px shadow-2xl bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        LAUNCHING SOON
      </div>
      <div className="text-vanilla text-center text-6xl py-2 font-ClashGroteskRegular relative z-10">
        Hera Trading Capital
      </div>

      <div className="flex justify-center">
        <div className="flex flex-col gap-5">
          <GoldenText className="font-Kugile text-7xl font-semibold py-6">
            Go Beyond your
            <br />
            Trading Limits
          </GoldenText>
          <p className="font-ClashGroteskRegular text-xl max-w-md">
            Join a Community of Successful Traders Sand get Funded with right
            tools and support.
          </p>

          <div className="relative flex items-center bg-ChineseBlack py-1 px-5 rounded-sm w-full max-w-sm">
            <MailIcon className="w-5 h-5" />
            <input
              className="bg-transparent py-3 px-2 focus:outline-none"
              placeholder="Enter your Email"
            />
          </div>

          <Button
            variant={"golden"}
            className="text-black w-full max-w-sm text-lg font-ClashGroteskMedium"
          >
            Join the Waitlist
          </Button>
        </div>

        <Image
          src={"/images/hero/hero.webp"}
          alt={"hero"}
          width={650}
          height={650}
          className="relative -top-24 z-0"
        />
      </div>
    </section>
  );
}
