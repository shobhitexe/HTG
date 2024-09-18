import { GoldenText } from "@repo/ui";

const affiliateArr = [
  {
    title: "Unbetable Payout Structure",
    desc: "Earn up to 22% with our VIP Program.",
  },
  {
    title: "Support",
    desc: "Dedicated Support from founders.",
  },
  {
    title: "Real Time Tracking",
    desc: "Real time tracking of Commissions.",
  },
];

export default function page() {
  return (
    <div className="flex flex-col items-center sm:mt-32 mt-24 gap-20">
      <div className="px-5 text-center">
        <h1 className="text-Apricot lg:text-7xl md:text-6xl sm:text-5xl text-4xl font-Kugile">
          Earn as our Affiliate
        </h1>
        <h2 className="text-AmericanSilver font-ClashGroteskLight sm:text-2xl text-lg max-w-5xl">
          Become an affiliate for Hera Trading Capital and receive up to 25%
          commission from all traders you recommend.
        </h2>
      </div>

      <div className="flex md:flex-row flex-col gap-5 relative sm:px-10 px-5">
        <div className="absolute w-full h-full bg-Apricot/20 z-0 rounded-full blur-3xl" />
        <div className="bg-black flex flex-col justify-center gap-3 py-10 px-5 rounded-xl relative z-10">
          <div className="absolute inset-x-0 h-px w-full mx-auto -top-px shadow-2xl bg-gradient-to-r from-transparent via-white/60 to-transparent" />

          <div className="text-Apricot md:text-8xl sm:text-7xl text-6xl font-semibold">
            10%
          </div>
          <GoldenText className="md:text-3xl text-2xl">Archarious</GoldenText>
          <div className="text-AmericanSilver max-w-sm font-ClashGroteskLight md:text-xl sm:text-lg text-base">
            Earn 10% for each purchase of your affiliated traders, whether it's
            a new account or restart you get 10% instantly to your affiliate
            account.
          </div>
          <div className="text-RoyalOrange md:text-xl sm:text-lg text-base">
            - Earn 10% commission from each sale <br />- Monthly Affiliate
            Payouts
          </div>
        </div>
        <div className="flex flex-col gap-5 z-10 relative">
          <div className="bg-black flex sm:flex-row flex-col sm:gap-10 gap-3 py-10 px-5 rounded-xl relative">
            <div className="absolute inset-x-0 h-px w-full mx-auto -top-px shadow-2xl bg-gradient-to-r from-transparent via-white/60 to-transparent" />

            <div className="flex flex-col gap-3">
              <div className="text-Apricot md:text-8xl sm:text-7xl text-6xl font-semibold">
                18%
              </div>
              <GoldenText className="md:text-3xl text-2xl">
                Klayteros
              </GoldenText>
            </div>

            <div className="flex flex-col sm:gap-5 gap-3">
              <div className="text-AmericanSilver max-w-lg font-ClashGroteskLight md:text-xl sm:text-lg text-base">
                Earn 18% for each purchase of your affiliated traders, whether
                it's a new account or restart you get 18% instantly to your
                affiliate account.
              </div>
              <div className="text-RoyalOrange md:text-xl sm:text-lg text-base">
                - Earn 18% commission from each sale <br />- Free challenge
                account
                <br />- Weekly Payouts
                <br />- 5% Permanent discount code to your community
              </div>
            </div>
          </div>
          <div className="bg-black flex sm:flex-row flex-col sm:gap-10 gap-3 py-10 px-5 rounded-xl relative">
            <div className="absolute inset-x-0 h-px w-full mx-auto -top-px shadow-2xl bg-gradient-to-r from-transparent via-white/60 to-transparent" />

            <div className="flex flex-col gap-3">
              <div className="text-Apricot md:text-8xl sm:text-7xl text-6xl font-semibold">
                25%
              </div>
              <GoldenText className="md:text-3xl text-2xl">Ares</GoldenText>
            </div>

            <div className="flex flex-col sm:gap-5 gap-3">
              <div className="text-AmericanSilver max-w-lg font-ClashGroteskLight md:text-xl sm:text-lg text-base">
                Only provided to our top exclusive affiliates, 25% commission
                for each purchase of your affiliated traders, whether it's a new
                account or restart you get 25% instantly to your affiliate
                account.
              </div>
              <div className="text-RoyalOrange md:text-xl sm:text-lg text-base">
                - Earn 25% commission from each sale
                <br />- Monthly Giveaways for Community
                <br />- Weekly Payouts
                <br /> - 10% Permanent discount code to your community
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex sm:flex-row flex-col items-center justify-center sm:gap-10 gap-5 w-full pb-20 px-5">
        <div className="basis-1/3">
          <div className="text-Apricot font-Kugile sm:text-5xl text-4xl">
            Become an
            <br /> HTC Partner
          </div>
          <div className="text-AmericanSilver max-w-md sm:text-xl text-lg font-ClashGroteskLight">
            At HeraTradingCapital, we're pioneering a new Hera in prop trading
            with our innovative A-Booking program.
          </div>
        </div>
        <div className="flex flex-col gap-3 basis-1/2 w-full">
          {affiliateArr.map((item) => (
            <div
              key={item.title}
              className="bg-referralPointsGradientBG sm:text-xl text-lg flex flex-col p-5"
            >
              <div>{item.title}</div>
              <div className="text-AmericanSilver font-ClashGroteskLight">
                {item.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
