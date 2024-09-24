import {
  Heading,
  Table,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "@repo/ui";

export default function Leaderboard() {
  return (
    <section className="lg:mt-20 sm:mt-28 mt-20 flex flex-col gap-5 items-center px-5 text-center">
      <Heading>Leaderboard</Heading>

      <div className="sm:w-[80%] w-[90%] mx-auto mt-10 border border-white/10 rounded-3xl relative">
        <Table className="w-full text-center sm:text-lg text-base whitespace-nowrap">
          <TableCaption className="bg-[url('/images/leaderboard/bg.avif')] bg-center bg-cover relative -top-2">
            <div className="min-h-96 h-full flex w-full items-center justify-center sm:text-4xl text-3xl">
              Coming Soon
            </div>
          </TableCaption>
          <TableHeader className="rounded-tl-3xl">
            <TableRow className="bg-leaderBorderHeaderGradient text-black rounded-t-3xl">
              <TableHead className="rounded-tl-3xl">#</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Profit</TableHead>
              <TableHead>Equity</TableHead>
              <TableHead>Account size</TableHead>
              <TableHead>Gain %</TableHead>
              <TableHead className="rounded-tr-3xl">Country</TableHead>
            </TableRow>
          </TableHeader>
        </Table>
      </div>
    </section>
  );
}
