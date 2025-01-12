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
  const page = searchParams.get("page");
  const perPage = searchParams.get("per_page");


  const { data: searchRestaurants, isPending: isLoading, isSuccess } = useQuery({
    queryKey: ["resturants", query, exact_location, price, page, perPage],
    queryFn: (): Promise<AxiosResponse> => {
      // if (query || exact_location || price) {
      return axios.get(`${baseUrl}/restaurants/search?${query ? `venue_name=${query}` : ""}${exact_location ? `&exact_location=${exact_location}` : ""}${price ? `&price=${price}` : ""}${page ? `&page=${page}` : `&page=1`} ${perPage ? `&per_page=${perPage}` : `&per_page=12`}`);
      // }
      // else {
      //   return axios.get(`${baseUrl}/restaurants/all?page=${page ?? 1}&per_page=${perPage ?? 12}`);
      // }
      // return axios.get(`${baseUrl}/restaurants/all`);
    },
    // placeholderData: keepPreviousData,
  });
  return { searchRestaurants, isLoading, isSuccess };
}

export function useGetResturantSuggestion() {
  const url = useLocation();
  const [searchParams] = useSearchParams();
  const location = searchParams.get("location");
  const locationDropDown = searchParams.get("location-d");

  const { data: restaurantSuggestions, isPending: isLoading } = useQuery({
    queryKey: ["resturantSuggestion", location, locationDropDown],
    queryFn: (): Promise<AxiosResponse> => {
      if (url.pathname.includes("/top-picks")) {
        if (locationDropDown) {
          return axios.get(`${baseUrl}/restaurants/search?location=${locationDropDown ?? ""}`);
        }
        return axios.get(`${baseUrl}/restaurants/search?location=${location ?? ""}`);
      } else if (locationDropDown) {
        return axios.get(
          `${baseUrl}/restaurants/search?location=${locationDropDown ?? ""}`
        );
      }
      return axios.get(
        `${baseUrl}/restaurants/search?location=${location ?? ""}`
      );
    },
  });
  return { restaurantSuggestions, isLoading };
}

export function useTopPicksRestaurants() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");
  const exact_location = searchParams.get("exact_location");
  const price = searchParams.get("price");
  const page = searchParams.get("page");
  const perPage = searchParams.get("per_page");

  const { data: topPickRestaurants, isPending: isLoading } = useQuery({
    queryKey: ["topPick", query, exact_location, price, page, perPage],
    queryFn: (): Promise<AxiosResponse> => {
      if (query || exact_location || price) {
        return axios.get(`${baseUrl}/restaurants/search?venue_name=${query ?? ""}&exact_location=${exact_location ?? ""}&price=${price ?? ""}&featured=true`);
      } else {
        return axios.get(`${baseUrl}/restaurants/search?page=${page ?? 1}&per_page=${perPage ?? 12}&featured=true`);
      }
      // return axios.get(`${baseUrl}/restaurants/featured`);
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

// export function useGetLoactionSuggestion() {
//   const locationPath = useLocation();
//   const [searchParams] = useSearchParams();
//   const location = searchParams.get("location_top_pick");
//   const {
//     data: restaurantSuggestions,
//     isPending: isLoading,
//     isSuccess,
//     isError,
//   } = useQuery({
//     queryKey: ["ResturantSuggestion", location],
//     queryFn: (): Promise<AxiosResponse> => {

//       if (locationPath.pathname === "/restaurants/top-picks") {
//         return axios.get(`${baseUrl}/restaurants/search?location=${location}&featured=true`);
//       } else {

//         return axios.get(`${baseUrl}/restaurants/search?&location=${location}`);
//       }
//     },
//   });
//   return { restaurantSuggestions, isLoading, isSuccess, isError };
// }
