import { Button, Heading } from "@repo/ui";
import Video from "./Video";

export default function HowItWorks() {
  return (
    <section className="lg:mt-20 sm:mt-28 mt-20 flex flex-col gap-5 items-center px-5 text-center">
      <Heading>How it Works</Heading>
      <div className="sm:px-10">
        <Video />
      </div>

      <div className="font-ClashGroteskRegular sm:text-xl xs:text-base text-base">
        Join a Community of Successful Traders and get Funded with right tools
        and support.
      </div>

      <Button variant={"gold"} size={"xl"}>
        Get Funded
      </Button>
    </section>
  );
}
