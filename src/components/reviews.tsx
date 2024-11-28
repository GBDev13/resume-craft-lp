import { TbStarFilled } from "react-icons/tb";
import { Marquee } from "./marquee";
import { SectionTitle } from "./section-title";
import Image from "next/image";
import { Motion } from "./motion";

export const Reviews = () => {
  const reviews = [
    {
      name: "Jean Fredson",
      photo: "jean.webp",
      content:
        "Realmente um curso de respeito e qualidade, com uma didática simples e enriquecida em detalhes. 💯🔝✅",
    },
    {
      name: "Robson S.",
      photo: "robson.webp",
      content:
        "Sem dúvidas, tanto o curso quanto o professor são excelentes, superou minhas expectativas, parabéns.",
    },
    {
      name: "Kauani Evangelista",
      photo: "kauani.webp",
      content:
        "Projeto muito bom.. completo e explicado numa didática fácil de entender. Recomendo!",
    },
    {
      name: "Cleyson Lucas Andrade",
      photo: "cleyson.webp",
      content:
        "Este curso foi incrível! A estrutura é muito bem planejada, com conteúdos que vão direto ao ponto. O instrutor é muito didático, tornando conceitos complexos simples de entender. Recomendo a todos que desejam se aprofundar na área!",
    },
  ];

  return (
    <section className="landing-container py-10">
      <SectionTitle
        title="O que dizem sobre o curso"
        description="Veja o que alguns dos nossos alunos têm a dizer sobre o curso."
      />

      <Motion
        className="w-full relative"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
      >
        <Marquee pauseOnHover className="[--duration:30s] [--gap:2rem]">
          {reviews.map((review) => (
            <div
              key={`review-item-${review.name}`}
              className="max-w-[280px] sm:max-w-[360px] bg-primary-700/70 p-2 py-4 sm:p-4 rounded-lg max-h-max"
            >
              <div className="flex items-center gap-2 mb-2">
                <Image
                  src={`/reviews/${review.photo}`}
                  width={36}
                  height={36}
                  className="w-9 h-9 rounded-full object-cover"
                  alt={`Foto de perfil de ${review.name}`}
                />
                <p className="font-semibold">{review.name}</p>
              </div>

              <p className="text-xs sm:text-sm">{review.content}</p>

              <div className="flex items-center gap-1 text-yellow-400 mt-2.5">
                <TbStarFilled />
                <TbStarFilled />
                <TbStarFilled />
                <TbStarFilled />
                <TbStarFilled />
              </div>
            </div>
          ))}
        </Marquee>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background"></div>
      </Motion>
    </section>
  );
};
