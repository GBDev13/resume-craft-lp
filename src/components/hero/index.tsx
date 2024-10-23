import Image from "next/image";
import { RadialStars } from "../radial-stars";
import { TechsLoop } from "./techs-loop";
import { StartButton } from "./start-button";
import { cn } from "@/utils/tailwind";
import { Motion } from "../motion";

export const Hero = () => {
  return (
    <section className="w-full h-screen relative overflow-hidden min-h-[730px]">
      <Image
        src="/hero-top-bg.svg"
        width={1131}
        height={318}
        role="presentation"
        alt=""
        className="absolute -top-4 left-1/2 -translate-x-1/2 select-none pointer-events-none z-[2]"
      />

      <Motion
        className="absolute left-0 right-0 top-10 flex items-center justify-between bg-background select-none pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <Image
          src="/hero-side-bg.svg"
          width={444}
          height={527}
          role="presentation"
          alt=""
          className={cn(
            "object-center object-fill mix-blend-color-dodge z-[4]",
            "-ml-32 lg:ml-0",
          )}
        />

        <Image
          src="/hero-side-bg.svg"
          width={444}
          height={527}
          role="presentation"
          alt=""
          className={cn(
            "scale-x-[-1] object-center object-fill mix-blend-color-dodge z-[4]",
            "-mr-32 lg:mr-0",
          )}
        />
      </Motion>

      <div className="absolute left-1/2 -translate-x-1/2 top-[80px] z-[3] max-w-[560px] sm:max-w-full flex items-center justify-center">
        <RadialStars />
      </div>

      <Motion
        className="absolute left-0 right-0 bottom-10 z-[2]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <Image
          src="/hero-bottom-bg.webp"
          width={1024}
          height={140}
          role="presentation"
          alt=""
          className="w-full h-[140px]"
        />
      </Motion>

      <div className="z-[6] relative w-full h-full landing-container flex flex-col items-center pt-[25vh] text-center">
        <Motion
          className="mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <Image
            src="/next-js.svg"
            width={100}
            height={100}
            alt="Next.js Logo"
          />
        </Motion>
        <div className="max-w-[600px]">
          <Motion
            as="h1"
            className="text-3xl sm:text-5xl font-bold"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            Domine o Next.js 14 na Prática, do Zero ao Deploy!
          </Motion>
          <Motion
            as="p"
            className="text-[#a7adbe] mt-2 sm:mt-4 text-sm sm:text-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.6 }}
          >
            Aprenda a desenvolver um criador de currículos interativo completo com as tecnologias mais modernas do mercado.
          </Motion>
        </div>

        <Motion
          className="mt-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.8 }}
        >
          <StartButton />
        </Motion>

        <Motion
          className="mt-auto mb-[12vh] max-w-[320px] sm:max-w-[450px] md:max-w-[700px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 1 }}
        >
          <TechsLoop />
        </Motion>
      </div>
    </section>
  );
};
