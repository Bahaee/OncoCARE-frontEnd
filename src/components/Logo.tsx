import React from "react";
import { FaRibbon } from "react-icons/fa";

const Logo = () => {
  return (
    <div className="w-48 mx-auto my-8">
      <div className="flex items-center">
        <FaRibbon size={40} color="mistyRosePink" />
        <span className="text-mistyRosePink text-3xl font-bold ml-2">
          OncoCARE
        </span>
      </div>
    </div>
  );
};

export default Logo;
