import { Button, GoldenText } from "@repo/ui";
import Image from "next/image";

export default function BecomeTrader() {
  return (
    <div className="sm:mt-10 mt-5 flex sm:flex-row flex-col items-center justify-center sm:gap-10 relative sm:-left-10 px-5">
      <Image
        src={"/images/becomehera/hera.webp"}
        alt={"hera"}
        width={550}
        height={550}
        className=""
      />
      <div className="flex flex-col">
        <GoldenText className="lg:text-7xl md:text-6xl sm:text-5xl xs:text-4xl text-3xl pt-3">
          Become a <br />
          Hera Trader!
        </GoldenText>
        <div className="max-w-md sm:text-base text-sm">
          Join the Pre-Launch waitlist now to avail up to 50% discounts in the
          pre-sale. Hop on with us on this amazing journey to revolutionize prop
          trading industry!
        </div>
        <Button
          variant={"golden"}
          size={"xl"}
          className="text-black font-bold w-fit mt-5 text-base"
        >
          Join the Waitlist
        </Button>
      </div>
    </div>
  );
}