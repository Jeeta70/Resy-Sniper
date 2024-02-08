import { baseUrl } from "@/config/baseUrl";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";
import { useLocation, useParams, useSearchParams } from "react-router-dom";

export function useGetAllRestaurants() {
  const { data: restaurants, isPending: isLoading } = useQuery({
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
  const exact_location = searchParams.get("exact_location");
  const price = searchParams.get("price");
  const { data: searchRestaurants, isPending: isLoading } = useQuery({
    queryKey: ["resturants", query, exact_location, price],
    queryFn: (): Promise<AxiosResponse> => {
      if (query || exact_location || price) {
        let url = "";
        if (query) {
          url = `${baseUrl}/restaurants/search?venue_name=${encodeURI(query ?? "")}`;
        } else if (exact_location) {
          url = `${baseUrl}/restaurants/search?exact_location=${encodeURI(exact_location ?? "")}`;
        } else if (price) {
          url = `${baseUrl}/restaurants/search?price=${encodeURI(price ?? "")}`;
        }
        return axios.get(url);
      }
      return axios.get(`${baseUrl}/restaurants/all`);
    },
  });
  return { searchRestaurants, isLoading };
}

export function useTopPicksRestaurants() {
  const [searchParams] = useSearchParams();
  const locationPath = useLocation();
  const query = searchParams.get("query");
  const exact_location = searchParams.get("exact_location");
  const price = searchParams.get("price");
  const { data: topPickRestaurants, isPending: isLoading } = useQuery({
    queryKey: ["topPick", query, exact_location, price],
    queryFn: (): Promise<AxiosResponse> => {

      if (query || exact_location || price || locationPath.pathname === "/restaurants/top-picks") {
        let url = "";
        if (query) {
          url = `${baseUrl}/restaurants/search?venue_name=${encodeURI(query ?? "")}&featured=true`;
        } else if (exact_location) {
          url = `${baseUrl}/restaurants/search?exact_location=${encodeURI(exact_location ?? "")}&featured=true`;
        } else if (price) {
          url = `${baseUrl}/restaurants/search?price=${encodeURI(price ?? "")}&featured=true`;
        }
        return axios.get(url);
      }
      return axios.get(`${baseUrl}/restaurants/featured`);
    },
  });

  return { topPickRestaurants, isLoading };
}

export function useGetSingleRestaurant() {
  const { venue_id } = useParams();

  const {
    data: singleResturant,
    isPending: isLoading,
    isSuccess,
    isError,
  } = useQuery({
    queryKey: ["single_restaurant", venue_id],
    queryFn: (): Promise<AxiosResponse> => {
      return axios.get(`${baseUrl}/restaurants/${venue_id}`);
    },
  });
  return { singleResturant, isLoading, isSuccess, isError };
}

export function useGetLoactionSuggestion() {
  const locationPath = useLocation();
  const [searchParams] = useSearchParams();
  const location = searchParams.get("location");
  const {
    data: restaurantSuggestions,
    isPending: isLoading,
    isSuccess,
    isError,
  } = useQuery({
    queryKey: ["ResturantSuggestion", location],
    queryFn: (): Promise<AxiosResponse> => {
      const url =
        locationPath.pathname === "/restaurants/top-picks"
          ? `${baseUrl}/restaurants/search?location=${location}&featured=true`
          : `${baseUrl}/restaurants/search?&location=${location}`;
      return axios.get(url);
    },
  });
  return { restaurantSuggestions, isLoading, isSuccess, isError };
}

// export function useRestaurantAccourdingPriceSuggestion() {
//   const [searchParams] = useSearchParams();
//   const location = searchParams.get("location");
//   const { data: restaurantAccourdingPriceSuggestions, isPending: isLoading, isSuccess, isError } = useQuery({
//     queryKey: ['ResturantSuggestion', location],
//     queryFn: (): Promise<AxiosResponse> => {
//       return axios.get(`${baseUrl}/restaurants/search?price=${location}`)
//     }
//   })
//   return { restaurantAccourdingPriceSuggestions, isLoading, isSuccess, isError };
// }
