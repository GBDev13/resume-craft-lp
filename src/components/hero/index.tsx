import Image from "next/image";
import { RadialStars } from "../radial-stars";
import { TechsLoop } from "./techs-loop";
import { StartButton } from "./start-button";

export const Hero = () => {
  return (
    <section className="w-full h-screen relative">
      <Image
        src="/hero-top-bg.svg"
        width={1131}
        height={318}
        role="presentation"
        alt=""
        className="absolute -top-4 left-1/2 -translate-x-1/2 select-none pointer-events-none z-[2]"
      />

      <div className="absolute left-0 right-0 top-10 flex items-center justify-between bg-background select-none pointer-events-none">
        <Image
          src="/hero-side-bg.svg"
          width={444}
          height={527}
          role="presentation"
          alt=""
          className="object-center object-fill mix-blend-color-dodge"
        />

        <Image
          src="/hero-side-bg.svg"
          width={444}
          height={527}
          role="presentation"
          alt=""
          className="scale-x-[-1] object-center object-fill mix-blend-color-dodge"
        />
      </div>

      <RadialStars
        className="absolute left-1/2 -translate-x-1/2 top-[80px] z-[3]"
      />

      <Image
        src="/hero-bottom-bg.webp"
        width={1024}
        height={140}
        role="presentation"
        alt=""
        className="absolute left-0 right-0 w-full h-[140px] bottom-10 z-[2]"
      />

      <div className="z-[6] relative w-full h-full max-w-[1260px] mx-auto flex flex-col items-center pt-[25vh] text-center">
        <Image
          src="/next-js.svg"
          width={100}
          height={100}
          alt="Next.js Logo"
          className="mb-4"
        />
        <div className="max-w-[600px]">
          <h1 className="text-5xl font-bold">
            Domine o Next.js 14 na Prática, do Zero ao Deploy!
          </h1>
          <p className="text-[#a7adbe] mt-4 text-lg">
            Aprenda a desenvolver um criador de currículos interativo completo com as tecnologias mais modernas do mercado.
          </p>
        </div>

        <StartButton />

        <div className="mt-auto mb-[12vh] max-w-[700px]">
          <TechsLoop />
        </div>
      </div>
    </section>
  );
};
