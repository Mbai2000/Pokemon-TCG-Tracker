import { AiOutlineCaretRight } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { CiDollar } from "react-icons/ci";

const CardModal = ({ card, onClose }) => {
  return (
    <div
      className="fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="overflow-y-auto w-[600px] max-w-full h-[400px] bg-white rounded-xl p-4 flex flex-col relative dark:bg-gray-900"
      >
        <AiOutlineClose
          className="absolute right-6 top-6 text-3xl text-red-600 cursor-pointer"
          onClick={onClose}
        />
        <img className = "object-contain" src = "https://images.pokemontcg.io/xy1/1.png"></img>
        <h2 className="w-fit px-4 py-1 bg-red-300 rounded-lg">
          {card.number}
        </h2>
        <h4 className="my-2 text-gray-500">{card._id}</h4>
        <div className="flex justify-start items-center gap-x-2">
          <AiOutlineCaretRight className="text-red-300 text-2xl" />
          <h2 className="my-1 dark:text-white">{card.name}</h2>
        </div>
        <div className="flex justify-start items-center gap-x-2">
          <AiOutlineCaretRight className="text-red-300 text-2xl" />
          <h2 className="my-1 dark:text-white">{card.version}</h2>
        </div>
        <div className="flex justify-start items-center gap-x-2">
          <AiOutlineCaretRight className="text-red-300 text-2xl" />
          <h2 className="my-1 dark:text-white">{card.edition}</h2>
        </div>
        <div className="flex justify-start items-center gap-x-2">
          <AiOutlineCaretRight className="text-red-300 text-2xl" />
          <h2 className="my-1 dark:text-white">{card.set}</h2>
        </div>
        <div className="flex justify-start items-center gap-x-2">
          <CiDollar className="text-green-500 text-2xl" />
          <h2 className="my-1 dark:text-white">{card.market}</h2>
        </div>
      </div>
    </div>
  );
};

export default CardModal;
