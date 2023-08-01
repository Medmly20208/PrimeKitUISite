import React from "react";

const index = () => {
  return (
    <div className="text-center flex justify-center items-center flex-col mt-[60px] gap-[20px] p-[1em]">
      <div>
        <h1 className="text-3xl font-bold">
          <span className="text-blue-600">PrimeKitUI,</span> Build your app in
          seconds
        </h1>

        <h1 className="text-3xl font-bold">
          The best and free open source for react+tailwindcss
        </h1>
      </div>

      <p className="text-gray-600 md:w-[600px] text-center">
        an open-source project that combines the power of React and the
        flexibility of Tailwind CSS to streamline your web development
        experience
      </p>
      <div className="grid items-center ">
        <button className="py-[0.6em] px-[0.8em] bg-blue-600 rounded-md text-white hover:bg-blue-900">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default index;
