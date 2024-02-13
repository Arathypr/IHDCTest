import React from "react";
import form from "../assets/form.png";
import logo from "../assets/logo.png";

const Homepage1 = () => {
  return (
    <>
      <div className="h-screen">
        <div className="bg-slate-200 sticky top-0 z-[20] mx-auto flex w-full items-center justify-around mb-36">
          <div>
            <img src={logo} className="h-16 w-16 " alt="" />
          </div>
          <div>
            <h1>XYZ SYSTEMS LLP.</h1>
          </div>
          <div className="text-transparent">
            <h1>X</h1>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center    mx-12">
          <div className="lg:w-2/3 w-full mb-8">
            <h2 className="text-3xl lg:text-4xl vvsm:text-[23px] font-semibold mb-4 text-cyan-500 font-forum ml-5 ">
              Unlock Exclusive Benefits
            </h2>
            <form className="bg-white p-4 sm:p-8 rounded-lg">
              <div className="mb-4 flex flex-col sm:flex-row">
                <div className="w-full sm:w-1/4 mb-2 sm:mb-0 sm:mr-4">
                  <label
                    className="block text-gray-700 text-sm font-semibold mb-2"
                    htmlFor="countryCode"
                  >
                    COUNTRY CODE
                  </label>
                  <select
                    id="countryCode"
                    name="countryCode"
                    className="w-full border border-gray-300 rounded-full p-2 text-slate-400"
                  >
                    <option value="+91">+91 India</option>
                    <option value="+1">+1 USA</option>
                  </select>
                </div>

                <div className="flex-grow">
                  <label
                    className="block text-gray-700 text-sm font-semibold mb-2"
                    htmlFor="phoneNumber"
                  >
                    PHONE NUMBER:
                  </label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    className="w-full border border-gray-300 rounded-full p-2"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-semibold mb-2"
                  htmlFor="name"
                >
                  NAME
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full border border-gray-300 rounded-full p-2"
                  placeholder="Enter your name"
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-semibold mb-2"
                  htmlFor="email"
                >
                  EMAIL [ OPTIONAL ]
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full border border-gray-300 rounded-full p-2"
                  placeholder="Enter your email"
                />
              </div>

              <button
                type="submit"
                className="bg-blue-500 border border-black text-white w-full p-2 rounded-full font-semibold hover:bg-blue-600"
              >
                Continue
              </button>
            </form>
          </div>

          <div className="hidden lg:block w-full md:w-1/2">
            <img
              src={form}
              alt="Image"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage1;
