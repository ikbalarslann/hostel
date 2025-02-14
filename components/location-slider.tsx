"use client";

import MapPage from "./map";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { IoMdSubway } from "react-icons/io";
import { FaMapSigns } from "react-icons/fa";
import { SiOpenstreetmap } from "react-icons/si";

export const Transport = ({ icon, desc }: any) => {
  return (
    <div className="flex gap-3 items-center justify-center">
      {icon}
      <p className="text-black font-semibold">{desc}</p>
    </div>
  );
};

const Slider = () => {
  const [closeLocation, setCloseLocation] = useState(true);

  const handleLocation = () => {
    setCloseLocation(!closeLocation);
  };

  return (
    <div
      className={`z-50 fixed gap-0  items-center  hidden md:flex  ${
        closeLocation
          ? "translate-x-[84vw] transition-transform duration-700"
          : "translate-x-[14vw] transition-transform duration-500"
      }`}
    >
      <Button
        className={`${
          closeLocation && "pt-3"
        } rotate-90 w-[76px] h-[36px] -mx-5`}
        onClick={handleLocation}
      >
        {closeLocation ? "Location " : "Close"}
      </Button>
      <div className="bg-black w-[70vw]  z-50 h-[95vh] flex items-center justify-center">
        <div className="bg-black  w-[65vw]  h-[89vh] flex ">
          <div className="flex-1">
            <MapPage className="h-[89vh] w-[37vw]" />
          </div>
          <div className="bg-yellow-400 h-full w-[28vw] flex flex-col">
            <div className="flex-1 bg-white  px-10 py-28">
              <h1 className="text-yellow-500 text-xl font-semibold ">
                Yolo Hostel
              </h1>
              <p>
                Yeldegirmeni str. <br />
                Istanbul
              </p>
              <p className="font-bold">Turkey</p>
              <p className="text-sm mb-10">zip code: 34000</p>
              <p className="text-sm">
                Yolo Hostel is an independent and locally run, and as such you
                will get the personal touch not found in big chain hostels, with
                a unique family atmosphere that will make you feel right at
                home.
              </p>
            </div>
            <div className=" px-12  w-full h-[30vh] flex flex-col items-start justify-center gap-6">
              <Transport
                icon={<IoMdSubway className="text-4xl text-black" />}
                desc="3 min walk to Public Transport"
              />
              <Transport
                icon={<FaMapSigns className="text-4xl text-black" />}
                desc="5 min walk to Main Street"
              />
              <Transport
                icon={<SiOpenstreetmap className="text-4xl text-black" />}
                desc="20 min walk to Old Town"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Slider;
