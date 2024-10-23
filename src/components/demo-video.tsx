"use client";

import Image from "next/image";
import { Button } from "./button";
import { LuPlay } from "react-icons/lu";
import { useState } from "react";

export const DemoVideo = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="landing-container pt-4 pb-10">
      <div className="flex items-center gap-6 mb-10">
        <div className="flex-1 bg-leftLine h-px" />
        <h2 className="font-bold text-3xl text-center">
          Veja o <span className="text-primary">ResumeCraft</span> em ação
        </h2>
        <div className="flex-1 bg-rightLine h-px" />
      </div>

      <div
        className="bg-primary-700 p-2 rounded-xl w-full group relative cursor-pointer"
        onClick={() => setIsPlaying(true)}
      >
        {isPlaying ? (
          <iframe
            className="w-full h-full rounded-xl aspect-[16/8]"
            src="https://www.youtube.com/embed/7fIC2LREfj8?si=A57AWc8vdMQ66b9e"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          />
        ) : (
          <>
            <Image
              src="/demo-thumbnail.avif"
              alt="Thumbnail do vídeo de apresentação do projeto final."
              className="w-full h-full object-cover aspect-[16/8] rounded-xl group-hover:brightness-75 transition-all"
              width={1280}
              height={720}
            />

            <Button className="absolute z-[2] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-primary text-lg hover:text-white">
              Assistir Demonstração
              <LuPlay />
            </Button>
          </>
        )}
      </div>
    </section>
  );
};
