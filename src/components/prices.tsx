import Image from "next/image";
import { SectionTitle } from "./section-title";
import { GraphQLClient } from "graphql-request";
import { formatPrice } from "@/utils/format";
import { cn } from "@/utils/tailwind";
import { calculateInstallmentOptions } from "@/utils/functions";
import { Button } from "./button";
import { CHECKOUT_URLS } from "@/constants";
import { Motion } from "./motion";
import { LinkPhEvent } from "./link-ph-event";

type CoursePrices = {
  pixPrice: number;
  regularPrice: number;
  discountPrice?: number;
};

export const Prices = async () => {
  const hygraph = new GraphQLClient(process.env.HYGRAPH_URL!, {
    headers: {
      Authorization: `Bearer ${process.env.HYGRAPH_PERMANENTAUTH_TOKEN}`,
    },
  });

  // TODO: Remove DRAFT
  const { course } = await hygraph.request<{ course: CoursePrices }>(
    `{
      course(
        where: {slug: "next-14-na-pratica-crie-uma-aplicacao-full-stack"}
        stage: DRAFT
      ) {
        pixPrice
        regularPrice
        discountPrice
      }
    }
    `
  );

  const installments = calculateInstallmentOptions(
    course?.discountPrice ?? course?.regularPrice
  );
  const lastInstallment = installments[installments.length - 1];

  const prices = [
    {
      platform: "DevByGB",
      description: (
        <>
          <a className="font-medium underline" href="https://devbygb.com">
            DevByGB
          </a>{" "}
          é nossa plataforma própria de cursos, com foco em proporcionar uma
          experiência mais personalizada e centrada no aluno, além de oferecer
          preços especiais.
        </>
      ),
      logo: {
        src: "/devbygb.svg",
        width: 240,
        height: 12,
      },
      regularPrice: course?.regularPrice,
      price: course?.pixPrice ?? course?.discountPrice ?? course?.regularPrice,
      priceDescription: `*à vista no Pix ou em até ${
        installments.length
      }x de ${formatPrice(lastInstallment.installmentValue)} no cartão`,
      highlighted: true,
      checkoutUrl: CHECKOUT_URLS.DEV_BY_GB,
    },
    {
      platform: "Udemy",
      description: (
        <>
          <a className="font-medium underline" href="https://www.udemy.com">
            Udemy
          </a>{" "}
          é uma plataforma online consolidada de cursos, mas com menos foco em
          funcionalidades voltadas para o aluno.
        </>
      ),
      logo: {
        src: "/udemy.svg",
        width: 180,
        height: 133,
      },
      price: 89.9,
      checkoutUrl: CHECKOUT_URLS.UDEMY,
    },
  ];

  return (
    <section id="pricing" className="py-10 relative">
      <Image
        src="/pricing-section-bg.svg"
        width={1280}
        height={720}
        role="presentation"
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-80"
      />

      <SectionTitle
        title="Comece agora mesmo"
        description="Projeto de qualidade com preço acessível, basta escolher a melhor opção para você."
      />

      <div className="landing-container relative z-[2]">
        <div className="flex flex-col gap-6 max-w-[600px] mx-auto">
          {prices.map((pricing, index) => {
            return (
              <Motion
                key={pricing.platform}
                className={cn(
                  pricing.highlighted &&
                    "bg-gradient-to-b from-primary to-primary/0 p-1 rounded-2xl"
                )}
                initial={{ opacity: 0, y: -20, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.8 }}
                transition={{ duration: 0.4, delay: 0.2 * index }}
              >
                {pricing.highlighted && (
                  <p className="w-full p-2 text-center font-bold">
                    PROMOÇÃO DE LANÇAMENTO
                  </p>
                )}
                <div
                  className={cn(
                    "w-full py-10 px-8 rounded-2xl bg-primary-800 relative min-h-[200px] flex flex-col items-center text-center",
                    !pricing.highlighted && "border border-primary/20"
                  )}
                >
                  <Image
                    src="/pricing-bg.svg"
                    className="absolute inset-0 w-full h-full object-cover"
                    width={370}
                    height={400}
                    role="presentation"
                    alt=""
                  />

                  <Image
                    src={pricing.logo.src}
                    width={pricing.logo.width}
                    height={pricing.logo.height}
                    alt={`Logo da plataforma ${pricing.platform}`}
                  />

                  <p className="mt-6 mb-4 text-xs sm:text-base">{pricing.description}</p>

                  <div className="z-[2]">
                    {pricing?.regularPrice &&
                      pricing.regularPrice !== pricing.price && (
                        <span className="block line-through text-xl text-text-secondary/50">
                          {formatPrice(pricing.regularPrice)}
                        </span>
                      )}
                    <p
                      className={cn(
                        "font-bold text-5xl sm:text-6xl mt-1",
                        !pricing.highlighted && "text-primary"
                      )}
                    >
                      {formatPrice(pricing.price)}
                    </p>
                    {!!pricing?.priceDescription && (
                      <p className="text-text-secondary text-sm mt-2">
                        {pricing.priceDescription}
                      </p>
                    )}

                    <LinkPhEvent href={pricing.checkoutUrl} event={`buy-button-${pricing.platform.toLowerCase()}`}>
                      <Button
                        className={cn(
                          "justify-center text-xl font-bold mt-6 mx-auto px-6 sm:px-10",
                          !pricing.highlighted &&
                            "border-primary bg-transparent text-primary border hover:bg-primary hover:text-white"
                        )}
                      >
                        Comprar agora
                      </Button>
                    </LinkPhEvent>
                  </div>
                </div>
              </Motion>
            );
          })}
        </div>
      </div>
    </section>
  );
};
