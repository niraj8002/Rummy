import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextData } from "../../Service/context";
import logo from "../../assets/icon/rummy-logo.png";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const { scrollToTop } = useContext(ContextData);

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8 px-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
          
          {/* FinUnique Zone */}
          <div className="text-center sm:text-left">
            <div className="mb-4 flex justify-center sm:justify-start">
              <img
                src={logo}
                alt="logo"
                className="w-[140px] bg-black text-cyan-400 px-6 py-2 rounded-md shadow-[0_0_12px_#00ffff] hover:shadow-[0_0_20px_#00ffff] transition"
              />
            </div>
            <p className="text-sm">
              India's premier real-money gaming platform featuring Rummy, Poker,
              and Pool. Play responsibly and win big with our secure gaming
              environment.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to=""
                  onClick={scrollToTop}
                  className="hover:text-red-400"
                >
                  Games
                </Link>
              </li>
              <li>
                <Link to="/our_blog" className="hover:text-red-400">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/game_rummy" className="hover:text-red-400">
                  How to Play
                </Link>
              </li>
              <li>
                <Link to="/download_apk" className="hover:text-red-400">
                  Download App
                </Link>
              </li>
              <li>
                <Link to="/download_apk" className="hover:text-red-400">
                  Refer & Earn
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-bold mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/contactus" className="hover:text-red-400">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/terms_and_conditions" className="hover:text-red-400">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/privacy_policy" className="hover:text-red-400">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/return_cancellation" className="hover:text-red-400">
                  Return & Cancellation
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <div className="space-y-2 text-sm">
              <p>9341436937</p>
              <p>Plot No 97, Dakshinpuri - L Shirkishan-Sanganez,</p>
              <p>Jagatpura, Jaipur, Rajasthan,</p>
              <p>India – 302017</p>
              <a
                href="https://wa.me/919341436937?text=Hi%20I%20want%20to%20know%20more"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 text-red-400 hover:underline"
              >
                <div className="flex justify-center sm:justify-start items-center gap-2">
                  <FaWhatsapp />
                  Contact Support
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm">
          <p>© 2024 Finunique. All rights reserved. Play responsibly. 18+</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
