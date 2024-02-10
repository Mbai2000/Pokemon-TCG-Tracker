//import { Link } from "react-router-dom";
//import { PiBookOpenTextLight } from "react-icons/pi";
//import { BiUserCircle, BiShow } from "react-icons/bi";
//import { AiOutlineEdit } from "react-icons/ai";
//import { BsInfoCircle } from "react-icons/bs";
//import { MdOutlineDelete } from "react-icons/md";
import CardModal from "./CardModal";
import { useState } from "react";

const SingleCard = ({ cards }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      {showModal && (
        <CardModal card={cards} onClose={() => setShowModal(false)} />
      )}
      <img
        onClick={() => setShowModal(true)}
        className="m-auto hover:shadow-xl"
        src="https://images.pokemontcg.io/xy1/1.png"
      ></img>
    </div>
  );
};

export default SingleCard;

{
  /*<h2 className="absolute top-1 right-2 px-4 py-1 bg-red-300 rounded-lg">
{cards.number}
</h2>
<h4 className="my-2 text-gray-500">{cards._id}</h4>
<div className="flex justify-start items-center gap-x-2">
<PiBookOpenTextLight className="text-red-300 text-2xl" />
<h2 className="my-1">{cards.name}</h2>
</div>
<div className="flex justify-start items-center gap-x-2">
<BiUserCircle className="text-red-300 text-2xl" />
<h2 className="my-1">{cards.version}</h2>
</div>
<div className="flex justify-between items-center gap-x-2 mt-4 p-4">
<BiShow
  className="text-3xl text-blue-800 hover:text-black cursor-pointer"
  onClick={() => setShowModal(true)}
/>
<Link to={`/cards/details/${cards._id}`}>
  <BsInfoCircle className="text-3xl text-green-800 hover:text-black" />
</Link>
<Link to={`/cards/edit/${cards._id}`}>
  <AiOutlineEdit className="text-2xl text-yellow-600 hover:text-black" />
</Link>
<Link to={`/cards/delete/${cards._id}`}>
  <MdOutlineDelete className="text-2xl text-red-600 hover:text-black" />
</Link>
      </div>

    border-2 border-gray-500

        <div className="flex flex-col shrink px-4 py-2 m-4 relative rounded-2xl">
    */
}
