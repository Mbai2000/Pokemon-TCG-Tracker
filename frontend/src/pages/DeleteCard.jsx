import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import { useSnackbar } from "notistack";

const DeleteCard = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  const handleDeleteCard = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:8888/cards/${id}`)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Card Deleted", { variant: "success" });
        navigate("/cards/collection");
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar("Card Delete Error", { variant: "success" });
        console.log(error);
      });
  };
  return (
    <div className="w-screen h-screen bg-neutral-200 dark:bg-slate-800">
      <div className="p-6 mx-auto">
        {loading ? <Spinner /> : ""}
        <div className="flex flex-col items-center border-2 border-red-400 rounded-xl w-[600px] p-8 mx-auto">
          <h3 className="text-2xl dark:text-white">
            Are you sure you would like to DELETE this card?
          </h3>
          <button
            className="p-4 bg-red-600 text-white m-8 w-full"
            onClick={handleDeleteCard}
          >
            Yes, DELETE this card
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteCard;
