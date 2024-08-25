import Image from "next/image";

export default function Footer() {
  return (
    <div className="mt-20 w-[90%] mx-auto flex flex-col gap-5 py-5">
      <div>
        <Image
          src={"/images/navbar/logo.png"}
          alt={"logo"}
          width={180}
          height={50}
        />
        <div className="text-white/50 max-w-xs text-sm">
          Hera Trading Group, the Epitome of Trading like the Gods, with Capital
          of Up To $200,000.
        </div>
      </div>
      <div className="bg-white/40 h-px w-full" />

      <div className="text-Apricot text-sm flex items-center justify-between">
        <div>Copyright © 2024 HeraTradingCapital. All Rights Reserved</div>
        <div>
          Terms & Conditions <span className="text-white">-</span> Privacy &
          policy
        </div>
      </div>
    </div>
  );
}
