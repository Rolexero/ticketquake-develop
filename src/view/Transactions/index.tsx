import Page from "@/components/page";
import TransactionList from "./components/TransactionList";
import GenericTableFilters, {
  GenericQuery,
} from "@/components/GenericTableFilters";
import useQueryParams from "@/hooks/useQueryParams";

export default function Transactions() {
  const { queryParams, updateQueryParams } = useQueryParams<GenericQuery>({});

  return (
    <Page title="Transactions">
      <div className="mb-4">
        <GenericTableFilters
          searchPlaceHolder="search by customer name"
          query={queryParams}
          setQuery={updateQueryParams}
          filters={[
            {
              key: "status",
              type: "select",
              options: [
                { label: "Active", value: "true" },
                { label: "Inactive", value: "false" },
              ],
              placeHolder: "Status",
            },
            {
              key: "provider",
              type: "select",
              options: [
                { label: "Postmark", value: "postmark" },
                { label: "Sendgrid", value: "sendgrid" },
              ],
              placeHolder: "Provider",
            },
          ]}
        />
      </div>

      <TransactionList />
    </Page>
  );
}
