import React from "react";
import { Link } from "react-router-dom";


const SidebarNav = () => {
  return (
    <div className="flex">
      <div className={"w-64  h-screen bg-red-700 p-5 pt-8"}>
        <Link to="/">
          <div className="flex gap-x-4 items-center hover:bg-red-400 rounded-md">
            <img
              src="../src/assets/Pokeball.png"
              className="h-10 w-10 cursor-pointer"
            ></img>
            <h1
              className={"text-wrap text-white origin-left font-medium text-xl"}
            >
              Pokémon <br></br>TCG <br></br>Tracker
            </h1>
          </div>
        </Link>

        <ul className="pt-6">
            <Link to={"/cards/search"}>
              <li
                className={'text-gray-300 text-xl flex items-center gap-x-4 cursor-pointer p-2 hover:bg-red-400 rounded-md'}
              >
                <img
                  className="h-6 w-6"
                  src={'../src/assets/Search.png'}
                />
                <span
                  className='origin-left'
                >
                  Search
                </span>
              </li>
            </Link>
            <Link to={"/cards/collection"}>
              <li
                className={'text-gray-300 text-xl flex items-center gap-x-4 my-4 cursor-pointer p-2 hover:bg-red-400 rounded-md'}
              >
                <img
                  className="h-8 w-6"
                  src={'../src/assets/Cardback.png'}
                />
                <span
                  className='origin-left'
                >
                  Collection
                </span>
              </li>
            </Link>
            <Link to={"/cards/add"}>
              <li
                className={'text-gray-300 text-xl flex items-center gap-x-4 cursor-pointer p-2 hover:bg-red-400 rounded-md'}
              >
                <img
                  className="h-6 w-6"
                  src={'../src/assets/Add.png'}
                />
                <span
                  className='origin-left'
                >
                  Add
                </span>
              </li>
            </Link>
        </ul>
      </div>
    </div>
  );
};

export default SidebarNav;
