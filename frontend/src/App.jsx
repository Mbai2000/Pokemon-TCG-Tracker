import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddCard from "./pages/AddCard";
import DeleteCard from "./pages/DeleteCard";
import EditCard from "./pages/EditCard";
import ShowCard from "./pages/ShowCard";
import SearchCard from "./pages/SearchCard";
import SidebarNav from "./components/SidebarNav";
import ToggleButton from "./components/Home/ToggleButton";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className={`${darkMode ? "dark": ""}`}>
      <div className={`flex dark:bg-gray-900`}>
      <SidebarNav />
      <div onClick={toggleDarkMode} className="absolute bottom-2 left-2">
        <ToggleButton  />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cards/add" element={<AddCard />} />
        <Route path="/cards/edit/:id" element={<EditCard />} />
        <Route path="/cards/delete/:id" element={<DeleteCard />} />
        <Route path="/cards/details/:id" element={<ShowCard />} />
        <Route path="/cards/search" element={<SearchCard />} />
      </Routes>
    </div>
    </div>
    
  );
};

export default App;
