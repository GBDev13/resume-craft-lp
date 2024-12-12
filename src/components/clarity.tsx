"use client";

import Clarity from "@microsoft/clarity";
import { useEffect } from "react";

export const ClarityTracker = () => {
  useEffect(() => {
    Clarity.init("pcw0n64akr");
  }, []);

  return null;
};
