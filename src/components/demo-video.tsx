"use client";

import Image from "next/image";
import { Button } from "./button";
import { LuPlay } from "react-icons/lu";
import { useState } from "react";
import { Motion } from "./motion";

const VideoPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="w-full h-full" onClick={() => setIsPlaying(true)}>
      {isPlaying ? (
        <iframe
          src="https://iframe.mediadelivery.net/embed/293723/eb06de0c-b52f-497f-8016-14940dfe8a2c?autoplay=true&loop=false&muted=false&preload=true&responsive=true"
          loading="lazy"
          allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;"
          allowFullScreen
          className="w-full h-full rounded-xl aspect-[16/8] bg-black"
        />
      ) : (
        <>
          <Image
            src="/demo-thumbnail.avif"
            alt="Thumbnail do vídeo de apresentação do projeto final."
            className="w-full h-full object-cover aspect-video sm:aspect-[16/8] rounded-xl group-hover:brightness-75 transition-all"
            width={1280}
            height={720}
          />

          <Button className="absolute z-[2] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-primary text-sm sm:text-lg hover:text-white whitespace-nowrap">
            Assistir Demonstração
            <LuPlay />
          </Button>
        </>
      )}
    </div>
  );
};

export const DemoVideo = () => {
  return (
    <section className="landing-container pt-4 pb-10">
      <Motion
        className="flex items-center gap-2 sm:gap-6 mb-6 sm:mb-10"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex-1 bg-leftLine h-px" />
        <h2 className="font-bold text-xl sm:text-3xl text-center">
          Veja o <span className="text-primary">ResumeCraft</span> em ação
        </h2>
        <div className="flex-1 bg-rightLine h-px" />
      </Motion>

      <Motion
        className="bg-primary-700 p-2 rounded-xl w-full group relative cursor-pointer"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        <VideoPlayer />
      </Motion>
    </section>
  );
};
