import React from "react";
import { FaBullseye } from "react-icons/fa";
import { FaFlagCheckered } from "react-icons/fa6";

const IntroductionSection = () => {
  return (
    <section className="bg-[#0b050c] text-white py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">
          Introduction
        </h2>
        <p className="text-gray-300 mb-12">
          Sed ut perspiciatis, unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Vision Card */}
          <div className="border border-gray-700 p-6 rounded-md shadow-md text-left">
            <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
              Our Vision <FaBullseye className="text-pink-500" />
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis distinctio aliquid nam ea ullam laboriosam deleniti
              autem excepturi fuga! Repellendus expedita aperiam numquam
              aspernatur rerum quod, eligendi hic minima voluptates.
            </p>
          </div>

          {/* Mission Card */}
          <div className="border border-gray-700 p-6 rounded-md shadow-md text-left">
            <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
              Our Mission <FaFlagCheckered className="text-blue-500" />
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis distinctio aliquid nam ea ullam laboriosam deleniti
              autem excepturi fuga! Repellendus expedita aperiam numquam
              aspernatur rerum quod, eligendi hic minima voluptates.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroductionSection;
