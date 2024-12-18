import {
  Challenges,
  Community,
  Discord,
  // EvalTable,
  // Events,
  FundingJourney,
  Hero,
  HowItWorks,
  Leaderboard,
  Payouts,
  Platform,
  TableComponent,
  WhyHera,
} from "@/components";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Discord />
      <WhyHera />
      {/* <Events /> */}
      {/* <Leaderboard /> */}
      <TableComponent />

      <Platform />

      <Challenges />

      <Payouts />

      {/* <EvalTable /> */}
      <FundingJourney />
      <HowItWorks />

      <Community />
      <div className="mt-32" />
    </main>
  );
}
