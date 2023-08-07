import React from "react";

const index = ({ title, components, description, id }) => {
  return (
    <div id={id || ""} className="w-full mt-[50px] ">
      <h1 className="text-3xl font-bold text-left">{title}</h1>
      <p className="text-md text-gray-700 mb-[3em]">{description}</p>
      <div className="flex gap-[1em] flex-wrap items-stretch">
        {components.map((component) => {
          return (
            <div className="border flex flex-col justify-center items-center gap-5  p-[2em] rounded-md shadow-md h-fit bg-gray-100">
              <img
                src={component.img}
                alt="component"
                className="border p-[0.2em] rounded-sm"
              />
              <a
                href={component.link}
                target="-_blank"
                className="py-[0.6em] px-[0.8em] bg-blue-600 rounded-md text-white hover:bg-blue-900"
              >
                View code
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default index;
