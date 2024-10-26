"use client";

import { Button, SilverText, Slider } from "@repo/ui";
import { useState } from "react";

const ButtonsArr = ["Hera Ambassador", "Hera Partner", "Hera Elite"];

const comissionArr = [38.9, 70.02, 93.36];

export default function CalculateEarnings() {
  const [sliderVal, setSliderVal] = useState(0);
  const [level, setlevel] = useState(0);

  return (
    <div className="flex flex-col sm:gap-10 gap-5 items-center justify-center w-full px-5">
      <div className="flex flex-col gap-5">
        <div className="text-Apricot font-Kugile md:text-5xl sm:text-4xl text-3xl text-center px-5">
          Let's Calculate Your Earnings
        </div>

        <div className="text-AmericanSilver md:text-2xl sm:text-lg text-base text-center max-w-5xl font-ClashGroteskLight px-5">
          Use this calculator to estimate your earnings of up to 18% for each
          new referral. This calculation is based on a client purchasing one
          Stellar $200K 2-Step Challenge.
        </div>
      </div>

      <div className="bg-rankCardBg bg-center bg-no-repeat rounded-xl flex flex-col gap-7 p-5 border border-white/10 relative">
        <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-white/40 to-transparent w-3/4 mx-auto" />
        <div className="flex items-center gap-5 flex-wrap justify-center">
          {ButtonsArr.map((item, idx) => (
            <Button
              key={item}
              variant={`${idx === level ? "bronze" : "secondary"}`}
              className="sm:min-w-[200px] min-w-[100px]"
              onClick={() => setlevel(idx)}
            >
              {item}
            </Button>
          ))}
        </div>

        <div className="w-full h-px bg-white/30" />

        <div className="flex justify-between w-full items-center sm:text-lg">
          <SilverText className="font-ClashGroteskMedium">
            Customers Referred :
          </SilverText>

          <div className="text-RoyalOrange">{sliderVal}</div>
        </div>

        <Slider
          defaultValue={[0]}
          max={1000}
          min={0}
          step={1}
          onValueChange={(e) => {
            if (e[0]) {
              setSliderVal(e[0]);
            }
          }}
        />

        <div className="bg-black px-10 py-3 rounded-lg w-fit mx-auto text-Apricot sm:text-2xl text-xl font-semibold relative shadow-sm shadow-black">
          <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-white/40 to-transparent w-3/4 mx-auto" />
          $
          {Number((comissionArr[level] || 0) * sliderVal).toLocaleString(
            "en-US",
            {
              maximumFractionDigits: 0,
            }
          )}
        </div>
      </div>
    </div>
  );
}
