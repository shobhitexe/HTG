"use client";

import { SVGProps, useState } from "react";
import ReactPlayer from "react-player";
import Image from "next/image";

import { AnimatePresence, motion } from "framer-motion";

export default function Video() {
  const [isPlayerVisible, setIsPlayerVisible] = useState(false);

  const showVarients = {
    initial: {
      opacity: 0,
      scale: 0,
    },
    animate: {
      opacity: 1,
      scale: 1,
    },
    exit: { opacity: 0, scale: 0 },
  };

  return (
    <div className="sm:mt-5 mt-0 bg-gradient-to-b from-Rajah to-transparent p-px rounded-xl">
      <div className="relative z-20 group max-w-4xl rounded-xl">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="sm:rounded-2xl rounded-xl"
        >
          <source
            src="/videos/Hera Trading Capital (Female).mp4"
            type="video/mp4"
          />
        </video>

        <Image
          src={"/images/howitworks/left.webp"}
          alt={"left"}
          width={200}
          height={200}
          className="absolute -bottom-5 xs:-left-20 -left-10 md:w-[200px] sm:w-[180px] xs:w-[150px] w-[100px]"
        />

        <Image
          src={"/images/howitworks/right.webp"}
          alt={"right"}
          width={200}
          height={200}
          className="absolute -bottom-5 xs:-right-20 -right-10 md:w-[200px] sm:w-[180px] xs:w-[150px] w-[100px]"
        />

        <PlayButton
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 sm:w-[100px] w-[50px] opacity-0 group-hover:opacity-100 duration-200 cursor-pointer"
          onClick={() => setIsPlayerVisible(true)}
        />
      </div>

      <AnimatePresence>
        {isPlayerVisible && (
          <motion.div
            variants={showVarients}
            initial={"initial"}
            animate={"animate"}
            exit={"exit"}
            transition={{
              duration: 0.6,
              delay: 0.1,
              ease: [0.21, 0.47, 0.32, 0.98],
              type: "spring",
            }}
            className="fixed w-full h-full pt-10 top-0 left-0 bg-black/80 flex items-center justify-center z-[60]"
          >
            <CrossIcon
              className="sm:w-10 w-6 sm:h-10 h-6 cursor-pointer right-10 top-20 fixed z-50"
              onClick={() => setIsPlayerVisible(false)}
            />

            <ReactPlayer
              url={"/videos/Hera Trading Capital (Female).mp4"}
              loop
              playing={isPlayerVisible}
              width={"80%"}
              height={"80%"}
              style={{ zIndex: 60 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function PlayButton(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="117"
      height="117"
      viewBox="0 0 117 117"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g filter="url(#filter0_bi_2136_1852)">
        <rect
          y="0.000244141"
          width="117"
          height="117"
          rx="58.5"
          fill="#080000"
          fillOpacity="0.6"
        />
        <path
          d="M48.75 41.4377V75.5627L75.5625 58.5002L48.75 41.4377Z"
          fill="#F6AB65"
        />
      </g>
      <defs>
        <filter
          id="filter0_bi_2136_1852"
          x="-9.75"
          y="-9.74975"
          width="136.5"
          height="136.5"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="4.875" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_2136_1852"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_2136_1852"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="1.21875"
            operator="erode"
            in="SourceAlpha"
            result="effect2_innerShadow_2136_1852"
          />
          <feOffset />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect2_innerShadow_2136_1852"
          />
        </filter>
      </defs>
    </svg>
  );
}

function CrossIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 shrink-0 transition-transform duration-200"
      {...props}
    >
      <path d="M18 6 6 18"></path>
      <path d="m6 6 12 12"></path>
    </svg>
  );
}
