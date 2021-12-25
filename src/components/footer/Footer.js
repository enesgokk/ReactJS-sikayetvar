import React from "react";
import facebook from "../../assets/images/facebook.svg";
import dribbble from "../../assets/images/dribbble.svg";
import github from "../../assets/images/github.svg";
import twitter from "../../assets/images/twitter.svg";

const Footer = () => {
  return (
    <div className="divide-y divide-gray-400  ">
      <div className="flex w-full flex-col md:flex-row justify-between mb-10 ">
        <div className="flex flex-col">
          <div className="text-lg text-cyan-400 font-medium">
            Thank you for supporting us!
          </div>
          <div className="text-gray-600">Let's get in touch on any of these platforms.</div>
        </div>
        <div className="flex">
          <img className="p-3 mr-2 w-10 h-10 rounded-md bg-blue-400 cursor-pointer" src={twitter} alt="twitter" />
          <img className="p-3 mr-2 w-10 h-10 rounded-md bg-blue-600 cursor-pointer" src={facebook} alt="twitter" />
          <img className="p-3 mr-2 w-10 h-10 rounded-md bg-pink-400 cursor-pointer" src={dribbble} alt="twitter" />
          <img className="p-3 mr-2 w-10 h-10 rounded-md bg-black cursor-pointer" src={github} alt="twitter" />
        </div>
      </div>
      <div className="flex justify-between pt-6 pb-10">
          <div className="text-sm font-medium text-gray-700">© 2018 <span className="text-cyan-500 font-semibold" >Şikayetvar</span></div>
          <div className="text-gray-600 font-semibold text-sm">Posts</div>
      </div>
    </div>
  );
};

export default Footer;
