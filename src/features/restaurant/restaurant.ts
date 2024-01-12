import { baseUrl } from "@/config/baseUrl";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";
import { useSearchParams } from "react-router-dom";

export function useGetAllRestaurants() {
  const { data: restaurants, isPending: isLoading} = useQuery({
    queryKey: ["resturants"],
    queryFn: (): Promise<AxiosResponse> => {
      return axios.get(`${baseUrl}/restaurants/all`);
    },
  });
  return { restaurants, isLoading };
}

export function useSearchRestaurants() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");
  const { data: searchRestaurants, isPending: isLoading } =
    useQuery({
      queryKey: ["resturants", query],
       queryFn: (): Promise<AxiosResponse> => {
        if (query)
          return axios.get(
            `${baseUrl}/restaurants/search?query=${encodeURI(query)}`
          );
        return axios.get(`${baseUrl}/restaurants/all`);
      },
    });

  return { searchRestaurants, isLoading };
}
