import React, { useState, useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { pokemonNames } from "../components/Search/Data/data.js";
import axios from "axios";
import CardView from "../components/Home/CardView.jsx";

const Collection = () => {
  const [query, setQuery] = useState("");
  const [cards, setCards] = useState([]);
  const [searched, setSearched] = useState([]);
  const [search, setSearch] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:8888/cards")
      .then((response) => {
        setCards(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleSearch = () => {
    setQuery(query.charAt(0).toUpperCase() + query.slice(1));
    let found = cards.filter((card) => {
      return card.name.includes(query);
    });
    setSearch(true);
    setSearched(found);
    if (query.isEmpty) {
      handleReset();
    }
  };

  const handleReset = () => {
    setSearch(false);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSearch();
    }
  };

  return (
    <div className="h-screen w-screen bg-neutral-200 dark:bg-slate-800">
      <div className="p-4">
        <div className="flex justify-center items-center gap-x-4 mx-auto">
          <button
            onClick={handleReset}
            className="absolute py-2 px-4 bg-red-500 hover:bg-red-700 cursor-pointer text-sm right-[505px] border-black rounded-full border-2 cursor-pointer text-white font-bold"
          >
            Reset
          </button>
          <form className="w-[500px] relative">
            <div className="relative">
              <input
                type="search"
                placeholder="Search For Card"
                className="w-full p-4 rounded-full dark:bg-slate-700 border-black border-2 text-black dark:text-neutral-100 bg-white"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyPress}
              />
              <button
                className="absolute text-black dark:text-neutral-100 right-1 top-1/2 -translate-y-1/2 p-4"
                onClick={handleSearch}
                type="button"
              >
                <AiOutlineSearch />
              </button>
              <div className="absolute top-16 p-4 dark:bg-slate-700 w-[500px] rounded-xl left-1/2 -translate-x-1/2 flex flex-col gap-2 mx-auto border-2 border-black bg-white">
                {pokemonNames
                  .filter((item) => {
                    const searchTerm = query.toLowerCase();
                    const pokemonName = item.name.toLowerCase();
                    return (
                      searchTerm &&
                      pokemonName.startsWith(searchTerm) &&
                      pokemonName !== searchTerm
                    );
                  })
                  .slice(0, 10)
                  .map((item) => (
                    <div
                      onClick={() => setQuery(item.name)}
                      className="text-black dark:text-white cursor-pointer hover:bg-neutral-100 dark:hover:bg-slate-600 rounded pl-3"
                      key={item.name}
                    >
                      {item.name}
                    </div>
                  ))}
              </div>
            </div>
          </form>
        </div>
        <div className="mt-12 ml-24">
          {!search ? <CardView cards={cards} /> : <CardView cards={searched} />}
        </div>
      </div>
    </div>
  );
};

export default Collection;
