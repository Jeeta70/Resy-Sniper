import { Card, CardContent } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { GripHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { IReservation } from "@/types/reservations";
import { useNavigate } from "react-router-dom";
import { capitalizeFirstAlphabet } from "@/utils/healper";
import {
  useCancelReservation,
  usePauseReservation,
  useUnPauseReservation,
} from "@/features/reservation/reservation";

const Index = ({
  reservation,
  status,
  groupId: group_id,
}: {
  reservation: IReservation[];
  status: "active" | "paused" | string;
  groupId: string;
}) => {
  const { pauseReservation } = usePauseReservation();
  const { unPauseReservation } = useUnPauseReservation();
  const { cancelReservation } = useCancelReservation();
  const navigate = useNavigate();
  // const { venue_id, group_id, status } = reservation;

  const restaurantNames = reservation
    .map((restaurant) => restaurant.restaurant_name)
    .join(",");
  const restaurantImage = reservation.map((restaurant, i, reservationArray) => {
    if (i > 4) return
    if (reservationArray.length === 1) return <img key={i} className="rounded-l-lg h-full" src={restaurant.venue_data.cover_image_url} alt="" />;
    if (reservationArray.length === 2) return <div key={i} className="grid grid-cols-2"> <img className="rounded-l-lg h-full" src={restaurant.venue_data.cover_image_url} alt="" /> </div>;
    if (reservationArray.length === 3) return <div key={i} className="grid grid-cols-2"> <img className="rounded-l-lg h-full" src={restaurant.venue_data.cover_image_url} alt="" /> </div>
    if (reservationArray.length === 4) return <img key={i} className={`${i == 0 && "rounded-tl-lg"} ${i == 2 && "rounded-bl-lg"} h-full w-full`} src={restaurant.venue_data.cover_image_url} alt="" />
  });

  return (
    <Card className="flex sm:h-[20vh] h-auto  my-5">
      {reservation.length === 1 && <div className="w-56"> {restaurantImage} </div>}
      {reservation.length === 4 && <div className="grid grid-cols-2 gap-1 w-56"> {restaurantImage} </div>}

      <CardContent className="space-y-2 my-auto w-full">
        <div className="space-y-1">
          <Badge variant={status ?? "default"}>
            {capitalizeFirstAlphabet(status)}
          </Badge>
        </div>
        <div className="space-y-1 flex justify-between">
          <div>
            <h1 className="sm:text-base text-sm font-bold">
              {restaurantNames}
            </h1>
            <p className="font-medium text-xs text-light">
              Cancel reservation 4 people Dec 23, Dec30 5:00-7:00PM, 10:00-11:00
              PM
            </p>
          </div>
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                  <GripHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem
                onClick={() => navigate(`/reservations/add-reservation/${group_id}`)}
                >
                  Edit
                </DropdownMenuItem>
                {status !== "paused" && (
                  <DropdownMenuItem
                    role="button"
                    onClick={() => pauseReservation(group_id)}
                  >
                    Pause
                  </DropdownMenuItem>
                )}
                {status === "paused" && (
                  <DropdownMenuItem
                    role="button"
                    onClick={() => unPauseReservation(group_id)}
                  >
                    Unpause
                  </DropdownMenuItem>
                )}
                <DropdownMenuItem
                  role="button"
                  onClick={() => cancelReservation(group_id)}
                >
                  Cancel
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Index;
