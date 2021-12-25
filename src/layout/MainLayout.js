import React from "react";
import bg from "../assets/images/BG.png";

import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";

const MainLayout = ({ children }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize:"cover",
        height:600
      }}
      className=" py-20 px-5 md:px-32 my-5 mx-5 md:mx-20 bg-white"
    >
      <Header/>
      <div className="my-28">{children}</div>
      <Footer/>
    </div>
  );
};

export default MainLayout;
