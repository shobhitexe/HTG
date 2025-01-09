import { buttonVariants, DiscordIcon } from "@repo/ui";
import Image from "next/image";
import Link from "next/link";

export default function CommunityDiscord() {
  return (
    <div className="md:w-[70%] sm:w-[80%] w-[90%] mx-auto">
      <div
        className="my-10 grid sm:grid-cols-2 grid-cols-1 justify-center bg-black rounded-3xl px-10"
        style={{
          background:
            "radial-gradient(at left bottom, #FFB169 -100%, #000000 70%)",
        }}
      >
        <Image
          src={"/images/discord/mockup.webp"}
          alt={"mockup"}
          width={521}
          height={539}
          className="max-sm:order-last"
        />

        <div className="flex flex-col justify-center sm:gap-7 gap-3 py-10">
          <div className="sm:text-4xl text-3xl">
            Join our Traders
            <br /> Community on Discord
          </div>
          <div>
            To win the game, you need strong support and diligent preparation,
            For Traders.
          </div>
          <div className="grid grid-cols-2 gap-4">
            {Array.from({ length: 4 }).map((_, key) => (
              <Image
                key={key}
                src={`/images/discord/${key + 1}.svg`}
                alt={"pointers"}
                width={1135}
                height={254}
                className="max-w-xs w-full mr-auto"
              />
            ))}
          </div>

          <Link
            href={"https://discord.com/invite/cKuzhCUBud"}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({
              variant: "golden",
              className: "flex items-center gap-2 w-fit h-12",
            })}
            style={{ borderRadius: "999px" }}
          >
            {" "}
            <DiscordIcon className="w-5 h-5" />
            <span className="text-black">Join the Community</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
