import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@repo/ui";

const TableData = [
  {
    account: "200K Stellar 2-Step Stellar Account",
    prize: "$300,000",
  },
  {
    account: "50K Stellar 2 Step Stellar Account",
    prize: "$300,000",
  },
  {
    account: "200K Stellar 2-Step Stellar Account",
    prize: "$300,000",
  },
  {
    account: "200K Stellar 2-Step Stellar Account",
    prize: "$300,000",
  },
  {
    account: "50K Stellar 2 Step + 5 x 6K Stellar Account",
    prize: "$300,000",
  },
  {
    account: "200K Stellar 2-Step Stellar Account",
    prize: "$300,000",
  },
  {
    account: "200K Stellar 2-Step Stellar Account",
    prize: "$300,000",
  },
  {
    account: "50K Stellar 2 Step Stellar Account",
    prize: "$300,000",
  },
];

const TableHeadings = ["Competition Rank", "Free Account", "Cash Prize"];

export default function AffiliateContest() {
  return (
    <div className="flex flex-col w-full mt-10">
      <div className="flex flex-col justify-center items-center text-center">
        <div className="text-Apricot font-Kugile md:text-5xl sm:text-4xl text-3xl text-center px-5">
          Affiliate Contest
        </div>
        <h2 className="text-AmericanSilver font-ClashGroteskLight sm:text-xl text-base max-w-5xl">
          Use this calculator to estimate your earnings of up to 18% for each
          new referral. This calculation is based on a client purchasing one
          Stellar $200K 2-Step Challenge.
        </h2>
      </div>

      <Table className="w-[80%] sm:mt-20 mt-10 mx-auto text-center sm:text-lg text-base whitespace-nowrap">
        <TableHeader>
          <TableRow className="bg-[#0A0A0A] rounded-t-xl">
            {TableHeadings.map((item) => (
              <TableHead key={item}>
                <div
                  key={item}
                  className="flex flex-col items-center justify-center py-5 gap-2"
                >
                  {item}
                </div>
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody className="bg-[#121212]">
          {TableData.map((data, idx) => (
            <TableRow
              key={data.account}
              className="border-b border-RaisinBlack  text-AmericanSilver"
            >
              <TableCell>{idx + 1}.</TableCell>
              <TableCell>{data.account}</TableCell>
              <TableCell>{data.prize}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
