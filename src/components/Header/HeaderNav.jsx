import React, { useState } from "react";

const HeaderNav = () => {
  const [isNavShown, setIsNavShown] = useState(false);

  const showNav = () => {
    setIsNavShown(true);
  };
  const hideNav = () => {
    setIsNavShown(false);
  };

  return (
    <div className="md:hidden">
      <svg
        onClick={showNav}
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 16 16"
        className="cursor-pointer"
      >
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
        />
      </svg>

      <>
        <div
          onClick={hideNav}
          className={`${
            isNavShown ? "block" : "hidden"
          } fixed top-[0px] right-[0px] w-screen h-screen bg-black opacity-20 cursor-pointer `}
        ></div>
      </>

      <div
        className={` fixed transition-all duration-300 top-[0px] ${
          isNavShown ? "right-[0px]" : "right-[-70vw]"
        } w-[70vw] h-screen bg-white  flex flex-col justify-center items-center gap-[20px] `}
      >
        <nav className="w-[80%]">
          <ul className="flex gap-[20px] flex-col text-center justify-stretch">
            <li className="w-full">
              <div className="flex items-start w-full">
                <img
                  src={
                    "https://github-production-user-asset-6210df.s3.amazonaws.com/69359301/257009420-f7ead7fe-6c88-4613-b61c-d0aa0b83d8ae.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIWNJYAX4CSVEH53A%2F20230729%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230729T202858Z&X-Amz-Expires=300&X-Amz-Signature=2094c8d01b698bcf23ef8c1371b18f2e00b748350026f1325157a591a31e53e2&X-Amz-SignedHeaders=host&actor_id=69359301&key_id=0&repo_id=608093399"
                  }
                  alt="logo"
                  className="w-[8rem]"
                />
              </div>{" "}
            </li>
            <li className="hover:text-blue-600 cursor-pointer  border px-[20px] py-[10px] border-black hover:border-blue-600 rounded-md">
              <a href="#Headers">Headers</a>
            </li>
            <li className="hover:text-blue-600 cursor-pointer  border px-[20px] py-[10px] border-black hover:border-blue-600 rounded-md">
              <a href="#Heros">Heros</a>
            </li>
            <li className="hover:text-blue-600 cursor-pointer  border px-[20px] py-[10px] border-black hover:border-blue-600 rounded-md">
              <a href="#Banners">Banners</a>
            </li>
            <li className="hover:text-blue-600 cursor-pointer  border px-[20px] py-[10px] border-black hover:border-blue-600 rounded-md">
              <a href="#Footers">Footers</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default HeaderNav;
