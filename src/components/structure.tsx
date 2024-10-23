import { SectionTitle } from "./section-title";
import { GraphQLClient } from "graphql-request";
import * as Accordion from "@radix-ui/react-accordion";
import { formatDuration } from "@/utils/format";
import { Button } from "./button";
import {
  TbBooks,
  TbChevronDown,
  TbClockCode,
  TbUserScreen,
} from "react-icons/tb";
import { Motion } from "./motion";

type Course = {
  id: string;
  modules: {
    title: string;
    id: string;
    lessons: {
      id: string;
      title: string;
      durationInSeconds: number;
    }[];
  }[];
};

export const Structure = async () => {
  const hygraph = new GraphQLClient(process.env.HYGRAPH_URL!, {
    headers: {
      Authorization: `Bearer ${process.env.HYGRAPH_PERMANENTAUTH_TOKEN}`,
    },
  });

  // TODO: Remove DRAFT
  const { course } = await hygraph.request<{ course: Course }>(
    `{
        course(
          where: {slug: "next-14-na-pratica-crie-uma-aplicacao-full-stack"}
          stage: DRAFT
        ) {
          id
          modules(first: 100) {
            title
            id
            lessons(where: {lessonType: video}, first: 100) {
              id
              title
              durationInSeconds
            }
          }
        }
      }
    `
  );

  const totalDurationInSeconds = course.modules.reduce(
    (acc, mod) =>
      acc +
      mod.lessons.reduce((acc, lesson) => acc + lesson.durationInSeconds, 0),
    0
  );

  const totalDurationInHours = Math.ceil(totalDurationInSeconds / 3600);

  const infos = [
    {
      label: "Módulos",
      value: course.modules.length,
      icon: TbBooks,
    },
    {
      label: "Aulas",
      value: course.modules.reduce((acc, mod) => acc + mod.lessons.length, 0),
      icon: TbUserScreen,
    },
    {
      label: "Horas de conteúdo",
      value: totalDurationInHours,
      icon: TbClockCode,
    },
  ];

  return (
    <section className="py-10">
      <SectionTitle
        title="Conteúdo do Curso"
        description="Tenha uma visão geral da estrutura dos módulos e aulas"
      />

      <Motion
        className="landing-container"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.4 }}
      >
        <Accordion.Root type="multiple" className="w-full flex flex-col gap-4">
          {course.modules.map((mod, modIndex) => {
            const totalDuration = mod.lessons.reduce(
              (acc, lesson) => acc + lesson.durationInSeconds,
              0
            );

            return (
              <Accordion.Item
                key={`module-${mod.id}`}
                value={mod.id}
                className="bg-primary-800 border border-primary-700 rounded-xl overflow-hidden"
              >
                <Accordion.Trigger asChild className="group">
                  <div className="cursor-pointer flex items-center justify-between w-full p-4 sm:p-6 flex-col sm-mobile:flex-row">
                    <div className="w-full flex items-center gap-2">
                      <h5 className="font-semibold sm:text-xl text-left">
                        <span className="text-primary mr-2 inline">
                          {String(modIndex + 1).padStart(2, "0")}
                        </span>
                        {mod.title}
                        <span className="text-xs text-text-secondary inline sm-mobile:hidden ml-2">
                          ({formatDuration(totalDuration * 1000)})
                        </span>
                      </h5>

                      <Button className="p-2 flex sm-mobile:hidden ml-auto">
                        <TbChevronDown className="transition-all group-data-[state=open]:rotate-180" />
                      </Button>
                    </div>

                    <div className="items-center gap-4 hidden sm-mobile:flex">
                      <p className="text-text-secondary">
                        {formatDuration(totalDuration * 1000)}
                      </p>
                      <Button className="p-2">
                        <TbChevronDown className="transition-all group-data-[state=open]:rotate-180" />
                      </Button>
                    </div>
                  </div>
                </Accordion.Trigger>
                <Accordion.Content className="data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown">
                  <div className="p-4 sm:p-6 pt-0 flex flex-col gap-2">
                    {mod.lessons.map((lesson) => (
                      <div
                        key={`lesson-${lesson.id}`}
                        className="w-full flex items-center justify-between gap-2"
                      >
                        <h6 className="text-sm sm:text-base">{lesson.title}</h6>
                        <p className="text-text-secondary text-xs sm:text-base">
                          {formatDuration(lesson.durationInSeconds * 1000)}
                        </p>
                      </div>
                    ))}
                  </div>
                </Accordion.Content>
              </Accordion.Item>
            );
          })}
        </Accordion.Root>

        <div className="bg-primary-800 mt-4 border border-primary-700 rounded-xl p-4 sm:p-6 flex items-center justify-center gap-4 sm:gap-6 flex-wrap">
          {infos.map((info) => (
            <p key={`structure-info-${info.label}`} className="text-sm sm:text-xl flex items-center gap-2">
              <info.icon className="w-4 h-4 sm:w-6 sm:h-6 text-primary" />
              <span className="font-bold">{info.value}</span> {info.label}
            </p>
          ))}
        </div>
      </Motion>
    </section>
  );
};
