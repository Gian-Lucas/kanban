import Image from "next/image";
import filterImg from "../assets/filter.svg";
import searchImg from "../assets/search.svg";

export const Filter = () => {
  return (
    <div className="flex gap-4 justify-start mt-10 w-full">
      <button className="max-h-12 flex items-center justify-center gap-2 rounded-lg bg-purple-700 text-white py-3 px-8 text-[14px] hover:opacity-80 transition-opacity">
        <Image src={filterImg} width={24} height={24} alt="" />
        Filtrar
      </button>

      <div className="max-h-12 relative flex items-center justify-center w-full">
        <Image
          className="absolute left-3"
          src={searchImg}
          width={24}
          height={24}
          alt=""
        />
        <input
          className="max-h-12 w-full flex p-4 pl-11 items-center rounded-lg border-[0.7px] shadow-input border-gray-300 bg-white placeholder:text-gray-500"
          placeholder="Busque por cards, assuntos ou responsáveis..."
        />
      </div>
    </div>
  );
};
