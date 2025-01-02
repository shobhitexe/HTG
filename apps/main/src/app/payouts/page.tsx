import { Community } from "@/components";
import { statisticsArr, TableData, TableHeadings } from "@/components/Payouts";
import PayoutsCarousel from "@/components/Payouts/PayoutsCarousel";
import TestimonialsCarousel from "@/components/Payouts/TestimonialsCarousel";
import {
  buttonVariants,
  GoldenText,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@repo/ui";
import Image from "next/image";
import Link from "next/link";

export default function page() {
  return (
    <div className="flex flex-col justify-center items-center gap-10 sm:mt-40 mt-32 px-5">
      <div className="bg-gradient-to-b from-[#BD793A] to-[#2F1600] rounded-2xl w-[90%] max-md:w-full justify-between flex sm:flex-row flex-col items-center px-10 max-sm:px-5 py-5">
        <div className="flex flex-col gap-3">
          <div className="sm:text-5xl text-4xl font-semibold">
            Over $42,000,000
          </div>
          <div className="sm:text-5xl text-4xl text-black font-semibold">
            in earnings paid to HTC Traders.
          </div>
          <div className="max-w-md">
            At Hera Trading Capital, we prioritize our traders by ensuring all
            payouts are processed promptly and efficiently, reflecting our
            commitment to transparency and reliability.
          </div>
          <div className="text-2xl">Trade, Learn, Earn with HTC.</div>
          <Link
            rel="noopener nofollow"
            target="_blank"
            href={"https://platform.heratradingcapital.com/dashboard"}
            className={`${buttonVariants({ variant: "bronze", className: "w-fit" })}`}
          >
            Start Trading
          </Link>
        </div>

        <Image
          src={"/images/payouts/hera.webp"}
          alt={"hera"}
          width={365.4}
          height={346.5}
        />
      </div>

      <div className="flex sm:flex-row flex-col items-start justify-around lg:w-[90%] w-[95%] mx-auto md:gap-10 sm:gap-5 gap-10">
        <div className="flex flex-col gap-5 sm:basis-1/3 max-sm:w-full">
          <div className="font-Kugile text-Apricot sm:text-5xl xs:text-4xl text-3xl font-semibold">
            Statistics
          </div>
          <div className="flex flex-col gap-1 bg-rankCardBg relative p-5 rounded-2xl max-sm:rounded-lg">
            <div className="absolute -top-px inset-x-0 w-2/3 mx-auto h-px bg-gradient-to-r from-transparent via-white/60 to-transparent" />

            {statisticsArr.map((item, idx) => (
              <div
                key={item.title}
                className={`flex lg:flex-row flex-col max-sm:flex-row justify-between items-start gap-5 ${idx !== 3 && "border-b border-[#363636] pb-3 max-md:pb-4"}`}
              >
                <div className="flex flex-col text-left items-start">
                  <div className="md:text-xl sm:text-lg text-base font-ClashGroteskSemiBold">
                    {item.title}
                  </div>
                  <GoldenText className="md:text-lg sm:text-base text-sm font-ClashGroteskMedium">
                    {item.sub}
                  </GoldenText>
                </div>
                <GoldenText className="md:text-3xl sm:text-2xl text-xl font-semibold font-ClashGroteskMedium whitespace-nowrap">
                  {item.value}
                </GoldenText>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-5 sm:basis-2/3 max-sm:w-full">
          <div className="font-Kugile text-Apricot sm:text-5xl xs:text-4xl text-3xl font-semibold">
            Last Weeks Payouts
          </div>

          <Table className="text-center sm:text-lg text-base whitespace-nowrap rounded-3xl">
            <TableHeader className="rounded-tl-3xl">
              <TableRow className="bg-leaderBorderHeaderGradient text-black rounded-t-3xl">
                {TableHeadings.map((item, idx) => (
                  <TableHead
                    key={item}
                    className={`${idx === 0 && "rounded-l-2xl"} ${idx === 2 && "rounded-r-2xl"}`}
                  >
                    <div
                      key={item}
                      className="flex flex-col items-center justify-center gap-2"
                    >
                      {item}
                    </div>
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody className="bg-[#121212]">
              {TableData.map((data) => (
                <TableRow
                  key={data.account}
                  className="border-b border-RaisinBlack  text-AmericanSilver"
                >
                  <TableCell className="p-1.5">{data.date}</TableCell>
                  <TableCell className="p-1.5">{data.account}</TableCell>
                  <TableCell className="p-1.5">{data.amount}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
      <TestimonialsCarousel position="payout" />

      <PayoutsCarousel position="payout" />

      <div className="w-full mb-20">
        <Community />
      </div>
    </div>
  );
}
