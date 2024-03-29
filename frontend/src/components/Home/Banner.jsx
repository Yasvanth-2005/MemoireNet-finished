import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section
      className="w-full min-h-[100vh] bg-cover bg-fixed flex items-center justify-center"
      style={{ backgroundImage: "url('../../home.jpg')" }}
    >
      <div className="flex items-center justify-center flex-col">
        <h1 className="text-[2.7em] font-semibold font-merriweather text-white">
          MemorieNet
        </h1>
        <p className="text-lg text-gray-300 max-w-[500px] text-center">
          Write, Preserve, and Relive Your Most Cherished Memories : Travel back
          in time
        </p>
        <Link to="/register">
          <button className="text-white bg-blue-600 hover:bg-blue-700 rounded text-base flex items-center gap-2 mt-3 px-5 py-1.5">
            Get Started <FaArrowRightLong />
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Banner;
