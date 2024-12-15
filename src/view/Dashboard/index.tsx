import Page from "@/components/page";
import DashboardHeader from "./Components/DashboardHeader";
import DashboarddDetails from "./Components/DashboarddDetails";

export default function Dashboard() {
  return (
    <Page>
      <main className="">
        <img
          alt="Product image"
          className="aspect-square !h-[200px] w-full rounded-md object-cover"
          height="20"
          // @ts-ignore
          src={"/banner (1).svg"}
          width="100"
        />

        <DashboardHeader />

        {/* <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
            <BalanceCard />

            <PostProductCard />
          </div> */}
        <div className="mt-4">
          <DashboarddDetails />
        </div>
      </main>
    </Page>
  );
}
