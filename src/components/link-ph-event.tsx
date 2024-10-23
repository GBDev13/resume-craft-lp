"use client";

import posthog from "posthog-js";
import { ComponentProps } from "react";

type LinkPhEventProps = ComponentProps<"a"> & {
  event: string;
};

export const LinkPhEvent = ({ event, ...props }: LinkPhEventProps) => {
  return <a {...props} onClick={() => posthog.capture(event)} />;
};
