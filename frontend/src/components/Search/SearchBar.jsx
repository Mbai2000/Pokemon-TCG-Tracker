import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { pokemon } from "./Data/data.js";

const SearchBar = () => {
  const [query, setQuery] = useState("");

  return (
    <div className="p-4">
      <div className="flex justify-center items-center gap-x-4 mx-auto">
        <form className="w-[500px] relative">
          <div className="relative">
            <input
              type="search"
              placeholder="Search For Card"
              className="w-full p-4 rounded-full bg-slate-800 text-neutral-100"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button className="absolute text-neutral-100 right-1 top-1/2 -translate-y-1/2 p-4 bg-slate-900 rounded-full">
              <AiOutlineSearch />
            </button>
            <div className="absolute top-20 p-4 bg-slate-800 text-white w-[500px] rounded-xl left-1/2 -translate-x-1/2 flex flex-col gap-2 mx-auto">
              {pokemon
                .filter((item) => {
                  const searchTerm = query.toLowerCase();
                  const pokemonName = item.name.toLowerCase();
                  return searchTerm && pokemonName.startsWith(searchTerm);
                })
                .slice(0, 10)
                .map((item) => (
                  <div
                    onClick={() => setQuery(item.name)}
                    className="text-white cursor-pointer"
                    key={item.name}
                  >
                    {item.name}
                  </div>
                ))}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
