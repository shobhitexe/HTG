import {
  GoldenText,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@repo/ui";

const statisticsArr = [
  { title: "Total in payouts", sub: "9263 payouts", value: "$428,968" },
  { title: "Payouts last month", sub: "263 payouts", value: "$126,968" },
  { title: "Avg  payout time", sub: "", value: "10 Hours" },
  { title: "Avg payout amount", sub: "", value: "$5,982" },
];

const TableData = [
  {
    date: "45 Minutes ago",
    account: "HTC Classic, $10,000",
    amount: "$272",
  },
  {
    date: "1 Hour ago",
    account: "HTC Classic, $10,000",
    amount: "$812",
  },
  {
    date: "1 Hour ago",
    account: "200K Stellar 2-Step Stellar Account",
    amount: "$1,268",
  },
  {
    date: "2 Hour ago",
    account: "HTC Classic, $10,000",
    amount: "$1,663",
  },
  {
    date: "5 Hour ago",
    account: "HTC Classic, $10,000",
    amount: "$1,923",
  },
  {
    date: "5 Hour ago",
    account: "HTC Classic, $10,000",
    amount: "$1.923",
  },
  {
    date: "5 Hour ago",
    account: "HTC Classic, $10,000",
    amount: "$158",
  },
  {
    date: "8 Hour ago",
    account: "HTC Classic, $10,000",
    amount: "$406",
  },
  {
    date: "11 Hour ago",
    account: "HTC Classic, $10,000",
    amount: "$1,934",
  },
];

const TableHeadings = ["Date", "Account", "Amount"];

export default function Payouts() {
  return (
    <section className="lg:mt-20 sm:mt-28 mt-20 flex flex-col gap-5 items-center px-5 text-center">
      <div className="flex sm:flex-row flex-col items-start justify-around lg:w-[90%] w-[95%] mx-auto md:gap-10 sm:gap-5 gap-10">
        <div className="flex flex-col gap-5 sm:basis-1/3 max-sm:w-full">
          <div className="font-Kugile text-Apricot sm:text-5xl text-4xl font-semibold">
            Statistics
          </div>
          <div className="flex flex-col gap-5 bg-rankCardBg relative md:p-12 p-5 rounded-2xl max-sm:rounded-lg">
            <div className="absolute -top-px inset-x-0 w-2/3 mx-auto h-px bg-gradient-to-r from-transparent via-white/60 to-transparent" />

            {statisticsArr.map((item, idx) => (
              <div
                key={item.title}
                className={`flex lg:flex-row flex-col max-sm:flex-row justify-between items-start lg:gap-10 sm:gap-5 ${idx !== 3 && "border-b border-[#363636] pb-7 max-md:pb-4"}`}
              >
                <div className="flex flex-col text-left items-start">
                  <div className="md:text-xl text-lg font-ClashGroteskSemiBold">
                    {item.title}
                  </div>
                  <GoldenText className="md:text-lg text-base font-ClashGroteskMedium">
                    {item.sub}
                  </GoldenText>
                </div>
                <GoldenText className="md:text-3xl text-2xl font-semibold font-ClashGroteskMedium whitespace-nowrap">
                  {item.value}
                </GoldenText>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-5 sm:basis-2/3 max-sm:w-full">
          <div className="font-Kugile text-Apricot sm:text-5xl text-4xl font-semibold">
            Latest Payouts
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
    </section>
  );
}
