import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@repo/ui";
import MobileNav from "./MobileNav";

export const navLinks = [
  { title: "Evaluations", link: "/#challenges" },
  { title: "About Us", link: "/about-us" },
  { title: "Affiliate", link: "/affiliate" },
  { title: "FAQs", link: "/faqs" },
  { title: "Payouts", link: "/payouts" },
  { title: "Contact Us", link: "/contact-us" },
];

export default function Navbar() {
  return (
    <div className="fixed top-0 z-40 flex flex-col w-full">
      <div className="bg-leaderBorderHeaderGradients christmas bg-cristmasGradient w-full flex items-center justify-center gap-2 text-base max-sm:text-sm text-center z-50 p-2 rounded-lg text-black">
        <span>25% OFF</span> <OfferSvg />
        <span>Limited Time</span> <OfferSvg />
        <span>Code: YEAR25</span>
      </div>

      <header className="mx-auto flex w-full items-center justify-between py-3 sm:px-10 px-5">
        <div className="pointer-events-none absolute inset-0  z-[1] h-[20vh] backdrop-blur-[0.0625px] [mask-image:linear-gradient(0deg,transparent_0%,#000_12.5%,#000_25%,transparent_37.5%)]"></div>
        <div className="pointer-events-none absolute inset-0  z-[2] h-[20vh] backdrop-blur-[0.125px] [mask-image:linear-gradient(0deg,transparent_12.5%,#000_25%,#000_37.5%,transparent_50%)]"></div>
        <div className="pointer-events-none absolute inset-0  z-[3] h-[20vh] backdrop-blur-[0.25px] [mask-image:linear-gradient(0deg,transparent_25%,#000_37.5%,#000_50%,transparent_62.5%)]"></div>
        <div className="pointer-events-none absolute inset-0  z-[4] h-[20vh] backdrop-blur-[0.5px] [mask-image:linear-gradient(0deg,transparent_37.5%,#000_50%,#000_62.5%,transparent_75%)]"></div>
        <div className="pointer-events-none absolute inset-0  z-[5] h-[20vh] backdrop-blur-[1px] [mask-image:linear-gradient(0deg,transparent_50%,#000_62.5%,#000_75%,transparent_87.5%)]"></div>
        <div className="pointer-events-none absolute inset-0  z-[6] h-[20vh] backdrop-blur-[2px] [mask-image:linear-gradient(0deg,transparent_62.5%,#000_75%,#000_87.5%,transparent_100%)]"></div>
        <div className="pointer-events-none absolute inset-0  z-[7] h-[20vh] backdrop-blur-[4px] [mask-image:linear-gradient(0deg,transparent_75%,#000_87.5%,#000_100%,transparent_112.5%)]"></div>
        <div className="mx-auto flex w-full items-center justify-between">
          <Link className="z-[10]" href="/">
            <Image
              src={"/images/navbar/logo.png"}
              alt={"logo"}
              width={180}
              height={50}
              className="sm:w-[180px] w-[150px]"
            />
          </Link>

          <div className="sm:flex hidden items-center z-10 gap-5 text-Gray">
            {navLinks.map((item) => (
              <Link key={item.title} href={item.link}>
                {item.title}
              </Link>
            ))}

            <Link
              href={"https://platform.heratradingcapital.com/dashboard"}
              target="_blank"
              rel="noopener noreferrer"
              className={`${buttonVariants({ variant: "bronze" })} z-20 text-black font-medium`}
              style={{ borderRadius: "999px" }}
            >
              Log In
            </Link>
          </div>

          <MobileNav />
        </div>
      </header>
    </div>
  );
}

