import { RestaurantCard } from "@/components";
import { useNavigate } from "react-router-dom";

type Restaurants = {
  name: string;
};

interface Props {
  section: {
    id: string;
    title: string;
    seeAllNavigateTo:string;
    restaurants: Restaurants[];
  };
}

const Section = ({ section }: Props) => {
  const navigate = useNavigate()
  return (
    <div>
      <div className="flex justify-between">
        <h1 className="my-4 text-lg font-semibold	">{section.title}</h1>
        {section.restaurants.length === 4 && (
          <h1
            className="my-4 text-[#EA3A4B]"
            role="button"
            onClick={() => navigate(section.seeAllNavigateTo)}
          >
            See all
          </h1>
        )}
      </div>
      <div className="grid grid-cols-4 gap-4">
        {section.restaurants.map((restaurant, i) => (
          <RestaurantCard key={i} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Section;
