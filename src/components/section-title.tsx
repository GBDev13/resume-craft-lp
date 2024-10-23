import { cn } from "@/utils/tailwind";
import { RadialStars } from "./radial-stars";
import { Motion } from "./motion";

type SectionTitleProps = {
  title: string;
  description: string;
  titleClassName?: string;
}

export const SectionTitle = ({ title, description, titleClassName }: SectionTitleProps) => {
  return (
    <div className="w-full max-w-[560px] mx-auto relative min-h-[240px] text-center flex flex-col items-center justify-center px-4">
      <RadialStars className="absolute inset-0 w-full h-full select-none" />
      <div className="z-[2]">
        <Motion
          as="h2"
          className={cn("text-3xl sm:text-4xl font-bold mb-2", titleClassName)}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {title}
        </Motion>
        <Motion
          as="p"
          className="text-text-secondary text-sm sm:text-base sm:max-w-[80%] mx-auto"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          {description}
        </Motion>
      </div>
    </div>
  )
}