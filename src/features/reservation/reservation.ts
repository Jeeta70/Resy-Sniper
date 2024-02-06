import { toast } from "@/components/ui/use-toast";
import { baseUrl } from "@/config/baseUrl";
import { getToken } from "@/utils/healper";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";
import { useNavigate, useParams } from "react-router-dom";

export type reservationPayload = {
  resturants: {
    venue_id: number;
    venue_name: string;
  }[];
  date: string[];
  override_reservations: number;
  final_snipe_date: null | string | undefined;
  final_snipe_time: null;
  table_type: null;
  reservation_source: string;
  snipe_type: string;
  start_time: string;
  end_time: string;
  party_size: string | number;
};

export function useCreateReservation() {
  const navigate = useNavigate();
  const accessToken = getToken("access_token");
  const { mutate: createReservation, isPending: isLoading } = useMutation({
    mutationFn: (payload: reservationPayload) => {
      return axios.post(
        `${baseUrl}/api/book`,
        { ...payload },
        { headers: { Authorization: `Bearer ${accessToken}` } }
      );
    },
    onSuccess: (user) => {
      const { data } = user;
      toast({ description: data.msg, variant: "dark" });
      navigate("/reservations");
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
    queryKey: ["all-reservations"],
    queryFn: (): Promise<AxiosResponse> => {
      return axios.get(`${baseUrl}/api/get_user_reservations_group`, {
        headers: { Authorization: `Bearer ${accesToken}` },
      });
    },
  });
  return { userReservations, isLoading, isSuccess, isError, error };
}

export function useGetSingleReservation() {
  const { group_id } = useParams();
  const accesToken = getToken("access_token");
  const {
    data: singleReservation,
    isPending: isLoading,
    isSuccess,
    isError,
    error,
  } = useQuery({
    queryKey: ["singleReservation", group_id],
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
  const navigate = useNavigate();
  const accessToken = getToken("access_token");
  const { mutate: updateReservation, isPending: isLoading } = useMutation({
    mutationFn: (payload: reservationPayload) => {
      return axios.post(
        `${baseUrl}/api/book`,
        { ...payload },
        { headers: { Authorization: `Bearer ${accessToken}` } }
      );
    },
    onSuccess: (response) => {
      const { data } = response;
      toast({ description: data.msg, variant: "dark" });
      navigate("/reservations");
    },
  });

  return { updateReservation, isLoading };
}

export function usePauseReservation() {
  const queryClient = useQueryClient();
  const accessToken = getToken("access_token");
  const { mutate: pauseReservation, isPending: isLoading } = useMutation({
    mutationFn: (group_id: string) => {
      return axios.post(
        `${baseUrl}/api/pause_group_reservations`,
        { group_id },
        { headers: { Authorization: `Bearer ${accessToken}` } }
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["all-reservations"] });
    },
  });
  return { pauseReservation, isLoading };
}

export function useUnPauseReservation() {
  const queryClient = useQueryClient();
  const accessToken = getToken("access_token");
  const { mutate: unPauseReservation, isPending: isLoading } = useMutation({
    mutationFn: (group_id: string) => {
      return axios.post(
        `${baseUrl}/api/unpause_group_reservations`,
        { group_id },
        { headers: { Authorization: `Bearer ${accessToken}` } }
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["all-reservations"] });
    },
  });
  return { unPauseReservation, isLoading };
}

export function useCancelReservation() {
  const queryClient = useQueryClient();
  const accessToken = getToken("access_token");
  const { mutate: cancelReservation, isPending: isLoading } = useMutation({
    mutationFn: (group_id: string) => {
      return axios.post(
        `${baseUrl}/api/cancel_group_reservations`,
        { group_id },
        { headers: { Authorization: `Bearer ${accessToken}` } }
      );
    },
    onSuccess: () => {
      // const { data } = response;
      toast({ description: "Task successfully deleted", variant: "dark" });
      queryClient.invalidateQueries({ queryKey: ["all-reservations"] });
    },
  });
  return { cancelReservation, isLoading };
}

export function useGetReservationCount() {
  const accesToken = getToken("access_token");
  const {
    data: reservationCounts,
    isPending: isLoading,
    isSuccess,
    isError,
    error,
  } = useQuery({
    queryKey: ["reservationCount"],
    retry: false,
    queryFn: (): Promise<AxiosResponse> => {
      return axios.get(`${baseUrl}/api/get_user_reservation_count`, {
        headers: { Authorization: `Bearer ${accesToken}` },
      });
    },
  });
  return { reservationCounts, isLoading, isSuccess, isError, error };
}
