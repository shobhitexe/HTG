import { Community, Video } from "@/components";
import Image from "next/image";

const GoalsLeftArr = [
  {
    title: "Community-Driven Growth :",
    desc: "We aim to cultivate a network of traders who actively learn from one another, recognizing that the strength of our firm lies in the collective knowledge of its members.",
  },
  {
    title: "Empowerment Through Education :",
    desc: "We provide traders with the tools, education, and support they need to refine their strategies, develop their skills, and maximize their potential in both simulated and real-world markets.",
  },
  {
    title: "Innovative Trading Environment :",
    desc: "Our goal is to continually evolve and innovate, providing cutting-edge resources and strategies that keep our traders ahead of the curve.",
  },
];

const GoalsRightArr = [
  {
    title: "Up to 100%",
    desc: "of Profit Split",
    icon: "/images/about/1.svg",
  },
  {
    title: "Up to 300K",
    desc: "Trading Accounts",
    icon: "/images/about/2.svg",
  },
  {
    title: "Add-Ons",
    desc: "to Enhance Trading",
    icon: "/images/about/3.svg",
  },
  {
    title: "No Min",
    desc: "Trading Days",
    icon: "/images/about/4.svg",
  },
];

const valuesArr = [
  {
    title: "Collaboration :",
    desc: "We believe in the power of shared insights and experiences. Everytrader in Hera Trading Capital brings unique perspectives, and we encourage the exchange of ideas that can elevate the entire community.",
  },
  {
    title: "Integrity :",
    desc: "Our firm operates with transparency and trust. We are committed to creating an environment where traders feel supported, respected, and equipped to succeed.",
  },
  {
    title: "Growth :",
    desc: "Whether you're a seasoned trader or just starting, Hera Trading Capital is aplace where everyone has the opportunity to learn, grow, and thrive. We are committed to providing the tools and resources necessary to help traders reach their full potential.",
  },
];

export default function page() {
  return (
    <div className="flex flex-col items-center sm:mt-32 mt-24 gap-10 w-full px-5">
      <div className="px-5 text-center">
        <h1 className="text-Apricot lg:text-7xl md:text-6xl sm:text-5xl text-4xl font-Kugile">
          About Us
        </h1>
        <h2 className="text-AmericanSilver font-ClashGroteskLight sm:text-2xl text-lg max-w-5xl">
          Something that only we can solve? Sure get in touch with us and we'll
          guide you
        </h2>
      </div>

      <div>
        <div className="w-fit mx-auto">
          <Video />
        </div>

        <p className="text-AmericanSilver mt-10 max-w-6xl text-center sm:text-xl xs:text-lg text-base font-ClashGroteskLight">
          At Hera Trading Capital, we are more than just a proprietary trading
          firm—we are a community of traders, driven by collaboration, growth,
          and shared success. Founded by Zac Angeli, ourfirm is designed with a
          singular vision: to empower traders by creating a platform built
          fortraders, by traders.
          <br />
          <br />
          We believe that the heart of trading is community. Hera Trading
          Capital fosters an environment where experienced and aspiring traders
          alike can connect, share insights, and grow together.Through
          networking and collaboration, we create a space where everyone has a
          voice, andevery idea contributes to the collective success of our
          firm.
        </p>
      </div>

      <div className="bg-blackShade sm:px-10 px-5 sm:py-20 py-10 w-full flex sm:flex-row flex-col max-sm:gap-10 items-start justify-around">
        <div>
          <div className="text-Apricot font-Kugile sm:text-5xl xs:text-4xl text-3xl font-semibold">
            Our Goals
          </div>
          <div className="flex flex-col gap-5 sm:mt-10 mt-5">
            {GoalsLeftArr.map((item) => (
              <div
                key={item.title}
                className="sm:text-xl xs:text-lg text-base flex flex-col gap-2"
              >
                <div className="text-RoyalOrange">{item.title}</div>
                <div className="sm:max-w-sm font-ClashGroteskLight">
                  {item.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="grid md:grid-cols-2 sm:grid-cols-1 grid-cols-2 sm:gap-10 gap-5">
          {GoalsRightArr.map((item) => (
            <div
              key={item.title}
              className="flex gap-2 items-start sm:text-xl xs:text-lg text-base"
            >
              <Image src={item.icon} alt={item.title} width={30} height={30} />
              <div className="flex flex-col relative -top-1">
                <div className="bg-gradient-to-r from-[#FF7A00] to-[#FF9C40] bg-clip-text text-transparent sm:text-3xl xs:text-2xl text-xl font-bold">
                  {item.title}
                </div>

                <div className="font-ClashGroteskLight">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex sm:flex-row flex-col justify-around w-full items-start">
        <Image
          src={"/images/about/values.webp"}
          alt={"values"}
          width={500}
          height={500}
          className="md:w-[500px] w-[400px] max-sm:mx-auto"
        />
        <div className="flex flex-col gap-5">
          <h1 className="text-Apricot md:text-5xl sm:text-4xl text-3xl font-Kugile">
            Our Values
          </h1>
          {valuesArr.map((item) => (
            <div
              key={item.title}
              className="bg-referralPointsGradientBG max-w-3xl sm:text-xl xs:text-lg text-base p-5"
            >
              <div className="text-[#FF912A]">{item.title}</div>
              <div className="font-ClashGroteskLight">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="sm:mt-20 mt-10 flex max-sm:flex-col-reverse items-start justify-around w-full sm:px-10 px-5">
        <div className="flex flex-col gap-10">
          <h1 className="text-Apricot md:text-6xl sm:text-5xl text-4xl font-Kugile">
            The Power of <br /> Networking
          </h1>
          <p className="text-AmericanSilver font-ClashGroteskLight sm:text-xl xs:text-lg text-base max-w-3xl">
            Under the leadership of Zac Angeli, Hera Trading Capital places
            great emphasis on the importance of networking. Zac understands that
            the connections we build are as crucial as the strategies we
            develop. <br />
            <br />
            By fostering relationships between traders, industry experts, and
            thought leaders, Hera Trading Capital is creating a thriving
            ecosystem where ideas flow freely, and success is shared.We invite
            you to be part of our growing community—where traders aren't just
            part of the system, they are the system.
          </p>
        </div>
        <Image
          src={"/images/about/networking.webp"}
          alt={"networking"}
          width={550}
          height={550}
          className="md:w-[550px] w-[400px] max-sm:mx-auto"
        />
      </div>

      <div className="w-full mb-20">
        <Community />
      </div>
    </div>
  );
}
