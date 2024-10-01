"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks } from ".";
import { Button, CrossIcon, MenuIcon } from "@repo/ui";
import Link from "next/link";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const fadeUpVariants = {
    initial: {
      opacity: 0,
      y: -24,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
    exit: {
      opacity: 0,
      y: -24,
    },
  };

  return (
    <div className="sm:hidden relative z-50">
      {isOpen ? (
        <CrossIcon
          className="cursor-pointer relative z-50"
          onClick={() => setIsOpen(false)}
        />
      ) : (
        <MenuIcon
          className="cursor-pointer relative z-50"
          onClick={() => setIsOpen(true)}
        />
      )}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-nav"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={fadeUpVariants}
            transition={{
              duration: 0.4,
              delay: 0.2,
              ease: [0.21, 0.47, 0.32, 0.98],
            }}
            className="fixed bg-black/20 backdrop-filter backdrop-blur-xl w-full h-full left-0 top-0 z-40 flex flex-col uppercase gap-5 items-center justify-center"
          >
            {navLinks.map((link) => (
              <Link
                href={link.link}
                key={link.title}
                className="text-3xl font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.title}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
