import React from "react";
import { CiUser } from "react-icons/ci";
export default function GuideSection() {
  const features = [
    {
      title: "Niraj",
      description:
        "exercitation ultamos laboris nisi ut aliquip ex ea commodo consequat. marnerits",
    },
    {
      title: "Niraj",
      description:
        "exercitation ultamos laboris nisi ut aliquip ex ea commodo consequat. marnerits",
    },
    {
      title: "Niraj",
      description:
        "exercitation ultamos laboris nisi ut aliquip ex ea commodo consequat. marnerits",
    },
  ];

  return (
    // <div className="bg-gradient-to-b from-purple-900 to-indigo-900 text-white py-16 px-4 sm:px-6 lg:px-8">
    <div
      className="text-white py-7 px-4 sm:px-6 lg:px-8"
      style={{
        backgroundColor: "#0B050C",
      }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12 ">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Download now <br />
            and level up <br />
            your game!
          </h2>
          <button className="bg-red-500 hover:bg-red-600 text-gray-200 font-bold py-3 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105">
            Download App
          </button>
          <p className="mt-6 text-4xl">Play on Any Device</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className=" bg-opacity-10 p-6 rounded-lg backdrop-blur-sm text-center outline-1 outline-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300 mt-12"
              style={{
                backgroundColor: "#0B050C",
                background: "linear-gradient(to bottom, #0B050C, #340408)",
                boxShadow: "0 0 10px #221624",
              }}
            >
              <div className="flex items-center text-center justify-center mb-4 rounded-full bg-gray-800  w-20 h-20 mx-auto">
                <CiUser className="text-4xl text-yellow-400 " />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
