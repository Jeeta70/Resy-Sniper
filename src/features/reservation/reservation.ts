import { baseUrl } from "@/config/baseUrl";
import { getToken } from "@/utils/healper";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";
import { useParams } from "react-router-dom";


export type createReservationPayload = {
  resturants: {
    venue_id: number;
    venue_name: string;
  }[];
  date: string[];
  override_reservations: number;
  final_snipe_date: null;
  final_snipe_time: null;
  table_type: null;
  reservation_source: string;
  snipe_type: string;
  start_time: string;
  end_time: string;
  party_size: string | number;
}

export function useCreateReservation() {
  const accessToken = getToken("access_token");
  const { mutate: createReservation, isPending: isLoading } = useMutation({
    mutationFn: (payload: createReservationPayload) => {
      return axios.post(
        `${baseUrl}/book`,
        { payload },
        { headers: { Authorization: `Bearer ${accessToken}` } }
      );
    },
  });

  return { createReservation, isLoading };
}

export function useGetUserReservations() {
  const accesToken = getToken("access_token");
  const {
    data: userReservations,
    isPending: isLoading,
    isSuccess,
    isError,
    error,
  } = useQuery({
    queryKey: ["reservation", accesToken],
    retry: false,
    queryFn: (): Promise<AxiosResponse> => {
      return axios.get(`${baseUrl}/api/get_user_reservations`, {
        headers: { Authorization: `Bearer ${accesToken}` },
      });
    },
  });
  return { userReservations, isLoading, isSuccess, isError, error };
}

export function useGetSingleReservation() {
  const { venue_id, group_id } = useParams()
  const accesToken = getToken("access_token");
  const {
    data: singleReservation,
    isPending: isLoading,
    isSuccess,
    isError,
    error,
  } = useQuery({
    queryKey: ["singleReservation", venue_id, group_id],
    retry: false,
    queryFn: (): Promise<AxiosResponse> => {
      return axios.get(`${baseUrl}/api/view_group?group_id=${group_id}`, {
        headers: { Authorization: `Bearer ${accesToken}` },
      });
    },
  });
  return { singleReservation, isLoading, isSuccess, isError, error };
}

export function useUpdateReservation() {
  const accessToken = getToken("access_token");
  const { mutate: booking, isPending: isloading } = useMutation({
    mutationFn: () => {
      return axios.post(
        `${baseUrl}/book`,
        {
          reservations: [
            {
              restaurant_name: "Humo",
              venue_id: 60415,
              date: "2024-01-19",
              start_time: "10:36:00",
              end_time: "22:36:00",
              party_size: 10,
            },
            {
              restaurant_name: "party club",
              venue_id: 60456,
              date: "2024-01-19",
              start_time: "10:36:00",
              end_time: "22:36:00",
              party_size: 10,
            },
          ],

          override_reservations: 0,
          final_snipe_date: null,
          final_snipe_time: null,
          table_type: null,
          reservation_source: "resy",
          snipe_type: "cancel",
        },
        { headers: { Authorization: `Bearer ${accessToken}` } }
      );
    },
  });

  return { booking, isloading };
}
