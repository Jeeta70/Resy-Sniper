import { AddReservationForm } from "@/components";

const index = () => {
  return (
    <div className="grid  grid-cols-1 sm:grid-cols-2 place-items-center h-dvh">
      <div className="h-full w-full bg-[url('login.png')] hidden sm:block"></div>
      <AddReservationForm/>
    </div>
  );
};

export default index;
