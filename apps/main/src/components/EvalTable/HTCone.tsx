"use client";

import {
  buttonVariants,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@repo/ui";
import { Dispatch, SetStateAction } from "react";
import { Link as ScrollLink } from "react-scroll";

const TableData = [
  {
    heading: "Initial Balance",
    budget: "$10,000",
    olympus: "$100,000",
    titan: "$200,000",
  },
  {
    heading: "Profit Target",
    budget: "9%",
    olympus: "9%",
    titan: "P1 : 10%, P2 : 4%, P3 : 4%",
  },
  {
    heading: "Maximum Daily Loss",
    budget: "4%",
    olympus: "4%",
    titan: "4%",
  },
  {
    heading: "Max Total Drawdown",
    budget: "8%",
    olympus: "8%",
    titan: "8%",
  },
  {
    heading: "Profit Split",
    budget: "80%",
    olympus: "80%",
    titan: "80%",
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
    olympus: "4 Days",
    titan: "1 Day (For Each Step)",
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
    titan: "-",
  },
];

const TableHeadings = [
  { title: "Account Size", price: "", link: "" },
  {
    title: "Warming up",
    price: "$51",
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
    title: "Midway to Olympus",
    price: "$390",
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
    price: "$518",
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

export default function HTCone({
  setConfig,
}: {
  setConfig: Dispatch<SetStateAction<configType>>;
}) {
  return (
    <div className="w-[90%] mx-auto mt-10 border border-white/10 rounded-xl relative">
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
                    <ScrollLink
                      to={"challenges"}
                      spy={true}
                      smooth={true}
                      offset={50}
                      delay={0}
                      className={buttonVariants({
                        variant: "pricing",
                        className:
                          "flex flex-col items-center justify-center text-black w-fit px-5 h-14 cursor-pointer",
                      })}
                      onClick={() => {
                        setConfig(item.config);
                      }}
                    >
                      <div className="font-semibold text-base leading-none">
                        Get Plan
                      </div>
                      <div>Fee : {item.price}</div>
                    </ScrollLink>
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
