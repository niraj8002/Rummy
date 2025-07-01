import React from "react";

const BlogNewsletter = () => {
  return (
    <div className="bg-[#09030a] py-12 px-4">
      <div className="container mx-auto max-w-4xl bg-gradient-to-r  from-[#180f1a] to-[#180f1a] rounded-xl p-8 shadow-2xl">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
            <p className="text-gray-300">
              Subscribe to our newsletter for the latest Rummy strategies,
              tournament updates, and exclusive offers.
            </p>
          </div>

          <div className="md:w-1/2 w-full">
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
              />
              <button
                type="submit"
                className="bg-yellow-700 hover:bg-purple-700 hover:text-gray-200 text-black font-bold py-3 px-6 rounded-md transition whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
            <p className="text-xs text-gray-400 mt-2">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogNewsletter;
