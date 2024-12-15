import { ArrowRight, Calendar } from "lucide-react";

const DashboardHeader = () => {
  return (
    <div className="mt-[20px]">
      <div className="flex justify-between">
        <div className="flex  flex-col">
          <div className="bg-[#FEF4E6] p-2 flex  w-auto  gap-3">
            <Calendar className="text-[#7A4504]" />
            <p className="text-[#7A4504]">21 March 2024</p>
            <ArrowRight className="text-[#7A4504]" />{" "}
            <p className="text-[#7A4504]">21 April 2024</p>
          </div>
          <p className="text-[#000000] font-semibold text-[24px]">
            Bahamas Family Trip
          </p>
          <p className="text-[#676E7E] font-medium font-poppins text-[16px]">
            New York,  United States of America | Solo Trip
          </p>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default DashboardHeader;
