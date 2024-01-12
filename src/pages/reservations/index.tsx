import { useNavigate } from "react-router-dom";
import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { MyReservationTab } from "@/components";

const Index = () => {
  const navigate = useNavigate();
  const flag = false;

  return (
    <div className="w-full h-screen p-10">
      <div className="flex justify-between">
        <h1 className=" font-bold text-2xl">My Reservations</h1>
        <Button
          variant="primary"
          className="hidden sm:inline-flex"
          onClick={() => navigate("/reservations/add-reservation")}
        >
          <Plus className="mr-3" /> Add Reservation
        </Button>
      </div>
      {flag ? (
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
        <MyReservationTab />
      )}
    </div>
  );
};

export default Index;
