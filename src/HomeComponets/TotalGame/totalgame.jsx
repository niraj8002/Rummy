import React from "react";
import cardImg from "../../assets/image/card.png";

export default function TotalGame() {
  const Card = [
    {
      img: cardImg,
      title: "Rummy",
    },
    {
      img: cardImg,
      title: "Pool",
    },
    {
      img: cardImg,
      title: "Poker",
    },
    {
      img: cardImg,
      title: "More Games",
    },
  ];

  return (
    <div
      className="w-full py-10 px-4 sm:px-6 lg:px-8"
      style={{
        backgroundColor: "#0B050C",
      }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-4 md:gap-6">
          {Card.map((item, index) => (
            <div
              key={index}
              className="group p-5 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center"
              style={{
                background: "linear-gradient(to bottom, #0B050C, #340408)",
                boxShadow: "0 0 10px #221624",
                minHeight: "350px",
              }}
            >
              <div className="flex-1 flex flex-col items-center justify-center">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-32 h-32 sm:w-40 sm:h-40 object-contain mb-4 transition-transform duration-300 group-hover:scale-105"
                />
                <div className="text-center">
                  <h3
                    className="text-white text-xl sm:text-2xl font-semibold tracking-wide mb-1"
                    style={{ textShadow: "0 2px 4px rgba(0,0,0,0.3)" }}
                  >
                    {item.title}
                  </h3>
                  <span className="text-gray-400 text-xs sm:text-sm">
                    18+ Only | Play Responsibly
                  </span>
                </div>
              </div>
              <div className="w-full mt-4">
                <button
                  className="w-full bg-red-500 px-4 py-2 rounded-sm text-gray-200 tracking-wide hover:bg-red-600 transition-all duration-300
                  focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-50"
                  style={{
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  START GAME
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
