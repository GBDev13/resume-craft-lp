import { SectionTitle } from "./section-title";
import * as Accordion from "@radix-ui/react-accordion";
import { Button } from "./button";
import { TbChevronDown } from "react-icons/tb";
import { Motion } from "./motion";

export const FAQ = () => {
  const questions = [
    {
      question: "Tenho acesso vitalício ao curso?",
      answer: "Sim, você terá acesso vitalício ao curso.",
    },
    {
      question: "Preciso ter conhecimento prévio para fazer o curso?",
      answer: "Sim, você precisa ter uma base de Javascript e React.",
    },
    {
      question: "O curso possui certificado?",
      answer:
        "Sim, o curso possui certificado de conclusão em ambas as plataformas.",
    },
    {
      question: "Terei suporte durante o curso?",
      answer:
        "Sim, em ambas as plataformas você terá suporte para tirar suas dúvidas.",
    },
    {
      question: "Como o curso é entregue?",
      answer:
        "O curso é 100% online com aulas gravadas que você pode assistir a qualquer momento.",
    },
  ];

  return (
    <section className="py-10">
      <SectionTitle
        title="Perguntas Frequentes"
        description="Tire suas dúvidas sobre o curso"
      />

      <Motion
        className="landing-container"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.4 }}
      >
        <Accordion.Root
          type="multiple"
          className="w-full flex flex-col gap-4"
        >
          {questions.map((question, questionIndex) => {
            return (
              <Accordion.Item
                key={`question-${questionIndex}`}
                value={question.question}
                className="bg-primary-800 border border-primary-700 rounded-xl overflow-hidden"
              >
                <Accordion.Trigger asChild className="group">
                  <div className="cursor-pointer flex items-center justify-between w-full p-4 sm:p-6 gap-4">
                    <h5 className="font-semibold sm:text-xl text-left">
                      {question.question}
                    </h5>

                    <Button className="p-2">
                      <TbChevronDown className="transition-all group-data-[state=open]:rotate-180" />
                    </Button>
                  </div>
                </Accordion.Trigger>
                <Accordion.Content className="data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown">
                  <div className="p-4 sm:p-6 pt-0 flex flex-col gap-2">
                    <p>{question.answer}</p>
                  </div>
                </Accordion.Content>
              </Accordion.Item>
            );
          })}
        </Accordion.Root>
      </Motion>
    </section>
  );
};
