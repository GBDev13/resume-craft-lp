import { HiCheckCircle, HiXCircle } from "react-icons/hi";
import { SectionTitle } from "./section-title"
import { cn } from "@/utils/tailwind";
import { Motion } from "./motion";

export const Public = () => {
  const sections = [
    {
      title: "Esse curso é perfeito para você se...",
      items: [
        {
          label: "Você já tem experiência com JavaScript e React",
          description:
            "O curso foi feito para quem já domina o básico e quer aprender a construir aplicações web robustas com Next.js.",
        },
        {
          label: "Você quer dominar o Next.js e tecnologias modernas",
          description:
            "Aprenda funcionalidades avançadas do Next.js, como autenticação com NextAuth, geração de PDFs com Puppeteer e pagamentos com Stripe.",
        },
        {
          label: "Você busca aprender tecnologias de ponta",
          description:
            "Além de Next.js, trabalharemos com TypeScript, Tailwind CSS, React Hook Form, e mais ferramentas essenciais para desenvolvimento escalável.",
        },
        {
          label: "Você quer construir projetos reais e funcionais",
          description:
            "O foco do curso é criar um projeto completo, do zero ao deploy, com funcionalidades práticas de mercado.",
        },
      ],
    },
    {
      title: "Esse curso não é para você se...",
      items: [
        {
          label: "Você nunca programou antes",
          description:
            "O curso exige uma base sólida em JavaScript e React, recomendando-se aprender essas tecnologias antes de começar.",
        },
        {
          label: "Você busca um curso superficial",
          description:
            "Este curso vai além dos fundamentos, mergulhando em tecnologias de mercado para construir aplicações modernas e funcionais.",
        },
        {
          label: "Você não está disposto a praticar",
          description:
            "Este curso é prático e exige que você se envolva ativamente no desenvolvimento do projeto para obter os melhores resultados.",
        },
        {
          label: "Você procura um curso extenso e demorado",
          description:
            "Embora tenha uma carga horária de +/- 12 horas, o curso é focado e eficiente, ideal para quem busca aprendizado rápido sem comprometer a qualidade.",
        },
      ],
    },
  ];
  
  return (
    <section className="py-10">
      <SectionTitle
        title="Para Quem é Este Curso?"
        description="Descubra se isso é o que você procura"
      />

      <div className="landing-container w-full grid md:grid-cols-2 gap-4 lg:gap-10">
        {sections.map((section, index) => (
          <Motion
            key={`public-section-${index}`}
            className="p-3 sm:p-6 lg:p-10 rounded-xl bg-primary-800 border-primary-700"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.2 }}
          >
            <h3 className="font-bold text-center md:text-left text-xl sm:text-2xl lg:text-3xl border-b border-text-secondary/30 pb-6 mb-6">{section.title}</h3>
            <ul className="flex flex-col gap-4">
              {section.items.map((item, itemIndex) => {
                const Icon = index === 0 ? HiCheckCircle : HiXCircle;

                return (
                  <Motion
                    key={`public-item-${itemIndex}`}
                    as="li"
                    className="flex gap-2"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.2, delay: 0.2 * itemIndex }}
                  > 
                    <Icon className={cn(
                      "text-green-500 min-w-5 w-5 h-5 mt-1",
                      index > 0 && "text-red-500"
                    )} />
                    <div>
                      <h4 className="font-semibold sm:text-lg mb-1">{item.label}</h4>
                      <p className="text-text-secondary text-xs sm:text-sm">{item.description}</p>
                    </div>
                  </Motion>
                )
              })}
            </ul>
          </Motion>
        ))}
      </div>
    </section>
  )
}