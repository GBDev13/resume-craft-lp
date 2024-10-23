"use client"

import Image from "next/image";
import { StartButton } from "./hero/start-button";
import { useCallback, useEffect, useState } from "react";
import { cn } from "@/utils/tailwind";

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
    <header className={cn(
      "fixed top-0 left-0 right-0 w-full pointer-events-none py-10 flex items-center z-10 transition-all",
      shouldShowBackground && "bg-background/50 backdrop-blur-md py-6"
    )}>
      <div className="landing-container flex items-center justify-between">
        <Image
          src="/devbygb.svg"
          width={200}
          height={100}
          alt="Logo da DevByGB"
        />

        <StartButton withIcon={false} className="m-0 text-base py-2 px-4 pointer-events-auto" />
      </div>
    </header>
  );
};
