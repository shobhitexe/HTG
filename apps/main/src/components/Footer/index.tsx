import { GoldenText } from "@repo/ui";
import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  {
    title: "Pages",
    links: [
      { title: "Home", href: "/" },
      { title: "About Us", href: "/about-us" },
      { title: "Affiliate", href: "/affiliate" },
      { title: "FAQ", href: "/faqs" },
      { title: "Contact Us", href: "/contact-us" },
    ],
  },
  {
    title: "Documents",
    links: [
      { title: "Privacy Policy", href: "/privacy-policy" },
      { title: "Refund Policy", href: "/refund-policy" },
      { title: "Affiliate Policy", href: "/affiliate-policy" },
      { title: "Terms & Conditions", href: "/terms-and-conditions" },
    ],
  },
  {
    title: "Contact Us",
    links: [
      // { title: "", href: "" },
      { title: "Contact Us", href: "/contact-us" },
    ],
  },
];

const socialMediaArr = [
  {
    name: "instagram",
    img: "/images/footer/instagram.png",
    link: "https://www.instagram.com/heratradingcapital",
  },
  {
    name: "youtube",
    img: "/images/footer/youtube.png",
    link: "https://www.youtube.com/@ZacAngeli",
  },
  {
    name: "twitter",
    img: "/images/footer/twitter.png",
    link: "https://x.com/HeraTrading",
  },
  {
    name: "discord",
    img: "/images/footer/discord.png",
    link: "https://discord.com/invite/cKuzhCUBud",
  },
];

export default function Footer() {
  return (
    <div className="bg-footerBg bg-cover py-10 z-10 relative text-Gray">
      <div className="w-[85%] mx-auto flex flex-col gap-7">
        <div className="flex md:flex-row flex-col max-md:gap-5 justify-between">
          <div className="flex flex-col gap-2 sm:text-[15px] text-[14px]">
            <Image
              src={"/images/navbar/logo.png"}
              alt={""}
              width={320}
              height={86}
              className="w-[200px]"
            />
            <h1 className="text-footerPurple sm:text-base text-sm max-w-xs">
              Embark on a Profitable Journey : Elevate Your Trading with Our
              Proprietary Firm.
            </h1>

            <div className="text-white/50 max-w-xs text-sm mt-2">
              Hera Trading Capital Limited: 15932729
            </div>

            <div className="text-white/50 max-w-xs text-sm mt-2">
              Unit 5 Christy Court, Basildon, England, SS15 6TL
            </div>
          </div>
          {/* <div className="flex items-start flex-wrap lg:gap-32 sm:gap-10 gap-5">
            {footerLinks.map((footer) => (
              <div key={footer.title}>
                <div className="text-xl pt-5 font-ClashGroteskMedium text-Apricot">
                  {footer.title}
                </div>

                <div>
                  <div className="flex flex-col">
                    {footer.links.map((link) => (
                      <Link
                        href={link.href}
                        key={link.title}
                        className="text-footerPurple text-base sm:pt-5 pt-1 cursor-pointer"
                      >
                        {link.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div> */}
        </div>
        <div className="border-Apricot/60 border-b"></div>
        <div className="flex ss:flex-row flex-col ss:items-center justify-between gap-5">
          <div>
            <div className="text-footerBrightPurple text-[25px]">
              Contact Us
            </div>
            {/* <div className="text-footerPurple ss:text-[15px] text-[13px]">
              <div>{footerLinks[2].links[0].title}</div>
              <Link href={footerLinks[2].links[1].href}>
                {footerLinks[2].links[1].title}
              </Link>
            </div> */}
          </div>
          <div className="flex items-center gap-5">
            {socialMediaArr.map((item) => (
              <Link
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                key={item.name}
              >
                <Image
                  src={item.img}
                  alt={item.name}
                  width={40}
                  height={40}
                  className="max-ss:w-[30px] cursor-pointer"
                />
              </Link>
            ))}
          </div>
        </div>
        <div className="border-Apricot/60 border-b"></div>
        <div>
          <div className="text-footerBrightPurple text-[25px]">
            Risk Warning
          </div>
          <div className="text-footerPurple xs:text-sm text-xs">
            All information on this site is provided exclusively for educational
            purposes related to trading in financial markets. It is not intended
            to serve as specific investment advice, business recommendations,
            investment opportunity analysis, or any general guidance regarding
            the trading of financial instruments.
            <br />
            <br />
            Please note that none of the services offered by Hera Trading
            Capital are classified as investment services under applicable laws.
            We do not provide guidance, instructions, or advice regarding
            specific transactions or investment instruments. Additionally, our
            employees and representatives are not authorized to offer investment
            advice. Any information that may appear to be investment advice is
            expressly disclaimed by Hera Trading Capital.
          </div>
        </div>
        <div className="border-Apricot/60 border-b"></div>
        <div className="text-footerPurple text-center ss:text-[15px] text-[13px]">
          ©HeraTradingCapital All rights reserved
        </div>
      </div>
    </div>
  );
}
