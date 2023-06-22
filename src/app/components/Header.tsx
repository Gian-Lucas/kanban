import Image from "next/image";

import penImg from "../assets/pen.svg";

export const Header = () => {
  return (
    <header className="flex justify-start items-center gap-4">
      <h1 className="text-4xl font-bold">Meu Kanban</h1>
      <Image src={penImg} width={24} height={24} alt="" />
    </header>
  );
};
