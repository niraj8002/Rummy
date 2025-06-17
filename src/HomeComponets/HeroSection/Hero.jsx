import React from "react";
import TotalGame from "../TotalGame/totalgame";

export default function NeonBanner() {
  return (
    <div className=" min-h-screen flex flex-col items-center justify-center text-center px-4"
    style={{
        backgroundColor: "#0B050C",
    }}
    >
      {/* Title */}
      <h1 className="text-[5rem] hidd md:text-6xl italic mt-4">
        <span
          className="text-blue-400 tracking-wider"
          style={{ textShadow: "0 0 10px #3b82f6, 0 0 20px #3b82f6" }}
        >
          PLAY.
        </span>{" "}
        <span
          className="text-red-400 tracking-wider"
          style={{ textShadow: "0 0 10px #f87171, 0 0 20px #f87171" }}
        >
          WIN.
        </span>
      </h1>

      <h2
        className="mt-3 text-3xl md:text-5xl font-semibold text-red-400 tracking-wider"
        style={{ textShadow: "0 0 10px #f87171, 0 0 20px #f87171" }}
      >
        REPEAT
      </h2>

      {/* CTA Button */}
      <button className="mt-6 px-6 py-2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded shadow-md transition duration-300">
        PLAY NOW
      </button>

      {/* Disclaimer */}
      <p className="mt-4 text-sm text-gray-400">18+ Only | Play Responsibly</p>
      <TotalGame/>
    </div>
  );
}
