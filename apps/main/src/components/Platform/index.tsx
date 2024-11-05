import Image from "next/image";

export default function Platform() {
  return (
    <section className="lg:mt-20 sm:mt-28 mt-20 justify-center flex sm:flex-row flex-col sm:gap-5 gap-1 sm:items-start items-center px-5 max-sm:text-center">
      <Image
        src={"/images/platform/tradingview.svg"}
        height={200}
        width={400}
        alt="tradingview"
        className=""
      />

      <div className="md:text-2xl text-xl max-w-5xl">
        Our platform utilizes advanced charting tools powered by TradingView,
        offering unparalleled insights for technical analysis of GBP-USD,
        USD-JPY, and many other currency pairs.
      </div>
    </section>
  );
}
