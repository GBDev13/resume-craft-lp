import { TbCash, TbDatabase, TbFileText, TbHandClick, TbRobotFace, TbShieldLock } from "react-icons/tb";
import { SectionTitle } from "./section-title";
import Image from "next/image";
import { Motion } from "./motion";

export const Features = () => {
  const features = [
    {
      label: "Autenticação",
      description: "Implementação de um sistema de login e registro de usuários, utilizando Google ou Github.",
      icon: TbShieldLock,
    },
    {
      label: "Editor Interativo",
      description: "Criação de um editor em tempo real para criar e personalizar currículos.",
      icon: TbHandClick,
    },
    {
      label: "Armazenamento de Dados",
      description: "Salve os currículos criados pelos usuários em um banco de dados.",
      icon: TbDatabase,
    },
    {
      label: "Geração de Conteúdo com IA",
      description: "Utilize Inteligência Artificial para sugerir descrições e otimizar os currículos dos usuários.",
      icon: TbRobotFace,
    },
    {
      label: "Pagamentos com Stripe",
      description: "Monetize seu projeto oferecendo funcionalidades avançadas através de pagamentos online.",
      icon: TbCash,
    },
    {
      label: "Geração de PDF com HTML",
      description: "Exporte currículos para PDF diretamente do editor, mantendo o layout impecável.",
      icon: TbFileText,
    }
  ];

  return (
    <section className="py-10">
      <SectionTitle
        title="O que você vai construir?"
        description="Durante o curso, você desenvolverá um projeto completo com as seguintes funcionalidades"
      />

      <div className="landing-container w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {features.map((feature, index) => (
          <Motion
            key={`course-feature-${index}`}
            className="w-full p-6 rounded-xl bg-primary-800 border border-primary-700 relative hover:border-primary transition-colors"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, delay: 0.1 * index }}
          >
            <div className="bg-gradient-to-br from-primary/10 to-primary/30 w-10 h-10 rounded flex items-center justify-center">
              <feature.icon className="w-6 h-6 text-primary" />
            </div>

            <p className="font-semibold text-lg mt-4 mb-1">
              {feature.label}
            </p>
            <span className="text-text-secondary">
              {feature.description}
            </span>

            <Image
              src="/grid-bg.svg"
              role="presentation"
              alt=""
              width={380}
              height={230}
              className="absolute right-0 top-0 w-[80%] h-full"
            />
          </Motion>
        ))}
      </div>
    </section>
  )
}