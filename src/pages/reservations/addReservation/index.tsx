import { ReservationForm } from "@/components";
import { ReservationContextProvider } from "@/context/ReservationFomProvider";

const index = () => {
  return (
    <div className="grid  grid-cols-1 sm:grid-cols-2 place-items-center">
      <div className="h-screen w-full bg-[url('@/assets/reservation/reservationform.png')] hidden bg-no-repeat bg-cover sm:block"></div>
      <div className="sm:overflow-y-scroll h-screen">
        <ReservationContextProvider>
          <ReservationForm />
        </ReservationContextProvider>
      </div>
    </div>
  );
};

export default index;
