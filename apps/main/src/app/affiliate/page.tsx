import {
  affiliateConstants,
  AffiliateContest,
  CalculateEarnings,
  Community,
} from "@/components";
import { GoldenText } from "@repo/ui";
import Image from "next/image";
import { ReactNode } from "react";

export default function page() {
  return (
    <div className="flex flex-col items-center sm:mt-32 mt-24 gap-20">
      <div
        className="p-5 text-center"
        style={{
          background: "radial-gradient(at bottom, #FFB169 -290%, #070707 60%)",
        }}
      >
        <h1 className="text-Apricot lg:text-6xl md:text-5xl sm:text-4xl text-3xl font-Kugile py-5">
          Affiliate Program
        </h1>
        <h2 className="text-AmericanSilver font-ClashGroteskLight sm:text-2xl text-lg max-w-5xl">
          Become an affiliate for Hera Trading Capital and receive up to 25%
          commission from all traders you recommend.
        </h2>
      </div>

      <CalculateEarnings />

      <Ranks />

      <PointsSystem />

      <PartnerWithHera />

      <Model />

      <Rewards />

      <AffiliateContest />

      <div className="w-full mb-20">
        <Community />
      </div>
    </div>
  );
}

function Heading({ children }: { children: ReactNode }) {
  return (
    <div className="text-Apricot font-Kugile md:text-5xl sm:text-4xl text-3xl text-center px-5">
      {children}
    </div>
  );
}

function Ranks() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-5 px-5">
      {affiliateConstants.affiliateRanksArr.map((item, idx) => (
        <div
          key={idx}
          className={`flex flex-col gap-3 max-w-xs text-center ${idx === 1 ? "bg-rankCardGoldenBg" : "bg-rankCardBg"} px-5 py-10 rounded-3xl`}
        >
          <div
            className={`${idx === 1 ? "text-white bg-Liver border-Apricot" : "text-black bg-silverChipGradient border-white"} w-fit mx-auto px-5 rounded-3xl border`}
          >
            {item.rank}
          </div>
          <div className="font-ClashGroteskSemiBold text-8xl">
            {item.commission}
          </div>
          <div className="text-xl">{item.title}</div>
          <div className="font-ClashGroteskLight">{item.sub}</div>
        </div>
      ))}
    </div>
  );
}

function PointsSystem() {
  return (
    <div className="flex flex-col gap-10 items-center justify-center w-full">
      <div className="w-full mx-auto flex flex-col justify-center items-center">
        <Heading>The Point System</Heading>
        <div className="text-AmericanSilver md:text-2xl sm:text-lg text-base text-center max-w-5xl font-ClashGroteskLight px-5">
          Use this calculator to estimate your earnings of up to 18% for each
          new referral. This calculation is based on a client purchasing one
          Stellar $200K 2-Step Challenge.
        </div>
      </div>
      <div className="flex sm:flex-row flex-col items-center justify-center sm:gap-10 gap-5 w-full pb-20 px-5">
        <div className="basis-1/2">
          <Image
            src={"/images/affiliate/point.avif"}
            alt={"pointimg"}
            width={480}
            height={480}
            className="mx-auto"
          />
        </div>
        <div className="flex flex-col gap-3 basis-1/2 w-full">
          {affiliateConstants.pointSystemArray.map((item) => (
            <div
              key={item.account}
              className="bg-referralPointsGradientBG md:text-xl sm:text-lg text-base flex items-center p-5 gap-2 rounded-2xl"
            >
              <div>{item.account}</div>{" "}
              <div className="text-Rajah">{item.point}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function PartnerWithHera() {
  return (
    <div className="flex flex-col w-full justify-center items-center px-5">
      <Heading>Why partner with Hera Trading</Heading>

      <div className="flex flex-wrap items-center justify-center sm:mt-10 mt-5 sm:gap-10 gap-5">
        {affiliateConstants.partnerWithHeraArray.map((item, idx) => (
          <div
            key={item.title}
            className="flex items-start sm:gap-5 gap-2 sm:p-5 p-3"
          >
            <Image
              src={`/images/affiliate/${idx + 1}.svg`}
              alt={idx.toString()}
              width={50}
              height={50}
            />
            <div className="flex flex-col max-w-xs gap-2">
              <div className="text-xl">{item.title}</div>
              <div className="font-ClashGroteskLight">{item.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Model() {
  return (
    <div className="flex flex-col w-full justify-center items-center sm:gap-10 gap-5">
      <Heading>How our Affiliate Model Works</Heading>

      <div className="flex items-stretch justify-around w-[90%] sm:mt-10 overflow-x-auto">
        {affiliateConstants.affiliateModelArray.map((item, idx) => (
          <div
            key={item.title}
            className="flex flex-col gap-3 justify-center items-center text-center relative sm:px-5 px-2"
          >
            <div
              className={`absolute h-2 w-full bg-DarkCharcoal top-5 z-0 ${idx === 0 && "rounded-l-3xl"} ${idx === 4 && "rounded-r-3xl"}`}
            />

            <div className="bg-affiliateModelIndexBg py-3 px-5 rounded-xl text-3xl max-w-[60px] w-full relative z-10">
              {idx + 1}
            </div>

            <Image
              src={"/images/affiliate/arrow.svg"}
              alt={item.title}
              width={30}
              height={30}
            />

            <div className="max-w-xs min-w-[210px] bg-rankCardBg sm:p-10 p-5 h-full rounded-3xl w-full flex flex-col gap-3 border border-white/5 relative">
              <div className="absolute -top-px inset-x-0 w-2/3 mx-auto h-px bg-gradient-to-r from-transparent via-white/60 to-transparent" />

              <div className="text-Apricot text-2xl">{item.title}</div>
              <div className="font-ClashGroteskLight">{item.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Rewards() {
  return (
    <div className="flex flex-col w-full justify-center items-center">
      <div className="bg-DarkCharcoal h-px w-[90%] mx-auto" />
      <div className="flex sm:flex-row flex-col max-sm:py-5 items-center justify-around w-full px-10 gap-5">
        <div className="flex flex-col sm:py-5">
          <div className="text-Apricot font-Kugile md:text-4xl text-3xl font-semibold">
            Redeem your Rewards!
          </div>
          <div className="font-ClashGroteskLight max-w-sm">
            Use this calculator to estimate your earnings of up to 18% for each
            new referral. This calculation is based on a client purchasing one
            Stellar $200K 2-Step Challenge.
          </div>
        </div>

        <div className="flex flex-col bg-rankCardBg px-10 py-5 rounded-xl border border-white/5 max-w-md w-full">
          {affiliateConstants.rewardsArray.map((item) => (
            <div
              key={item.account}
              className="flex items-center justify-between text-xl relative"
            >
              <div>{item.account}</div>
              <div className="absolute top-1/2 left-1/2 -translate-y-1/2 translate-x-1/2">
                =
              </div>
              <div className="text-Apricot">{item.point}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-DarkCharcoal h-px w-[90%] mx-auto" />
    </div>
  );
}
