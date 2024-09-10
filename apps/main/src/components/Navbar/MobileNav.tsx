"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks } from ".";
import { Button, CrossIcon, MenuIcon } from "@repo/ui";

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
    <div className="sm:hidden relative z-10">
      {isOpen ? (
        <CrossIcon
          className="cursor-pointer relative z-10"
          onClick={() => setIsOpen(false)}
        />
      ) : (
        <MenuIcon
          className="cursor-pointer relative z-10"
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
            className="fixed bg-black/20 backdrop-filter backdrop-blur-xl w-full h-full left-0 top-0 z-0 flex flex-col uppercase gap-5 items-center justify-center"
          >
            {navLinks.map((link) => (
              <div key={link.title} className="text-4xl font-medium">
                {link.title}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
