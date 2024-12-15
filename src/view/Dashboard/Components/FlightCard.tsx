import { Clapperboard, Luggage } from "lucide-react";
import React from "react";

const FlightCard = () => {
  return (
    <div>
      <div className="flex bg-white rounded-[8px] justify-between h-[230px]  ">
        <div className="flex flex-col gap-3 p-8 w-full">
          <div className="flex justify-between w-full border-b-[2px] border-[#E4E7EC] py-4">
            <div className="flex gap-2">
              <img
                alt="Product image"
                className=""
                height="20"
                // @ts-ignore
                src={"/symb.svg"}
                width="20"
              />
              <div>
                <p className="text-[#1D2433] text-[24px]  font-poppins">
                  American Airlines
                </p>
                <div className="flex gap-2 items-center">
                  <p className="text-[#676E7E]">AA-829</p>
                  <span className="p-1 rounded bg-[#0A369D] text-base">
                    First Class
                  </span>
                </div>
              </div>
            </div>
            <div className="text-[#1D2433] text-[24px]">₦123,450.00</div>
          </div>

          <div className="w-full border-b-[2px] border-[#E4E7EC] py-4">
            <p className="text-[#647995] flex">
              Facilities:{" "}
              <span className="text-[#647995] flex ml-2">
                <Luggage width={18} /> Baggage: 20kg, Cabin Baggage: 8kg
              </span>
              <span className="text-[#647995] flex ml-2">
                <Clapperboard width={18} /> In flight entertainment
              </span>{" "}
              <span className="text-[#647995] flex ml-2">
                <Luggage width={18} /> In flight meal
              </span>
              <span className="text-[#647995] flex ml-2">
                <Luggage width={18} /> USB Port
              </span>
            </p>
          </div>
        </div>

        <button className="h-full px-4 flex items-center justify-center bg-[#FBEAE9] text-white">
          <img
            alt="Product image"
            className="aspect-square  w-full rounded-md object-cover"
            height="20"
            // @ts-ignore
            src={"/X.svg"}
            width="20"
          />
        </button>
      </div>
    </div>
  );
};

export default FlightCard;
