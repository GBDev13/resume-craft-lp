import { cn } from "@/utils/tailwind"
import { ComponentProps } from "react"

type ButtonProps = ComponentProps<"button">;

export const Button = ({ className, children, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={cn(
        "bg-primary text-white px-6 py-3 rounded-full font-medium hover:bg-primary-light transition-all",
        "flex items-center gap-2",
        className,
      )}
    >
      {children}
    </button>
  )
}