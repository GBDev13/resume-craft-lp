import type { Metadata } from "next";
import { Rethink_Sans } from "next/font/google";

import "@/styles/globals.css";
import { cn } from "@/utils/tailwind";
import { UmamiTracker } from "@/components/umami";
import { ClarityTracker } from "@/components/clarity";

import { Snow } from "@/components/snow";

const rethinkSans = Rethink_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title:
    "Curso Next.js 14: Do Zero ao Deploy do ResumeCraft | Aprenda Tecnologias Modernas | DevByGB",
  description:
    "Aprenda Next.js na prática e crie o ResumeCraft, um criador de currículos interativo com autenticação, AI, PDFs e muito mais. Curso prático com suporte e certificado!",
  keywords:
    "Curso Next.js, aprender Next.js, criar currículos, desenvolvimento web, React, TypeScript, Tailwind CSS, ResumeCraft, desenvolvimento front-end, AI, geração de PDFs, Stripe, NextAuth, Drizzle ORM, curso online, certificado",
  openGraph: {
    title: "Curso Next.js 14: Crie o ResumeCraft com Tecnologias Modernas",
    description:
      "Curso prático para criar um projeto real de criador de currículos com Next.js, React, AI, e muito mais. Acesso vitalício, suporte e certificado!",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <Snow />

      <UmamiTracker />
      <ClarityTracker />
      <body className={cn("antialiased", rethinkSans.variable)}>
        {children}
      </body>
    </html>
  );
}
