import Image from "next/image";
import { Motion } from "./motion";

export const Guarantee = () => {
  return (
    <section className="landing-container py-10">
      <Motion
        className="grid sm:grid-cols-[0.6fr,1fr] lg:grid-cols-[0.4fr,1fr] items-center gap-6 md:gap-14 p-6 rounded-2xl bg-gradient-to-br from-background to-primary-800 border border-primary/20"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.2 }}
      >
        <Motion
          className="w-full h-full"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2, delay: 0.2 }}
        >
          <Image
            src="/guarantee-badge.svg"
            width={800}
            height={800}
            alt="Selo de garantia de satisfação"
            className="w-full aspect-square object-contain mx-auto max-w-[200px] sm:max-w-full"
          />
        </Motion>

        <div className="text-center sm:text-left">
          <Motion
            as="h2"
            className="text-4xl lg:text-5xl font-bold mb-2"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2, delay: 0.3 }}
          >
            Risco Zero
          </Motion>
          <Motion
            as="p"
            className="text-sm sm:text-base lg:text-xl text-text-secondary"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2, delay: 0.4 }}
          >
            Ao adquirir o curso, você terá 7 dias completos para explorar todas
            as aulas. Se, por qualquer motivo, você não estiver satisfeito(a)
            com sua experiência, basta solicitar o reembolso na plataforma
            dentro desse período e nós reembolsaremos o valor total da sua
            compra.
          </Motion>
        </div>
      </Motion>
    </section>
  );
};
