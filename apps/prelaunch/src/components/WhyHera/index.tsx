import { GoldenText } from "@repo/ui";
import Image from "next/image";

const pointers = [
  {
    title: "100% Profit Splits",
    desc: "Keep all your profits without sharing them. Hera Traders enjoy full profit splits, maximizing your earnings from every trade.",
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
    <section className="mt-20">
      <div className="relative w-full">
        <div className="absolute z-0 bottom-1/3 bg-heraTextGradient bg-clip-text text-transparent font-Kugile text-center text-[20rem] w-full leading-relaxed">
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
      <div className="flex flex-col items-center justify-center gap-2 text-xl font-ClashGroteskRegular relative -top-10 z-10">
        <GoldenText className="text-7xl leading-relaxed">
          Why Hera Trading Capital?
        </GoldenText>

        <div>
          Join a Community of Successful Traders Sand get Funded with right
          tools and support.
        </div>

        <div className="flex flex-wrap items-center justify-center gap-5 mt-5">
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
                className="max-w-xl min-h-40 text-center bg-blackShade rounded-full py-5 px-20 flex flex-col justify-center"
              >
                <div className="text-Rajah text-3xl font-ClashGroteskMedium">
                  {item.title}
                </div>
                <div className="text-base">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
