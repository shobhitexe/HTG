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
      <Leaderboard />
      <TableComponent />
      <Challenges />

      <Platform />

      {/* <EvalTable /> */}
      <FundingJourney />
      <HowItWorks />
      <Community />
      <div className="mt-32" />
    </main>
  );
}
