import {
  Community,
  Discord,
  EvalTable,
  Events,
  FundingJourney,
  Hero,
  HowItWorks,
  TableComponent,
  WhyHera,
} from "@/components";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Discord />
      <WhyHera />
      <Events />
      <TableComponent />
      <EvalTable />
      <FundingJourney />
      <HowItWorks />
      <Community />
      <div className="mt-32" />
    </main>
  );
}
