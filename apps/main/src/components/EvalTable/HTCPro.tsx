import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@repo/ui";
import { Dispatch, SetStateAction } from "react";

const TableData = [
  {
    heading: "Initial Balance",
    budget: "$12,000",
    olympus: "$115,000",
    titan: "$200,000",
  },
  {
    heading: "Profit Target",
    budget: "P1 : 8%, P2 : 5%",
    olympus: "P1 : 8%, P2 : 5%",
    titan: "P1 : 8%, P2 : 5%",
  },
  {
    heading: "Maximum Daily Loss",
    budget: "5%",
    olympus: "5%",
    titan: "5%",
  },
  {
    heading: "Maximum Overall Loss",
    budget: "8%",
    olympus: "10%",
    titan: "10%",
  },
  {
    heading: "Profit Split",
    budget: "80%",
    olympus: "100%",
    titan: "100%",
  },
  {
    heading: "Payouts",
    budget: "7 Days",
    olympus: "7 Days",
    titan: "3 Days",
  },
  {
    heading: "Maximum Trading Days",
    budget: "Unlimited",
    olympus: "Unlimited",
    titan: "Unlimited",
  },
  {
    heading: "Minimum Trading Days",
    budget: "4 Days",
    olympus: "1 Day (For Each Step)",
    titan: "95%",
  },
  {
    heading: "Daily Pause Allowance",
    budget: "2%",
    olympus: "2%",
    titan: "2%",
  },
  {
    heading: "Daily Profit Cap",
    budget: "2%",
    olympus: "2%",
    titan: "2%",
  },
];

const TableHeadings = [
  {
    title: "Account Size",
    price: "",
  },
  {
    title: "Budget Friendly",
    price: "$58",
    config: {
      step: 0,
      accType: 0,
      platform: 0,
      balance: 0,
      drawdown: 0,
      share: 0,
    },
  },
  {
    title: "Olympus (Amateur)",
    price: "$529",
    config: {
      step: 0,
      accType: 0,
      platform: 0,
      balance: 3,
      drawdown: 0,
      share: 0,
    },
  },
  {
    title: "Titan Tier",
    price: "$789",
    config: {
      step: 2,
      accType: 0,
      platform: 0,
      balance: 4,
      drawdown: 2,
      share: 4,
    },
  },
];

export default function HTCPro({
  setConfig,
}: {
  setConfig: Dispatch<SetStateAction<configType>>;
}) {
  return (
    <div className="sm:w-[80%] w-[90%] mx-auto mt-10 border border-white/10 rounded-xl relative">
      <div className="absolute inset-x-0 h-px w-full mx-auto -top-px shadow-2xl bg-gradient-to-r from-transparent via-white/40 to-transparent" />

      <Table className="w-full text-center sm:text-lg text-base whitespace-nowrap">
        <TableHeader>
          <TableRow className="bg-[#0A0A0A] rounded-t-xl">
            {TableHeadings.map((item, idx) => (
              <TableHead
                key={item.title}
                className={`${idx === 5 ? "rounded-t-xl" : "border-r border-RaisinBlack"}`}
              >
                <div className="flex flex-col items-center justify-center py-5 gap-2">
                  <div>{item.title}</div>

                  {item.price !== "" && item.config && (
                    <Button
                      variant={"pricing"}
                      className="flex flex-col items-center justify-center text-black w-fit px-5 h-14"
                      onClick={() => {
                        setConfig(item.config);
                      }}
                    >
                      <div className="font-semibold text-base leading-none">
                        Get Plan
                      </div>
                      <div>Fee : {item.price}</div>
                    </Button>
                  )}
                </div>
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody className="bg-[#121212]">
          {TableData.map((data, idx) => (
            <TableRow key={data.heading}>
              <TableCell
                className={`border-RaisinBlack ${idx === 5 && "rounded-bl-xl"} border-r text-left text-AmericanSilver ${idx % 2 === 0 ? "bg-[#0D0D0D]" : "bg-[#121212]"}`}
              >
                {data.heading}
              </TableCell>
              <TableCell
                className={`border-RaisinBlack text-AmericanSilver border-r ${idx % 2 === 0 ? "bg-[#0D0D0D]" : "bg-[#121212]"}`}
              >
                {data.budget}
              </TableCell>
              <TableCell
                className={`border-RaisinBlack text-AmericanSilver border-r ${idx % 2 === 0 ? "bg-[#0D0D0D]" : "bg-[#121212]"}`}
              >
                {data.olympus}
              </TableCell>
              <TableCell
                className={`${idx === 5 ? "rounded-b-xl" : "border-RaisinBlack"} text-AmericanSilver ${idx % 2 === 0 ? "bg-[#0D0D0D]" : "bg-[#121212]"}`}
              >
                {data.titan}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
