import { Community } from "@/components";
import { buttonVariants } from "@repo/ui";
import Link from "next/link";

export default function page() {
  return (
    <div className="flex flex-col items-center sm:mt-32 mt-24 gap-10">
      <div
        className="p-5 text-center"
        style={{
          background: "radial-gradient(at bottom, #FFB169 -290%, #070707 60%)",
        }}
      >
        <h1 className="text-Apricot lg:text-6xl md:text-5xl sm:text-4xl text-3xl font-Kugile py-5 font-semibold">
          Thank You
        </h1>
        <h2 className="text-AmericanSilver font-ClashGroteskLight sm:text-2xl text-lg max-w-5xl font-semibold">
          Your Trading Journey Starts Today!
        </h2>
        <h2 className="text-AmericanSilver font-ClashGroteskLight sm:text-2xl text-lg max-w-5xl font-semibold mt-2">
          You will receive confirmation of your order within 24 hours. Please
          make sure to check spam/junk folders. If 24 hours has passed, and you
          are yet to receive confirmation, contact support
        </h2>
      </div>

      <Link
        href={"/"}
        className={buttonVariants({
          variant: "gold",
          size: "xl",
          className: "relative z-10",
        })}
      >
        Back To Homepage
      </Link>

      <div className=" relative -top-20 w-full">
        <Community />
      </div>
    </div>
  );
}
