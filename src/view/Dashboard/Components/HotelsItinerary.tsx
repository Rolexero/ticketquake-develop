import { Building2, Plane } from "lucide-react";
import React, { useState } from "react";
import ReusableModal from "./Modal/SearchFlightModal";
import { useModalState } from "@/hooks/useModalState";
import EmptyState from "./EmptyState";
import HotelCard from "./HotelCard";

const HotelsItinerary = () => {
  const { isOpen, closeModal } = useModalState();

  const [flights, setFlights] = useState([1, 2, 3, 4, 5]);
  const handleDelete = (id: any) => {
    const updatedFlights = flights.filter((flight) => flight !== id);
    setFlights(updatedFlights); // Update the state
  };

  return (
    <React.Fragment>
      <section className="box-border bg-[#344054] lg:rounded-[4px]">
        <div className="mx-auto max-w-7xl px-7 py-12  lg:py-6">
          <div className="mb-6 flex items-center justify-between">
            <div className="flex gap-1 text-[#fff] text-[10px]">
              <Building2 />
              <p className=" text-[18px] leading-[24px] text-[#fff] ">Hotels</p>
            </div>
            <button
              //   onClick={openModal}
              className="bg-white p-2 text-[#0D6EFD] font-poppins rounded px-6"
            >
              Add Hotels
            </button>
          </div>

          <div className="h-[300px] flex flex-col gap-6 overflow-scroll">
            {flights?.length ? (
              flights.map((val) => {
                return (
                  <HotelCard
                    val={val}
                    key={Math.random()}
                    handleDelete={handleDelete}
                  />
                );
              })
            ) : (
              <EmptyState
                btnAction={() => {
                  //   openModal();
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

export default HotelsItinerary;
