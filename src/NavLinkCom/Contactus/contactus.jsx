import React from "react";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import bgcimg from "../../assets/bannerimg/contactus.png";

export default function ContactUs() {
  return (
    <div
      className="bg-[#0B050C] text-white py-10 px-4 tracking-wider  lg:h-[100vh]"
      style={{
        background: "linear-gradient(to bottom, #11050B, #11050B)",
      }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start p-6">
        {/* Left Info Panel */}
        <div>
          <h2 className="text-4xl font-semibold mb-4">Get up</h2>
          <p className="mb-6 text-gray-300">
            We are here to help. Share your details, and our team will soon
            reach you.
          </p>

          <div className="mb-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-gray-200 rounded-full p-2 ">
                <FaEnvelope className="text-red-500" />
              </div>
              <div>
                <p className="font-semibold">Email Us</p>
                <a
                  href="mailto:support@7unique.in"
                  className="text-sm text-gray-300 hover:underline"
                >
                  support@7unique.in
                </a>
                <br />
                <a
                  href="mailto:info@7unique.in"
                  className="text-sm text-gray-300 hover:underline"
                >
                  info@7unique.in
                </a>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <div className="flex items-start gap-3">
              <div className="bg-gray-200 rounded-full p-2 ">
                <FaMapMarkerAlt className="text-red-500 " />
              </div>
              <div>
                <p className="font-semibold">Visit Us</p>
                <p className="text-sm text-gray-300">
                  Plot No 97, Dakshinpuri – I, Shrikishan, Sanganer, Jagatpura,
                  <br />
                  Jaipur Rajasthan, India, 302017
                </p>
              </div>
            </div>
          </div>

          <div className="text-sm">
            <p className="font-semibold">Office Hours</p>
            <p className="text-gray-300">Monday - Friday: 9:30 AM – 6:30 PM</p>
            <p className="text-gray-300">
              Saturday: 09:30 AM - 6:30 PM (2nd and 4th Saturday closed)
            </p>
            <p className="text-gray-300">Sunday: Closed</p>
          </div>
        </div>
        {/* Right Contact Form with background image */}
        <div
          className="relative rounded border border-gray-700 backdrop-blur-sm shadow-md overflow-hidden"
          style={{
            backgroundImage: `url(${bgcimg})`,
            backgroundSize: "cover",
            backgroundPosition: "right",
          }}
        >
          <div className="absolute inset-0 bg-black/70 bg-opacity-60 z-0"></div>
          <form className="relative z-10 space-y-5 p-6">
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-100">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter Your Name"
                className="w-full px-4 py-2 border rounded-md -md  bg-transparent text-red-200 placeholder:text-gray-400 focus:outline-none focus:ring focus:border-red-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-100">
                Email Address
              </label>
              <input
                type="email"
                placeholder="example@example.com"
                className="w-full px-4 py-2 border rounded-md  bg-transparent text-red-200 placeholder:text-gray-400 focus:outline-none focus:ring focus:border-red-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-100">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="+91-9876543201"
                className="w-full px-4 py-2 border rounded-md  bg-transparent text-red-200 placeholder:text-gray-400 focus:outline-none focus:ring focus:border-red-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-100">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="How can we help you?"
                className="w-full px-4 py-2 border rounded-md  bg-transparent text-white placeholder:text-gray-400 focus:outline-none focus:ring focus:border-red-400"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-red-500 to-pink-500 hover:opacity-90 text-white py-2 rounded-md  transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
