import { Button } from "@/components/ui/button";
import React from "react";
const TripDetails = [
  {
    title: "Activities",
    details:
      "Build, personalize, and optimize your itineraries with our trip planner.",
    btnTitle: "Add Activities",
  },
  {
    title: "Hotels",
    details:
      "Build, personalize, and optimize your itineraries with our trip planner.",
    btnTitle: "Add Hotels",
  },
  {
    title: "Hotels",
    details:
      "Build, personalize, and optimize your itineraries with our trip planner.",
    btnTitle: "Add Flights",
  },
];
const TripCards = () => {
  return (
    <div>
      <div className="flex gap-3">
        {TripDetails?.map((data, id) => {
          return (
            <div
              className={`${
                id == 0
                  ? "bg-[#000031] text-white"
                  : id == 1
                  ? "bg-[#E7F0FF] text-[#1D2433]"
                  : "bg-[#0D6EFD] text-white"
              } flex flex-col gap-4 p-4 rounded-md w-[270px]`}
            >
              <div className="flex flex-col gap-3">
                <p className="font-semibold text-[16px] font-poppins">
                  {data.title}
                </p>

                <p className=" font-poppins leading-[22px] font-normal text-[14px]">
                  {data.details}
                </p>
              </div>

              <button
                className={`font-poppins mt-6 p-3 rounded font-medium   text-base ${
                  id == 2
                    ? "bg-[#FFF] text-[#0D6EFD]"
                    : "bg-[#0D6EFD] text-white"
                }`}
              >
                {data?.btnTitle}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TripCards;
