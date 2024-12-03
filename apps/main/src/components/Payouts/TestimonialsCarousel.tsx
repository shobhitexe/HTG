import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../Carousel";

const testimonials = [
  "https://www.youtube.com/embed/iwXVqr6tFkE",
  "https://www.youtube.com/embed/YahaGBLYQFA",
  "https://www.youtube.com/embed/Afs80FcQ_W4",
  "https://www.youtube.com/embed/Fo5YuBasYyU",
];

export default function TestimonialsCarousel() {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
        // dragFree: true,
      }}
      className="mt-10 sm:w-[80%] xs:w-[50%] w-[45%] mx-auto rounded-xl"
    >
      <CarouselContent>
        {testimonials.map((item) => (
          <CarouselItem key={item} className="sm:basis-1/4 basis-1/3 mx-5">
            <iframe
              src={item}
              className="mx-auto rounded-xl sm:w-[290px] xs:w-[200px] w-[150px] sm:h-[515px] xs:h-[400px] h-[300px]"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
