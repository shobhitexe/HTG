import {
  Accordion,
  Button,
  GoldenText,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@repo/ui";
import { FaqsArray } from "./FaqsArray";

export default function page() {
  return (
    <div className="mt-28 flex flex-col justify-around md:gap-10 gap-5 sm:px-10 px-5 sm:w-[90%] mx-auto">
      <div>
        <GoldenText className="font-Kugile md:text-5xl xs:text-4xl text-3xl font-semibold py-2">
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
      <Accordion type="single" collapsible className="sm:max-w-mds w-full">
        {FaqsArray.map((item, index) => (
          <AccordionItem value={`item-${index + 1}`} className="mt-5 relative">
            <div className="absolute inset-x-0 h-px sm:w-full w-1/2 mx-auto -top-px shadow-2xl bg-gradient-to-r from-transparent via-white/60 to-transparent" />

            <AccordionTrigger className="text-Apricot font-medium">
              {item.que}
            </AccordionTrigger>
            <AccordionContent className="text-SilverFoil text-base">
              {item.ans.split("<br/>").map((text) => (
                <div key={text}>
                  {text}
                  <br />
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
