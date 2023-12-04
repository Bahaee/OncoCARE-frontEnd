import React from "react";
import { FaRibbon } from "react-icons/fa";

const Logo = () => {
  return (
    <div className="flex items-center">
      <FaRibbon size={40} color="mistyRosePink" />
      <span className="text-mistyRosePink text-xl font-bold ml-2">
        OncoCARE
      </span>
    </div>
  );
};

export default Logo;
