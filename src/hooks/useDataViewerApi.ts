import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";

import citiesData from "../data.json";

type CityData = {
  "#": number;
  City: string;
  Country: string;
  "All Buildings": string;
  "100m+": number;
  "150m+": number;
  "200m+": number;
  "300m+": number;
  "Telecom Towers": number;
  "All Structures": string;
};

export const useDataViewerApi = () => {
  const { search } = useLocation();

  const queryParams = new URLSearchParams(search);

  const { data = [], ...rest } = useQuery<CityData[]>("cities", async () => {
    return citiesData;
  });

  return {
    ...rest,
    data: orderBy(data, queryParams.get("orderByField")),
  };
};

const orderBy = (data: CityData[], orderByField: string | null) => {
  if (!orderByField) return data;

  const collator = Intl.Collator("en", {
    numeric: true,
  });

  return data.sort((a, b) => {
    if (typeof a[orderByField] === "string") {
      return collator.compare(
        a[orderByField]?.replace(",", ""),
        b[orderByField]?.replace(",", "")
      );
    }

    return collator.compare(a[orderByField], b[orderByField]);
  });
};
