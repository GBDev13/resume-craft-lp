"use client";

import { LuPlay } from "react-icons/lu";
import { Button } from "../button";
import { ComponentProps } from "react";
import { cn } from "@/utils/tailwind";

type StartButtonProps = ComponentProps<"button"> & {
  withIcon?: boolean;
}

export const StartButton = ({ className, withIcon = true, ...props }: StartButtonProps) => {
  const handleStart = () => {
    const element = document.getElementById("pricing");

    if (!element) return;

    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Button {...props} className={cn("text-xl mt-6", className)} onClick={handleStart}>
      Comece Agora
      {withIcon && <LuPlay />}
    </Button>
  );
};
