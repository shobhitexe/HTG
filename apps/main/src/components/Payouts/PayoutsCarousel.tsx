import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../Carousel";

export default function PayoutsCarousel() {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
        // dragFree: true,
      }}
      className="mt-5 sm:w-[80%] w-[40%] mx-auto"
    >
      <CarouselContent>
        {Array.from({ length: 8 }).map((_, idx) => {
          return (
            <CarouselItem
              key={idx}
              className="sm:basis-1/3 xs:basis-1/2 basis-4/5"
            >
              <div className="bg-AmericanSilver/10 p-1 rounded-xl">
                <Image
                  src={`/images/payouts/${idx + 1}.webp`}
                  width={480}
                  height={480}
                  alt="certi"
                  className="rounded-xl mx-auto w-full"
                />
              </div>
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
