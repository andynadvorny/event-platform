import { Logo } from "../components/Logo";

export function Subscribe() {
  return (
    <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
      <main className="max-w-[1100px] flex items-center justify-between mt-20 mx-auto">
        <div className="max-w-[640px]">
          <Logo />
          <h1>
            Construa uma aplicação completa, do zero, com React JS
          </h1>
        </div>
        <div>

        </div>
      </main>

      <img src="/src/assets/code-mockup.png" className="mt-10" />
    </div>
  )
}