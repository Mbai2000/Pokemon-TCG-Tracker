import React, {useState} from "react";
import { Icon } from "@iconify/react";
import { AiOutlineCaretLeft } from "react-icons/ai";

const SidebarNav = () => {
  const [open, setOpen] = useState(true);
  return (
    <div className="flex">
      <div className={`${ open ? "w-72" : "w-20" } duration-300 h-screen bg-indigo-950 relative`}>
        <div className={`absolute cursor-pointer rounded-full -right-3 top-9 w-7 border-2 border-indigo-950 rounded-full ${!open && 'rotate-180'}`} onClick = {() => setOpen(!open)} >
          <AiOutlineCaretLeft />
        </div>
        <div>
          <Icon icon="mdi:pokeball" />;
        </div>
      </div>
    </div>
  );
};

export default SidebarNav;

