// components/ReusableModal.tsx

import { CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import axiosInstance from "@/service/axios";
import { fetchFlights, fetchLocation } from "@/service/request";
import { useQuery } from "@tanstack/react-query";
import { Form, useFormik } from "formik";
import { SearchFlightProps } from "../../utils";
import { useToast } from "@/components/ui/use-toast";

interface ReusableModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
}

export default function ReusableModal({
  isOpen,
  onClose,
  title,
}: ReusableModalProps) {
  //   const { data, isLoading } = useQuery({
  //     queryKey: ["flights-location"], // Query key as an array
  //     queryFn: () => fetchLocation(), // Query function
  //   });

  const initialValues: SearchFlightProps = {
    fromId: "",
    toId: "",
    departDate: "",
    returnDate: "",
    sort: "",
    cabinClass: "",
  };

  const { values, handleChange, handleSubmit, setFieldValue } =
    useFormik<SearchFlightProps>({
      initialValues: initialValues,
      validateOnMount: false,
      validateOnChange: false,
      onSubmit(values: SearchFlightProps) {
        refetch();
        // console.log(values);
      },
    });

  const {
    data: getFlightData,
    isLoading: flightIsLoading,
    refetch,
  } = useQuery({
    queryKey: ["search-flight", values], // Query key as an array
    queryFn: () => fetchFlights(values),
    enabled: false, // Query function
  });

  console.log(values);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="p-6 ">
        <DialogTitle className="text-xl font-poppins text-[#1D2433]">
          {title}
        </DialogTitle>
        <div className="mt-4 space-y-4 text-[#1D2433]">
          <p>{getFlightData?.data?.error?.code ?? ""}</p>
          <form onSubmit={handleSubmit}>
            <CardContent>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="departure">Departure</Label>
                  <Select
                    value={values.fromId}
                    onValueChange={(e) => setFieldValue("fromId", e)}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem key={"CHC.AIRPORT"} value={"CHC.AIRPORT"}>
                        CHC.AIRPORT
                      </SelectItem>

                      {/* {data?.data?.map((val, id) => {
                      return (
                        <SelectItem key={id} value={val.id}>
                          {val.name}
                        </SelectItem>
                      );
                    })} */}
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="arrival">Arrival</Label>
                  <Select
                    value={values.toId}
                    onValueChange={(e) => setFieldValue("toId", e)}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem key={"NLC.AIRPORT"} value={"NLC.AIRPORT"}>
                        NLC.AIRPORT
                      </SelectItem>

                      {/* {data?.data?.map((val, id) => {
                      return (
                        <SelectItem key={id} value={val.id}>
                          {val.name}
                        </SelectItem>
                      );
                    })} */}
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="depart_date">Depart Date</Label>
                  <input
                    type="date"
                    id="departDate"
                    name="departDate"
                    value={values.departDate}
                    onChange={handleChange}
                    className=" p-2 bg-[#F0F2F5]"
                  />{" "}
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="return_date">Return Date</Label>
                  <input
                    type="date"
                    id="returnDate"
                    name="returnDate"
                    value={values.returnDate}
                    onChange={handleChange}
                    className=" p-2 bg-[#F0F2F5]"
                  />{" "}
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="sort">Sort</Label>
                  <Select
                    value={values.sort}
                    onValueChange={(e) => setFieldValue("sort", e)}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value={"BEST"}>BEST</SelectItem>
                      <SelectItem value={"CHEAPEST"}>CHEAPEST</SelectItem>{" "}
                      <SelectItem value={"FASTEST"}>FASTEST</SelectItem>{" "}
                      {/* {data?.data?.map((val, id) => {
                      return (
                        <SelectItem key={id} value={val.id}>
                          {val.name}
                        </SelectItem>
                      );
                    })} */}
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="cabinClass">Cabin Class</Label>
                  <Select
                    value={values.cabinClass}
                    onValueChange={(e) => setFieldValue("cabinClass", e)}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value={"ECONOMY"}>ECONOMY</SelectItem>
                      <SelectItem value={"PREMIUM_ECONOMY"}>
                        PREMIUM ECONOMY
                      </SelectItem>{" "}
                      <SelectItem value={"BUSINESS"}>BUSINESS</SelectItem>{" "}
                      <SelectItem value={"FIRST"}>FIRST</SelectItem>{" "}
                      {/* {data?.data?.map((val, id) => {
                      return (
                        <SelectItem key={id} value={val.id}>
                          {val.name}
                        </SelectItem>
                      );
                    })} */}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
            <div className="flex justify-end px-6 mt-4">
              <button
                type="submit"
                className="bg-[#0D6EFD] flex p-2 text-white font-poppins rounded px-6"
              >
                {flightIsLoading ? "please wait..." : "Search Flights"}
              </button>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
