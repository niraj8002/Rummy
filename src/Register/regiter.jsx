import React, { useState } from "react";
import { Link } from "react-router-dom";
import { UserPlus, Gift, Shield, Eye, EyeOff, Check } from "lucide-react";

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [step, setStep] = useState(1); // 1: Details, 2: OTP Verification

  return (
    <div className="min-h-screen py-8 bg-[#17040A]">
      <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="bg-gradient-to-r from-primary-500 to-gold-500 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-4">
            <UserPlus className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Join{" "}
            <span
              className="text-glow text-primary-500"
              style={{
                color: "#ff1028",
                textShadow:
                  "0 0 5px #FF10F0, 0 0 10px #FF10F0, 0 0 20px #FF10F0",
                letterSpacing: "3px",
              }}
            >
              GameZone
            </span>
          </h1>
          <p className="text-gray-400">
            Create your account and start winning!
          </p>
        </div>

        {step === 1 ? (
          /* Registration Form */
          <div className="card-gaming p-8 bg-[#240612] rounded-md outline-1 outline-red-300" >
            <form className="space-y-6">
              {/* Name Fields */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg text-white placeholder-gray-400 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors duration-300"
                    placeholder="First name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg text-white placeholder-gray-400 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors duration-300"
                    placeholder="Last name"
                    required
                  />
                </div>
              </div>

              {/* Mobile Number */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Mobile Number *
                </label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 rounded-l-lg border border-r-0 border-dark-600 bg-dark-700 text-gray-400 text-sm">
                    +91
                  </span>
                  <input
                    type="tel"
                    className="flex-1 px-4 py-3 bg-dark-700 border border-dark-600 rounded-r-lg text-white placeholder-gray-400 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors duration-300"
                    placeholder="Enter mobile number"
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg text-white placeholder-gray-400 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors duration-300"
                  placeholder="Enter your email"
                  required
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Password *
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg text-white placeholder-gray-400 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors duration-300 pr-12"
                    placeholder="Create password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Confirm Password */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Confirm Password *
                </label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg text-white placeholder-gray-400 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors duration-300 pr-12"
                    placeholder="Confirm password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Referral Code */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Referral Code (Optional)
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg text-white placeholder-gray-400 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors duration-300"
                  placeholder="Enter referral code"
                />
              </div>

              {/* Terms & Conditions */}
              <div className="space-y-4">
                <label className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-primary-500 bg-dark-700 border-dark-600 rounded focus:ring-primary-500 focus:ring-2 mt-1"
                    required
                  />
                  <span className="text-sm text-gray-300">
                    I agree to the{" "}
                    <Link
                      to="/terms"
                      className="text-primary-400 hover:text-primary-300 transition-colors duration-300"
                    >
                      Terms & Conditions
                    </Link>{" "}
                    and{" "}
                    <Link
                      to="/privacy"
                      className="text-primary-400 hover:text-primary-300 transition-colors duration-300"
                    >
                      Privacy Policy
                    </Link>
                  </span>
                </label>

                <label className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-primary-500 bg-dark-700 border-dark-600 rounded focus:ring-primary-500 focus:ring-2 mt-1"
                    required
                  />
                  <span className="text-sm text-gray-300">
                    I confirm that I am 18 years or older and understand the{" "}
                    <Link
                      to="/responsible-gaming"
                      className="text-primary-400 hover:text-primary-300 transition-colors duration-300"
                    >
                      Responsible Gaming
                    </Link>{" "}
                    guidelines
                  </span>
                </label>
              </div>

              {/* Register Button */}
              <button
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  setStep(2);
                }}
                className="w-full btn-primary flex items-center justify-center space-x-2 bg-[#ff1028] flex-1 py-2 px-4 rounded-md font-medium transition-all duration-300 text-sm sm:text-base hover:outline-1 outline-gray-200 hover:text-gray-200 tracking-wider"
              >
                <UserPlus className="h-5 w-5" />
                <span>Create Account</span>
              </button>
            </form>

            {/* Login Link */}
            <div className="mt-6 text-center">
              <p className="text-gray-400">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-primary-400 hover:text-primary-300 font-semibold transition-colors duration-300"
                >
                  Login here
                </Link>
              </p>
            </div>
          </div>
        ) : (
          /* OTP Verification */
          <div className="card-gaming p-8">
            <div className="text-center mb-6">
              <div className="bg-gradient-to-r from-neon-500 to-neon-600 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">
                Verify Your Mobile
              </h2>
              <p className="text-gray-400">
                We've sent a 6-digit OTP to your mobile number
              </p>
              <p className="text-primary-400 font-semibold">+91 98765-43210</p>
            </div>

            <form className="space-y-6">
              {/* OTP Input */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2 text-center">
                  Enter 6-Digit OTP
                </label>
                <div className="flex justify-center space-x-2">
                  {[1, 2, 3, 4, 5, 6].map((digit) => (
                    <input
                      key={digit}
                      type="text"
                      maxLength={1}
                      className="w-12 h-12 text-center bg-dark-700 border border-dark-600 rounded-lg text-white text-xl font-bold focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors duration-300"
                    />
                  ))}
                </div>
              </div>

              {/* Resend OTP */}
              <div className="text-center">
                <p className="text-gray-400 text-sm mb-2">
                  Didn't receive the code?
                </p>
                <button
                  type="button"
                  className="text-primary-400 hover:text-primary-300 font-semibold transition-colors duration-300"
                >
                  Resend OTP
                </button>
              </div>

              {/* Verify Button */}
              <button
                type="submit"
                className="w-full btn-primary flex items-center justify-center space-x-2"
              >
                <Check className="h-5 w-5" />
                <span>Verify & Complete Registration</span>
              </button>
            </form>

            {/* Back Button */}
            <div className="mt-6 text-center">
              <button
                onClick={() => setStep(1)}
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                ← Back to registration
              </button>
            </div>
          </div>
        )}

        {/* Security Notice */}
        <div className="mt-8 card-gaming p-6 outline-1  outline-blue-300 rounded-md"
        >
          <div className="flex items-start space-x-3">
            <Shield className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
            <div>
              <h4 className="text-sm font-semibold text-white">
                Secure Registration
              </h4>
              <p className="text-xs text-gray-400 mt-1">
                Your personal information is protected with bank-level security
                and will never be shared with third parties.
              </p>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        {/* <div className="mt-6 text-center space-y-2">
          <div className="flex justify-center space-x-6 text-sm">
            <Link
              to="/contact"
              className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
            >
              Need Help?
            </Link>
            <Link
              to="/faq"
              className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
            >
              FAQ
            </Link>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default RegisterPage;
