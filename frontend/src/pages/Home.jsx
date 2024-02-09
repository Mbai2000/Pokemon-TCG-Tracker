import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import { MdOutlineAddBox } from "react-icons/md";
import CardView from "../components/Home/CardView";
import CardTable from "../components/Home/CardTable";
import { AiOutlineSearch } from "react-icons/ai";
import { Icon } from "@iconify/react";

const Home = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState("table");
  const [open, setOpen] = useState(true);
  const Menus = [
    { name: "Search", src: 'Search'  },
    { name: "Add", src: 'Add', gap: true },
    { name: "Edit", src: 'Edit'},
    { name: "Delete", src: 'Trash' },
    { name: "Settings", src: 'Settings', gap: true},
  ];
  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:8888/cards")
      .then((response) => {
        setCards(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);
  return (
    <div className="flex">
      <div
        className={`${
          open ? "w-64" : "w-20"
        } duration-300 h-screen bg-red-700 fixed p-5 pt-8`}
      >
        <div>
          <Icon
            icon="codicon:triangle-left"
            width="64"
            height="64"
            style={{ color: "gold" }}
            className={`mt-16 absolute size-16 cursor-pointer right-1 top-30 w-7 ${
              !open && "rotate-180"
            }`}
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="flex gap-x-4 items-center">
          <img src='../src/assets/Pokeball.png' className= 'h-10 w-10 cursor-pointer duration-500'>
          </img>
          <h1
            className={`text-wrap text-white origin-left font-medium text-xl duration-300 ${
              !open && "scale-0"
            }`}
          >
            Pokémon <br></br>TCG <br></br>Tracker
          </h1>
        </div>
        <ul className="pt-6">
            {Menus.map((menu,index)=>(
                <li key={index} className={`text-gray-300 text-lg flex items-center gap-x-4 cursor-pointer p-2 hover:bg-red-400 rounded-md ${menu.gap ? "mt-20" : "mt-2"}`}>
                    <img className ='h-6 w-6' src={`../src/assets/${menu.src}.png`} />
                    <span className={`${!open && 'hidden'} origin-left duration-200`}>{menu.name}</span>
                </li>
            ))}
        </ul>
      </div>

      <div className="p-4">
        <div className="flex justify-center items-center gap-x-4">
          <button
            className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg"
            onClick={() => setShowType("table")}
          >
            Table
          </button>
          <button
            className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg"
            onClick={() => setShowType("card")}
          >
            Card
          </button>
        </div>
        <div className="flex justify-between items-center">
          <h1 className="text-3xl my-8">Cards</h1>
          <Link to="/cards/add">
            <MdOutlineAddBox className="text-sky-800 text-4xl" />
          </Link>
        </div>
        <div className="flex justify-end items-center">
          <Link to="/cards/search">
            <AiOutlineSearch className="text-sky-800 text-4xl" />
          </Link>
        </div>
        {loading ? (
          <Spinner />
        ) : showType === "table" ? (
          <CardTable cards={cards} />
        ) : (
          <CardView cards={cards} />
        )}
      </div>
    </div>
  );
};

export default Home;
