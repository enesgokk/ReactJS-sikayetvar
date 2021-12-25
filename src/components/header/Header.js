import React from "react";
import logo from "../../assets/images/logo.png";

const Header = () => {
  return (
    <div className="flex justify-between items-start md:items-center">
      <div className="flex flex-col md:flex-row ">
        <img src={logo} alt="logo" />
        <div className=" pl-0 md:pl-10 text-white">Posts</div>
      </div>
      <button className="bg-white py-1 md:py-2 px-4 md:px-7 rounded-md text-indigo-600">
        Login
      </button>
    </div>
  );
};

export default Header;
