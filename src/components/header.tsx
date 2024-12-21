"use client";

import Image from "next/image";
import { StartButton } from "./hero/start-button";
import { useCallback, useEffect, useState } from "react";
import { cn } from "@/utils/tailwind";
import { Motion } from "./motion";
import { ChristmasBanner } from "./christmas-banner";

export const Header = () => {
  const [shouldShowBackground, setShouldShowBackground] = useState(false);

  const handleScroll = useCallback(() => {
    if (window.scrollY > 100) {
      setShouldShowBackground(true);
    } else {
      setShouldShowBackground(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <div className="fixed top-0 left-0 right-0 w-full pointer-events-none flex flex-col z-10">
      <header
        className={cn(
          "w-full py-6 sm:py-10 flex items-center transition-all",
          shouldShowBackground &&
            "bg-background/50 backdrop-blur-md py-4 sm:py-6"
        )}
      >
        <Motion
          className="landing-container flex items-center justify-between pointer-events-auto px-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/devbygb.svg"
            width={200}
            height={100}
            alt="Logo da DevByGB"
            className="cursor-pointer w-[100px] sm:w-[200px]"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          />

          <StartButton
            withIcon={false}
            className="m-0 text-sm sm:text-base py-2 px-3 sm:px-4 bg-[#FF3A30] hover:bg-red-500 text-black font-black uppercase animate-pulse-scale"
            text="Resgatar oferta"
          />
        </Motion>
      </header>
      <ChristmasBanner />
    </div>
  );
};