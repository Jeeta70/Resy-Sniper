import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { IReservation } from "@/types/reservations";
import { useNavigate } from "react-router-dom";
import {
  capitalizeFirstAlphabet,
  convertTo12HourFormat,
} from "@/utils/healper";
import {
  useCancelReservation,
  usePauseReservation,
  useUnPauseReservation,
} from "@/features/reservation/reservation";
import { getToken } from "@/utils/healper";
import { baseUrl } from "@/config/baseUrl";
import axios from "axios";

// Custom Hook for Fetching Unique Dates
const useFetchUniqueDates = (group_id: string) => {
  const [uniqueDates, setUniqueDates] = useState(''); // Now expecting a string
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDates = async () => {
      setIsLoading(true);
      try {
        const accessToken = getToken("access_token");
        const response = await axios.post(
          `${baseUrl}/api/get_unique_dates_by_group`,
          { group_id },
          { headers: { Authorization: `Bearer ${accessToken}` } }
        );
        // Assuming the backend sends the data in the format { unique_dates: "date1, date2, date3" }
        setUniqueDates(response.data.unique_dates); // Directly set the string
      } catch (err) {
        console.error(err);
        setError('Failed to fetch unique dates'); // Set error message
      } finally {
        setIsLoading(false);
      }
    };

    if (group_id) {
      fetchDates();
    }
  }, [group_id]);

  return { uniqueDates, isLoading, error };
};


const Index = ({
  reservation,
  status,
  groupId: group_id,
}: {
  reservation: IReservation[];
  status: string;
  groupId: string;
}) => {
  const { pauseReservation } = usePauseReservation();
  const { unPauseReservation } = useUnPauseReservation();
  const { cancelReservation } = useCancelReservation();
  const navigate = useNavigate();
  const { uniqueDates } = useFetchUniqueDates(group_id);
  const restaurantNames = reservation
    .slice(0, 6)
    .map((restaurant) => restaurant.restaurant_name)
    .join(",");
  const snipe_type =
    reservation[0].snipe_type === "cancel"
      ? "Cancel resevation"
      : "Release reservation";
  const restaurantImage = reservation.map((restaurant, i, reservationArray) => {
    if (i > 4) return;
    if (reservationArray.length === 1)
      return (
        <img
          style={{ objectFit: 'cover' }}
          key={i}
          className="rounded-tl-lg rounded-tr-lg sm:rounded-l-lg sm:rounded-tr-none h-40 sm:h-40 w-full"
          src={restaurant.venue_data.cover_image_url}
          alt=""
        />
      );
    if (reservationArray.length === 2)
      return (
        <img
          style={{ objectFit: 'cover' }}
          key={i}
          className={`${i == 0 && "rounded-l-lg"} ${i == 1 && "w-[100%]"
            } sm:h-full h-40 `}
          src={restaurant.venue_data.cover_image_url}
          alt=""
        />
      );
    if (reservationArray.length === 3)
      return (
        <img
          style={{ objectFit: 'cover' }}
          className={`${i == 0 && "rounded-l-lg sm:h-full sm:row-span-3"} ${i == 1 && "sm:h-16 sm:col-span-1"
            } ${i == 2 && "sm:h-16"} h-40`}
          src={restaurant.venue_data.cover_image_url}
          alt=""
        />
      );
    if (reservationArray.length === 4)
      return (
        <img
          style={{ objectFit: 'cover' }}
          key={i}
          className={`${i == 0 && "rounded-tl-lg"} ${i == 1 && "sm:rounded-tr-none"
            } ${i == 2 && "rounded-tr-lg sm:rounded-bl-lg"} ${i == 3 && "hidden sm:block"
            } h-32 sm:h-full w-full`}
          src={restaurant.venue_data.cover_image_url}
          alt=""
        />
      );
    if (i < 4)
      return (
        <>
          {" "}
          <img
            style={{ objectFit: 'cover' }}
            key={i}
            className={`${i == 0 && "rounded-tl-lg"} ${i == 1 && "sm:rounded-tr-none"
              } ${i == 2 && "sm:rounded-bl-lg opacity-[70%] sm:opacity-[100%]"} ${i == 3 && "hidden sm:block opacity-[70%] relative"
              } h-40 sm:h-20 w-full `}
            src={restaurant.venue_data.cover_image_url}
            alt=""
          />
          {i === 3 && (
            <>
              <p className="absolute right-0 left-32 bottom-8 text-white text-sm font-medium sm:block hidden">
                {"+"}
                {reservationArray.length - 4}
              </p>{" "}
              <p className="absolute right-12 top-20 text-white text-base font-medium sm:hidden block">
                {"+"}
                {reservationArray.length - 3}
              </p>
            </>
          )}
        </>
      );
  });
  // const startTime = new Date(`2000-01-01T${reservation[0].start_time}`);
  // const endTime = new Date(`2000-01-01T${reservation[0].end_time}`);
  const formattedStartTime = convertTo12HourFormat(reservation[0].start_time);
  const formattedEndTime = convertTo12HourFormat(reservation[0].end_time);

  const showOptionToValidStatus = () => {
    if (status === "completed" || status === "canceled") {
      return <></>;
    }
    return <div className="absolute top-2 sm:top-auto right-2 bg-white rounded-full">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <MoreVertical className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem
            onClick={() =>
              navigate(`/reservations/edit-reservation/${group_id}`)
            }
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
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  };

  return (
    <Card className="sm:flex h-auto mb-5 relative">
      {reservation.length === 1 && (
        <div className="sm:w-56"> {restaurantImage} </div>
      )}
      {reservation.length === 2 && (
        <div className="sm:w-56 sm:grid sm:grid-cols-2 grid grid-cols-2 gap-[1px]">
          {" "}
          {restaurantImage}{" "}
        </div>
      )}
      {reservation.length === 3 && (
        <div className="sm:w-56 sm:grid sm:grid-rows-2 sm:grid-flow-col grid sm:grid-cols-2 grid-cols-3 gap-1 sm:gap-[1px]">
          {" "}
          {restaurantImage}{" "}
        </div>
      )}
      {reservation.length === 4 && (
        <div className="grid grid-cols-3 sm:grid-cols-2 gap-1 sm:w-56">
          {" "}
          {restaurantImage}{" "}
        </div>
      )}
      {reservation.length > 5 && (
        <div className="sm:grid grid grid-cols-3 sm:grid-cols-2 gap-1 sm:w-56">
          {" "}
          {restaurantImage}{" "}
        </div>
      )}

      <CardContent
        className={`space-y-2 my-2 w-full ${reservation.length > 5 ? "py-2" : ""
          }`}
      >
        <div className="space-y-1 pt-2 sm:pt-0 flex">
          {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
          {/* @ts-ignore */}
          <Badge variant={status} className="rounded-[4px]">
            {capitalizeFirstAlphabet(status)}
          </Badge>
          <div className="ml-auto text-xs font-semibold sm:hidden">
            {snipe_type}
          </div>
        </div>

        <div className="space-y-1 flex justify-between">
          <div>
            <h1 className="sm:text-base text-sm font-bold">
              {restaurantNames}
              {reservation.length > 6 && "......."}
            </h1>
            <p className="font-medium text-xs text-light ">
              <span className=" hidden sm:block">{snipe_type}</span>
              <span>
                {reservation[0]?.party_size} people{" "}
                | {uniqueDates} | {formattedStartTime} -{" "}
                {formattedEndTime}
              </span>
            </p>
          </div>
          {showOptionToValidStatus()}
        </div>
      </CardContent>
    </Card>
  );
};

export default Index;
