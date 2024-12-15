import * as React from "react";
import Stepper from "@/components/Stepper";
import EventDetails from "./components/EventDetails";
import TicketDetails from "./components/TicketDetails";

export default function PostTicket() {
  const [currentStep, setCurrentStep] = React.useState(0);

  const goBack = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const handleNext = () => {
    setCurrentStep((prev) => prev + 1);
  };

  return (
    <div>
      <Stepper step={currentStep}>
        {currentStep === 0 && <EventDetails handleNext={handleNext} />}
        {currentStep === 1 && <TicketDetails handleGoBack={goBack} />}
      </Stepper>
    </div>
  );
}
