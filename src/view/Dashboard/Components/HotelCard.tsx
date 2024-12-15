import { Clapperboard, Luggage, Plane, Usb, Utensils } from "lucide-react";

const HotelsCard = ({ val, handleDelete }: any) => {
  return (
    <div>
      <div className="flex bg-white rounded-[8px] justify-between h-full  ">
        <div className="flex flex-col gap-3 p-8 w-full">
          {/* first flow */}
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
            <div className="text-[#1D2433] flex gap-10 justiify-between">
              <div className="flex flex-col items-center">
                <p className="text-[#1D2433] text-[24px]">08:35</p>
                <p className="text-[#676E7E] whitespace-nowrap">Sun, 20 Aug</p>
              </div>

              <div className="flex flex-col gap-2  w-full">
                <div className="flex justify-between gap-4">
                  <Plane width={18} />
                  <span className="text-[#647995]">Duration: 1h 45m</span>

                  <Plane width={18} />
                </div>{" "}
                <div className="rounded-full bg-[#E7F0FF] flex items-center justify-center">
                  <div className="bg-[#0D6EFD] p-1 rounded w-14"></div>
                </div>
                <div className="flex justify-between gap-4">
                  <span className="text-[#647995]">LOS</span>
                  <span className="text-[#647995]">Direct</span>

                  <span className="text-[#647995]">SIN</span>
                </div>{" "}
              </div>

              <div className="flex flex-col items-center">
                <p className="text-[#1D2433] text-[24px]">08:35</p>
                <p className="text-[#676E7E] whitespace-nowrap">Sun, 20 Aug</p>
              </div>
            </div>

            <p className="text-[#1D2433] text-[24px]">₦123,450.00</p>
          </div>
          {/* second flow */}
          <div className="w-full border-b-[2px] border-[#E4E7EC] py-4">
            <p className="text-[#647995] flex">
              Facilities:{" "}
              <span className="text-[#647995] flex ml-2">
                <Luggage width={18} className="mr-1" /> Baggage: 20kg, Cabin
                Baggage: 8kg
              </span>
              <span className="text-[#647995] flex ml-4">
                <Clapperboard width={18} className="mr-1" /> In flight
                entertainment
              </span>{" "}
              <span className="text-[#647995] flex ml-4">
                <Utensils width={18} className="mr-1" /> In flight meal
              </span>
              <span className="text-[#647995] flex ml-4">
                <Usb width={18} className="mr-1" /> USB Port
              </span>
            </p>
          </div>

          {/* third flow */}

          <div className="w-full border-b-[2px] border-[#E4E7EC] py-4">
            <div className="flex justify-between">
              <div className="flex gap-8">
                <button className="bg-white  text-[#0D6EFD] font-poppins rounded ">
                  Flights details
                </button>{" "}
                <button className="bg-white  text-[#0D6EFD] font-poppins rounded">
                  Price details{" "}
                </button>
              </div>

              <button className="bg-white  text-[#0D6EFD] font-poppins rounded">
                Edit details{" "}
              </button>
            </div>
          </div>
        </div>

        <button
          onClick={() => {
            handleDelete(val);
          }}
          className="h-full px-4 flex items-center justify-center bg-[#FBEAE9] text-white"
        >
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

export default HotelsCard;
