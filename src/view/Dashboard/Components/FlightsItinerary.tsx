import { Button } from "@/components/ui/button";
import { Plane } from "lucide-react";
import React from "react";
import EmptyState from "./EmptyState";
import FlightCard from "./FlightCard";

const FlightsItinerary = () => {
  return (
    <div>
      <section className="box-border bg-[#F0F2F5] lg:rounded-[4px]">
        <div className="mx-auto max-w-7xl px-7 py-12  lg:py-6">
          <div className="mb-6 flex items-center justify-between">
            <div className="flex gap-1 text-[#1D2433] text-[10px]">
              <Plane />
              <p className=" text-[18px] leading-[24px] text-[#1D2433] ">
                Flights
              </p>
            </div>
            <button className="bg-white p-2 text-[#0D6EFD] font-poppins rounded px-6">
              Add Flights
            </button>
          </div>

          <div className="h-[300px] flex flex-col gap-6 overflow-scroll">
            {" "}
            <FlightCard />
            <FlightCard /> <FlightCard />
          </div>

          {/* <EmptyState
            btnAction={() => {
              alert();
            }}
            title={"Add Flights"}
            icon={
              <Plane
                width={70}
                height={70}
                className="text-lg text-[#F0F2F5]"
              />
            }
          /> */}
        </div>
      </section>
    </div>
  );
};

export default FlightsItinerary;
