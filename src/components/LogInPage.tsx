import React from "react";
import Logo from "./Logo";
import RibbonImage from "../assets/images/RibbonWithoutBG.png";
import LoginForm from "./LogInForm";

const LogIn = () => {
  return (
    <div>
      <Logo />
      <LoginForm />
      <img src={RibbonImage} alt="Ribbon" />
    </div>
  );
};

export default LogIn;
