import * as React from "react";
import debounce from "lodash.debounce";
import SelectableOption from "@/model/SelectableOption";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { DatePickerWithRange } from "./RangeDatePicker";
import useUpdatedEffect from "@/hooks/useUpdatedEffect";
import { Button } from "./ui/button";
import { XIcon } from "lucide-react";

export interface GenericQuery {
  [key: string]: any;
  page?: number;
  limit?: string;
  q?: string;
  sort?: string;
  type?: string;
}

interface Props<T extends GenericQuery> {
  query: T;
  setQuery: <K extends keyof T>(key: K, value?: string) => void;
  excludeKeys?: (keyof T)[];
  searchPlaceHolder?: string;
  filters: {
    options: SelectableOption[];
    key: keyof T;
    type?: "select" | "date";
    placeHolder: string;
  }[];
}

export default function GenericTableFilters<T extends GenericQuery>(
  props: Props<T>
) {
  const { searchPlaceHolder, filters, query, setQuery, excludeKeys } = props;

  const [queryString, setQueryString] = React.useState(query.q ?? "");

  const debouncedQueryUpdate = React.useMemo(
    () => debounce((searchString: string) => setQuery("q", searchString), 1000),
    [setQuery]
  );

  useUpdatedEffect(() => {
    debouncedQueryUpdate(queryString);
  }, [queryString]);

  const isFiltered = Object.keys(query).filter(
    (key) =>
      Boolean(query[key]) &&
      !["limit", "page", ...(excludeKeys ?? [])].includes(key)
  ).length;

  return (
    <div className="flex flex-col gap-2 mb-2 md:flex-row">
      <Input
        placeholder={searchPlaceHolder ?? "search"}
        onChange={(e) => setQueryString(e.target.value)}
        value={queryString}
      />

      <div className="flex gap-2 items-center">
        {filters.map((filter) => {
          switch (filter.type) {
            case "select":
              return (
                <Select
                  onValueChange={(v) =>
                    setQuery(
                      filter.key,
                      v.toString().trim().length ? v : undefined
                    )
                  }
                  key={filter.key.toString()}
                  value={query[filter.key] ?? ""}
                >
                  <SelectTrigger className="w-full md:w-[180px]">
                    <SelectValue placeholder={filter.placeHolder} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {filter.options.map((option) => (
                        <SelectItem value={option.value} key={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              );
            default:
              return <DatePickerWithRange key={filter.key.toString()} />;
          }
        })}

        {isFiltered ? (
          <div>
            <Button
              className="w-full"
              onClick={() => {
                [{ key: "q" }, ...filters].forEach((filter) =>
                  setQuery(filter.key, undefined)
                );

                if (queryString) setQueryString("");
              }}
            >
              <XIcon className="mr-2 h-4 w-4 text-white" /> Reset
            </Button>
          </div>
        ) : null}
      </div>
    </div>
  );
}
