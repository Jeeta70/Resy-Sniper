import { RestaurantCard } from "@/components";
import SearchAndFilterSection from "../searchAndFilterSection";

const index = () => {
  const topPickResturants = [
    {

      venue_name: "string",
      locality: "string",
      price: 1,
      cover_image_url: "string",
      venue_id:111
    },
    {

      venue_name: "string",
      locality: "string",
      price: 1,
      cover_image_url: "string",
      venue_id: 111
    },
    {

      venue_name: "string",
      locality: "string",
      price: 1,
      cover_image_url: "string",
      venue_id: 111
    },
    {

      venue_name: "string",
      locality: "string",
      price: 1,
      cover_image_url: "string",
      venue_id: 111
    },
    {
      id: 4,
      venue_name: "string",
      locality: "string",
      price: 1,
      cover_image_url: "string",
      venue_id: 111
    },
  ];

  return (
    <div className="w-full h-screen p-10">
      <h1 className="font-bold text-3xl mb-4">Top pick</h1>
      <SearchAndFilterSection />
      <div className="grid grid-cols-4 gap-4 mt-4">
        {topPickResturants.map((restaurant, i) => (
          <RestaurantCard
            restaurant={restaurant}
            key={i}
            layout={{ displayFooter: true }}
          />
        ))}
      </div>
      {/* <div>
        <div className="flex justify-between">
          <h1 className="my-4">Top Picks</h1>
          <h1 className="my-4 text-[#EA3A4B]">See all</h1>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {topPicks.map((restaurant, i) => (
            <RestaurantCard key={i} />
          ))}
        </div>
      </div>
      <div>
        <div className="flex justify-between">
          <h1 className="my-4">Near You</h1>
          <h1 className="my-4 text-[#EA3A4B]">See all</h1>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {nearYou.map((restaurant, i) => (
            <RestaurantCard key={i} />
          ))}
        </div>
      </div>
      <div>
        <h1 className="my-4">All Restaurants</h1>
        <div className="grid grid-cols-4 gap-4">
          {allResturants.map((restaurant, i) => (
            <RestaurantCard key={i} />
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default index;
