"use client";

import { PageHeading } from "@/components";
import { Button, GoldenText } from "@repo/ui";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChangeEvent, FormEvent, useState } from "react";

const socialMediaArr = [
  {
    name: "instagram",
    img: "/images/footer/instagram.png",
    link: "",
  },
  {
    name: "youtube",
    img: "/images/footer/youtube.png",
    link: "",
  },
  {
    name: "twitter",
    img: "/images/footer/twitter.png",
    link: "",
  },
  {
    name: "discord",
    img: "/images/footer/discord.png",
    link: "",
  },
];

type contactDataType = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactPage() {
  const [showToast, setShowToast] = useState({ toast: false, message: "" });
  const [isLoaderVisible, setIsLoaderVisible] = useState(false);

  const [contactData, setContactData] = useState<contactDataType>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  function changeHandler(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setContactData((prev) => ({ ...prev, [name]: value }));
  }

  async function submitHandler(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      setIsLoaderVisible(true);
      const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(contactData),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      if (response.status !== 200) {
        setShowToast({
          toast: true,
          message: "Failed to contact please try again later",
        });
        return;
      }
      setShowToast({
        toast: true,
        message: "Thanks for contacting us, we will reach out to you shortly",
      });

      setIsLoaderVisible(false);

      setTimeout(() => {
        window.location.reload();
      }, 5000);
    } catch (error) {
      setShowToast({
        toast: true,
        message: "Failed to contact please try again later",
      });
    }
  }

  return (
    <>
      <div className="relative">
        <PageHeading
          subHeading="Something that only we can solve? Sure get in touch with us and we'll guide you"
          heading={"Get in Touch"}
        />

        <div className="bg-[#070707] relative mt-20 bg-top">
          <div className="xs:w-[80%] w-[95%] mx-auto bg-gradient-to-t from-Apricot/60 to-transparent relative ss:-top-32 -top-24 p-px rounded-3xl">
            <div className="bg-[#0E0E0E] rounded-3xl p-3 flex md:flex-row flex-col flex-1 gap-5 ">
              <div className="bg-[url('/images/contact/contactBoxLeft.png')] rounded-3xl bg-center bg-cover bg-no-repeat px-6 sm:py-12 py-10">
                <div className="flex flex-col h-full">
                  <motion.div>
                    <GoldenText className="font-circularBold sm:text-4xl text-3xl">
                      Contact Information
                    </GoldenText>
                    <div className=" text-footerPurple mt-2 text-base leading-5">
                      {`Got questions or concerns?`} <br />{" "}
                      {`We're always here to assist
                  you.`}
                    </div>
                    <div className="text-white xs:mt-10 mt-5 flex flex-col md:gap-10 gap-5">
                      <div className="flex sm:gap-5 xs:gap-3 gap-2 items-center">
                        <Image
                          src={"/images/contact/mail.png"}
                          alt={"mail"}
                          height={25}
                          width={25}
                          className="sm:w-[25px] w-[20px]"
                        />
                        <Link
                          href={"mailto:support@fundyourtradinng.io"}
                          className="sm:text-base xs:text-sm text-xs"
                        >
                          support@heratrading.com
                        </Link>
                      </div>

                      <div className="flex sm:gap-5 xs:gap-3 gap-2 items-center">
                        <Image
                          src={"/images/contact/Flag.png"}
                          alt={"mail"}
                          height={25}
                          width={25}
                          className="sm:w-[25px] w-[20px]"
                        />
                        <div className="sm:text-base xs:text-sm text-xs">
                          Dubai, United Arab Emirates
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                <div className="flex items-center gap-3 max-md:mt-10">
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
                        width={25}
                        height={25}
                        className="cursor-pointer"
                      />
                    </Link>
                  ))}
                </div>
              </div>

              <form
                method="POST"
                className="py-12 md:px-0 sm:px-10 xs:px-5 px-2 basis-3/5 flex flex-col sm:gap-16 gap-5 sm:text-xl xs:text-base text-base"
                onSubmit={submitHandler}
              >
                <div className="flex sm:flex-row flex-col sm:items-center gap-5">
                  <div className="flex flex-col sm:basis-1/2 gap-3">
                    <label htmlFor="name-input" className="text-[#888888]">
                      Your Name
                    </label>
                    <input
                      id="name-input"
                      placeholder="John"
                      type="text"
                      onChange={changeHandler}
                      name="name"
                      value={contactData.name}
                      required
                      className="bg-transparent text-white focus:outline-none border-b border-[#53493F]"
                    />
                  </div>

                  <div className="flex flex-col sm:basis-1/2 gap-3">
                    <label htmlFor="email-input" className="text-[#888888]">
                      Your Email
                    </label>
                    <input
                      id="email-input"
                      placeholder="zac@heratrading.com"
                      type="email"
                      onChange={changeHandler}
                      name="email"
                      required
                      value={contactData.email}
                      className="bg-transparent text-white focus:outline-none border-b border-[#53493F]"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <label htmlFor="subject-input" className="text-[#888888]">
                    Your Subject
                  </label>
                  <input
                    id="subject-input"
                    placeholder="Info about Funding Challenges"
                    type="text"
                    onChange={changeHandler}
                    value={contactData.subject}
                    required
                    name="subject"
                    className=" bg-transparent text-white focus:outline-none border-b border-[#53493F]"
                  />
                </div>

                <div className="flex flex-col">
                  <GoldenText className="font-semibold py-2 font-ClashGroteskMedium">
                    Message
                  </GoldenText>
                  <div className="flex flex-col gap-10">
                    <label
                      htmlFor="subject-input"
                      className="text-[#888888]  text-base"
                    >
                      Write your Message here
                    </label>
                    <input
                      id="subject-input"
                      type="text"
                      placeholder="Info about Funding Challenges"
                      onChange={changeHandler}
                      name="message"
                      value={contactData.message}
                      required
                      className=" bg-transparent text-white focus:outline-none border-b border-[#53493F]"
                    />
                  </div>
                </div>

                <Button
                  variant={"golden"}
                  type="submit"
                  className="w-fit text-black text-base mt-5 font-medium"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
