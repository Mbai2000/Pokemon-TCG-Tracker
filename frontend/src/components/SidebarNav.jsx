import React from "react";
import { Link } from "react-router-dom";

const SidebarNav = () => {
  const Menus = [
    { name: "Search", src: "Search", link: "/cards/search" },
    { name: "Manual Add", src: "Add", gap: true, link: "/cards/add" },
    { name: "Settings", src: "Settings", gap: true, link: "/settings" },
  ];
  return (
    <div className="flex">
      <div className={"w-64  h-screen bg-red-700 p-5 pt-8"}>
        <Link to="/">
          <div className="flex gap-x-4 items-center hover:bg-red-400 rounded-md">
            <img
              src="../src/assets/Pokeball.png"
              className="h-10 w-10 cursor-pointer duration-500"
            ></img>
            <h1
              className={"text-wrap text-white origin-left font-medium text-xl"}
            >
              Pokémon <br></br>TCG <br></br>Tracker
            </h1>
          </div>
        </Link>

        <ul className="pt-6">
          {Menus.map((menu, index) => (
            <Link key={index} to={`${menu.link}`}>
              <li
                key={index}
                className={`text-gray-300 text-xl flex items-center gap-x-4 cursor-pointer p-2 hover:bg-red-400 rounded-md ${
                  menu.gap ? "mt-20" : "mt-2"
                }`}
              >
                <img
                  className="h-6 w-6"
                  src={`../src/assets/${menu.src}.png`}
                />
                <span
                  className={`${!open && "hidden"} origin-left duration-200`}
                >
                  {menu.name}
                </span>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SidebarNav;
