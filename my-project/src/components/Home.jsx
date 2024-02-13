import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/logo.png";

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="relative">
        <div className="bg-slate-200 sticky top-0 z-[30] mx-auto flex w-full items-center justify-around">
          <div>
            <img src={logo} className="h-16 w-16 " alt="" />
          </div>
          <div>
            <h1>XYZ SYSTEMS LLP.</h1>
          </div>
          <div className="text-transparent">
            <h1>X</h1>
          </div>

          <div className="lg:hidden ">
            <button onClick={toggleMenu} className="focus:outline-none">
              ☰
            </button>
          </div>
        </div>

        <nav
          className={`lg:flex lg:items-center lg:justify-around text-black text-center ${
            menuOpen ? "block" : "hidden"
          } lg:block py-2`}
        >
          <ul className="lg:flex space-x-4 font-semibold text-base">
            <li>
              <a href="#" className="hover:text-gray-300">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Dash Board
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Products
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Transactions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Journal
              </a>
            </li>
          </ul>
        </nav>

        <div
          className={`lg:hidden ${
            menuOpen ? "block" : "hidden"
          } absolute top-16 right-0 bg-slate-200 p-20 w-full h-[130vh] border border-gray-300`}
          style={{ zIndex: menuOpen ? 10 : 5 }}
        >
          <ul className="space-y-8">
            <li>
              <a href="#" className="hover:text-gray-300">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Dash Board
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Products
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Transactions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Journal
              </a>
            </li>
          </ul>
        </div>
        <div className="hidden lg:flex lg:flex-col-reverse items-center space-x-3 ml-[80%]">
          <span className="text-black text-xs font-Poppins ml-3 ">
            Joseph Iazar
          </span>
          <FontAwesomeIcon icon={faUser} className="text-sky-700 text-xl" />
        </div>
      </div>
    </>
  );
};

export default Home;
