import { TbPokeball } from "react-icons/tb";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

const InfoModal = ({ onClose} ) => {
    const info1 = `To search for cards, enter the name of the Pokémon in the 
search bar. The filter will suggest Pokémon based on your input,
click on the name to fill in the query.`
    const info2 = `To search, press 'Enter', or click the magnifying glass.`
    const info3 = `Click on a card to see its details. Press the Pokéball icon 
in the top left to add the card to your collection`


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
        <br/>
        <pre className="text-black dark:text-neutral-400">{info1}</pre>
        <br/>
        <pre className="text-black dark:text-neutral-400">{info2}</pre>
        <AiOutlineSearch className="text-3xl text-black dark:text-neutral-100"/>
        <br/>
        <pre className="text-black dark:text-neutral-400">{info3}</pre>
        <TbPokeball className="text-3xl text-red-600 hover:text-black dark:hover:text-white cursor-pointer"/>
      </div>
    </div>
  );
};

export default InfoModal;