function OfferSvg() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="19"
      height="19"
      viewBox="0 0 19 19"
      fill="none"
    >
      <g clipPath="url(#clip0_13362_1066)">
        <path
          opacity="0.6"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.63795 1.73882C7.42315 1.92189 7.31575 2.01339 7.201 2.09027C6.93812 2.26652 6.64285 2.38884 6.33228 2.45012C6.19683 2.47689 6.0562 2.48807 5.77487 2.51057C5.06808 2.56697 4.7146 2.59517 4.41978 2.69927C3.7378 2.94017 3.2014 3.47657 2.9605 4.15854C2.8564 4.45337 2.8282 4.80684 2.7718 5.51364C2.7493 5.79497 2.73812 5.93559 2.71135 6.07104C2.65008 6.38162 2.52775 6.67689 2.3515 6.93984C2.27463 7.05452 2.18313 7.16192 2.00005 7.37672C1.54015 7.91642 1.3102 8.18619 1.17535 8.46834C0.863425 9.12092 0.863425 9.87947 1.17535 10.532C1.3102 10.8142 1.54015 11.084 2.00005 11.6237C2.18305 11.8385 2.27463 11.9459 2.3515 12.0605C2.52775 12.3235 2.65008 12.6188 2.71135 12.9293C2.73812 13.0648 2.7493 13.2055 2.7718 13.4867C2.8282 14.1936 2.8564 14.547 2.9605 14.8418C3.2014 15.5238 3.7378 16.0603 4.41978 16.3011C4.7146 16.4052 5.06808 16.4334 5.77487 16.4899C6.0562 16.5122 6.19683 16.5236 6.33228 16.5503C6.64285 16.6116 6.93812 16.7339 7.201 16.9101C7.31575 16.987 7.42315 17.0785 7.63795 17.2616C8.17765 17.7215 8.44742 17.9514 8.72958 18.0863C9.38215 18.3982 10.1407 18.3982 10.7933 18.0863C11.0754 17.9514 11.3452 17.7215 11.8849 17.2616C12.0997 17.0785 12.2071 16.987 12.3218 16.9101C12.5847 16.7339 12.88 16.6116 13.1906 16.5503C13.326 16.5236 13.4667 16.5122 13.748 16.4899C14.4548 16.4334 14.8083 16.4052 15.1031 16.3011C15.7851 16.0602 16.3215 15.5238 16.5623 14.8418C16.6664 14.547 16.6946 14.1936 16.7511 13.4867C16.7735 13.2055 16.7848 13.0648 16.8115 12.9293C16.8729 12.6188 16.9952 12.3235 17.1714 12.0605C17.2482 11.9459 17.3397 11.8385 17.5228 11.6237C17.9827 11.084 18.2127 10.8142 18.3475 10.532C18.6594 9.87947 18.6594 9.12092 18.3475 8.46834C18.2127 8.18619 17.9827 7.91642 17.5228 7.37672C17.3397 7.16192 17.2482 7.05452 17.1714 6.93984C16.9952 6.67689 16.8729 6.38162 16.8115 6.07104C16.7848 5.93559 16.7735 5.79497 16.7511 5.51364C16.6946 4.80684 16.6664 4.45337 16.5623 4.15854C16.3215 3.47657 15.7851 2.94017 15.1031 2.69927C14.8083 2.59517 14.4548 2.56697 13.748 2.51057C13.4667 2.48807 13.326 2.47689 13.1906 2.45012C12.88 2.38884 12.5847 2.26652 12.3218 2.09027C12.2071 2.01339 12.0997 1.92189 11.8849 1.73882C11.3453 1.27892 11.0754 1.04897 10.7933 0.91412C10.1407 0.602195 9.38215 0.602195 8.72958 0.91412C8.44742 1.04897 8.17765 1.27892 7.63795 1.73882ZM13.1403 6.12174C13.4206 6.40209 13.4206 6.85659 13.1403 7.13694L7.39773 12.8795C7.11737 13.1599 6.66288 13.1599 6.38252 12.8795C6.10218 12.5992 6.10218 12.1447 6.38252 11.8644L12.1251 6.12174C12.4055 5.84147 12.86 5.84147 13.1403 6.12174ZM13.1113 11.8934C13.1113 12.422 12.6828 12.8504 12.1542 12.8504C11.6256 12.8504 11.1971 12.422 11.1971 11.8934C11.1971 11.3648 11.6256 10.9363 12.1542 10.9363C12.6828 10.9363 13.1113 11.3648 13.1113 11.8934ZM7.3687 8.06499C7.8973 8.06499 8.32578 7.63652 8.32578 7.10792C8.32578 6.57932 7.89722 6.15077 7.3687 6.15077C6.84018 6.15077 6.41155 6.57932 6.41155 7.10792C6.41155 7.63652 6.8401 8.06499 7.3687 8.06499Z"
          fill="currentColor"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_13362_1066">
          <rect
            width="18"
            height="18"
            fill="currentColor"
            transform="translate(0.761719 0.5)"
          ></rect>
        </clipPath>
      </defs>
    </svg>
  );
}
