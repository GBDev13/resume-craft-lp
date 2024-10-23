import Image from "next/image";

export const Guarantee = () => {
  return (
    <section className="landing-container py-10">
      <div className="grid sm:grid-cols-[0.6fr,1fr] lg:grid-cols-[0.4fr,1fr] items-center gap-6 md:gap-14 p-6 rounded-2xl bg-gradient-to-br from-background to-primary-800 border border-primary/20">
        <Image
          src="/guarantee-badge.svg"
          width={800}
          height={800}
          alt="Selo de garantia de satisfação"
          className="w-full aspect-square object-contain mx-auto max-w-[200px] sm:max-w-full"
        />

        <div className="text-center sm:text-left">
          <h2 className="text-4xl lg:text-5xl font-bold mb-2">Risco Zero</h2>
          <p className="text-sm sm:text-base lg:text-xl text-text-secondary">
            Ao adquirir o curso, você terá 7 dias completos para explorar todas
            as aulas. Se, por qualquer motivo, você não estiver satisfeito(a)
            com sua experiência, basta solicitar o reembolso na plataforma
            dentro desse período e nós reembolsaremos o valor total da sua
            compra.
          </p>
        </div>
      </div>
    </section>
  );
};
