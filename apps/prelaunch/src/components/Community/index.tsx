import { Button, GoldenText } from "@repo/ui";

export default function Community() {
  return (
    <div className="relative mt-20 flex py-28 min-h-44 flex-col gap-3 justify-center items-center bg-[url('/images/community/bg.avif')] bg-center bg-cover border border-white/5 rounded-2xl max-w-6xl mx-auto">
      <div className="absolute inset-x-0 h-px w-full mx-auto -top-px shadow-2xl bg-gradient-to-r from-transparent via-white/60 to-transparent" />

      <GoldenText className="text-5xl py-4 font-semibold">
        Why Hera Trading Capital?
      </GoldenText>
      <div className="max-w-xl text-center">
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
