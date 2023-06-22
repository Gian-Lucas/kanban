import { Card } from "./components/Card";
import { Filter } from "./components/Filter";
import { Header } from "./components/Header";

export default function Home() {
  return (
    <div className="p-9 w-full">
      <Header />
      <Filter />

      <div className="mt-8 grid grid-cols-3 gap-12">
        <div>
          <h1 className="text-xl font-bold">A fazer</h1>
          <div className="flex flex-col items-start gap-6 mt-6">
            <Card
              title="#boraCodar um Kanban 🧑‍💻"
              description="Novo desafio do #boraCodar da Rocketseat, onde é proposto construir um quadro de Kanban."
              badges={["rockeseat", "desafio"]}
            />

            <Card
              title="Manter a ofensiva 🔥"
              description="Manter minha atividade na plataforma da Rocketseat para não perder a ofensiva"
              badges={["rocketseat"]}
            />

            <Card
              title="Almoçar 🥗"
              description="Me alimentar, aproveitando um momento de descanso para recarregar minhas energias durante o almoço"
              badges={["autocuidado"]}
            />
          </div>
        </div>

        <div>
          <h1 className="text-xl font-bold">Fazendo</h1>
          <div className="flex flex-col items-start gap-6 mt-6">
            <Card
              title="Conferir o novo desafio 🚀 "
              description="Conferir o novo projeto do #boraCodar para fazê-lo da melhor maneira possível"
              badges={["rocketseat", "desafio"]}
            />

            <Card
              title="Ser incrível 😎"
              description="Sempre me lembrar de manter minha autenticidade e espalhar amor"
              badges={["autocuidado"]}
            />
          </div>
        </div>
        <div>
          <h1 className="text-xl font-bold">Feito</h1>
          <div className="flex flex-col items-start gap-6 mt-6">
            <Card
              title="#boraCodar uma página de login 🧑‍💻"
              description="Novo desafio do #boraCodar da Rocketseat, onde é proposto construir uma página de login 🧑‍💻."
              badges={["rocketseat", "desafio"]}
            />

            <Card
              title="#boraCodar uma página de clima 🧑‍💻"
              description="Novo desafio do #boraCodar da Rocketseat, onde é proposto construir uma página de clima 🧑‍💻."
              badges={["rocketseat", "desafio"]}
            />

            <Card
              title="#boraCodar um conversor 🧑‍💻"
              description="Novo desafio do #boraCodar da Rocketseat, onde é proposto construir um quadro de Kanban."
              badges={["rocketseat", "desafio"]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
