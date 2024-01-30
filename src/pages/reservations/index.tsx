import { useNavigate } from "react-router-dom";
import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { MyReservationTab, ReservationPageSkeleton } from "@/components";
import { useGetUserReservations } from "@/features/reservation/reservation";
import { useMemo } from "react";

const Index = () => {
  const navigate = useNavigate();
  // const { userReservations, isLoading } = useGetUserReservations();

  // const reservations = useMemo(() => {
  //   if (!isLoading && userReservations) {
  //     return userReservations;
  //   }
  // }, [isLoading, userReservations]);

  const isLoading = false;

  const reservations = {
    data: {
      "1e0efd4c-4102-4fb2-bcb7-58b94d0fc03d": [
        {
          created_date: "Thu, 18 Jan 2024 00:00:00 GMT",
          date: "Mon, 22 Jan 2024 00:00:00 GMT",
          end_time: "18:00:00",
          final_snipe_date: null,
          final_snipe_time: null,
          group_id: "1e0efd4c-4102-4fb2-bcb7-58b94d0fc03d",
          id: 18,
          override_reservations: 0,
          party_size: 2,
          release_date: null,
          release_time: null,
          reservation_source: "resy",
          restaurant_name: "Venhue",
          snipe_type: "cancel",
          start_time: "15:00:00",
          status: "active",
          table_type: null,
          user_id: 48,
          venue_data: {
            about_description:
              "Unpretentious, fast-paced culinary experience that offers upscale seasonal tasting menus with a playful irreverence towards fine dining.",
            address_1: "21 Ave B",
            country: "United States",
            cover_image_url:
              "https://image.resy.com/3/003/2/73281/0e41dbf8f590b1f14dbdfc4c63779b0a93a6dfbd/jpg/640x360",
            cuisine_type: "Fusion",
            locality: "New York",
            need_to_know_description:
              'Venhue is a fast-paced 60 minute experience at a 16-seat communal table. PLEASE NOTE: We are unable to sit parties that arrive more than 10 minutes late. \n\nOur tasting menu is $99/pp and we require a $20/pp non-refundable reservation fee, due to our small space and preparation costs (this is NOT a deposit and is NOT applied to your final bill). However, the reservation fee includes our standard beverage pairing which comes with Champagne, white wine, sake, beer, red wine and a dessert wine! For an additional $30/pp, you may upgrade to our premium beverage pairing*. We also include a 20% auto-gratuity charge to all parties.\n\nWe cannot accommodate non-alcoholic pairings, vegan, lactose-free, dairy-free or gluten-free diets. If you have any allergy concerns, please email contact@venhue.com before making a reservation. If yourself or members of your party are vegetarian or have specific food allergies please note after booking by using the Resy "Manage Reservation" setting (we may not be able to accommodate last minute requests)! You can find menu details at https://www.venhue.com/menu.\n\nPlease be aware that Venhue is an adults-only establishment, featuring loud music, vibrant lighting, and fog effects.\n\nFollow us on Instagram @venhuenyc\n\n*The premium pairing substitutes the wine selection with our Reserve collection, featuring fine wines from France, Italy, the US, and Spain.',
            neighborhood: "East Village",
            postal_code: "10009",
            price: 2,
            region: "NY",
            restaurant_website: "http://www.venhue.com",
            restuarant_phone_number: "+12012125815",
            seating_types: ["Experience"],
            source: "Resy",
            venue_id: 73281,
            venue_name: "Venhue",
          },
          venue_id: 73281,
        },
      ],
      "1e0efd4c-4102-4fb2-bcb7-58b94d0fc03e": [
        {
          created_date: "Thu, 18 Jan 2024 00:00:00 GMT",
          date: "Sat, 27 Jan 2024 00:00:00 GMT",
          end_time: "18:00:00",
          final_snipe_date: null,
          final_snipe_time: null,
          group_id: "1e0efd4c-4102-4fb2-bcb7-58b94d0fc03d",
          id: 19,
          override_reservations: 0,
          party_size: 2,
          release_date: null,
          release_time: null,
          reservation_source: "resy",
          restaurant_name: "Venhue",
          snipe_type: "cancel",
          start_time: "15:00:00",
          status: "active",
          table_type: null,
          user_id: 48,
          venue_data: {
            about_description:
              "Unpretentious, fast-paced culinary experience that offers upscale seasonal tasting menus with a playful irreverence towards fine dining.",
            address_1: "21 Ave B",
            country: "United States",
            cover_image_url:
              "https://image.resy.com/3/003/2/73281/0e41dbf8f590b1f14dbdfc4c63779b0a93a6dfbd/jpg/640x360",
            cuisine_type: "Fusion",
            locality: "New York",
            need_to_know_description:
              'Venhue is a fast-paced 60 minute experience at a 16-seat communal table. PLEASE NOTE: We are unable to sit parties that arrive more than 10 minutes late. \n\nOur tasting menu is $99/pp and we require a $20/pp non-refundable reservation fee, due to our small space and preparation costs (this is NOT a deposit and is NOT applied to your final bill). However, the reservation fee includes our standard beverage pairing which comes with Champagne, white wine, sake, beer, red wine and a dessert wine! For an additional $30/pp, you may upgrade to our premium beverage pairing*. We also include a 20% auto-gratuity charge to all parties.\n\nWe cannot accommodate non-alcoholic pairings, vegan, lactose-free, dairy-free or gluten-free diets. If you have any allergy concerns, please email contact@venhue.com before making a reservation. If yourself or members of your party are vegetarian or have specific food allergies please note after booking by using the Resy "Manage Reservation" setting (we may not be able to accommodate last minute requests)! You can find menu details at https://www.venhue.com/menu.\n\nPlease be aware that Venhue is an adults-only establishment, featuring loud music, vibrant lighting, and fog effects.\n\nFollow us on Instagram @venhuenyc\n\n*The premium pairing substitutes the wine selection with our Reserve collection, featuring fine wines from France, Italy, the US, and Spain.',
            neighborhood: "East Village",
            postal_code: "10009",
            price: 2,
            region: "NY",
            restaurant_website: "http://www.venhue.com",
            restuarant_phone_number: "+12012125815",
            seating_types: ["Experience"],
            source: "Resy",
            venue_id: 73281,
            venue_name: "Venhue",
          },
          venue_id: 73281,
        },
      ],
      "1e0efd4c-4102-4fb2-bcb7-58b94d0fc03f": [
        {
          created_date: "Thu, 18 Jan 2024 00:00:00 GMT",
          date: "Mon, 22 Jan 2024 00:00:00 GMT",
          end_time: "18:00:00",
          final_snipe_date: null,
          final_snipe_time: null,
          group_id: "1e0efd4c-4102-4fb2-bcb7-58b94d0fc03d",
          id: 20,
          override_reservations: 0,
          party_size: 2,
          release_date: null,
          release_time: null,
          reservation_source: "resy",
          restaurant_name: "Dim Sum Palace - 123 Williams Street",
          snipe_type: "cancel",
          start_time: "15:00:00",
          status: "paused",
          table_type: null,
          user_id: 48,
          venue_data: {
            about_description:
              "Chinese fusion foods, Cantonese traditional dishes, handmade Dim Sums, Hongkong BBQ, Live seafoods, catering",
            address_1: "123 William St",
            country: "United States",
            cover_image_url:
              "https://image.resy.com/3/003/2/73769/54987136d26111f1a3438f417aefada483c4a97f/jpg/640x360",
            cuisine_type: "Chinese",
            locality: "New York",
            need_to_know_description:
              "Dear customers, for groups under 6 please walk in. We offer a grace period of 15 minutes. If you arrive after the 15-minute grace period, you may be places on the waiting list, simply to be fair to all guests.",
            neighborhood: "Financial District",
            postal_code: "10038",
            price: 2,
            region: "NY",
            restaurant_website: "https://dimsumpalace.com/",
            restuarant_phone_number: "+12129019760",
            seating_types: [],
            source: "Resy",
            venue_id: 73769,
            venue_name: "Dim Sum Palace - 123 Williams Street",
          },
          venue_id: 73769,
        },
      ],
    },
  };

  return (
    <div className="w-full h-screen sm:px-10 px-3 py-1">
      <div className="flex justify-between items-center sm:my-3 my-8">
        <h1 className=" font-bold sm:text-2xl text-xl">My Reservations</h1>
        <Button
          variant="primary"
          className="inline-flex"
          onClick={() => navigate("/reservations/add-reservation")}
        >
          <Plus className="sm:mr-3 mr-0" /> Add Reservation
        </Button>
      </div>
      {isLoading && <ReservationPageSkeleton />}
      {typeof reservations?.data !== "object" ? (
        <div className="flex flex-col justify-center items-center h-5/6  text-center text-[#12171A] gap-5 ">
          <img src="./Reservation.png" />
          <p>
            No reservations here yet. <br /> Click "Add Reservation" button to
            add me
          </p>
          <Button
            variant="primary"
            className="sm:hidden"
            onClick={() => navigate("/reservations/add-reservation")}
          >
            <Plus className="mr-3" /> Add Reservation
          </Button>
        </div>
      ) : (
        <MyReservationTab userReservations={reservations} isLoading={false} />
      )}
    </div>
  );
};

export default Index;
