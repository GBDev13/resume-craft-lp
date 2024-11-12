"use client";

import { ComponentProps } from "react";

type LinkEventProps = ComponentProps<"a"> & {
  event: string;
};

export const LinkEvent = ({ event, ...props }: LinkEventProps) => {
  return <a {...props} onClick={() => window.umami.track(event)} />;
};
