import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="w-full py-10 bg-primary-800 mt-10 sm:mt-20">
      <div className="landing-container flex items-center justify-between flex-col sm:flex-row gap-4">
        <a href="https://devbygb.com" target="_blank">
          <Image
            src="/devbygb.svg"
            width={200}
            height={100}
            alt="Logo da DevByGB"
            className="max-w-[150px] sm:max-w-[200px]"
          />
        </a>

        <p className="text-text-secondary text-center sm:text-right">
          {new Date().getFullYear()} - Todos os direitos reservados
        </p>
      </div>
    </footer>
  );
};
