import { RestaurantCard } from "@/components";
import SearchAndFilterSection from "../searchAndFilterSection";

const index = () => {
  const topPickResturants = [
    {
      about_description: "",
      address_1: "",
      country: "",
      cover_image_url: "",
      cuisine_type: "",
      locality: "",
      need_to_know_description: "",
      neighborhood: "",
      postal_code: "",
      price: 11,
      region: "",
      restaurant_website: "",
      restuarant_phone_number: "",
      seating_types: [""],
      venue_id: 11,
      venue_name: "",
    },
    {
      about_description: "",
      address_1: "",
      country: "",
      cover_image_url: "",
      cuisine_type: "",
      locality: "",
      need_to_know_description: "",
      neighborhood: "",
      postal_code: "",
      price: 11,
      region: "",
      restaurant_website: "",
      restuarant_phone_number: "",
      seating_types: [""],
      venue_id: 11,
      venue_name: "",
    },
    {
      about_description: "",
      address_1: "",
      country: "",
      cover_image_url: "",
      cuisine_type: "",
      locality: "",
      need_to_know_description: "",
      neighborhood: "",
      postal_code: "",
      price: 11,
      region: "",
      restaurant_website: "",
      restuarant_phone_number: "",
      seating_types: [""],
      venue_id: 11,
      venue_name: "",
    },
    {
      about_description: "",
      address_1: "",
      country: "",
      cover_image_url: "",
      cuisine_type: "",
      locality: "",
      need_to_know_description: "",
      neighborhood: "",
      postal_code: "",
      price: 11,
      region: "",
      restaurant_website: "",
      restuarant_phone_number: "",
      seating_types: [""],
      venue_id: 11,
      venue_name: "",
    },
    {
      about_description: "",
      address_1: "",
      country: "",
      cover_image_url: "",
      cuisine_type: "",
      locality: "",
      need_to_know_description: "",
      neighborhood: "",
      postal_code: "",
      price: 11,
      region: "",
      restaurant_website: "",
      restuarant_phone_number: "",
      seating_types: [""],
      venue_id: 11,
      venue_name: "",
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
