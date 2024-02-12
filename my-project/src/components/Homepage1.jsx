import React from "react";
import form from "../assets/form.png";

const Homepage1 = () => {
  return (
    <div className="flex items-center justify-center h-screen ml-36 mr-36 ">
      <div className="lg:w-1/2 w-full ">
        <h2 className="xl:text-4xl lg:text-[28px] md:text-3xl sm:text-[27px]  ssm:text-xl font-semibold mb-4 ml-10 text-cyan-500 font-forum ">
          Unlock Exclusive Benefits
        </h2>
        <form className="bg-white p-8">
          <div className="mb-4 flex">
            <div className="w-1/4">
              <label
                className="block text-gray-700 xl:text-sm lg:text-[13px]  font-Poppins mb-2 "
                htmlFor="countryCode"
              >
                PHONE NO.
              </label>
              <select
                id="countryCode"
                name="countryCode"
                className="w-full border border-gray-300 rounded-full p-2  text-slate-400"
              >
                <option value="+1">+91 india</option>
                <option value="+44">+1 USA</option>
                <option value="+1">+93 Afghanistan</option>
                <option value="+44">+92 Pakistan</option>
                <option value="+1">+48 Poland</option>
                <option value="+44">+44 UK</option>
              </select>
            </div>

            <div className="flex-grow ml-4">
              <label
                className="block text-gray-700 xl:text-sm lg:text-[13px]  font-semibold mb-2 text-transparent"
                htmlFor="phoneNumber"
              >
                Phone Number:
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
              className="block text-gray-700 text-sm font-Poppins mb-2"
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
              className="block text-gray-700 text-sm font-Poppins mb-2"
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
            className="bg-blue-500 border border-black text-white w-full p-2  rounded-full font-semibold hover:bg-blue-600"
          >
            continue
          </button>
        </form>
      </div>

      <div className="hidden lg:block w-1/2">
        <img src={form} alt="Image" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default Homepage1;
