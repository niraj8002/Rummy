import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LogIn, Shield, Eye, EyeOff } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast, Toaster } from "react-hot-toast";
import api from "../Service/axios";
import { ContextData } from "../Service/context";

const LoginPage = () => {
  const { token } = useContext(ContextData);
  useEffect(() => {
    if (token) {
      window.history.back();
    }
  }, [token]);

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loginMode, setLoginMode] = useState("password");

  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
    watch,
  } = useForm({ mode: "onChange" });

  const data = watch();

  const onSubmit = async (data) => {
    setLoading(true);
    const toastId = toast.loading("Logging in...");

    try {
      const payload =
        loginMode === "password"
          ? { emailOrMobile: data.identifier, password: data.password }
          : { emailOrMobile: data.identifier, otp: data.otp };

      const res = await api.post("/auth/login", payload);

      if (res.status === 200) {
        toast.success(res?.data?.message || "Login successful", {
          id: toastId,
        });
        localStorage.setItem("token", res.data.token);
        setTimeout(() => {
          window.location.href = "/";
        }, 2000);
      }
    } catch (err) {
      console.error("Login error", err);
      toast.error(err?.response?.data?.message || "Login failed", {
        id: toastId,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Toaster />
      <div className="min-h-screen bg-[#17040A] py-6 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
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
            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Enter email/mobile number
                </label>
                <input
                  type="text"
                  {...register("identifier", {
                    required: "Email or mobile number is required",
                    validate: (value) => {
                      const isMobile = /^[6-9]\d{9}$/.test(value);
                      const isEmail = /^\S+@\S+\.\S+$/.test(value);
                      return (
                        isMobile ||
                        isEmail ||
                        "Enter valid mobile (start 6-9) or email"
                      );
                    },
                  })}
                  onKeyUp={() => trigger("identifier")}
                  placeholder={
                    loginMode == "otp"
                      ? "Enter your mobile number"
                      : "Enter your email"
                  }
                  className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg text-white placeholder-gray-400"
                />
                {errors.identifier && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.identifier.message}
                  </p>
                )}
                {loginMode === "otp" && (
                  <button
                    type="button"
                    onClick={async () => {
                      const valid = await trigger("identifier");
                      if (!valid) {
                        toast.error("Please enter a valid mobile number");
                        return;
                      }

                      try {
                        const res = await api.post("/auth/send-otp", {
                          mobile: data.identifier,
                          forLogin: true,
                        });
                        toast.success(res.data.message);
                      } catch (err) {
                        toast.error(
                          err?.response?.data?.message || "Failed to send OTP"
                        );
                      }
                    }}
                    className={`text-sm text-blue-400 hover:text-blue-300 mt-2 ${
                      errors.identifier && "hidden"
                    }`}
                  >
                    Send OTP
                  </button>
                )}
              </div>

              {loginMode === "password" ? (
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
                      className="w-full px-4 py-3 pr-12 bg-dark-700 border border-dark-600 rounded-lg text-white"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                      aria-label="Toggle Password Visibility"
                    >
                      {showPassword ? <EyeOff /> : <Eye />}
                    </button>
                  </div>
                  {errors.password && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.password.message}
                    </p>
                  )}
                </div>
              ) : (
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    OTP
                  </label>
                  <input
                    type="text"
                    maxLength={6}
                    {...register("otp", {
                      required: "OTP is required",
                      pattern: {
                        value: /^\d{6}$/,
                        message: "Enter valid 6-digit OTP",
                      },
                    })}
                    onInput={(e) => {
                      e.target.value = e.target.value.replace(/\D/g, "");
                    }}
                    onKeyUp={() => trigger("otp")}
                    placeholder="Enter 6-digit OTP"
                    className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg text-white"
                  />
                  {errors.otp && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.otp.message}
                    </p>
                  )}
                </div>
              )}

              <div className="flex justify-center gap-4 mt-2">
                <button
                  type="button"
                  className={`px-3 py-1 rounded ${
                    loginMode === "password"
                      ? "bg-red-700 text-white"
                      : "bg-gray-700 text-gray-300"
                  }`}
                  onClick={() => setLoginMode("password")}
                >
                  Login with Password
                </button>
                <button
                  type="button"
                  className={`px-3 py-1 rounded ${
                    loginMode === "otp"
                      ? "bg-red-700 text-white"
                      : "bg-gray-700 text-gray-300"
                  }`}
                  onClick={() => setLoginMode("otp")}
                >
                  Login with OTP
                </button>
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
            </form>

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
        </div>
      </div>
    </>
  );
};

export default LoginPage;
