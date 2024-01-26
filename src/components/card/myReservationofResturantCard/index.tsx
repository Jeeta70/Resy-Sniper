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
import { useCancelReservation, usePauseReservation } from "@/features/reservation/reservation";

const Index = ({ reservation }: { reservation: IReservation }) => {
  const { pauseReservation } = usePauseReservation()
  const { cancelReservation } = useCancelReservation()
  const navigate = useNavigate()
  const { venue_id, group_id, status } = reservation;

  return (
    <Card className="flex sm:h-[20vh] h-auto  my-5">
      <div>
        <img
          className="rounded-l-lg h-full"
          src="../restaurant/restaurant.png"
          alt=""
        />
      </div>
      <CardContent className="space-y-2 my-auto w-full">
        <div className="space-y-1">
          <Badge variant={status ?? "default"}>{capitalizeFirstAlphabet(status)}</Badge>
        </div>
        <div className="space-y-1 flex justify-between">
          <div>
            <h1 className="sm:text-base text-sm font-bold">
              {reservation.restaurant_name}
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
                  onClick={() => navigate(`/reservations/add-reservation/${venue_id}/${group_id}`)}
                >
                  Edit
                </DropdownMenuItem>
                {status !== "paused" && <DropdownMenuItem role="button" onClick={() => pauseReservation(group_id)}>Pause</DropdownMenuItem>}
                {status === "paused" && <DropdownMenuItem role="button" onClick={() => pauseReservation(group_id)}>Unpause</DropdownMenuItem>}
                <DropdownMenuItem role="button" onClick={() => cancelReservation(group_id)} >Cancel</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Index;
