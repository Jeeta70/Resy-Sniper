import { ChevronLeft, MapPin } from "lucide-react";
import { RestaurantLocationCard } from "@/components";
import { useGetSingleRestaurant } from "@/features/restaurant/restaurant";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
// import { useRestaurantContext } from "@/context/SelectRestaurantForReservationProvider";
// import { IRestaurant } from "@/types/restaurants";
// import { useReservationContext } from "@/context/ReservationFomProvider";

const Index = () => {
  const navigate = useNavigate()
  const { singleResturant, isLoading, isSuccess } = useGetSingleRestaurant();

  // const { reservationFormState: { selectedResturantsForReservation } } = useReservationContext();
  // console.log("thisis=>", selectedResturantsForReservation);


  const restaurant = useMemo(() => {
    if (!isLoading && isSuccess) {
      return singleResturant?.data;
    }
  }, [isLoading, isSuccess, singleResturant]);

  

  // const slides = [
  //   "https://i.ibb.co/ncrXc2V/1.png",
  //   "https://i.ibb.co/B3s7v4h/5.png",
  //   "https://i.ibb.co/yg7BSdM/4.png",
  //   "https://i.ibb.co/yg7BSdM/7.png",
  // ];

  return (
    <>
      {isLoading ? (
        ""
      ) : (
        <main className="pt-1 max-h-auto sm:overflow-y-scroll ">
          <div className="mx-auto max-w-screen-xl px-8 ">
            <div className="col-span-2 block sm:hidden ">
              {/* <Carousel autoSlide={false}>
                {slides.map((s, i) => (
                  <img src={s} alt="" key={i} className="w-full rounded-lg " />
                ))}
              </Carousel> */}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-5 gap-10 w-[100%]">
              <article className="format format-sm  col-span-3 sm:p-10 ">
                <div className="text-light cursor-pointer" role="button" onClick={() => navigate("/restaurants")} >
                  <ChevronLeft className="inline" size={20} />
                  <span className="font-semi-bold text-xs">Back</span>
                </div>
                <header className="mb-4 lg:mb-6">
                  <p className="text-2xl font-bold"> {restaurant.venue_name}</p>
                </header>
                <div className="flex justify-between">
                  <p className="my-3 text-xs font-medium text-light ">$$$$</p>
                  <p className="my-3  text-xs font-medium text-black">
                      <MapPin className="inline-block" /> Prospective height {restaurant.locality}
                  </p>
                </div>
                <h4 className="font-bold text-sm mb-3">Why We Like it</h4>
                <p className="text-xs leading-5 font-normal text-light mb-3">
                  This is not just any hotel lobby bar. There’s nothing better
                  than nestling yourself into one of the plush velvet or leather
                  armchairs, martini in hand, and gazing up at that incredible
                  nine-floor atrium. And Tom Colicchio’s classic small bites
                  never disappoint.
                </p>
                <h4 className="font-bold text-sm mb-3">Need to know</h4>
                <p className="text-xs leading-5 font-normal text-light mb-3">
                  {restaurant.need_to_know_description}
                </p>
                <h4 className="font-bold text-sm mb-4">
                  About {restaurant.venue_name}
                </h4>
                <p className="text-xs leading-5 font-normal text-light mb-3">
                  {restaurant.about_description}
                </p>
              </article>

              <div className="col-span-2 sm:w-[70%] mt-20">
                {/* <Carousel autoSlide={false} className="hidden sm:block">
                  {slides.map((s, i) => (
                    <img
                      src={s}
                      alt=""
                      key={i}
                      className="w-full rounded-lg "
                    />
                  ))}
                </Carousel> */}
                <div className="mt-5">
                  <RestaurantLocationCard
                    restaurant={restaurant}
                  />
                </div>
              </div>
            </div>
          </div>
        </main>
      )}
    </>
  );
};

export default Index;
