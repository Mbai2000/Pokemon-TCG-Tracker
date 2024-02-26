import React from "react";
import SearchBar from "../components/Search/SearchBar";

const SearchCard = () => {
  return (
    <div className="overflow-hidden flex max-h-screen mx-auto">
        <SearchBar />
        <div className='grid mt-6 gap-y-4 gap-x-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mr-40 h-[54rem] w-[80rem] overflow-auto'>
          <img src = "https://images.pokemontcg.io/xy1/1.png"/>
          <img src = "https://images.pokemontcg.io/xy1/1.png"/>
          <img src = "https://images.pokemontcg.io/xy1/1.png"/>
          <img src = "https://images.pokemontcg.io/xy1/1.png"/>
          <img src = "https://images.pokemontcg.io/xy1/1.png"/>
          <img src = "https://images.pokemontcg.io/xy1/1.png"/>
          <img src = "https://images.pokemontcg.io/xy1/1.png"/>
          <img src = "https://images.pokemontcg.io/xy1/1.png"/>
          <img src = "https://images.pokemontcg.io/xy1/1.png"/>
          <img src = "https://images.pokemontcg.io/xy1/1.png"/>
          <img src = "https://images.pokemontcg.io/xy1/1.png"/>
          <img src = "https://images.pokemontcg.io/xy1/1.png"/>
          <img src = "https://images.pokemontcg.io/xy1/1.png"/>
          <img src = "https://images.pokemontcg.io/xy1/1.png"/>
          <img src = "https://images.pokemontcg.io/xy1/1.png"/>
          <img src = "https://images.pokemontcg.io/xy1/1.png"/>
        </div>
    </div>
  );
};

export default SearchCard;
