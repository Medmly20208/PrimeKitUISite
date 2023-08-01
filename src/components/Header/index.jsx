import React, { useState } from "react";

//components
import HeaderNav from "./HeaderNav";

const Header = () => {
  return (
    <header
      className={`flex justify-between items-center py-[10px]  w-full  z-[1000] `}
    >
      <div className="flex items-center gap-[30px]">
        <img
          src={
            "https://github.com/Medmly20208/PrimeKitUI/assets/69359301/e3a2626a-d8b2-4463-bd99-7db58c508162"
          }
          alt="logo "
          className="w-[8rem]"
        />
      </div>

      <div className="hidden gap-[10px] md:flex">
        <nav>
          <ul className="flex gap-[20px]">
            <li className="hover:text-blue-600 cursor-pointer ">
              <a href="#Headers">Headers</a>
            </li>
            <li className="hover:text-blue-600 cursor-pointer">
              <a href="#Heros">Heros</a>
            </li>
            <li className="hover:text-blue-600 cursor-pointer ">
              <a href="#Banners">Banners</a>
            </li>
            <li className="hover:text-blue-600 cursor-pointer ">
              <a href="#Footers">Footers</a>
            </li>
          </ul>
        </nav>
      </div>
      <HeaderNav />
    </header>
  );
};

export default Header;
