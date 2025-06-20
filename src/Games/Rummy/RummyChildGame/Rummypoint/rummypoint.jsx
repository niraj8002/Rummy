import React from "react";
import Banner from "../../../../Reuseable Com/Banner";
import pointrummy from "../../../../assets/points-rummy/point1.png"
import PointRummyRulesSection from "./rummypointrule";



export const RummyPointGame = () => {
  return (
    <>
      <Banner
        img={pointrummy}
        heading="points Rummy"
        button="play now"
        subheading="18+ Only | Play Responsibly"
      />
      <div className="bg-[#0B050C] text-white px-4 md:px-10 py-16">
        {/* Introduction */}
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">
            Introduction
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Sed ut perspiciatis, unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam eaque ipsa,
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas
            sit, aspernatur aut odit aut fugit, sed quia consequuntur magni
            dolores eos, qui ratione voluptatem sequi nesciunt, neque porro
            quisquam est, qui dolorem ipsum, quia dolor sit amet consectetur
            adipisci[ng] velit...
          </p>
        </div>

        {/* Info Cards */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 px-2">
          <div className="border border-gray-700 bg-[#151015] p-6 rounded-lg shadow">
            <h3 className="font-semibold text-white mb-3">
              The History and Evolution of Rummy
            </h3>
            <p className="text-gray-400 text-sm">
              Sed ut perspiciatis, unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam eaque ipsa,
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas
              sit...
            </p>
          </div>
          <div className="border border-gray-700 bg-[#151015] p-6 rounded-lg shadow">
            <h3 className="font-semibold text-white mb-3">
              Why Rummy is a Game of Skill?
            </h3>
            <p className="text-gray-400 text-sm">
              Sed ut perspiciatis, unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam eaque ipsa,
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt, explicabo. Nemo enim ipsam voluptatem...
            </p>
          </div>
        </div>

        {/* Game Types */}
        {/* <div className="max-w-4xl mx-auto text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">
            Different Types of Rummy Games
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-4 md:px-0">
            {Card.map((item, index) => (
              <div
                key={index}
                className="group p-5 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center hover:-translate-y-2"
                style={{
                  background: "linear-gradient(to bottom, #0B050C, #340408)",
                  boxShadow: "0 0 10px #221624",
                  minHeight: "300px",
                }}
              >
                <div className="flex-1 flex flex-col  ustify-center">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full object-contain mb- transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="text-center">
                    <h3
                      className="text-white text-xl sm:text-2xl font-semibold tracking-wide "
                      style={{ textShadow: "0 2px 4px rgba(0,0,0,0.3)" }}
                    >
                      {item.title}
                    </h3>
                  </div>
                </div>
                <div className="w-full">
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
        </div> */}
      </div>
      <PointRummyRulesSection />
    </>
  );
};
