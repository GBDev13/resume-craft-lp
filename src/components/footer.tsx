import Image from "next/image"

export const Footer = () => {
  return (
    <footer className="w-full py-10 bg-primary-800 mt-20">
      <div className="landing-container flex items-center justify-between">
        <Image
          src="/devbygb.svg"
          width={200}
          height={100}
          alt="Logo da DevByGB"
        />

        <p className="text-text-secondary">
          {new Date().getFullYear()} - Todos os direitos reservados
        </p>
      </div>
    </footer>
  )
}