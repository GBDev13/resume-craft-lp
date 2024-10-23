import type { Metadata } from "next";
import { Rethink_Sans } from "next/font/google";

import "@/styles/globals.css";
import { cn } from "@/utils/tailwind";

const rethinkSans = Rethink_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Curso Next.js 14",
  description: "Curso DevByGB",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={cn("antialiased", rethinkSans.variable)}
      >
        {children}
      </body>
    </html>
  );
}
