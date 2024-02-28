import { AiOutlineClose } from "react-icons/ai";
import { CiDollar } from "react-icons/ci";
import { AiOutlineEdit } from "react-icons/ai";
import { MdOutlineDelete } from "react-icons/md";
import { TbPokeball } from "react-icons/tb";
import { Link } from "react-router-dom";
import { IoIosStarOutline } from "react-icons/io";
import { IoMdStar } from "react-icons/io";
import { IoMdStarHalf } from "react-icons/io";

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
          className="absolute right-6 top-6 text-3xl text-black dark:text-white cursor-pointer"
          onClick={onClose}
        />
        <img className="object-contain h-[340px]" src={card.image}></img>
        <div className="flex justify-start items-center gap-x-2 pt-4">
          <TbPokeball className="text-red-500 text-2xl" />
          <h2 className="my-1 dark:text-white">{card.name} - {card.set} - {card.number}</h2>
        </div>
        <div className="flex justify-start items-center gap-x-2 pt-6">
          <CiDollar className="text-green-500 text-2xl" />
          <h2 className="my-1 dark:text-white">TCGplayer price from: {card.date} (USD)</h2>
        </div>
        <div className="flex justify-start items-center gap-x-2">
          <IoIosStarOutline className="text-yellow-300 text-2xl" />
          <h2 className="my-1 dark:text-white">Normal: {card.normal}</h2>
        </div>
        <div className="flex justify-start items-center gap-x-2">
          <IoMdStar className="text-yellow-300 text-2xl" />
          <h2 className="my-1 dark:text-white">Holofoil: {card.holo}</h2>
        </div>
        <div className="flex justify-start items-center gap-x-2">
          <IoMdStarHalf className="text-yellow-300 text-2xl" />
          <h2 className="my-1 dark:text-white">
            Reverse Holofoil: {card.reverse}
          </h2>
        </div>
        <div className="flex justify-between items-center gap-x-2 mt-4 p-4">
          <Link to={`/cards/edit/${card._id}`}>
            <AiOutlineEdit className="text-2xl text-yellow-600 hover:text-black dark:hover:text-white" />
          </Link>
          <Link to={`/cards/delete/${card._id}`}>
            <MdOutlineDelete className="text-2xl text-red-600 hover:text-black dark:hover:text-white" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardModal;
