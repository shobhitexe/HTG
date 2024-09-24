import { Button, Heading } from "@repo/ui";
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@repo/ui";

const TableData = [
  {
    heading: "Profit Target",
    five: "P1 : 8%, P2 : 5%",
    ten: "P1 : 8%, P2 : 5%",
    twentyfive: "P1 : 8%, P2 : 5%",
    fifty: "P1 : 8%, P2 : 5%",
    hundred: "P1 : 8%, P2 : 5%",
  },
  {
    heading: "Maximum Daily Loss",
    five: "5%",
    ten: "5%",
    twentyfive: "5%",
    fifty: "5%",
    hundred: "5%",
  },
  {
    heading: "Maximum Overall Loss",
    five: "10%",
    ten: "10%",
    twentyfive: "10%",
    fifty: "10%",
    hundred: "10%",
  },
  {
    heading: "Balance Based Drawdown",
    five: "tick",
    ten: "tick",
    twentyfive: "tick",
    fifty: "tick",
    hundred: "tick",
  },
  {
    heading: "Minimum Trading",
    five: "5 Days",
    ten: "5 Days",
    twentyfive: "5 Days",
    fifty: "5 Days",
    hundred: "5 Days",
  },
  {
    heading: "Profit Split Upto",
    five: "95%",
    ten: "95%",
    twentyfive: "95%",
    fifty: "95%",
    hundred: "95%",
  },
  {
    heading: "News Trading",
    five: "tick",
    ten: "tick",
    twentyfive: "tick",
    fifty: "tick",
    hundred: "tick",
  },
  {
    heading: "First Reward",
    five: "Monthly",
    ten: "Monthly",
    twentyfive: "Monthly",
    fifty: "Monthly",
    hundred: "Monthly",
  },
];

const TableHeadings = [
  { title: "Account Size", price: "", link: "" },
  { title: "$5,000", price: "$71", link: "" },
  { title: "$10,000", price: "$132", link: "" },
  { title: "$25,000", price: "$274", link: "" },
  { title: "$50,000", price: "$59", link: "" },
  { title: "$100,000", price: "$59", link: "" },
];

export default function EvalTable() {
  return (
    <section className="lg:mt-20 sm:mt-28 mt-20 flex flex-col gap-5 items-center px-5 text-center">
      <Heading>Choose your Evaluation</Heading>
      <div className="text-center sm:text-xl text-base px-5 font-ClashGroteskRegular max-w-5xl">
        Let us help you to choose your demo forex or futures evaluation account
        based on your experience level
      </div>

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

                    {item.price !== "" && (
                      <Button
                        variant={"pricing"}
                        className="flex flex-col items-center justify-center text-black w-full h-14"
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
                  {data.five === "tick" ? <TickIcon /> : data.five}
                </TableCell>
                <TableCell
                  className={`border-RaisinBlack text-AmericanSilver border-r ${idx % 2 === 0 ? "bg-[#0D0D0D]" : "bg-[#121212]"}`}
                >
                  {data.ten === "tick" ? <TickIcon /> : data.ten}
                </TableCell>
                <TableCell
                  className={`border-RaisinBlack text-AmericanSilver border-r ${idx % 2 === 0 ? "bg-[#0D0D0D]" : "bg-[#121212]"}`}
                >
                  {data.twentyfive === "tick" ? <TickIcon /> : data.twentyfive}
                </TableCell>
                <TableCell
                  className={`border-RaisinBlack text-AmericanSilver border-r ${idx % 2 === 0 ? "bg-[#0D0D0D]" : "bg-[#121212]"}`}
                >
                  {data.fifty === "tick" ? <TickIcon /> : data.fifty}
                </TableCell>
                <TableCell
                  className={`${idx === 5 ? "rounded-b-xl" : "border-RaisinBlack"} text-AmericanSilver ${idx % 2 === 0 ? "bg-[#0D0D0D]" : "bg-[#121212]"}`}
                >
                  {data.hundred === "tick" ? <TickIcon /> : data.hundred}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  );
}

function TickIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 26 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mx-auto"
    >
      <path
        d="M22.5558 0L9.30844 12.6419L3.70604 6.49186L0 10.0642L9.05096 20L26 3.84043L22.5558 0Z"
        fill="white"
      />
    </svg>
  );
}
