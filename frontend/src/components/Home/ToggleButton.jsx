import React, { useState } from "react";

const ToggleButton = () => {
  const [isSelected, setSelected] = useState(false);

  return (
    <div onClick={() => setSelected(!isSelected)} className={`flex w-16 h-6 rounded-full transition-all duration-500 ${isSelected ? 'bg-blue-950' : 'bg-yellow-200' }`}>
      <span className={`flex w-8 h-6 rounded-full transition-all duration-500 cursor-pointer ${isSelected ? 'bg-blue-700 ml-10' : 'bg-yellow-500 mr-10' }`}>
      </span>
    </div>
  );
};

export default ToggleButton;
