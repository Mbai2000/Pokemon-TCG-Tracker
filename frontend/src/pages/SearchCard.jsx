import React from "react";
import SearchBar from "../components/Search/SearchBar";
import SidebarNav from "../components/SidebarNav";

const SearchCard = () => {
  return (
    <div className="overflow-hidden flex max-h-screen">
      <SidebarNav/>
      <div className="justify-center items-center gap-x-4 mx-auto">
        <SearchBar />
      </div>

    </div>
  );
};

export default SearchCard;
