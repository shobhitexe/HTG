import { cn } from "../lib/utils";
import { ReactNode } from "react";

export default function SilverText({
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
        "bg-silverTextGradient bg-clip-text text-transparent font-ClashGroteskSemiBold"
      )}
    >
      {children}
    </div>
  );
}
