import { IRestaurant } from "@/types/restaurants";
export type IReservation = {
  status: "active" | "paused" | "completed" | "canceled" ;
  completed: number;
  created_date: string;
  date: string;
  end_time: string;
  final_snipe_date: null | string;
  final_snipe_time: null | string;
  group_id: string;
  id: number;
  override_reservations: null;
  party_size: number;
  paused: number;
  release_date: null | string;
  release_time: null | string;
  reservation_source: null | string;
  restaurant_name: string;
  snipe_type: null | string;
  start_time: string;
  success: number;
  table_type: null | string;
  user_id: number;
  venue_data: IRestaurant;
  venue_id: number;
};