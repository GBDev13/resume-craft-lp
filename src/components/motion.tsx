"use client";

import { forwardRef, ElementType, ComponentPropsWithoutRef } from "react";
import { motion, MotionProps as FramerMotionProps } from "framer-motion";

type MotionComponentProps = {
  as?: ElementType;
} & FramerMotionProps &
  ComponentPropsWithoutRef<"div">;

export const Motion = forwardRef(
  (
    { as: asElement, children, ...props }: MotionComponentProps,
    ref: React.Ref<HTMLDivElement>
  ) => {
    // @ts-expect-error
    const Component = motion.create(asElement || "div");

    return (
      <Component ref={ref} {...props}>
        {children}
      </Component>
    );
  }
);

Motion.displayName = "Motion";
