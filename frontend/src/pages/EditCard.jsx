import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useSnackbar } from "notistack";
import { TbPokeball } from "react-icons/tb";

const EditCard = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [set, setSet] = useState("");
  const [image, setImage] = useState("");
  const [date, setDate] = useState("");
  const [normal, setNormal] = useState("");
  const [holo, setHolo] = useState("");
  const [reverse, setReverse] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    axios
      .get(`http://localhost:8888/cards/${id}`)
      .then((response) => {
        setName(response.data.name);
        setNumber(response.data.number);
        setSet(response.data.set);
        setImage(response.data.image);
        setDate(response.data.date);
        setNormal(response.data.normal);
        setHolo(response.data.holo);
        setReverse(response.data.reverse);
      })
      .catch((error) => {
        alert("An error has occured");
        console.log(error);
      });
  }, []);
  const handleEditCard = () => {
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
      .put(`http://localhost:8888/cards/${id}`, data)
      .then(() => {
        enqueueSnackbar("Card Changed", { variant: "success" });
        navigate("/");
      })
      .catch((error) => {
        enqueueSnackbar("Card Change Error", { variant: "error" });
        console.log(error);
      });
  };

  return (
    <div className="w-screen h-screen bg-neutral-200 dark:bg-slate-800">
      <div className="p-4 mx-auto">
        <div className="flex flex-col border-2 border-red-400 rounded-x1 w-[600px] p-4 mx-auto">
          <h1 className="text-3xl my-4 dark:text-white">Edit Card</h1>
          <div className="my-1">
            <label className="text-xl mr-4 text-gray-500 dark:text-white">
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border-2 border-gray-500 px-4 py-1 w-full dark:bg-slate-700 dark:text-white"
            />
          </div>
          <div className="my-3">
            <label className="text-xl mr-4 text-gray-500 dark:text-white">
              Number
            </label>
            <input
              type="text"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              className="border-2 border-gray-500 px-4 py-1 w-full dark:bg-slate-700 dark:text-white"
            />
          </div>
          <div className="my-3">
            <label className="text-xl mr-4 text-gray-500 dark:text-white">
              set
            </label>
            <input
              type="text"
              value={set}
              onChange={(e) => setSet(e.target.value)}
              className="border-2 border-gray-500 px-4 py-1 w-full dark:bg-slate-700 dark:text-white"
            />
          </div>
          <div className="my-3">
            <label className="text-xl mr-4 text-gray-500 dark:text-white">
              Image
            </label>
            <input
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className="border-2 border-gray-500 px-4 py-1 w-full dark:bg-slate-700 dark:text-white"
            />
          </div>
          <div className="my-3">
            <label className="text-xl mr-4 text-gray-500 dark:text-white">
              Price Date
            </label>
            <input
              type="text"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="border-2 border-gray-500 px-4 py-1 w-full dark:bg-slate-700 dark:text-white"
            />
          </div>
          <div className="my-3">
            <label className="text-xl mr-4 text-gray-500 dark:text-white">
              Normal Price
            </label>
            <input
              type="text"
              value={normal}
              onChange={(e) => setNormal(e.target.value)}
              className="border-2 border-gray-500 px-4 py-1 w-full dark:bg-slate-700 dark:text-white"
            />
          </div>
          <div className="my-3">
            <label className="text-xl mr-4 text-gray-500 dark:text-white">
              Holofoil Price
            </label>
            <input
              type="text"
              value={holo}
              onChange={(e) => setHolo(e.target.value)}
              className="border-2 border-gray-500 px-4 py-1 w-full dark:bg-slate-700 dark:text-white"
            />
          </div>
          <div className="my-3">
            <label className="text-xl mr-4 text-gray-500 dark:text-white">
              Reverse Holofoil Price
            </label>
            <input
              type="text"
              value={reverse}
              onChange={(e) => setReverse(e.target.value)}
              className="border-2 border-gray-500 px-4 py-1 w-full dark:bg-slate-700 dark:text-white"
            />
          </div>
          <div className="flex justify-center items-center">
            <TbPokeball
              onClick={handleEditCard}
              className="text-6xl text-red-600 hover:text-black dark:hover:text-white cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditCard;
