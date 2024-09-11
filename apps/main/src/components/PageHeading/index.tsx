"use client";

import { GoldenText } from "@repo/ui";
import { motion } from "framer-motion";

type PageHeadingProps = {
  heading: string;
  subHeading: string | React.ReactNode;
};

export default function PageHeading({ subHeading, heading }: PageHeadingProps) {
  return (
    <div className={`mt-5 relative`}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          delay: 0.1,
          duration: 1,
          type: "spring",
          stiffness: 70,
        }}
        viewport={{ once: true, amount: 0.5 }}
        className="w-[90%] md:h-[30%] h-[5%] left-[50%] -translate-x-[50%] mx-auto blur-3xl absolute md:-top-28 -top-20 rounded-[50%] z-0"
      >
        <div></div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          delay: 0.1,
          duration: 1,
          type: "spring",
          stiffness: 70,
        }}
        viewport={{ once: true, amount: 0.5 }}
        className={`flex flex-col items-center justify-center md:py-40 sm:py-32 ss:py-28 xs:py-20 py-14 bg-no-repeat bg-top sm:w-[70%] mx-auto bg-contain relative`}
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            delay: 0.1,
            duration: 1,
            type: "spring",
            stiffness: 70,
          }}
          viewport={{ once: true, amount: 0.5 }}
          className="bg-RawUmber/40 w-screen h-full left-[50%] -translate-x-[50%] mx-auto blur-3xl absolute sm:-bottom-80 xs:-bottom-60 -bottom-48 rounded-[50%] z-0"
        >
          <div></div>
        </motion.div>

        <div
          className={`flex justify-center items-center font-circularBold sm:text-6xl xs:text-5xl text-4xl text-center px-5 z-10`}
        >
          <GoldenText className=" font-semibold py-2">{heading}</GoldenText>
        </div>
        <motion.div
          initial={{ opacity: 0, translateY: 10 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{
            delay: 0.4,
            duration: 1,
            type: "spring",
            stiffness: 70,
          }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-white/60 sm:text-xl xs:text-lg text-base max-sm:w-[70%] text-center"
        >
          {subHeading}
        </motion.div>
      </motion.div>
    </div>
  );
}
