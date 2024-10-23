"use client";

import React from "react";
import { motion } from "framer-motion";
import { techs } from "@/constants";

export const TechsLoop = () => {
  const renderTechs = (baseKey: string) => {
    return techs.map((tech) => (
      <div
        key={`${baseKey}-${tech.label}`}
        className="bg-primary-800 border border-primary-700 rounded-full py-2 px-4 flex items-center gap-2 flex-shrink-0"
      >
        <tech.icon className="text-primary w-5 h-5" />
        <span className="whitespace-nowrap">{tech.label}</span>
      </div>
    ));
  };

  return (
    <div className="overflow-hidden w-full [mask-image:linear-gradient(to_right,transparent_0%,black_10%,black_90%,transparent_100%)]">
      <motion.div
        className="flex space-x-4 w-[560%] sm:w-[400%] md:w-[256%]"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          repeat: Infinity,
          duration: 30,
          ease: "linear",
        }}
      >
        <div className="flex space-x-4 w-full">{renderTechs("hero-techs")}</div>
        <div className="flex space-x-4 w-full">{renderTechs("hero-techs-duplicate")}</div>
      </motion.div>
    </div>
  );
};
