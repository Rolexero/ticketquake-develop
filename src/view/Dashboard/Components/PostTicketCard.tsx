import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function PostProductCard() {
  const navigate = useNavigate();

  return (
    <>
      <Card
        className="sm:col-span-2 flex flex-col justify-between"
        x-chunk="dashboard-05-chunk-0"
      >
        <CardHeader className="pb-3">
          <CardTitle>Post a Product</CardTitle>
          <CardDescription className="max-w-lg text-balance leading-relaxed">
            The most seamless online platform for buying and selling products.
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <Button onClick={() => navigate("/products/post")}>
            Post a Product
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}
