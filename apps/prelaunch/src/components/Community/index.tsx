import { Button, GoldenText } from "@repo/ui";

export default function Community() {
  return (
    <div className="relative sm:mx-auto mx-5 px-5 mt-20 flex md:py-28 sm:py-20 py-10 min-h-44 flex-col sm:gap-3 gap-1 justify-center items-center bg-[url('/images/community/bg.avif')] bg-center bg-cover text-center border border-white/5 rounded-2xl lg:max-w-6xl md:max-w-4xl max-w-2xl">
      <div className="absolute inset-x-0 h-px sm:w-full w-1/4 mx-auto -top-px shadow-2xl bg-gradient-to-r from-transparent via-white/60 to-transparent" />

      <GoldenText className="sm:text-5xl xs:text-4xl text-3xl sm:py-4 py-2 font-semibold">
        Why Hera Trading Capital?
      </GoldenText>
      <div className="sm:max-w-xl max-w-md sm:text-base text-sm text-center">
        Join a Community of Successful Traders Sand get Funded with right tools
        and support.
      </div>

      <Button
        variant={"golden"}
        size={"xl"}
        className="text-black font-semibold w-fit mt-5 text-base"
      >
        Join the Waitlist
      </Button>
    </div>
  );
}
