"use client";

import Countdown from "react-countdown";

function SemiColon() {
  return (
    <div className="text-white sm:text-[30px] ss:text-[20px] text-[15px]">
      :
    </div>
  );
}

const renderer = ({ days, hours, minutes, seconds, completed }: any) => {
  if (completed) {
    return <div />;
  } else {
    return (
      <div className="flex items-center flex-col bg-black p-3 rounded-lg">
        <div className="sm:text-3xl xs:text-2xl text-xl">
          XMAS50 Valid till:
        </div>
        <div className="flex items-center sm:gap-3 xs:gap-2 gap-1 justify-center">
          <CountDownCard value={days} type={"DAYS"} /> <SemiColon />
          <CountDownCard value={hours} type={"HOURS"} /> <SemiColon />
          <CountDownCard value={minutes} type={"MINUTES"} /> <SemiColon />
          <CountDownCard value={seconds} type={"SECONDS"} />
        </div>
      </div>
    );
  }
};

export default function CountDown() {
  return (
    <div className="absolute sm:bottom-10 bottom-1 md:right-20 right-1/2 max-sm:translate-x-1/2">
      <Countdown date={new Date(1735603200 * 1000)} renderer={renderer} />
    </div>
  );
}

type CountDownCardProps = {
  value: string;
  type: string;
};

function CountDownCard({ value, type }: CountDownCardProps) {
  return (
    <div className="flex flex-col justify-center items-center bg-timerCardGrey sm:py-5 ss:py-4 xs:py-2 py-1 sm:px-7 xs:px-5 px-4 rounded-2xl border-b border-white/20 backdrop-blur-xl">
      <div className="text-white font-circularBold md:text-2xl text-xl">
        {value}
      </div>
      <div className="text-[#696969] ss:text-[13px] text-[50%]">{type}</div>
    </div>
  );
}
