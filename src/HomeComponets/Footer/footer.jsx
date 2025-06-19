import React from "react";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { IoIosMailUnread } from "react-icons/io";
import fb from "../../assets/home/fb.png";
import insta from "../../assets/home/insta.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8 px-4">
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-left">
          {/* Connect With Us */}
          <div className="border-r border-gray-800 ml-5">
            <h3 className="text-xl font-bold mb-4 text-center md:text-left">
              Connect With Us
            </h3>

            <div className="flex items-start mb-3">
              <FaLocationDot className="text-red-900 text-xl mt-1 mr-2" />
              <address className="not-italic text-sm space-y-1">
                <p>Plot No 97, Dotshinpurī – L</p>
                <p>Shrikishan, Sanganeh,</p>
                <p>Jagarpura, Japur, Rajasthan,</p>
                <p>India, 302017</p>
              </address>
            </div>

            <div className="flex items-center mb-3">
              <IoIosMailUnread className="text-red-900 text-xl mr-2" />
              <p className="text-sm">123@unique.in</p>
            </div>

            <div className="flex items-center">
              <FaPhone className="text-red-900 text-xl mr-2" />
              <p className="text-sm">12536487955</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="border-r border-gray-800 ml-5">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="hover:text-red-400 hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/aboutus"
                  className="hover:text-red-400 hover:underline"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/contactus"
                  className="hover:text-red-400 hover:underline"
                >
                  Contact & Support
                </a>
              </li>
            </ul>
          </div>

          {/* Useful Links */}
          <div className="border-r border-gray-800 ml-5">
            <h3 className="text-xl font-bold mb-4">Useful Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="/terms_and_conditions"
                  className="hover:text-red-400 hover:underline"
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  href="/privacy_policy"
                  className="hover:text-red-400 hover:underline"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/return_cancellation"
                  className="hover:text-red-400 hover:underline"
                >
                  Return, Refund & Cancellation
                </a>
              </li>
              {/* <li>
                <a href="#" className="hover:text-red-400 hover:underline">
                  Game Rules
                </a>
              </li> */}
            </ul>
          </div>

          {/* Social Media */}
          <div className="border-r border-gray-800 ml-5">
            <h3 className="text-xl font-bold mb-4">Social Media</h3>
            <div className="flex space-x-4 ">
              {/* Facebook */}
              <a
                href="#" className="hover:text-red-400 hover:underline transition"
              >
                <img src={fb} alt="fb" className="h-5 w-5" />
              </a>
              {/* Instagram */}
              <a href="#" className="hover:text-red-400 transition">
                <img src={insta} alt="insta" className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-sm">
          <p>© 2025 @Finunique Small Private Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
