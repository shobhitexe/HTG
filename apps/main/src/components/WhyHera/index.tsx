import { Button, Heading } from "@repo/ui";
import Image from "next/image";

// const pointers = [
//   {
//     title: "100% Profit Splits",
//     desc: "Keep all your profits without sharing them. Hera Traders can enjoy full profit splits, maximizing your earnings from every trade.",
//   },
//   {
//     title: "1 Step Challenges",
//     desc: "Streamline and shorten your journey to getting funded with our 1-step challenge. Prove your trading skills quickly and efficiently.",
//   },
//   {
//     title: "Superfast Payouts",
//     desc: "Enjoy fast and efficient withdrawals with multiple options of payouts!",
//   },
//   {
//     title: "In-person Events",
//     desc: "Keep all your profits without sharing them. Hera Traders enjoy full profit splits, maximizing your earnings from every trade.",
//   },
// ];

const pointersV2 = [
  {
    title: "$2M",
    desc: "Scale your Hera Trading Account up to",
  },
  {
    title: "90%",
    desc: "Receive up to 100% of your Simulated profits",
  },
  {
    title: "120+",
    desc: "Countries Supported",
  },
  {
    title: "48H",
    desc: "Avg payout processing time",
  },
];

export default function WhyHera() {
  return (
    <section className="lg:mt-20 sm:mt-28 mt-20 flex flex-col items-center">
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
        <Heading>
          Trade with the <br /> Prop Firm of Gods!
        </Heading>
        {/* <GoldenText className="lg:text-6xl md:text-5xl sm:text-4xl text-3xl text-center xs:py-3 py-1"></GoldenText> */}

        <div className="text-center sm:text-xl text-base px-5">
          Join a Community of Successful Traders and get Funded with right tools
          and support.
        </div>

        <div className="p-px bg-gradient-to-b from-black to-Apricot/30 rounded-3xl mt-10 sm:mx-10 mx-5">
          <div
            className="flex items-start justify-around w-full text-center sm:gap-10 gap-5 flex-wrap p-10 rounded-3xl relative h-full"
            style={{
              background:
                "radial-gradient(at center bottom, #FFB169 -100%, #070707 60%)",
            }}
          >
            {pointersV2.map((item) => (
              <div key={item.title} className="max-w-xs flex flex-col gap-1">
                <div className="text-Apricot sm:text-4xl text-3xl font-semibold">
                  {item.title}
                </div>
                <div className="sm:text-xl text-lg">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* <div className="flex flex-wrap items-center justify-center gap-5 mt-5 px-5">
          {pointers.map((item) => (
            <div
              key={item.title}
              className="bg-gradient-to-t from-RawUmber to-transparent p-px rounded-2xl flex flex-col gap-3"
            >
              <div
                style={{
                  background:
                    "radial-gradient(at center bottom, #FFB169 -100%, #070707 70%)",
                }}
                className="lg:max-w-lg max-w-sm md:min-h-52 sm:min-h-48 min-h-24 text-left gap-2 bg-blackShade rounded-2xl py-5 md:px-20 px-10 flex flex-col justify-center"
              >
                <Image
                  src={"/images/whyhera/stat.svg"}
                  alt={"whyhera"}
                  width={50}
                  height={50}
                />

                <div className="text-Rajah md:text-3xl text-2xl font-ClashGroteskMedium">
                  {item.title}
                </div>
                <div className="md:text-base sm:text-sm text-xs">
                  {item.desc}
                </div>
              </div>
            </div>
          ))}
        </div> */}
      </div>

      <Button variant="gold" size={"xl"}>
        Get Funded
      </Button>
    </section>
  );
}
