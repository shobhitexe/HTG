import { cn } from "./lib/utils";
import { ReactNode } from "react";

export default function Heading({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        className,
        "text-Apricot font-Kugile flex items-center gap-5 lg:text-6xl md:text-5xl sm:text-4xl text-3xl text-center xs:py-3 py-1"
      )}
    >
      <img
        src="/images/arrows/left.svg"
        className="md:w-[250px] sm:w-[150px] xs:w-[100px] w-[50px]"
      />
      {children}
      <img
        src="/images/arrows/right.svg"
        className="md:w-[250px] sm:w-[150px] xs:w-[100px] w-[50px]"
      />
    </div>
  );
}
