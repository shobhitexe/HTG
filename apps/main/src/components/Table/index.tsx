import { Heading } from "@repo/ui";
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@repo/ui";
import Image from "next/image";

const TableData = [
  {
    heading: "Profit Share",
    HeraTrading: "Up to 100%",
    FTMO: "80%",
    FundedNext: "80%",
  },
  {
    heading: "Profit Targets",
    HeraTrading: "8% / 4%",
    FTMO: "10% / 5%",
    FundedNext: "10% / 5%",
  },
  {
    heading: "Daily Drawdown",
    HeraTrading: "6%",
    FTMO: "5%",
    FundedNext: "5%",
  },
  {
    heading: "First Payout",
    HeraTrading: "3 Days",
    FTMO: "14 Days",
    FundedNext: "30 Days",
  },
  {
    heading: "100K Price",
    HeraTrading: "$350",
    FTMO: "$540",
    FundedNext: "$569",
  },
  {
    heading: "Jurisdiction",
    HeraTrading: "UK",
    FTMO: "Czech Republic",
    FundedNext: "UAE",
  },
];

export default function TableComponent() {
  return (
    <section className="lg:mt-20 sm:mt-28 mt-20 flex flex-col items-center">
      <Heading>
        Why Choose
        <br />
        Hera Trading Capital
      </Heading>

      <div className="sm:w-[70%] w-[90%] mx-auto mt-10 border border-white/10 rounded-xl relative">
        <div className="absolute inset-x-0 h-px w-full mx-auto -top-px shadow-2xl bg-gradient-to-r from-transparent via-Rajah/40 to-transparent" />

        <Table className="w-full text-center sm:text-lg text-base whitespace-nowrap">
          <TableHeader>
            <TableRow className="bg-[#0A0A0A] rounded-t-xl">
              <TableHead className="rounded-t-xl text-SilverFoil">
                VARIABLES
              </TableHead>
              <TableHead>
                <Image
                  src={"/images/navbar/logo.png"}
                  alt={"hera trading"}
                  width={150}
                  height={50}
                  className="mx-auto"
                />
              </TableHead>
              <TableHead>
                {" "}
                <Image
                  src={"/images/compare/ftmo.png"}
                  alt={"ftmo"}
                  width={100}
                  height={50}
                  className="mx-auto"
                />
              </TableHead>
              <TableHead className="rounded-t-xl">
                {" "}
                <Image
                  src={"/images/compare/fundednext.png"}
                  alt={"fundednext"}
                  width={130}
                  height={70}
                  className="mx-auto"
                />
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="bg-[#121212]">
            {TableData.map((data, idx) => (
              <TableRow key={data.heading}>
                <TableCell
                  className={`font-medium border-RaisinBlack ${idx === 5 ? "rounded-bl-xl" : "border-b"} border-r text-SilverFoil`}
                >
                  {data.heading}
                </TableCell>
                <TableCell
                  className={`font-medium border-RaisinBlack text-Apricot ${idx !== 5 && "border-b"} border-r`}
                >
                  {data.HeraTrading}
                </TableCell>
                <TableCell
                  className={`font-medium border-RaisinBlack text-Gray ${idx !== 5 && "border-b"} border-r`}
                >
                  {data.FTMO}
                </TableCell>
                <TableCell
                  className={`${idx === 5 ? "rounded-b-xl" : "border-RaisinBlack border-b"} text-Gray`}
                >
                  {data.FundedNext}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  );
}
