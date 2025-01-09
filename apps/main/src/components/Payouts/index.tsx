import {
  buttonVariants,
  // GoldenText,
  // Table,
  // TableBody,
  // TableCell,
  // TableHead,
  // TableHeader,
  // TableRow,
} from "@repo/ui";
import PayoutsCarousel from "./PayoutsCarousel";
import TestimonialsCarousel from "./TestimonialsCarousel";
import Link from "next/link";

export const statisticsArr = [
  { title: "Total Weekly Payouts", sub: "", value: "$14,152.39" },
  { title: "Payouts last month", sub: "", value: "TBC" },
  { title: "Avg  payout time", sub: "", value: "48 Hours" },
  { title: "Avg payout amount", sub: "", value: "$1572.48" },
];

export const TableData = [
  {
    date: "Monday",
    account: "2 Step $10,000",
    amount: "$574.31",
  },
  {
    date: "Tuesday",
    account: "2 Step $25,000",
    amount: "$1491.27",
  },
  {
    date: "Wednesday",
    account: "2 Step $50,000",
    amount: "$2124.79",
  },
  {
    date: "Thursday",
    account: "1 Step $200,000",
    amount: "$3000",
  },
  {
    date: "Thursday",
    account: "1 Step $10,000",
    amount: "$199.74",
  },
  {
    date: "Friday",
    account: "1 Step $25,000",
    amount: "$1198.24",
  },
  {
    date: "Friday",
    account: "1 Step $50,000",
    amount: "$2402.17",
  },
  {
    date: "Saturday",
    account: "1 Step $100,000",
    amount: "$3000",
  },
  {
    date: "Sunday",
    account: "2 Step $5,000",
    amount: "$161.87",
  },
];

export const TableHeadings = ["Day", "Account", "Amount"];

export default function Payouts() {
  return (
    <section className="lg:mt-20 sm:mt-28 mt-20 flex flex-col sm:gap-20 gap-10 items-center px-5 text-center">
      <div className="flex flex-col justify-center items-center">
        <div className="font-Kugile text-Apricot sm:text-5xl xs:text-4xl text-3xl font-semibold">
          Payouts and <br className="sm:hidden" /> Success Stories
        </div>

        <div className="text-center sm:text-xl text-base px-5 font-ClashGroteskRegular max-w-5xl">
          Stories from our community at Hera Trading Capital!
        </div>

        <TestimonialsCarousel />

        <PayoutsCarousel />

        <Link
          href={"/payouts"}
          className={`${buttonVariants({ variant: "gold", size: "xl", className: "relative sm:-top-20 h-14 px-16" })}`}
        >
          See More
        </Link>
      </div>

      {/* <div className="flex sm:flex-row flex-col items-start justify-around lg:w-[90%] w-[95%] mx-auto md:gap-10 sm:gap-5 gap-10">
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
      </div> */}
    </section>
  );
}
