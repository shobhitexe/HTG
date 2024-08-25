import { cn } from "../lib/utils";
import { ReactNode } from "react";

export default function GoldenText({
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
        "bg-goldenTextGradient bg-clip-text text-transparent font-Kugile"
      )}
    >
      {children}
    </div>
  );
}
