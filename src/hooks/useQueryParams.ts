import { GenericQuery } from "@/components/GenericTableFilters";
import { useCallback } from "react";
import { useSearchParams } from "react-router-dom";

export default function useQueryParams<T extends GenericQuery>(
  initialQueryParams?: T
) {
  const [searchParams, setSearchParams] = useSearchParams(initialQueryParams);

  const updateQueryParams = useCallback(
    <K extends keyof T>(
      key: K | Partial<T> | string,
      value?: T[K],
      replacePrevious?: boolean
    ) => {
      setSearchParams(
        (prevParams) => {
          if (typeof key !== "string") {
            const params = { ...Object.fromEntries(prevParams), ...(key as T) };

            Object.keys(params).forEach((key) => {
              if ([null, undefined].includes(params[key])) {
                delete params[key];
              }
            });

            return params;
          } else {
            if ([null, undefined].includes(value)) {
              prevParams.delete(key);
            } else {
              prevParams.set(key, value!);
            }
          }

          return prevParams;
        },
        { replace: replacePrevious }
      );
    },
    [setSearchParams]
  );

  const clearAllFilters = () => setSearchParams(initialQueryParams);

  return {
    queryParams: Object.fromEntries(searchParams) as T,
    updateQueryParams,
    clearAllFilters,
  };
}
