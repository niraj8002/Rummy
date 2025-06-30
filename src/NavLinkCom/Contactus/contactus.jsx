import React from "react";
import { useForm } from "react-hook-form";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import bgcimg from "../../assets/bannerimg/contactus.png";

export default function ContactUs() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm({ mode: "onChange" });

  const onSubmit = async (data) => {
    const valid = await trigger();
    if (!valid) return;
    console.log("Form submitted:", data);
    // You can replace this with API call
  };

  return (
    <div
      className="bg-[#0B050C] text-white py-10 px-4 tracking-wider lg:h-[100vh]"
      style={{ background: "linear-gradient(to bottom, #11050B, #11050B)" }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start p-6">
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

        <div
          className="relative rounded border border-gray-700 backdrop-blur-sm shadow-md overflow-hidden"
          style={{
            backgroundImage: `url(${bgcimg})`,
            backgroundSize: "cover",
            backgroundPosition: "right",
          }}
        >
          <div className="absolute inset-0 bg-black/70 bg-opacity-60 z-0"></div>
          <form
            className="relative z-10 space-y-5 p-6"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-100">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter Your Name"
                {...register("name", {
                  required: "Full name is required",
                  pattern: {
                    value: /^[A-Za-z ]+$/,
                    message: "Only letters and spaces allowed",
                  },
                })}
                onInput={(e) => {
                  e.target.value = e.target.value.replace(/[^A-Za-z ]/g, "");
                }}
                onKeyUp={() => trigger("name")}
                className="w-full px-4 py-2 border rounded-md bg-transparent text-red-200 placeholder:text-gray-400 focus:outline-none focus:ring focus:border-red-400"
              />

              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-gray-100">
                Email Address
              </label>
              <input
                type="email"
                placeholder="example@example.com"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+\.\S+$/,
                    message: "Invalid email address",
                  },
                })}
                onKeyUp={() => trigger("email")}
                className="w-full px-4 py-2 border rounded-md bg-transparent text-red-200 placeholder:text-gray-400 focus:outline-none focus:ring focus:border-red-400"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-gray-100">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="+91-9876543210"
                maxLength={10}
                inputMode="numeric"
                onInput={(e) => {
                  e.target.value = e.target.value.replace(/\D/g, "");
                  if (
                    e.target.value.length === 1 &&
                    !/^[6-9]$/.test(e.target.value)
                  ) {
                    e.target.value = "";
                  }
                  if (e.target.value.length > 10) {
                    e.target.value = e.target.value.slice(0, 10);
                  }
                }}
                {...register("phone", {
                  required: "Phone number is required & starting with 6-9",
                  pattern: {
                    value: /^[6-9]\d{9}$/,
                    message: "Enter valid 10-digit number starting with 6-9",
                  },
                })}
                onKeyUp={() => trigger("phone")}
                className="w-full px-4 py-2 border rounded-md bg-transparent text-red-200 placeholder:text-gray-400 focus:outline-none focus:ring focus:border-red-400"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.phone.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-gray-100">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="How can we help you?"
                {...register("message", {
                  required: "Message is required",
                })}
                onKeyUp={() => trigger("message")}
                className="w-full px-4 py-2 border rounded-md bg-transparent text-white placeholder:text-gray-400 focus:outline-none focus:ring focus:border-red-400"
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.message.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-red-500 to-pink-500 hover:opacity-90 text-white py-2 rounded-md transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
