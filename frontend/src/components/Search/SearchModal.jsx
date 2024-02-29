import { AiOutlineClose } from "react-icons/ai";
import { CiDollar } from "react-icons/ci";
import { TbPokeball } from "react-icons/tb";
import axios from "axios";
import { useSnackbar } from "notistack";
import { IoIosStarOutline } from "react-icons/io";
import { IoMdStar } from "react-icons/io";
import { IoMdStarHalf } from "react-icons/io";

const SearchModal = ({
  onClose,
  cardImage,
  cardName,
  cardNumber,
  cardSet,
  cardNormal,
  cardHolo,
  cardReverse,
  cardDate,
}) => {
  const { enqueueSnackbar } = useSnackbar();

  const name = cardName;
  const number = cardNumber;
  const set = cardSet;
  const image = cardImage;
  const date = cardDate;
  const normal = cardNormal;
  const holo = cardHolo;
  const reverse = cardReverse;

  const handleSaveCard = () => {
    const data = {
      name,
      number,
      set,
      image,
      date,
      normal,
      holo,
      reverse,
    };
    axios
      .post("http://localhost:8888/cards", data)
      .then(() => {
        enqueueSnackbar("Card Added", { variant: "success" });
      })
      .catch((error) => {
        enqueueSnackbar("Error Adding Card", { variant: "error" });
        console.log(error);
      });
  };
  return (
    <div
      className="fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="overflow-y-auto w-[600px] max-w-full h-[400px] bg-white rounded-xl p-4 flex flex-col relative dark:bg-gray-900 bg-neutral-200"
      >
        <AiOutlineClose
          className="absolute right-6 top-6 text-3xl text-black dark:text-white cursor-pointer"
          onClick={onClose}
        />
        <img className="object-contain h-[345px]" src={cardImage}></img>
        <div className="flex justify-start items-center gap-x-2 pt-3">
          <TbPokeball className="text-red-500 text-2xl left-2" />
          <h2 className="my-1 dark:text-white">
            {cardName} - {cardSet} - {cardNumber}
          </h2>
        </div>
        <div className="flex justify-start items-center gap-x-2 pt-6">
          <CiDollar className="text-green-500 text-2xl" />
          <h2 className="my-1 dark:text-white">TCGprice from: {cardDate}</h2>
        </div>
        <div className="flex justify-start items-center gap-x-2">
          <IoIosStarOutline className="text-yellow-500 text-2xl" />
          <h2 className="my-1 dark:text-white">Normal: {cardNormal}</h2>
        </div>
        <div className="flex justify-start items-center gap-x-2">
          <IoMdStar className="text-yellow-500 text-2xl" />
          <h2 className="my-1 dark:text-white">Holofoil: {cardHolo}</h2>
        </div>
        <div className="flex justify-start items-center gap-x-2">
          <IoMdStarHalf className="text-yellow-500 text-2xl" />
          <h2 className="my-1 dark:text-white">
            Reverse Holofoil: {cardReverse}
          </h2>
        </div>
        <div className="absolute left-6 top-6 text-3xl">
          <TbPokeball
            onClick={handleSaveCard}
            className="text-3xl text-red-600 hover:text-black dark:hover:text-white cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
