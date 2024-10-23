"use client";

import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";
import { ReactNode } from "react";

if (typeof window !== "undefined") {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
    person_profiles: "always",
    loaded: (posthog) => {
      if (process.env.NODE_ENV === "development") posthog.debug();
    }
  });
}

type CSPostHogProviderProps = {
  children: ReactNode;
};

export const CSPostHogProvider = ({ children }: CSPostHogProviderProps) => {
  return <PostHogProvider client={posthog}>{children}</PostHogProvider>;
};
