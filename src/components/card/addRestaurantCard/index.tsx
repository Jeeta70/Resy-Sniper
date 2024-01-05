import { Card, CardContent} from "@/components/ui/card";
import { useReservationContext } from "@/context/ReservationFomProvider";
import { selectResturant, selectSittingOptions } from "@/reducer/reservationFormReducer";
import { MapPin } from "lucide-react";

interface Props {
  restaurant: {
    name: string;
  };
}

const AddRestaurantCard = ({ restaurant }: Props) => {
  const { dispatch } = useReservationContext();
  

  return (
    <>
      <Card
        className="flex cursor-pointer"
        role="button"
        onClick={() => {
          selectResturant(dispatch, "latest value");
          selectSittingOptions(dispatch);
        }}
      >
        {/* need to remove later  */}
        <div className="hidden">{`${restaurant}`}</div>
        <img
          className="rounded-lg w-1/3"
          src="../restaurant/restaurant.png"
          alt=""
        />
        <CardContent className="w-full">
          <p className="my-3 text-xs font-normal text-gray-700 dark:text-gray-400">
            $$$$
          </p>
          <h5 className="mb-2 text-base font-bold tracking-tight ">
            The Coop at Double Chicken Please
          </h5>
          <p className="mb-3  text-xs font-normal text-gray-700 dark:text-gray-400">
            <MapPin className="inline-block" /> Prospective height
          </p>
        </CardContent>
      </Card>
    </>
  );
};

export default AddRestaurantCard;
