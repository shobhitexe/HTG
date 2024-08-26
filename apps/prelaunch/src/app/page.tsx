import { BecomeTrader, Community, Discord, Hero } from "@/components";
import WhyHera from "@/components/WhyHera";
import { Toaster } from "@repo/ui";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Discord />
      <WhyHera />
      <BecomeTrader />
      <Community />
      <Toaster />
    </main>
  );
}
