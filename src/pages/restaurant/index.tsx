import { MapPin } from "lucide-react";
import { Carousel, RestaurantLocationCard } from "@/components";

const index = () => {
  const slides = [
    "https://i.ibb.co/ncrXc2V/1.png",
    "https://i.ibb.co/B3s7v4h/5.png",
    "https://i.ibb.co/yg7BSdM/4.png",
    "https://i.ibb.co/yg7BSdM/7.png",
  ];
  return (
    <>
      <main className="pt-8 max-h-screen sm:overflow-y-hidden">
        <div className="mx-auto max-w-screen-xl px-8 ">
          <header className="mb-4 lg:mb-6">
            <p className="text-2xl font-bold"> The Bar Room at the Beekman</p>
          </header>
          <div className="col-span-2 block sm:hidden ">
            <Carousel autoSlide={false}>
              {slides.map((s, i) => (
                <img src={s} alt="" key={i} className="w-full rounded-lg " />
              ))}
            </Carousel>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-2">
            <article className="format format-sm  col-span-3 sm:p-10 ">
              <div className="flex justify-between">
                <p className="my-3 text-xs font-medium text-light ">$$$$</p>
                <p className="my-3  text-xs font-medium text-light">
                  <MapPin className="inline-block" /> Prospective height
                </p>
              </div>
              <h4 className="font-bold text-sm mb-3">Why We Like it</h4>
              <p className="text-xs leading-5 font-normal text-light mb-3">
                This is not just any hotel lobby bar. There’s nothing better
                than nestling yourself into one of the plush velvet or leather
                armchairs, martini in hand, and gazing up at that incredible
                nine-floor atrium. And Tom Colicchio’s classic small bites never
                disappoint.
              </p>
              <h4 className="font-bold text-sm mb-3">Need to know</h4>
              <p className="text-xs leading-5 font-normal text-light mb-3">
                Tickets to our Madd Hatter's NYE Ball are on sale now!
                Additional dinner tickets are available on the Temple Court Resy
                page. Weekend brunch is served alongside jazz from The Kate
                Quartet on Saturdays and the Temple Court Quartet on Sundays.
              </p>
              <h4 className="font-bold text-sm mb-4">
                About The Bar Room at The Beekman
              </h4>
              <p className="text-xs leading-5 font-normal text-light mb-3">
                Where locals & visitors alike can experience a version of old
                New York centered around Tom Colicchio's signature cooking style
                & the inventive handcrafted cocktails created by our resident
                bar team.Located beneath a stunning, nine-story Victorian era
                atrium, The Bar Room is set with rich, jewel-toned furnishings
                delivering stylish ambiance for celebratory libations and
                indelible dining. Our menus are the perfect match for our
                collection of classic and modern cocktail creations. Timeless
                culinary favorites include locally sourced Oysters on the Half
                Shell, Caramelized Onion Dip & Tom Colicchio's Signature Wagyu
                Burger. Classics like our Brioche French Toast join the weekend
                lineup at brunch, and our indulgent desserts from Executive
                Pastry Chef, Gian Martinez are available nightly. The Bar Room
                at The Beekman is open all day serving breakfast, dinner, lunch
                & weekend brunch. On Sundays, brunch is served alongside jazz
                from the Temple Court Quartet. Reservations are requested for
                all visits.
              </p>
            </article>

            <div className="col-span-2  ">
              <Carousel autoSlide={false} className="hidden sm:block">
                {slides.map((s, i) => (
                  <img src={s} alt="" key={i} className="w-full rounded-lg " />
                ))}
              </Carousel>
              <div className="mt-3">
                <RestaurantLocationCard restaurant={{ name: "Ajeet" }} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default index;
