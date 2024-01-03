import Section from "./section";
import SearchAndFilterSection from "./searchAndFilterSection";

const index = () => {
  const restaurantsSections = [
    {
      id: "1",
      title: "Top picks",
      seeAllNavigateTo: "/restaurants/top-picks",
      restaurants: [
        { name: "Ajeet" },
        { name: "Ajey" },
        { name: "Ajey" },
        { name: "Ajey" },
      ],
    },
    {
      id: "2",
      title: "Near You",
      seeAllNavigateTo: "/restaurants/top-picks",
      restaurants: [
        { name: "Ajeet" },
        { name: "Ajey" },
        { name: "Ajey" },
        { name: "Ajey" },
      ],
    },
    {
      id: "3",
      title: "All Restaurants",
      seeAllNavigateTo: "/restaurants/top-picks",
      restaurants: [
        { name: "Ajeet" },
        { name: "Ajey" },
        { name: "Ajey" },
        { name: "Ajey" },
        { name: "Ajey" },
        { name: "Ajey" },
        { name: "Ajey" },
        { name: "Ajey" },
        { name: "Ajey" },
      ],
    },
  ];

  return (
    <div className="w-full h-screen p-10">
      <h1 className="font-bold text-2xl mb-4">Restaurants</h1>
      <SearchAndFilterSection />
      <div>
        {restaurantsSections.map((section) => (
          <Section section={section} key={section.id} />
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
