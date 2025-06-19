import React from "react";
import Banner from "../Reuseable Com/Banner";
import img from "../assets/privacy,terms,refund-banner/prc-01.png";
import {
  FiInfo,
  FiDatabase,
  FiKey,
  FiShield,
  FiUserCheck,
  FiRefreshCw,
  FiMail,
} from "react-icons/fi";
import { FaCookie, FaDice, FaCoins } from "react-icons/fa";

const PrivacyPolicy = () => {
  return (
    <>
      <Banner img={img} heading="Privacy Policy" />
      <div className="min-h-screen bg-gradient-to-b from-[#0B050C] to-[#1a0a1a] py-8 px-4 sm:px-6 lg:px-8">
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 opacity-20">
          <FaDice className="text-[#5e0d0d] text-4xl rotate-12" />
        </div>
        <div className="absolute bottom-20 right-10 opacity-20">
          <FaCoins className="text-[#5e0d0d] text-4xl -rotate-12" />
        </div>

        <div className="max-w-4xl mx-auto bg-[#1e1e1e] rounded-xl shadow-lg overflow-hidden border border-[#5e0d0d]/30 relative z-10">
          {/* Header with gradient */}
          <div className="bg-gradient-to-r from-[#5e0d0d] to-[#3a0a3a] px-6 py-5">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-white">
                  Privacy Policy
                </h1>
                <p className="mt-1 text-[#ffb4b4]">
                  Last updated: {new Date().toLocaleDateString()}
                </p>
              </div>
              <div className="hidden sm:block bg-[#ffffff10] p-2 rounded-lg">
                <FaDice className="text-white text-2xl" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 sm:p-8 bg-[#141414]">
            <div className="prose max-w-none">
              <section className="mb-10 group">
                <div className="flex items-center gap-4 mb-3">
                  <div className="bg-[#5e0d0d] p-2 rounded-lg group-hover:bg-[#7e0d0d] transition-colors">
                    <FiInfo className="text-white text-xl" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white">
                    1. Introduction
                  </h2>
                </div>
                <div className="ml-14">
                  <p className="text-gray-300 mb-4">
                    Welcome to Rummy Pool Games. We are committed to protecting your
                    personal information and your right to privacy. If you have
                    any questions about how we handle your data in our gaming platform,
                    please contact us.
                  </p>
                  <p className="text-gray-300">
                    This privacy notice explains how we collect, use, and protect
                    your information when you play our rummy games, make transactions,
                    or interact with our platform.
                  </p>
                </div>
              </section>

              <section className="mb-10 group">
                <div className="flex items-center gap-4 mb-3">
                  <div className="bg-[#5e0d0d] p-2 rounded-lg group-hover:bg-[#7e0d0d] transition-colors">
                    <FiDatabase className="text-white text-xl" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white">
                    2. Information We Collect
                  </h2>
                </div>
                <div className="ml-14">
                  <p className="text-gray-300 mb-4">
                    To provide you with the best gaming experience and ensure fair play,
                    we collect certain information when you use our platform:
                  </p>
                  <ul className="list-disc pl-6 text-gray-300 space-y-2 marker:text-[#5e0d0d]">
                    <li>
                      <span className="font-medium">Account Information:</span> Username, email, phone number, profile picture
                    </li>
                    <li>
                      <span className="font-medium">Payment Details:</span> Transaction history, withdrawal information
                    </li>
                    <li>
                      <span className="font-medium">Game Data:</span> Game history, winnings, player statistics
                    </li>
                    <li>
                      <span className="font-medium">Device Information:</span> IP address, device ID, browser type
                    </li>
                    <li>
                      <span className="font-medium">Verification Data:</span> KYC documents for account verification
                    </li>
                  </ul>
                </div>
              </section>

              <section className="mb-10 group">
                <div className="flex items-center gap-4 mb-3">
                  <div className="bg-[#5e0d0d] p-2 rounded-lg group-hover:bg-[#7e0d0d] transition-colors">
                    <FiKey className="text-white text-xl" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white">
                    3. How We Use Your Information
                  </h2>
                </div>
                <div className="ml-14">
                  <p className="text-gray-300 mb-4">
                    Your information helps us provide and improve our gaming services:
                  </p>
                  <ul className="list-disc pl-6 text-gray-300 space-y-2 marker:text-[#5e0d0d]">
                    <li>To create and manage your gaming account</li>
                    <li>To process deposits, withdrawals, and rewards</li>
                    <li>To detect and prevent fraud or cheating</li>
                    <li>To provide customer support and resolve disputes</li>
                    <li>To personalize your gaming experience</li>
                    <li>To ensure compliance with gaming regulations</li>
                    <li>To send important notifications about your account</li>
                  </ul>
                </div>
              </section>

              <section className="mb-10 group">
                <div className="flex items-center gap-4 mb-3">
                  <div className="bg-[#5e0d0d] p-2 rounded-lg group-hover:bg-[#7e0d0d] transition-colors">
                    <FaCookie className="text-white text-xl" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white">
                    4. Cookies and Game Tracking
                  </h2>
                </div>
                <div className="ml-14">
                  <p className="text-gray-300 mb-4">
                    We use cookies and similar technologies to enhance your gaming experience:
                  </p>
                  <ul className="list-disc pl-6 text-gray-300 space-y-2 marker:text-[#5e0d0d]">
                    <li>Session cookies to keep you logged in during gameplay</li>
                    <li>Analytics cookies to improve game performance</li>
                    <li>Security cookies to detect suspicious activity</li>
                    <li>Preference cookies to remember your game settings</li>
                  </ul>
                  <p className="text-gray-300 mt-4">
                    You can manage cookies through your browser settings, but this may affect
                    certain game features.
                  </p>
                </div>
              </section>

              <section className="mb-10 group">
                <div className="flex items-center gap-4 mb-3">
                  <div className="bg-[#5e0d0d] p-2 rounded-lg group-hover:bg-[#7e0d0d] transition-colors">
                    <FiShield className="text-white text-xl" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white">
                    5. Security Measures
                  </h2>
                </div>
                <div className="ml-14">
                  <p className="text-gray-300 mb-4">
                    We implement robust security measures to protect your gaming account:
                  </p>
                  <ul className="list-disc pl-6 text-gray-300 space-y-2 marker:text-[#5e0d0d]">
                    <li>End-to-end encryption for all transactions</li>
                    <li>Regular security audits and penetration testing</li>
                    <li>Two-factor authentication options</li>
                    <li>Secure server infrastructure with firewalls</li>
                    <li>Regular staff training on data protection</li>
                  </ul>
                  <p className="text-gray-300 mt-4">
                    While we take all reasonable precautions, no online platform can be 100% secure.
                    We recommend using strong passwords and keeping your login details private.
                  </p>
                </div>
              </section>

              <section className="mb-10 group">
                <div className="flex items-center gap-4 mb-3">
                  <div className="bg-[#5e0d0d] p-2 rounded-lg group-hover:bg-[#7e0d0d] transition-colors">
                    <FiUserCheck className="text-white text-xl" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white">
                    6. Your Rights
                  </h2>
                </div>
                <div className="ml-14">
                  <p className="text-gray-300 mb-4">
                    As a player on our platform, you have certain rights regarding your data:
                  </p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <li className="flex items-start gap-2">
                      <span className="bg-[#5e0d0d] text-white p-1 rounded-md mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span className="text-gray-300">Request a copy of your data</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="bg-[#5e0d0d] text-white p-1 rounded-md mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span className="text-gray-300">Update incorrect information</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="bg-[#5e0d0d] text-white p-1 rounded-md mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span className="text-gray-300">Request account deletion</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="bg-[#5e0d0d] text-white p-1 rounded-md mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span className="text-gray-300">Opt-out of marketing</span>
                    </li>
                  </ul>
                  <p className="text-gray-300 mt-4">
                    To exercise any of these rights, please contact our support team.
                    Some requests may require identity verification for security.
                  </p>
                </div>
              </section>

              <section className="mb-10 group">
                <div className="flex items-center gap-4 mb-3">
                  <div className="bg-[#5e0d0d] p-2 rounded-lg group-hover:bg-[#7e0d0d] transition-colors">
                    <FiRefreshCw className="text-white text-xl" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white">
                    7. Policy Updates
                  </h2>
                </div>
                <div className="ml-14">
                  <p className="text-gray-300">
                    We may update this policy as our games evolve or regulations change.
                    Significant changes will be notified through our platform or via email.
                    Your continued use of our services constitutes acceptance of the updated policy.
                  </p>
                </div>
              </section>

              <section className="group">
                <div className="flex items-center gap-4 mb-3">
                  <div className="bg-[#5e0d0d] p-2 rounded-lg group-hover:bg-[#7e0d0d] transition-colors">
                    <FiMail className="text-white text-xl" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white">
                    8. Contact Us
                  </h2>
                </div>
                <div className="ml-14">
                  <p className="text-gray-300 mb-4">
                    For privacy-related inquiries or to exercise your rights:
                  </p>
                  <div className="bg-[#1e1e1e] border border-[#5e0d0d]/30 rounded-lg p-4">
                    <div className="flex items-start gap-4 mb-3">
                      <div className="bg-[#5e0d0d] p-2 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-medium text-white">Email</h3>
                        <p className="text-[#5e0d0d]">privacy@rummypool.com</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-[#5e0d0d] p-2 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-medium text-white">Registered Office</h3>
                        <address className="text-gray-300 not-italic">
                          Rummy Pool Games Inc.<br />
                          123 Game Street<br />
                          Gaming City, GC 12345<br />
                          India
                        </address>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>

          {/* Footer */}
          <div className="bg-gradient-to-r from-[#5e0d0d] to-[#3a0a3a] px-6 py-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-[#ffb4b4]">
                &copy; {new Date().getFullYear()} Rummy Pool Games. All rights reserved.
              </p>
              <div className="flex gap-4 mt-2 md:mt-0">
                <FaDice className="text-white" />
                <FaCoins className="text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;