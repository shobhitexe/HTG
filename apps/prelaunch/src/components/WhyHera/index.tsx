import { GoldenText } from "@repo/ui";
import Image from "next/image";

const pointers = [
  {
    title: "100% Profit Splits",
    desc: "Keep all your profits without sharing them. Hera Traders can enjoy full profit splits, maximizing your earnings from every trade.",
  },
  {
    title: "1 Step Challenges",
    desc: "Streamline and shorten your journey to getting funded with our 1-step challenge. Prove your trading skills quickly and efficiently.",
  },
  {
    title: "Superfast Payouts",
    desc: "Enjoy fast and efficient withdrawals with multiple options of payouts!",
  },
];

export default function WhyHera() {
  return (
    <section className="lg:mt-20 sm:mt-28 mt-20">
      <div className="relative w-full">
        <div className="absolute z-0 bottom-1/3 bg-heraTextGradient bg-clip-text text-transparent font-Kugile text-center lg:text-[18rem] md:text-[15rem] sm:text-[12rem] ss:text-[10rem] xs:text-[8rem] text-[5rem] w-full leading-relaxed">
          HERA
        </div>
        <Image
          src={"/images/whyhera/temple.webp"}
          alt={"temple"}
          width={1280}
          height={720}
          className="w-full relative z-10"
        />
      </div>
      <div className="flex flex-col items-center justify-center sm:gap-2 text-xl font-ClashGroteskRegular relative -top-10 z-10">
        <GoldenText className="lg:text-7xl md:text-6xl sm:text-5xl xs:text-4xl text-3xl text-center xs:py-3 py-1">
          Why Hera Trading Capital?
        </GoldenText>

        <div className="text-center sm:text-lg text-base px-5">
          Join a Community of Successful Traders and get Funded with right tools
          and support.
        </div>

        <div className="flex flex-wrap items-center justify-center gap-5 mt-5 px-5">
          {pointers.map((item) => (
            <div
              key={item.title}
              className="bg-gradient-to-t from-RawUmber to-transparent p-px rounded-full flex flex-col gap-3"
            >
              <div
                style={{
                  background:
                    "radial-gradient(at center bottom, #FFB169 -100%, #070707 50%)",
                }}
                className="lg:max-w-xl max-w-sm md:min-h-40 sm:min-h-32 min-h-24 text-center bg-blackShade rounded-full py-5 md:px-20 px-10 flex flex-col justify-center"
              >
                <div className="text-Rajah md:text-3xl text-2xl font-ClashGroteskMedium">
                  {item.title}
                </div>
                <div className="md:text-base sm:text-sm text-xs">
                  {item.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
