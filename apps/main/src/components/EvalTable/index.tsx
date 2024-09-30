import { Heading } from "@repo/ui";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@repo/ui";
import HTCone from "./HTCone";
import HTCPro from "./HTCPro";

export default function EvalTable() {
  return (
    <section className="lg:mt-20 sm:mt-28 mt-20 flex flex-col gap-5 items-center px-5 text-center">
      <Heading>Our Popular Presets</Heading>
      <div className="text-center sm:text-xl text-base px-5 font-ClashGroteskRegular max-w-5xl">
        Let us help you to choose your demo forex or futures evaluation account
        based on your experience level
      </div>

      <Tabs defaultValue="one" className="w-full">
        {/* <TabsList className="bg-[#161616]">
          <TabsTrigger value="one" className="text-lg">
            HTC One
          </TabsTrigger>
          <TabsTrigger value="pro" className="text-lg">
            HTC Pro
          </TabsTrigger>
        </TabsList> */}
        <TabsContent value="one">
          <HTCone />
        </TabsContent>
        <TabsContent value="pro">
          <HTCPro />
        </TabsContent>
      </Tabs>
    </section>
  );
}
