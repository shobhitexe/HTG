import {
  Accordion,
  Button,
  GoldenText,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@repo/ui";

const FaqsArray = [
  {
    que: "What assets can be traded with HTC?",
    ans: "Traders can trade Forex, commodities. and indices. Forex trading covers major, minor, and exotic currency pairs, whilecommodities trading could include assets like gold. silver, and oil.",
  },
  {
    que: "What assets can be traded with HTC?",
    ans: "Traders can trade Forex, commodities. and indices. Forex trading covers major, minor, and exotic currency pairs, whilecommodities trading could include assets like gold. silver, and oil.",
  },
  {
    que: "What assets can be traded with HTC?",
    ans: "Traders can trade Forex, commodities. and indices. Forex trading covers major, minor, and exotic currency pairs, whilecommodities trading could include assets like gold. silver, and oil.",
  },
  {
    que: "What assets can be traded with HTC?",
    ans: "Traders can trade Forex, commodities. and indices. Forex trading covers major, minor, and exotic currency pairs, whilecommodities trading could include assets like gold. silver, and oil.",
  },
  {
    que: "What assets can be traded with HTC?",
    ans: "Traders can trade Forex, commodities. and indices. Forex trading covers major, minor, and exotic currency pairs, whilecommodities trading could include assets like gold. silver, and oil.",
  },
];

export default function page() {
  return (
    <div className="mt-28 flex sm:flex-row flex-col justify-center sm:gap-10 gap-5 sm:px-10 px-5">
      <div>
        <GoldenText className="font-Kugile sm:text-5xl xs:text-4xl text-3xl font-semibold py-2">
          Get all your <br /> questions answered{" "}
        </GoldenText>
        <div className="sm:text-lg text-base font-ClashGroteskLight">
          Join a Community of Successful Traders Sand get Funded with right
          tools and support.
        </div>

        <Button variant={"gold"} size={"xl"} className="mt-5">
          Get Funded
        </Button>
      </div>
      <Accordion type="single" collapsible className="sm:max-w-md w-full">
        {FaqsArray.map((item, index) => (
          <AccordionItem value={`item-${index + 1}`} className="mt-5 relative">
            <div className="absolute inset-x-0 h-px sm:w-full w-1/4 mx-auto -top-px shadow-2xl bg-gradient-to-r from-transparent via-white/60 to-transparent" />

            <AccordionTrigger className="text-Apricot font-medium">
              {item.que}
            </AccordionTrigger>
            <AccordionContent className="text-SilverFoil text-base">
              {item.ans}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
