import { Plane } from "lucide-react";
import React, { useState } from "react";
import FlightCard from "./FlightCard";
import ReusableModal from "./Modal/SearchFlightModal";
import { useModalState } from "@/hooks/useModalState";
import EmptyState from "./EmptyState";

const FlightsItinerary = () => {
  const { isOpen, toggleIsOpen, closeModal, openModal, setIsOpen } =
    useModalState();

  const [flights, setFlights] = useState([1, 2, 3, 4, 5]);
  const handleDelete = (id) => {
    const updatedFlights = flights.filter((flight) => flight !== id);
    setFlights(updatedFlights); // Update the state
  };

  return (
    <React.Fragment>
      <section className="box-border bg-[#F0F2F5] lg:rounded-[4px]">
        <div className="mx-auto max-w-7xl px-7 py-12  lg:py-6">
          <div className="mb-6 flex items-center justify-between">
            <div className="flex gap-1 text-[#1D2433] text-[10px]">
              <Plane />
              <p className=" text-[18px] leading-[24px] text-[#1D2433] ">
                Flights
              </p>
            </div>
            <button
              onClick={openModal}
              className="bg-white p-2 text-[#0D6EFD] font-poppins rounded px-6"
            >
              Add Flights
            </button>
          </div>

          <div className="h-[300px] flex flex-col gap-6 overflow-scroll">
            {flights?.length ? (
              flights.map((val, id) => {
                return (
                  <FlightCard
                    val={val}
                    key={Math.random()}
                    handleDelete={handleDelete}
                  />
                );
              })
            ) : (
              <EmptyState
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
              />
            )}
          </div>
        </div>
      </section>

      {/* Reusable Modal */}
      <ReusableModal
        isOpen={isOpen}
        onClose={closeModal}
        title="Search for Flight"
      />
    </React.Fragment>
  );
};

export default FlightsItinerary;
