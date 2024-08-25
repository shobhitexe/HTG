import { Button, GoldenText } from "@repo/ui";
import Image from "next/image";

export default function BecomeTrader() {
  return (
    <div className="mt-10 flex items-center justify-center gap-10 relative -left-10">
      <Image
        src={"/images/becomehera/hera.webp"}
        alt={"hera"}
        width={550}
        height={550}
      />
      <div className="flex flex-col">
        <GoldenText className="text-7xl pt-3">
          Become a <br />
          Hera Trader!
        </GoldenText>
        <div className="max-w-md">
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
