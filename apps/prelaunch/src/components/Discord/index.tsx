import { Button, buttonVariants, DiscordIcon } from "@repo/ui";
import Link from "next/link";

export default function Discord() {
  return (
    <div className="bg-discordSectionBg my-10 w-full sm:py-10 py-5">
      <div className="bg-[#070707] flex sm:flex-row flex-col items-center justify-center py-5 w-fit mx-auto px-20 sm:gap-5 gap-2 sm:rounded-full rounded-2xl">
        <div className="font-ClashGroteskRegular sm:text-lg text-base">
          Join Our Community on
        </div>
        <div className="md:text-6xl sm:text-5xl xs:text-4xl text-3xl">
          DISCORD
        </div>

        <Link
          href={"https://discord.gg/d9aHpVjFpr"}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonVariants({
            variant: "golden",
            size: "xl",
            className: "flex items-center gap-2",
          })}
          style={{ borderRadius: "999px" }}
        >
          <span className="text-black">Join Now</span>
          <DiscordIcon className="w-5 h-5" />
        </Link>
      </div>
    </div>
  );
}
