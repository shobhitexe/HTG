"use client";

import { Button, GoldenText, Heading } from "@repo/ui";
import Image from "next/image";
import { useEffect, useState } from "react";

const balanceArr = ["$10,000", "$25,000", "$50,000", "$100,000", "$200,000"];

const balanceArrTwoStep = [
  "$5,000",
  "$10,000",
  "$25,000",
  "$50,000",
  "$100,000",
];

const balanceArrThreeStep = [
  "$10,000",
  "$25,000",
  "$50,000",
  "$100,000",
  "$200,000",
  "$300,000",
];

const initialDrawdownArr = [
  "6%",
  "7%",
  "8%",
  "9%",
  "10%",
  "11%",
  "12%",
  "13%",
  "14%",
];
const payoutShareArr = ["40%", "50%", "60%", "70%", "80%", "90%", "100%"];

export default function Challenges() {
  const [config, setConfig] = useState({
    step: 0,
    accType: 0,
    platform: 0,
    balance: 0,
    drawdown: 0,
    share: 0,
  });

  const basePrices = [59, 118, 228, 398, 798];

  const basePricesTwoStep = [37, 68, 140, 207, 360];

  const basePricesThreeStep = [37, 85, 128, 220, 366, 540];

  const drawdownIncrementArr = [2, 3.7, 7.7, 11.5, 20, 40.3];

  const shareIncrementArr = [4, 7.4, 15.4, 23, 40, 80.6];

  function calculateDrawdownIncrement(balance: number, drawdownStep: number) {
    if (drawdownStep === 0) return 0;

    const baseIncrement = drawdownIncrementArr[balance] || 0;

    let _base;
    let _step;

    if (drawdownStep < 3) {
      _base = baseIncrement;
      _step = drawdownStep;
    } else {
      _base = baseIncrement * 2;
      _step = drawdownStep - 1;
    }

    return Math.ceil(_base * _step);
  }

  function calculateShareIncrement(balance: number, shareStep: number) {
    if (shareStep === 0) return 0;

    const baseIncrement = shareIncrementArr[balance] || 0;

    let _base;
    let _step;

    if (shareStep < 4) {
      _base = baseIncrement;
      _step = shareStep;
    } else {
      _base = baseIncrement * 1.5;
      _step = shareStep - 1;
    }

    if (config.drawdown < 3) {
      _base = baseIncrement;
    } else {
      _base = _base * 1.7;
    }

    return Math.ceil(_base * _step);
  }

  function calculateFinalPrice(
    balance: number,
    drawdownStep: number,
    shareStep: number
  ) {
    if (config.step === 0) {
      return basePrices[balance] || 0;
    }

    const basePrice =
      config.step === 0
        ? basePrices[balance] || 0
        : config.step === 1
          ? basePricesTwoStep[balance] || 0
          : basePricesThreeStep[balance] || 0;

    const drawdownIncrement = calculateDrawdownIncrement(balance, drawdownStep);

    const shareIncrement = calculateShareIncrement(balance, shareStep);

    return Math.ceil(basePrice + drawdownIncrement + shareIncrement);
  }

  const finalPrice = calculateFinalPrice(
    config.balance,
    config.drawdown,
    config.share
  );

  useEffect(() => {
    if (config.step === 0) {
      setConfig((prev) => ({ ...prev, share: 4, drawdown: 0 }));
    } else {
      setConfig((prev) => ({ ...prev, share: 0 }));
    }
  }, [config.step]);

  return (
    <section
      id="challenges"
      className="lg:mt-20 sm:mt-28 mt-20 flex flex-col gap-5 items-center px-5 text-center"
    >
      <Heading>Choose your Evaluation</Heading>
      <div className="text-center sm:text-xl text-base px-5 font-ClashGroteskRegular max-w-5xl">
        Let us help you to choose your demo forex or futures evaluation account
        based on your experience level
      </div>

      <div className="flex sm:flex-row flex-col items-stretch gap-5 w-full sm:px-10 xs:px-5 px-0 sm:mt-10 mt-5">
        <div className="text-left flex flex-col basis-3/4 gap-5 bg-[#0D0D0D] border border-white/10 rounded-2xl relative sm:p-10 p-5">
          <div className="absolute inset-x-0 h-px w-full mx-auto -top-px shadow-2xl bg-gradient-to-r from-transparent via-white/60 to-transparent" />

          <GoldenText className="font-ClashGroteskMedium text-2xl">
            Build your account
          </GoldenText>
          <div className="flex flex-col gap-2">
            <div>
              <span className="font-ClashGroteskMedium text-RoyalOrange">
                1.
              </span>{" "}
              Select steps count:
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              {Array.from({ length: 3 }).map((_, idx) => (
                <Button
                  key={idx}
                  variant={idx === config.step ? "bronze" : "secondary"}
                  onClick={() => setConfig((prev) => ({ ...prev, step: idx }))}
                >
                  {idx + 1} Step
                </Button>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div>
              <span className="font-ClashGroteskMedium text-RoyalOrange">
                1.1.
              </span>{" "}
              Select account type:
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              {["HTC Classic"].map((item, idx) => (
                <Button
                  key={idx}
                  variant={idx === config.accType ? "bronze" : "secondary"}
                  onClick={() =>
                    setConfig((prev) => ({ ...prev, accType: idx }))
                  }
                >
                  {item}
                </Button>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div>
              <span className="font-ClashGroteskMedium text-RoyalOrange">
                2.
              </span>{" "}
              Select trading platform:
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              {["Match Trader"].map((item, idx) => (
                <Button
                  key={idx}
                  variant={idx === config.platform ? "bronze" : "secondary"}
                  onClick={() =>
                    setConfig((prev) => ({ ...prev, platform: idx }))
                  }
                >
                  {item}
                </Button>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div>
              <span className="font-ClashGroteskMedium text-RoyalOrange">
                3.
              </span>{" "}
              Select your balance:
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              {(config.step === 0
                ? balanceArr
                : config.step === 1
                  ? balanceArrTwoStep
                  : balanceArrThreeStep
              ).map((item, idx) => (
                <Button
                  key={idx}
                  variant={idx === config.balance ? "bronze" : "secondary"}
                  onClick={() =>
                    setConfig((prev) => ({ ...prev, balance: idx }))
                  }
                >
                  {item}
                </Button>
              ))}
            </div>
          </div>
          {config.step !== 0 && (
            <>
              <div className="flex flex-col gap-2">
                <div>
                  <span className="font-ClashGroteskMedium text-RoyalOrange">
                    4.
                  </span>{" "}
                  Select initial balance drawdown:
                </div>
                <div className="flex items-center gap-2 flex-wrap">
                  {initialDrawdownArr.map((item, idx) => (
                    <Button
                      key={idx}
                      variant={idx === config.drawdown ? "bronze" : "secondary"}
                      onClick={() =>
                        setConfig((prev) => ({ ...prev, drawdown: idx }))
                      }
                    >
                      {item}
                    </Button>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <div>
                  <span className="font-ClashGroteskMedium text-RoyalOrange">
                    5.
                  </span>{" "}
                  Select payout share:
                </div>
                <div className="flex items-center gap-2 flex-wrap">
                  {payoutShareArr.map((item, idx) => (
                    <Button
                      key={idx}
                      variant={idx === config.share ? "bronze" : "secondary"}
                      onClick={() =>
                        setConfig((prev) => ({ ...prev, share: idx }))
                      }
                    >
                      {item}
                    </Button>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>

        <div className="flex flex-col items-center basis-1/4 bg-[#0D0D0D] justify-around gap-5 border border-white/10 rounded-2xl relative p-10">
          <div className="absolute inset-x-0 h-px w-full mx-auto -top-px shadow-2xl bg-gradient-to-r from-transparent via-white/60 to-transparent" />

          <div className="flex flex-col gap-3">
            <div className="text-xl">Price:</div>
            <div className="flex text-5xl gap-3">
              <div className="text-[#5A5A5A] relative">
                <div className="h-1 bg-[#FF0F0F] w-full absolute top-1/2 -rotate-12" />
                <div> ${Math.round(finalPrice * 1.3) - 8}</div>
              </div>

              <div className="bg-bronzeButtonGradient bg-clip-text text-transparent">
                ${Math.ceil(finalPrice) - 8}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-1.5 w-full">
            <Seperator />
            <div className="flex items-center justify-between">
              <div>Platform :</div> <div className="text-RoyalOrange">MTR</div>
            </div>
            <Seperator />
            <div className="flex items-center justify-between">
              <div>Account Currency :</div>{" "}
              <div className="text-RoyalOrange">USD</div>
            </div>
            <Seperator />
            <div className="flex items-center justify-between">
              <div>Balance :</div>
              <div className="text-RoyalOrange">
                {config.step === 0
                  ? balanceArr[config.balance]
                  : config.step === 1
                    ? balanceArrTwoStep[config.balance]
                    : balanceArrThreeStep[config.balance]}
              </div>
            </div>
            <Seperator />
            <div className="flex items-center justify-between">
              <div>Daily Drawdown :</div>
              <div className="text-RoyalOrange">4% ($4,000)</div>
            </div>
            <Seperator />
            <div className="flex items-center justify-between">
              <div>
                {config.step === 0
                  ? "Max Total Drawdown"
                  : "Initial Balance DD :"}
              </div>
              <div className="text-RoyalOrange">
                {initialDrawdownArr[config.drawdown]}
              </div>
            </div>
            <Seperator />
            <div className="flex items-center justify-between">
              <div>Profit Target :</div>
              <div className="text-RoyalOrange">
                {config.step === 0
                  ? "9%"
                  : config.step === 1
                    ? "10% / 4%"
                    : "10% / 4% / 4%"}
              </div>
            </div>
            <Seperator />
            <div className="flex items-center justify-between">
              <div>Payout Share :</div>
              <div className="text-RoyalOrange">
                {payoutShareArr[config.share]}
              </div>
            </div>

            <Seperator />
          </div>

          <Image
            src={"/images/hero/trustpilot-2.svg"}
            alt={"trustpilot"}
            width={300}
            height={100}
            className="mx-auto"
          />

          <div className="flex flex-col gap-5">
            {/* <div className="flex flex-col gap-2">
              <div className="text-RoyalOrange text-3xl">Zeus Challenge</div>
              <div className="max-w-sm font-ClashGroteskLight text-lg">
                The Challenge is your initial dive into the becoming an Hera
                Trader. Prove your trading skills, hit the profit target,
                maintain discipline, and showcase responsible risk management.
              </div>
            </div> */}

            <Button
              variant={"bronze"}
              size={"xl"}
              className="text-black font-ClashGroteskSemiBold w-fit mx-auto"
            >
              Coming soon
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Seperator() {
  return (
    <div className="h-px w-full mx-auto -top-px shadow-2xl bg-gradient-to-r from-transparent via-[#F79955]/60 to-transparent" />
  );
}
