import { IRestaurant } from "@/types/restaurants";
export type IReservation = {
  // status: string;
  status: IStatus;
  completed: number;
  created_date: string;
  date: Date;
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


export type IStatus =  "active" | "paused" | "completed" | "canceled"