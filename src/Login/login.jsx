import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LogIn, Smartphone, Shield, Eye, EyeOff } from "lucide-react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loginMethod, setLoginMethod] = useState("mobile");
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    trigger,
  } = useForm({ mode: "onChange" });

  const onSubmit = async (data) => {
    const valid = await trigger();
    if (!valid) return;

    setLoading(true);
    const toastId = toast.loading("Logging in...", { position: "top-right" });
    try {
      const payload = {
        [loginMethod]: data.identifier,
        password: data.password,
      };
      await axios.post("/user/login", payload);
      toast.success("Login successful", { id: toastId });
    } catch (err) {
      console.error("Login error", err);
      toast.error("Invalid credentials", { id: toastId });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#17040A] py-6 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <Toaster />
      <div className="w-full max-w-md space-y-10 ">
        <div className="text-center ">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
            Welcome Back to{" "}
            <span
              className="text-glow text-primary-500 flex justify-center gap-2"
              style={{
                color: "#ff1028",
                textShadow:
                  "0 0 5px #FF10F0, 0 0 10px #FF10F0, 0 0 20px #FF10F0",
                letterSpacing: "3px",
              }}
            >
              FinUnique zone
              <LogIn className="h-10 w-10 text-white" />
            </span>
          </h1>
          <p className="text-gray-400 text-sm sm:text-base">
            Login to continue your winning streak!
          </p>
        </div>

        <div className="card-gaming p-6 sm:p-8 bg-dark-800 rounded-lg shadow-lg outline-1 outline-gray-400">
          <div className="flex bg-dark-700 rounded-lg p-1 mb-6 gap-2 ">
            {["mobile", "email"].map((method) => (
              <button
                key={method}
                onClick={() => setLoginMethod(method)}
                className={`flex-1 py-2 px-4 rounded-md font-medium transition-all duration-300 text-sm sm:text-base outline-1  ${
                  loginMethod === method
                    ? "bg-[#ff1028] text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {method === "mobile" ? (
                  <Smartphone className="inline-block h-4 w-4 mr-2" />
                ) : (
                  <span className="mr-2">@</span>
                )}
                {method.charAt(0).toUpperCase() + method.slice(1)}
              </button>
            ))}
          </div>

          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                {loginMethod === "mobile" ? "Mobile Number" : "Email Address"}
              </label>
              <input
                type="tel"
                inputMode="numeric"
                maxLength={10}
                onInput={(e) => {
                  // Remove all non-digit characters
                  e.target.value = e.target.value.replace(/\D/g, "");

                  // If first digit is not 6-9, clear input
                  if (
                    e.target.value.length === 1 &&
                    !/^[6-9]$/.test(e.target.value)
                  ) {
                    e.target.value = "";
                  }

                  // Enforce max length
                  if (e.target.value.length > 10) {
                    e.target.value = e.target.value.slice(0, 10);
                  }
                }}
                {...register("identifier", {
                  required: "Mobile number is required and start within 6-9",
                  pattern: {
                    value: /^[6-9]\d{9}$/,
                    message:
                      "Enter valid 10-digit mobile number starting with 6-9",
                  },
                })}
                onKeyUp={() => trigger("identifier")}
                placeholder="Enter your mobile number"
                className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg text-white placeholder-gray-400 focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
              />

              {errors.identifier && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.identifier.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Minimum 6 characters",
                    },
                  })}
                  onKeyUp={() => trigger("password")}
                  className="w-full px-4 py-3 pr-12 bg-dark-700 border border-dark-600 rounded-lg text-white placeholder-gray-400 focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                  aria-label="Toggle Password Visibility"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-primary-500 bg-dark-700 border-dark-600 rounded focus:ring-primary-500"
                />
                <span className="ml-2 text-sm text-gray-300">Remember me</span>
              </label>
              <a
                href="#"
                className="text-sm text-gray-400 hover:text-primary-300"
              >
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full hover:outline-1 flex items-center justify-center space-x-2 py-3 rounded-lg text-white font-semibold bg-[#ff1028]"
            >
              {loading ? (
                <span className="loader w-5 h-5 border-2 border-t-white border-b-white border-l-transparent border-r-transparent rounded-full animate-spin"></span>
              ) : (
                <>
                  <LogIn className="h-5 w-5" />
                  <span
                    style={{
                      color: "#ffff",
                      textShadow:
                        "0 0 5px #FF10F0, 0 0 10px #FF10F0, 0 0 20px #FF10F0",
                      letterSpacing: "3px",
                    }}
                  >
                    Login to Play
                  </span>
                </>
              )}
            </button>

            {loginMethod === "mobile" && (
              <div className="text-center mt-6">
                <div className="flex items-center justify-center space-x-4 text-gray-400 text-sm">
                  <div className="flex-1 h-px bg-gray-600"></div>
                  <span>or</span>
                  <div className="flex-1 h-px bg-gray-600"></div>
                </div>
                <button
                  type="button"
                  className="mt-4 w-full tracking-wider hover:outline-1 text-primary-400 hover:bg-primary-500 hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 bg-[#ff1028] text-white"
                >
                  Login with OTP
                </button>
              </div>
            )}
          </form>

          <div className="mt-6 bg-dark-700 p-4 rounded-lg border border-gray-500 flex items-start space-x-3">
            <Shield className="h-5 w-5 text-green-500 mt-0.5" />
            <div>
              <h4 className="text-sm font-semibold text-white">Secure Login</h4>
              <p className="text-xs text-gray-400 mt-1">
                Your login is protected with 256-bit SSL encryption and
                two-factor authentication.
              </p>
            </div>
          </div>

          <div className="mt-6 text-center">
            <p className="text-gray-400 text-sm">
              Don’t have an account?{" "}
              <Link
                to="/register"
                className="text-primary-400 hover:text-primary-300 font-semibold"
              >
                Register now
              </Link>
            </p>
          </div>
        </div>

        <div className="card-gaming p-6 text-center bg-dark-800 rounded-lg">
          <h3 className="text-lg font-bold text-white mb-2">
            Get the Mobile App
          </h3>
          <p className="text-gray-400 text-sm mb-4">
            Download our app for the best gaming experience and exclusive mobile
            bonuses!
          </p>
          <Link
            to="/download_apk"
            className="btn-secondary w-full bg-[#2596e0] px-3 py-3 rounded-md hover:outline-1 outline-amber-50 font-medium"
          >
            Download App
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
