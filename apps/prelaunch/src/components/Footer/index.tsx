import Image from "next/image";
import Link from "next/link";

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
          of Up To $300,000.
        </div>
        <div className="text-white/50 max-w-xs text-sm mt-2">
          Hera Trading Capital Limited: 15932729
        </div>
        <div className="text-white/50 max-w-xs text-sm mt-2">
          Unit 5 Christy Court, Basildon, England, SS15 6TL
        </div>
      </div>
      <div className="bg-white/40 h-px w-full" />

      <div className="text-Apricot text-sm flex sm:flex-row flex-col text-center items-center justify-between">
        <div>Copyright © 2024 HeraTradingCapital. All Rights Reserved</div>
        <div>
          <Link href={"/terms-and-conditions"}>Terms & Conditions</Link>{" "}
          <span className="text-white">-</span>{" "}
          <Link href={"/about-us"}>About Us</Link>
        </div>
      </div>
    </div>
  );
}
