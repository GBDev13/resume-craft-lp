import { DemoVideo } from "@/components/demo-video";
import { FAQ } from "@/components/faq";
import { Features } from "@/components/features";
import { Footer } from "@/components/footer";
import { Guarantee } from "@/components/guarantee";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Prices } from "@/components/prices";
import { Public } from "@/components/public";
import { Reviews } from "@/components/reviews";
import { Stack } from "@/components/stack";
import { Structure } from "@/components/structure";

export default function Home() {
  return (
    <main className="w-full h-full">
      <Header />
      <Hero />
      <DemoVideo />
      <Features />
      <Stack />
      <Reviews />
      <Public />
      <Structure />
      <Guarantee />
      <Prices />
      <FAQ />
      <Footer />
    </main>
  );
}
