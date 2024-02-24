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
        className="m-auto hover:shadow-xl cursor-pointer"
        src={cards.image}
      ></img>
    </div>
  );
};

export default SingleCard;



