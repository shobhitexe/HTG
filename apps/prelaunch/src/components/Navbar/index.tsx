import Image from "next/image";
import Link from "next/link";
import { Button } from "@repo/ui";

export default function Navbar() {
  return (
    <header className="fixed top-0 z-20 mx-auto flex w-full items-center justify-between py-3 sm:px-10 px-5">
      <div className="pointer-events-none absolute inset-0  z-[1] h-[20vh] backdrop-blur-[0.0625px] [mask-image:linear-gradient(0deg,transparent_0%,#000_12.5%,#000_25%,transparent_37.5%)]"></div>
      <div className="pointer-events-none absolute inset-0  z-[2] h-[20vh] backdrop-blur-[0.125px] [mask-image:linear-gradient(0deg,transparent_12.5%,#000_25%,#000_37.5%,transparent_50%)]"></div>
      <div className="pointer-events-none absolute inset-0  z-[3] h-[20vh] backdrop-blur-[0.25px] [mask-image:linear-gradient(0deg,transparent_25%,#000_37.5%,#000_50%,transparent_62.5%)]"></div>
      <div className="pointer-events-none absolute inset-0  z-[4] h-[20vh] backdrop-blur-[0.5px] [mask-image:linear-gradient(0deg,transparent_37.5%,#000_50%,#000_62.5%,transparent_75%)]"></div>
      <div className="pointer-events-none absolute inset-0  z-[5] h-[20vh] backdrop-blur-[1px] [mask-image:linear-gradient(0deg,transparent_50%,#000_62.5%,#000_75%,transparent_87.5%)]"></div>
      <div className="pointer-events-none absolute inset-0  z-[6] h-[20vh] backdrop-blur-[2px] [mask-image:linear-gradient(0deg,transparent_62.5%,#000_75%,#000_87.5%,transparent_100%)]"></div>
      <div className="pointer-events-none absolute inset-0  z-[7] h-[20vh] backdrop-blur-[4px] [mask-image:linear-gradient(0deg,transparent_75%,#000_87.5%,#000_100%,transparent_112.5%)]"></div>
      <div className="mx-auto flex w-full items-center justify-between">
        <Link className="z-[10]" href="/">
          <Image
            src={"/images/navbar/logo.png"}
            alt={"logo"}
            width={180}
            height={50}
            className="sm:w-[180px] w-[150px]"
          />
        </Link>
        <div className="z-[10]">
          <Button
            variant={"golden"}
            size={"xl"}
            className="text-black font-ClashGroteskMedium text-base sm:px-10 px-5 sm:h-10 h-8"
          >
            Join the Waitlist
          </Button>
        </div>
      </div>
    </header>
  );
}
