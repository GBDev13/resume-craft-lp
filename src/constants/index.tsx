import {
  SiDrizzle,
  SiPuppeteer,
  SiReacthookform,
  SiReactquery,
  SiShadcnui,
} from "react-icons/si";
import {
  TbBrandNextjs,
  TbBrandOpenai,
  TbBrandStripe,
  TbBrandTailwind,
  TbBrandTypescript,
  TbBrandVercel,
  TbShieldLock,
} from "react-icons/tb";

export const techs = [
  {
    label: "Next.js",
    icon: TbBrandNextjs,
    description: "Framework React para aplicações web modernas e rápidas.",
    url: "https://nextjs.org",
  },
  {
    label: "TypeScript",
    icon: TbBrandTypescript,
    description: "Superset de JavaScript que adiciona tipagem estática segura.",
    url: "https://www.typescriptlang.org",
  },
  {
    label: "Auth.js",
    icon: TbShieldLock,
    description: "Solução completa para autenticação segura e fácil.",
    url: "https://authjs.dev",
  },
  {
    label: "shadcn/ui",
    icon: SiShadcnui,
    description: "Componentes de interface reutilizáveis para aplicações web.",
    url: "https://ui.shadcn.com/",
  },
  {
    label: "Tailwind",
    icon: TbBrandTailwind,
    description: "Framework CSS utilitário para design ágil e responsivo.",
    url: "https://tailwindcss.com",
  },
  {
    label: "Drizzle ORM",
    icon: SiDrizzle,
    description: "ORM simples e eficiente para gerenciar seu banco de dados.",
    url: "https://orm.drizzle.team/",
  },
  {
    label: "Puppeteer",
    icon: SiPuppeteer,
    description: "Biblioteca para automação de navegadores e geração de PDFs.",
    url: "https://pptr.dev",
  },
  {
    label: "Stripe",
    icon: TbBrandStripe,
    description: "Plataforma robusta de pagamentos online.",
    url: "https://stripe.com",
  },
  {
    label: "Tanstack Query",
    icon: SiReactquery,
    description: "Gerenciamento de estados assíncronos de forma otimizada.",
    url: "https://tanstack.com/query/latest",
  },
  {
    label: "React Hook Form",
    icon: SiReacthookform,
    description: "Ferramenta para gerenciar formulários de maneira simples.",
    url: "https://react-hook-form.com",
  },
  {
    label: "OpenAI",
    icon: TbBrandOpenai,
    description: "API de inteligência artificial para geração de conteúdo.",
    url: "https://openai.com",
  },
  {
    label: "Vercel",
    icon: TbBrandVercel,
    description: "Plataforma de deploy e hospedagem de aplicações web.",
    url: "https://vercel.com",
  }
];


export const CHECKOUT_URLS = {
  DEV_BY_GB: "https://devbygb.com/courses/next-14-na-pratica-crie-uma-aplicacao-full-stack/details?checkout=true",
  UDEMY: "https://www.udemy.com/course/draft/6135423/?instructorPreviewMode=guest",
}