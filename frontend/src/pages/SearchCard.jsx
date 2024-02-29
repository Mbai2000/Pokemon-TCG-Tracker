import React from "react";
import SearchBar from "../components/Search/SearchBar";

const SearchCard = () => {
  return (
    <div className="overflow-hidden flex max-h-screen mx-auto bg-neutral-200 dark:bg-slate-800">
      <SearchBar />
    </div>
  );
};

export default SearchCard;
