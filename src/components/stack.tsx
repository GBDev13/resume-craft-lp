import { techs } from "@/constants";
import { SectionTitle } from "./section-title";
import { Button } from "./button";
import { TbArrowUpRight } from "react-icons/tb";

export const Stack = () => {
  return (
    <section className="py-10">
      <SectionTitle
        title="Stack Moderna e Tecnologias de Ponta"
        description="Aprenda com as ferramentas mais utilizadas no mercado e mantenha-se sempre atualizado"
        titleClassName="sm:px-14"
      />

      <div className="landing-container w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {techs.map((tech) => (
          <a href={tech.url} target="_blank" className="group w-full p-6 rounded-xl bg-gradient-to-br from-primary-800 to-background border border-primary-700/70 hover:border-primary/30 transition-all">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="bg-primary-700 w-8 h-8 rounded flex items-center justify-center">
                  <tech.icon className="w-5 h-5 text-primary" />
                </div>

                <p className="font-semibold text-lg">{tech.label}</p>
              </div>

              <Button className="bg-primary-500 py-1.5 px-3 group-hover:bg-primary-light">
                <TbArrowUpRight />
              </Button>
            </div>

            <span className="text-text-secondary text-sm">{tech.description}</span>
          </a>
        ))}
      </div>
    </section>
  );
};
