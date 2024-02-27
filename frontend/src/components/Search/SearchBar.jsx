import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { pokemonNames } from "./Data/data.js";
import SearchModal from "./SearchModal.jsx";
import { IoIosInformationCircle } from "react-icons/io";
import InfoModal from "./InfoModal.jsx";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [number, setNumber] = useState("");
  const [set, setSet] = useState("");
  const [normal, setNormal] = useState("");
  const [holo, setHolo] = useState("");
  const [reverse, setReverse] = useState("");
  const [date, setDate] = useState("");
  const [cards, setCards] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showInfo, setShowInfo] = useState(false);


  const addr = "https://api.pokemontcg.io/v2/cards/?q=";

  const handleSearch = () => {
    let searchName = addr + "name:" + query;
    fetch(searchName)
      .then((response) => response.json())
      .then((data) => {
        setCards(data.data);
      })
      .catch((err) => console.log(err));
  };

  const handleKeyPress = (event) => {
    if(event.key === 'Enter') {
      event.preventDefault();
      handleSearch();
    }
  }

  const setValues = (item) => {
    setName(item.name);
    setImage(item.images.small);
    setNumber(item.number);
    setSet(item.set.name);
    setDate(item.tcgplayer.updatedAt);
    if (item.tcgplayer.prices.normal) {
      setNormal("Normal: $" + item.tcgplayer.prices.normal.market.toFixed(2))
    } else {
      setNormal("Normal: N/A");
    }
    if (item.tcgplayer.prices.holofoil) {
      setHolo("Holofoil: $" +item.tcgplayer.prices.holofoil.market.toFixed(2))
    } else {
      setHolo("Holofoil: N/A");
    }
    if (item.tcgplayer.prices.reverseHolofoil) {
      setReverse("Reverse Holofoil: $" + item.tcgplayer.prices.reverseHolofoil.market.toFixed(2))
    } else {
      setReverse("Reverse Holofoil: N/A");
    }
    setShowModal(true);
  }


  return (
    <div className="p-4">
      <div className="flex justify-center items-center gap-x-4 mx-auto">
        {showInfo && (
          <InfoModal onClose={() => setShowInfo(false)} />
        )}
        <IoIosInformationCircle className="text-3xl text-sky-500 cursor-pointer right-[540px] top-7" onClick={() => setShowInfo(true)}/>
        <form className="w-[500px] relative">
          <div className="relative">
            <input
              type="search"
              placeholder="Search For Card"
              className="w-full p-4 rounded-full bg-slate-800 text-neutral-100"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyPress}
            />
            <button
              className="absolute text-neutral-100 right-1 top-1/2 -translate-y-1/2 p-4 bg-slate-900 rounded-full"
              onClick={handleSearch}
              type="button"
            >
              <AiOutlineSearch />
            </button>
            <div className="absolute top-16 p-4 bg-slate-800 text-white w-[500px] rounded-xl left-1/2 -translate-x-1/2 flex flex-col gap-2 mx-auto">
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
      {showModal && (
        <SearchModal onClose={() => setShowModal(false)} cardImage = {image} cardName = {name} cardNumber = {number} cardSet = {set} cardNormal = {normal} cardHolo = {holo} cardReverse = {reverse} cardDate = {date}/>
      )}
      <div className="grid mt-12 ml-24 gap-y-4 gap-x-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mr-40 h-[48rem] w-[80rem] overflow-auto">
        {cards.map((item) => (
          <img onClick={() => setValues(item)}
          className="m-auto hover:shadow-xl cursor-pointer hover:shadow-xl dark:hover:shadow-gray-600" key = {item.id} src={item.images.small} />
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
