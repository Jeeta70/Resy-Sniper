import { ReservationForm } from "@/components";
import { ReservationContextProvider } from "@/context/ReservationFomProvider";

const index = () => {
  return (
    <div className="grid  grid-cols-1 sm:grid-cols-2 place-items-center h-dvh ">
      <div className="h-full w-full bg-[url('@/assets/reservation/reservationform.png')] hidden bg-no-repeat bg-cover sm:block"></div>
      <ReservationContextProvider>
        <ReservationForm />
      </ReservationContextProvider>
    </div>
  );
};

export default index;
