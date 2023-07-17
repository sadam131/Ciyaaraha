import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
function Navbar() {
  return (
    <div className="bg-[#03254e] w-full text-white p-8">
      <div className="w-[84%] mx-auto flex justify-between items-center">
        <div>
          <p className="font-poppins text-4xl capitalize font-bold">
            cayaaraha
          </p>
        </div>
        <div className="hidden lg:flex flex items-center text-gray-300 font-poppins text-xl capitalize transition">
          <div className="cursor-pointer hover:text-white">premiere leage</div>
          <div className="ml-4 cursor-pointer hover:text-white">seri a</div>
          <div className="ml-4 cursor-pointer hover:text-white">laliga</div>
          <button className="ml-4 bg-[#eb9fef] text-black py-3 px-4 rounded-md hover:bg-[#da88de] hover:text-gray-200 transition">
            add posts
          </button>
        </div>
        <div className="lg:hidden bg-green-400 cursor-pointer p-2 rounded-md">
          <AiOutlineMenu className="text-3xl"/>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
