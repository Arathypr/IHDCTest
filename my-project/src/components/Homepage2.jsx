import React from "react";
import membership from "../assets/membership.jpg";
import { useNavigate } from "react-router-dom";
import Homepage1 from "./Homepage1";
import Home from "../components/Home";
import Slider from "./Slider";
import SliderSmall from "./SliderSmall";
function Homepage2() {
  const navigate = useNavigate();

  const handleJoinNowClick = () => {
    navigate("/homepage1");
  };

  return (
    <>
      <div className="vvsm:mb-16  lg:mb-0">
        {" "}
        <Home />
      </div>

      <div className="flex flex-col lg:flex-row lg:mx-44 ">
        {/* Left Section */}
        <div className="lg:w-1/2 lg:mx-auto  sm:ml-32 ssm:ml-16 vsm:ml-12 vvsm:ml-10 ">
          <div className="lg:text-5xl sm:text-4xl ssm:text-3xl vsm:text-2xl vvsm:text-2xl mb-5 ">
            New Arrival
          </div>
          <div className="text-xs font-semibold font-poppins">
            <span className="uppercase border-b-2 border-black">Join</span>
            <span className="uppercase"> Today</span>
          </div>
          <div className="xl:ml-14 xl:mt-5 lg:mt-14 md:ml-[25%] sm:ml-[15%] ssm:ml-[10%] vsm:ml-[20%] vvsm:ml-[5%] ">
            <img
              src={membership}
              alt="Membership"
              className="xl:w-[50%] lg:w-[55%] md:w-[50%] sm:w-[60%] ssm:w-[70%] vsm:w-[60%] vvsm:w-[80%]"
            />
            <button
              className="bg-slate-300 vvsm:px-5 vsm:px-5 ssm:px-6 sm:px-14 md:px-14 lg:px-20 xl:px-24 py-1 border-2 border-gray-400 rounded-full text-blue-600 uppercase text-xs font-medium vvsm:ml-[8%] vsm:ml-[10%] ssm:ml-[15%] sm:ml-8 md:ml-14 lg:ml-0"
              onClick={handleJoinNowClick}
            >
              Join Now
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="lg:w-1/2">
          <div className="flex flex-col gap-3 mt-14 lg:ml-0 sm:ml-32  ssm:ml-16 vsm:ml-12  vvsm:ml-10 ">
            <h3 className="text-[#7dadb1] xl:text-[32px] lg:text-[27px] sm:text-2xl  ssm:text-xl  vsm:text-xl  mb-6">
              Unlock Premium Features Now
            </h3>
          </div>
          <div className=" sm:block vvsm:hidden  ">
            <Slider />
          </div>

          <div className=" vvsm:block sm:hidden   ">
            <SliderSmall />
          </div>
          <div className="flex flex-col mt-10 xl:w-[30%] xl:mx-[36%] lg:w-[35%] lg:mx-[48%] sm:w-[20%] sm:mx-[40%] ssm:w-[30%] ssm:mx-[36%] vsm:w-[35%] vsm:mx-[32%] vvsm:w-[45%]  vvsm:mx-[28%] ">
            <button
              className="bg-gradient-to-r from-[rgb(30,107,110)] via-[rgb(20,113,114)] to-[rgb(88,227,227)] px-4 py-2 border border-cyan-600 text-white rounded-full uppercase text-xs font-medium mb-3"
              onClick={handleJoinNowClick}
            >
              Unlock Now
            </button>
            <button
              className="bg-gradient-to-r from-[rgb(30,107,110)] via-[rgb(20,113,114)] to-[rgb(88,227,227)] px-4 py-2 border border-cyan-600  text-white rounded-full uppercase text-xs font-medium"
              onClick={handleJoinNowClick}
            >
              Details
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Homepage2;
