import { baseUrl } from "@/config/baseUrl";
import { getToken } from "@/utils/healper";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

export function useCreateReservation() {

   const accessToken = getToken("access_token"); 
   const { mutate: booking, isPending: isloading } = useMutation({
      mutationFn: () => {
         return axios.post(`${baseUrl}/book`, {
            "reservations": [
               {
                  "restaurant_name": "Humo",
                  "venue_id": 60415,
                  "date": "2024-01-19",
                  "start_time": "10:36:00",
                  "end_time": "22:36:00",
                  "party_size": 10
               },
               {
                  "restaurant_name": "party club",
                  "venue_id": 60456,
                  "date": "2024-01-19",
                  "start_time": "10:36:00",
                  "end_time": "22:36:00",
                  "party_size": 10
               }
            ],

            "override_reservations": 0,
            "final_snipe_date": null,
            "final_snipe_time": null,
            "table_type": null,
            "reservation_source": "resy",
            "snipe_type": "cancel"
         }, { headers: { "Authorization": `Bearer ${accessToken}` } });
      },
   });

   return { booking, isloading }

}