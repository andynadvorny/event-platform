import { Logo } from "../components/Logo";

export function Subscribe() {
  return (
    <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
      <main className="max-w-[1100px] flex items-center justify-between mt-20 mx-auto">
        <div className="max-w-[640px]">
          <Logo />
          <h1 className="mt-8 text-[2.5rem] leading-tight">
            Construa uma aplicação completa, do zero, com React JS
          </h1>
          <p className="">
            Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.
          </p>
        </div>
        <div>

        </div>
      </main>

      <img src="/src/assets/code-mockup.png" className="mt-10" />
    </div>
  )
}