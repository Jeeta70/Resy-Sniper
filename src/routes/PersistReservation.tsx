import { toast } from "@/components/ui/use-toast";
import { UserDetailContext } from "@/context/UserDetailProvider";
import { useGetReservationCount } from "@/features/reservation/reservation";
import { useContext, useEffect } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";

const PersistReservation = () => {
    const { group_id } = useParams();
    const { reservationCounts, isSuccess: countIsLoading } = useGetReservationCount();
    const { subscription_type } = useContext(UserDetailContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (countIsLoading && reservationCounts) {
            const count = reservationCounts?.data?.total_reservations;
            if (count !== undefined) {
                if (count >= 5 && subscription_type === 'standard') {
                    handleExceededLimit();
                } else if (count >= 25 && subscription_type === 'premium') {
                    handleExceededLimit();
                } else {
                    if (group_id) {
                        return navigate(`/reservations/edit-reservation/${group_id}`);
                    }
                    navigate("/reservations/add-reservation");
                }
            }
        }
    }, [countIsLoading, group_id, reservationCounts, subscription_type]);

    const handleExceededLimit = () => {
        if (group_id) {
            navigate(`/reservations/edit-reservation/${group_id}`);
        } else {
            navigate("/reservations");
            toast({ description: "Reservation limit exceeded", variant: "dark" });
        }
    };

    return (
        <>{countIsLoading && <Outlet />}</>
    );
};

export default PersistReservation;
