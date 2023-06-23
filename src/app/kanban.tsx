"use client";

import { createContext, ReactNode, useContext, useState } from "react";

interface Task {
  id: string;
  title: string;
  description: string;
  badges: string[];
}

export interface Column {
  id: "c1" | "c2" | "c3";
  title: string;
  taskIds: string[];
}

interface KanbanContextData {
  tasks: Task[];
  columns: Column[];
  updateColumns: (newColumns: Column[]) => void;
}

const KanbanContext = createContext({} as KanbanContextData);

interface KanbanContextProviderProps {
  children: ReactNode;
}

export function KanbanContextProvider({
  children,
}: KanbanContextProviderProps) {
  const [tasks, setTasks] = useState<Task[]>(() => {
    return [
      {
        id: "t1",
        title: "Atualização do website",
        description:
          "Implementar as alterações de design solicitadas pelo cliente e otimizar o desempenho do website.",
        badges: ["Prioridade Alta", "Desenvolvimento"],
      },
      {
        id: "t2",
        title: "Manter a ofensiva",
        description:
          "Manter minha atividade na plataforma do Duolingo para não perder a ofensiva",
        badges: ["Estudos"],
      },
      {
        id: "t3",
        title: "Almoçar",
        description:
          "Me alimentar, aproveitando um momento de descanso para recarregar minhas energias durante o almoço",
        badges: ["Autocuidado"],
      },
      {
        id: "t4",
        title: "Preparar apresentação para reunião",
        description:
          "Elaborar uma apresentação profissional sobre os resultados do último trimestre para a reunião com a equipe de trabalho.",
        badges: ["Trabalho", "Prioridade Alta"],
      },
      {
        id: "t5",
        title: "Compras de supermercado",
        description:
          "Comprar os itens essenciais para a semana, incluindo frutas, legumes, produtos de higiene pessoal e produtos de limpeza.",
        badges: ["Tarefas domésticas"],
      },
      {
        id: "t6",
        title: "Marcar consulta médica",
        description:
          "Entrar em contato com a clínica médica para agendar uma consulta de rotina e verificar a disponibilidade de horários.",
        badges: ["Saúde", "Autocuidado", "Tarefas pessoais"],
      },
    ];
  });

  const [columns, setColumns] = useState<Column[]>(() => {
    return [
      { id: "c1", title: "A fazer", taskIds: ["t1", "t2", "t3"] },
      { id: "c2", title: "Fazendo", taskIds: ["t4"] },
      { id: "c3", title: "Feito", taskIds: ["t5", "t6"] },
    ];
  });

  const updateColumns = (newColumns: Column[]) => {
    setColumns(newColumns);
  };
  return (
    <KanbanContext.Provider value={{ tasks, columns, updateColumns }}>
      {children}
    </KanbanContext.Provider>
  );
}

export function useKanban(): KanbanContextData {
  const context = useContext(KanbanContext);

  return context;
}
