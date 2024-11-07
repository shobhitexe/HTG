import { Button, GoldenText } from "@repo/ui";
import Link from "next/link";

export default function Community() {
  return (
    <div className="relative sm:mx-auto mx-5 px-5 mt-20 flex md:py-28 sm:py-20 py-10 min-h-44 flex-col sm:gap-3 gap-1 justify-center items-center bg-[url('/images/community/bg.avif')] bg-center bg-cover text-center border border-white/5 rounded-2xl lg:max-w-6xl md:max-w-4xl max-w-2xl">
      <div className="absolute inset-x-0 h-px sm:w-full w-1/4 mx-auto -top-px shadow-2xl bg-gradient-to-r from-transparent via-white/60 to-transparent" />

      <GoldenText className="sm:text-5xl xs:text-4xl text-3xl sm:py-4 py-3 font-semibold">
        The Hera Traders Community
      </GoldenText>
      <div className="sm:max-w-xl max-w-md sm:text-lg text-base text-center">
        Join a Community of Successful Traders and get Funded with right tools
        and support.
      </div>

      <Link
        href={"https://discord.com/invite/cKuzhCUBud"}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button
          variant={"golden"}
          size={"xl"}
          className="text-black w-fit mt-5 text-base"
        >
          Join the Community
        </Button>
      </Link>
    </div>
  );
}
