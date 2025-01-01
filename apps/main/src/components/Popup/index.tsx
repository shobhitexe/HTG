import { buttonVariants, Dialog, DialogContent } from "@repo/ui";
import Image from "next/image";
import Link from "next/link";

export default function Popup() {
  return (
    <Dialog defaultOpen>
      <DialogContent className="bg-[#070707] flex flex-col gap-5">
        <Image
          src={"/images/hero/sale.avif"}
          alt={"sale"}
          width={1028}
          height={1028}
        />

        <Link
          href={
            "https://platform.heratradingcapital.com/register?demo=false&competitions=false"
          }
          target="_blank"
          rel="noopener noreferrer"
          className={`${buttonVariants({ variant: "golden", className: "w-fit mx-auto text-black", size: "lg" })}`}
        >
          Buy Now
        </Link>
      </DialogContent>
    </Dialog>
  );
}
