import { Heading } from "@repo/ui";
import Image from "next/image";

const CardsData = [
  {
    title: "Make Your Own Evaluation Account",
    image: "/images/FundingJourney/MakeAccount.webp",
  },
  {
    title: "Pass the Evaluation Challenge",
    image: "/images/FundingJourney/PassChallenge.webp",
  },
  {
    title: "Become a Hera Funded Trader",
    image: "/images/FundingJourney/HeraTrader.webp",
  },
];

export default function FundingJourney() {
  return (
    <section className="lg:mt-20 sm:mt-28 mt-20 sm:bg-gradient-to-b from-Rajah via-transparent to-transparent p-px sm:w-[90%] mx-auto rounded-3xl">
      <div className="flex flex-col items-center px-5 bg-[#070707] py-10 rounded-3xl">
        <Heading>
          The Funding <br />
          Journey
        </Heading>
        <div className="mt-10 flex flex-wrap justify-center gap-5">
          {CardsData.map((item, idx) => (
            <div
              key={item.title}
              className="flex flex-col items-center justify-end text-center max-w-sm w-full border border-Rajah rounded-3xl pt-5"
              style={{
                background:
                  "radial-gradient(at center bottom, #FFB169 -100%, #070707 70%)",
              }}
            >
              {idx !== 1 && (
                <div className="sm:text-3xl text-2xl px-5">{item.title}</div>
              )}
              <Image
                src={item.image}
                alt={item.title}
                width={300}
                height={300}
                className={`${idx === 1 ? "w-[250px]" : "w-[300px]"}`}
              />
              {idx === 1 && (
                <div className="text-3xl px-5 pb-5">{item.title}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
