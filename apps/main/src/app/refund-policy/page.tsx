import { GoldenText } from "@repo/ui";
import Link from "next/link";

const HeadingClass = `sm:text-3xl text-2xl font-semibold py-2`;

export default function page() {
  return (
    <div className="flex flex-col sm:mt-32 mt-24 gap-10 w-full px-10 pb-20">
      {" "}
      <div className="flex flex-col sm:gap-5 gap-1">
        <GoldenText className={HeadingClass}>REFUNDS</GoldenText>
        <p className="text-AmericanSilver font-ClashGroteskLight text-xl">
          All sales are final and no refund will be issued.
        </p>
      </div>
      <div className="flex flex-col sm:gap-5 gap-1">
        <GoldenText className={HeadingClass}>QUESTIONS</GoldenText>
        <p className="text-AmericanSilver font-ClashGroteskLight text-xl">
          If you have any questions concerning our return policy, please contact
          us at:
          <br />
          <br />
        </p>
        <Link
          href={"mailto:support@heratradingcapital.com"}
          className="text-AmericanSilver font-ClashGroteskLight text-xl"
        >
          support@heratradingcapital.com
        </Link>
      </div>
    </div>
  );
}
