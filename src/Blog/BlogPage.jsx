import React from "react";
import BlogPostsGrid from "./BlogPostsGrid";
import BlogNewsletter from "./BlogNewsletter";
import bannerimg from "../assets/bannerimg/aboutBanner.jpg";
import Banner from "../Reuseable Com/Banner";

const BlogPage = () => {
  return (
    <>
      <Banner
      button={"join now"}
        img={bannerimg}
        heading={
          <>
            <span className="text-red-900">Bet Big .</span>
            <span className="text-gray-300">
              <br />. Win Big 
            </span>
          </>
        }
      />
      <div className="relative w-full overflow-hidden bg-gradient-to-r from-[#17040A] to-red-950">
        {/* Content container */}
        {/* <div className="relative max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="text-center lg:text-left mb-10 lg:mb-0 lg:w-1/2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4">
                <span className="block">Bet Big,</span>
                <span className="block text-yellow-400">Win Bigger!</span>
              </h1>
              <p className="mt-3 text-lg md:text-xl text-indigo-100 max-w-lg">
                Join millions of players worldwide in the most exciting betting
                experience. Get your welcome bonus today!
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="px-6 py-3 bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold rounded-lg transition-all transform hover:scale-105 shadow-lg">
                  Join Now
                </button>
                <button className="px-6 py-3 bg-transparent border-2 border-white hover:bg-black hover:bg-opacity-10 text-white font-bold rounded-lg transition-all transform hover:scale-105">
                  Learn More
                </button>
              </div>
            </div>

            <div className="lg:w-1/2  justify-center hidden lg:flex">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                <div className="absolute top-40 left-1/2 transform -translate-x-1/2">
                  <div className="relative">
                    <div className="w-32 h-32 sm:w-40 sm:h-40 bg-red-600 rounded-full flex items-center justify-center shadow-xl">
                      <div className="w-28 h-28 sm:w-36 sm:h-36 bg-red-700 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-xl sm:text-2xl">
                          $500
                        </span>
                      </div>
                    </div>
                    <div className="absolute -bottom-4 -left-4 w-24 h-24 sm:w-32 sm:h-32 bg-blue-600 rounded-full flex items-center justify-center shadow-xl z-10">
                      <div className="w-20 h-20 sm:w-28 sm:h-28 bg-blue-700 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-lg sm:text-xl">
                          $200
                        </span>
                      </div>
                    </div>
                    <div className="absolute -bottom-8 -right-4 w-20 h-20 sm:w-28 sm:h-28 bg-green-600 rounded-full flex items-center justify-center shadow-xl z-20">
                      <div className="w-16 h-16 sm:w-24 sm:h-24 bg-green-700 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-base sm:text-lg">
                          $100
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/* Floating elements for desktop */}
        <div className="hidden lg:block">
          <div className="absolute top-1/4 left-10 w-8 h-8 bg-white bg-opacity-30 rounded-full"></div>
          <div className="absolute bottom-1/3 right-20 w-6 h-6 bg-yellow-400 rounded-full"></div>
          <div className="absolute top-1/3 right-1/4 w-4 h-4 bg-red-500 rounded-full"></div>
        </div>
      </div>

      <div className="min-h-screen bg-[#0B050C] text-white">
        <div className="container mx-auto px-4 py-">
          <div className="flex flex-col lg:flex-row gap-8">
            <main className="">
              <BlogPostsGrid />
            </main>
          </div>
        </div>

        <BlogNewsletter />
      </div>
    </>
  );
};

export default BlogPage;
