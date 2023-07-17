import React from "react";
import { CgMediaLive } from "react-icons/cg";
function HomeBanner() {
  return (
    <div className="w-full bg-[#011c27] h-[450px]">
      <div className="flex justify-between items-center">
        <div className="text-white w-[40%] mx-auto">
          <div className="flex">
            <div>
              <CgMediaLive  className="icon__live text-5xl text-red-500 mt-3 mr-4"/>
            </div>
            <div>
              <h1 className="text-6xl mb-8 text-[#eb9fef] font-poppins capitalize font-bold">
                breaking news
              </h1>
            </div>
          </div>
          <p className="text-2xl font-poppins capitalize font-medium">
            mason mount oo ku biiray kooxda manchester united
          </p>
        </div>
        <div className="w-[41%] h-[450px]">
          <img
            className="w-full h-full aspect-video"
            src={`https://talksport.com/wp-content/uploads/sites/5/2023/05/mason-mount-chelsea-training-session-806873194.jpg`}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default HomeBanner;
