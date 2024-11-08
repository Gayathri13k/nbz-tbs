import React from "react";
import ColorCodes from "../Common/ColorCodes";
import { useSelector } from "react-redux";

export default function PopularPlaces() {
  // const colors=ColorCodes()
  const colors = useSelector((state) => state.themecolors[0]);

  return (
    <div className="px-[5vw] ">
      <p className={`text-[1.5vw] pl-[2vw] text-[${colors.primary}] font-bold pt-[3vw] pb-[1vw]`}>
        We’ve partnered with the world’s best bus companies
      </p>
      <div className=" w-full flex px-[2vw] items-center justify-between ">
        <p className="text-[1.5vw] text-black">26 RTCs</p>
        <button className="border-[0.1vw] border-[#AAAAAA] px-[1.5vw] py-[0.2vw] rounded-full text-[1vw] bg-white shadow-lg">
          View all
        </button>
      </div>
      <div className="grid grid-cols-8 w-full py-[1vw]">
        {busdetails?.length > 0 &&
          busdetails.map((item) => (
            <div className="col-span-1 w-full items-center justify-center flex-col">
              <img
                src={item.logo}
                className="w-[9vw] h-[9vw] ml-[1vw] rounded-full"
              />
              <p className="text-center py-[0.5vw] text-[1vw]">{item.label}</p>
            </div>
          ))}
      </div>
    </div>
  );
}
