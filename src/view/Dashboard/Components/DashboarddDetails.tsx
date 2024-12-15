import FlightsItinerary from "./FlightsItinerary";
import TripCards from "./TripCards";

const DashboarddDetails = () => {
  return (
    <div>
      <TripCards />

      <div className="mt-[40px]">
        <p className="text-[#1D2433] text-[20px]">Trip itineraries</p>
        <p className="text-[#647995] font-medium text-[14px]">
          Your trip itineraries are placed here{" "}
        </p>
      </div>
      <div className="mt-[24px]">
        <FlightsItinerary />
      </div>
    </div>
  );
};

export default DashboarddDetails;
