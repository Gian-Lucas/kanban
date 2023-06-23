import Image from "next/image";

import boardImg from "../assets/board.svg";
import peopleImg from "../assets/people.svg";
import docImg from "../assets/doc.svg";
import settingsImg from "../assets/settings.svg";

export const Sidebar = () => {
  return (
    <>
      <aside className="bg-purple-700 h-screen fixed text-white p-10">
        <Image src="/logo.svg" alt="" width={49.89} height={56} />

        <nav className="flex flex-col gap-9 mt-16 mr-8">
          <a href="#" className="flex gap-4 font-bold">
            <Image src={boardImg} width={20} height={20} alt="" />
            Boards
          </a>
          <a href="#" className="flex gap-4 opacity-50">
            <Image src={peopleImg} width={20} height={20} alt="" />
            Equipes
          </a>
          <a href="#" className="flex gap-4 opacity-50">
            <Image src={docImg} width={20} height={20} alt="" />
            Relatórios
          </a>
          <a href="#" className="flex gap-4 opacity-50">
            <Image src={settingsImg} width={20} height={20} alt="" />
            Ajustes
          </a>
        </nav>
      </aside>
      <aside className="bg-purple-700 text-white p-10 invisible">
        <Image src="/logo.svg" alt="" width={49.89} height={56} />

        <nav className="flex flex-col gap-9 mt-16 mr-8">
          <a href="#" className="flex gap-4 font-bold">
            <Image src={boardImg} width={20} height={20} alt="" />
            Boards
          </a>
          <a href="#" className="flex gap-4 opacity-50">
            <Image src={peopleImg} width={20} height={20} alt="" />
            Equipes
          </a>
          <a href="#" className="flex gap-4 opacity-50">
            <Image src={docImg} width={20} height={20} alt="" />
            Relatórios
          </a>
          <a href="#" className="flex gap-4 opacity-50">
            <Image src={settingsImg} width={20} height={20} alt="" />
            Ajustes
          </a>
        </nav>
      </aside>
    </>
  );
};
