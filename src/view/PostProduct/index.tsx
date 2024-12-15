import useQueryParams from "@/hooks/useQueryParams";
import { GenericQuery } from "@/components/GenericTableFilters";
import { ArrowLeftIcon } from "lucide-react";

import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import PostTicket from "../PostTicket";
import { capitalizeFirstLetter, productType } from "@/lib/helper";

export default function PostProduct() {
  const { queryParams, updateQueryParams, clearAllFilters } =
    useQueryParams<GenericQuery>({
      type: "",
    });

  return (
    <>
      {queryParams.type === "" && (
        <div>
          <h1>Select a product type to proceed</h1>
          <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3 mt-[20px]">
            <Card>
              <CardHeader>
                <CardTitle>Physical Product</CardTitle>
                <CardDescription>
                  Sell any kind of physical product, from clothing to books to
                  electronics and appliances and more
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Button
                  onClick={() => updateQueryParams("type", "physical_product")}
                >
                  Post Physical Product
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Ticket</CardTitle>
                <CardDescription>
                  The most seamless online platform for buying and selling
                  tickets.
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Button onClick={() => updateQueryParams("type", "ticket")}>
                  Post Ticket
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex flex-row items-center justify-between">
                  Subscriptions{" "}
                  <div className="font-normal text-[12px] text-destructive">
                    coming soon
                  </div>
                </CardTitle>

                <CardDescription>
                  The most seamless online platform for buying and selling
                  products.
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Button
                  onClick={() => updateQueryParams("type", "subscription")}
                >
                  Post Subscriptions
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      )}

      {queryParams.type !== "" && (
        <div className="">
          <div className="flex flex-row gap-4 items-center mb-4 ml-1">
            <ArrowLeftIcon
              size="18px"
              className="cursor-pointer bg-primary text-primary-foreground rounded-sm"
              onClick={() => clearAllFilters()}
            />

            <h6>
              {productType(capitalizeFirstLetter(queryParams.type ?? ""))}
            </h6>
          </div>

          {queryParams.type === "physical_product" && (
            <div>{queryParams.type}</div>
          )}
          {queryParams.type === "subscription" && <div>{queryParams.type}</div>}
          {queryParams.type === "ticket" && (
            <div>
              <PostTicket />
            </div>
          )}
        </div>
      )}
    </>
  );
}
