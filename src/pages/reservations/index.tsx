import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const index = () => {
  return (
    <div className="w-full h-screen p-10">
      <div className="flex justify-between">
        <h1 className=" font-bold text-3xl">My Reservations</h1>
        <Button variant="primary" className="hidden sm:inline-flex">
          <Plus className="mr-3" /> Add Reservation
        </Button>
      </div>
      <div className="flex flex-col justify-center items-center h-5/6  text-center text-[#12171A] gap-5 ">
        <img src="./Reservation.png" />
        <p>
          No reservations here yet. <br /> Click "Add Reservation" button to add
          me
        </p>
        <Button variant="primary" className="sm:hidden">
          <Plus className="mr-3" /> Add Reservation
        </Button>
      </div>
    </div>
  );
};

export default index;
